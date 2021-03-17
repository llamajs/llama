import { expect } from 'chai';
import * as mockFs from 'mock-fs';
import * as fs from 'fs';
import { FileTransport } from '../file/file.transport';
import { LogMessage } from '../../messages/logMessage';
import {
    syslogSeverityLevels,
    IbmTivoliSeverityLevels,
} from '../../severityLevels/severityLevels';
import { CsvFormat } from '../../formats/formats';
import { FileTransportConfig } from './file.transport.config';

const fileName: string = 'test_file_transport.txt';

const fileTransportConfigNewLine: FileTransportConfig = {
    fileName,
    noNewLine: false,
    format: new CsvFormat(),
    levels: [
        syslogSeverityLevels[6],
        syslogSeverityLevels[1],
    ],
};

const fileTransportConfigNoNewLine: FileTransportConfig = {
    fileName,
    format: new CsvFormat(),
    noNewLine: true,
    levels: [
        syslogSeverityLevels[6],
        syslogSeverityLevels[1],
    ],
};

const validAlertMessage: LogMessage = {
    name: 'validAlert',
    severity: syslogSeverityLevels[6],
};

const validInfoMessage: LogMessage = {
    name: 'validInfo',
    severity: syslogSeverityLevels[1],
};

const invalidMessage: LogMessage = {
    name: 'invalid',
    severity: IbmTivoliSeverityLevels[0],
};

describe('File Transport Module', function () {
    describe('#pass()', function () {

        let fileTransport: FileTransport;

        context('When all values are valid', function () {
            context('On noNewLine set to false', function () {
                beforeEach(function () {
                    fileTransport = new FileTransport(fileTransportConfigNewLine);
                    mockFs();
                });

                it(
                    'Should write a single messages to the file with newline',
                    async function () {
                        await fileTransport.send(validAlertMessage);
                        const fileString = fs.readFileSync(fileName, 'UTF8');
                        expect(fileString)
                            .to
                            .equal(new CsvFormat().getMessage(validAlertMessage) + '\n');
                    });

                /*
                    This test case works on the file system, however, mock-fs
                    has a problem with promises since node > 10.4.1
                    Issue number 245: https://github.com/tschaub/mock-fs/issues/245
                */
                /*
                 it(
                     'Should write multiple messages in seperate lines in the file',
                     async function () {
                         await fileTransport.send(validInfoMessage);
                         await fileTransport.send(validAlertMessage);

                         const fileStringArray = fs.readFileSync(fileName, 'UTF8')
                             .toString()
                             .split('\n');

                         expect(fileStringArray[0])
                             .to
                             .equal(new CsvFormat().getMessage(validInfoMessage));
                         expect(fileStringArray[1])
                             .to
                             .equal(new CsvFormat().getMessage(validAlertMessage));
                     });
                     */

                afterEach(function () {
                    mockFs.restore();
                });
            });

            context('On noNewLine set to true', function () {
                beforeEach(function () {
                    fileTransport = new FileTransport(fileTransportConfigNoNewLine);
                    mockFs();
                });

                it(
                    'Should write a single messages to the file without newline',
                    async function () {
                        await fileTransport.send(validAlertMessage);
                        const fileString = fs.readFileSync(fileName, 'UTF8');
                        expect(fileString)
                            .to
                            .equal(new CsvFormat().getMessage(validAlertMessage));
                    });

                /*
                    This test case works on the file system, however, mock-fs
                    has a problem with promises since node > 10.4.1
                    Issue number 245: https://github.com/tschaub/mock-fs/issues/245
                */
                /*
                 it(
                     'Should write multiple messages in seperate lines in the file',
                     async function () {
                         await fileTransport.send(validInfoMessage);
                         await fileTransport.send(validAlertMessage);

                         const fileString = fs.readFileSync(fileName, 'UTF8');

                         expect(fileString)
                             .to
                             .equal(new CsvFormat().getMessage(validInfoMessage) +
                                 new CsvFormat().getMessage(validAlertMessage));
                     });
                     */

                afterEach(function () {
                    mockFs.restore();
                });
            });
        });

        context('When values are invalid', function () {
            context('On noNewLine set to true', function () {
                beforeEach(function () {
                    fileTransport = new FileTransport(fileTransportConfigNoNewLine);
                    mockFs({ 'test_file_transport.txt': '' });
                });

                it(
                    'Should not send the message if the severity is not compatible',
                    async function () {
                        await fileTransport.send(invalidMessage);
                        const fileString = fs.readFileSync(fileName, 'UTF8');
                        expect(fileString).to.equal('');
                    });

                afterEach(function () {
                    mockFs.restore();
                });
            });

            context('On noNewLine set to false', function () {
                beforeEach(function () {
                    fileTransport = new FileTransport(fileTransportConfigNewLine);
                    mockFs({ 'test_file_transport.txt': '' });
                });

                it(
                    'Should not send the message if the severity is not compatible',
                    async function () {
                        await fileTransport.send(invalidMessage);
                        const fileString = fs.readFileSync(fileName, 'UTF8');
                        expect(fileString).to.equal('');
                    });

                afterEach(function () {
                    mockFs.restore();
                });
            });
        });
    });
});

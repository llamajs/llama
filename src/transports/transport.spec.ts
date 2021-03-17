import { expect } from 'chai';
import { Transport } from './transport';
import { LogMessage } from '../messages/logMessage';
import {
    syslogSeverityLevels,
    IbmTivoliSeverityLevels,
} from '../severityLevels/severityLevels';

class TransportMock extends Transport {
    isPassed: boolean = false;

    pass(message: string, messageConfig?: any) {
        this.isPassed = true;
    }
}

const validMessage: LogMessage = {
    name: 'valid',
    severity: syslogSeverityLevels[6],
};

const invalidMessage: LogMessage = {
    name: 'invalid',
    severity: IbmTivoliSeverityLevels[0],
};

describe('Transport Module', function () {
    describe('#send()', function () {
        let transportMock: TransportMock;

        context('When all values are valid', function () {
            beforeEach(function () {
                transportMock = new TransportMock();
            });

            it('Should send the message', function () {
                expect(transportMock.isPassed).to.be.false;
                transportMock.send(validMessage);
                expect(transportMock.isPassed).to.be.true;
            });
        });

        context('When values are invalid', function () {
            beforeEach(function () {
                transportMock = new TransportMock();
            });

            it(
                'Should not send the message if the severity is not compatible',
                function () {
                    expect(transportMock.isPassed).to.be.false;
                    transportMock.send(invalidMessage);
                    expect(transportMock.isPassed).to.be.false;
                });
        });
    });
});

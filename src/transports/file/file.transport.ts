import * as fs from 'fs';
import { Transport } from '../../transports/transport';
import { FileTransportConfig } from './file.transport.config';

export class FileTransport extends Transport {
    config!: FileTransportConfig;

    constructor(config: FileTransportConfig) {
        super();
        this.configure(config);
    }

    protected pass(message: string): void {
        fs.appendFile(this.config.fileName, `${message}\n`, (error) => {
            if (error) {
                throw new Error(`[FileTransport]: ${error.message}`);
            }
        });
    }
}
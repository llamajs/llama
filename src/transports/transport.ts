import { LogMessage } from '../messages/logMessage';
import { TransportConfig } from './transportConfig';
import { defaultTransportConfig } from './default.transport.config';

export abstract class Transport {
    config!: TransportConfig;

    constructor(config?: TransportConfig) {
        this.configure(config || defaultTransportConfig);
    }

    public configure(config: TransportConfig): void {
        this.config = config;
    }

    public send(message: LogMessage, messageConfig?: any) {
        if (this.config.levels.includes(message.severity)) {
            return this.pass(this.config.format.getMessage(message), messageConfig);
        }
    }

    public close(): void {}

    protected abstract pass(message: string, messageConfig?: any): Promise<any> | void;
}

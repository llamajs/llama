import { LogMessage } from '../messages/logMessage';
import { formatConfig } from './format.config';

export abstract class Format {
    protected config: formatConfig;

    constructor(config?: formatConfig) {
        this.config = config || {};
    }

    abstract getMessage(logMessage: LogMessage): string;
}

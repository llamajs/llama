import { LogMessage } from './logMessage';

export interface Format {
    getMessage(logMessage: LogMessage): string;
}

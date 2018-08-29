import { LogMessage } from '../messages/logMessage';

export interface Format {
    getMessage(logMessage: LogMessage): string;
}

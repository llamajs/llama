import { LogMessage } from '../models/logMessage';

export interface Format {
    getMessage(logMessage: LogMessage): string;
}

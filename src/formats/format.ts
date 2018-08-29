import { LogMessage } from '../messages/logMessage';
export abstract class Format {

export interface Format {
    getMessage(logMessage: LogMessage): string;
}

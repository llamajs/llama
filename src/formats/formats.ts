import { LogMessage } from '../models/logMessage';
import { Format } from './format';

export class JsonFormat implements Format {
    getMessage(logMessage: LogMessage) {
        return JSON.stringify(logMessage);
    }
}

export class LineFormat implements Format {
    getMessage(logMessage: LogMessage) {
        return ((<any>Object).values(logMessage)).join(' - ');
    }
}

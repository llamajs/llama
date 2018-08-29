import { LogMessage } from '../messages/logMessage';
import { Format } from './format';
import { formatConfig } from './format.config';

export class JsonFormat extends Format {
    getMessage(logMessage: LogMessage) {
        const message: string = JSON.stringify(logMessage);
        const rowDeli: string = this.config.rowDelimiter || '';

        return `${message}${rowDeli}`;
    }
}

export class LineFormat extends Format {
    getMessage(logMessage: LogMessage) {
        const message: string = ((<any>Object).values(logMessage))
            .join(this.config.columnDelimiter || ',');
        const rowDeli: string = this.config.rowDelimiter || '';

        return `${message}${rowDeli}`;
    }
}

export class CsvFormat extends LineFormat {
    constructor(config: formatConfig) {
        super(config);
        this.config.columnDelimiter = ',';
    }
}

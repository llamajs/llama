import { JsonFormat } from '../formats/formats';
import { defaultSeverityLevels } from './severityLevels';

export const defaultLoggerConfig = {
    transports: [],
    levels: (<any>Object).values(defaultSeverityLevels),
    format: new JsonFormat,
};

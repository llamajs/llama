import { JsonFormat } from '../formats/formats';
import { syslogSeverityLevels } from '../severityLevels/severityLevels';

export const defaultLoggerConfig = {
    transports: [],
    levels: syslogSeverityLevels,
    format: new JsonFormat,
};

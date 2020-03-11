import { JsonFormat } from '../formats/formats';
import { syslogSeverityLevels } from '../severityLevels/severityLevels';
import { ConsoleTransport } from '../transports/console.transport';

export const defaultLoggerConfig = {
    transports: [new ConsoleTransport()],
    levels: syslogSeverityLevels,
    format: new JsonFormat,
};

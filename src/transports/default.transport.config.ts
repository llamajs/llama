import { syslogSeverityLevels } from '../severityLevels/severityLevels';
import { LineFormat } from '../formats/formats';
import { TransportConfig } from './transportConfig';

export const defaultTransportConfig: TransportConfig = {
    levels: (<any>Object).values(syslogSeverityLevels),
    format: new LineFormat,
};

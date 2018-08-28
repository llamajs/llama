import { defaultSeverityLevels } from '../severityLevels/severityLevels';
import { LineFormat } from '../formats/formats';
import { TransportConfig } from './transportConfig';

export const defaultTransportConfig: TransportConfig = {
    levels: (<any>Object).values(defaultSeverityLevels),
    format: new LineFormat,
};

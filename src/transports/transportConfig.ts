import { Format } from '../formats/format';
import { SeverityLevel } from '../severityLevels/severityLevels';

export interface TransportConfig {
    levels: SeverityLevel[];
    format: Format;
}

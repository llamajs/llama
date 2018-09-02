import { SeverityLevel } from '../severityLevels/severityLevels';

export interface LogMessage {
    severity: SeverityLevel;
    name: string;
    [key: string]: any; // Can assign own properties to the class
}

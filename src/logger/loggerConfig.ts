import { Transport } from '../transports/transport';
import { SeverityLevels } from '../severityLevels/severityLevels';

export type LoggerConfig = {
    transports: Transport[];
    levels: SeverityLevels;
};

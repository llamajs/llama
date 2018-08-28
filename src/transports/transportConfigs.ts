import { defaultSeverityLevels } from '../defaults/severityLevels';
import { LineFormat } from '../defaults/formats';
import { TransportConfig } from '../models/transportConfig';

export const defaultTransportConfig: TransportConfig = {
    levels: (<any>Object).values(defaultSeverityLevels),
    format: new LineFormat,
};

export interface RabbitMqConfig extends TransportConfig {
    port: number;
    exchange: string;
    exchanegType: string;
    durable: boolean;
    username: string;
    password: string;
    host: string;
    persistent: boolean;
}

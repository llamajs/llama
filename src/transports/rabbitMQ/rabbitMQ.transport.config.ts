import { TransportConfig } from '../../transports/transportConfig';

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
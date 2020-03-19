import { TransportConfig } from '../../transports/transportConfig';
import * as amqp from 'amqplib';

export interface RabbitMqConfig extends TransportConfig {
    port: number;
    exchange: {
        name: string;
        type: string;
        options?: amqp.Options.AssertExchange
    }
    username: string;
    password: string;
    host: string;
    persistent: boolean;
}

import { Transport } from '../models/transport';
import * as amqp from 'amqplib';
import { RabbitMqConfig } from './transportConfigs';
import { RabbitMqMessageConfig } from './rabbitMQ.message.config';

export class RabbitMqTransport extends Transport {
    amqpConnection!: amqp.Connection;
    amqpChannel!: amqp.Channel;
    config!: RabbitMqConfig;

    constructor(config: RabbitMqConfig) {
        super();
        this.configure(config);
    }

    private async connect() {
        const connection = await amqp.connect(
            `amqp://${this.config.username}:${this.config.password}@${this.config.host}`);
        connection.on('error', (error) => {
            if (error.message !== 'Connection closing') {
                throw new Error(`[RabbitMQ] ${error.message}`);
            }
        });

        this.amqpConnection = connection;

        return connection;
    }

    private async startPublisher() {
        if (!this.amqpConnection) {
            throw new Error('[RabbitMQ]: connection is not open');
        } else {
            const channel = await this.amqpConnection.createChannel();

            channel.assertExchange(
                this.config.exchange,
                this.config.exchanegType,
                { durable: true });

            channel.on('error', (error) => {
                throw new Error(`[RabbitMQ] channel error: ${error.message}`);
            });

            this.amqpChannel = channel;
        }
    }

    private async publish(message: string, routingKey?: string) {
        if (!this.amqpConnection) {
            await this.connect();
        }

        if (!this.amqpChannel) {
            await this.startPublisher();
        }

        try {
            this.amqpChannel.publish(
                this.config.exchange,
                routingKey || '',
                Buffer.from(message),
                { persistent: this.config.persistent });

        } catch (error) {
            throw new Error(`[RabbitMQ]: ${error.message}`);
        }

    }

    pass(message: string, messageConfig: RabbitMqMessageConfig): void {
        this.publish(message, messageConfig.routingKey);
    }

    async configure(config: RabbitMqConfig) {
        this.config = config;
    }
}

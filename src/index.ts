import { Logger } from './logger/logger';
import { ConsoleTransport } from './transports/console.transport';
import { defaultSeverityLevels } from './severityLevels/severityLevels';
import { LineFormat, JsonFormat, CsvFormat } from './formats/formats';
import { LogMessage } from './messages/logMessage';
import { LoggerConfig } from './logger/loggerConfig';
import { Transport } from './transports/transport';
import { RabbitMqTransport } from './transports/rabbitMQ/rabbitMQ.transport';
import { RabbitMqConfig } from './transports/rabbitMQ/rabbitMQ.transport.config';
import { RabbitMqMessageConfig } from './transports/rabbitMQ/rabbitMQ.message.config';

const transports: Transport[] = [];
transports.push(new ConsoleTransport({
    levels: [defaultSeverityLevels.Info, defaultSeverityLevels.Error],
    format: new CsvFormat,
}));

transports.push(new RabbitMqTransport({
    durable: false,
    exchanegType: 'topic',
    exchange: 'llamaLogs',
    format: new JsonFormat,
    host: 'localhost',
    levels: [defaultSeverityLevels.Info, defaultSeverityLevels.Error],
    password: 'guest',
    persistent: false,
    port: 15672,
    username: 'guest',

} as RabbitMqConfig));

const loggerConfig: LoggerConfig = {
    transports,
    levels: (<any>Object).values(defaultSeverityLevels),
};

const logger: Logger = new Logger(loggerConfig);
const message: LogMessage = {
    severity: defaultSeverityLevels.Info,
    name: 'test',
    description: 'A not very helpful description',
};

const messageConfig: RabbitMqMessageConfig = {
    routingKey: `${message.severity}.${message.name}`,
};

logger.log(message, messageConfig);

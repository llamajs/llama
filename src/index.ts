import { Logger } from './models/logger';
import { ConsoleTransport } from './transports/console.transport';
import { defaultSeverityLevels } from './defaults/severityLevels';
import { LineFormat, JsonFormat } from './formats/formats';
import { LogMessage } from './models/logMessage';
import { LoggerConfig } from './models/loggerConfig';
import { Transport } from './models/transport';
import { RabbitMqTransport } from './transports/rabbitMQ.transport';
import { RabbitMqConfig } from './transports/transportConfigs';
import { RabbitMqMessageConfig } from './transports/rabbitMq.message.config';

const transports: Transport[] = [];
transports.push(new ConsoleTransport({
    levels: [defaultSeverityLevels.Info, defaultSeverityLevels.Error],
    format: new LineFormat,
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
const message: LogMessage = new LogMessage(defaultSeverityLevels.Info, 'test');
logger.log(message, { routingKey: 'a.b.c' } as RabbitMqMessageConfig);

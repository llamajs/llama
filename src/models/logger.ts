import { LogMessage } from './logMessage';
import { LoggerConfig } from './loggerConfig';
import { defaultLoggerConfig } from '../defaults/loggerConfigs';

export class Logger {
    private config!: LoggerConfig;

    constructor(config?: LoggerConfig) {
        this.configure(config || defaultLoggerConfig);
    }

    public configure(config: LoggerConfig) {
        if (this.isConfigValid(config)) {
            this.config = config;
        } else {
            throw new Error(`[Invalid Logger Config]:
                            Transport includes levels that the logger do not have`);
        }
    }

    private isConfigValid(config: LoggerConfig): boolean {
        for (let transportIndex = 0; transportIndex < config.transports.length;
            transportIndex++) {
            const transportLevels = config.transports[transportIndex].config.levels;
            const loggerLevels = config.levels;

            if (!transportLevels.every(level => loggerLevels.includes(level))) {
                return false;
            }
        }

        return true;
    }

    private sendToTransports(message: LogMessage, messageConfig: any) {
        this.config.transports.forEach((transport) => {
            transport.send(message, messageConfig);
        });
    }

    public log(logMessage: LogMessage, messageConfig: any) {
        this.sendToTransports(logMessage, messageConfig);
    }
}

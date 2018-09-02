import { LogMessage } from '../messages/logMessage';
import { LoggerConfig } from './loggerConfig';
import { defaultLoggerConfig } from './loggerConfigs';

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
        for (let transIndex = 0; transIndex < config.transports.length; transIndex++) {
            const transportSeverityLevels = config.transports[transIndex].config.levels;
            const loggerSeverityLevels = config.levels;

            if (!transportSeverityLevels.every(severityLevel =>
                (<any>Object).values(loggerSeverityLevels).includes(severityLevel))) {
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

    public log(logMessage: LogMessage, messageConfig?: any) {
        this.sendToTransports(logMessage, messageConfig);
    }

    public removeTransports() {
        this.config.transports.forEach((transport) => {
            transport.close();
        });

        this.config.transports = [];
    }
}

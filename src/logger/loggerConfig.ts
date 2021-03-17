import { Transport } from '../transports/transport';

export type LoggerConfig = {
    transports: Transport[];
    levels: string[];
};

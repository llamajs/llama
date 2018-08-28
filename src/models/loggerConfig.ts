import { Transport } from './transport';

export type LoggerConfig = {
    transports: Transport[];
    levels: string[];
};

import { Format } from '../formats/format';
import { Transport } from './transport';

export type LoggerConfig = {
    transports: Transport[];
    levels: string[];
    format: Format;
};

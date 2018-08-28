import { Transport } from '../models/transport';

export class ConsoleTransport extends Transport {
    pass(message: string): void {
        console.log(message);
    }
}

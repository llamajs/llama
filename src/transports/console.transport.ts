import { Transport } from '../models/transport';

export class ConsoleTransport extends Transport {
    protected pass(message: string): void {
        console.log(message);
    }
}

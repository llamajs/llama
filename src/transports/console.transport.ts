import { Transport } from '../transports/transport';

export class ConsoleTransport extends Transport {
    protected pass(message: string): void {
        console.log(message);
    }
}

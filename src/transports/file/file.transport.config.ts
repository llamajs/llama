import { TransportConfig } from '../../transports/transportConfig';

export interface FileTransportConfig extends TransportConfig {
    fileName: string;
}

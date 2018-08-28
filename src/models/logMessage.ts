export interface LogMessage {
    severity: string;
    name: string;
    [key: string]: any; // Can assign own properties to the class
}

export class LogMessage {
    severity: string;
    name: string;
    [key: string]: any; // Can assign own properties to the class

    constructor(severity: string, name: string) {
        this.severity = severity;
        this.name = name;
    }
}

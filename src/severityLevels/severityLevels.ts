export type SeverityLevel = {
        name: number | string,
        color?: string,
};

export type SeverityLevels = {
    [key: string]: SeverityLevel,
};
    },
};
export enum defaultSeverityLevels {
    Debug = 'DEBUG',
    Info = 'INFO',
    Warning = 'WARNING',
    Error = 'ERROR',
    Fatal = 'FATAL',
}

export enum syslogSeverityLevels {
    Emergency = 0,
    Alert = 1,
    Critical = 2,
    Error = 3,
    Warning = 4,
    Notice = 5,
    Informational = 6,
    Debug = 7,
}

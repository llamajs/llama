export type SeverityLevel = {
    name: number | string,
    color?: string,
};

export type SeverityLevels = {
    [key: string]: SeverityLevel,
};

export const IbmTivoliSeverityLevels: SeverityLevels = {
    Clear: {
        name: 'CLEAR',
        color: 'Green',
    },
    Indeterminate: {
        name: 'INDETERMINATE',
        color: 'Purple',
    },
    Warning: {
        name: 'WARNING',
        color: 'Blue',
    },
    Minor: {
        name: 'MINOR',
        color: 'Yellow',
    },
    Major: {
        name: 'MAJOR',
        color: 'ORANGE',
    },
    Critical: {
        name: 'CRITICAL',
        color: 'Red',
    },
};

export const syslogSeverityLevels: SeverityLevels = {
    Debug: {
        name: 'DEBUG',
    },
    Informational: {
        name: 'INFO',
    },
    Notice: {
        name: 'NOTICE',
    },
    Warning: {
        name: 'WARNING',
    },
    Error: {
        name: 'ERROR',
    },
    Critical: {
        name: 'CRITICAL',
    },
    Alert: {
        name: 'ALERT',
    },
    Emergency: {
        name: 'EMERGENCY',
    },
};

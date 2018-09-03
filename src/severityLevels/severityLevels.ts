export type SeverityLevel = number | string;

export type SeverityLevels = {
    [key: string]: SeverityLevel,
};

export const IbmTivoliSeverityLevels = {
    Clear: 'CLEAR',
    Indeterminate: 'INDETERMINATE',
    Warning: 'WARNING',
    Minor: 'MINOR',
    Major: 'MAJOR',
    Critical: 'CRITICAL',
};

export const syslogSeverityLevels = {
    Debug: 'DEBUG',
    Informational: 'INFO',
    Notice: 'NOTICE',
    Warning: 'WARNING',
    Error: 'ERROR',
    Critical: 'CRITICAL',
    Alert: 'ALERT',
    Emergency: 'EMERGENCY',
};

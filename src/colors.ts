export type AppTheme = {
    background: string,
    text: string,
    textHold: string,
    accentText: string,
    accentTextHold: string,
    primary: string,
    accent: string,
};

const draculaTheme: AppTheme = {
    background: '#25292e',
    text: '#ffffff',
    textHold: '#cccccc',
    accentText: '#111111',
    accentTextHold: '#444444',
    primary: '#bb86fc',
    accent: '#03dac6',
};

const forestTheme: AppTheme = {
    background: '#2e3b1c',
    text: '#e9dfb4',
    textHold: '#50601a',
    accentText: '#75554a',
    accentTextHold: '#bc8c80',
    primary: '#83934d',
    accent: '#b8c88d',
};

export const Theme = forestTheme;

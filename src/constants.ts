export const USE_PROJECT_COLOR = true;
export const PREDEFINED_COLORS = [
  { label: 'Amber', value: '#FFBE0B' },
  { label: 'Orange', value: '#FB5607' },
  { label: 'Rose', value: '#FF006E' },
  { label: 'Blue violet', value: '#8338EC' },
  { label: 'Azure', value: '#3a86ff' },
  { label: 'Light sea', value: '#20A39E' },
  { label: 'Jade', value: '#44AF69' },
  { label: 'Chocolate cosmos', value: '#66101F' },
  { label: 'Midnight green', value: '#19535F' },
  {
    label: 'Sunrise Gradient',
    value: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
  },
  {
    label: 'Mango Gradient',
    value: 'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)',
  },
  {
    label: 'Marine Sunset Gradient',
    value: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
  },
];

export const INBUILT_COLOR_DEFAULTS = [
  {
    name: '--vscode-gitDecoration-untrackedResourceForeground',
    defaultValue: '#73c991',
  },
  {
    name: '--vscode-gitDecoration-modifiedResourceForeground',
    defaultValue: '#e2c08d',
  },
  {
    name: '--vscode-gitDecoration-deletedResourceForeground',
    defaultValue: '#c74e39',
  },
  {
    name: '--vscode-gitDecoration-ignoredResourceForeground',
    defaultValue: '#8c8c8c',
  },
  {
    name: '--vscode-gitDecoration-submoduleResourceForeground',
    defaultValue: '#8db9e2',
  },
  {
    name: '--vscode-terminal-submoduleResourceForeground',
    defaultValue: '#8db9e2',
  },
];

export const PROJECTS_KEY = 'projects';
export const RECENT_COLORS_KEY = 'recentColors';
export const REOPEN_KEY = 'reopenDashboardReason';

export enum StorageOption {
  GlobalState,
  Settings,
}

export const FITTY_OPTIONS = {
  maxSize: '40',
  // minSize: '20', // Apparently, fitty has a problem with our setup and will overflow text if minSize is set...
};

export const USER_CANCELED = 'CanceledByUser'; // A symbol would be nice, but throw new Error(Symbol) does not work
export const ADD_NEW_PROJECT_TO_FRONT = false;

export const SSH_REMOTE_PREFIX = 'vscode-remote://ssh-remote+';
export const DEV_CONTAINER_PREFIX = 'vscode-remote://attached-container+';
export const REMOTE_REGEX = /^vscode-remote:\/\/[^\+]+\+/;
export const SSH_REGEX = /^((?<user>[^@\/]+)(\@))?(?<hostname>[^@\/\. ]+[^@\/ ]*)(?<folder>\/.*)*$/;
export const WSL_DEFAULT_REGEX = /\\+wsl\$\\/i;
export const CONTAINER_REGEX = /^(?<containername>[^@\/\. ]+[^@\/ ]*)(?<folder>\/.*)*$/;

export const StartupOptions = Object.freeze({
  always: 'always',
  emptyWorkSpace: 'empty workspace',
  never: 'never',
});

export const FixedColorOptions = Object.freeze({
  random: 'Random',
  none: 'None',
  custom: 'Custom',
  recent: 'Recent',
  workspace: 'Workspace',
});

export const RelevantExtensions = Object.freeze({
  remoteSSH: 'ms-vscode-remote.remote-ssh',
});

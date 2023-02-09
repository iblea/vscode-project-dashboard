'use strict';

import { readFileSync } from 'fs';
import * as vscode from 'vscode';
import { SSH_REMOTE_PREFIX, WSL_DEFAULT_REGEX } from './constants';

export class Group {
  id: string;
  groupName: string;
  collapsed: boolean;
  projects: Project[];

  constructor(groupName: string, projects: Project[] = null) {
    this.id = generateRandomId(groupName);
    this.groupName = groupName;
    this.projects = projects || [];
  }

  static getRandomId(prepend: string = null) {
    return generateRandomId(prepend);
  }
}

export class Project {
  id: string;
  name: string;
  path: string;
  color: string;
  lastWorkspaceColor: string;
  isGitRepo = false;

  constructor(name: string, path: string) {
    this.id = generateRandomId(name);
    this.name = name;
    this.path = path;
  }

  static getWorkspaceColor(project: Project) {
    try {
      const fileContent = readFileSync(`${project.path}/.vscode/settings.json`, 'utf8')
        .replace(/(\/\/.*)/gi, '') // It is important to ignore comments of json file
        .trim();
      const settings = JSON.parse(fileContent);
      const colorCustomizations = settings['workbench.colorCustomizations'];
      const color =
        colorCustomizations['titleBar.activeBackground'] ||
        colorCustomizations['activityBar.background'];
      return color;
    } catch (ex) {
      console.error(`Unable to load workspace color: ${ex.name}`);
      return null;
    }
  }

  getRemoteType(): ProjectRemoteType {
    if (this.path && this.path.startsWith(SSH_REMOTE_PREFIX)) {
      return ProjectRemoteType.SSH;
    } else if (
      this.path &&
      (this.path.match(WSL_DEFAULT_REGEX) || this.path.startsWith('vscode-remote://wsl+'))
    ) {
      return ProjectRemoteType.WSL;
    }

    return ProjectRemoteType.None;
  }

  static getRandomId(prepend: string = null) {
    return generateRandomId(prepend);
  }
}

export function sanitizeProjectName(name: string) {
  if (!name) {
    return '';
  }

  return name.replace(/<[^>]+>/g, '').trim();
}

export function getRemoteType(project: Project): ProjectRemoteType {
  return Project.prototype.getRemoteType.call(project);
}

function generateRandomId(prepend: string = null) {
  if (prepend) {
    prepend = prepend.replace(/\W/gi, '').toLowerCase().substring(0, 24);
  } else {
    prepend = '';
  }

  return prepend + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

export interface GroupOrder {
  groupId: string;
  projectIds: string[];
}

export interface DashboardInfos {
  relevantExtensionsInstalls: { remoteSSH };
  config: vscode.WorkspaceConfiguration;
  otherStorageHasData: boolean;
}

export enum ProjectPathType {
  Folder,
  WorkspaceFile,
  File,
}

export enum ProjectOpenType {
  Default = 0,
  NewWindow = 1,
  AddToWorkspace = 2,
}

export enum ProjectRemoteType {
  None,
  SSH,
  WSL,
}

export enum ReopenDashboardReason {
  None = 0,
  EditorReopenedAsWorkspace,
}

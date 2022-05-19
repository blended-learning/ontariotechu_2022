import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the ontariotech_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'ontariotech_theme:plugin',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension ontariotech_theme is activated!');
    const style = 'ontariotech_theme/index.css';

    manager.register({
      name: 'ontariotech_theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;

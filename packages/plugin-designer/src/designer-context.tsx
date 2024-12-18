import React, { PureComponent } from 'react';
import { Editor, engineConfig } from '@felce/lowcode-editor-core';
import { DesignerView, Designer, DesignerModeType } from '@felce/lowcode-designer';
import { Asset, getLogger, UtilsMetadata } from '@felce/lowcode-utils';
import './designer-context.scss';
import { IPublicModelEngineConfig } from '@felce/lowcode-types';

const logger = getLogger({ level: 'warn', bizName: 'plugin:plugin-designer' });

export interface PluginProps {
  engineEditor: Editor;
  engineConfig: IPublicModelEngineConfig;
}

interface DesignerPluginState {
  utilsMetadata?: UtilsMetadata;
  componentMetadatas?: any[] | null;
  library?: any[] | null;
  extraEnvironment?: Asset;
  renderEnv?: string;
  device?: string;
  locale?: string;
  designMode?: DesignerModeType;
  deviceClassName?: string;
  simulatorUrl?: Asset;
  // @TODO 类型定义
  requestHandlersMap: any;
}

export class DesignerPlugin extends PureComponent<PluginProps, DesignerPluginState> {
  static displayName: 'LowcodePluginDesigner';

  state: DesignerPluginState = {
    componentMetadatas: null,
    library: null,
    renderEnv: 'default',
    device: 'default',
    locale: '',
    designMode: 'live',
    deviceClassName: '',
    requestHandlersMap: null,
  };

  private _mounted = true;

  constructor(props: any) {
    super(props);
    this.setupAssets();
  }

  private async setupAssets() {
    const editor = this.props.engineEditor;
    try {
      const assets = await editor.onceGot('assets');
      const renderEnv = engineConfig.get('renderEnv') || editor.get('renderEnv');
      const device = engineConfig.get('device') || editor.get('device');
      const locale = engineConfig.get('locale') || editor.get('locale');
      const designMode = engineConfig.get('designMode') || editor.get('designMode');
      const deviceClassName = engineConfig.get('deviceClassName') || editor.get('deviceClassName');
      const simulatorUrl = engineConfig.get('simulatorUrl') || editor.get('simulatorUrl');
      // @TODO setupAssets 里设置 requestHandlersMap 不太合适
      const requestHandlersMap =
        engineConfig.get('requestHandlersMap') || editor.get('requestHandlersMap');
      if (!this._mounted) {
        return;
      }
      engineConfig.onGot('locale', (locale) => {
        this.setState({
          locale,
        });
      });
      engineConfig.onGot('requestHandlersMap', (requestHandlersMap) => {
        this.setState({
          requestHandlersMap,
        });
      });
      engineConfig.onGot('device', (device) => {
        this.setState({
          device,
        });
      });
      const { components, packages, extraEnvironment, utils } = assets;
      const state = {
        componentMetadatas: components || [],
        library: packages || [],
        utilsMetadata: utils || [],
        extraEnvironment,
        renderEnv,
        device,
        designMode,
        deviceClassName,
        simulatorUrl,
        requestHandlersMap,
        locale,
      };
      this.setState(state);
    } catch (e) {
      logger.error(e);
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  private handleDesignerMount = (designer: Designer): void => {
    const editor = this.props.engineEditor;
    editor.set('designer', designer);
    editor.eventBus.emit('designer.ready', designer);
    editor.onGot('schema', (schema) => {
      designer.project.open(schema);
    });
  };

  render(): React.ReactNode {
    const editor: Editor = this.props.engineEditor;
    const {
      componentMetadatas,
      utilsMetadata,
      library,
      extraEnvironment,
      renderEnv,
      device,
      designMode,
      deviceClassName,
      simulatorUrl,
      requestHandlersMap,
      locale,
    } = this.state;

    if (!library || !componentMetadatas) {
      // TODO: use a Loading
      return null;
    }

    return (
      <DesignerView
        onMount={this.handleDesignerMount}
        className="lowcode-plugin-designer"
        editor={editor}
        name={editor.viewName}
        designer={editor.get('designer')}
        componentMetadatas={componentMetadatas}
        simulatorProps={{
          library,
          utilsMetadata,
          extraEnvironment,
          renderEnv,
          device,
          locale,
          designMode,
          deviceClassName,
          simulatorUrl,
          requestHandlersMap,
        }}
      />
    );
  }
}

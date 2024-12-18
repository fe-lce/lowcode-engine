import { init, plugins } from '@felce/lowcode-engine';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';
import EditorInitPlugin from './plugins/plugin-editor-init';
import appHelper from './helper';
import './index.scss';

await plugins.register(EditorInitPlugin, {
  scenarioName: 'general',
  displayName: '综合场景',
  info: {
    urls: [
      {
        key: '设计器',
        value: 'https://github.com/alibaba/lowcode-demo/tree/main/demo-general',
      },
      {
        key: 'fusion-ui 物料',
        value: 'https://github.com/alibaba/lowcode-materials/tree/main/packages/fusion-ui',
      },
      {
        key: 'fusion 物料',
        value:
          'https://github.com/alibaba/lowcode-materials/tree/main/packages/fusion-lowcode-materials',
      },
    ],
  },
});

init(document.getElementById('lce-container')!, {
  locale: 'zh-CN',
  enableCondition: true,
  enableCanvasLock: true,
  // 默认绑定变量
  supportVariableGlobally: true,
  requestHandlersMap: {
    fetch: createFetchHandler(),
  },
  simulatorUrl: [
    'https://registry.npmmirror.com/@felce/lowcode-react-simulator-renderer/1.5.0-beta.2/files/dist/react-simulator-renderer.css',
    'https://registry.npmmirror.com/@felce/lowcode-react-simulator-renderer/1.5.0-beta.2/files/dist/react-simulator-renderer.umd.js',
  ],
  appHelper,
  enableContextMenu: true,
});

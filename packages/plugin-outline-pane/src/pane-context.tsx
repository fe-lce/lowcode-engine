import { Pane } from './views/pane';
import { PaneController } from './controllers/pane-controller';
import { useState, useEffect } from 'react';
import { IPublicModelPluginContext } from '@felce/lowcode-types';
import { TreeMaster } from './controllers/tree-master';
import { MasterPaneName } from './helper/consts';

export function OutlinePaneContext(props: {
    treeMaster?: TreeMaster;

    pluginContext: IPublicModelPluginContext;

    options: any;

    paneName: string;

    hideFilter?: boolean;
}) {
    const treeMaster = props.treeMaster || new TreeMaster(props.pluginContext, props.options);
    const [masterPaneController, setMasterPaneController] = useState(
        () => new PaneController(props.paneName || MasterPaneName, treeMaster),
    );
    useEffect(() => {
        return treeMaster.onPluginContextChange(() => {
            setMasterPaneController(new PaneController(props.paneName || MasterPaneName, treeMaster));
        });
    }, []);

    return (
        <Pane
            treeMaster={treeMaster}
            controller={masterPaneController}
            key={masterPaneController.id}
            hideFilter={props.hideFilter}
            {...props}
        />
    );
}

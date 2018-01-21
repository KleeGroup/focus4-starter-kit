import {fieldFor, Form, makeFormActions, makeFormNode, observer, Panel, React} from "focus4";

import {mainStore} from "../../../../stores";

@observer
export class SuiviCreation extends React.Component<{close: () => void}, void> {

    entity = makeFormNode(mainStore.evenement, () => ({}), true);
    actions = makeFormActions(
        this.entity,
        {save: async x  => { mainStore.suivi.evenementList.pushNode(x); return x; }},
        {
            clearBeforeLoad: true,
            onFormSaved: () => this.props.close(),
            onToggleEdit: edit => !edit && this.props.close()
        }
    );

    render() {
        return (
            <Form {...this.actions.formProps}>
                <Panel hideOnScrollspy title="Ajouter un évènement" {...this.actions.panelProps}>
                    {fieldFor(this.entity.commentaire)}
                    {fieldFor(this.entity.date)}
                </Panel>
            </Form>
        );
    }
}

import {displayFor, i18n, listFor, observer, Panel, React, stringFor} from "focus4";

import {EvenementNode} from "../../../model/main/evenement";
import {loadSuivi} from "../../../services/main";
import {mainStore} from "../../../stores";

@observer
export class SuiviComponent extends React.Component<{}, void> {

    async componentWillMount() {
        mainStore.suivi.set(await loadSuivi());
    }

    render() {
        const {dateCreation, nombreEvenement, evenementList} = mainStore.suivi;
        return (
            <Panel title="Suivi de la structure">
                {displayFor(dateCreation)}
                {displayFor(nombreEvenement)}
                <h4>{i18n.t("suivi.evenement.title")}</h4>
                {listFor({
                    data: evenementList,
                    LineComponent: observer(({data}: {data: EvenementNode}) => <span>{stringFor(data.date)} - {stringFor(data.commentaire)}</span>)
                })}
            </Panel>
        );
    }
}
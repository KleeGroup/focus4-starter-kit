import {EntityValue, EntityArray} from "autofocus/entity";

import {Ligne, LigneData} from "./ligne";

export interface Projet {
    id?: number;
    ligneList?: Ligne[];
}

export interface ProjetData {
    id: EntityValue<number>;
    ligneList: EntityValue<EntityArray<LigneData>>;
    set: (structure: Projet) => void;
    clear: () => void;
}

export const ProjetEntity = {
    name: "projet",
    fields: {
        id: {
            type: "field",
            domain: {},
            isRequired: true,
            name: "id",
            translationKey: "projet.id"
        },
        ligneList: {
            type: "list",
            entityName: "ligne"
        }
    }
};

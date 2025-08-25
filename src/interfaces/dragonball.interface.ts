import type { LinksInterface, MetaInterface } from "./";

export interface DragonballItems {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliations: string;
    deleteAt: string;
}

export interface DragonbalData {
    items: DragonballItems[];
    meta: MetaInterface;
    links: LinksInterface;
}
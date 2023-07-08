import { ReactElement } from "react";

export enum CardType {
    ORIGINAL,
    COPY
}

export enum SelectedCardsAction {
    HIDE,
    SOLVE,
    CHECK
}

export interface ICard {
    type: CardType;
    name: string;
    image: ReactElement;
    isShowed: boolean;
    isSolved: boolean;
}

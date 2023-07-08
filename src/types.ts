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
    image: string;
    isShowed: boolean;
    isSolved: boolean;
}

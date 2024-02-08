import React from "react";

import { ICard, CardType } from "./types";
import {
    FirebaseIcon,
    JsIcon,
    NginxIcon,
    ReactIcon,
    ReduxIcon,
    TypescriptIcon,
    WebpackIcon,
    WebstormIcon
} from "./assets/images";

export const MODAL_CONTAINER_ID = "modal";

export const TOTAL_STEPS = 40;
export const HIDE_DELAY = 1500;
export const SOLVE_DELAY = 600;

export const cardList: ICard[] = [
    {
        type: CardType.ORIGINAL,
        name: 'ng',
        image: NginxIcon,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'fb',
        image: FirebaseIcon,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'ts',
        image: TypescriptIcon,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'react',
        image: ReactIcon,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'ws',
        image: WebstormIcon,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'redux',
        image: ReduxIcon,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'js',
        image: JsIcon,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'wb',
        image: WebpackIcon,
        isShowed: false,
        isSolved: false
    }
];

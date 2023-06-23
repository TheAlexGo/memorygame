import React from "react";

import { ICard, CardType } from "./types";

export const TOTAL_STEPS = 40;
export const HIDE_DELAY = 1500;
export const SOLVE_DELAY = 600;

export const cardList: ICard[] = [
    {
        type: CardType.ORIGINAL,
        name: 'ng',
        image: <span>Nginx</span>,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'fb',
        image: <span>Firebase</span>,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'ts',
        image: <span>Typescript</span>,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'react',
        image: <span>React</span>,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'ws',
        image: <span>WebStorm</span>,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'redux',
        image: <span>Redux</span>,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'js',
        image: <span>JS</span>,
        isShowed: false,
        isSolved: false
    },
    {
        type: CardType.ORIGINAL,
        name: 'wb',
        image: <span>Webpack</span>,
        isShowed: false,
        isSolved: false
    }
];

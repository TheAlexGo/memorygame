import React, { FC, JSX } from 'react';

import { Card } from "../ui/Card/Card";
import { Column } from "../ui/Column/Column";
import { useGameLogic } from "../../hooks/useGameLogic";

import classes from './App.module.css';


export const App: FC = (): JSX.Element => {
    const [images, stepMove, stepLeft, cardClickHandler] = useGameLogic();

    return (
        <div className="container">
            <header className={classes['header']}>Memory</header>
            <main className={classes['content']}>
                <Column text="Сделано ходов" value={stepMove} />
                <div className={classes['cards']}>
                    {images.map((image) => <Card key={image.name + image.type} data={image} onClick={cardClickHandler} />)}
                </div>
                <Column text="Осталось попыток" value={stepLeft} />
            </main>
        </div>
    );
}

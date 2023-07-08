import React, { FC, JSX } from 'react';

import { Card } from "../ui/Card/Card";
import { Column } from "../ui/Column/Column";
import { Modal } from "../ui/Modal/Modal";
import { Button } from "../ui/Button/Button";
import { useGameLogic } from "../../hooks/useGameLogic";

import classes from './App.module.css';


export const App: FC = (): JSX.Element => {
    const { cards, stepMove, stepLeft, isWin, initGame, clickCardHandler } = useGameLogic();

    const renderCardGrid = () => cards.map((card) =>
        <Card key={card.name + card.type} className={classes['card']} data={card} onClick={clickCardHandler} />
    );

    const renderResetButton = () => (
        <Button onClick={initGame}>
            Сыграть еще
        </Button>
    );

    return (
        <div className={classes['container']}>
            <header className={classes['header']}>
                <h1>Memory</h1>
            </header>
            <main className={classes['content']}>
                <Column className={classes['column-left']} text="Сделано ходов" value={stepMove} />
                <div className={classes['cards']}>
                    {renderCardGrid()}
                </div>
                <Column className={classes['column-right']} text="Осталось попыток" value={stepLeft} />
            </main>
            <Modal isShow={isWin === true}>
                <span>
                    Ура, вы выиграли! <br />
                    Это заняло {stepMove} ходов
                </span>
                {renderResetButton()}
            </Modal>
            <Modal isShow={isWin === false}>
                <span>
                    Увы, вы проиграли. <br />
                    У вас кончились ходы
                </span>
                {renderResetButton()}
            </Modal>
        </div>
    );
}

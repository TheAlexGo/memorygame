import React, { FC, useCallback, useMemo } from 'react';
import cn from 'classnames';

import { ICard } from "../../../types";

import { CardPlaceholder } from "../../../assets/icons";
import classes from './Card.module.css';

interface ICardProps {
    data: ICard;
    onClick: (name: ICard) => void;
    className?: string;
}

export const Card: FC<ICardProps> = ({ className, onClick, data }) => {
    const { isShowed, image, isSolved } = data;

    const renderContent = useCallback(() => {
        if (isShowed) {
            return <div>{image}</div>
        }
        return <CardPlaceholder />;
    }, [isShowed, image]);

    const clickHandler = () => {
        if (isShowed) {
            return;
        }
        onClick(data);
    };

    const tabIndex = isSolved ? 0 : 1;

    const styles = useMemo(() => cn(classes['card'], {
        [classes['__is-showed']]: isShowed,
        [classes['__is-solved']]: isSolved
    }, className), [isShowed, isSolved]);

    return (
        <button type="button" className={styles} onClick={clickHandler} tabIndex={tabIndex}>
            {renderContent()}
        </button>
    );
};

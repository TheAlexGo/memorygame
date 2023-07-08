import React, { FC, JSX } from 'react';

import classes from "./Column.module.css";

interface IColumn {
    text: string;
    value: number;
}

export const Column: FC<IColumn> = ({ text, value}): JSX.Element => {
    return (
        <div className={classes['column']}>
            {text}
            <span className={classes['value']}>{value}</span>
        </div>
    );
};

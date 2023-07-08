import React, { FC, JSX } from 'react';

import classes from "./Column.module.css";
import cn from "classnames";

interface IColumn {
    className?: string;
    text: string;
    value: number;
}

export const Column: FC<IColumn> = ({ text, value, className}): JSX.Element => {
    const rootClasses = cn(classes['column'], className);

    return (
        <div className={rootClasses}>
            {text}
            <span className={classes['value']}>{value}</span>
        </div>
    );
};

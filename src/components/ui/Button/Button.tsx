import React, { FC, ButtonHTMLAttributes, JSX, ReactNode } from 'react';

import classes from './Button.module.css';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | string;
}

export const Button: FC<IButton> = ({ children, type = "button", ...buttonProps }): JSX.Element => {
    return (
        <button {...buttonProps} type={type} className={classes['button']}>
            {children}
        </button>
    );
};

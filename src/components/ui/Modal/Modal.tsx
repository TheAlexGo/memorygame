import React, { FC, JSX, ReactNode } from 'react';
import { createPortal } from "react-dom";

import { MODAL_CONTAINER_ID } from "../../../appConfig";

import classes from './Modal.module.css';

interface IModal {
    children: ReactNode;
    isShow: boolean;
}

export const Modal: FC<IModal> = ({ children, isShow = false }): JSX.Element | null => {
    if (!isShow) {
        return null;
    }

    return createPortal(
        (
            <div className={classes['overlay']}>
                <div className={classes['modal']}>
                    <div className={classes['content']}>
                        {children}
                    </div>
                </div>
            </div>
        ),
        document.getElementById(MODAL_CONTAINER_ID)!
    );
};

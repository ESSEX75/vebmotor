import React, { FC } from 'react';
import { IButton } from './types';
import './styles.css';

const Button: FC<IButton> = ({ children, onClick, type, form }) => {
    return (
        <button onClick={onClick} form={form} className="button-root" type={type}>
            {children}
        </button>
    );
};

export default Button;

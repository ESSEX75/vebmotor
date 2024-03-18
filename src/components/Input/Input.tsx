import React, { FC } from 'react';
import './styles.css';

export const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ type, placeholder }) => {
    return <input type={type} className="input-root" placeholder={placeholder} />;
};

export default Input;

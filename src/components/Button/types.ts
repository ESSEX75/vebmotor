import React from 'react';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    onClick?: () => void;
}

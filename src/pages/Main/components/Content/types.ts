import { ReactNode } from 'react';

export interface IContent {
    title: string;
    button?: ReactNode;
    children: ReactNode;
}

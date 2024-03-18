import { ReactNode } from 'react';

export interface ITab {
    id: number;
    activeTab?: boolean;
    title: string;
    description: string;
    handleChange?: () => void;
    children: ReactNode;
}

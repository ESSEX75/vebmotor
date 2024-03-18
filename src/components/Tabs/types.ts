import React from 'react';
import { ITab } from './components/Tab/types';

export interface ITabs {
    activeTab: number;
    handleChange: (activeTab: number) => void;
    children: React.ReactElement<ITab> | React.ReactElement<ITab>[];
}

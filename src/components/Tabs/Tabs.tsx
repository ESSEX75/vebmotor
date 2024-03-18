import React, { Children, useState, useEffect, isValidElement, cloneElement, ReactNode } from 'react';
import { ITabs } from './types';
import './styles.css';

const Tabs: React.FC<ITabs> = ({ activeTab, handleChange, children }) => {
    const [activeTabContent, setActiveTabContent] = useState<ReactNode>();

    useEffect(() => {
        const activeTabElement = Children.toArray(children).find((elem) => {
            if (isValidElement(elem)) {
                return elem.props.id === activeTab;
            }
        });
        if (isValidElement(activeTabElement)) {
            setActiveTabContent(activeTabElement.props.children);
        }
    }, [activeTab, children]);

    const tabs = Children.toArray(children).map((elem) => {
        if (isValidElement(elem)) {
            return cloneElement(elem, {
                ...elem.props,
                activeTab: elem.props.id === activeTab,
                handleChange: () => handleChange(elem.props.id),
            });
        }
    });

    return (
        <div className="tabs--wrapper">
            <ul className="tabs">{tabs}</ul>
            <div className="tab-content">{activeTabContent}</div>
        </div>
    );
};

export default Tabs;

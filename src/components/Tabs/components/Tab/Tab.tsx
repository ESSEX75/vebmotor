import React, { FC } from 'react';
import { HugSVG } from './components';
import { ITab } from './types';
import './styles.css';

const Tab: FC<ITab> = ({ id, activeTab, description, title, handleChange }) => {
    return (
        <li key={id} className={`tab ${activeTab && 'tab--active'}`}>
            <input
                className="tab__radio-input"
                type="radio"
                id={`tab-${id}`}
                name="tab"
                checked={activeTab}
                onChange={handleChange}
            />
            <label className="tab__content" htmlFor={`tab-${id}`}>
                <div className="tab__title--wrapper">
                    <h3 className="tab__title">{title}</h3>
                    <HugSVG activeTab={activeTab} />
                </div>
                <p className="tab__description">{description}</p>
            </label>
        </li>
    );
};

export default Tab;

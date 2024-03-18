import React, { FC } from 'react';
import { IContent } from './types';
import './styles.css';

const Content: FC<IContent> = ({ title, button, children }) => {
    return (
        <>
            <div className="content">
                <h2 className="content_title">{title}</h2>
                {children}
            </div>
            {button}
        </>
    );
};

export default Content;

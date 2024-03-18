import React from 'react';
import { IHugSVG } from './types';
import './styles.css';

const HugSVG: React.FC<IHugSVG> = ({ activeTab }) => {
    return (
        <svg
            className="accordion__hug"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="27"
                width="27"
                height="27"
                rx="5"
                transform="rotate(90 27 0)"
                fill={activeTab ? '#FFF' : '#0078EE'}
            />
            <g clipPath="url(#clip0_1100_128)">
                <path
                    d="M12 9L17 13.5L12 18"
                    stroke={activeTab ? '#0078EE' : 'white'}
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1100_128">
                    <rect width="19" height="19" fill="white" transform="matrix(0 1 -1 0 23 4)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default HugSVG;

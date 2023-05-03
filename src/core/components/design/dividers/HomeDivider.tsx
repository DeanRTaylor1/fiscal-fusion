import React from 'react';
import styles from './HomeDivider.module.css';

const HomeDivider = () => {
    const gradientStyle = {
        fill: 'url(#wave-gradient)',
    };

    return (
        <div className={styles.waveDivider}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'rgb(213,112,140)' }}>
                            <animate
                                attributeName="stop-color"
                                values="rgb(213,112,140); rgb(241,189,111); rgb(144,220,255); rgb(213,112,140)"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </stop>
                        <stop offset="35%" style={{ stopColor: 'rgb(241,189,111)' }}>
                            <animate
                                attributeName="stop-color"
                                values="rgb(241,189,111); rgb(144,220,255); rgb(213,112,140); rgb(241,189,111)"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </stop>
                        <stop offset="100%" style={{ stopColor: 'rgb(144,220,255)' }}>
                            <animate
                                attributeName="stop-color"
                                values="rgb(144,220,255); rgb(213,112,140); rgb(241,189,111); rgb(144,220,255)"
                                dur="10s"
                                repeatCount="indefinite"
                            />
                        </stop>
                    </linearGradient>
                </defs>
                <path
                    d="M0,96L60,117.3C120,139,240,181,360,181.3C480,181,600,139,720,112C840,85,960,75,1080,90.7C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    style={gradientStyle}
                ></path>
            </svg>
        </div>
    );
}

export default HomeDivider;

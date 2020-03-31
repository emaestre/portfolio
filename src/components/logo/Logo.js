import React from 'react';
import './Logo.scss';

function Logo(props) {
    const { collapsed } = props;
    const logoText = collapsed ? '' : 'Welcome!';

    return (
        <div className="Logo">
            <span className="Logo__mark"> > </span>
            <span className="Logo__text">{logoText}</span>
            <span className="Logo__cursor" />
        </div>
    );
}

export default Logo;

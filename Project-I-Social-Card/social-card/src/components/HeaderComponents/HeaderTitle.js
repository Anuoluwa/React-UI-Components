import React from 'react';
import './Header.css';
function HeaderTitle ({headerText, handle, timestamp}) {
    return (
        <div className="HeaderTitle">
            <p>{headerText}
            <span className="span">{handle}</span> 
            <span className="span">{timestamp}</span>
            </p>
        </div>
    );
}

export default HeaderTitle;
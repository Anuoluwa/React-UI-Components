import React from 'react';
import './Header.css';

function HeaderContent ({content}) {
    return (
        <div>
            <p>
            {content}
            </p>
        </div>
    );
}

export default HeaderContent;
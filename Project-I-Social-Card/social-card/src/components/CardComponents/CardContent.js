import React from 'react';
import './Card.css';

function CardContent ({header, body, footer}) {
    return (
        <div className="CardContent">
            <h5>{header}</h5>
            <p>{body}</p>
            <span>{footer}</span>
        </div>
    );
}

export default CardContent;
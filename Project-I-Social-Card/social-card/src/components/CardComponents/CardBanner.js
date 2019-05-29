import React from 'react';
import './Card.css';

function CardBanner ({imgUrl}) {
    return (
        <div className='CardBanner'>
            <img src={imgUrl} alt="React logo"/>
        </div>
    );
}

export default CardBanner;
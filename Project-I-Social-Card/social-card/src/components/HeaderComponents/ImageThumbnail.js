import React from 'react';
import './Header.css';


function ImageThumbnail ({imgUrl}) {
    return (
        <div className='ImageThumbnail'>
            <img src={imgUrl} alt="Lambda logo"/>
        </div>
    );
}

export default ImageThumbnail;
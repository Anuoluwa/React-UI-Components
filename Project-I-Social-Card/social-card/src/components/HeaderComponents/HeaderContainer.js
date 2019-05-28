import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer () {
    return (
        <div className='HeaderContainer'>
            <ImageThumbnail imgUrl = "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"/>
            <div className='header-content'>
            <HeaderTitle headerText = " Lambda School  " handle=" @LambdaSchool "
             timestamp=" &middot; 28 May " /> 
            <HeaderContent content = "Let's learn React by building simple interfaces with components. Don't try to 
            overthink it, just keep it simple and have fun.Once you feel comfortable using components you are  well on your way to learn React!" />  
            </div>        
        </div>
   );
}

export default  HeaderContainer ;
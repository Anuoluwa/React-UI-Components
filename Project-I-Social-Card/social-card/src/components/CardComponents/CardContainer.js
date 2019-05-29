import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


function CardContainer () {
    return (
        <div className='CardContainer'>
            <CardBanner imgUrl = "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"/>
            <div className='card-content'>
            <CardContent header="Get Started with React" body="React makes it painless to create interactive UIs. Design simple views for each state in your application." footer="reactjs.org" /> 
            </div>        
        </div>
   );
}

export default  CardContainer ;
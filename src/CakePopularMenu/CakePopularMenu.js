import './CakePopularMenu.css';
import React from 'react';
import CakePopular from '../CakePopular/CakePopular';

function CakePopularMenu({ cakeList }){
    
    return(
    <div className='popular-menu'>
        <div className='popular-menu__container'>
        {cakeList.map((cake) => {
        return(
        <CakePopular key={String(Math.random()).slice(3,14)} cakeList = {cake}/>
        )
    })}
        </div>
    </div>
    )
}

export default CakePopularMenu;
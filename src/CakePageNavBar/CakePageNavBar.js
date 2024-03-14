import React from 'react';
import './CakePageNavBar.css';
import { Link } from 'react-router-dom';

function CakePageNavBar(){
    return(
        <div className='cake-page__navbar-menu flex'>
            <Link to='/'><button  className='cake-page__navbar-menu__button'><p>Каталог</p></button></Link>
            <Link to='/cakemaker'><button className='cake-page__navbar-menu__button'><p>Создать торт</p></button></Link>
            <Link to='/about-us'><button className='cake-page__navbar-menu__button'><p>О нас</p></button></Link>
        </div>
    )
}

export default CakePageNavBar;
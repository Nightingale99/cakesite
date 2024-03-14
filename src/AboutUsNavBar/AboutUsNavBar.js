import './AboutUsNavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function AboutUsNavBar(){
    return(
        <div className='about-us__navbar-menu flex'>
            <Link to='/'><button  className='about-us__navbar-menu__button'><p>Каталог</p></button></Link>
            <Link to='/cakemaker'><button className='about-us__navbar-menu__button'><p>Создайте торт</p></button></Link>
            <button className='about-us__navbar-menu__button disabled'><p>О нас</p></button>
        </div>
    )
}

export default AboutUsNavBar;
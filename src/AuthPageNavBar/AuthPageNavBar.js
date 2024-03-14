import React from 'react';
import './AuthPageNavBar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AuthPageNavBar(){
    const isAdminLogged = useSelector(state => state.adminLogined)
    return(
        <div className='navbar-menu flex'>
            <Link to='/'><button  className='navbar-menu__button'><p>Каталог</p></button></Link>
            <Link to='/cakemaker'><button className='navbar-menu__button'><p>Создайте торт</p></button></Link>
            <Link to='/about-us'><button className='navbar-menu__button'><p>О нас</p></button></Link>
            <button className='navbar-menu__button catalog'><p>{isAdminLogged ? 'ADMIN' : 'Войти'}</p></button>
        </div>
    )
}

export default AuthPageNavBar;
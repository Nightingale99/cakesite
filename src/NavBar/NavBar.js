import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar(){
    const isAdminLogged = useSelector(state => state.adminLogined)
    return(
        <div className='navbar-menu flex'>
            <button  className='navbar-menu__button catalog'><p>Каталог</p></button>
            <Link to='/cakemaker'><button className='navbar-menu__button'><p>Создайте торт</p></button></Link>
            <Link to='/about-us'><button className='navbar-menu__button'><p>О нас</p></button></Link>
            <Link to='/auth'><button className='navbar-menu__button'><p>{isAdminLogged ? 'ADMIN' : 'Войти'}</p></button></Link>
        </div>
    )
}

export default NavBar;
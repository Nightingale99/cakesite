import './CakePopularMenu.css';
import React from 'react';
import CakePopular from '../CakePopular/CakePopular';
import { useDispatch, useSelector } from 'react-redux';

function CakePopularMenu({ cakeList }){
    const isAdminLogged = useSelector(state => state.adminLogined)
    const dispatch = useDispatch()
    const addCake = () => {
        dispatch({type:'ADD_CAKE'})
    }
    return(
    <div className='popular-menu'>
        <div className='popular-menu__container'>
        {cakeList.map((cake) => {
        return(
        <CakePopular key={String(Math.random()).slice(3,14)} cakeList = {cake}/>
        )
    })}
        </div>
        {isAdminLogged
        ? <button className='navbar-menu__button' onClick={addCake}>Добавить торт</button>
        : ''}
    </div>
    )
}

export default CakePopularMenu;
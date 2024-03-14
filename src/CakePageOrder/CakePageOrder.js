import React from "react";
import './CakePageOrder.css';
import { Link, useLocation } from "react-router-dom";

function CakePageOrder(){
    const location = useLocation();
    return(
        <div className="order-page">
            <div className='navbar-menu flex'>
                <Link to='/'><button  className='about-us__navbar-menu__button'><p>На главную</p></button></Link>
            </div>
            <div className="order-description">
                <p>Ваш заказ на {location.state.cakeList.name} принят под уникальным номером №{String(Math.random()).slice(3,15)}. Сумма к оплате: {location.state.cakeList.price}. Пожалуйста позвоните по номеру +7-343-999-4332 в течение 24 часов и назовите оператору номер заказа для подтверждения. Также потребуется уточнить ваш номер, время и адрес доставки. Иначе заказ будет аннулирован. Всего вам доброго!</p>
                <img className="order-page__image" alt='Изображение торта' src={location.state.cakeList.image}></img>
            </div>
        </div>
    )
}

export default CakePageOrder;
import React from "react";
import './OrderPage.css';
import { Link, useLocation } from "react-router-dom";

function OrderPage(){
    const location = useLocation();
    let orderText = 'К сожалению заказ пришлось отменить, так как вы указали не все данные. Проверьте пожалуйста указанные данные и оформите заказ заново. '
    let { checkboxList, wishList, clientName, clientAddress, clientDate, phoneNumber, image } = location.state
    if (checkboxList[0] 
        && wishList 
        && clientName 
        && clientAddress
        && clientDate
        && phoneNumber){
            orderText= `Уважаемый ${clientName} ваш заказ под уникальным номером №${String(Math.random(500000, 999999)).slice(3, 10)} поступил в работу и будет доставлен по адресу ${clientAddress} до ${clientDate}. Мы постараемся учесть ваши пожелания: ${wishList}, а также добавим в торт ${checkboxList.join(', ')} начинки. В случае возникших вопросов свяжемся с вами по телефону ${phoneNumber}. `
        }
    return(
        <div className="order-page">
            <div className='navbar-menu flex'>
                <Link to='/'><button  className='about-us__navbar-menu__button catalog'><p>Каталог</p></button></Link>
            </div>
            <div className="order-description">
                <p>{orderText}</p>
                <img className="image-hidden" src={image} alt='Картинка пользователя'></img>
            </div>
        </div>
    )
}

export default OrderPage;
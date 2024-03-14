import './CakeMakerNavBar.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function CakeMakerNavBar({ wishList, checkboxList, image }){
    const[timeChoosing, setTimeChoosing] = useState(false);
    const[phoneNumber, setPhoneNumber] = useState('(не указан)');
    const[clientName, setClientName] = useState('(не указан)');
    const[clientDate, setClientDate] = useState('(не указан)');
    const[clientAddress, setClientAddress] = useState('(не указан)');

    const navigate = useNavigate()
    let timeClass = timeChoosing === false ? 'windowTime hidden' : 'windowTime';
    return(
        <div className='cakemaker__navbar-menu flex'>
            <div className={timeClass}>
                <button onClick={() => {setTimeChoosing(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path></svg>
                </button>
                <div className='cakemaker__inputs flex'>
                <label htmlFor='phone'>Номер телефона</label>
                <input autoComplete='tel' id='phone' type='tel' placeholder='+7-999-999-99-99' onChange={(e)=>{setPhoneNumber(e.target.value)}} required></input>
                <label htmlFor='name'>Имя и фамилия</label>
                <input autoComplete ='name' id='name' type='text' placeholder='Иван Сергеев' onChange={(e)=>{setClientName(e.target.value)}}required></input>
                <label htmlFor='time'>Дата доставки</label>
                <input autoComplete='date' id='time' type='text' placeholder='03.08.2024' onChange={(e)=>{setClientDate(e.target.value)}}></input>
                <label htmlFor='address'>Адрес Доставки</label>
                <input autoComplete='address' placeholder='г.Москва' id='address' type='text' onChange={(e)=>{setClientAddress(e.target.value)}}></input>
                </div>
            </div>
            <Link to='/'><button  className='about-us__navbar-menu__button'><p>Каталог</p></button></Link>
            <button onClick={() => {setTimeChoosing(true)}} className='cakemaker__navbar-menu__button'><p>Выбрать время</p></button>
            <button className='cakemaker__navbar-menu__button' onClick={()=>{navigate('/order-page', {state:{phoneNumber:phoneNumber, clientDate:clientDate, clientName:clientName, wishList:wishList, checkboxList: checkboxList, image: image, clientAddress}})}}><p>Заказать</p></button>
        </div>
    )
}

export default CakeMakerNavBar;
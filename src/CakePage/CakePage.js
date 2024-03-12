import React from "react";
import './CakePage.css'
import { useLocation, useNavigate } from "react-router";
import CakePageNavBar from "../CakePageNavBar/CakePageNavBar";

function CakePage(){
    const location = useLocation()
    const navigate = useNavigate()
    return(
        <div className="cakepage">
        <CakePageNavBar/>
        <div className="cakepage__container">
            <div className="cakepage__name">
                <p>{location.state.cakeList.name}</p>
            </div>
            <div className="cakepage__cake flex">
                <img className="cakepage__image" alt='Фото торта' src={location.state.cakeList.image}></img>
                <div className="cakepage__description">
                    <p>{location.state.cakeList.description}</p>
                </div>
                <div className="cakepage__price"><p>{location.state.cakeList.price}</p></div>
                <button onClick={() => {navigate('/buy-page/', {state: {cakeList: location.state.cakeList}})}} className='about-us__navbar-menu__button disabled'><p>Заказать</p></button>
            </div>
        </div>
        </div>
    )
}

export default CakePage;
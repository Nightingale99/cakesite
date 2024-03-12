import './CakeMaker.css'
import CakeMakerNavBar from '../CakeMakerNavBar/CakeMakerNavBar';
import CakeMakerDoOrder from '../CakeMakerDoOrder/CakeMakerDoOrder';
import React, { useState } from 'react';
function CakeMaker(){
    const[wishList, setWishList] = useState('')
    const[checkboxList, setCheckboxList] = useState([])
    const[image, setImage] = useState('')

    function wishesHandler(e){
        setWishList(e.target.value)
    }

    function checkboxHandler(e){
        const checkText = e.target.closest('li').innerText;
        if (checkboxList.includes(checkText)){
            setCheckboxList((checkboxList) => {
                return(checkboxList.splice(checkboxList.indexOf(checkText), 1))
            })
        } else {
            setCheckboxList((checkboxList) => {
                return([...checkboxList, checkText])
            })
        }
    }

    function imageHandler(result){
        setImage(result)
    }

    return(
        <div className='cakemaker'>
            <CakeMakerNavBar 
            wishList={wishList}
            checkboxList={checkboxList}
            image={image}/>
            <CakeMakerDoOrder 
            wishesHandler={wishesHandler} 
            checkboxHandler={checkboxHandler}
            imageHandler={imageHandler}/>
        </div>
    )
}

export default CakeMaker;
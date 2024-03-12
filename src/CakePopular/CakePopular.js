import React from 'react'
import './CakePopular.css'
import { useNavigate } from 'react-router'

function CakePopular({ cakeList }){
    const navigate = useNavigate()
    return(
        <div className='cake flex'>
            <img src={cakeList.image} alt='Тортик' 
            onClick={() => {navigate('/cake', {state:{ cakeList:cakeList }})}}
            ></img>
            <div className='cake__description' onClick={() => {navigate('/cake', {state:{ cakeList:cakeList }})}}><p>{cakeList.description}</p></div>
        </div>
    )
}

export default CakePopular;
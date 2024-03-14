import React, { useState } from 'react'
import './CakePopular.css'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

function CakePopular({ cakeList }){
    const isAdminLogged = useSelector(state => state.adminLogined);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(cakeList.name);
    const [description, setDescription] = useState(cakeList.description);
    const [image, setImage] = useState(cakeList.image);

    const deleteCake = () => {
        dispatch({type: "DELETE_CAKE", name: cakeList.name})
    };

    const editCake = () => {
        if (editing){
            dispatch({type: "EDIT_CAKE", name: name, description: description, image: image, cake: cakeList})
        }
        setEditing((editing) => {
            return !editing
        })
    };

    return(
        <div className='cake flex'>
            {editing
            ? <input onChange={(e) => {setImage(e.target.value)}} className='cake__image-edit' value={cakeList.image}></input>
            : <img src={cakeList.image} alt='Тортик' 
            onClick={() => {navigate('/cake', {state:{ cakeList:cakeList }})}}
            ></img>}
            <div className='cake__description'>
            {editing
            ? <input onChange={(e) => {setName(e.target.value)}} className='cake__description__name-input' defaultValue={cakeList.name}></input> 
            : <h3 onClick={() => {navigate('/cake', {state:{ cakeList:cakeList }})}}>{cakeList.name}</h3>}
            {editing 
            ? <textarea onChange={(e) => {setDescription(e.target.value)}} className='cake__description__description-input' defaultValue={cakeList.description}></textarea> 
            : <p>{cakeList.description.length > 140 ? cakeList.description.slice(0,140) + '...' : cakeList.description}</p>}
            {isAdminLogged ? 
            <div className='cake__description__panel'>
            <button className='deleteCake' onClick={deleteCake}>Удалить</button>
            <button className='editCake' onClick={editCake}>{editing ? 'Применить': 'Изменить'}</button></div>: ''}
            </div>
        </div>
    )
}

export default CakePopular;
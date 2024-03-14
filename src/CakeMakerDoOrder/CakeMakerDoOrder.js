import './CakeMakerDoOrder.css';
import React, {useState} from 'react';

function CakeMakerDoOrder({ wishesHandler, checkboxHandler, imageHandler }){
    const handleFileChange = (e) => {
        reader.readAsDataURL(e.target.files[0])
      };
    
    const [image, setImage] = useState('https://symbl.cc/i/webp/24/7da83228ffeb848f5d78825bea9353.webp');
    const imageField = React.useRef(image);
    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
        setImage(reader.result);
        imageHandler(reader.result);
    })

    return(
    <div className='do-order flex'>
        <div className='do-order__filling flex'>
        <h2>Список Начинок</h2>
        <ul className='flex'>
            <li><input id='peanut' type='checkbox' onClick={checkboxHandler}></input>Арахисовая</li>
            <li><input id='coffee' type='checkbox' onClick={checkboxHandler}></input>Кофейная</li>
            <li><input id='blueberry' type='checkbox' onClick={checkboxHandler}></input>Черничная</li>
            <li><input id='rasberry' type='checkbox' onClick={checkboxHandler}></input>Коксовая</li>
            <li><input id='chocolate' type='checkbox' onClick={checkboxHandler}></input>Шоколадная</li>
            <li><input id='banana' type='checkbox' onClick={checkboxHandler}></input>Банановая</li>
            <li><input id='cherry' type='checkbox' onClick={checkboxHandler}></input>Вишневая</li>
            <li><input id='cheese' type='checkbox' onClick={checkboxHandler}></input>Сырная</li>
            <li></li>
        </ul>
        </div>
        <div className='do-order__wishes'>
            <h2>Пожелания</h2>
            <textarea id='wishes' onChange={wishesHandler} placeholder='Количество коржей, особенности начинки и выпечки, надпись/имя именинника.'></textarea>
        </div>
        <div className='do-order__image-upload'>
            <img className='do-order__image' alt='Загруженное изображение' src={image}></img>
                <button className='navbar-menu__button upload' onClick={() => imageField.current.click()}>
                    <p>Загрузить изображение</p>
                </button>
                <input type="file" ref={imageField} style={{ display: 'none' }} onChange={handleFileChange}/>
        </div>
    </div>
    )
}

export default CakeMakerDoOrder
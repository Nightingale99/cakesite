import './AuthPage.css'
import AuthPageNavBar from '../AuthPageNavBar/AuthPageNavBar'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function AuthPage() {
    const dispatch = useDispatch();
    const isAdminLogged = useSelector(state => state.adminLogined)
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function submitData(){
        if(email === 'admin@mail.ru' && pass === 'admin12345'){
            dispatch({type: "ADMIN_LOGIN"})
        } else {
            console.log('Аккаунт не обнаружен')
        }
    }

  return (
    <div className='auth'>
    <AuthPageNavBar/>
        <div className='auth__container'>
            {isAdminLogged ? <p className='auth__container__greetings'>Добро пожаловать, admin@mail.ru. <br/> Пожалуйста, перейдите в каталог для: Добавления тортов, Изменения тортов, Удаления тортов.</p> : 
            <form className='auth__form'>
                <label htmlFor='mail'>Почта</label>
                <input autoComplete='on' value={email} type='email' id='mail' placeholder='email@example.com' onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor='mail' >Пароль</label>
                <input autoComplete='on' value={pass} type='password' id='pass' placeholder='*******' onChange={(e) => setPass(e.target.value)}></input> 
                <button type='button' className='navbar-menu__button' onClick={submitData}><p>Войти</p></button>
            </form> }
        </div>
    </div>
  )
}

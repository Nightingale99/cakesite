import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import AboutUs from './AboutUs/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import CakeMaker from './CakeMaker/CakeMaker';
import OrderPage from './OrderPage/OrderPage';
import CakePage from './CakePage/CakePage';
import CakePageOrder from './CakePageOrder/CakePageOrder';
import AuthPage from './AuthPage/AuthPage';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const defaultState = {
  cakeList: [
    {
      name: 'Шоколадный торт Нежность',
      price: '1800₽',
      image: 'https://static.1000.menu/img/content/33865/shokoladnyi-tort-s-malinoi_1554887845_1_max.jpg',
      description: 'Нежный шоколадный торт - истинное наслаждение для любителей сладкого. Сочное мягкое тесто, пропитанное ароматным шоколадом, покрытое нежным кремом - идеальное лакомство для истинных гурманов.'
    },
    {
      name: 'Веселый калейдоскоп',
      price: '1500₽',
      image: 'https://ital-kvartal.ru/wp-content/uploads/2020/12/31793e855a4da7537981fe7c3815396d.jpg',
      description: 'Разноцветный радужный торт "Веселый калейдоскоп" - Сочный и яркий торт, как радуга после дождя, со слоями веселья и удовольствия. Каждый кусочек - новая порция радости и цвета!'
    },
    {
      name: 'Московские страсти',
      price: '2400₽',
      image: 'https://s1.eda.ru/StaticContent/Photos/120605145344/181217112959/p_O.jpg',
      description: 'Красный торт "Московские страсти" - Пылкий и страстный торт, наполненный ароматом любви и нежности. Надпись "Москва" символизирует городская романтика и вдохновение.'
    },
    {
      name: 'Ароматная свежесть',
      price: '2100₽',
      image: 'https://tort-zakaz.ru/wp-content/uploads/2023/07/u-469.jpg',
      description: 'Белый торт "Ароматная свежесть" с ягодами - Нежный белый торт, словно облачко, украшенный свежими ягодами, которые добавляют яркости и натуральной сладости. В каждом кусочке - летнее настроение!'
    },
    {
      name: 'Королевский вкус',
      price: '9999₽',
      image: 'https://tortinazakaz.spb.ru/d/fullsizerender-03-09-18-12-32-4.jpg',
      description: 'Белый торт "Королевский вкус" со съедобной короной - Великолепный торт для настоящей королевы! Белоснежные слои с масляным вкусом, украшенные короной из съедобного золота. Почувствуйте себя частью королевского дворца!'
    },
    {
      name: 'Без паники! Ты не старенький.',
      price: '1000₽',
      image: 'https://nelzyacakes.ru/wp-content/uploads/2023/02/52678780-768x1024.jpg',
      description: 'Торт с надписью "Без паники, ты не старенький" - Оригинальный торт, который поднимет настроение и напомнит, что возраст - это только цифры! Смешные надписи и вкуснейшие слои делают этот торт идеальным подарком для юмористичного праздника.'
    },
    {
      name: 'Леденцы на палочке',
      price: '150₽',
      image: 'https://images.satom.ru/i3/firms/28/55/55414/ledency-pogremushki-serdce-25-gr-iz-izomalta_c6cf4a6dec7946b_1024x3000.webp.jpg',
      description: 'Сладкие леденцы на палочке, внутри которых находится сладкая посыпка, которая может свободно пересыпаться внутри конфеты.'
    },
    {
      name: 'Бисквит в шоколадной глазури',
      price: '750₽',
      image: 'https://cdn2.static1-sima-land.com/items/703372/5/700-nw.jpg',
      description: 'Бисквит, заглазуированный шоколадом, имеющий нежную текстуру и вкусную начинку. В ассортименте имееются вкусы с черникой, малиной и ванилью'
    },
  
    {
      name: 'Пряные пряники',
      price: '440₽',
      image: 'https://cs5.livemaster.ru/storage/85/7d/dd009bf316f6a28036cb0caeedhy--suveniry-i-podarki-pryanik-kruzhevnoj-8-marta.jpg',
      description: 'Насыщенный аромат пряных специй, нежная текстура и изысканный вкус делают эти пряники настоящим произведением искусства кондитерского мастерства. Погрузитесь в мир волшебства и вкуса с нашими неповторимыми имбирными пряниками!'
    },
  
    {
      name: 'Американское печенье',
      price: '380₽',
      image: 'https://mykaleidoscope.ru/uploads/posts/2020-02/1580943543_21-p-krasivoe-pechene-85.jpg',
      description: 'Знаменитое американское печенье с шоколадной крошкой, которое тает во рту, имеет нежную текстуру. В наличии имеется печенье с драже M&M, сахарной посыпкой и дроблённым орехом'
    },
  
    {
      name: 'Черничный лес - кексы',
      price: '670₽',
      image: 'https://tilly.by/wp-content/uploads/2017/08/keksy-final1.jpg',
      description: 'Кексы "Черничный лес" имеют насыщенный и сочный вкус и аромат. Черника при укусе раскрывает свой вкус, а сочность не теряется при выпекании. Идеальный компаньон для вечеров с чашкой чая'
    },
    {
      name: 'Шоколадные звезды - кексы',
      price: '890₽',
      image: 'https://ne-kurim.ru/forum/attachments/8605-jpeg.1248198/',
      description: 'Шоколадные кексы, которые сияют не в небе, а в ваших глазах, как звёзды. Масляный крем с шоколадной жидкой начинкой внутри идеальной комбинируются вызывая наслаждение',
    },
  ],
  adminLogined: false,
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case "ADMIN_LOGIN":
      return({...state, adminLogined: true})
    case "DELETE_CAKE":
      return {
        ...state,
        cakeList: [
          ...state.cakeList.filter((cake) => {
            return cake.name !== action.name
          })
        ]
      }
    case "EDIT_CAKE":
      return {
        ...state,
        cakeList: state.cakeList.map(cake => 
          cake.name === action.cake.name 
            ? {...cake, name: action.name, description: action.description, image: action.image} 
            : cake
        )
      }
    case "ADD_CAKE":
      return{
        ...state,
        cakeList: [
          ...state.cakeList,
          {name: 'Название', description: 'Описание', image: 'https://www.pngall.com/wp-content/uploads/5/Cake-PNG-Free-Download.png', price: 0}
        ]
      }
    default:
      return state
  }
}

const store = configureStore({
  reducer: reducer,
})
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={ <App /> }/>
        <Route path="/cakemaker" element={ <CakeMaker/>}/>
        <Route path="/about-us" element={ <AboutUs/>}/>
        <Route path="/order-page" element={ <OrderPage/> }/>
        <Route path="/cake" element={ <CakePage/> }/>
        <Route path="/buy-page" element={ <CakePageOrder/> }/>
        <Route path="/auth" element={ <AuthPage/> } />
      </Routes>
    </Provider>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

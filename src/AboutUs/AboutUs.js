import './AboutUs.css';
import React from 'react';
import AboutUsNavBar from '../AboutUsNavBar/AboutUsNavBar';

function AboutUs(){
    return(
        <div className='about-us'>
            <AboutUsNavBar/>
            <div className='about-us__text'><p>В кондитерской "Мечта Сладкоежки" каждый десерт - это настоящее произведение искусства, созданное с любовью и страстью к сладостям. Здесь работают настоящие мастера своего дела, которые умеют превратить обычный кусочек торта или пирожное в незабываемое вкусовое путешествие. 

Каждый день в "Мечте Сладкоежки" предлагаются новые удивительные вкусы и формы, которые поражают воображение и радуют глаз. Атмосфера в кондитерской наполнена ароматами свежих выпечек и уютом, который приглашает остановиться на чашечку кофе и насладиться моментом.

Люди выбирают "Мечту Сладкоежки", потому что здесь каждый посетитель чувствует себя особенным и ценным. Кондитерская стала местом, где проводятся праздничные мероприятия и дни рождения, где встречаются друзья и близкие. Это место, где можно забыть о повседневных заботах и насладиться волшебством сладких угощений. 

"Мечта Сладкоежки" - это не просто кондитерская, это место, где рождаются счастливые моменты и запоминающиеся впечатления. Вы можете оценить работу наших лучших кондитеров ниже:</p>
<div className='about-us__images flex'>
<img src='https://ololo.tv/wp-content/uploads/2018/07/201819071159091.jpg' alt='Лучшая работа'></img>
<img src='https://sweetmarin.ru/userfls/editor/large/3/28521_hkas9b7dfiu--kopiya.jpg' alt='Лучшая работа'></img>
<img src='https://kartinki.pics/uploads/posts/2022-08/1661374418_2-kartinkin-net-p-samie-uzhasnie-torti-vkontakte-2.jpg' alt='Лучшая работа'></img>
<img src='https://avatars.mds.yandex.net/i?id=e32d766f54b6a3213c44c2b42bb5843fee650375-12645377-images-thumbs&n=13' alt='Лучшая работа'></img>
<img src='https://avatars.dzeninfra.ru/get-zen_doc/3990034/pub_5f8421a742a69673f7c36fc1_5f8421c1109c65627ec64ae1/scale_1200' alt='Лучшая работа'></img>
<img src='https://kartinki.pics/uploads/posts/2022-12/thumbs/1670241008_13-kartinkin-net-p-samie-nekrasivie-torti-instagram-13.jpg' alt='Лучшая работа'></img>
</div>
</div>
        </div>
    )
}

export default AboutUs;
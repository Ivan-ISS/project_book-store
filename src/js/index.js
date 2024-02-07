import { circleSwitch, automaticSwitch } from './slider';
import { BookShop } from './bookShop';
import '../styles/styles.scss';

document.write('Hello, webpack-dev-server');

//----------------------------------------------------------------------------------------------------
//------------------------------ОПРЕДЕЛЕНИЕ ВХОДНЫХ ДАННЫХ ДЛЯ СЛАЙДЕРА-------------------------------
const entities = [
    {
        img: './images/png/banner-sale.png',
    },
    {
        img: './images/png/banner-entrepreneurs.png',
    },
    {
        img: './images/png/banner-selection-books.png',
    }
];

const picture = document.querySelector('.banner__image-slide');
const btnCircle = document.querySelectorAll('.selection__circle-btn');
const cssBtnCircle = 'selection__circle-btn-focus';


//----------------------------------------------------------------------------------------------------
//-------------------------------------------ЗАПУСК СЛАЙДЕРА------------------------------------------
circleSwitch(btnCircle, cssBtnCircle, picture, entities);
automaticSwitch(btnCircle, cssBtnCircle, picture, entities);


//----------------------------------------------------------------------------------------------------
//--------------------------ОПРЕДЕЛЕНИЕ ВХОДНЫХ ДАННЫХ ДЛЯ КНИЖНОГО МАГАЗИНА--------------------------
const btnCategory = document.querySelectorAll('.showcase__btn-category');
const btnLoadMore = document.querySelector('.button-load__more-btn');
const displayPlaceBooks = document.querySelector('.showcase__set-books');
const shopBagCount = document.querySelector('.header__shop-bag-count');
const btnBuyNameClass = '.showcase__buy-btn';

const classActive = 'active';
const textBuyNow = 'BUY NOW';
const textInTheCart = 'IN THE CART';

const apiKey = 'AIzaSyAHob8U_bK0Ced2hyWjsF5PVWDP91OBS-8';
const startIndex = 0;
const maxResults = 6;
const langRestrict = 'ru';
 

//----------------------------------------------------------------------------------------------------
//--------------------------------------ЗАПУСК КНИЖНОГО МАГАЗИНА--------------------------------------
const bookShop = new BookShop
(
    apiKey, startIndex, maxResults, langRestrict, btnCategory, 
    btnLoadMore, displayPlaceBooks, shopBagCount, btnBuyNameClass,
    classActive, textBuyNow, textInTheCart
);
bookShop.run();

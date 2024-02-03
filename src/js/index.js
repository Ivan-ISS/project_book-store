import { circleSwitch, automaticSwitch } from './slider';
/* import { BookCategories } from './bookCategories'; */
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

/* console.log(btnCategory); */


//----------------------------------------------------------------------------------------------------
//--------------------------------------ЗАПУСК КНИЖНОГО МАГАЗИНА--------------------------------------
const bookShop = new BookShop('AIzaSyAHob8U_bK0Ced2hyWjsF5PVWDP91OBS-8', 0, 6, 'ru', btnCategory, btnLoadMore, displayPlaceBooks);
bookShop.run();




/* const bookCategory = new BookCategories('AIzaSyAHob8U_bK0Ced2hyWjsF5PVWDP91OBS-8', 0, 1, 'en', btnCategory);
bookCategory.request(); */

/* function useRequest(url) {
    return fetch(url)
        .then((response) => {
            console.log('response', response);
            const result = response.json();
            console.log('result', result);
            return result;
        })
        .then((data) => {
            console.log(data);
            //const pictureJSON = [];
            
            //data.forEach((item) => {
            //    pictureJSON.push({
            //        src: item.download_url,
            //        author: item.author,
            //    });
            //});
            //localStorage.setItem('pictureJSON', JSON.stringify(pictureJSON));
          //console.log(localStorage)
        })
        .catch(() => { console.log('error'); });
}

btnCategory.addEventListener('click', () => {
    let url = 'https://www.googleapis.com/books/v1/volumes?q=%22subject:Business%22&key=AIzaSyAHob8U_bK0Ced2hyWjsF5PVWDP91OBS-8&printType=books&startIndex=0&maxResults=1&langRestrict=en';
    useRequest(url);
}); */
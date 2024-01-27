import { circleSwitch, automaticSwitch } from './slider';
import '../styles/styles.scss';

document.write('Hello, webpack-dev-server');


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

circleSwitch(btnCircle, cssBtnCircle, picture, entities);
automaticSwitch(btnCircle, cssBtnCircle, picture, entities);
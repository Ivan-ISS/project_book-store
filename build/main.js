/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project_book-store/./src/styles/styles.scss?");

/***/ }),

/***/ "./src/js/bookCategories.js":
/*!**********************************!*\
  !*** ./src/js/bookCategories.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BookCategories: () => (/* binding */ BookCategories)\n/* harmony export */ });\nclass BookCategories {\r\n\r\n    constructor(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks, bookShop) {\r\n        this.subject = '';\r\n        this.apiKey = apiKey;\r\n        this.printType = 'books';\r\n        this.startIndex = startIndex;\r\n        this.maxResults = maxResults;\r\n        this.langRestrict = langRestrict;\r\n\r\n        this.btnCategory = btnCategory;\r\n        this.bookShop = bookShop;\r\n        this.btnLoadMore = btnLoadMore;\r\n        this.displayPlaceBooks = displayPlaceBooks;\r\n    }\r\n\r\n    defaultLoad() {\r\n        this.displayPlaceBooks.innerHTML = '';\r\n        this.subject = this.btnCategory[0].innerText;\r\n        this.createUrl();\r\n        this.request();\r\n    }\r\n\r\n    createUrl() {\r\n        this.url = `https://www.googleapis.com/books/v1/volumes?q=%22subject:${this.subject}%22&key=${this.apiKey}&printType=${this.printType}&startIndex=${this.startIndex}&maxResults=${this.maxResults}&langRestrict=${this.langRestrict}`;\r\n    }\r\n\r\n    request() {\r\n        fetch(this.url)\r\n            .then((response) => {\r\n                // console.log('response', response);\r\n                const result = response.json();\r\n                return result;\r\n            })\r\n            .then((data) => {\r\n                console.log(data);\r\n                // this.imageCoverLinks = data.items[0].volumeInfo.imageLinks.thumbnail;\r\n                // this.authors = data.items[0].volumeInfo.authors;\r\n                let booksJSON = [];\r\n\r\n                data.items.forEach((item) => {\r\n                    booksJSON.push({\r\n                        id: item.id,\r\n                        imageCoverLinks: item.volumeInfo.imageLinks?.thumbnail,\r\n                        author: item.volumeInfo.authors,\r\n                        title: item.volumeInfo.title,\r\n                        rating: item.volumeInfo.averageRating,\r\n                        review: item.volumeInfo.ratingsCount,\r\n                        description: item.volumeInfo.description,\r\n                        retailPrice: item.saleInfo.retailPrice,\r\n                    });\r\n                });\r\n\r\n                localStorage.setItem('booksJSON', JSON.stringify(booksJSON));\r\n                this.bookShop.card.createContent();\r\n                this.bookShop.shopBag.counterProduct();\r\n            })\r\n            .catch(() => {\r\n                console.log('error');\r\n            });\r\n    }\r\n\r\n    handlerButton() {\r\n        for (let i = 0; i < this.btnCategory.length; i++) {\r\n            this.btnCategory[i].addEventListener('click', (event) => {\r\n                this.displayPlaceBooks.innerHTML = '';\r\n                this.subject = event.currentTarget.dataset.attribute;\r\n\r\n                this.btnCategory.forEach(function(element) {\r\n                    element.classList.remove('active');\r\n                });\r\n                event.currentTarget.classList.add('active');\r\n\r\n                this.createUrl();\r\n                this.request();\r\n            });\r\n        }\r\n    }\r\n\r\n    loadMore() {\r\n        this.btnLoadMore.addEventListener('click', () => {\r\n            this.startIndex = this.startIndex + this.maxResults;\r\n            this.createUrl();\r\n            this.request();\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://project_book-store/./src/js/bookCategories.js?");

/***/ }),

/***/ "./src/js/bookShop.js":
/*!****************************!*\
  !*** ./src/js/bookShop.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BookShop: () => (/* binding */ BookShop)\n/* harmony export */ });\n/* harmony import */ var _bookCategories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookCategories */ \"./src/js/bookCategories.js\");\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ \"./src/js/cards.js\");\n/* harmony import */ var _shopBag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopBag */ \"./src/js/shopBag.js\");\n\r\n\r\n\r\n\r\nclass BookShop {\r\n    constructor(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks, shopBagCount, btnBuyNameClass) {\r\n        this.card = new _cards__WEBPACK_IMPORTED_MODULE_1__.Cards(displayPlaceBooks, this);\r\n        this.bookCategory = new _bookCategories__WEBPACK_IMPORTED_MODULE_0__.BookCategories(apiKey, startIndex, maxResults, langRestrict, btnCategory, btnLoadMore, displayPlaceBooks, this);\r\n        this.shopBag = new _shopBag__WEBPACK_IMPORTED_MODULE_2__.ShopBag(shopBagCount, btnBuyNameClass);\r\n    }\r\n\r\n    run() {\r\n        this.bookCategory.defaultLoad();\r\n        this.bookCategory.handlerButton();\r\n        this.bookCategory.loadMore();\r\n        // this.shopBag.counterProduct();\r\n    }\r\n}\n\n//# sourceURL=webpack://project_book-store/./src/js/bookShop.js?");

/***/ }),

/***/ "./src/js/cards.js":
/*!*************************!*\
  !*** ./src/js/cards.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cards: () => (/* binding */ Cards)\n/* harmony export */ });\nclass Cards {\r\n\r\n    constructor(displayPlaceBooks, bookShop) {\r\n        this.displayPlaceBooks = displayPlaceBooks;\r\n        this.bookShop = bookShop;\r\n    }\r\n\r\n    displayCard() {\r\n\r\n    }\r\n\r\n    createContent() {\r\n        let cards = '';\r\n        const data = JSON.parse(localStorage.getItem('booksJSON'));\r\n        data.forEach((item) => {\r\n            if (item.rating === undefined) { item.rating = 0; }\r\n            /* if (item.imageCoverLinks === undefined) { item.imageCoverLinks = './images/png/placeholder.png'; } */\r\n            const content = `\r\n            <div class=\"showcase__book\">\r\n                <div class=\"showcase__book-cover\">\r\n                    <img class=\"showcase__book-cover-img\" src=\"${item.imageCoverLinks ? item.imageCoverLinks : './images/png/placeholder.png' }\" alt=\"Book cover\">\r\n                </div>\r\n                <div class=\"showcase__book-info\">\r\n                    <div class=\"showcase__book-data\">\r\n                        <p class=\"showcase__book-author\">${item.author ? item.author : 'Author unknown' }</p>\r\n                        <h3 class=\"showcase__book-title\">${item.title}</h3>\r\n                        <div class=\"showcase__book-rating\">\r\n                            <div class=\"showcase__stars\">\r\n                                <svg width=\"60\" height=\"11\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                                    <path d=\"m5.8718,0.03648l1.80568,3.51469l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147l0,0.00001z\r\n                                    m11.92307,0.03647l1.80568,3.5147l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147z\r\n                                    m12.10257,0.03648l1.80568,3.5147l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147z\r\n                                    m12.28205,0.03647l1.80568,3.5147l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147z\r\n                                    m12.33333,0.03648l1.80568,3.5147l3.90062,0.6312l-2.78465,2.8034l0.60506,3.9048l-3.52671,-1.7821l-3.52671,1.7821l0.60506,-3.9048l-2.78469,-2.8034l3.90066,-0.6312l1.80568,-3.5147z\" \r\n                                    fill=\"#f2c94c\" clip-path=\"inset(0 ${(1 - item.rating / 5) * 100}% 0 0)\" id=\"svg_1\"/>\r\n                                </svg>\r\n                            </div>\r\n                            <span class=\"showcase__review\">${item.review ? item.review + 'review' : '' }</span>\r\n                        </div>\r\n                    </div>\r\n                    <p class=\"showcase__book-description\">${item.description ? item.description : 'No description'}</p>\r\n                    <span class=\"showcase__book-price\">${item.retailPrice?.amount ? item.retailPrice?.amount + ' ' + item.retailPrice?.currencyCode : ''}</span>\r\n                    <button class=\"showcase__buy-btn\" id=\"${item.id}\">Buy now</button>\r\n                </div>\r\n            </div>\r\n            `;\r\n            cards = cards + content;\r\n        });\r\n        this.displayPlaceBooks.innerHTML += cards;\r\n        this.bookShop.shopBag.checkingBooksInShopBag();\r\n        return cards;\r\n    }\r\n}\n\n//# sourceURL=webpack://project_book-store/./src/js/cards.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/js/slider.js\");\n/* harmony import */ var _bookShop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookShop */ \"./src/js/bookShop.js\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n\r\n/* import { BookCategories } from './bookCategories'; */\r\n\r\n\r\n\r\ndocument.write('Hello, webpack-dev-server');\r\n\r\n//----------------------------------------------------------------------------------------------------\r\n//------------------------------ОПРЕДЕЛЕНИЕ ВХОДНЫХ ДАННЫХ ДЛЯ СЛАЙДЕРА-------------------------------\r\nconst entities = [\r\n    {\r\n        img: './images/png/banner-sale.png',\r\n    },\r\n    {\r\n        img: './images/png/banner-entrepreneurs.png',\r\n    },\r\n    {\r\n        img: './images/png/banner-selection-books.png',\r\n    }\r\n];\r\n\r\nconst picture = document.querySelector('.banner__image-slide');\r\nconst btnCircle = document.querySelectorAll('.selection__circle-btn');\r\nconst cssBtnCircle = 'selection__circle-btn-focus';\r\n\r\n\r\n//----------------------------------------------------------------------------------------------------\r\n//-------------------------------------------ЗАПУСК СЛАЙДЕРА------------------------------------------\r\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.circleSwitch)(btnCircle, cssBtnCircle, picture, entities);\r\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.automaticSwitch)(btnCircle, cssBtnCircle, picture, entities);\r\n\r\n\r\n\r\n//----------------------------------------------------------------------------------------------------\r\n//--------------------------ОПРЕДЕЛЕНИЕ ВХОДНЫХ ДАННЫХ ДЛЯ КНИЖНОГО МАГАЗИНА--------------------------\r\nconst btnCategory = document.querySelectorAll('.showcase__btn-category');\r\nconst btnLoadMore = document.querySelector('.button-load__more-btn');\r\nconst displayPlaceBooks = document.querySelector('.showcase__set-books');\r\nconst shopBagCount = document.querySelector('.header__shop-bag-count');\r\nconst btnBuyNameClass = '.showcase__buy-btn';\r\n\r\n// console.log(btnBuy);\r\n\r\n\r\n//----------------------------------------------------------------------------------------------------\r\n//--------------------------------------ЗАПУСК КНИЖНОГО МАГАЗИНА--------------------------------------\r\nconst bookShop = new _bookShop__WEBPACK_IMPORTED_MODULE_1__.BookShop('AIzaSyAHob8U_bK0Ced2hyWjsF5PVWDP91OBS-8', 0, 6, 'ru', btnCategory, btnLoadMore, displayPlaceBooks, shopBagCount, btnBuyNameClass);\r\nbookShop.run();\r\n\r\n\r\n\r\n\r\n/* const bookCategory = new BookCategories('AIzaSyAHob8U_bK0Ced2hyWjsF5PVWDP91OBS-8', 0, 1, 'en', btnCategory);\r\nbookCategory.request(); */\r\n\r\n/* function useRequest(url) {\r\n    return fetch(url)\r\n        .then((response) => {\r\n            console.log('response', response);\r\n            const result = response.json();\r\n            console.log('result', result);\r\n            return result;\r\n        })\r\n        .then((data) => {\r\n            console.log(data);\r\n            //const pictureJSON = [];\r\n            \r\n            //data.forEach((item) => {\r\n            //    pictureJSON.push({\r\n            //        src: item.download_url,\r\n            //        author: item.author,\r\n            //    });\r\n            //});\r\n            //localStorage.setItem('pictureJSON', JSON.stringify(pictureJSON));\r\n          //console.log(localStorage)\r\n        })\r\n        .catch(() => { console.log('error'); });\r\n}\r\n\r\nbtnCategory.addEventListener('click', () => {\r\n    let url = 'https://www.googleapis.com/books/v1/volumes?q=%22subject:Business%22&key=AIzaSyAHob8U_bK0Ced2hyWjsF5PVWDP91OBS-8&printType=books&startIndex=0&maxResults=1&langRestrict=en';\r\n    useRequest(url);\r\n}); */\n\n//# sourceURL=webpack://project_book-store/./src/js/index.js?");

/***/ }),

/***/ "./src/js/shopBag.js":
/*!***************************!*\
  !*** ./src/js/shopBag.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShopBag: () => (/* binding */ ShopBag)\n/* harmony export */ });\nclass ShopBag {\r\n\r\n    constructor(shopBagCount, btnBuyNameClass) {\r\n        this.btnBuyNameClass = btnBuyNameClass;\r\n        this.shopBagCount = shopBagCount;\r\n        this.count = 0;\r\n        // this.booksInShopBag = {};\r\n        this.booksInShopBag = JSON.parse(localStorage.getItem('booksInShopBag')) ? JSON.parse(localStorage.getItem('booksInShopBag')) : {};\r\n        console.log(this.booksInShopBag);\r\n    }\r\n\r\n    addLocalStorage(book) {\r\n        const data = JSON.parse(localStorage.getItem('booksJSON'));\r\n        data.forEach((item) => {\r\n            if (item.id === book) {\r\n                this.booksInShopBag[item.id] = item;\r\n                localStorage.setItem('booksInShopBag', JSON.stringify(this.booksInShopBag));\r\n            }\r\n        });\r\n    }\r\n\r\n    removeLocalStorage(book) {\r\n        // const data = JSON.parse(localStorage.getItem('booksInShopBag'));\r\n        if (book in this.booksInShopBag) {\r\n            delete this.booksInShopBag[book];\r\n            localStorage.setItem('booksInShopBag', JSON.stringify(this.booksInShopBag));\r\n            // console.log(JSON.parse(localStorage.getItem('booksInShopBag')));\r\n        }\r\n    }\r\n\r\n    checkingBooksInShopBag() {\r\n        this.btnBuy = document.querySelectorAll(this.btnBuyNameClass);\r\n        // const books = JSON.parse(localStorage.getItem('booksInShopBag'));\r\n        if (this.booksInShopBag) this.count = Object.keys(this.booksInShopBag).length;\r\n\r\n        console.log(this.booksInShopBag);\r\n        console.log(this.count);\r\n\r\n        for (let i = 0; i < this.btnBuy.length; i++) {\r\n            if (this.booksInShopBag && this.btnBuy[i].id in this.booksInShopBag) {\r\n                this.btnBuy[i].classList.add('showcase__buy-btn-active');\r\n                this.btnBuy[i].innerText = 'IN THE CART';\r\n            }\r\n        }\r\n        this.shopBagCount.innerText = this.count;\r\n        if (this.count) this.shopBagCount.style.display = 'block';\r\n    }\r\n\r\n    counterProduct() {\r\n        this.btnBuy = document.querySelectorAll(this.btnBuyNameClass);\r\n        for (let i = 0; i < this.btnBuy.length; i++) {\r\n            this.btnBuy[i].addEventListener('click', (event) => {\r\n                // console.log(event.currentTarget.innerText);\r\n                if (event.currentTarget.innerText === 'BUY NOW') {\r\n                    this.count += 1;\r\n                    event.currentTarget.innerText = 'IN THE CART';\r\n                    // console.log(event.currentTarget.id);\r\n                    this.addLocalStorage(event.currentTarget.id);\r\n                } else {\r\n                    this.count -= 1;\r\n                    event.currentTarget.innerText = 'BUY NOW';\r\n                    this.removeLocalStorage(event.currentTarget.id);\r\n                }\r\n                this.shopBagCount.style.display = 'block';\r\n                event.currentTarget.classList.toggle('showcase__buy-btn-active');\r\n                this.shopBagCount.innerText = this.count;\r\n            });\r\n        }    \r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n// localStorage.removeItem('booksInShopBag'); localStorage.removeItem('numBooks');\n\n//# sourceURL=webpack://project_book-store/./src/js/shopBag.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   automaticSwitch: () => (/* binding */ automaticSwitch),\n/* harmony export */   circleSwitch: () => (/* binding */ circleSwitch)\n/* harmony export */ });\n// Переменные используемые в модуле:\r\n// btnCircle - массив с основными кнопками слайдера (круглыми) ===> const btnCircle = document.querySelectorAll('.selection__circle-btn');\r\n// cssBtnCircle - наименование селектора (класса), которому заданы стили \"нажатой\" кнопки;\r\n// picture - элемент img (содержащий scr изображения) ===> const picture = document.querySelector('.banner__image-slide');\r\n// entities - массив объектов содержащих данные для вставки на страницу (в данном случае относительные адреса изображений);\r\n\r\nlet currentIndex = 1;\r\n\r\n//----------------------------------------------------------------------------------------------------\r\n//-----------------------------ФУНКЦИЯ ВСТАВКИ ИЗОБРАЖЕНИЯ В ЭЛЕМЕНТ----------------------------------\r\nconst setEntity = (picture, entities, index) => {\r\n    picture.src = `${entities[index].img}`;\r\n};\r\n\r\n//----------------------------------------------------------------------------------------------------\r\n//------------ФУНКЦИЯ ДЛЯ УСТАНОВКИ СТИЛЯ \"НАЖАТОЙ\" КНОПКИ ДЛЯ СТАРТОВОГО ИЗОБРАЖЕНИЯ-----------------\r\n\r\nfunction startPosition(btnCircle, cssBtnCircle, picture, entities) {\r\n    for (let i = 0; i < entities.length; i = i + 1) {\r\n        if (entities[i].img === picture.getAttribute('src')) {\r\n            btnCircle[i].classList.add(cssBtnCircle);\r\n        }\r\n    }\r\n}\r\n\r\n//----------------------------------------------------------------------------------------------------\r\n//-------------ФУНКЦИЯ ОБРАБОТКИ НАЖАТИЙ НА КРУГЛЫЕ КНОПКИ (ОСНОВНОЙ ФУНКЦИОНАЛ СЛАЙДЕРА)-------------\r\n\r\nfunction circleSwitch(btnCircle, cssBtnCircle, picture, entities) {\r\n\r\n    startPosition(btnCircle, cssBtnCircle, picture, entities);      // Вызов функции для определения стартового изображения на странице и задания стиля \"нажатой\" (соответствующей) кнопки\r\n    \r\n    btnCircle.forEach((element, num) => {\r\n        element.addEventListener('click', () => {\r\n            \r\n            setEntity(picture, entities, num);                      // Вызов функции вставки очередного изображения\r\n            \r\n            for (let i = 0; i < btnCircle.length; i = i + 1) {\r\n                btnCircle[i].classList.remove(cssBtnCircle);\r\n            }\r\n            btnCircle[num].classList.add(cssBtnCircle);\r\n\r\n            currentIndex = num + 1;\r\n            if (currentIndex === btnCircle.length) {\r\n                currentIndex = 0;\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n//----------------------------------------------------------------------------------------------------\r\n//-----------ФУНКЦИЯ АВТОМАТИЧЕСКОЙ СМЕНЫ ИЗОБРАЖЕНИЙ (ДОПОЛНИТЕЛЬНЫЙ ФУНКЦИОНАЛ СЛАЙДЕРА)------------\r\n\r\nfunction automaticSwitch(btnCircle, cssBtnCircle, picture, entities) {\r\n\r\n    setInterval(() => {\r\n        \r\n        setEntity(picture, entities, currentIndex);                 // Вызов функции вставки очередного изображения\r\n\r\n        for (let i = 0; i < btnCircle.length; i = i + 1) {\r\n            btnCircle[i].classList.remove(cssBtnCircle);\r\n        }\r\n        btnCircle[currentIndex].classList.add(cssBtnCircle);\r\n\r\n        currentIndex++;\r\n        if (currentIndex === btnCircle.length) {\r\n            currentIndex = 0;\r\n        }\r\n    }, 5000);\r\n}\r\n\r\n//----------------------------------------------------------------------------------------------------\r\n\r\n\n\n//# sourceURL=webpack://project_book-store/./src/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
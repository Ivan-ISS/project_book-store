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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BookCategories: () => (/* binding */ BookCategories)\n/* harmony export */ });\nclass BookCategories {\r\n\r\n    constructor(apiKey, startIndex, maxResults, langRestrict, btnCategory) {\r\n        this.subject = '';\r\n        this.apiKey = apiKey;\r\n        this.printType = 'books';\r\n        this.startIndex = startIndex;\r\n        this.maxResults = maxResults;\r\n        this.langRestrict = langRestrict;\r\n\r\n        this.btnCategory = btnCategory;\r\n    }\r\n\r\n    createUrl() {\r\n        this.url = `https://www.googleapis.com/books/v1/volumes?q=%22subject:${this.subject}%22&key=${this.apiKey}&printType=${this.printType}&startIndex=${this.startIndex}&maxResults=${this.maxResults}&langRestrict=${this.langRestrict}`;\r\n    }\r\n\r\n    request() {\r\n        for (let i = 0; i < this.btnCategory.length; i++) {\r\n            this.btnCategory[i].addEventListener('click', (event) => {\r\n                console.log(event.currentTarget);\r\n                console.log(event.currentTarget.innerText);\r\n                this.subject = event.currentTarget.innerText;\r\n                this.createUrl();\r\n\r\n                console.log(this.url);\r\n                this.string = '0';\r\n\r\n                return fetch(this.url)\r\n                    .then((response) => {\r\n                        console.log('response', response);\r\n                        const result = response.json();\r\n                        console.log('result', result);\r\n                        return result;\r\n                    })\r\n                    .then((data) => {\r\n                        console.log(data);\r\n                        console.log(data.items[0].volumeInfo);\r\n                        console.log(data.items[0].volumeInfo.imageLinks);\r\n                        console.log(data.items[0].volumeInfo.authors);\r\n                        console.log(data.items[0].volumeInfo.title);\r\n                        console.log(data.items[0].volumeInfo.description);\r\n                        console.log(data.items[0].volumeInfo.categories);\r\n                        //const pictureJSON = [];\r\n                        \r\n                        //data.forEach((item) => {\r\n                        //    pictureJSON.push({\r\n                        //        src: item.download_url,\r\n                        //        author: item.author,\r\n                        //    });\r\n                        //});\r\n                        //localStorage.setItem('pictureJSON', JSON.stringify(pictureJSON));\r\n                    //console.log(localStorage)\r\n                    })\r\n                    .catch(() => {\r\n                        console.log('error');\r\n                    });\r\n            });\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://project_book-store/./src/js/bookCategories.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/js/slider.js\");\n/* harmony import */ var _bookCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookCategories */ \"./src/js/bookCategories.js\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n\r\n\r\n\r\n\r\ndocument.write('Hello, webpack-dev-server');\r\n\r\n\r\nconst entities = [\r\n    {\r\n        img: './images/png/banner-sale.png',\r\n    },\r\n    {\r\n        img: './images/png/banner-entrepreneurs.png',\r\n    },\r\n    {\r\n        img: './images/png/banner-selection-books.png',\r\n    }\r\n];\r\n\r\nconst picture = document.querySelector('.banner__image-slide');\r\nconst btnCircle = document.querySelectorAll('.selection__circle-btn');\r\nconst cssBtnCircle = 'selection__circle-btn-focus';\r\n\r\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.circleSwitch)(btnCircle, cssBtnCircle, picture, entities);\r\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.automaticSwitch)(btnCircle, cssBtnCircle, picture, entities);\r\n\r\n\r\n\r\n\r\nconst btnCategory = document.querySelectorAll('.showcase__btn-category');\r\nconsole.log(btnCategory);\r\n\r\nconst bookCategory = new _bookCategories__WEBPACK_IMPORTED_MODULE_1__.BookCategories('AIzaSyAHob8U_bK0Ced2hyWjsF5PVWDP91OBS-8', 0, 1, 'en', btnCategory);\r\nbookCategory.request();\r\n\r\n/* function useRequest(url) {\r\n    return fetch(url)\r\n        .then((response) => {\r\n            console.log('response', response);\r\n            const result = response.json();\r\n            console.log('result', result);\r\n            return result;\r\n        })\r\n        .then((data) => {\r\n            console.log(data);\r\n            //const pictureJSON = [];\r\n            \r\n            //data.forEach((item) => {\r\n            //    pictureJSON.push({\r\n            //        src: item.download_url,\r\n            //        author: item.author,\r\n            //    });\r\n            //});\r\n            //localStorage.setItem('pictureJSON', JSON.stringify(pictureJSON));\r\n          //console.log(localStorage)\r\n        })\r\n        .catch(() => { console.log('error'); });\r\n}\r\n\r\nbtnCategory.addEventListener('click', () => {\r\n    let url = 'https://www.googleapis.com/books/v1/volumes?q=%22subject:Business%22&key=AIzaSyAHob8U_bK0Ced2hyWjsF5PVWDP91OBS-8&printType=books&startIndex=0&maxResults=1&langRestrict=en';\r\n    useRequest(url);\r\n}); */\n\n//# sourceURL=webpack://project_book-store/./src/js/index.js?");

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
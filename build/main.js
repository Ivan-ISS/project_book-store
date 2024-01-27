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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/js/slider.js\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n\r\n\r\n\r\ndocument.write('Hello, webpack-dev-server');\r\n\r\n\r\nconst entities = [\r\n    {\r\n        img: './images/png/banner-sale.png',\r\n    },\r\n    {\r\n        img: './images/png/banner-entrepreneurs.png',\r\n    },\r\n    {\r\n        img: './images/png/banner-selection-books.png',\r\n    }\r\n];\r\n\r\nconst picture = document.querySelector('.banner__image-slide');\r\nconst btnCircle = document.querySelectorAll('.selection__circle-btn');\r\nconst cssBtnCircle = 'selection__circle-btn-focus';\r\n\r\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.circleSwitch)(btnCircle, cssBtnCircle, picture, entities);\n\n//# sourceURL=webpack://project_book-store/./src/js/index.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   circleSwitch: () => (/* binding */ circleSwitch)\n/* harmony export */ });\nconst setEntity = (index, picture, entities) => {\r\n    picture.src = `${entities[index].img}`;\r\n};\r\n\r\n/* let currentIndex = 0; */\r\n\r\n//----------------------------------------------------------------------------------------------------\r\n//----------------------------------SELECTING-THE-FIRST-POSITION--------------------------------------\r\n\r\nfunction startPosition(btnCircle, cssBtnCircle, picture, entities) {\r\n    for (let i = 0; i < entities.length; i = i + 1) {\r\n        if (entities[i].img === picture.getAttribute('src')) {\r\n            //btnList[i].classList.add(cssBtnList);\r\n            btnCircle[i].classList.add(cssBtnCircle);\r\n        }\r\n    }\r\n}\r\n\r\n//----------------------------------------------------------------------------------------------------\r\n//-----------------------------------------CIRCLE-BUTTONS---------------------------------------------\r\n\r\nfunction circleSwitch(btnCircle, cssBtnCircle, picture, entities) {\r\n    startPosition(btnCircle, cssBtnCircle, picture, entities);\r\n    btnCircle.forEach((element, num) => {\r\n        element.addEventListener('click', () => {\r\n            setEntity(num, picture, entities);\r\n            for (let i = 0; i < btnCircle.length; i = i + 1) {\r\n                btnCircle[i].classList.remove(cssBtnCircle);\r\n                /* btnList[i].classList.remove(cssBtnList); */\r\n            }\r\n            btnCircle[num].classList.add(cssBtnCircle);\r\n            /* btnList[num].classList.add(cssBtnList); */\r\n            /* currentIndex = num; */\r\n        });\r\n    });\r\n}\r\n\r\n//----------------------------------------------------------------------------------------------------\r\n\r\n\n\n//# sourceURL=webpack://project_book-store/./src/js/slider.js?");

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
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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/js/slider.js\");\n\r\n\r\ndocument.write('Hello, webpack');\r\n\r\ndocument.write(_slider__WEBPACK_IMPORTED_MODULE_0__.entities);\n\n//# sourceURL=webpack://project_book-store/./src/js/index.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   entities: () => (/* binding */ entities)\n/* harmony export */ });\nconst entities = [\r\n    {\r\n      city: 'Rostov-on-Don <br> LCD admiral',\r\n      apartmentArea: '81 m<sup>2</sup>',\r\n      repairTime: '3.5 months',\r\n      repairCost: 'Upon request',\r\n      img: 'images/jpeg/projects-img.jpg',\r\n      imgMobile: 'images/jpeg/projects-img.jpg'\r\n    },\r\n    {\r\n      city: 'Sochi <br> Thieves',\r\n      apartmentArea: '105 m<sup>2</sup>',\r\n      repairTime: '4 months',\r\n      repairCost: 'Upon request',\r\n      img: 'images/jpeg/projects-img2.jpg',\r\n      imgMobile: 'images/jpeg/projects-img2.jpg'\r\n    },\r\n    {\r\n      city: 'Rostov-on-Don <br> Patriotic',\r\n      apartmentArea: '93 m<sup>2</sup>',\r\n      repairTime: '3 months',\r\n      repairCost: 'Upon request',\r\n      img: 'images/jpeg/projects-img3.jpg',\r\n      imgMobile: 'images/jpeg/projects-img3.jpg'\r\n    }\r\n]\r\n\r\n/* const textCity = document.querySelector('.projects__data-text_entity_city')\r\nconst textApartmentArea = document.querySelector('.projects__data-text_entity_area')\r\nconst textRepairTime = document.querySelector('.projects__data-text_entity_time')\r\nconst textRepairCost = document.querySelector('.projects__data-text_entity_cost')\r\nconst img = document.querySelector('.projects__img-block')\r\nconst imgMobile = document.querySelector('.projects__img-photo-mobile')\r\nconst photo = document.querySelector('.projects__img-photo')\r\n\r\nconst setEntity = (index) => {\r\n    textCity.innerHTML = entities[index].city\r\n    textApartmentArea.innerHTML = entities[index].apartmentArea\r\n    textRepairTime.innerHTML = entities[index].repairTime\r\n    textRepairCost.innerHTML = entities[index].repairCost\r\n    img.innerHTML = `<img class=\"projects__img-photo\" src=\"${entities[index].img}\" alt=\"Photo\">`\r\n    imgMobile.src=`${entities[index].img}`\r\n}\r\n\r\nconst prev = document.querySelector('.projects__selection-arrow-btn_direction_left')\r\nconst next = document.querySelector('.projects__selection-arrow-btn_direction_right')\r\nconst btnList = document.querySelectorAll('.projects__list-btn')\r\nconst btnCircle = document.querySelectorAll('.projects__selection-circle-btn')\r\nconst cssBtnList = 'projects__list-btn-hover'\r\nconst cssBtnCircle = 'projects__selection-circle-btn-focus'\r\nconst prevMobile = document.querySelector('.projects__mobile-btn_direction_left')\r\nconst nextMobile = document.querySelector('.projects__mobile-btn_direction_right')\r\nlet currentIndex = 0\r\n\r\n//---------------------------------ARROW-BUTTONS---------------------------------------------------\r\n\r\nprev.addEventListener('click', () => {\r\n    if (currentIndex === 0) {\r\n        currentIndex = entities.length\r\n    }\r\n    setEntity(currentIndex -= 1);\r\n    for (let i = 0; i < btnList.length; i = i + 1) {\r\n        btnList[i].classList.remove(cssBtnList)\r\n        btnCircle[i].classList.remove(cssBtnCircle)\r\n    }\r\n    btnList[currentIndex].classList.add(cssBtnList)\r\n    btnCircle[currentIndex].classList.add(cssBtnCircle)\r\n})\r\nnext.addEventListener('click', () => {\r\n    if (currentIndex === entities.length - 1) {\r\n        currentIndex = -1\r\n    }\r\n    setEntity(currentIndex += 1);\r\n    for (let i = 0; i < btnList.length; i = i + 1) {\r\n        btnList[i].classList.remove(cssBtnList)\r\n        btnCircle[i].classList.remove(cssBtnCircle)\r\n    }\r\n    btnList[currentIndex].classList.add(cssBtnList)\r\n    btnCircle[currentIndex].classList.add(cssBtnCircle)\r\n})\r\n\r\n//---------------------------------CIRCLE-AND-WORD-BUTTONS-----------------------------------------\r\n\r\nfunction btnSwitch() {\r\n    btnList.forEach((element, num) => {\r\n        element.addEventListener('click', () => {\r\n            setEntity(num);\r\n            for (let i = 0; i < btnList.length; i = i + 1) {\r\n                btnList[i].classList.remove(cssBtnList)\r\n                btnCircle[i].classList.remove(cssBtnCircle)\r\n            }\r\n            btnList[num].classList.add(cssBtnList)\r\n            btnCircle[num].classList.add(cssBtnCircle)\r\n            currentIndex = num\r\n        })\r\n    });\r\n}\r\n\r\nfunction circleSwitch() {\r\n    btnCircle.forEach((element, num) => {\r\n        element.addEventListener('click', () => {\r\n            setEntity(num);\r\n            for (let i = 0; i < btnCircle.length; i = i + 1) {\r\n                btnCircle[i].classList.remove(cssBtnCircle)\r\n                btnList[i].classList.remove(cssBtnList)\r\n            }\r\n            btnCircle[num].classList.add(cssBtnCircle)\r\n            btnList[num].classList.add(cssBtnList)\r\n            currentIndex = num\r\n        })\r\n    });\r\n}\r\n\r\n//-------------------------------------MOBILE-BUTTONS----------------------------------------------\r\n\r\nprevMobile.addEventListener('click', () => {\r\n    if (currentIndex === 0) {\r\n        currentIndex = entities.length\r\n    }\r\n    setEntity(currentIndex -= 1);\r\n    for (let i = 0; i < btnList.length; i = i + 1) {\r\n        btnList[i].classList.remove(cssBtnList)\r\n        btnCircle[i].classList.remove(cssBtnCircle)\r\n    }\r\n    btnList[currentIndex].classList.add(cssBtnList)\r\n    btnCircle[currentIndex].classList.add(cssBtnCircle)\r\n})\r\nnextMobile.addEventListener('click', () => {\r\n    if (currentIndex === entities.length - 1) {\r\n        currentIndex = -1\r\n    }\r\n    setEntity(currentIndex += 1);\r\n    for (let i = 0; i < btnList.length; i = i + 1) {\r\n        btnList[i].classList.remove(cssBtnList)\r\n        btnCircle[i].classList.remove(cssBtnCircle)\r\n    }\r\n    btnList[currentIndex].classList.add(cssBtnList)\r\n    btnCircle[currentIndex].classList.add(cssBtnCircle)\r\n})\r\n\r\n//-------------------------------SELECTING-THE-FIRST-POSITION--------------------------------------\r\n\r\nfunction startPosition() {\r\n    for (let i = 0; i < entities.length; i = i + 1) {\r\n        if (entities[i].img === photo.getAttribute('src')) {\r\n            btnList[i].classList.add(cssBtnList)\r\n            btnCircle[i].classList.add(cssBtnCircle)\r\n        }\r\n    }\r\n}\r\n\r\n//-------------------------------------------------------------------------------------------------\r\n\r\nbtnSwitch()\r\ncircleSwitch()\r\nstartPosition() */\r\n\r\n\n\n//# sourceURL=webpack://project_book-store/./src/js/slider.js?");

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
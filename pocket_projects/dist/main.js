/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Clock\": () => (/* binding */ Clock)\n/* harmony export */ });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(this.printTime(), clockElement);\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Use console.log to print it.\n    // console.log(timeString);\n    return timeString;\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    // clockElement.innerText = this.printTime();\n    (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(this.printTime(), clockElement);\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\nlet clockElement = document.querySelector(\"#clock\");\nlet clock = new Clock();\n\n//# sourceURL=webpack://pocket_projects/./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator() {\n  let dogArray = [];\n  for(let type in dogs) {\n    let a = document.createElement('a');\n    a.innerHTML = type;\n    a.href = dogs[type];\n    let li = document.createElement('li');\n    li.classList.add(\"dog-link\");\n    li.appendChild(a);\n    dogArray.push(li);\n  }\n  return dogArray;\n}\n\nfunction attachDogLinks() {\n  let dogLinks = dogLinkCreator();\n  let ul = document.querySelector(\".drop-down-dog-list\");\n  dogLinks.forEach((dogLink) => {\n    ul.appendChild(dogLink);\n  });\n}\n\nfunction handleEnter(e) {\n  let nav = e.target;\n  let children = Array.from(nav.children);\n  children.forEach(ele => {\n    if (ele.tagName === \"UL\"){\n      Array.from(ele.children).forEach(li => {\n        li.classList.remove(\"dog-link\");\n      });\n    }\n  });\n\n}\n\nfunction handleLeave(e) {\n  let nav = e.target;\n  let children = Array.from(nav.children);\n  children.forEach(ele => {\n    if (ele.tagName === \"UL\") {\n      Array.from(ele.children).forEach(li => {\n        li.classList.add(\"dog-link\");\n      });\n    }\n  });\n}\n\nlet nav = document.querySelector(\".drop-down-dog-nav\");\nnav.addEventListener(\"mouseenter\", handleEnter);\nnav.addEventListener(\"mouseleave\", handleLeave);\nattachDogLinks();\n\n\n\n//# sourceURL=webpack://pocket_projects/./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n//# sourceURL=webpack://pocket_projects/./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/***/ (() => {

eval("let todos = JSON.parse(localStorage.getItem('items')) || [];\nlet ul = document.querySelector(\".todos\");\nlet todoForm = document.querySelector(\".add-todo-form\");\n\nfunction addToDo(e){\n  e.preventDefault();\n  let input = document.querySelector(\"input[name='add-todo']\");\n  let value = input.value;\n  let todo = {value: value, done: false};\n  todos.push(todo);\n  localStorage.setItem('items', JSON.stringify(todos));\n  todoForm.reset();\n  populateList(todos);\n}\n\nfunction populateList(arr) {\n  if(!ul.children.length < 2) {\n    arr.forEach(todo => {\n      let label = document.createElement(\"label\");\n      let checkbox = document.createElement(\"input\");\n      checkbox.type = \"checkbox\";\n      label.innerText = todo.value;\n      checkbox.checked = todo.done;\n      let li = document.createElement(\"li\");\n      li.appendChild(checkbox);\n      li.appendChild(label);\n      ul.appendChild(li);\n    });\n  } else {\n    let label = document.createElement(\"label\");\n    let checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\";\n    label.innerText = arr[arr.length - 1].value;\n    checkbox.checked = arr[arr.length - 1].done;\n    let li = document.createElement(\"li\");\n    li.appendChild(checkbox);\n    li.appendChild(label);\n    ul.appendChild(li);\n  }\n}\n\ntodoForm.addEventListener(\"submit\",addToDo);\npopulateList(todos);\n\n\n//# sourceURL=webpack://pocket_projects/./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  if(htmlElement.children.length === 0) {\n    let p = document.createElement('p');\n    p.innerText = string;\n    htmlElement.appendChild(p);\n  } else {\n    let p = htmlElement.children[0];\n    p.innerText = string;\n  }\n};\n\n// htmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack://pocket_projects/./src/warmup.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
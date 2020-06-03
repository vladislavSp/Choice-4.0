/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_general_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/general.scss */ \"./src/scss/general.scss\");\n/* harmony import */ var _scss_general_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_general_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/home.scss */ \"./src/scss/home.scss\");\n/* harmony import */ var _scss_home_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_home_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/header.scss */ \"./src/scss/header.scss\");\n/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_header_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scss_projects_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/projects.scss */ \"./src/scss/projects.scss\");\n/* harmony import */ var _scss_projects_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_projects_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scss_project_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/project.scss */ \"./src/scss/project.scss\");\n/* harmony import */ var _scss_project_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_project_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _scss_about_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/about.scss */ \"./src/scss/about.scss\");\n/* harmony import */ var _scss_about_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_about_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _scss_form_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scss/form.scss */ \"./src/scss/form.scss\");\n/* harmony import */ var _scss_form_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_form_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _scss_slider_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scss/slider.scss */ \"./src/scss/slider.scss\");\n/* harmony import */ var _scss_slider_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_slider_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _scss_adaptive_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scss/adaptive.scss */ \"./src/scss/adaptive.scss\");\n/* harmony import */ var _scss_adaptive_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_adaptive_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _scss_hover_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scss/hover.scss */ \"./src/scss/hover.scss\");\n/* harmony import */ var _scss_hover_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_hover_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _js_filters_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/filters.js */ \"./src/js/filters.js\");\n/* harmony import */ var _js_filters_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_js_filters_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _js_stickers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/stickers.js */ \"./src/js/stickers.js\");\n/* harmony import */ var _js_stickers_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_js_stickers_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _js_accordion_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/accordion.js */ \"./src/js/accordion.js\");\n/* harmony import */ var _js_accordion_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_js_accordion_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _js_hoverImage_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/hoverImage.js */ \"./src/js/hoverImage.js\");\n/* harmony import */ var _js_hoverImage_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_js_hoverImage_js__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _js_v_form_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/v-form.js */ \"./src/js/v-form.js\");\n/* harmony import */ var _js_v_form_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_js_v_form_js__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _js_form_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js/form.js */ \"./src/js/form.js\");\n/* harmony import */ var _js_form_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_js_form_js__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./js/slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_js_slider_js__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _js_colorMenu_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./js/colorMenu.js */ \"./src/js/colorMenu.js\");\n/* harmony import */ var _js_colorMenu_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_js_colorMenu_js__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _js_randomCircleImage_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./js/randomCircleImage.js */ \"./src/js/randomCircleImage.js\");\n/* harmony import */ var _js_randomCircleImage_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_js_randomCircleImage_js__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _js_hideMenuOnScroll_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./js/hideMenuOnScroll.js */ \"./src/js/hideMenuOnScroll.js\");\n/* harmony import */ var _js_hideMenuOnScroll_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_js_hideMenuOnScroll_js__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _js_playVideo_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./js/playVideo.js */ \"./src/js/playVideo.js\");\n/* harmony import */ var _js_playVideo_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_js_playVideo_js__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _js_input_file_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./js/input-file.js */ \"./src/js/input-file.js\");\n/* harmony import */ var _js_input_file_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_js_input_file_js__WEBPACK_IMPORTED_MODULE_21__);\n// SCSS - General\r\n\r\n\r\n// SCSS - All\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// adaptive\r\n\r\n// hover\r\n\r\n\r\n// animation\r\n\r\n// JS\r\n// import 'idempotent-babel-polyfill';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let accordionItem = Array.from(document.querySelectorAll('[data-acc=\"item\"]'));\r\nlet accBtn = Array.from(document.querySelectorAll('[data-acc=\"btn\"]'));\r\n\r\nif (accBtn.length > 0) accBtn.forEach(el => el.addEventListener('click', stateAccordionHandler));\r\nif (accordionItem.length > 0) accordionItem.forEach(el => el.style.height = `${0}px`);\r\n\r\n\r\n\r\nfunction stateAccordionHandler(evt) {\r\n  if (this.getAttribute('data-state') === 'none') this.setAttribute('data-state', 'active');\r\n  else this.setAttribute('data-state', 'none');\r\n\r\n  let accordBlock = this.parentNode.querySelector('[data-acc=\"item\"]'); // элемент, которому задается высота\r\n\r\n  if (accordBlock.style.height === \"0px\") {\r\n    accordBlock.style.height = `${ accordBlock.scrollHeight }px`;\r\n  } else {\r\n      accordBlock.style.height = `${ accordBlock.scrollHeight }px`;\r\n      window.getComputedStyle(accordBlock, null).getPropertyValue(\"height\");\r\n      accordBlock.style.height = \"0\";\r\n  }\r\n\r\n  accordBlock.addEventListener(\"transitionend\", () => {\r\n    if (accordBlock.style.height !== \"0px\") accordBlock.style.height = \"auto\";\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/accordion.js?");

/***/ }),

/***/ "./src/js/colorMenu.js":
/*!*****************************!*\
  !*** ./src/js/colorMenu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let header = document.querySelector('[data-header=\"color\"]');\r\nlet block = document.querySelector('[data-bc=\"change\"]');\r\n\r\nif (block) document.addEventListener('scroll', changeColorHandler);\r\n\r\nfunction changeColorHandler() {\r\n  // let blocks = [...document.querySelectorAll('*[data-bc=\"change\"]')];\r\n  // const arrTop = blocks.filter((el, i, arr) => el.getBoundingClientRect().width).map(el => Math.abs(el.getBoundingClientRect().height/5 + el.getBoundingClientRect().top)); // values for control desired block => previous to Math.abs(el.getBoundingClientRect().top)\r\n  // const indexArr = arrTop.indexOf(Math.min(...arrTop));\r\n\r\n  let blockHeight = block.getBoundingClientRect().height, // height this block blocks[indexArr]\r\n      blockTop = block.getBoundingClientRect().top, // pos scroll relatively this block\r\n      headerHeight = header.getBoundingClientRect().height/2, // 1/2 header\r\n      // height block +pos relative viewport - 1/2 header\r\n      positionBlock = blockHeight + blockTop - (headerHeight);\r\n\r\n  // console.log(positionBlock, arrTop, indexArr);\r\n  if (blockTop < headerHeight && positionBlock > 0) header.setAttribute('data-color', 'change');\r\n  else header.setAttribute('data-color', '');\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/colorMenu.js?");

/***/ }),

/***/ "./src/js/filters.js":
/*!***************************!*\
  !*** ./src/js/filters.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let filters = [...document.querySelectorAll('*[data-filter]')], filter,\r\n    projectList = document.querySelector('[data-proj-list]'),\r\n    viewBtn = document.querySelector('[data-project-btn=\"add\"]'),\r\n    projectItems = [...document.querySelectorAll('[data-category]')];\r\n// let update = false;\r\n\r\n// ПОКАЗ БЛОКОВ\r\nif (viewBtn) {\r\n  viewBtn.addEventListener('click', viewBlockHandler);\r\n\r\n  if (projectList.getAttribute('data-proj-list') === 'express' && projectList.children.length <= 4) viewBtn.style.display = 'none';\r\n}\r\n\r\nif (filters.length > 0) {\r\n  filters.forEach(el => el.addEventListener('click', changeStateFilters));\r\n\r\n  filter = location.search.split('=')[1];\r\n\r\n  if (filter) {\r\n    setFilter(filter); //, update\r\n    filters.forEach(el => {\r\n      if (el.getAttribute('data-filter') === filter) el.setAttribute('data-state', 'enable');\r\n      else el.setAttribute('data-state', 'disable');\r\n    });\r\n  }\r\n}\r\n\r\nfunction viewBlockHandler() {\r\n  stateVisibleProject(true);\r\n}\r\n\r\nfunction changeStateFilters(evt) {\r\n  evt.preventDefault();\r\n\r\n  let clickFilter =  this.getAttribute('data-filter');\r\n\r\n  filters.forEach(el => el.setAttribute('data-state', 'disable'));\r\n  this.setAttribute('data-state', 'enable');\r\n\r\n  if (clickFilter === 'all') {\r\n    gsap.to(projectList, { opacity: 0, onComplete: () => {\r\n      projectItems.forEach( el => el.setAttribute('data-visible', 'true') );\r\n      gsap.to(projectList, { opacity: 1, duration: 0.5});\r\n    }});\r\n    window.history.replaceState(clickFilter, 'data-filter', `${location.pathname}`);\r\n    stateVisibleProject(false);\r\n  } else {\r\n    window.history.replaceState(clickFilter, 'filter', `${location.pathname}?filter=${clickFilter}`);\r\n    setFilter(clickFilter);\r\n  }\r\n}\r\n\r\nfunction setFilter(clickFilter, upd = true) {\r\n  let visibleItems = projectItems.filter(item => item.getAttribute('data-category').split('||').includes(clickFilter)); // Элементы, которые надо показать (другие скрыть)\r\n\r\n  gsap.to(projectList, { opacity: 0, duration: 0.5, onComplete: () => {\r\n    projectItems.forEach(el => el.setAttribute('data-visible', 'false'));\r\n    visibleItems.forEach(el => el.setAttribute('data-visible', 'true'));\r\n    gsap.to(projectList, { opacity: 1, duration: 0.5});\r\n  }});\r\n\r\n  stateVisibleProject(true);\r\n}\r\n\r\nfunction stateVisibleProject(f) {\r\n  projectList.setAttribute('data-visible-list', `${f}`);\r\n  viewBtn.style.display = f ? `none` : ``;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/filters.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let sendBtn = document.querySelector('*[data-send-form=\"btn\"]'),\r\n    sendAgainBtn = document.querySelector('*[data-send-again=\"btn\"]'),\r\n    checkFields = Array.from(document.querySelectorAll('*[data-check-field]')),\r\n    sendFields = Array.from(document.querySelectorAll('*[data-send-field]')),\r\n    formMail = document.querySelector('*[data-form-block=\"mail\"]'),\r\n    formSuccess = document.querySelector('*[data-form-block=\"success\"]'),\r\n    nameUser = document.querySelector('[data-brif-name=\"user\"]'),\r\n    textArea = document.querySelector('[data-brif=\"textarea\"]'),\r\n    scrollBlock = document.querySelector('[data-scroll=\"form\"]'),\r\n    fileField = document.querySelector('[data-send-field=\"file\"]'),\r\n    fieldsObj = {}, infoBrif = new Set();\r\n\r\nif (textArea) {\r\n  textArea.setAttribute('rows', `1`);\r\n  autosize(textArea);\r\n}\r\n\r\n// INPUT MASK\r\nlet nameField = document.querySelector('[data-send-field=\"name\"]');\r\n// let mailField = document.querySelector('[send-field=\"mail\"]');\r\n\r\nif (nameField) {\r\n  nameField.addEventListener('input', function() {\r\n    let numbers = [], initArr = [];\r\n    let value = this.value;\r\n\r\n    numbers.push(value.replace(/[^\\d]/g,'')); // находится значения цифр в инпуте\r\n    initArr = value.split(''); // создается весь массив ввода, разделенный \",\"\r\n\r\n    let num = initArr.indexOf(numbers[0]); // поиск первого ввода цифры\r\n\r\n    if (num >= 0) {\r\n      initArr.splice(num, 1); // удаление этого ввода\r\n      this.value = initArr.join(''); // подстановка в поле ввода значения без цифр\r\n    }\r\n  });\r\n}\r\n\r\n\r\n\r\n// Selectors for Projects\r\nlet selectorsBrif = Array.from(document.querySelectorAll('*[data-selector=\"brif\"]')),\r\n    projectField = document.querySelector('*[data-send-field=\"project\"]');\r\n\r\nif (selectorsBrif.length) selectorsBrif.forEach(el => el.addEventListener('click', stateSelectorsHandler));\r\nif (sendBtn) sendBtn.addEventListener('click', checkFormsHandler);\r\nif (sendAgainBtn) sendAgainBtn.addEventListener('click', sendFormsAgainHandler);\r\nif (checkFields.length) checkFields.forEach(el => el.addEventListener('focus', validInputHandler));\r\n\r\nfunction stateSelectorsHandler () {\r\n  if (this.getAttribute('data-state') === 'enable') {\r\n    this.setAttribute('data-state', 'disable');\r\n    infoBrif.delete(this.textContent);\r\n  }\r\n  else {\r\n    this.setAttribute('data-state', 'enable');\r\n    infoBrif.add(this.textContent);\r\n  }\r\n\r\n  projectField.setAttribute('data-value-proj', `${Array.from(infoBrif)}`);\r\n}\r\n\r\nfunction checkFormsHandler() {\r\n  checkFields.forEach(el => {\r\n    if (el.value === '') el.setAttribute('data-state', 'invalid'); // el.getAttribute('value-proj') === 'invalid'\r\n    else el.setAttribute('data-state', 'valid');\r\n  });\r\n\r\n// проверка каждого элемента (требующего валидации) на заполненность\r\n  let sendFlag = checkFields.every(el => el.getAttribute('data-state') === 'valid');\r\n\r\n  if (sendFlag) {\r\n  // проверка всех полей и отправка данных fieldsObj\r\n    sendFields.forEach(el => {\r\n      el.getAttribute('data-send-field') === 'project' ? fieldsObj[el.getAttribute('data-send-field')] = el.getAttribute('data-value-proj') : fieldsObj[el.getAttribute('data-send-field')] = el.value;\r\n      if (el.getAttribute('data-send-field') === 'name') nameUser.textContent = el.value;\r\n    });\r\n\r\n    sendForms(fieldsObj);\r\n  }\r\n};\r\n\r\nfunction sendForms(obj) {\r\n  // скролл к верхней части блока\r\n  if (window.matchMedia(\"(max-width: 767px)\").matches) {\r\n    let topScrollBlock = scrollBlock.getBoundingClientRect().top + pageYOffset - 100;\r\n    window.scrollTo(0, topScrollBlock);\r\n  }\r\n\r\n  // axios({\r\n  //     method: 'post',\r\n  //     url: 'assets/choice/php/send.php',\r\n  //     data: ` name=${name}&phone=${contact} `\r\n  //   }).then();\r\n\r\n  formMail.style.display = 'none';\r\n  formSuccess.style.display = 'block';\r\n  resetForm();\r\n}\r\n\r\nfunction resetForm() {\r\n  let form = formMail.getElementsByTagName(`form`);\r\n  form[0].reset();\r\n  selectorsBrif.forEach(el => el.setAttribute('data-state', 'disable'));\r\n}\r\n\r\nfunction sendFormsAgainHandler() {\r\n  formMail.style.display = '';\r\n  formSuccess.style.display = 'none';\r\n}\r\n\r\nfunction validInputHandler() {\r\n  this.setAttribute('data-state', '');\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/form.js?");

/***/ }),

/***/ "./src/js/hideMenuOnScroll.js":
/*!************************************!*\
  !*** ./src/js/hideMenuOnScroll.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let header = document.querySelector('[data-hr=\"scroll\"]'),\r\n    positionInit = pageYOffset; // начальная прокрутка док-та\r\n\r\ndocument.addEventListener('scroll', hideMenuHandler);\r\n\r\nfunction hideMenuHandler(evt) {\r\n  let heightHeader = header.getBoundingClientRect().height; // 121\r\n  let dif = pageYOffset - positionInit; // разница текущей прокрутки с изначальной\r\n\r\n  if (pageYOffset < heightHeader/2) dif = -1; // вначале страницы\r\n\r\n  if (dif > 2) {\r\n    positionInit = pageYOffset; // увел-е начальной позиции в соответствии с прокруткой\r\n    header.classList.add('header--hid');\r\n  } else if (dif < 0) {\r\n    positionInit = pageYOffset;\r\n    header.classList.remove('header--hid');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/hideMenuOnScroll.js?");

/***/ }),

/***/ "./src/js/hoverImage.js":
/*!******************************!*\
  !*** ./src/js/hoverImage.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let serviceItems = [...document.querySelectorAll('*[data-service-item]')], image;\r\n\r\nif (serviceItems.length && window.matchMedia(\"(min-width: 992px)\").matches) {\r\n  serviceItems.forEach(el => el.addEventListener('mousemove', imageHoverHandler));\r\n}\r\n\r\nfunction imageHoverHandler(evt) {\r\n  // Коорд-ты мыши внутри блока\r\n  let coordX = evt.clientX - this.getBoundingClientRect().x;\r\n  let coordY = evt.clientY - this.getBoundingClientRect().y;\r\n  positioningImage(coordX, coordY, this);\r\n  // hiddenText(this);\r\n}\r\n\r\nfunction positioningImage(x, y, obj) {\r\n  image = obj.querySelector('.service__image');\r\n\r\n  let imageWidth = image.getBoundingClientRect().width;\r\n  let imageHeight = image.getBoundingClientRect().height;\r\n\r\n  image.style.top = `${y - (imageHeight/2)}px`;\r\n  image.style.left = `${x - (imageWidth/2)}px`;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/hoverImage.js?");

/***/ }),

/***/ "./src/js/input-file.js":
/*!******************************!*\
  !*** ./src/js/input-file.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let fileInput = document.querySelector('[data-send-field=\"file\"]');\r\nlet labelFile = document.querySelector('.file-label');\r\n\r\nif (labelFile) labelFile.setAttribute('for', `${fileInput.getAttribute('id')}`); // заплатка до того, как в вёрстке поправится\r\n\r\nif (fileInput) {\r\n  fileInput.setAttribute('type', 'file');\r\n  if (fileInput.type === 'file') fileInput.addEventListener('change', changeStateLabel);\r\n}\r\n\r\nfunction changeStateLabel() {\r\n  // console.log(this.files[0]);\r\n  if (this.files[0]) {\r\n    labelFile.textContent = `${this.files[0].name}`;\r\n    labelFile.classList.add('file-label--pick');\r\n  } else {\r\n    labelFile.textContent = `Pick up our file`;\r\n    labelFile.classList.remove('file-label--pick');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/input-file.js?");

/***/ }),

/***/ "./src/js/playVideo.js":
/*!*****************************!*\
  !*** ./src/js/playVideo.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let playBtn = document.querySelector('[data-videobtn=\"play\"]'), play = 1,\r\n    video = document.querySelector('.video-content');\r\n\r\nif (playBtn) {\r\n  playBtn.addEventListener('click', playVideo);\r\n  video.volume = 0;\r\n}\r\n\r\nfunction playVideo(evt) {\r\n  if (play) {\r\n    video.currentTime = 0;\r\n    play = 0;\r\n  }\r\n  video.addEventListener('pause', playVideoHandler);\r\n  stateVideo(true);\r\n}\r\n\r\nfunction stateVideo(param) {\r\n  param ? video.play() : video.pause();\r\n  video[param ? 'removeAttribute' : 'setAttribute']('muted', '');\r\n  video.muted = !param;\r\n  video.volume = param ? 1 : 0;\r\n  playBtn.style.display = param ? 'none' : '';\r\n  video.classList[param ? 'add' : 'remove']('video-pointer');\r\n  video[param ? 'addEventListener' : 'removeEventListener']('click', stopVideo);\r\n}\r\n\r\nfunction stopVideo() {\r\n  stateVideo(false);\r\n}\r\n\r\n// Обработчики событий play/pause (для воспроизведения с браузера, а не при клике)\r\nfunction playVideoHandler() {\r\n  video.removeEventListener('pause', playVideoHandler);\r\n  video.addEventListener('play', pauseVideoHandler);\r\n  stateVideo(false);\r\n}\r\n\r\nfunction pauseVideoHandler() {\r\n  video.addEventListener('pause', playVideoHandler);\r\n  video.removeEventListener('play', pauseVideoHandler);\r\n  stateVideo(true);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/playVideo.js?");

/***/ }),

/***/ "./src/js/randomCircleImage.js":
/*!*************************************!*\
  !*** ./src/js/randomCircleImage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let imageWrappers = [...document.querySelectorAll('.club__image-wrap')];\r\n\r\nif (imageWrappers.length) randomImage(imageWrappers);\r\n\r\nfunction randomImage(arr) {\r\n  let randomNum = randomInteger(0, arr.length - 1);\r\n  let images = Array.from(imageWrappers[randomNum].querySelectorAll('.club__image'));\r\n\r\n  images.forEach(el => el.style.borderRadius = `50%`);\r\n}\r\n\r\nfunction randomInteger(min, max) {\r\n  // случайное число от min до (max+1)\r\n  return Math.round(min + Math.random() * (max + 1 - min));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/randomCircleImage.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let expressContainer = document.querySelector('.view__container');\r\n\r\nif (expressContainer) {\r\n  let expressSlider = new Swiper(expressContainer, {\r\n    wrapperClass: 'view__images',\r\n    slideClass: 'view__slide',\r\n    slidesPerView: 'auto',\r\n    effect: 'fade',\r\n    speed: 600,\r\n    spaceBetween: 0,\r\n    allowTouchMove: false,\r\n\r\n    fadeEffect: {\r\n      crossFade: true,\r\n    },\r\n\r\n    breakpoints: {\r\n      768: {\r\n        effect: 'fade',\r\n        spaceBetween: 32,\r\n      }\r\n    },\r\n\r\n    navigation: {\r\n      nextEl: '.view__image-right',\r\n      prevEl: '.view__image-left',\r\n    },\r\n\r\n    pagination: {\r\n      el: '.view__paginations',\r\n      type: 'bullets',\r\n      clickable: true,\r\n      bulletClass: 'view__point',\r\n      bulletActiveClass: 'view__point--active',\r\n      progressbarFillClass: 'allmove',\r\n    },\r\n  });\r\n\r\n  let wrapperStories = document.querySelector('[data-story=\"express\"]');\r\n  let paginations = [...document.querySelectorAll('.view__point')];\r\n\r\n  let initTime = 9000, rangeTime = 9, initSeconds = 0, newTimer; //\r\n\r\n  wrapperStories.addEventListener('mousedown', holdStoriesHandler);\r\n  wrapperStories.addEventListener('touchstart', holdStoriesHandler);\r\n  expressSlider.on('slideChange', changeSlideHandler);\r\n\r\n  let timerFunction = setTimeout(nextSlide, 0); // счетчик секунд\r\n\r\n  function nextSlide() {\r\n    initSeconds += 1;\r\n\r\n    if (initSeconds > rangeTime) {\r\n      initSeconds = 1; // переключить слайд, когда счётчик достигнет 10\r\n      expressSlider.slideNext();\r\n    }\r\n    // Если холд - удалить таймер, и возобновить при удалении холда\r\n    newTimer = setTimeout(nextSlide, 1000);\r\n    if (expressSlider.progress === 1) clearTimeout(newTimer);\r\n  }\r\n\r\n  function holdStoriesHandler(e) {\r\n    clearTimeout(newTimer);\r\n\r\n    paginations[expressSlider.activeIndex].classList.add('paused');\r\n\r\n    if (e.type === 'touchstart') {\r\n      document.addEventListener('touchend', playStoriesHandler);\r\n      wrapperStories.removeEventListener('touchstart', holdStoriesHandler);\r\n    } else {\r\n      document.addEventListener('mouseup', playStoriesHandler);\r\n      wrapperStories.removeEventListener('mousedown', holdStoriesHandler);\r\n    }\r\n  }\r\n\r\n  function playStoriesHandler(evt) {\r\n    newTimer = setTimeout(nextSlide, 1000);\r\n\r\n    paginations[expressSlider.activeIndex].classList.remove('paused');\r\n\r\n    if (evt.type === 'touchend') {\r\n      document.removeEventListener('touchend', playStoriesHandler);\r\n      wrapperStories.addEventListener('touchstart', holdStoriesHandler);\r\n    } else {\r\n      document.removeEventListener('mouseup', playStoriesHandler);\r\n      wrapperStories.addEventListener('mousedown', holdStoriesHandler);\r\n    }\r\n  }\r\n\r\n  function changeSlideHandler() { // progressbar пагинации\r\n    initSeconds = 1;\r\n    // if (!newTimer) newTimer = setTimeout(nextSlide, 1000);\r\n    paginations.forEach((el, index, arr) => {\r\n      if (index < expressSlider.activeIndex) el.style.backgroundColor = 'white';\r\n      else if (index >= expressSlider.activeIndex) el.style.backgroundColor = '';\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ }),

/***/ "./src/js/stickers.js":
/*!****************************!*\
  !*** ./src/js/stickers.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let stickers = Array.from(document.querySelectorAll('[data-sticker=\"item\"]')),\r\n    universityBlock = document.querySelector('[data-sticker-block=\"flag\"]'),\r\n    bodyScrollHeight = document.body.scrollHeight,\r\n    bodyWidth = document.body.getBoundingClientRect().width;\r\n\r\n// ВЫЧИСЛЕНИЕ КООРДИНАТ БЛОКА ОТНОСИТЕЛЬНО ДОКУМЕНТА\r\nfunction getCoords(elem) {\r\n  let box = elem.getBoundingClientRect();\r\n\r\n  return {\r\n    top: box.top + pageYOffset,\r\n    left: box.left + pageXOffset\r\n  };\r\n}\r\n\r\n// ПОЗИЦИЯ МЫШИ\r\nfunction moveStickerHandler(evt) {\r\n  evt.preventDefault();\r\n  let type = evt.type, offsetX, offsetY;\r\n\r\n  if (type === 'mousedown') {\r\n    offsetX = evt.offsetX; // координаты щелчка на стикере\r\n    offsetY = evt.offsetY;\r\n    document.addEventListener('mousemove', positionMouseHandler);\r\n    document.addEventListener('mouseup', removeHandler); // this\r\n  } else if (type === 'touchstart') {\r\n    offsetX = evt.touches[0].pageX - evt.touches[0].target.offsetLeft;\r\n    offsetY = evt.touches[0].clientY;\r\n    document.addEventListener('touchmove', positionMouseHandler, { passive: false });\r\n    document.addEventListener('touchend', removeHandler); // this\r\n  }\r\n\r\n  stickers.forEach(el => {\r\n    if (el.getAttribute('data-state') === 'none') {\r\n      el.removeEventListener('mousedown', moveStickerHandler);\r\n      if (type === 'touchstart') el.removeEventListener('touchstart', moveStickerHandler);\r\n    }\r\n  });\r\n\r\n  let sticker = this;\r\n  this.setAttribute('data-state', 'active');\r\n\r\n  function positionMouseHandler(event) {\r\n    if (event.cancelable) event.preventDefault();\r\n\r\n    let stickerHeight = sticker.getBoundingClientRect().height,\r\n        stickerWidth = sticker.getBoundingClientRect().width,\r\n        leftStopValue = bodyWidth - stickerWidth,\r\n        topRelativeBlock = getCoords(universityBlock).top,\r\n        top = event.pageY - topRelativeBlock,\r\n        stopBottomValue = bodyScrollHeight - topRelativeBlock - stickerHeight;\r\n\r\n    if (type === 'touchstart') {\r\n      let stickerHalfWidth = stickerWidth/2;\r\n      leftStopValue = bodyWidth - stickerHalfWidth;\r\n      top = event.touches[0].pageY - topRelativeBlock - (event.touches[0].target.clientHeight/2);\r\n\r\n      sticker.style.top = `${top}px`;\r\n\r\n      if ((event.touches[0].pageX - offsetX) < stickerHalfWidth) sticker.style.left = stickerHalfWidth;\r\n      else if ((event.touches[0].pageX - offsetX) > leftStopValue) sticker.style.left = leftStopValue;\r\n      else sticker.style.left = `${event.touches[0].pageX - offsetX}px`;\r\n    } else {\r\n      // Нижняя граница документа для стикера\r\n      if ((top - offsetY) > stopBottomValue) sticker.style.top = stopBottomValue;\r\n      else sticker.style.top = `${top - offsetY}px`;\r\n\r\n      // Позиционирование стикера внутри границ документа\r\n      if ((event.pageX - offsetX) < 0) sticker.style.left = 0;\r\n      else if ((event.pageX - offsetX) > leftStopValue) sticker.style.left = leftStopValue;\r\n      else sticker.style.left = `${event.pageX - offsetX}px`;\r\n    }\r\n  }\r\n\r\n  function removeHandler() {\r\n    if (type === 'mousedown') {\r\n      document.removeEventListener('mousemove', positionMouseHandler);\r\n      document.removeEventListener('mouseup', removeHandler); // sticker\r\n    } else if (type === 'touchstart') {\r\n      document.removeEventListener('touchmove', positionMouseHandler);\r\n      document.removeEventListener('touchend', removeHandler); // sticker\r\n    }\r\n\r\n    sticker.setAttribute('data-state', 'none');\r\n\r\n    stickers.forEach(el => {\r\n      if (el.getAttribute('data-state') === 'none') {\r\n        el.addEventListener('mousedown', moveStickerHandler);\r\n        el.addEventListener('touchstart', moveStickerHandler);\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  if (stickers.length) stickers.forEach(el => el.addEventListener('mousedown', moveStickerHandler));\r\n\r\n  if (window.matchMedia(\"(max-width: 991px)\").matches) {\r\n    stickers.forEach(el => el.addEventListener('touchstart', moveStickerHandler));\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/stickers.js?");

/***/ }),

/***/ "./src/js/v-form.js":
/*!**************************!*\
  !*** ./src/js/v-form.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let vBtn = document.querySelector('[data-v-btn=\"btn\"]'),\r\n    vForm = document.querySelector('[data-v-form=\"form\"]');\r\n\r\n// let vacancyBlock = document.querySelector('.hello-vacancy');\r\n\r\nif (vBtn) {\r\n  vBtn.addEventListener('click', formVisHandler);\r\n}\r\n\r\nfunction formVisHandler(e) {\r\n  e.preventDefault();\r\n\r\n  vBtn.classList.add('hello-vacancy--npoint');\r\n\r\n  vBtn.querySelector('.hello__link-wrap').style.display = 'none';\r\n  vForm.style.display = 'block';\r\n  vBtn.removeEventListener('click', formVisHandler);\r\n  // vacancyBlock.addEventListener('mouseleave', formVisHandler);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/v-form.js?");

/***/ }),

/***/ "./src/scss/about.scss":
/*!*****************************!*\
  !*** ./src/scss/about.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/about.scss?");

/***/ }),

/***/ "./src/scss/adaptive.scss":
/*!********************************!*\
  !*** ./src/scss/adaptive.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/adaptive.scss?");

/***/ }),

/***/ "./src/scss/form.scss":
/*!****************************!*\
  !*** ./src/scss/form.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/form.scss?");

/***/ }),

/***/ "./src/scss/general.scss":
/*!*******************************!*\
  !*** ./src/scss/general.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/general.scss?");

/***/ }),

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/header.scss?");

/***/ }),

/***/ "./src/scss/home.scss":
/*!****************************!*\
  !*** ./src/scss/home.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/home.scss?");

/***/ }),

/***/ "./src/scss/hover.scss":
/*!*****************************!*\
  !*** ./src/scss/hover.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/hover.scss?");

/***/ }),

/***/ "./src/scss/project.scss":
/*!*******************************!*\
  !*** ./src/scss/project.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/project.scss?");

/***/ }),

/***/ "./src/scss/projects.scss":
/*!********************************!*\
  !*** ./src/scss/projects.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/projects.scss?");

/***/ }),

/***/ "./src/scss/slider.scss":
/*!******************************!*\
  !*** ./src/scss/slider.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/slider.scss?");

/***/ })

/******/ });
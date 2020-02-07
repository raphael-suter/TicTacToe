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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheet.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheet.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-weight: 400;\\n  font-family: \\\"Source Sans Pro\\\", serif;\\n}\\n\\n.modal form a, .modal form input[type=button], .modal div a, .modal div input[type=button] {\\n  display: inline-block;\\n  padding: 0.5rem 2rem;\\n  border-radius: 2px;\\n  text-decoration: none;\\n  text-align: center;\\n  font-size: 12pt;\\n  color: #ffffff;\\n  cursor: pointer;\\n}\\n\\n.modal form, .modal div, main .grid {\\n  max-width: 500px;\\n  margin: auto;\\n  padding: 0 1rem 1rem;\\n  border-radius: 2px;\\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);\\n  background: #ffffff;\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n  background: #f5f5f5;\\n}\\n\\nheader {\\n  display: grid;\\n  align-items: center;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  background-color: #000080;\\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);\\n}\\nheader h1 {\\n  margin: 1rem 1.5rem;\\n  grid-column-start: 1;\\n  font-size: 18pt;\\n  color: #ffffff;\\n}\\nheader p {\\n  grid-column-start: 2;\\n  text-align: center;\\n  font-size: 16pt;\\n  font-weight: 700;\\n  color: #ffffff;\\n}\\nheader button {\\n  display: flex;\\n  align-items: center;\\n  margin: 0 1.5rem;\\n  justify-self: end;\\n  grid-column-start: 3;\\n  background: #000080;\\n  border: none;\\n  cursor: pointer;\\n}\\nheader button .material-icons {\\n  font-size: 25px;\\n  color: #ffffff;\\n}\\n\\nmain {\\n  padding: 8vw 1.5rem;\\n}\\nmain .grid {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-gap: 0.7rem;\\n  padding-top: 1rem;\\n}\\nmain .grid div {\\n  position: relative;\\n}\\nmain .grid div:after {\\n  content: \\\"\\\";\\n  display: block;\\n  padding-bottom: 100%;\\n}\\nmain .grid button {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  background: #f5f5f5;\\n  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.3);\\n  border: none;\\n  border-radius: 2px;\\n  font-size: 50px;\\n  cursor: pointer;\\n}\\n\\n.modal {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background: rgba(0, 0, 0, 0.4);\\n  visibility: hidden;\\n}\\n.modal form, .modal div {\\n  position: relative;\\n  flex: 1;\\n  margin: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.modal form h1, .modal div h1 {\\n  margin-top: 1.5rem;\\n  text-align: center;\\n}\\n.modal form label, .modal div label {\\n  margin-top: 1rem;\\n  font-weight: bold;\\n  color: #000000;\\n}\\n.modal form input[type=text], .modal div input[type=text] {\\n  margin-top: 0.5rem;\\n  padding: 0.7rem;\\n  font-size: 12pt;\\n  border: 1px solid #000080;\\n  border-radius: 2px;\\n}\\n.modal form input[type=text].empty, .modal div input[type=text].empty {\\n  border-color: red;\\n}\\n.modal form a, .modal form input[type=button], .modal div a, .modal div input[type=button] {\\n  margin-top: 1rem;\\n  background: #000080;\\n  border: 1px solid #000080;\\n}\\n\\n@media (max-width: 800px) {\\n  header {\\n    grid-template-columns: 1fr auto;\\n  }\\n  header p {\\n    padding: 0.5rem 1.5rem;\\n    grid-column: 1/3;\\n    order: 1;\\n    background: #f5f5f5;\\n    color: #000000;\\n  }\\n  header button {\\n    grid-column-start: 2;\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/stylesheet.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheet_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheet.scss */ \"./src/stylesheet.scss\");\n/* harmony import */ var _stylesheet_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheet_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar clicks = 0;\nvar COMBINATIONS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];\nvar COOKIES;\n(function (COOKIES) {\n    COOKIES[\"PLAYER_X\"] = \"player_x\";\n    COOKIES[\"POINTS_X\"] = \"points_x\";\n    COOKIES[\"PLAYER_O\"] = \"player_o\";\n    COOKIES[\"POINTS_O\"] = \"points_o\";\n})(COOKIES || (COOKIES = {}));\nvar scoreLabel = document.getElementById('scoreLabel');\nvar deleteButton = document.getElementById('deleteButton');\nvar squareButtons = document.querySelectorAll(\".grid button\");\nvar userDialog = document.getElementById('userDialog');\nvar playerX_TextField = document.getElementById('playerX_TextField');\nvar playerO_TextField = document.getElementById('playerO_TextField');\nvar startButton = document.getElementById('startButton');\nvar infoDialog = document.getElementById('infoDialog');\nvar infoLabel = document.getElementById('infoLabel');\n(function () {\n    if (checkCookies()) {\n        displayScore();\n    }\n    else {\n        showUserDialog();\n    }\n    deleteButton.addEventListener('click', function () {\n        reset();\n    });\n    squareButtons.forEach(function (item, index) {\n        item.addEventListener('click', function () {\n            selectField(index);\n        });\n    });\n    startButton.addEventListener('click', function () {\n        saveUserData();\n    });\n})();\nfunction showUserDialog() {\n    userDialog.style.visibility = 'visible';\n}\nfunction saveUserData() {\n    var countEmptyFields = 0;\n    countEmptyFields += textFieldIsEmpty(playerX_TextField);\n    countEmptyFields += textFieldIsEmpty(playerO_TextField);\n    if (countEmptyFields > 0) {\n        return;\n    }\n    setCookie(COOKIES.PLAYER_X, playerX_TextField.value);\n    setCookie(COOKIES.POINTS_X, '0');\n    setCookie(COOKIES.PLAYER_O, playerO_TextField.value);\n    setCookie(COOKIES.POINTS_O, '0');\n    userDialog.style.visibility = 'hidden';\n    displayScore();\n}\nfunction selectField(index) {\n    if (!isEmpty(squareButtons[index].innerHTML)) {\n        return;\n    }\n    if (clicks % 2 === 0) {\n        squareButtons[index].innerHTML = 'X';\n    }\n    else {\n        squareButtons[index].innerHTML = 'O';\n    }\n    for (var _i = 0, COMBINATIONS_1 = COMBINATIONS; _i < COMBINATIONS_1.length; _i++) {\n        var item = COMBINATIONS_1[_i];\n        if (!isEmpty(squareButtons[item[0]].innerHTML) && squareButtons[item[0]].innerHTML === squareButtons[item[1]].innerHTML && squareButtons[item[1]].innerHTML === squareButtons[item[2]].innerHTML) {\n            if (clicks % 2 === 0) {\n                incrementCookieValue(COOKIES.POINTS_X);\n                displayWinner(COOKIES.PLAYER_X);\n            }\n            else {\n                incrementCookieValue(COOKIES.POINTS_O);\n                displayWinner(COOKIES.PLAYER_O);\n            }\n            displayScore();\n            return;\n        }\n    }\n    if (checkIfEven()) {\n        displayMessage('Unentschieden!');\n    }\n    clicks++;\n}\nfunction displayScore() {\n    scoreLabel.innerText = getCookie(COOKIES.PLAYER_X) + ' ' + getCookie(COOKIES.POINTS_X) + ':' + getCookie(COOKIES.POINTS_O) + ' ' + getCookie(COOKIES.PLAYER_O);\n}\nfunction displayWinner(key) {\n    displayMessage(getCookie(key) + ' hat gewonnen!');\n}\nfunction displayMessage(text) {\n    infoLabel.innerText = text;\n    infoDialog.style.visibility = 'visible';\n}\nfunction checkCookies() {\n    var cookiesAreValid = true;\n    Object.keys(COOKIES).forEach(function (key) {\n        if (isEmpty(getCookie(COOKIES[key]))) {\n            cookiesAreValid = false;\n        }\n    });\n    return cookiesAreValid;\n}\nfunction checkIfEven() {\n    var noEmptyFields = true;\n    squareButtons.forEach(function (item) {\n        if (isEmpty(item.innerHTML)) {\n            noEmptyFields = false;\n        }\n    });\n    return noEmptyFields;\n}\nfunction reset() {\n    Object.keys(COOKIES).forEach(function (key) {\n        deleteCookie(COOKIES[key]);\n    });\n    window.location.reload();\n}\nfunction setCookie(key, value) {\n    document.cookie = key + '=' + value;\n}\nfunction getCookie(key) {\n    var cookies = document.cookie.split('; ');\n    return cookies.filter(function (item) {\n        var cookieKey = item.substr(0, 8);\n        if (cookieKey === key) {\n            return item;\n        }\n    }).toString().substr(9);\n}\nfunction deleteCookie(key) {\n    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';\n}\nfunction incrementCookieValue(key) {\n    setCookie(key, (parseInt(getCookie(key)) + 1).toString());\n}\nfunction isEmpty(item) {\n    return item.trim() === '';\n}\nfunction textFieldIsEmpty(textField) {\n    if (isEmpty(textField.value)) {\n        textField.classList.add('empty');\n        return 1;\n    }\n    else {\n        textField.classList.remove('empty');\n        return 0;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/script.ts?");

/***/ }),

/***/ "./src/stylesheet.scss":
/*!*****************************!*\
  !*** ./src/stylesheet.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./stylesheet.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheet.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/stylesheet.scss?");

/***/ })

/******/ });
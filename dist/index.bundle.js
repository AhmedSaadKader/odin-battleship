"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/depositphotos_6606010-stock-photo-the-warship-on-a-blue.jpg */ "./src/images/depositphotos_6606010-stock-photo-the-warship-on-a-blue.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    /* background-image: url('./images/military_ship.jpg'); */\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\nheader h1{\r\n    text-align: center;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 5rem;\r\n    justify-content: center;\r\n    min-height: 100vh;\r\n}\r\n\r\n.board-1 , .board-2{\r\n    border: 0.25px solid white;\r\n}\r\n\r\n.gameboard {\r\n    width: 20rem;\r\n    height: 50vh;\r\n    background-color: aquamarine;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    row-gap: 0;\r\n}\r\n\r\n.hovered {\r\n    background-color: #f4f4f4;\r\n    border-style: dashed;\r\n}\r\n\r\n.board-buttons {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    \r\n}\r\n\r\nbutton {\r\n    margin-top: 2rem;\r\n    gap: 0.5rem;\r\n    padding: 1rem;\r\n    border-radius: 30px;\r\n    background: linear-gradient(orange, yellow);\r\n    border: none;\r\n    cursor: pointer;\r\n    box-shadow: 0 4px rgb(22, 22, 22);\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: rgb(0, 0, 3);\r\n}\r\n\r\nbutton:active {\r\n    background-color: rgb(0, 0, 3);\r\n    box-shadow: 0 1px rgb(22, 22, 22);\r\n    transform: translateY(1px);\r\n}\r\n\r\n.ship-container {\r\n    width: 240px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 3px;\r\n    gap: 1rem;\r\n}\r\n\r\n.all-ships {\r\n    height: 220px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.ships-full {\r\n    margin-right: 5px;\r\n    cursor: move;\r\n    display: flex;\r\n}\r\n\r\n.hold {\r\n    border: darkblue solid 1pxs;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.ship-cluster {\r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n.ship-unit {\r\n    width: 30px;\r\n    height: 29.25px;\r\n    border: 0.25px solid blue;\r\n    background-color: burlywood;\r\n}\r\n\r\n.ship-unit-1 {\r\n    background-color: firebrick;\r\n}\r\n.ship-unit-2{\r\n    background-color: gold;\r\n}\r\n.ship-unit-3{\r\n    background-color: magenta;\r\n}\r\n.ship-unit-4{\r\n    background-color: black;\r\n}\r\n\r\n.column {\r\n    flex-direction: column;\r\n}\r\n\r\n.row {\r\n    flex-direction: row;\r\n}\r\n\r\n.rotate-button {\r\n    display: block;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yDAAyD;IACzD,yDAA6F;IAC7F,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,4BAA4B;IAC5B,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,6BAA6B;;AAEjC;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,2CAA2C;IAC3C,YAAY;IACZ,eAAe;IACf,iCAAiC;IACjC,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;IAC9B,iCAAiC;IACjC,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,WAAW;IACX,eAAe;IACf,yBAAyB;IACzB,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["body {\r\n    /* background-image: url('./images/military_ship.jpg'); */\r\n    background-image: url('./images/depositphotos_6606010-stock-photo-the-warship-on-a-blue.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\nheader h1{\r\n    text-align: center;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 5rem;\r\n    justify-content: center;\r\n    min-height: 100vh;\r\n}\r\n\r\n.board-1 , .board-2{\r\n    border: 0.25px solid white;\r\n}\r\n\r\n.gameboard {\r\n    width: 20rem;\r\n    height: 50vh;\r\n    background-color: aquamarine;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    row-gap: 0;\r\n}\r\n\r\n.hovered {\r\n    background-color: #f4f4f4;\r\n    border-style: dashed;\r\n}\r\n\r\n.board-buttons {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    \r\n}\r\n\r\nbutton {\r\n    margin-top: 2rem;\r\n    gap: 0.5rem;\r\n    padding: 1rem;\r\n    border-radius: 30px;\r\n    background: linear-gradient(orange, yellow);\r\n    border: none;\r\n    cursor: pointer;\r\n    box-shadow: 0 4px rgb(22, 22, 22);\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: rgb(0, 0, 3);\r\n}\r\n\r\nbutton:active {\r\n    background-color: rgb(0, 0, 3);\r\n    box-shadow: 0 1px rgb(22, 22, 22);\r\n    transform: translateY(1px);\r\n}\r\n\r\n.ship-container {\r\n    width: 240px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 3px;\r\n    gap: 1rem;\r\n}\r\n\r\n.all-ships {\r\n    height: 220px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.ships-full {\r\n    margin-right: 5px;\r\n    cursor: move;\r\n    display: flex;\r\n}\r\n\r\n.hold {\r\n    border: darkblue solid 1pxs;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.ship-cluster {\r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n.ship-unit {\r\n    width: 30px;\r\n    height: 29.25px;\r\n    border: 0.25px solid blue;\r\n    background-color: burlywood;\r\n}\r\n\r\n.ship-unit-1 {\r\n    background-color: firebrick;\r\n}\r\n.ship-unit-2{\r\n    background-color: gold;\r\n}\r\n.ship-unit-3{\r\n    background-color: magenta;\r\n}\r\n.ship-unit-4{\r\n    background-color: black;\r\n}\r\n\r\n.column {\r\n    flex-direction: column;\r\n}\r\n\r\n.row {\r\n    flex-direction: row;\r\n}\r\n\r\n.rotate-button {\r\n    display: block;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/gamePlay-components.js":
/*!***********************************************!*\
  !*** ./src/components/gamePlay-components.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gamePlayComponents)
/* harmony export */ });
function gamePlayComponents() {
  const playerBoardDiv = document.createElement("div");
  playerBoardDiv.className = "gameboard";
  playerBoardDiv.id = "player-board";

  const computerBoardDiv = document.createElement("div");
  computerBoardDiv.className = "gameboard";
  computerBoardDiv.id = "player-board";

  return { playerBoardDiv, computerBoardDiv };
}


/***/ }),

/***/ "./src/gameplay/gameboard.js":
/*!***********************************!*\
  !*** ./src/gameplay/gameboard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/gameplay/ship.js");


function GameBoard() {
  const VERTICAL_COORDINATES = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const HORIZONTAL_COORDINATES = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
  ];

  const board = {};
  const attackedSpots = [];

  function createBoard() {
    HORIZONTAL_COORDINATES.forEach((letter) => {
      for (let i = 0; i < VERTICAL_COORDINATES.length; i++) {
        let number = VERTICAL_COORDINATES[i];
        const key = letter + number;
        board[key] = "empty";
      }
    });
  }

  createBoard();

  const ships = {};
  let shipsPlacedOnBoardCount = 0;

  function createNewShip(length) {
    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
    return ship;
  }

  function createAllShips() {
    for (let i = 0; i < 4; i++) {
      const ship = createNewShip(1);
      ships[`ship_${i}_length_1`] = ship;
    }
    for (let i = 0; i < 3; i++) {
      const ship = createNewShip(2);
      ships[`ship_${i}_length_2`] = ship;
    }
    for (let i = 0; i < 2; i++) {
      const ship = createNewShip(3);
      ships[`ship_${i}_length_3`] = ship;
    }
    const longestShip = createNewShip(4);
    ships[`ship_0_length_4`] = longestShip;
  }

  createAllShips();

  function chooseNextCoordinates(ship, startingCoordinates, direction) {
    let nextCoordinateList = [];
    if (direction === "horizontal") {
      const letterCode = startingCoordinates.charCodeAt(0);
      const number = startingCoordinates[1];
      for (let i = 0; i < ship.shipLength; i++) {
        const nextLetterCode = letterCode + i;
        const nextLetter = String.fromCharCode(nextLetterCode);
        const nextCoordinate = nextLetter + number;
        nextCoordinateList.push(nextCoordinate);
      }
      return nextCoordinateList;
    } else if (direction === "vertical") {
      const letter = startingCoordinates[0];
      const startingNumber = startingCoordinates[1];
      for (let i = 0; i < ship.shipLength; i++) {
        const nextNumber = parseInt(startingNumber) + i;
        const nextCoordinate = letter + nextNumber;
        nextCoordinateList.push(nextCoordinate);
      }
      return nextCoordinateList;
    }
  }

  function checkIfCoordinatesListIsAvailable(nextCoordinates) {
    for (let i = 0; i < nextCoordinates.length; i++) {
      let coordinate = nextCoordinates[i];
      if (
        board[coordinate] !== "empty" &&
        Object.keys(board).includes(coordinate)
      ) {
        return false;
      } else if (Object.keys(board).includes(coordinate) === false) {
        return false;
      }
    }
    return true;
  }

  function placeShipOnBoard(ship, startingCoordinates, direction) {
    console.log(shipsPlacedOnBoardCount);
    if (shipsPlacedOnBoardCount === 10) {
      return false;
    }
    let nextCoordinates = chooseNextCoordinates(
      ship,
      startingCoordinates,
      direction
    );
    if (checkIfCoordinatesListIsAvailable(nextCoordinates) === true) {
      nextCoordinates.forEach((coordinate) => {
        board[coordinate] = ship;
        if (ship.shipCoordinates[0] === "empty") {
          ship.shipCoordinates[0] = coordinate;
        } else {
          ship.shipCoordinates.push(coordinate);
        }
      });
      shipsPlacedOnBoardCount += 1;

      return board;
    } else if (checkIfCoordinatesListIsAvailable(nextCoordinates) === false) {
      return false;
    }
  }

  function chooseRandomCoordinatesAndDirection() {
    const directions = ["vertical", "horizontal"];
    const boardKeys = Object.keys(board);
    const randomCoordinate =
      boardKeys[Math.floor(Math.random() * boardKeys.length)];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    return [randomCoordinate, randomDirection];
  }

  function placeShipsRandomlyOnBoard() {
    if (shipsPlacedOnBoardCount === 10) {
      return false;
    }
    const shipsList = Object.values(ships);
    for (let i = 0; i < shipsList.length; i++) {
      const ship = shipsList[i];
      let random = chooseRandomCoordinatesAndDirection();
      let nextCoordinates = chooseNextCoordinates(ship, random[0], random[1]);
      while (checkIfCoordinatesListIsAvailable(nextCoordinates) === false) {
        random = chooseRandomCoordinatesAndDirection();
        nextCoordinates = chooseNextCoordinates(ship, random[0], random[1]);
      }
      placeShipOnBoard(ship, random[0], random[1]);
    }
  }

  function receiveAttack(coordinate) {
    if (attackedSpots.includes(coordinate) === true) {
      return false;
    }
    if (board[coordinate] !== "empty" && board[coordinate] !== "missed shot") {
      const ship = board[coordinate];
      ship.hit();
    } else if (board[coordinate] == "empty") {
      board[coordinate] = "missed shot";
    }
  }

  const checkIfAllShipsSunk = function () {
    const shipsObjects = Object.values(ships);
    const shipPositionsStatus = [];
    shipsObjects.forEach((object) => {
      const status = Object.values(object.shipPositions);
      status.forEach((item) => {
        shipPositionsStatus.push(item);
      });
    });
    for (let i = 0; i < shipPositionsStatus.length; i++) {
      const position = shipPositionsStatus[i];
      if (position === "not hit") {
        return false;
      }
    }
    return true;
  };

  return {
    board,
    ships,
    placeShipOnBoard,
    placeShipsRandomlyOnBoard,
    receiveAttack,
    checkIfAllShipsSunk,
  };
}


/***/ }),

/***/ "./src/gameplay/main-game.js":
/*!***********************************!*\
  !*** ./src/gameplay/main-game.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainGame)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/gameplay/player.js");


function mainGame() {
  const humanPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("Human");
  const AIPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])("AI");
  let turn = "Human";

  function endTurn() {
    if (turn === "Human") {
      turn = "AI";
    } else {
      turn = "Human";
    }
  }

  function play(coordinate) {
    if (turn === "Human") {
      humanPlayer.attack(coordinate, AIPlayer.gameboard);
      endTurn();
    } else if (turn === "AI") {
      AIPlayer.makeRandomMove(humanPlayer.gameboard);
      endTurn();
    }
  }

  function gameEnd() {
    if (humanPlayer.gameboard.checkIfAllShipsSunk()) {
      return "You lose";
    } else if (AIPlayer.gameboard.checkIfAllShipsSunk()) {
      return "You win";
    } else {
      return false;
    }
  }

  return {
    humanPlayer,
    AIPlayer,
    play,
    gameEnd,
  };
}


/***/ }),

/***/ "./src/gameplay/player.js":
/*!********************************!*\
  !*** ./src/gameplay/player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameplay/gameboard.js");


function Player(typeParam) {
  const type = typeParam;
  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const attackedSpots = [];

  const attack = function (coordinate, opponentBoard) {
    if (attackedSpots.includes(coordinate)) {
      return "Cannot attack same location twice";
    }
    opponentBoard.receiveAttack(coordinate);
    attackedSpots.push(coordinate);
  };

  const makeRandomMove = function (opponentBoard) {
    const boardKeys = Object.keys(opponentBoard.board);
    let randomCoordinate =
      boardKeys[Math.floor(Math.random() * boardKeys.length)];
    while (attackedSpots.includes(randomCoordinate)) {
      randomCoordinate =
        boardKeys[Math.floor(Math.random() * boardKeys.length)];
    }
    attack(randomCoordinate, opponentBoard);
  };

  return { type, gameboard, attack, makeRandomMove };
}


/***/ }),

/***/ "./src/gameplay/ship.js":
/*!******************************!*\
  !*** ./src/gameplay/ship.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length) {
  const shipLength = length;
  const shipPositions = {};
  let shipCoordinates = ["empty"];

  function createShipPositions(shipLength) {
    for (let i = 0; i < shipLength; i++) {
      shipPositions[i] = "not hit";
    }
    return shipPositions;
  }

  createShipPositions(length);

  function hit() {
    for (const position of Object.keys(shipPositions)) {
      if (shipPositions[position] == "not hit") {
        shipPositions[position] = "hit";
        break;
      }
    }
  }

  const isSunk = function () {
    const positionValues = Object.values(shipPositions);
    if (positionValues.includes("not hit")) {
      return false;
    }
    return true;
  };

  return {
    shipLength,
    shipPositions,
    shipCoordinates,
    hit,
    isSunk,
  };
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameplay_main_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameplay/main-game */ "./src/gameplay/main-game.js");
/* harmony import */ var _initial_components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial-components/header */ "./src/initial-components/header.js");
/* harmony import */ var _initial_components_main_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial-components/main-components */ "./src/initial-components/main-components.js");
/* harmony import */ var _initial_components_gameboard_initial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initial-components/gameboard-initial */ "./src/initial-components/gameboard-initial.js");
/* harmony import */ var _initial_components_updateGameboardInitial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initial-components/updateGameboardInitial */ "./src/initial-components/updateGameboardInitial.js");
/* harmony import */ var _components_gamePlay_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/gamePlay-components */ "./src/components/gamePlay-components.js");








document.body.appendChild(_initial_components_header__WEBPACK_IMPORTED_MODULE_2__["default"]);
document.body.appendChild(_initial_components_main_components__WEBPACK_IMPORTED_MODULE_3__["default"].main);

const game = (0,_gameplay_main_game__WEBPACK_IMPORTED_MODULE_1__["default"])();
const player = game.humanPlayer;
const computer = game.AIPlayer;
computer.gameboard.placeShipsRandomlyOnBoard();
const computerGameboard = computer.gameboard.board;
const computerGameboardIDs = Object.keys(computerGameboard);
const ships = player.gameboard.ships;
const shipsNames = Object.keys(ships);
const gameboard = player.gameboard.board;
const gameboardIDs = Object.keys(gameboard);

const updateInitial = (0,_initial_components_updateGameboardInitial__WEBPACK_IMPORTED_MODULE_5__["default"])();

const initialGameboard = (0,_initial_components_gameboard_initial__WEBPACK_IMPORTED_MODULE_4__["default"])();
initialGameboard.createPlacementBoard(
  gameboardIDs,
  _initial_components_main_components__WEBPACK_IMPORTED_MODULE_3__["default"].placementBoard
);
initialGameboard.createPlayerShipUI(_initial_components_main_components__WEBPACK_IMPORTED_MODULE_3__["default"].shipContainer, shipsNames);

_initial_components_main_components__WEBPACK_IMPORTED_MODULE_3__["default"].randomizeButton.addEventListener("click", () => {
  _initial_components_main_components__WEBPACK_IMPORTED_MODULE_3__["default"].shipContainer.innerHTML = "";
  player.gameboard.placeShipsRandomlyOnBoard();
  updateInitial.updateGameBoard(gameboard, gameboardIDs);
});

const fullShip = document.querySelectorAll(".ships-full");
const boardCell = document.querySelectorAll(".board-1");
const rotateButton = document.querySelector(".rotate-button");
const allShips = document.querySelectorAll(".all-ships");
const shipCluster = document.querySelectorAll(".ship-cluster");

fullShip.forEach((ship) => {
  ship.addEventListener("dragstart", (e) => dragStart(e));
  ship.addEventListener("dragend", dragEnd);
});

boardCell.forEach((cell) => {
  cell.addEventListener("dragover", (e) => dragOver(e));
  cell.addEventListener("dragenter", (e) => dragEnter(e));
  cell.addEventListener("dragleave", (e) => dragLeave(e));
  cell.addEventListener("drop", (e) => dragDrop(e));
});

rotateButton.addEventListener("click", rotateShips);

function dragStart(e) {
  e.dataTransfer.setData("text", e.target.id);
  e.dataTransfer.effectAllowed = "move";
  e.target.className += " hold";
  setTimeout(() => e.target.classList.add("invisible"), 10);
}

function dragEnd() {
  this.classList.remove("hold");
  this.classList.remove("invisible");
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("hovered");
}

function dragLeave(e) {
  e.target.classList.remove("hovered");
}

function dragDrop(e) {
  e.preventDefault();
  if (e.dataTransfer.getData("text").includes("ship")) {
    const data = e.dataTransfer.getData("text");
    console.log(data);
    const shipName = document.getElementById(data);
    const shipToPlace = player.gameboard.ships[data];
    const shipDirection = shipName.dataset.shipOrientation;
    if (
      player.gameboard.placeShipOnBoard(shipToPlace, e.target.id, shipDirection)
    ) {
      updateInitial.updateGameBoard(gameboard, gameboardIDs);
      updateInitial.updateShipContainer(shipName);
    }
    e.target.classList.remove("hovered");
  }
}

function rotateShips() {
  allShips.forEach((ship) => ship.classList.toggle("row"));
  shipCluster.forEach((cluster) => cluster.classList.toggle("column"));
  fullShip.forEach((ship) => {
    ship.classList.toggle("column");
    if (ship.dataset.shipOrientation === "vertical") {
      ship.dataset.shipOrientation = "horizontal";
    } else {
      ship.dataset.shipOrientation = "vertical";
    }
  });
}

_initial_components_main_components__WEBPACK_IMPORTED_MODULE_3__["default"].startButton.addEventListener("click", () => {
  const emptyCount = Object.values(gameboard).filter(
    (empty) => empty === "empty"
  ).length;
  if (emptyCount > 80) {
    return alert("Please place all your ships on board");
  } else {
    _initial_components_main_components__WEBPACK_IMPORTED_MODULE_3__["default"].main.innerHTML = "";
    const gamePlayComponent = (0,_components_gamePlay_components__WEBPACK_IMPORTED_MODULE_6__["default"])();
    _initial_components_main_components__WEBPACK_IMPORTED_MODULE_3__["default"].main.append(
      gamePlayComponent.playerBoardDiv,
      gamePlayComponent.computerBoardDiv
    );
    console.log(computer.gameboard.board);
    console.log(player.gameboard.board);
  }
});


/***/ }),

/***/ "./src/initial-components/gameboard-initial.js":
/*!*****************************************************!*\
  !*** ./src/initial-components/gameboard-initial.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameboardInitial)
/* harmony export */ });
function gameboardInitial() {
  function createPlacementBoard(boardIDs, board) {
    boardIDs.forEach((id) => {
      const cell = document.createElement("div");
      console.log(board);
      cell.className = "board-1";
      cell.id = id;
      board.appendChild(cell);
    });
    return board;
  }

  function createPlayerShipUI(shipContainer, shipList) {
    const allShips = document.createElement("div");
    allShips.className = "all-ships";
    shipContainer.appendChild(allShips);

    for (let i = 1; i < 5; i++) {
      const shipClusters = document.createElement("div");
      shipClusters.className = "ship-cluster";
      shipClusters.id = `ship-cluster-${i}`;
      allShips.appendChild(shipClusters);
    }

    shipList.forEach((shipName) => {
      const ship = document.createElement("div");
      ship.className = "ships-full";
      ship.id = shipName;
      ship.draggable = true;
      ship.dataset.shipOrientation = "vertical";
      if (shipName.includes("length_1")) {
        ship.dataset.shipLength = 1;
        document.getElementById("ship-cluster-1").appendChild(ship);
        const shipUnit = document.createElement("div");
        shipUnit.className = "ship-unit ship-unit-1";
        ship.appendChild(shipUnit);
      } else if (shipName.includes("length_2")) {
        ship.dataset.shipLength = 2;
        document.getElementById("ship-cluster-2").appendChild(ship);
        for (let i = 0; i < 2; i++) {
          const shipUnit = document.createElement("div");
          shipUnit.className = "ship-unit ship-unit-2";
          ship.appendChild(shipUnit);
        }
      } else if (shipName.includes("length_3")) {
        ship.dataset.shipLength = 3;
        document.getElementById("ship-cluster-3").appendChild(ship);
        for (let i = 0; i < 3; i++) {
          const shipUnit = document.createElement("div");
          shipUnit.className = "ship-unit ship-unit-3";
          ship.appendChild(shipUnit);
        }
      } else if (shipName.includes("length_4")) {
        ship.dataset.shipLength = 4;
        document.getElementById("ship-cluster-4").appendChild(ship);
        for (let i = 0; i < 4; i++) {
          const shipUnit = document.createElement("div");
          shipUnit.className = "ship-unit ship-unit-4";
          ship.appendChild(shipUnit);
        }
      }
    });
    const rotate_button = document.createElement("button");
    rotate_button.className = "rotate-button";
    rotate_button.innerHTML = "Rotate";
    shipContainer.appendChild(rotate_button);
  }

  return { createPlacementBoard, createPlayerShipUI };
}


/***/ }),

/***/ "./src/initial-components/header.js":
/*!******************************************!*\
  !*** ./src/initial-components/header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function header() {
  const head = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.innerHTML = "BattleShips";
  head.appendChild(h1);
  return head;
})());


/***/ }),

/***/ "./src/initial-components/main-components.js":
/*!***************************************************!*\
  !*** ./src/initial-components/main-components.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function mainComponents() {
  const main = document.createElement("main");

  const boardPlusButton = document.createElement("div");
  const placementBoard = document.createElement("div");
  placementBoard.className = "gameboard";
  placementBoard.id = "placement-board";
  boardPlusButton.appendChild(placementBoard);

  const boardButtonsDiv = document.createElement("div");
  boardButtonsDiv.className = "board-buttons";
  const randomizeButton = document.createElement("button");
  randomizeButton.id = "randomize-ships";
  randomizeButton.innerHTML = "Random Board";
  const startButton = document.createElement("button");
  startButton.id = "start-button";
  startButton.innerHTML = "Start Game";
  boardButtonsDiv.append(startButton, randomizeButton);
  boardPlusButton.appendChild(boardButtonsDiv);

  main.appendChild(boardPlusButton);

  const shipContainer = document.createElement("div");
  shipContainer.id = "ship-container";
  shipContainer.className = "ship-container";
  main.appendChild(shipContainer);

  return {
    main,
    boardPlusButton,
    startButton,
    randomizeButton,
    shipContainer,
    placementBoard,
  };
})());


/***/ }),

/***/ "./src/initial-components/updateGameboardInitial.js":
/*!**********************************************************!*\
  !*** ./src/initial-components/updateGameboardInitial.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateUI)
/* harmony export */ });
function updateUI(PlacedShip) {
  function updateGameBoard(gameboard, gameboardIDList) {
    gameboardIDList.forEach((id) => {
      if (gameboard[id] !== "empty") {
        const cell = document.getElementById(id);
        if (gameboard[id].shipLength === 1) {
          cell.className = "ship-unit ship-unit-1";
        } else if (gameboard[id].shipLength === 2) {
          cell.className = "ship-unit ship-unit-2";
        } else if (gameboard[id].shipLength === 3) {
          cell.className = "ship-unit ship-unit-3";
        } else if (gameboard[id].shipLength === 4) {
          cell.className = "ship-unit ship-unit-4";
        }
      }
    });
  }

  function updateShipContainer(PlacedShip) {
    PlacedShip.parentElement.removeChild(PlacedShip);
  }

  return {
    updateGameBoard,
    updateShipContainer,
  };
}


/***/ }),

/***/ "./src/images/depositphotos_6606010-stock-photo-the-warship-on-a-blue.jpg":
/*!********************************************************************************!*\
  !*** ./src/images/depositphotos_6606010-stock-photo-the-warship-on-a-blue.jpg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9dd7e33544d5123ec06.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNVO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZ2FtZVBsYXktY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZXBsYXkvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS9tYWluLWdhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVwbGF5L3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZXBsYXkvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luaXRpYWwtY29tcG9uZW50cy9nYW1lYm9hcmQtaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5pdGlhbC1jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5pdGlhbC1jb21wb25lbnRzL21haW4tY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5pdGlhbC1jb21wb25lbnRzL3VwZGF0ZUdhbWVib2FyZEluaXRpYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2RlcG9zaXRwaG90b3NfNjYwNjAxMC1zdG9jay1waG90by10aGUtd2Fyc2hpcC1vbi1hLWJsdWUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvbWlsaXRhcnlfc2hpcC5qcGcnKTsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxe1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogNXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtMSAsIC5ib2FyZC0ye1xcclxcbiAgICBib3JkZXI6IDAuMjVweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIHJvdy1nYXA6IDA7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlcmVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KG9yYW5nZSwgeWVsbG93KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IHJnYigyMiwgMjIsIDIyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDMpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDMpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCByZ2IoMjIsIDIyLCAyMik7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXNoaXBzIHtcXHJcXG4gICAgaGVpZ2h0OiAyMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMtZnVsbCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICBjdXJzb3I6IG1vdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ob2xkIHtcXHJcXG4gICAgYm9yZGVyOiBkYXJrYmx1ZSBzb2xpZCAxcHhzO1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2x1c3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtdW5pdCB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI5LjI1cHg7XFxyXFxuICAgIGJvcmRlcjogMC4yNXB4IHNvbGlkIGJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtdW5pdC0xIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZmlyZWJyaWNrO1xcclxcbn1cXHJcXG4uc2hpcC11bml0LTJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxufVxcclxcbi5zaGlwLXVuaXQtM3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFnZW50YTtcXHJcXG59XFxyXFxuLnNoaXAtdW5pdC00e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbHVtbiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5yb3cge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4ucm90YXRlLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseURBQXlEO0lBQ3pELHlEQUE2RjtJQUM3Riw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsWUFBWTtJQUNaLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9taWxpdGFyeV9zaGlwLmpwZycpOyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2RlcG9zaXRwaG90b3NfNjYwNjAxMC1zdG9jay1waG90by10aGUtd2Fyc2hpcC1vbi1hLWJsdWUuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBoMXtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDVyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLTEgLCAuYm9hcmQtMntcXHJcXG4gICAgYm9yZGVyOiAwLjI1cHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGhlaWdodDogNTB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICByb3ctZ2FwOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChvcmFuZ2UsIHllbGxvdyk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCByZ2IoMjIsIDIyLCAyMik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAzKTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggcmdiKDIyLCAyMiwgMjIpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC1zaGlwcyB7XFxyXFxuICAgIGhlaWdodDogMjIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzLWZ1bGwge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBtb3ZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9sZCB7XFxyXFxuICAgIGJvcmRlcjogZGFya2JsdWUgc29saWQgMXB4cztcXHJcXG59XFxyXFxuXFxyXFxuLmludmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNsdXN0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXVuaXQge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyOS4yNXB4O1xcclxcbiAgICBib3JkZXI6IDAuMjVweCBzb2xpZCBibHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXVuaXQtMSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGZpcmVicmljaztcXHJcXG59XFxyXFxuLnNoaXAtdW5pdC0ye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcclxcbn1cXHJcXG4uc2hpcC11bml0LTN7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7XFxyXFxufVxcclxcbi5zaGlwLXVuaXQtNHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jb2x1bW4ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLnJvdGF0ZS1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVQbGF5Q29tcG9uZW50cygpIHtcclxuICBjb25zdCBwbGF5ZXJCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGxheWVyQm9hcmREaXYuY2xhc3NOYW1lID0gXCJnYW1lYm9hcmRcIjtcclxuICBwbGF5ZXJCb2FyZERpdi5pZCA9IFwicGxheWVyLWJvYXJkXCI7XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVyQm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbXB1dGVyQm9hcmREaXYuY2xhc3NOYW1lID0gXCJnYW1lYm9hcmRcIjtcclxuICBjb21wdXRlckJvYXJkRGl2LmlkID0gXCJwbGF5ZXItYm9hcmRcIjtcclxuXHJcbiAgcmV0dXJuIHsgcGxheWVyQm9hcmREaXYsIGNvbXB1dGVyQm9hcmREaXYgfTtcclxufVxyXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoKSB7XHJcbiAgY29uc3QgVkVSVElDQUxfQ09PUkRJTkFURVMgPSBbXHJcbiAgICBcIjBcIixcclxuICAgIFwiMVwiLFxyXG4gICAgXCIyXCIsXHJcbiAgICBcIjNcIixcclxuICAgIFwiNFwiLFxyXG4gICAgXCI1XCIsXHJcbiAgICBcIjZcIixcclxuICAgIFwiN1wiLFxyXG4gICAgXCI4XCIsXHJcbiAgICBcIjlcIixcclxuICBdO1xyXG4gIGNvbnN0IEhPUklaT05UQUxfQ09PUkRJTkFURVMgPSBbXHJcbiAgICBcIkFcIixcclxuICAgIFwiQlwiLFxyXG4gICAgXCJDXCIsXHJcbiAgICBcIkRcIixcclxuICAgIFwiRVwiLFxyXG4gICAgXCJGXCIsXHJcbiAgICBcIkdcIixcclxuICAgIFwiSFwiLFxyXG4gICAgXCJJXCIsXHJcbiAgICBcIkpcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBib2FyZCA9IHt9O1xyXG4gIGNvbnN0IGF0dGFja2VkU3BvdHMgPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XHJcbiAgICBIT1JJWk9OVEFMX0NPT1JESU5BVEVTLmZvckVhY2goKGxldHRlcikgPT4ge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFZFUlRJQ0FMX0NPT1JESU5BVEVTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG51bWJlciA9IFZFUlRJQ0FMX0NPT1JESU5BVEVTW2ldO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGxldHRlciArIG51bWJlcjtcclxuICAgICAgICBib2FyZFtrZXldID0gXCJlbXB0eVwiO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvYXJkKCk7XHJcblxyXG4gIGNvbnN0IHNoaXBzID0ge307XHJcbiAgbGV0IHNoaXBzUGxhY2VkT25Cb2FyZENvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlTmV3U2hpcChsZW5ndGgpIHtcclxuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xyXG4gICAgcmV0dXJuIHNoaXA7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVBbGxTaGlwcygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVOZXdTaGlwKDEpO1xyXG4gICAgICBzaGlwc1tgc2hpcF8ke2l9X2xlbmd0aF8xYF0gPSBzaGlwO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZU5ld1NoaXAoMik7XHJcbiAgICAgIHNoaXBzW2BzaGlwXyR7aX1fbGVuZ3RoXzJgXSA9IHNoaXA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICBjb25zdCBzaGlwID0gY3JlYXRlTmV3U2hpcCgzKTtcclxuICAgICAgc2hpcHNbYHNoaXBfJHtpfV9sZW5ndGhfM2BdID0gc2hpcDtcclxuICAgIH1cclxuICAgIGNvbnN0IGxvbmdlc3RTaGlwID0gY3JlYXRlTmV3U2hpcCg0KTtcclxuICAgIHNoaXBzW2BzaGlwXzBfbGVuZ3RoXzRgXSA9IGxvbmdlc3RTaGlwO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQWxsU2hpcHMoKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hvb3NlTmV4dENvb3JkaW5hdGVzKHNoaXAsIHN0YXJ0aW5nQ29vcmRpbmF0ZXMsIGRpcmVjdGlvbikge1xyXG4gICAgbGV0IG5leHRDb29yZGluYXRlTGlzdCA9IFtdO1xyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgY29uc3QgbGV0dGVyQ29kZSA9IHN0YXJ0aW5nQ29vcmRpbmF0ZXMuY2hhckNvZGVBdCgwKTtcclxuICAgICAgY29uc3QgbnVtYmVyID0gc3RhcnRpbmdDb29yZGluYXRlc1sxXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnNoaXBMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5leHRMZXR0ZXJDb2RlID0gbGV0dGVyQ29kZSArIGk7XHJcbiAgICAgICAgY29uc3QgbmV4dExldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dExldHRlckNvZGUpO1xyXG4gICAgICAgIGNvbnN0IG5leHRDb29yZGluYXRlID0gbmV4dExldHRlciArIG51bWJlcjtcclxuICAgICAgICBuZXh0Q29vcmRpbmF0ZUxpc3QucHVzaChuZXh0Q29vcmRpbmF0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5leHRDb29yZGluYXRlTGlzdDtcclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgY29uc3QgbGV0dGVyID0gc3RhcnRpbmdDb29yZGluYXRlc1swXTtcclxuICAgICAgY29uc3Qgc3RhcnRpbmdOdW1iZXIgPSBzdGFydGluZ0Nvb3JkaW5hdGVzWzFdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dE51bWJlciA9IHBhcnNlSW50KHN0YXJ0aW5nTnVtYmVyKSArIGk7XHJcbiAgICAgICAgY29uc3QgbmV4dENvb3JkaW5hdGUgPSBsZXR0ZXIgKyBuZXh0TnVtYmVyO1xyXG4gICAgICAgIG5leHRDb29yZGluYXRlTGlzdC5wdXNoKG5leHRDb29yZGluYXRlKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV4dENvb3JkaW5hdGVMaXN0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tJZkNvb3JkaW5hdGVzTGlzdElzQXZhaWxhYmxlKG5leHRDb29yZGluYXRlcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXh0Q29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGNvb3JkaW5hdGUgPSBuZXh0Q29vcmRpbmF0ZXNbaV07XHJcbiAgICAgIGlmIChcclxuICAgICAgICBib2FyZFtjb29yZGluYXRlXSAhPT0gXCJlbXB0eVwiICYmXHJcbiAgICAgICAgT2JqZWN0LmtleXMoYm9hcmQpLmluY2x1ZGVzKGNvb3JkaW5hdGUpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhib2FyZCkuaW5jbHVkZXMoY29vcmRpbmF0ZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcE9uQm9hcmQoc2hpcCwgc3RhcnRpbmdDb29yZGluYXRlcywgZGlyZWN0aW9uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhzaGlwc1BsYWNlZE9uQm9hcmRDb3VudCk7XHJcbiAgICBpZiAoc2hpcHNQbGFjZWRPbkJvYXJkQ291bnQgPT09IDEwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBuZXh0Q29vcmRpbmF0ZXMgPSBjaG9vc2VOZXh0Q29vcmRpbmF0ZXMoXHJcbiAgICAgIHNoaXAsXHJcbiAgICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZXMsXHJcbiAgICAgIGRpcmVjdGlvblxyXG4gICAgKTtcclxuICAgIGlmIChjaGVja0lmQ29vcmRpbmF0ZXNMaXN0SXNBdmFpbGFibGUobmV4dENvb3JkaW5hdGVzKSA9PT0gdHJ1ZSkge1xyXG4gICAgICBuZXh0Q29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVdID0gc2hpcDtcclxuICAgICAgICBpZiAoc2hpcC5zaGlwQ29vcmRpbmF0ZXNbMF0gPT09IFwiZW1wdHlcIikge1xyXG4gICAgICAgICAgc2hpcC5zaGlwQ29vcmRpbmF0ZXNbMF0gPSBjb29yZGluYXRlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaGlwLnNoaXBDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNoaXBzUGxhY2VkT25Cb2FyZENvdW50ICs9IDE7XHJcblxyXG4gICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICB9IGVsc2UgaWYgKGNoZWNrSWZDb29yZGluYXRlc0xpc3RJc0F2YWlsYWJsZShuZXh0Q29vcmRpbmF0ZXMpID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaG9vc2VSYW5kb21Db29yZGluYXRlc0FuZERpcmVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbXCJ2ZXJ0aWNhbFwiLCBcImhvcml6b250YWxcIl07XHJcbiAgICBjb25zdCBib2FyZEtleXMgPSBPYmplY3Qua2V5cyhib2FyZCk7XHJcbiAgICBjb25zdCByYW5kb21Db29yZGluYXRlID1cclxuICAgICAgYm9hcmRLZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkS2V5cy5sZW5ndGgpXTtcclxuICAgIGNvbnN0IHJhbmRvbURpcmVjdGlvbiA9XHJcbiAgICAgIGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlyZWN0aW9ucy5sZW5ndGgpXTtcclxuICAgIHJldHVybiBbcmFuZG9tQ29vcmRpbmF0ZSwgcmFuZG9tRGlyZWN0aW9uXTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seU9uQm9hcmQoKSB7XHJcbiAgICBpZiAoc2hpcHNQbGFjZWRPbkJvYXJkQ291bnQgPT09IDEwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNoaXBzTGlzdCA9IE9iamVjdC52YWx1ZXMoc2hpcHMpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IHNoaXBzTGlzdFtpXTtcclxuICAgICAgbGV0IHJhbmRvbSA9IGNob29zZVJhbmRvbUNvb3JkaW5hdGVzQW5kRGlyZWN0aW9uKCk7XHJcbiAgICAgIGxldCBuZXh0Q29vcmRpbmF0ZXMgPSBjaG9vc2VOZXh0Q29vcmRpbmF0ZXMoc2hpcCwgcmFuZG9tWzBdLCByYW5kb21bMV0pO1xyXG4gICAgICB3aGlsZSAoY2hlY2tJZkNvb3JkaW5hdGVzTGlzdElzQXZhaWxhYmxlKG5leHRDb29yZGluYXRlcykgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmFuZG9tID0gY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZXNBbmREaXJlY3Rpb24oKTtcclxuICAgICAgICBuZXh0Q29vcmRpbmF0ZXMgPSBjaG9vc2VOZXh0Q29vcmRpbmF0ZXMoc2hpcCwgcmFuZG9tWzBdLCByYW5kb21bMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHBsYWNlU2hpcE9uQm9hcmQoc2hpcCwgcmFuZG9tWzBdLCByYW5kb21bMV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XHJcbiAgICBpZiAoYXR0YWNrZWRTcG90cy5pbmNsdWRlcyhjb29yZGluYXRlKSA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoYm9hcmRbY29vcmRpbmF0ZV0gIT09IFwiZW1wdHlcIiAmJiBib2FyZFtjb29yZGluYXRlXSAhPT0gXCJtaXNzZWQgc2hvdFwiKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFtjb29yZGluYXRlXTtcclxuICAgICAgc2hpcC5oaXQoKTtcclxuICAgIH0gZWxzZSBpZiAoYm9hcmRbY29vcmRpbmF0ZV0gPT0gXCJlbXB0eVwiKSB7XHJcbiAgICAgIGJvYXJkW2Nvb3JkaW5hdGVdID0gXCJtaXNzZWQgc2hvdFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tJZkFsbFNoaXBzU3VuayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHNoaXBzT2JqZWN0cyA9IE9iamVjdC52YWx1ZXMoc2hpcHMpO1xyXG4gICAgY29uc3Qgc2hpcFBvc2l0aW9uc1N0YXR1cyA9IFtdO1xyXG4gICAgc2hpcHNPYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSBPYmplY3QudmFsdWVzKG9iamVjdC5zaGlwUG9zaXRpb25zKTtcclxuICAgICAgc3RhdHVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBzaGlwUG9zaXRpb25zU3RhdHVzLnB1c2goaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBQb3NpdGlvbnNTdGF0dXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSBzaGlwUG9zaXRpb25zU3RhdHVzW2ldO1xyXG4gICAgICBpZiAocG9zaXRpb24gPT09IFwibm90IGhpdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYm9hcmQsXHJcbiAgICBzaGlwcyxcclxuICAgIHBsYWNlU2hpcE9uQm9hcmQsXHJcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHlPbkJvYXJkLFxyXG4gICAgcmVjZWl2ZUF0dGFjayxcclxuICAgIGNoZWNrSWZBbGxTaGlwc1N1bmssXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbkdhbWUoKSB7XHJcbiAgY29uc3QgaHVtYW5QbGF5ZXIgPSBQbGF5ZXIoXCJIdW1hblwiKTtcclxuICBjb25zdCBBSVBsYXllciA9IFBsYXllcihcIkFJXCIpO1xyXG4gIGxldCB0dXJuID0gXCJIdW1hblwiO1xyXG5cclxuICBmdW5jdGlvbiBlbmRUdXJuKCkge1xyXG4gICAgaWYgKHR1cm4gPT09IFwiSHVtYW5cIikge1xyXG4gICAgICB0dXJuID0gXCJBSVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHVybiA9IFwiSHVtYW5cIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXkoY29vcmRpbmF0ZSkge1xyXG4gICAgaWYgKHR1cm4gPT09IFwiSHVtYW5cIikge1xyXG4gICAgICBodW1hblBsYXllci5hdHRhY2soY29vcmRpbmF0ZSwgQUlQbGF5ZXIuZ2FtZWJvYXJkKTtcclxuICAgICAgZW5kVHVybigpO1xyXG4gICAgfSBlbHNlIGlmICh0dXJuID09PSBcIkFJXCIpIHtcclxuICAgICAgQUlQbGF5ZXIubWFrZVJhbmRvbU1vdmUoaHVtYW5QbGF5ZXIuZ2FtZWJvYXJkKTtcclxuICAgICAgZW5kVHVybigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2FtZUVuZCgpIHtcclxuICAgIGlmIChodW1hblBsYXllci5nYW1lYm9hcmQuY2hlY2tJZkFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgIHJldHVybiBcIllvdSBsb3NlXCI7XHJcbiAgICB9IGVsc2UgaWYgKEFJUGxheWVyLmdhbWVib2FyZC5jaGVja0lmQWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgcmV0dXJuIFwiWW91IHdpblwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGh1bWFuUGxheWVyLFxyXG4gICAgQUlQbGF5ZXIsXHJcbiAgICBwbGF5LFxyXG4gICAgZ2FtZUVuZCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXIodHlwZVBhcmFtKSB7XHJcbiAgY29uc3QgdHlwZSA9IHR5cGVQYXJhbTtcclxuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lQm9hcmQoKTtcclxuXHJcbiAgY29uc3QgYXR0YWNrZWRTcG90cyA9IFtdO1xyXG5cclxuICBjb25zdCBhdHRhY2sgPSBmdW5jdGlvbiAoY29vcmRpbmF0ZSwgb3Bwb25lbnRCb2FyZCkge1xyXG4gICAgaWYgKGF0dGFja2VkU3BvdHMuaW5jbHVkZXMoY29vcmRpbmF0ZSkpIHtcclxuICAgICAgcmV0dXJuIFwiQ2Fubm90IGF0dGFjayBzYW1lIGxvY2F0aW9uIHR3aWNlXCI7XHJcbiAgICB9XHJcbiAgICBvcHBvbmVudEJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XHJcbiAgICBhdHRhY2tlZFNwb3RzLnB1c2goY29vcmRpbmF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWFrZVJhbmRvbU1vdmUgPSBmdW5jdGlvbiAob3Bwb25lbnRCb2FyZCkge1xyXG4gICAgY29uc3QgYm9hcmRLZXlzID0gT2JqZWN0LmtleXMob3Bwb25lbnRCb2FyZC5ib2FyZCk7XHJcbiAgICBsZXQgcmFuZG9tQ29vcmRpbmF0ZSA9XHJcbiAgICAgIGJvYXJkS2V5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZEtleXMubGVuZ3RoKV07XHJcbiAgICB3aGlsZSAoYXR0YWNrZWRTcG90cy5pbmNsdWRlcyhyYW5kb21Db29yZGluYXRlKSkge1xyXG4gICAgICByYW5kb21Db29yZGluYXRlID1cclxuICAgICAgICBib2FyZEtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRLZXlzLmxlbmd0aCldO1xyXG4gICAgfVxyXG4gICAgYXR0YWNrKHJhbmRvbUNvb3JkaW5hdGUsIG9wcG9uZW50Qm9hcmQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IHR5cGUsIGdhbWVib2FyZCwgYXR0YWNrLCBtYWtlUmFuZG9tTW92ZSB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XHJcbiAgY29uc3Qgc2hpcExlbmd0aCA9IGxlbmd0aDtcclxuICBjb25zdCBzaGlwUG9zaXRpb25zID0ge307XHJcbiAgbGV0IHNoaXBDb29yZGluYXRlcyA9IFtcImVtcHR5XCJdO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVTaGlwUG9zaXRpb25zKHNoaXBMZW5ndGgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNoaXBQb3NpdGlvbnNbaV0gPSBcIm5vdCBoaXRcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBzaGlwUG9zaXRpb25zO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2hpcFBvc2l0aW9ucyhsZW5ndGgpO1xyXG5cclxuICBmdW5jdGlvbiBoaXQoKSB7XHJcbiAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIE9iamVjdC5rZXlzKHNoaXBQb3NpdGlvbnMpKSB7XHJcbiAgICAgIGlmIChzaGlwUG9zaXRpb25zW3Bvc2l0aW9uXSA9PSBcIm5vdCBoaXRcIikge1xyXG4gICAgICAgIHNoaXBQb3NpdGlvbnNbcG9zaXRpb25dID0gXCJoaXRcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgcG9zaXRpb25WYWx1ZXMgPSBPYmplY3QudmFsdWVzKHNoaXBQb3NpdGlvbnMpO1xyXG4gICAgaWYgKHBvc2l0aW9uVmFsdWVzLmluY2x1ZGVzKFwibm90IGhpdFwiKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2hpcExlbmd0aCxcclxuICAgIHNoaXBQb3NpdGlvbnMsXHJcbiAgICBzaGlwQ29vcmRpbmF0ZXMsXHJcbiAgICBoaXQsXHJcbiAgICBpc1N1bmssXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgbWFpbkdhbWUgZnJvbSBcIi4vZ2FtZXBsYXkvbWFpbi1nYW1lXCI7XHJcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4vaW5pdGlhbC1jb21wb25lbnRzL2hlYWRlclwiO1xyXG5pbXBvcnQgbWFpbkNvbXBvbmVudHMgZnJvbSBcIi4vaW5pdGlhbC1jb21wb25lbnRzL21haW4tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZ2FtZWJvYXJkSW5pdGlhbCBmcm9tIFwiLi9pbml0aWFsLWNvbXBvbmVudHMvZ2FtZWJvYXJkLWluaXRpYWxcIjtcclxuaW1wb3J0IHVwZGF0ZVVJIGZyb20gXCIuL2luaXRpYWwtY29tcG9uZW50cy91cGRhdGVHYW1lYm9hcmRJbml0aWFsXCI7XHJcbmltcG9ydCBnYW1lUGxheUNvbXBvbmVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lUGxheS1jb21wb25lbnRzXCI7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbXBvbmVudHMubWFpbik7XHJcblxyXG5jb25zdCBnYW1lID0gbWFpbkdhbWUoKTtcclxuY29uc3QgcGxheWVyID0gZ2FtZS5odW1hblBsYXllcjtcclxuY29uc3QgY29tcHV0ZXIgPSBnYW1lLkFJUGxheWVyO1xyXG5jb21wdXRlci5nYW1lYm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5T25Cb2FyZCgpO1xyXG5jb25zdCBjb21wdXRlckdhbWVib2FyZCA9IGNvbXB1dGVyLmdhbWVib2FyZC5ib2FyZDtcclxuY29uc3QgY29tcHV0ZXJHYW1lYm9hcmRJRHMgPSBPYmplY3Qua2V5cyhjb21wdXRlckdhbWVib2FyZCk7XHJcbmNvbnN0IHNoaXBzID0gcGxheWVyLmdhbWVib2FyZC5zaGlwcztcclxuY29uc3Qgc2hpcHNOYW1lcyA9IE9iamVjdC5rZXlzKHNoaXBzKTtcclxuY29uc3QgZ2FtZWJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5ib2FyZDtcclxuY29uc3QgZ2FtZWJvYXJkSURzID0gT2JqZWN0LmtleXMoZ2FtZWJvYXJkKTtcclxuXHJcbmNvbnN0IHVwZGF0ZUluaXRpYWwgPSB1cGRhdGVVSSgpO1xyXG5cclxuY29uc3QgaW5pdGlhbEdhbWVib2FyZCA9IGdhbWVib2FyZEluaXRpYWwoKTtcclxuaW5pdGlhbEdhbWVib2FyZC5jcmVhdGVQbGFjZW1lbnRCb2FyZChcclxuICBnYW1lYm9hcmRJRHMsXHJcbiAgbWFpbkNvbXBvbmVudHMucGxhY2VtZW50Qm9hcmRcclxuKTtcclxuaW5pdGlhbEdhbWVib2FyZC5jcmVhdGVQbGF5ZXJTaGlwVUkobWFpbkNvbXBvbmVudHMuc2hpcENvbnRhaW5lciwgc2hpcHNOYW1lcyk7XHJcblxyXG5tYWluQ29tcG9uZW50cy5yYW5kb21pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtYWluQ29tcG9uZW50cy5zaGlwQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHlPbkJvYXJkKCk7XHJcbiAgdXBkYXRlSW5pdGlhbC51cGRhdGVHYW1lQm9hcmQoZ2FtZWJvYXJkLCBnYW1lYm9hcmRJRHMpO1xyXG59KTtcclxuXHJcbmNvbnN0IGZ1bGxTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwcy1mdWxsXCIpO1xyXG5jb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLTFcIik7XHJcbmNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm90YXRlLWJ1dHRvblwiKTtcclxuY29uc3QgYWxsU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFsbC1zaGlwc1wiKTtcclxuY29uc3Qgc2hpcENsdXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtY2x1c3RlclwiKTtcclxuXHJcbmZ1bGxTaGlwLmZvckVhY2goKHNoaXApID0+IHtcclxuICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IGRyYWdTdGFydChlKSk7XHJcbiAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBkcmFnRW5kKTtcclxufSk7XHJcblxyXG5ib2FyZENlbGwuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiBkcmFnT3ZlcihlKSk7XHJcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIChlKSA9PiBkcmFnRW50ZXIoZSkpO1xyXG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCAoZSkgPT4gZHJhZ0xlYXZlKGUpKTtcclxuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiBkcmFnRHJvcChlKSk7XHJcbn0pO1xyXG5cclxucm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGVTaGlwcyk7XHJcblxyXG5mdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xyXG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIGUudGFyZ2V0LmlkKTtcclxuICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XHJcbiAgZS50YXJnZXQuY2xhc3NOYW1lICs9IFwiIGhvbGRcIjtcclxuICBzZXRUaW1lb3V0KCgpID0+IGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIiksIDEwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhZ0VuZCgpIHtcclxuICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJob2xkXCIpO1xyXG4gIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYWdFbnRlcihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJob3ZlcmVkXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmFnTGVhdmUoZSkge1xyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcmVkXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmFnRHJvcChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmIChlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKS5pbmNsdWRlcyhcInNoaXBcIikpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3Qgc2hpcE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKTtcclxuICAgIGNvbnN0IHNoaXBUb1BsYWNlID0gcGxheWVyLmdhbWVib2FyZC5zaGlwc1tkYXRhXTtcclxuICAgIGNvbnN0IHNoaXBEaXJlY3Rpb24gPSBzaGlwTmFtZS5kYXRhc2V0LnNoaXBPcmllbnRhdGlvbjtcclxuICAgIGlmIChcclxuICAgICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXBPbkJvYXJkKHNoaXBUb1BsYWNlLCBlLnRhcmdldC5pZCwgc2hpcERpcmVjdGlvbilcclxuICAgICkge1xyXG4gICAgICB1cGRhdGVJbml0aWFsLnVwZGF0ZUdhbWVCb2FyZChnYW1lYm9hcmQsIGdhbWVib2FyZElEcyk7XHJcbiAgICAgIHVwZGF0ZUluaXRpYWwudXBkYXRlU2hpcENvbnRhaW5lcihzaGlwTmFtZSk7XHJcbiAgICB9XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZVNoaXBzKCkge1xyXG4gIGFsbFNoaXBzLmZvckVhY2goKHNoaXApID0+IHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcInJvd1wiKSk7XHJcbiAgc2hpcENsdXN0ZXIuZm9yRWFjaCgoY2x1c3RlcikgPT4gY2x1c3Rlci5jbGFzc0xpc3QudG9nZ2xlKFwiY29sdW1uXCIpKTtcclxuICBmdWxsU2hpcC5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJjb2x1bW5cIik7XHJcbiAgICBpZiAoc2hpcC5kYXRhc2V0LnNoaXBPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgIHNoaXAuZGF0YXNldC5zaGlwT3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNoaXAuZGF0YXNldC5zaGlwT3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1haW5Db21wb25lbnRzLnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZW1wdHlDb3VudCA9IE9iamVjdC52YWx1ZXMoZ2FtZWJvYXJkKS5maWx0ZXIoXHJcbiAgICAoZW1wdHkpID0+IGVtcHR5ID09PSBcImVtcHR5XCJcclxuICApLmxlbmd0aDtcclxuICBpZiAoZW1wdHlDb3VudCA+IDgwKSB7XHJcbiAgICByZXR1cm4gYWxlcnQoXCJQbGVhc2UgcGxhY2UgYWxsIHlvdXIgc2hpcHMgb24gYm9hcmRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1haW5Db21wb25lbnRzLm1haW4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnN0IGdhbWVQbGF5Q29tcG9uZW50ID0gZ2FtZVBsYXlDb21wb25lbnRzKCk7XHJcbiAgICBtYWluQ29tcG9uZW50cy5tYWluLmFwcGVuZChcclxuICAgICAgZ2FtZVBsYXlDb21wb25lbnQucGxheWVyQm9hcmREaXYsXHJcbiAgICAgIGdhbWVQbGF5Q29tcG9uZW50LmNvbXB1dGVyQm9hcmREaXZcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhjb21wdXRlci5nYW1lYm9hcmQuYm9hcmQpO1xyXG4gICAgY29uc29sZS5sb2cocGxheWVyLmdhbWVib2FyZC5ib2FyZCk7XHJcbiAgfVxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZWJvYXJkSW5pdGlhbCgpIHtcclxuICBmdW5jdGlvbiBjcmVhdGVQbGFjZW1lbnRCb2FyZChib2FyZElEcywgYm9hcmQpIHtcclxuICAgIGJvYXJkSURzLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhib2FyZCk7XHJcbiAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJib2FyZC0xXCI7XHJcbiAgICAgIGNlbGwuaWQgPSBpZDtcclxuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVBsYXllclNoaXBVSShzaGlwQ29udGFpbmVyLCBzaGlwTGlzdCkge1xyXG4gICAgY29uc3QgYWxsU2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWxsU2hpcHMuY2xhc3NOYW1lID0gXCJhbGwtc2hpcHNcIjtcclxuICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxsU2hpcHMpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXBDbHVzdGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHNoaXBDbHVzdGVycy5jbGFzc05hbWUgPSBcInNoaXAtY2x1c3RlclwiO1xyXG4gICAgICBzaGlwQ2x1c3RlcnMuaWQgPSBgc2hpcC1jbHVzdGVyLSR7aX1gO1xyXG4gICAgICBhbGxTaGlwcy5hcHBlbmRDaGlsZChzaGlwQ2x1c3RlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNoaXBMaXN0LmZvckVhY2goKHNoaXBOYW1lKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBzaGlwLmNsYXNzTmFtZSA9IFwic2hpcHMtZnVsbFwiO1xyXG4gICAgICBzaGlwLmlkID0gc2hpcE5hbWU7XHJcbiAgICAgIHNoaXAuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgc2hpcC5kYXRhc2V0LnNoaXBPcmllbnRhdGlvbiA9IFwidmVydGljYWxcIjtcclxuICAgICAgaWYgKHNoaXBOYW1lLmluY2x1ZGVzKFwibGVuZ3RoXzFcIikpIHtcclxuICAgICAgICBzaGlwLmRhdGFzZXQuc2hpcExlbmd0aCA9IDE7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwLWNsdXN0ZXItMVwiKS5hcHBlbmRDaGlsZChzaGlwKTtcclxuICAgICAgICBjb25zdCBzaGlwVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2hpcFVuaXQuY2xhc3NOYW1lID0gXCJzaGlwLXVuaXQgc2hpcC11bml0LTFcIjtcclxuICAgICAgICBzaGlwLmFwcGVuZENoaWxkKHNoaXBVbml0KTtcclxuICAgICAgfSBlbHNlIGlmIChzaGlwTmFtZS5pbmNsdWRlcyhcImxlbmd0aF8yXCIpKSB7XHJcbiAgICAgICAgc2hpcC5kYXRhc2V0LnNoaXBMZW5ndGggPSAyO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcC1jbHVzdGVyLTJcIikuYXBwZW5kQ2hpbGQoc2hpcCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IHNoaXBVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIHNoaXBVbml0LmNsYXNzTmFtZSA9IFwic2hpcC11bml0IHNoaXAtdW5pdC0yXCI7XHJcbiAgICAgICAgICBzaGlwLmFwcGVuZENoaWxkKHNoaXBVbml0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hpcE5hbWUuaW5jbHVkZXMoXCJsZW5ndGhfM1wiKSkge1xyXG4gICAgICAgIHNoaXAuZGF0YXNldC5zaGlwTGVuZ3RoID0gMztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtY2x1c3Rlci0zXCIpLmFwcGVuZENoaWxkKHNoaXApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBzaGlwVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBzaGlwVW5pdC5jbGFzc05hbWUgPSBcInNoaXAtdW5pdCBzaGlwLXVuaXQtM1wiO1xyXG4gICAgICAgICAgc2hpcC5hcHBlbmRDaGlsZChzaGlwVW5pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHNoaXBOYW1lLmluY2x1ZGVzKFwibGVuZ3RoXzRcIikpIHtcclxuICAgICAgICBzaGlwLmRhdGFzZXQuc2hpcExlbmd0aCA9IDQ7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwLWNsdXN0ZXItNFwiKS5hcHBlbmRDaGlsZChzaGlwKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgY29uc3Qgc2hpcFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgc2hpcFVuaXQuY2xhc3NOYW1lID0gXCJzaGlwLXVuaXQgc2hpcC11bml0LTRcIjtcclxuICAgICAgICAgIHNoaXAuYXBwZW5kQ2hpbGQoc2hpcFVuaXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByb3RhdGVfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHJvdGF0ZV9idXR0b24uY2xhc3NOYW1lID0gXCJyb3RhdGUtYnV0dG9uXCI7XHJcbiAgICByb3RhdGVfYnV0dG9uLmlubmVySFRNTCA9IFwiUm90YXRlXCI7XHJcbiAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdGF0ZV9idXR0b24pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgY3JlYXRlUGxhY2VtZW50Qm9hcmQsIGNyZWF0ZVBsYXllclNoaXBVSSB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBoZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaDEuaW5uZXJIVE1MID0gXCJCYXR0bGVTaGlwc1wiO1xyXG4gIGhlYWQuYXBwZW5kQ2hpbGQoaDEpO1xyXG4gIHJldHVybiBoZWFkO1xyXG59KSgpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gbWFpbkNvbXBvbmVudHMoKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG5cclxuICBjb25zdCBib2FyZFBsdXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHBsYWNlbWVudEJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwbGFjZW1lbnRCb2FyZC5jbGFzc05hbWUgPSBcImdhbWVib2FyZFwiO1xyXG4gIHBsYWNlbWVudEJvYXJkLmlkID0gXCJwbGFjZW1lbnQtYm9hcmRcIjtcclxuICBib2FyZFBsdXNCdXR0b24uYXBwZW5kQ2hpbGQocGxhY2VtZW50Qm9hcmQpO1xyXG5cclxuICBjb25zdCBib2FyZEJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJvYXJkQnV0dG9uc0Rpdi5jbGFzc05hbWUgPSBcImJvYXJkLWJ1dHRvbnNcIjtcclxuICBjb25zdCByYW5kb21pemVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHJhbmRvbWl6ZUJ1dHRvbi5pZCA9IFwicmFuZG9taXplLXNoaXBzXCI7XHJcbiAgcmFuZG9taXplQnV0dG9uLmlubmVySFRNTCA9IFwiUmFuZG9tIEJvYXJkXCI7XHJcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHN0YXJ0QnV0dG9uLmlkID0gXCJzdGFydC1idXR0b25cIjtcclxuICBzdGFydEJ1dHRvbi5pbm5lckhUTUwgPSBcIlN0YXJ0IEdhbWVcIjtcclxuICBib2FyZEJ1dHRvbnNEaXYuYXBwZW5kKHN0YXJ0QnV0dG9uLCByYW5kb21pemVCdXR0b24pO1xyXG4gIGJvYXJkUGx1c0J1dHRvbi5hcHBlbmRDaGlsZChib2FyZEJ1dHRvbnNEaXYpO1xyXG5cclxuICBtYWluLmFwcGVuZENoaWxkKGJvYXJkUGx1c0J1dHRvbik7XHJcblxyXG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHNoaXBDb250YWluZXIuaWQgPSBcInNoaXAtY29udGFpbmVyXCI7XHJcbiAgc2hpcENvbnRhaW5lci5jbGFzc05hbWUgPSBcInNoaXAtY29udGFpbmVyXCI7XHJcbiAgbWFpbi5hcHBlbmRDaGlsZChzaGlwQ29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1haW4sXHJcbiAgICBib2FyZFBsdXNCdXR0b24sXHJcbiAgICBzdGFydEJ1dHRvbixcclxuICAgIHJhbmRvbWl6ZUJ1dHRvbixcclxuICAgIHNoaXBDb250YWluZXIsXHJcbiAgICBwbGFjZW1lbnRCb2FyZCxcclxuICB9O1xyXG59KSgpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVVSShQbGFjZWRTaGlwKSB7XHJcbiAgZnVuY3Rpb24gdXBkYXRlR2FtZUJvYXJkKGdhbWVib2FyZCwgZ2FtZWJvYXJkSURMaXN0KSB7XHJcbiAgICBnYW1lYm9hcmRJRExpc3QuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgaWYgKGdhbWVib2FyZFtpZF0gIT09IFwiZW1wdHlcIikge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKGdhbWVib2FyZFtpZF0uc2hpcExlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInNoaXAtdW5pdCBzaGlwLXVuaXQtMVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkW2lkXS5zaGlwTGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwic2hpcC11bml0IHNoaXAtdW5pdC0yXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lYm9hcmRbaWRdLnNoaXBMZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJzaGlwLXVuaXQgc2hpcC11bml0LTNcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGdhbWVib2FyZFtpZF0uc2hpcExlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInNoaXAtdW5pdCBzaGlwLXVuaXQtNFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTaGlwQ29udGFpbmVyKFBsYWNlZFNoaXApIHtcclxuICAgIFBsYWNlZFNoaXAucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChQbGFjZWRTaGlwKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGVHYW1lQm9hcmQsXHJcbiAgICB1cGRhdGVTaGlwQ29udGFpbmVyLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
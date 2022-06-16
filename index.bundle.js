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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    /* background-image: url('./images/military_ship.jpg'); */\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\nheader h1{\r\n    text-align: center;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 5rem;\r\n    justify-content: center;\r\n    min-height: 100vh;\r\n}\r\n\r\n.board-1 , .player-board, .computer-board{\r\n    border: 0.25px solid white;\r\n}\r\n\r\n.gameboard {\r\n    width: 20rem;\r\n    height: 50vh;\r\n    background-color: aquamarine;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    row-gap: 0;\r\n}\r\n\r\n.hovered {\r\n    background-color: #f4f4f4;\r\n    border-style: dashed;\r\n}\r\n\r\n.cell-hit, .cell-miss {\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n    color: rgb(78, 14, 14);\r\n}\r\n\r\n.cell-miss {\r\n    color: rgb(3, 31, 9);\r\n}\r\n\r\n.board-buttons {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    \r\n}\r\n\r\nbutton {\r\n    margin-top: 2rem;\r\n    gap: 0.5rem;\r\n    padding: 1rem;\r\n    border-radius: 30px;\r\n    background: linear-gradient(orange, yellow);\r\n    border: none;\r\n    cursor: pointer;\r\n    box-shadow: 0 4px rgb(22, 22, 22);\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: rgb(0, 0, 3);\r\n}\r\n\r\nbutton:active {\r\n    background-color: rgb(0, 0, 3);\r\n    box-shadow: 0 1px rgb(22, 22, 22);\r\n    transform: translateY(1px);\r\n}\r\n\r\n.ship-container {\r\n    width: 240px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 3px;\r\n    gap: 1rem;\r\n}\r\n\r\n.all-ships {\r\n    height: 220px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.ships-full {\r\n    margin-right: 5px;\r\n    cursor: move;\r\n    display: flex;\r\n}\r\n\r\n.hold {\r\n    border: darkblue solid 1pxs;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.ship-cluster {\r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n.ship-unit {\r\n    width: 30px;\r\n    height: 29.25px;\r\n    border: 0.25px solid blue;\r\n    background-color: burlywood;\r\n}\r\n\r\n.ship-unit-1 {\r\n    background-color: rgb(87, 190, 113);\r\n}\r\n.ship-unit-2{\r\n    background-color: gold;\r\n}\r\n.ship-unit-3{\r\n    background-color: magenta;\r\n}\r\n.ship-unit-4{\r\n    background-color: rgb(238, 147, 73);\r\n}\r\n\r\n.column {\r\n    flex-direction: column;\r\n}\r\n\r\n.row {\r\n    flex-direction: row;\r\n}\r\n\r\n.rotate-button {\r\n    display: block;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yDAAyD;IACzD,yDAA6F;IAC7F,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,4BAA4B;IAC5B,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,6BAA6B;;AAEjC;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,2CAA2C;IAC3C,YAAY;IACZ,eAAe;IACf,iCAAiC;IACjC,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;IAC9B,iCAAiC;IACjC,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,WAAW;IACX,eAAe;IACf,yBAAyB;IACzB,2BAA2B;AAC/B;;AAEA;IACI,mCAAmC;AACvC;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["body {\r\n    /* background-image: url('./images/military_ship.jpg'); */\r\n    background-image: url('./images/depositphotos_6606010-stock-photo-the-warship-on-a-blue.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\nheader h1{\r\n    text-align: center;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 5rem;\r\n    justify-content: center;\r\n    min-height: 100vh;\r\n}\r\n\r\n.board-1 , .player-board, .computer-board{\r\n    border: 0.25px solid white;\r\n}\r\n\r\n.gameboard {\r\n    width: 20rem;\r\n    height: 50vh;\r\n    background-color: aquamarine;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n    row-gap: 0;\r\n}\r\n\r\n.hovered {\r\n    background-color: #f4f4f4;\r\n    border-style: dashed;\r\n}\r\n\r\n.cell-hit, .cell-miss {\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n    color: rgb(78, 14, 14);\r\n}\r\n\r\n.cell-miss {\r\n    color: rgb(3, 31, 9);\r\n}\r\n\r\n.board-buttons {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    \r\n}\r\n\r\nbutton {\r\n    margin-top: 2rem;\r\n    gap: 0.5rem;\r\n    padding: 1rem;\r\n    border-radius: 30px;\r\n    background: linear-gradient(orange, yellow);\r\n    border: none;\r\n    cursor: pointer;\r\n    box-shadow: 0 4px rgb(22, 22, 22);\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: rgb(0, 0, 3);\r\n}\r\n\r\nbutton:active {\r\n    background-color: rgb(0, 0, 3);\r\n    box-shadow: 0 1px rgb(22, 22, 22);\r\n    transform: translateY(1px);\r\n}\r\n\r\n.ship-container {\r\n    width: 240px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 3px;\r\n    gap: 1rem;\r\n}\r\n\r\n.all-ships {\r\n    height: 220px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.ships-full {\r\n    margin-right: 5px;\r\n    cursor: move;\r\n    display: flex;\r\n}\r\n\r\n.hold {\r\n    border: darkblue solid 1pxs;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.ship-cluster {\r\n    display: flex;\r\n    gap: 1rem;\r\n}\r\n\r\n.ship-unit {\r\n    width: 30px;\r\n    height: 29.25px;\r\n    border: 0.25px solid blue;\r\n    background-color: burlywood;\r\n}\r\n\r\n.ship-unit-1 {\r\n    background-color: rgb(87, 190, 113);\r\n}\r\n.ship-unit-2{\r\n    background-color: gold;\r\n}\r\n.ship-unit-3{\r\n    background-color: magenta;\r\n}\r\n.ship-unit-4{\r\n    background-color: rgb(238, 147, 73);\r\n}\r\n\r\n.column {\r\n    flex-direction: column;\r\n}\r\n\r\n.row {\r\n    flex-direction: row;\r\n}\r\n\r\n.rotate-button {\r\n    display: block;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/create-boards.js":
/*!*****************************************!*\
  !*** ./src/components/create-boards.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBoards)
/* harmony export */ });
function createBoards() {
  function createPlayerBoard(boardIDs, boardDiv, gameboard) {
    boardIDs.forEach((id) => {
      const cell = document.createElement("div");
      cell.dataset.coordinates = id;
      cell.className = "player-board";
      cell.id = `player-${id}`;
      if (gameboard[id] !== "empty") {
        if (gameboard[id].shipLength === 1) {
          cell.className = "player-board ship-unit ship-unit-1";
        } else if (gameboard[id].shipLength === 2) {
          cell.className = "player-board ship-unit ship-unit-2";
        } else if (gameboard[id].shipLength === 3) {
          cell.className = "player-board ship-unit ship-unit-3";
        } else if (gameboard[id].shipLength === 4) {
          cell.className = "player-board ship-unit ship-unit-4";
        }
      }
      boardDiv.appendChild(cell);
      return boardDiv;
    });
  }

  function createComputerBoard(boardIDs, boardDiv, gameboard) {
    boardIDs.forEach((id) => {
      const cell = document.createElement("div");
      cell.className = "computer-board";
      cell.dataset.coordinates = id;
      cell.id = `computer-${id}`;
      // if (gameboard[id] !== "empty") {
      //   if (gameboard[id].shipLength === 1) {
      //     cell.className = "computer-board ship-unit ship-unit-1";
      //   } else if (gameboard[id].shipLength === 2) {
      //     cell.className = "computer-board ship-unit ship-unit-2";
      //   } else if (gameboard[id].shipLength === 3) {
      //     cell.className = "computer-board ship-unit ship-unit-3";
      //   } else if (gameboard[id].shipLength === 4) {
      //     cell.className = "computer-board ship-unit ship-unit-4";
      //   }
      // }
      boardDiv.appendChild(cell);
    });
    return boardDiv;
  }

  return { createPlayerBoard, createComputerBoard };
}


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

  return { type, gameboard, attack, makeRandomMove, attackedSpots };
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
/* harmony import */ var _components_create_boards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create-boards */ "./src/components/create-boards.js");









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
const playerGameboard = player.gameboard.board;
const gameboardIDs = Object.keys(playerGameboard);

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
  updateInitial.updateGameBoard(playerGameboard, gameboardIDs);
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
      updateInitial.updateGameBoard(playerGameboard, gameboardIDs);
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
  const emptyCount = Object.values(playerGameboard).filter(
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
    const boardCreation = (0,_components_create_boards__WEBPACK_IMPORTED_MODULE_7__["default"])();
    boardCreation.createPlayerBoard(
      gameboardIDs,
      gamePlayComponent.playerBoardDiv,
      playerGameboard
    );
    boardCreation.createComputerBoard(
      computerGameboardIDs,
      gamePlayComponent.computerBoardDiv,
      computerGameboard
    );
    const playerBoardCells = document.querySelectorAll(".player-board");
    const computerBoardCells = document.querySelectorAll(".computer-board");
    computerBoardCells.forEach((cell) => {
      const clickedCells = [];
      const computerAttackedCells = [];
      cell.addEventListener(
        "click",
        () => {
          player.attack(cell.dataset.coordinates, computer.gameboard);
          clickedCells.push(cell);
          clickedCells.forEach((clickedCell) => {
            const shipHit = computerGameboard[clickedCell.dataset.coordinates];
            if (shipHit !== "missed shot") {
              clickedCell.innerHTML = "X";
              clickedCell.classList.add("cell-hit");
              if (shipHit.shipLength === 1) {
                clickedCell.className =
                  "computer-board ship-unit ship-unit-1 cell-hit";
              } else if (shipHit.shipLength === 2) {
                clickedCell.className =
                  "computer-board ship-unit ship-unit-2 cell-hit";
              } else if (shipHit.shipLength === 3) {
                clickedCell.className =
                  "computer-board ship-unit ship-unit-3 cell-hit";
              } else if (shipHit.shipLength === 4) {
                clickedCell.className =
                  "computer-board ship-unit ship-unit-4 cell-hit";
              }
            } else if (shipHit === "missed shot") {
              clickedCell.innerHTML = "O";
              clickedCell.classList.add("cell-miss");
            }
          });
          if (computer.gameboard.checkIfAllShipsSunk()) {
            setTimeout(() => alert("You win"), 10);
          }
          computer.makeRandomMove(player.gameboard);
          console.log(computer.attackedSpots, playerGameboard);
          computer.attackedSpots.forEach((spot) => {
            const attackedCell = playerGameboard[spot];
            const cellDiv = document.getElementById(`player-${spot}`);
            console.log(attackedCell, cellDiv);
            if (attackedCell !== "missed shot" && attackedCell !== "empty") {
              cellDiv.innerHTML = "X";
              cellDiv.classList.add("cell-hit");
            } else if (attackedCell === "missed shot") {
              cellDiv.innerHTML = "O";
              cellDiv.classList.add("cell-miss");
            }
          });
          if (player.gameboard.checkIfAllShipsSunk()) {
            setTimeout(() => alert("You lose"), 10);
          }
        },
        { once: true }
      );
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNVO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlLWJvYXJkcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9nYW1lUGxheS1jb21wb25lbnRzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVwbGF5L21haW4tZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZXBsYXkvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lcGxheS9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5pdGlhbC1jb21wb25lbnRzL2dhbWVib2FyZC1pbml0aWFsLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbml0aWFsLWNvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbml0aWFsLWNvbXBvbmVudHMvbWFpbi1jb21wb25lbnRzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbml0aWFsLWNvbXBvbmVudHMvdXBkYXRlR2FtZWJvYXJkSW5pdGlhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZGVwb3NpdHBob3Rvc182NjA2MDEwLXN0b2NrLXBob3RvLXRoZS13YXJzaGlwLW9uLWEtYmx1ZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9taWxpdGFyeV9zaGlwLmpwZycpOyAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDF7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiA1cmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC0xICwgLnBsYXllci1ib2FyZCwgLmNvbXB1dGVyLWJvYXJke1xcclxcbiAgICBib3JkZXI6IDAuMjVweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1MHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIHJvdy1nYXA6IDA7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlcmVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XFxyXFxufVxcclxcblxcclxcbi5jZWxsLWhpdCwgLmNlbGwtbWlzcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogcmdiKDc4LCAxNCwgMTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC1taXNzIHtcXHJcXG4gICAgY29sb3I6IHJnYigzLCAzMSwgOSk7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KG9yYW5nZSwgeWVsbG93KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IHJnYigyMiwgMjIsIDIyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDMpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDMpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCByZ2IoMjIsIDIyLCAyMik7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDNweDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXNoaXBzIHtcXHJcXG4gICAgaGVpZ2h0OiAyMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMtZnVsbCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICBjdXJzb3I6IG1vdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ob2xkIHtcXHJcXG4gICAgYm9yZGVyOiBkYXJrYmx1ZSBzb2xpZCAxcHhzO1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY2x1c3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtdW5pdCB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI5LjI1cHg7XFxyXFxuICAgIGJvcmRlcjogMC4yNXB4IHNvbGlkIGJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtdW5pdC0xIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxOTAsIDExMyk7XFxyXFxufVxcclxcbi5zaGlwLXVuaXQtMntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG59XFxyXFxuLnNoaXAtdW5pdC0ze1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYWdlbnRhO1xcclxcbn1cXHJcXG4uc2hpcC11bml0LTR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE0NywgNzMpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sdW1uIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5yb3RhdGUtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5REFBeUQ7SUFDekQseURBQTZGO0lBQzdGLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL21pbGl0YXJ5X3NoaXAuanBnJyk7ICovXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvZGVwb3NpdHBob3Rvc182NjA2MDEwLXN0b2NrLXBob3RvLXRoZS13YXJzaGlwLW9uLWEtYmx1ZS5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxe1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogNXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtMSAsIC5wbGF5ZXItYm9hcmQsIC5jb21wdXRlci1ib2FyZHtcXHJcXG4gICAgYm9yZGVyOiAwLjI1cHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGhlaWdodDogNTB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICByb3ctZ2FwOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbC1oaXQsIC5jZWxsLW1pc3Mge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHJnYig3OCwgMTQsIDE0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwtbWlzcyB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMywgMzEsIDkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtYnV0dG9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChvcmFuZ2UsIHllbGxvdyk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCByZ2IoMjIsIDIyLCAyMik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAzKTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggcmdiKDIyLCAyMiwgMjIpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC1zaGlwcyB7XFxyXFxuICAgIGhlaWdodDogMjIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBzLWZ1bGwge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBtb3ZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9sZCB7XFxyXFxuICAgIGJvcmRlcjogZGFya2JsdWUgc29saWQgMXB4cztcXHJcXG59XFxyXFxuXFxyXFxuLmludmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNsdXN0ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXVuaXQge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyOS4yNXB4O1xcclxcbiAgICBib3JkZXI6IDAuMjVweCBzb2xpZCBibHVlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXVuaXQtMSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgMTkwLCAxMTMpO1xcclxcbn1cXHJcXG4uc2hpcC11bml0LTJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxufVxcclxcbi5zaGlwLXVuaXQtM3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFnZW50YTtcXHJcXG59XFxyXFxuLnNoaXAtdW5pdC00e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxNDcsIDczKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbHVtbiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5yb3cge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4ucm90YXRlLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQm9hcmRzKCkge1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZVBsYXllckJvYXJkKGJvYXJkSURzLCBib2FyZERpdiwgZ2FtZWJvYXJkKSB7XHJcbiAgICBib2FyZElEcy5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY2VsbC5kYXRhc2V0LmNvb3JkaW5hdGVzID0gaWQ7XHJcbiAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJwbGF5ZXItYm9hcmRcIjtcclxuICAgICAgY2VsbC5pZCA9IGBwbGF5ZXItJHtpZH1gO1xyXG4gICAgICBpZiAoZ2FtZWJvYXJkW2lkXSAhPT0gXCJlbXB0eVwiKSB7XHJcbiAgICAgICAgaWYgKGdhbWVib2FyZFtpZF0uc2hpcExlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInBsYXllci1ib2FyZCBzaGlwLXVuaXQgc2hpcC11bml0LTFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGdhbWVib2FyZFtpZF0uc2hpcExlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInBsYXllci1ib2FyZCBzaGlwLXVuaXQgc2hpcC11bml0LTJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGdhbWVib2FyZFtpZF0uc2hpcExlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInBsYXllci1ib2FyZCBzaGlwLXVuaXQgc2hpcC11bml0LTNcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGdhbWVib2FyZFtpZF0uc2hpcExlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInBsYXllci1ib2FyZCBzaGlwLXVuaXQgc2hpcC11bml0LTRcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgIHJldHVybiBib2FyZERpdjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZXJCb2FyZChib2FyZElEcywgYm9hcmREaXYsIGdhbWVib2FyZCkge1xyXG4gICAgYm9hcmRJRHMuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjb21wdXRlci1ib2FyZFwiO1xyXG4gICAgICBjZWxsLmRhdGFzZXQuY29vcmRpbmF0ZXMgPSBpZDtcclxuICAgICAgY2VsbC5pZCA9IGBjb21wdXRlci0ke2lkfWA7XHJcbiAgICAgIC8vIGlmIChnYW1lYm9hcmRbaWRdICE9PSBcImVtcHR5XCIpIHtcclxuICAgICAgLy8gICBpZiAoZ2FtZWJvYXJkW2lkXS5zaGlwTGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIC8vICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiY29tcHV0ZXItYm9hcmQgc2hpcC11bml0IHNoaXAtdW5pdC0xXCI7XHJcbiAgICAgIC8vICAgfSBlbHNlIGlmIChnYW1lYm9hcmRbaWRdLnNoaXBMZW5ndGggPT09IDIpIHtcclxuICAgICAgLy8gICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjb21wdXRlci1ib2FyZCBzaGlwLXVuaXQgc2hpcC11bml0LTJcIjtcclxuICAgICAgLy8gICB9IGVsc2UgaWYgKGdhbWVib2FyZFtpZF0uc2hpcExlbmd0aCA9PT0gMykge1xyXG4gICAgICAvLyAgICAgY2VsbC5jbGFzc05hbWUgPSBcImNvbXB1dGVyLWJvYXJkIHNoaXAtdW5pdCBzaGlwLXVuaXQtM1wiO1xyXG4gICAgICAvLyAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkW2lkXS5zaGlwTGVuZ3RoID09PSA0KSB7XHJcbiAgICAgIC8vICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiY29tcHV0ZXItYm9hcmQgc2hpcC11bml0IHNoaXAtdW5pdC00XCI7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYm9hcmREaXY7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBjcmVhdGVQbGF5ZXJCb2FyZCwgY3JlYXRlQ29tcHV0ZXJCb2FyZCB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVQbGF5Q29tcG9uZW50cygpIHtcclxuICBjb25zdCBwbGF5ZXJCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGxheWVyQm9hcmREaXYuY2xhc3NOYW1lID0gXCJnYW1lYm9hcmRcIjtcclxuICBwbGF5ZXJCb2FyZERpdi5pZCA9IFwicGxheWVyLWJvYXJkXCI7XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVyQm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbXB1dGVyQm9hcmREaXYuY2xhc3NOYW1lID0gXCJnYW1lYm9hcmRcIjtcclxuICBjb21wdXRlckJvYXJkRGl2LmlkID0gXCJwbGF5ZXItYm9hcmRcIjtcclxuXHJcbiAgcmV0dXJuIHsgcGxheWVyQm9hcmREaXYsIGNvbXB1dGVyQm9hcmREaXYgfTtcclxufVxyXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lQm9hcmQoKSB7XHJcbiAgY29uc3QgVkVSVElDQUxfQ09PUkRJTkFURVMgPSBbXHJcbiAgICBcIjBcIixcclxuICAgIFwiMVwiLFxyXG4gICAgXCIyXCIsXHJcbiAgICBcIjNcIixcclxuICAgIFwiNFwiLFxyXG4gICAgXCI1XCIsXHJcbiAgICBcIjZcIixcclxuICAgIFwiN1wiLFxyXG4gICAgXCI4XCIsXHJcbiAgICBcIjlcIixcclxuICBdO1xyXG4gIGNvbnN0IEhPUklaT05UQUxfQ09PUkRJTkFURVMgPSBbXHJcbiAgICBcIkFcIixcclxuICAgIFwiQlwiLFxyXG4gICAgXCJDXCIsXHJcbiAgICBcIkRcIixcclxuICAgIFwiRVwiLFxyXG4gICAgXCJGXCIsXHJcbiAgICBcIkdcIixcclxuICAgIFwiSFwiLFxyXG4gICAgXCJJXCIsXHJcbiAgICBcIkpcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBib2FyZCA9IHt9O1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcclxuICAgIEhPUklaT05UQUxfQ09PUkRJTkFURVMuZm9yRWFjaCgobGV0dGVyKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVkVSVElDQUxfQ09PUkRJTkFURVMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbnVtYmVyID0gVkVSVElDQUxfQ09PUkRJTkFURVNbaV07XHJcbiAgICAgICAgY29uc3Qga2V5ID0gbGV0dGVyICsgbnVtYmVyO1xyXG4gICAgICAgIGJvYXJkW2tleV0gPSBcImVtcHR5XCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQm9hcmQoKTtcclxuXHJcbiAgY29uc3Qgc2hpcHMgPSB7fTtcclxuICBsZXQgc2hpcHNQbGFjZWRPbkJvYXJkQ291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVOZXdTaGlwKGxlbmd0aCkge1xyXG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XHJcbiAgICByZXR1cm4gc2hpcDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUFsbFNoaXBzKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZU5ld1NoaXAoMSk7XHJcbiAgICAgIHNoaXBzW2BzaGlwXyR7aX1fbGVuZ3RoXzFgXSA9IHNoaXA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICBjb25zdCBzaGlwID0gY3JlYXRlTmV3U2hpcCgyKTtcclxuICAgICAgc2hpcHNbYHNoaXBfJHtpfV9sZW5ndGhfMmBdID0gc2hpcDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVOZXdTaGlwKDMpO1xyXG4gICAgICBzaGlwc1tgc2hpcF8ke2l9X2xlbmd0aF8zYF0gPSBzaGlwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbG9uZ2VzdFNoaXAgPSBjcmVhdGVOZXdTaGlwKDQpO1xyXG4gICAgc2hpcHNbYHNoaXBfMF9sZW5ndGhfNGBdID0gbG9uZ2VzdFNoaXA7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVBbGxTaGlwcygpO1xyXG5cclxuICBmdW5jdGlvbiBjaG9vc2VOZXh0Q29vcmRpbmF0ZXMoc2hpcCwgc3RhcnRpbmdDb29yZGluYXRlcywgZGlyZWN0aW9uKSB7XHJcbiAgICBsZXQgbmV4dENvb3JkaW5hdGVMaXN0ID0gW107XHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xyXG4gICAgICBjb25zdCBsZXR0ZXJDb2RlID0gc3RhcnRpbmdDb29yZGluYXRlcy5jaGFyQ29kZUF0KDApO1xyXG4gICAgICBjb25zdCBudW1iZXIgPSBzdGFydGluZ0Nvb3JkaW5hdGVzWzFdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuc2hpcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dExldHRlckNvZGUgPSBsZXR0ZXJDb2RlICsgaTtcclxuICAgICAgICBjb25zdCBuZXh0TGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0TGV0dGVyQ29kZSk7XHJcbiAgICAgICAgY29uc3QgbmV4dENvb3JkaW5hdGUgPSBuZXh0TGV0dGVyICsgbnVtYmVyO1xyXG4gICAgICAgIG5leHRDb29yZGluYXRlTGlzdC5wdXNoKG5leHRDb29yZGluYXRlKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV4dENvb3JkaW5hdGVMaXN0O1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xyXG4gICAgICBjb25zdCBsZXR0ZXIgPSBzdGFydGluZ0Nvb3JkaW5hdGVzWzBdO1xyXG4gICAgICBjb25zdCBzdGFydGluZ051bWJlciA9IHN0YXJ0aW5nQ29vcmRpbmF0ZXNbMV07XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5zaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBuZXh0TnVtYmVyID0gcGFyc2VJbnQoc3RhcnRpbmdOdW1iZXIpICsgaTtcclxuICAgICAgICBjb25zdCBuZXh0Q29vcmRpbmF0ZSA9IGxldHRlciArIG5leHROdW1iZXI7XHJcbiAgICAgICAgbmV4dENvb3JkaW5hdGVMaXN0LnB1c2gobmV4dENvb3JkaW5hdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXh0Q29vcmRpbmF0ZUxpc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0lmQ29vcmRpbmF0ZXNMaXN0SXNBdmFpbGFibGUobmV4dENvb3JkaW5hdGVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5leHRDb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgY29vcmRpbmF0ZSA9IG5leHRDb29yZGluYXRlc1tpXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGJvYXJkW2Nvb3JkaW5hdGVdICE9PSBcImVtcHR5XCIgJiZcclxuICAgICAgICBPYmplY3Qua2V5cyhib2FyZCkuaW5jbHVkZXMoY29vcmRpbmF0ZSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKGJvYXJkKS5pbmNsdWRlcyhjb29yZGluYXRlKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VTaGlwT25Cb2FyZChzaGlwLCBzdGFydGluZ0Nvb3JkaW5hdGVzLCBkaXJlY3Rpb24pIHtcclxuICAgIGlmIChzaGlwc1BsYWNlZE9uQm9hcmRDb3VudCA9PT0gMTApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IG5leHRDb29yZGluYXRlcyA9IGNob29zZU5leHRDb29yZGluYXRlcyhcclxuICAgICAgc2hpcCxcclxuICAgICAgc3RhcnRpbmdDb29yZGluYXRlcyxcclxuICAgICAgZGlyZWN0aW9uXHJcbiAgICApO1xyXG4gICAgaWYgKGNoZWNrSWZDb29yZGluYXRlc0xpc3RJc0F2YWlsYWJsZShuZXh0Q29vcmRpbmF0ZXMpID09PSB0cnVlKSB7XHJcbiAgICAgIG5leHRDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XHJcbiAgICAgICAgYm9hcmRbY29vcmRpbmF0ZV0gPSBzaGlwO1xyXG4gICAgICAgIGlmIChzaGlwLnNoaXBDb29yZGluYXRlc1swXSA9PT0gXCJlbXB0eVwiKSB7XHJcbiAgICAgICAgICBzaGlwLnNoaXBDb29yZGluYXRlc1swXSA9IGNvb3JkaW5hdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNoaXAuc2hpcENvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2hpcHNQbGFjZWRPbkJvYXJkQ291bnQgKz0gMTtcclxuXHJcbiAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH0gZWxzZSBpZiAoY2hlY2tJZkNvb3JkaW5hdGVzTGlzdElzQXZhaWxhYmxlKG5leHRDb29yZGluYXRlcykgPT09IGZhbHNlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNob29zZVJhbmRvbUNvb3JkaW5hdGVzQW5kRGlyZWN0aW9uKCkge1xyXG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiXTtcclxuICAgIGNvbnN0IGJvYXJkS2V5cyA9IE9iamVjdC5rZXlzKGJvYXJkKTtcclxuICAgIGNvbnN0IHJhbmRvbUNvb3JkaW5hdGUgPVxyXG4gICAgICBib2FyZEtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmRLZXlzLmxlbmd0aCldO1xyXG4gICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID1cclxuICAgICAgZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaXJlY3Rpb25zLmxlbmd0aCldO1xyXG4gICAgcmV0dXJuIFtyYW5kb21Db29yZGluYXRlLCByYW5kb21EaXJlY3Rpb25dO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5T25Cb2FyZCgpIHtcclxuICAgIGlmIChzaGlwc1BsYWNlZE9uQm9hcmRDb3VudCA9PT0gMTApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hpcHNMaXN0ID0gT2JqZWN0LnZhbHVlcyhzaGlwcyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBzaGlwID0gc2hpcHNMaXN0W2ldO1xyXG4gICAgICBsZXQgcmFuZG9tID0gY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZXNBbmREaXJlY3Rpb24oKTtcclxuICAgICAgbGV0IG5leHRDb29yZGluYXRlcyA9IGNob29zZU5leHRDb29yZGluYXRlcyhzaGlwLCByYW5kb21bMF0sIHJhbmRvbVsxXSk7XHJcbiAgICAgIHdoaWxlIChjaGVja0lmQ29vcmRpbmF0ZXNMaXN0SXNBdmFpbGFibGUobmV4dENvb3JkaW5hdGVzKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICByYW5kb20gPSBjaG9vc2VSYW5kb21Db29yZGluYXRlc0FuZERpcmVjdGlvbigpO1xyXG4gICAgICAgIG5leHRDb29yZGluYXRlcyA9IGNob29zZU5leHRDb29yZGluYXRlcyhzaGlwLCByYW5kb21bMF0sIHJhbmRvbVsxXSk7XHJcbiAgICAgIH1cclxuICAgICAgcGxhY2VTaGlwT25Cb2FyZChzaGlwLCByYW5kb21bMF0sIHJhbmRvbVsxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcclxuICAgIGlmIChib2FyZFtjb29yZGluYXRlXSAhPT0gXCJlbXB0eVwiICYmIGJvYXJkW2Nvb3JkaW5hdGVdICE9PSBcIm1pc3NlZCBzaG90XCIpIHtcclxuICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkW2Nvb3JkaW5hdGVdO1xyXG4gICAgICBzaGlwLmhpdCgpO1xyXG4gICAgfSBlbHNlIGlmIChib2FyZFtjb29yZGluYXRlXSA9PSBcImVtcHR5XCIpIHtcclxuICAgICAgYm9hcmRbY29vcmRpbmF0ZV0gPSBcIm1pc3NlZCBzaG90XCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0lmQWxsU2hpcHNTdW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2hpcHNPYmplY3RzID0gT2JqZWN0LnZhbHVlcyhzaGlwcyk7XHJcbiAgICBjb25zdCBzaGlwUG9zaXRpb25zU3RhdHVzID0gW107XHJcbiAgICBzaGlwc09iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IE9iamVjdC52YWx1ZXMob2JqZWN0LnNoaXBQb3NpdGlvbnMpO1xyXG4gICAgICBzdGF0dXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHNoaXBQb3NpdGlvbnNTdGF0dXMucHVzaChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFBvc2l0aW9uc1N0YXR1cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHNoaXBQb3NpdGlvbnNTdGF0dXNbaV07XHJcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJub3QgaGl0XCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBib2FyZCxcclxuICAgIHNoaXBzLFxyXG4gICAgcGxhY2VTaGlwT25Cb2FyZCxcclxuICAgIHBsYWNlU2hpcHNSYW5kb21seU9uQm9hcmQsXHJcbiAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgY2hlY2tJZkFsbFNoaXBzU3VuayxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluR2FtZSgpIHtcclxuICBjb25zdCBodW1hblBsYXllciA9IFBsYXllcihcIkh1bWFuXCIpO1xyXG4gIGNvbnN0IEFJUGxheWVyID0gUGxheWVyKFwiQUlcIik7XHJcbiAgbGV0IHR1cm4gPSBcIkh1bWFuXCI7XHJcblxyXG4gIGZ1bmN0aW9uIGVuZFR1cm4oKSB7XHJcbiAgICBpZiAodHVybiA9PT0gXCJIdW1hblwiKSB7XHJcbiAgICAgIHR1cm4gPSBcIkFJXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0dXJuID0gXCJIdW1hblwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheShjb29yZGluYXRlKSB7XHJcbiAgICBpZiAodHVybiA9PT0gXCJIdW1hblwiKSB7XHJcbiAgICAgIGh1bWFuUGxheWVyLmF0dGFjayhjb29yZGluYXRlLCBBSVBsYXllci5nYW1lYm9hcmQpO1xyXG4gICAgICBlbmRUdXJuKCk7XHJcbiAgICB9IGVsc2UgaWYgKHR1cm4gPT09IFwiQUlcIikge1xyXG4gICAgICBBSVBsYXllci5tYWtlUmFuZG9tTW92ZShodW1hblBsYXllci5nYW1lYm9hcmQpO1xyXG4gICAgICBlbmRUdXJuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnYW1lRW5kKCkge1xyXG4gICAgaWYgKGh1bWFuUGxheWVyLmdhbWVib2FyZC5jaGVja0lmQWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgcmV0dXJuIFwiWW91IGxvc2VcIjtcclxuICAgIH0gZWxzZSBpZiAoQUlQbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrSWZBbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgICByZXR1cm4gXCJZb3Ugd2luXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaHVtYW5QbGF5ZXIsXHJcbiAgICBBSVBsYXllcixcclxuICAgIHBsYXksXHJcbiAgICBnYW1lRW5kLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcih0eXBlUGFyYW0pIHtcclxuICBjb25zdCB0eXBlID0gdHlwZVBhcmFtO1xyXG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVCb2FyZCgpO1xyXG5cclxuICBjb25zdCBhdHRhY2tlZFNwb3RzID0gW107XHJcblxyXG4gIGNvbnN0IGF0dGFjayA9IGZ1bmN0aW9uIChjb29yZGluYXRlLCBvcHBvbmVudEJvYXJkKSB7XHJcbiAgICBpZiAoYXR0YWNrZWRTcG90cy5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xyXG4gICAgICByZXR1cm4gXCJDYW5ub3QgYXR0YWNrIHNhbWUgbG9jYXRpb24gdHdpY2VcIjtcclxuICAgIH1cclxuICAgIG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcclxuICAgIGF0dGFja2VkU3BvdHMucHVzaChjb29yZGluYXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtYWtlUmFuZG9tTW92ZSA9IGZ1bmN0aW9uIChvcHBvbmVudEJvYXJkKSB7XHJcbiAgICBjb25zdCBib2FyZEtleXMgPSBPYmplY3Qua2V5cyhvcHBvbmVudEJvYXJkLmJvYXJkKTtcclxuICAgIGxldCByYW5kb21Db29yZGluYXRlID1cclxuICAgICAgYm9hcmRLZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkS2V5cy5sZW5ndGgpXTtcclxuICAgIHdoaWxlIChhdHRhY2tlZFNwb3RzLmluY2x1ZGVzKHJhbmRvbUNvb3JkaW5hdGUpKSB7XHJcbiAgICAgIHJhbmRvbUNvb3JkaW5hdGUgPVxyXG4gICAgICAgIGJvYXJkS2V5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZEtleXMubGVuZ3RoKV07XHJcbiAgICB9XHJcbiAgICBhdHRhY2socmFuZG9tQ29vcmRpbmF0ZSwgb3Bwb25lbnRCb2FyZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgdHlwZSwgZ2FtZWJvYXJkLCBhdHRhY2ssIG1ha2VSYW5kb21Nb3ZlLCBhdHRhY2tlZFNwb3RzIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcclxuICBjb25zdCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xyXG4gIGNvbnN0IHNoaXBQb3NpdGlvbnMgPSB7fTtcclxuICBsZXQgc2hpcENvb3JkaW5hdGVzID0gW1wiZW1wdHlcIl07XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoaXBQb3NpdGlvbnMoc2hpcExlbmd0aCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcclxuICAgICAgc2hpcFBvc2l0aW9uc1tpXSA9IFwibm90IGhpdFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNoaXBQb3NpdGlvbnM7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTaGlwUG9zaXRpb25zKGxlbmd0aCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhpdCgpIHtcclxuICAgIGZvciAoY29uc3QgcG9zaXRpb24gb2YgT2JqZWN0LmtleXMoc2hpcFBvc2l0aW9ucykpIHtcclxuICAgICAgaWYgKHNoaXBQb3NpdGlvbnNbcG9zaXRpb25dID09IFwibm90IGhpdFwiKSB7XHJcbiAgICAgICAgc2hpcFBvc2l0aW9uc1twb3NpdGlvbl0gPSBcImhpdFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBwb3NpdGlvblZhbHVlcyA9IE9iamVjdC52YWx1ZXMoc2hpcFBvc2l0aW9ucyk7XHJcbiAgICBpZiAocG9zaXRpb25WYWx1ZXMuaW5jbHVkZXMoXCJub3QgaGl0XCIpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzaGlwTGVuZ3RoLFxyXG4gICAgc2hpcFBvc2l0aW9ucyxcclxuICAgIHNoaXBDb29yZGluYXRlcyxcclxuICAgIGhpdCxcclxuICAgIGlzU3VuayxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBtYWluR2FtZSBmcm9tIFwiLi9nYW1lcGxheS9tYWluLWdhbWVcIjtcclxuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9pbml0aWFsLWNvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBtYWluQ29tcG9uZW50cyBmcm9tIFwiLi9pbml0aWFsLWNvbXBvbmVudHMvbWFpbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBnYW1lYm9hcmRJbml0aWFsIGZyb20gXCIuL2luaXRpYWwtY29tcG9uZW50cy9nYW1lYm9hcmQtaW5pdGlhbFwiO1xyXG5pbXBvcnQgdXBkYXRlVUkgZnJvbSBcIi4vaW5pdGlhbC1jb21wb25lbnRzL3VwZGF0ZUdhbWVib2FyZEluaXRpYWxcIjtcclxuaW1wb3J0IGdhbWVQbGF5Q29tcG9uZW50cyBmcm9tIFwiLi9jb21wb25lbnRzL2dhbWVQbGF5LWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGNyZWF0ZUJvYXJkcyBmcm9tIFwiLi9jb21wb25lbnRzL2NyZWF0ZS1ib2FyZHNcIjtcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29tcG9uZW50cy5tYWluKTtcclxuXHJcbmNvbnN0IGdhbWUgPSBtYWluR2FtZSgpO1xyXG5jb25zdCBwbGF5ZXIgPSBnYW1lLmh1bWFuUGxheWVyO1xyXG5jb25zdCBjb21wdXRlciA9IGdhbWUuQUlQbGF5ZXI7XHJcbmNvbXB1dGVyLmdhbWVib2FyZC5wbGFjZVNoaXBzUmFuZG9tbHlPbkJvYXJkKCk7XHJcbmNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gY29tcHV0ZXIuZ2FtZWJvYXJkLmJvYXJkO1xyXG5jb25zdCBjb21wdXRlckdhbWVib2FyZElEcyA9IE9iamVjdC5rZXlzKGNvbXB1dGVyR2FtZWJvYXJkKTtcclxuY29uc3Qgc2hpcHMgPSBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzO1xyXG5jb25zdCBzaGlwc05hbWVzID0gT2JqZWN0LmtleXMoc2hpcHMpO1xyXG5jb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkO1xyXG5jb25zdCBnYW1lYm9hcmRJRHMgPSBPYmplY3Qua2V5cyhwbGF5ZXJHYW1lYm9hcmQpO1xyXG5cclxuY29uc3QgdXBkYXRlSW5pdGlhbCA9IHVwZGF0ZVVJKCk7XHJcblxyXG5jb25zdCBpbml0aWFsR2FtZWJvYXJkID0gZ2FtZWJvYXJkSW5pdGlhbCgpO1xyXG5pbml0aWFsR2FtZWJvYXJkLmNyZWF0ZVBsYWNlbWVudEJvYXJkKFxyXG4gIGdhbWVib2FyZElEcyxcclxuICBtYWluQ29tcG9uZW50cy5wbGFjZW1lbnRCb2FyZFxyXG4pO1xyXG5pbml0aWFsR2FtZWJvYXJkLmNyZWF0ZVBsYXllclNoaXBVSShtYWluQ29tcG9uZW50cy5zaGlwQ29udGFpbmVyLCBzaGlwc05hbWVzKTtcclxuXHJcbm1haW5Db21wb25lbnRzLnJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1haW5Db21wb25lbnRzLnNoaXBDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seU9uQm9hcmQoKTtcclxuICB1cGRhdGVJbml0aWFsLnVwZGF0ZUdhbWVCb2FyZChwbGF5ZXJHYW1lYm9hcmQsIGdhbWVib2FyZElEcyk7XHJcbn0pO1xyXG5cclxuY29uc3QgZnVsbFNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBzLWZ1bGxcIik7XHJcbmNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtMVwiKTtcclxuY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGUtYnV0dG9uXCIpO1xyXG5jb25zdCBhbGxTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWxsLXNoaXBzXCIpO1xyXG5jb25zdCBzaGlwQ2x1c3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC1jbHVzdGVyXCIpO1xyXG5cclxuZnVsbFNoaXAuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG4gIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4gZHJhZ1N0YXJ0KGUpKTtcclxuICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIGRyYWdFbmQpO1xyXG59KTtcclxuXHJcbmJvYXJkQ2VsbC5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IGRyYWdPdmVyKGUpKTtcclxuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgKGUpID0+IGRyYWdFbnRlcihlKSk7XHJcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIChlKSA9PiBkcmFnTGVhdmUoZSkpO1xyXG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGUpID0+IGRyYWdEcm9wKGUpKTtcclxufSk7XHJcblxyXG5yb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdGF0ZVNoaXBzKTtcclxuXHJcbmZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XHJcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZS50YXJnZXQuaWQpO1xyXG4gIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcclxuICBlLnRhcmdldC5jbGFzc05hbWUgKz0gXCIgaG9sZFwiO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4gZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKSwgMTApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmFnRW5kKCkge1xyXG4gIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImhvbGRcIik7XHJcbiAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhvdmVyZWRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYWdMZWF2ZShlKSB7XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYWdEcm9wKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpLmluY2x1ZGVzKFwic2hpcFwiKSkge1xyXG4gICAgY29uc3QgZGF0YSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCBzaGlwTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpO1xyXG4gICAgY29uc3Qgc2hpcFRvUGxhY2UgPSBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzW2RhdGFdO1xyXG4gICAgY29uc3Qgc2hpcERpcmVjdGlvbiA9IHNoaXBOYW1lLmRhdGFzZXQuc2hpcE9yaWVudGF0aW9uO1xyXG4gICAgaWYgKFxyXG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcE9uQm9hcmQoc2hpcFRvUGxhY2UsIGUudGFyZ2V0LmlkLCBzaGlwRGlyZWN0aW9uKVxyXG4gICAgKSB7XHJcbiAgICAgIHVwZGF0ZUluaXRpYWwudXBkYXRlR2FtZUJvYXJkKHBsYXllckdhbWVib2FyZCwgZ2FtZWJvYXJkSURzKTtcclxuICAgICAgdXBkYXRlSW5pdGlhbC51cGRhdGVTaGlwQ29udGFpbmVyKHNoaXBOYW1lKTtcclxuICAgIH1cclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcmVkXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcm90YXRlU2hpcHMoKSB7XHJcbiAgYWxsU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5jbGFzc0xpc3QudG9nZ2xlKFwicm93XCIpKTtcclxuICBzaGlwQ2x1c3Rlci5mb3JFYWNoKChjbHVzdGVyKSA9PiBjbHVzdGVyLmNsYXNzTGlzdC50b2dnbGUoXCJjb2x1bW5cIikpO1xyXG4gIGZ1bGxTaGlwLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcImNvbHVtblwiKTtcclxuICAgIGlmIChzaGlwLmRhdGFzZXQuc2hpcE9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgc2hpcC5kYXRhc2V0LnNoaXBPcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hpcC5kYXRhc2V0LnNoaXBPcmllbnRhdGlvbiA9IFwidmVydGljYWxcIjtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxubWFpbkNvbXBvbmVudHMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCBlbXB0eUNvdW50ID0gT2JqZWN0LnZhbHVlcyhwbGF5ZXJHYW1lYm9hcmQpLmZpbHRlcihcclxuICAgIChlbXB0eSkgPT4gZW1wdHkgPT09IFwiZW1wdHlcIlxyXG4gICkubGVuZ3RoO1xyXG4gIGlmIChlbXB0eUNvdW50ID4gODApIHtcclxuICAgIHJldHVybiBhbGVydChcIlBsZWFzZSBwbGFjZSBhbGwgeW91ciBzaGlwcyBvbiBib2FyZFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbWFpbkNvbXBvbmVudHMubWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgZ2FtZVBsYXlDb21wb25lbnQgPSBnYW1lUGxheUNvbXBvbmVudHMoKTtcclxuICAgIG1haW5Db21wb25lbnRzLm1haW4uYXBwZW5kKFxyXG4gICAgICBnYW1lUGxheUNvbXBvbmVudC5wbGF5ZXJCb2FyZERpdixcclxuICAgICAgZ2FtZVBsYXlDb21wb25lbnQuY29tcHV0ZXJCb2FyZERpdlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGJvYXJkQ3JlYXRpb24gPSBjcmVhdGVCb2FyZHMoKTtcclxuICAgIGJvYXJkQ3JlYXRpb24uY3JlYXRlUGxheWVyQm9hcmQoXHJcbiAgICAgIGdhbWVib2FyZElEcyxcclxuICAgICAgZ2FtZVBsYXlDb21wb25lbnQucGxheWVyQm9hcmREaXYsXHJcbiAgICAgIHBsYXllckdhbWVib2FyZFxyXG4gICAgKTtcclxuICAgIGJvYXJkQ3JlYXRpb24uY3JlYXRlQ29tcHV0ZXJCb2FyZChcclxuICAgICAgY29tcHV0ZXJHYW1lYm9hcmRJRHMsXHJcbiAgICAgIGdhbWVQbGF5Q29tcG9uZW50LmNvbXB1dGVyQm9hcmREaXYsXHJcbiAgICAgIGNvbXB1dGVyR2FtZWJvYXJkXHJcbiAgICApO1xyXG4gICAgY29uc3QgcGxheWVyQm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLWJvYXJkXCIpO1xyXG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlci1ib2FyZFwiKTtcclxuICAgIGNvbXB1dGVyQm9hcmRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsaWNrZWRDZWxscyA9IFtdO1xyXG4gICAgICBjb25zdCBjb21wdXRlckF0dGFja2VkQ2VsbHMgPSBbXTtcclxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBwbGF5ZXIuYXR0YWNrKGNlbGwuZGF0YXNldC5jb29yZGluYXRlcywgY29tcHV0ZXIuZ2FtZWJvYXJkKTtcclxuICAgICAgICAgIGNsaWNrZWRDZWxscy5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgY2xpY2tlZENlbGxzLmZvckVhY2goKGNsaWNrZWRDZWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaXBIaXQgPSBjb21wdXRlckdhbWVib2FyZFtjbGlja2VkQ2VsbC5kYXRhc2V0LmNvb3JkaW5hdGVzXTtcclxuICAgICAgICAgICAgaWYgKHNoaXBIaXQgIT09IFwibWlzc2VkIHNob3RcIikge1xyXG4gICAgICAgICAgICAgIGNsaWNrZWRDZWxsLmlubmVySFRNTCA9IFwiWFwiO1xyXG4gICAgICAgICAgICAgIGNsaWNrZWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLWhpdFwiKTtcclxuICAgICAgICAgICAgICBpZiAoc2hpcEhpdC5zaGlwTGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjbGlja2VkQ2VsbC5jbGFzc05hbWUgPVxyXG4gICAgICAgICAgICAgICAgICBcImNvbXB1dGVyLWJvYXJkIHNoaXAtdW5pdCBzaGlwLXVuaXQtMSBjZWxsLWhpdFwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcEhpdC5zaGlwTGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjbGlja2VkQ2VsbC5jbGFzc05hbWUgPVxyXG4gICAgICAgICAgICAgICAgICBcImNvbXB1dGVyLWJvYXJkIHNoaXAtdW5pdCBzaGlwLXVuaXQtMiBjZWxsLWhpdFwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcEhpdC5zaGlwTGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBjbGlja2VkQ2VsbC5jbGFzc05hbWUgPVxyXG4gICAgICAgICAgICAgICAgICBcImNvbXB1dGVyLWJvYXJkIHNoaXAtdW5pdCBzaGlwLXVuaXQtMyBjZWxsLWhpdFwiO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcEhpdC5zaGlwTGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGlja2VkQ2VsbC5jbGFzc05hbWUgPVxyXG4gICAgICAgICAgICAgICAgICBcImNvbXB1dGVyLWJvYXJkIHNoaXAtdW5pdCBzaGlwLXVuaXQtNCBjZWxsLWhpdFwiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwSGl0ID09PSBcIm1pc3NlZCBzaG90XCIpIHtcclxuICAgICAgICAgICAgICBjbGlja2VkQ2VsbC5pbm5lckhUTUwgPSBcIk9cIjtcclxuICAgICAgICAgICAgICBjbGlja2VkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1taXNzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChjb21wdXRlci5nYW1lYm9hcmQuY2hlY2tJZkFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYWxlcnQoXCJZb3Ugd2luXCIpLCAxMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb21wdXRlci5tYWtlUmFuZG9tTW92ZShwbGF5ZXIuZ2FtZWJvYXJkKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyLmF0dGFja2VkU3BvdHMsIHBsYXllckdhbWVib2FyZCk7XHJcbiAgICAgICAgICBjb21wdXRlci5hdHRhY2tlZFNwb3RzLmZvckVhY2goKHNwb3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXR0YWNrZWRDZWxsID0gcGxheWVyR2FtZWJvYXJkW3Nwb3RdO1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBsYXllci0ke3Nwb3R9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF0dGFja2VkQ2VsbCwgY2VsbERpdik7XHJcbiAgICAgICAgICAgIGlmIChhdHRhY2tlZENlbGwgIT09IFwibWlzc2VkIHNob3RcIiAmJiBhdHRhY2tlZENlbGwgIT09IFwiZW1wdHlcIikge1xyXG4gICAgICAgICAgICAgIGNlbGxEaXYuaW5uZXJIVE1MID0gXCJYXCI7XHJcbiAgICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKFwiY2VsbC1oaXRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrZWRDZWxsID09PSBcIm1pc3NlZCBzaG90XCIpIHtcclxuICAgICAgICAgICAgICBjZWxsRGl2LmlubmVySFRNTCA9IFwiT1wiO1xyXG4gICAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZChcImNlbGwtbWlzc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5jaGVja0lmQWxsU2hpcHNTdW5rKCkpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBhbGVydChcIllvdSBsb3NlXCIpLCAxMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG9uY2U6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZWJvYXJkSW5pdGlhbCgpIHtcclxuICBmdW5jdGlvbiBjcmVhdGVQbGFjZW1lbnRCb2FyZChib2FyZElEcywgYm9hcmQpIHtcclxuICAgIGJvYXJkSURzLmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiYm9hcmQtMVwiO1xyXG4gICAgICBjZWxsLmlkID0gaWQ7XHJcbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJTaGlwVUkoc2hpcENvbnRhaW5lciwgc2hpcExpc3QpIHtcclxuICAgIGNvbnN0IGFsbFNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFsbFNoaXBzLmNsYXNzTmFtZSA9IFwiYWxsLXNoaXBzXCI7XHJcbiAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsbFNoaXBzKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xyXG4gICAgICBjb25zdCBzaGlwQ2x1c3RlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBzaGlwQ2x1c3RlcnMuY2xhc3NOYW1lID0gXCJzaGlwLWNsdXN0ZXJcIjtcclxuICAgICAgc2hpcENsdXN0ZXJzLmlkID0gYHNoaXAtY2x1c3Rlci0ke2l9YDtcclxuICAgICAgYWxsU2hpcHMuYXBwZW5kQ2hpbGQoc2hpcENsdXN0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBzaGlwTGlzdC5mb3JFYWNoKChzaGlwTmFtZSkgPT4ge1xyXG4gICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgc2hpcC5jbGFzc05hbWUgPSBcInNoaXBzLWZ1bGxcIjtcclxuICAgICAgc2hpcC5pZCA9IHNoaXBOYW1lO1xyXG4gICAgICBzaGlwLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgIHNoaXAuZGF0YXNldC5zaGlwT3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XHJcbiAgICAgIGlmIChzaGlwTmFtZS5pbmNsdWRlcyhcImxlbmd0aF8xXCIpKSB7XHJcbiAgICAgICAgc2hpcC5kYXRhc2V0LnNoaXBMZW5ndGggPSAxO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcC1jbHVzdGVyLTFcIikuYXBwZW5kQ2hpbGQoc2hpcCk7XHJcbiAgICAgICAgY29uc3Qgc2hpcFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNoaXBVbml0LmNsYXNzTmFtZSA9IFwic2hpcC11bml0IHNoaXAtdW5pdC0xXCI7XHJcbiAgICAgICAgc2hpcC5hcHBlbmRDaGlsZChzaGlwVW5pdCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2hpcE5hbWUuaW5jbHVkZXMoXCJsZW5ndGhfMlwiKSkge1xyXG4gICAgICAgIHNoaXAuZGF0YXNldC5zaGlwTGVuZ3RoID0gMjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtY2x1c3Rlci0yXCIpLmFwcGVuZENoaWxkKHNoaXApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBzaGlwVW5pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBzaGlwVW5pdC5jbGFzc05hbWUgPSBcInNoaXAtdW5pdCBzaGlwLXVuaXQtMlwiO1xyXG4gICAgICAgICAgc2hpcC5hcHBlbmRDaGlsZChzaGlwVW5pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHNoaXBOYW1lLmluY2x1ZGVzKFwibGVuZ3RoXzNcIikpIHtcclxuICAgICAgICBzaGlwLmRhdGFzZXQuc2hpcExlbmd0aCA9IDM7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwLWNsdXN0ZXItM1wiKS5hcHBlbmRDaGlsZChzaGlwKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgY29uc3Qgc2hpcFVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgc2hpcFVuaXQuY2xhc3NOYW1lID0gXCJzaGlwLXVuaXQgc2hpcC11bml0LTNcIjtcclxuICAgICAgICAgIHNoaXAuYXBwZW5kQ2hpbGQoc2hpcFVuaXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzaGlwTmFtZS5pbmNsdWRlcyhcImxlbmd0aF80XCIpKSB7XHJcbiAgICAgICAgc2hpcC5kYXRhc2V0LnNoaXBMZW5ndGggPSA0O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcC1jbHVzdGVyLTRcIikuYXBwZW5kQ2hpbGQoc2hpcCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IHNoaXBVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIHNoaXBVbml0LmNsYXNzTmFtZSA9IFwic2hpcC11bml0IHNoaXAtdW5pdC00XCI7XHJcbiAgICAgICAgICBzaGlwLmFwcGVuZENoaWxkKHNoaXBVbml0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qgcm90YXRlX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICByb3RhdGVfYnV0dG9uLmNsYXNzTmFtZSA9IFwicm90YXRlLWJ1dHRvblwiO1xyXG4gICAgcm90YXRlX2J1dHRvbi5pbm5lckhUTUwgPSBcIlJvdGF0ZVwiO1xyXG4gICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3RhdGVfYnV0dG9uKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGNyZWF0ZVBsYWNlbWVudEJvYXJkLCBjcmVhdGVQbGF5ZXJTaGlwVUkgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gaGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGgxLmlubmVySFRNTCA9IFwiQmF0dGxlU2hpcHNcIjtcclxuICBoZWFkLmFwcGVuZENoaWxkKGgxKTtcclxuICByZXR1cm4gaGVhZDtcclxufSkoKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIG1haW5Db21wb25lbnRzKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuXHJcbiAgY29uc3QgYm9hcmRQbHVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBwbGFjZW1lbnRCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcGxhY2VtZW50Qm9hcmQuY2xhc3NOYW1lID0gXCJnYW1lYm9hcmRcIjtcclxuICBwbGFjZW1lbnRCb2FyZC5pZCA9IFwicGxhY2VtZW50LWJvYXJkXCI7XHJcbiAgYm9hcmRQbHVzQnV0dG9uLmFwcGVuZENoaWxkKHBsYWNlbWVudEJvYXJkKTtcclxuXHJcbiAgY29uc3QgYm9hcmRCdXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib2FyZEJ1dHRvbnNEaXYuY2xhc3NOYW1lID0gXCJib2FyZC1idXR0b25zXCI7XHJcbiAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICByYW5kb21pemVCdXR0b24uaWQgPSBcInJhbmRvbWl6ZS1zaGlwc1wiO1xyXG4gIHJhbmRvbWl6ZUJ1dHRvbi5pbm5lckhUTUwgPSBcIlJhbmRvbSBCb2FyZFwiO1xyXG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBzdGFydEJ1dHRvbi5pZCA9IFwic3RhcnQtYnV0dG9uXCI7XHJcbiAgc3RhcnRCdXR0b24uaW5uZXJIVE1MID0gXCJTdGFydCBHYW1lXCI7XHJcbiAgYm9hcmRCdXR0b25zRGl2LmFwcGVuZChzdGFydEJ1dHRvbiwgcmFuZG9taXplQnV0dG9uKTtcclxuICBib2FyZFBsdXNCdXR0b24uYXBwZW5kQ2hpbGQoYm9hcmRCdXR0b25zRGl2KTtcclxuXHJcbiAgbWFpbi5hcHBlbmRDaGlsZChib2FyZFBsdXNCdXR0b24pO1xyXG5cclxuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzaGlwQ29udGFpbmVyLmlkID0gXCJzaGlwLWNvbnRhaW5lclwiO1xyXG4gIHNoaXBDb250YWluZXIuY2xhc3NOYW1lID0gXCJzaGlwLWNvbnRhaW5lclwiO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoc2hpcENvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtYWluLFxyXG4gICAgYm9hcmRQbHVzQnV0dG9uLFxyXG4gICAgc3RhcnRCdXR0b24sXHJcbiAgICByYW5kb21pemVCdXR0b24sXHJcbiAgICBzaGlwQ29udGFpbmVyLFxyXG4gICAgcGxhY2VtZW50Qm9hcmQsXHJcbiAgfTtcclxufSkoKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVUkoUGxhY2VkU2hpcCkge1xyXG4gIGZ1bmN0aW9uIHVwZGF0ZUdhbWVCb2FyZChnYW1lYm9hcmQsIGdhbWVib2FyZElETGlzdCkge1xyXG4gICAgZ2FtZWJvYXJkSURMaXN0LmZvckVhY2goKGlkKSA9PiB7XHJcbiAgICAgIGlmIChnYW1lYm9hcmRbaWRdICE9PSBcImVtcHR5XCIpIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmIChnYW1lYm9hcmRbaWRdLnNoaXBMZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJzaGlwLXVuaXQgc2hpcC11bml0LTFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGdhbWVib2FyZFtpZF0uc2hpcExlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInNoaXAtdW5pdCBzaGlwLXVuaXQtMlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkW2lkXS5zaGlwTGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9IFwic2hpcC11bml0IHNoaXAtdW5pdC0zXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lYm9hcmRbaWRdLnNoaXBMZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJzaGlwLXVuaXQgc2hpcC11bml0LTRcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU2hpcENvbnRhaW5lcihQbGFjZWRTaGlwKSB7XHJcbiAgICBQbGFjZWRTaGlwLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoUGxhY2VkU2hpcCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdXBkYXRlR2FtZUJvYXJkLFxyXG4gICAgdXBkYXRlU2hpcENvbnRhaW5lcixcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
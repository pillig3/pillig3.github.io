"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["complex"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/complex.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/complex.scss ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
}

canvas {
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

body {
  overflow: hidden;
  font-family: sans-serif;
  background: black;
}

/*******************/
/*   Input boxes   */
/*******************/
div#allInputDiv div::-webkit-scrollbar {
  display: none;
}
div#allInputDiv div.input {
  background: white;
  border-style: solid;
  border-width: thin;
  border-color: black;
  border-radius: 5px;
  height: 1.2em;
  overflow-x: visible;
  overflow-y: visible;
  margin: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  position: sticky;
  float: left;
}
div#allInputDiv div.input textarea {
  font-size: 12pt;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow: auto;
  resize: none;
  font-family: monospace, monospace;
  font-kerning: none;
}
div#allInputDiv div.input textarea::-webkit-scrollbar {
  display: none;
}
div#allInputDiv div.input#inputDiv {
  width: 240pt;
}
div#allInputDiv div.input#widthDiv, div#allInputDiv div.input#heightDiv {
  width: 60pt;
}
div#allInputDiv div.input#centerDiv {
  width: 100pt;
}
div#allInputDiv div.input span.hoverText {
  border-radius: 5px;
  opacity: 0;
  width: 100%;
  left: 0;
  height: 1.2em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  top: 100%;
  color: black;
  text-align: center;
  background-color: lightgrey;
  position: absolute;
  -moz-transition: all 0.75s ease-in-out 0s;
  -webkit-transition: all 0.75s ease-in-out 0s;
  -ms-transition: all 0.75s ease-in-out 0s;
  transition: all 0.75s ease-in-out 0s;
}
div#allInputDiv div.input:hover span.hoverText {
  opacity: 0.9;
}
div#allInputDiv div.input:hover span.hoverText:hover {
  opacity: 0;
}
div#allInputDiv div#plusMinusDiv {
  float: right;
}
div#allInputDiv div#plusMinusDiv div.input {
  float: left;
  padding: 0.4em;
  width: 1.4em;
  height: 1.4em;
  margin-left: 0;
  margin-right: 1em;
}
div#allInputDiv div#plusMinusDiv div.input div.horiz {
  background-color: black;
  padding: 0;
  float: left;
  border-radius: 0;
  margin: 0;
  position: absolute;
  height: 0.25em;
  width: 1.8em;
  margin-top: 0.575em;
  margin-left: -0.2em;
}
div#allInputDiv div#plusMinusDiv div.input div.vert {
  background-color: black;
  padding: 0;
  float: left;
  border-radius: 0;
  margin: 0;
  position: absolute;
  width: 0.25em;
  height: 1.8em;
  margin-left: 0.575em;
  margin-top: -0.2em;
}
div#allInputDiv div#plusMinusDiv div.input#originDiv {
  background-size: 1.8em;
  background-position: center;
  background-repeat: no-repeat;
}
div#allInputDiv div#plusMinusDiv div.input#chevronDiv {
  width: 2em;
  height: 2em;
  padding: 0.1em;
}
div#allInputDiv div#plusMinusDiv div.input#chevronDiv.upsidedown {
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
}
div#allInputDiv div#plusMinusDiv div#menuBox div.input {
  width: 2em;
  height: 2em;
  padding: 0.1em;
}

div#errorDiv {
  background: white;
  border-style: solid;
  border-width: thin;
  border-color: black;
  border-radius: 5px;
  height: 1.2em;
  overflow-x: visible;
  overflow-y: visible;
  margin: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  position: sticky;
  float: left;
  float: none;
  padding: 0;
  position: absolute;
  color: black;
  bottom: 0;
  width: 75%;
  height: 1.7em;
  margin-left: 12.5%;
  text-align: center;
  text-shadow: 1px 1px 2px lightgrey;
  font-size-adjust: auto;
  opacity: 0;
  -moz-transition: all 2s ease-in-out 0s;
  -webkit-transition: all 2s ease-in-out 0s;
  -ms-transition: all 2s ease-in-out 0s;
  transition: all 2s ease-in-out 0s;
}
div#errorDiv.visible {
  opacity: 1;
  -moz-transition: all 0s ease-in-out 0s;
  -webkit-transition: all 0s ease-in-out 0s;
  -ms-transition: all 0s ease-in-out 0s;
  transition: all 0s ease-in-out 0s;
}
div#errorDiv.notAnError {
  background-color: lightgrey;
}
div#errorDiv.anError {
  background-color: yellow;
}`, "",{"version":3,"sources":["webpack://./src/complex.scss"],"names":[],"mappings":"AAEA;EACC,UAAA;EACA,SAAA;AADD;;AAIA;EACC,iBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;AADD;;AAIA;EACC,gBAAA;EACA,uBAAA;EACA,iBAAA;AADD;;AAIA,oBAAA;AACA,oBAAA;AACA,oBAAA;AAuEE;EACC,aAAA;AAvEH;AA0EE;EArED,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBARe;EASf,aARiB;EASjB,mBAAA;EACA,mBAAA;EACA,aAbc;EAcd,kBAdc;EAed,qBAfc;EAgBd,mBAhBc;EAiBd,oBAjBc;EAkBd,gBAAA;EACA,WAAA;AAFD;AA2DG;EArDF,eAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,cAAA;EACA,YAAA;EACA,iCAAA;EACA,kBAAA;AAHD;AAiDI;EACC,aAAA;AA/CL;AAkDG;EACC,YAAA;AAhDJ;AAkDG;EAEC,WAAA;AAjDJ;AAmDG;EACC,YAAA;AAjDJ;AAoDG;EAzCF,kBAAA;EACA,UAAA;EACA,WAAA;EACA,OAAA;EACA,aAtDiB;EAuDjB,kBAzDc;EA0Dd,qBA1Dc;EA2Dd,SAAA;EACA,YAAA;EACA,kBAAA;EACA,2BAAA;EACA,kBAAA;EAlBA,yCAAA;EACA,4CAAA;EACA,wCAAA;EACA,oCAAA;AAWD;AAqCG;EACC,YAAA;AAnCJ;AAoCI;EACC,UAAA;AAlCL;AAuCE;EACC,YAAA;AArCH;AAyCG;EACC,WAAA;EACA,cAJe;EAKf,YANY;EAOZ,aAPY;EAQZ,cAAA;EACA,iBAAA;AAvCJ;AA2CI;EAnFH,uBAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;EACA,SAAA;EACA,kBAAA;EAgFI,cAJY;EAKZ,YAAA;EACA,mBAAA;EACA,mBAAA;AApCL;AAuCI;EA3FH,uBAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;EACA,SAAA;EACA,kBAAA;EAwFI,aAZY;EAaZ,aAAA;EACA,oBAAA;EACA,kBAAA;AAhCL;AAmCI;EACC,sBAAA;EACA,2BAAA;EACA,4BAAA;AAjCL;AAoCI;EACC,UAAA;EACA,WAAA;EACA,cAAA;AAlCL;AAmCK;EACC,6BAAA;EACA,qBAAA;AAjCN;AAuCI;EACC,UAAA;EACA,WAAA;EACA,cAAA;AArCL;;AA4CA;EA9JC,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBARe;EASf,aARiB;EASjB,mBAAA;EACA,mBAAA;EACA,aAbc;EAcd,kBAdc;EAed,qBAfc;EAgBd,mBAhBc;EAiBd,oBAjBc;EAkBd,gBAAA;EACA,WAAA;EAkJA,WAAA;EACA,UAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,kCAAA;EACA,sBAAA;EACA,UAAA;EAnIA,sCAAA;EACA,yCAAA;EACA,qCAAA;EACA,iCAAA;AAyGD;AAyBC;EACC,UAAA;EAtID,sCAAA;EACA,yCAAA;EACA,qCAAA;EACA,iCAAA;AAgHD;AAsBC;EACC,2BAAA;AApBF;AAsBC;EACC,wBAAA;AApBF","sourcesContent":["@use \"sass:math\";\r\n\r\n* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\n\r\ncanvas {\r\n\tbackground: black;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tz-index: -1;\r\n}\r\n\r\nbody {\r\n\toverflow: hidden;\r\n\tfont-family: sans-serif;\r\n\tbackground: black;\r\n}\r\n\r\n/*******************/\r\n/*   Input boxes   */\r\n/*******************/\r\n$input-margin: 0.5em;\r\n$border-radius: 5px;\r\n$inputDiv-height: 1.2em;\r\n\r\n@mixin inputDivFormat() {\r\n\tbackground: white;\r\n\tborder-style: solid;\r\n\tborder-width: thin;\r\n\tborder-color: black;\r\n\tborder-radius: $border-radius;\r\n\theight: $inputDiv-height;\r\n\toverflow-x: visible;\r\n\toverflow-y: visible;\r\n\tmargin: $input-margin;\r\n\tpadding-top: $input-margin;\r\n\tpadding-bottom: $input-margin;\r\n\tpadding-left: $input-margin;\r\n\tpadding-right: $input-margin;\r\n\tposition: sticky;\r\n\tfloat: left;\r\n}\r\n\r\n@mixin inputFormat() {\r\n\tfont-size: 12pt;\r\n\tborder: none;\r\n\toutline: none;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\twhite-space: nowrap;\r\n\toverflow: auto;\r\n\tresize: none;\r\n\tfont-family: monospace, monospace;\r\n\tfont-kerning: none;\r\n}\r\n\r\n@mixin rectangleFormat() {\r\n\tbackground-color: black;\r\n\tpadding: 0;\r\n\tfloat: left;\r\n\tborder-radius: 0;\r\n\tmargin: 0;\r\n\tposition: absolute;\r\n}\r\n\r\n@mixin ease-in-out($time) {\r\n\t-moz-transition: all $time ease-in-out 0s;\r\n\t-webkit-transition: all $time ease-in-out 0s;\r\n\t-ms-transition: all $time ease-in-out 0s;\r\n\ttransition: all $time ease-in-out 0s;\r\n}\r\n\r\n@mixin hoverTextFormat {\r\n\tborder-radius: 5px;\r\n\topacity: 0;\r\n\twidth: 100%;\r\n\tleft: 0;\r\n\theight: $inputDiv-height;\r\n\tpadding-top: $input-margin;\r\n\tpadding-bottom: $input-margin;\r\n\ttop: 100%;\r\n\tcolor: black;\r\n\ttext-align: center;\r\n\tbackground-color: lightgrey;\r\n\tposition: absolute;\r\n\t@include ease-in-out(0.75s);\r\n}\r\n\r\n// Input formatting\r\ndiv#allInputDiv {\r\n\tdiv {\r\n\t\t&::-webkit-scrollbar {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t&.input {\r\n\t\t\t@include inputDivFormat();\r\n\t\t\t& textarea {\r\n\t\t\t\t@include inputFormat();\r\n\t\t\t\t&::-webkit-scrollbar {\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&#inputDiv {\r\n\t\t\t\twidth: 240pt;\r\n\t\t\t}\r\n\t\t\t&#widthDiv,\r\n\t\t\t&#heightDiv {\r\n\t\t\t\twidth: 60pt;\r\n\t\t\t}\r\n\t\t\t&#centerDiv {\r\n\t\t\t\twidth: 100pt;\r\n\t\t\t}\r\n\r\n\t\t\tspan.hoverText {\r\n\t\t\t\t@include hoverTextFormat();\r\n\t\t\t}\r\n\t\t\t&:hover span.hoverText {\r\n\t\t\t\topacity: 0.9;\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\topacity: 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&#plusMinusDiv {\r\n\t\t\tfloat: right;\r\n\t\t\t$inner-size: 1.4em;\r\n\t\t\t$inner-padding: 0.4em;\r\n\r\n\t\t\tdiv.input {\r\n\t\t\t\tfloat: left;\r\n\t\t\t\tpadding: $inner-padding;\r\n\t\t\t\twidth: $inner-size;\r\n\t\t\t\theight: $inner-size;\r\n\t\t\t\tmargin-left: 0;\r\n\t\t\t\tmargin-right: 2 * $input-margin;\r\n\r\n\t\t\t\t$short-side: 0.25em;\r\n\t\t\t\t//Horizontal line\r\n\t\t\t\tdiv.horiz {\r\n\t\t\t\t\t@include rectangleFormat();\r\n\t\t\t\t\theight: $short-side;\r\n\t\t\t\t\twidth: $inner-size + $inner-padding;\r\n\t\t\t\t\tmargin-top: math.div($inner-size, 2) - math.div($short-side, 2);\r\n\t\t\t\t\tmargin-left: math.div(-$inner-padding, 2);\r\n\t\t\t\t}\r\n\t\t\t\t//Vertical line\r\n\t\t\t\tdiv.vert {\r\n\t\t\t\t\t@include rectangleFormat();\r\n\t\t\t\t\twidth: $short-side;\r\n\t\t\t\t\theight: $inner-size + $inner-padding;\r\n\t\t\t\t\tmargin-left: math.div($inner-size, 2) - math.div($short-side, 2);\r\n\t\t\t\t\tmargin-top: math.div(-$inner-padding, 2);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t&#originDiv {\r\n\t\t\t\t\tbackground-size: $inner-size + $inner-padding;\r\n\t\t\t\t\tbackground-position: center;\r\n\t\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t&#chevronDiv {\r\n\t\t\t\t\twidth: 2em;\r\n\t\t\t\t\theight: 2em;\r\n\t\t\t\t\tpadding: 0.1em;\r\n\t\t\t\t\t&.upsidedown {\r\n\t\t\t\t\t\t-webkit-transform: scaleY(-1);\r\n\t\t\t\t\t\ttransform: scaleY(-1);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tdiv#menuBox {\r\n\t\t\t\tdiv.input {\r\n\t\t\t\t\twidth: 2em;\r\n\t\t\t\t\theight: 2em;\r\n\t\t\t\t\tpadding: 0.1em;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\ndiv#errorDiv {\r\n\t@include inputDivFormat();\r\n\tfloat: none;\r\n\tpadding: 0;\r\n\tposition: absolute;\r\n\tcolor: black;\r\n\tbottom: 0;\r\n\twidth: 75%;\r\n\theight: $inputDiv-height + $input-margin;\r\n\tmargin-left: 12.5%;\r\n\ttext-align: center;\r\n\ttext-shadow: 1px 1px 2px lightgrey;\r\n\tfont-size-adjust: auto;\r\n\topacity: 0;\r\n\t@include ease-in-out(2s);\r\n\t&.visible {\r\n\t\topacity: 1;\r\n\t\t@include ease-in-out(0s);\r\n\t}\r\n\t&.notAnError {\r\n\t\tbackground-color: lightgrey;\r\n\t}\r\n\t&.anError {\r\n\t\tbackground-color: yellow;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/images/chevron.png":
/*!********************************!*\
  !*** ./src/images/chevron.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/chevron.png");

/***/ }),

/***/ "./src/images/chevron.webp":
/*!*********************************!*\
  !*** ./src/images/chevron.webp ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/chevron.webp");

/***/ }),

/***/ "./src/images/i.png":
/*!**************************!*\
  !*** ./src/images/i.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/i.png");

/***/ }),

/***/ "./src/images/i.webp":
/*!***************************!*\
  !*** ./src/images/i.webp ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/i.webp");

/***/ }),

/***/ "./src/images/link.png":
/*!*****************************!*\
  !*** ./src/images/link.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/link.png");

/***/ }),

/***/ "./src/images/link.webp":
/*!******************************!*\
  !*** ./src/images/link.webp ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/link.webp");

/***/ }),

/***/ "./src/images/lockAspectRatio.png":
/*!****************************************!*\
  !*** ./src/images/lockAspectRatio.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/lockAspectRatio.png");

/***/ }),

/***/ "./src/images/lockAspectRatio.webp":
/*!*****************************************!*\
  !*** ./src/images/lockAspectRatio.webp ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/lockAspectRatio.webp");

/***/ }),

/***/ "./src/images/magnifier.png":
/*!**********************************!*\
  !*** ./src/images/magnifier.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/magnifier.png");

/***/ }),

/***/ "./src/images/magnifier.webp":
/*!***********************************!*\
  !*** ./src/images/magnifier.webp ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/magnifier.webp");

/***/ }),

/***/ "./src/images/mathcalO.png":
/*!*********************************!*\
  !*** ./src/images/mathcalO.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/mathcalO.png");

/***/ }),

/***/ "./src/images/mathcalO.webp":
/*!**********************************!*\
  !*** ./src/images/mathcalO.webp ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/mathcalO.webp");

/***/ }),

/***/ "./src/complex.scss":
/*!**************************!*\
  !*** ./src/complex.scss ***!
  \**************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_complex_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./complex.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/complex.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_complex_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_complex_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_complex_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_complex_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/complex.tsx":
/*!*************************!*\
  !*** ./src/complex.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_dom_1 = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
__webpack_require__(/*! ./complex.scss */ "./src/complex.scss");
const ComplexPlotter_1 = __importDefault(__webpack_require__(/*! ./components/ComplexPlotter */ "./src/components/ComplexPlotter.tsx"));
(0, react_dom_1.render)(React.createElement(ComplexPlotter_1.default, null), document.querySelector("#root"));


/***/ }),

/***/ "./src/components/ComplexPlotter.tsx":
/*!*******************************************!*\
  !*** ./src/components/ComplexPlotter.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const complexNumbers_1 = __webpack_require__(/*! ../scripts/complex/complexNumbers */ "./src/scripts/complex/complexNumbers.ts");
const parse_1 = __webpack_require__(/*! ../scripts/complex/parse */ "./src/scripts/complex/parse.ts");
const mathcalO_webp_1 = __importDefault(__webpack_require__(/*! ../images/mathcalO.webp */ "./src/images/mathcalO.webp"));
const mathcalO_png_1 = __importDefault(__webpack_require__(/*! ../images/mathcalO.png */ "./src/images/mathcalO.png"));
const chevron_webp_1 = __importDefault(__webpack_require__(/*! ../images/chevron.webp */ "./src/images/chevron.webp"));
const chevron_png_1 = __importDefault(__webpack_require__(/*! ../images/chevron.png */ "./src/images/chevron.png"));
const i_webp_1 = __importDefault(__webpack_require__(/*! ../images/i.webp */ "./src/images/i.webp"));
const i_png_1 = __importDefault(__webpack_require__(/*! ../images/i.png */ "./src/images/i.png"));
const link_webp_1 = __importDefault(__webpack_require__(/*! ../images/link.webp */ "./src/images/link.webp"));
const link_png_1 = __importDefault(__webpack_require__(/*! ../images/link.png */ "./src/images/link.png"));
const lockAspectRatio_webp_1 = __importDefault(__webpack_require__(/*! ../images/lockAspectRatio.webp */ "./src/images/lockAspectRatio.webp"));
const lockAspectRatio_png_1 = __importDefault(__webpack_require__(/*! ../images/lockAspectRatio.png */ "./src/images/lockAspectRatio.png"));
const magnifier_webp_1 = __importDefault(__webpack_require__(/*! ../images/magnifier.webp */ "./src/images/magnifier.webp"));
const magnifier_png_1 = __importDefault(__webpack_require__(/*! ../images/magnifier.png */ "./src/images/magnifier.png"));
const ComplexPlotter = () => (React.createElement(React.Fragment, null,
    React.createElement("canvas", { id: "myCanvas", width: 1440, height: 900, tabIndex: 0 }),
    React.createElement("div", { id: "allInputDiv" },
        React.createElement("div", { className: "input", id: "inputDiv" },
            React.createElement("textarea", { id: "mainInput", contentEditable: true, suppressContentEditableWarning: true, autoFocus: true, autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", spellCheck: false }),
            React.createElement("label", { htmlFor: "mainInput" },
                React.createElement("span", { className: "hoverText" }, "function"))),
        React.createElement("div", { className: "input", id: "widthDiv" },
            React.createElement("textarea", { id: "widthInput", contentEditable: true, suppressContentEditableWarning: true, autoFocus: true, autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", spellCheck: false }),
            React.createElement("label", { htmlFor: "widthInput" },
                React.createElement("span", { className: "hoverText" }, "width"))),
        React.createElement("div", { className: "input", id: "heightDiv", hidden: true },
            React.createElement("textarea", { id: "heightInput", contentEditable: true, suppressContentEditableWarning: true, autoFocus: true, autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", spellCheck: false }),
            React.createElement("label", { htmlFor: "heightInput" },
                React.createElement("span", { className: "hoverText" }, "height"))),
        React.createElement("div", { className: "input", id: "centerDiv" },
            React.createElement("textarea", { id: "centerInput", contentEditable: true, suppressContentEditableWarning: true, autoFocus: true, autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", spellCheck: false }),
            React.createElement("label", { htmlFor: "centerInput" },
                React.createElement("span", { className: "hoverText" }, "center"))),
        React.createElement("div", { id: "plusMinusDiv" },
            React.createElement("div", { className: "input", id: "minusDiv", tabIndex: 0 },
                React.createElement("div", { className: "horiz" })),
            React.createElement("div", { className: "input", id: "plusDiv", tabIndex: 0 },
                React.createElement("div", { className: "horiz" }),
                React.createElement("div", { className: "vert" })),
            React.createElement("div", { className: "input", id: "chevronDiv", tabIndex: 0 },
                React.createElement("picture", { style: { verticalAlign: "middle" } },
                    React.createElement("source", { type: "image/webp", srcSet: chevron_webp_1.default }),
                    React.createElement("img", { src: chevron_png_1.default, height: "100%", width: "100%", alt: "" }))),
            React.createElement("br", null),
            React.createElement("div", { id: "menuBox", hidden: true },
                React.createElement("div", { className: "input", id: "originDiv", tabIndex: 0 },
                    React.createElement("picture", { style: { verticalAlign: "middle" } },
                        React.createElement("source", { type: "image/webp", srcSet: mathcalO_webp_1.default }),
                        React.createElement("img", { src: mathcalO_png_1.default, height: "100%", width: "100%", alt: "" }))),
                React.createElement("div", { className: "input", id: "ARButton", tabIndex: 0 },
                    React.createElement("picture", { style: { verticalAlign: "middle" } },
                        React.createElement("source", { type: "image/webp", srcSet: lockAspectRatio_webp_1.default }),
                        React.createElement("img", { src: lockAspectRatio_png_1.default, height: "100%", width: "100%", alt: "" }))),
                React.createElement("div", { className: "input", id: "rslnButt", tabIndex: 0 },
                    React.createElement("picture", { style: { verticalAlign: "middle" } },
                        React.createElement("source", { type: "image/webp", srcSet: magnifier_webp_1.default }),
                        React.createElement("img", { src: magnifier_png_1.default, height: "100%", width: "100%", alt: "" }))),
                React.createElement("br", null),
                React.createElement("div", { className: "input", id: "copyButt", tabIndex: 0 },
                    React.createElement("picture", { style: { verticalAlign: "middle" } },
                        React.createElement("source", { type: "image/webp", srcSet: link_webp_1.default }),
                        React.createElement("img", { src: link_png_1.default, height: "100%", width: "100%", alt: "" }))),
                React.createElement("div", { className: "input", id: "infoButt", tabIndex: 0 },
                    React.createElement("picture", { style: { verticalAlign: "middle" } },
                        React.createElement("source", { type: "image/webp", srcSet: i_webp_1.default }),
                        React.createElement("img", { src: i_png_1.default, height: "100%", width: "100%", alt: "" }))),
                React.createElement("br", null)))),
    React.createElement("div", { id: "errorDiv" })));
exports["default"] = ComplexPlotter;
const MIN_PIXELS = 20;
function dgebi(id) {
    return document.getElementById(id);
}
const floor = Math.floor;
var lastTimeout;
var input;
var widthInput;
var heightInput;
var centerInput;
var inputBoxes = ["mainInput", "widthInput", "heightInput", "centerInput"];
var canvas;
var ctx;
var imageData;
var data;
window.onresize = () => {
    view.hasChanged = true;
};
function onWindowLoad() {
    input = dgebi("mainInput");
    widthInput = dgebi("widthInput");
    heightInput = dgebi("heightInput");
    centerInput = dgebi("centerInput");
    inputBoxes = ["mainInput", "widthInput", "heightInput", "centerInput"];
    canvas = dgebi("myCanvas");
    ctx = canvas.getContext("2d");
    imageData = new ImageData(canvas.width, canvas.height);
    data = imageData.data;
    dgebi("allInputDiv").addEventListener("keydown", onInputKey);
    dgebi("plusMinusDiv").addEventListener("click", onButtonClick);
    canvas.addEventListener("keydown", onCanvasKey);
    for (let name of ["inputDiv", "widthDiv", "heightDiv"]) {
        dgebi(name).addEventListener("click", onInputDivClick);
    }
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let hash = window.location.hash;
    if (hash !== "" && hash !== "#") {
        setTimeout(drawFromHash, 0, hash.replace(/%20/g, " "));
    }
    else {
        setCenter(0, 0);
    }
    view.hasChanged = true;
    canvas.onmousedown = function (e) {
        if (e.buttons === 2) {
            return;
        }
        canvas.onmousemove = dragCanvas;
        canvas.addEventListener("keydown", abortIfEsc);
        dragStart = [e.pageX, e.pageY];
    };
    canvas.onmouseup = function (e) {
        canvas.onmousemove = null;
        canvas.removeEventListener("keydown", abortIfEsc);
        if (dragStart === undefined) {
            return;
        }
        if (Math.abs(e.pageX - dragStart[0]) < 5 && Math.abs(e.pageY - dragStart[1]) < 5) {
            ctx.putImageData(imageData, 0, 0);
            if (lastTimeout === undefined) {
                draw(view.lastFunc);
            }
            dragStart = undefined;
            return;
        }
        let ratio = imageData.width / window.innerWidth;
        let dx = ((e.pageX - dragStart[0]) / canvas.width) * view.width * ratio;
        let dy = -((e.pageY - dragStart[1]) / canvas.height) * view.height * ratio;
        view.center = [view.center[0] - dx, view.center[1] - dy];
        setCenter(view.center[0], view.center[1]);
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        data = imageData.data;
        draw(view.lastFunc);
        dragStart = undefined;
    };
}
window.addEventListener("load", onWindowLoad, false);
const view = {
    center: [0, 0],
    width: 10,
    height: (window.innerHeight / window.innerWidth) * 10,
    setHeight: function (width) {
        this.height = (window.innerHeight / window.innerWidth) * width;
    },
    setWidth: function (height) {
        this.width = (window.innerWidth / window.innerHeight) * height;
    },
    manuallySet: false,
    hasChanged: false,
    lastFunc: null,
    lastFuncStr: null,
    fixAspectRatio: true,
};
function setCenter(x, y) {
    view.center = [x, y];
    centerInput.value = x + "+" + y + "i";
    centerInput.lastValue = centerInput.value;
}
function toggleMenu() {
    let menuBox = dgebi("menuBox");
    let chevronDiv = dgebi("chevronDiv");
    if (chevronDiv.classList.contains("upsidedown")) {
        chevronDiv.classList.remove("upsidedown");
        menuBox.hidden = true;
    }
    else {
        chevronDiv.classList.add("upsidedown");
        menuBox.hidden = false;
    }
}
function showOrHideHeight() {
    if (view.fixAspectRatio) {
        dgebi("heightDiv").hidden = false;
        view.fixAspectRatio = false;
    }
    else {
        dgebi("heightDiv").hidden = true;
        view.fixAspectRatio = true;
    }
}
function center() {
    if (view.center[0] === 0 && view.center[1] === 0) {
        return;
    }
    view.center = [0, 0];
    view.width = 10;
    view.setHeight(view.width);
    setCenter(0, 0);
    view.hasChanged = true;
    view.manuallySet = false;
    draw(view.lastFunc);
}
function copyLink() {
    if (view.lastFuncStr === null) {
        logError("Link could not be copied: no function.");
        return;
    }
    let link = "https://pillig3.github.io/complex.html#";
    link += view.lastFuncStr.replace(/ /g, "%20") + "&";
    link += view.center[0] + "," + view.center[1] + "&";
    link += view.width;
    if (!view.fixAspectRatio) {
        link += "," + view.height;
    }
    navigator.clipboard.writeText(link);
}
function changeResolution() {
    const pixelWidthStr = prompt("Change resolution:\nEnter a width for the image in pixels", canvas.width.toString());
    if (pixelWidthStr === null || pixelWidthStr === "") {
        return;
    }
    let pixelWidth = parseInt(pixelWidthStr);
    if (isNaN(pixelWidth)) {
        pixelWidth = canvas.width;
    }
    pixelWidth = Math.max(pixelWidth, MIN_PIXELS);
    let pixelHeight = (view.height / view.width) * pixelWidth;
    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
    view.hasChanged = true;
    draw(view.lastFunc, false);
}
var dragStart;
function dragCanvas(e) {
    if (dragStart === undefined) {
        return;
    }
    const ratio = imageData.width / window.innerWidth;
    const [dx, dy] = [(e.pageX - dragStart[0]) * ratio, (e.pageY - dragStart[1]) * ratio];
    if (lastTimeout !== undefined) {
        clearTimeout(lastTimeout);
        lastTimeout = undefined;
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imageData, dx, dy);
}
function abortIfEsc(e) {
    if (e.code === "Escape") {
        canvas.onmousemove = null;
        dragStart = undefined;
        canvas.removeEventListener("keydown", abortIfEsc);
        ctx.putImageData(imageData, 0, 0);
        if (lastTimeout === undefined) {
            draw(view.lastFunc);
        }
    }
}
function zoomIn() {
    const [pixelWidth, pixelHeight] = [canvas.width, canvas.height];
    imageData = ctx.getImageData(Math.ceil(pixelWidth / 4), Math.ceil(pixelHeight / 4), floor((3 * pixelWidth) / 4), floor((3 * pixelHeight) / 4));
    data = imageData.data;
    const newData = new Uint8ClampedArray(pixelWidth * pixelHeight * 4);
    let ind = 0;
    for (let row = 0; row < pixelHeight; row++) {
        let dataInd = floor(row / 2) * imageData.width * 4;
        for (let col = 0; col < pixelWidth; col++) {
            newData[ind] = data[dataInd];
            newData[ind + 1] = data[dataInd + 1];
            newData[ind + 2] = data[dataInd + 2];
            newData[ind + 3] = data[dataInd + 3];
            ind += 4;
            if (col % 2 == 1) {
                dataInd += 4;
            }
        }
    }
    imageData = new ImageData(newData, pixelWidth);
    data = imageData.data;
    ctx.putImageData(imageData, 0, 0);
    view.width /= 2;
    view.height /= 2;
    draw(view.lastFunc);
}
function zoomOut() {
    const [pixelWidth, pixelHeight] = [canvas.width, canvas.height];
    imageData = ctx.getImageData(0, 0, pixelWidth, pixelHeight);
    data = imageData.data;
    const newData = new Uint8ClampedArray(floor(pixelWidth / 2) * floor(pixelHeight / 2) * 4);
    let dataInd = 0, ind = 0;
    for (let row = 0; row < floor(pixelHeight / 2); row++) {
        dataInd = pixelWidth * 2 * row * 4;
        for (let col = 0; col < floor(pixelWidth / 2); col++) {
            newData[ind] = data[dataInd];
            newData[ind + 1] = data[dataInd + 1];
            newData[ind + 2] = data[dataInd + 2];
            newData[ind + 3] = data[dataInd + 3];
            ind += 4;
            dataInd += 8;
        }
    }
    ctx.fillRect(0, 0, pixelWidth, pixelHeight);
    ctx.putImageData(new ImageData(newData, floor(pixelWidth / 2)), floor(pixelWidth / 4), floor(pixelHeight / 4));
    imageData = ctx.getImageData(0, 0, pixelWidth, pixelHeight);
    data = imageData.data;
    view.width *= 2;
    view.height *= 2;
    draw(view.lastFunc);
}
function onCanvasKey(e) {
    if (e.isComposing) {
        return;
    }
    switch (e.code) {
        case "Tab":
            e.preventDefault();
            input.focus();
            break;
        case "Equal":
            if (!controlKeyHeld(e)) {
                zoomIn();
            }
            break;
        case "Minus":
            if (!controlKeyHeld(e)) {
                zoomOut();
            }
            break;
    }
}
function controlKeyHeld(e) {
    return e.ctrlKey || e.metaKey || e.altKey;
}
function onInputDivClick(e) {
    if (e.target.children.length > 0) {
        e.target.children[0].focus();
    }
}
function onInputKey(e) {
    if (e.isComposing) {
        return;
    }
    let elem = e.target.id;
    if (inputBoxes.indexOf(elem) >= 0) {
        if (e.code === "Enter") {
            e.preventDefault();
            drawOnEnter();
        }
    }
    else {
        if (e.code === "Enter" || e.code === "Space") {
            if (elem === "horiz" || elem === "vert") {
                elem = e.target.parentNode.id;
            }
            doFuncForElem(elem);
        }
    }
}
function onButtonClick(e) {
    let elem = e.target;
    if (["horiz", "vert"].indexOf(e.target.classList[0]) >= 0) {
        elem = e.target.parentNode;
    }
    while (![
        "plusDiv",
        "minusDiv",
        "originDiv",
        "chevronDiv",
        "copyButt",
        "infoButt",
        "ARButton",
        "rslnButt",
    ].includes(elem.id)) {
        if (elem.parentNode === null) {
            return;
        }
        else {
            elem = elem.parentNode;
        }
    }
    doFuncForElem(elem.id);
}
function doFuncForElem(elem) {
    switch (elem) {
        case "plusDiv":
            zoomIn();
            break;
        case "minusDiv":
            zoomOut();
            break;
        case "originDiv":
            center();
            break;
        case "chevronDiv":
            toggleMenu();
            break;
        case "copyButt":
            copyLink();
            break;
        case "infoButt":
            window.open("/complex-info.html");
            break;
        case "ARButton":
            showOrHideHeight();
            break;
        case "rslnButt":
            changeResolution();
            break;
    }
}
function drawOnEnter() {
    let f;
    let str = input.value;
    let width = widthInput.value;
    let height = heightInput.value;
    let center = centerInput.value;
    if (center !== centerInput.lastValue) {
        try {
            view.center = (0, parse_1.strToNum)(center);
            centerInput.lastValue = center;
            view.hasChanged = true;
        }
        catch (e) {
            logError(e, true);
        }
    }
    if (width !== widthInput.lastValue) {
        setViewHW("width", widthInput.value);
        view.manuallySet = true;
    }
    if (height !== heightInput.lastValue) {
        setViewHW("height", heightInput.value);
        view.manuallySet = true;
    }
    if (typeof str !== "string" || str == "")
        return;
    try {
        f = (0, parse_1.strToFunc)(str);
    }
    catch (e) {
        logError(e);
        return;
    }
    draw(f, view.lastFuncStr !== str);
    view.lastFuncStr = str;
}
function setViewHW(prop, val) {
    if (val === "") {
        return false;
    }
    let newVal = parseFloat(val);
    if (typeof newVal !== "number" || newVal <= 0 || isNaN(newVal) || newVal === Infinity) {
        logError(prop[0].toUpperCase() + prop.slice(1) + " should be a positive number");
    }
    else if (newVal !== view[prop]) {
        view[prop] = newVal;
        view.hasChanged = true;
        return true;
    }
    return false;
}
function logError(e, notAnError = false) {
    let cssClass = "";
    let errorDiv = dgebi("errorDiv");
    if (!notAnError) {
        errorDiv.innerHTML = "❗&nbsp;&nbsp;&nbsp;&nbsp;" + e + "&nbsp;&nbsp;&nbsp;&nbsp;❗";
        cssClass = "anError";
    }
    else {
        errorDiv.innerHTML = "❗&nbsp;" + e + "&nbsp;❗";
        cssClass = "notAnError";
    }
    errorDiv.classList.add("visible");
    errorDiv.classList.add(cssClass);
    setTimeout((ed) => {
        ed.classList.remove("visible");
        ed.classList.remove(cssClass);
    }, 4000, errorDiv);
}
function draw(f, showLowRes = false, callback) {
    if (f === null) {
        return;
    }
    view.lastFunc = f;
    let pixelWidth = canvas.width;
    let pixelHeight = canvas.height;
    if (view.hasChanged) {
        if (view.fixAspectRatio || !view.manuallySet) {
            view.setHeight(view.width);
        }
        imageData = new ImageData(pixelWidth, pixelHeight);
        data = imageData.data;
        showLowRes = true;
        view.hasChanged = false;
    }
    widthInput.value = view.width.toString();
    heightInput.value = view.height.toString();
    widthInput.lastValue = widthInput.value;
    heightInput.lastValue = heightInput.value;
    if (lastTimeout !== undefined) {
        clearTimeout(lastTimeout);
    }
    let toCoords = getPixelToCoords(pixelWidth, pixelHeight);
    let scaleMod = getScaleMod(f, toCoords, pixelWidth, pixelHeight);
    if (showLowRes) {
        drawLowRes(f, toCoords, scaleMod, pixelWidth, pixelHeight);
    }
    lastTimeout = setTimeout(() => {
        drawTimeout(f, 0, toCoords, scaleMod, pixelWidth, pixelHeight, callback);
    });
}
function drawLowRes(f, toCoords, scaleMod, width, height) {
    let ind;
    for (let row = 0; row < Math.ceil(height / MIN_PIXELS); row++) {
        for (let col = 0; col < Math.ceil(width / MIN_PIXELS); col++) {
            let i = col * MIN_PIXELS;
            let j = row * MIN_PIXELS;
            let res = f(toCoords(i + MIN_PIXELS / 2, j + MIN_PIXELS / 2));
            let [r, g, b] = hl2rgb((0, complexNumbers_1.Arg)(res)[0], scaleMod((0, complexNumbers_1.Mod)(res)[0]));
            let baseInd = (ind = width * 4 * j + 4 * i);
            for (j = 0; j < MIN_PIXELS; j++) {
                ind = baseInd + width * 4 * j;
                for (i = 0; i < MIN_PIXELS; i++) {
                    data[ind] = r;
                    data[ind + 1] = g;
                    data[ind + 2] = b;
                    data[ind + 3] = 255;
                    ind += 4;
                }
            }
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function drawTimeout(f, i, toCoords, scaleMod, width, height, callback) {
    if (i >= width) {
        if (callback !== undefined) {
            callback();
        }
        return;
    }
    for (let k = 0; k < 5 && i < width; k++) {
        for (let j = 0; j < height; j++) {
            const ind = width * 4 * j + 4 * i;
            const res = f(toCoords(i, j));
            const [r, g, b] = hl2rgb((0, complexNumbers_1.Arg)(res)[0], scaleMod((0, complexNumbers_1.Mod)(res)[0]));
            data[ind] = r;
            data[ind + 1] = g;
            data[ind + 2] = b;
            data[ind + 3] = 255;
        }
        i++;
    }
    ctx.putImageData(imageData, 0, 0);
    lastTimeout = setTimeout(() => {
        drawTimeout(f, i, toCoords, scaleMod, width, height, callback);
    });
}
function getScaleMod(f, toCoords, width, height) {
    let mods = [];
    let samples = 6;
    for (let i = 0; i < width; i += floor(width / samples)) {
        for (let j = 0; j < height; j += floor(height / samples)) {
            const mod = (0, complexNumbers_1.Mod)(f(toCoords(i, j)))[0];
            if (!isNaN(mod) && mod !== Infinity && mod !== undefined) {
                mods.push(mod);
            }
        }
    }
    if (mods.length === 0) {
        return (_x) => 0;
    }
    let avg = getMedian(mods);
    let max = Math.max(...mods);
    let count = 0;
    let sd = Math.sqrt(mods
        .map((x) => Math.pow((x - avg), 2))
        .reduce((x, y) => {
        if (y === Infinity) {
            return x;
        }
        else {
            count++;
            return x + y;
        }
    }, 0));
    if (count !== 0) {
        sd = sd / count;
    }
    return function (x) {
        if (isNaN(x) || x === Infinity) {
            return 1;
        }
        if (x >= avg) {
            return 1 / (1 + Math.pow(Math.E, (-(x - avg) / Math.pow(2, max))));
        }
        return Math.sqrt(Math.pow(avg, 2) - Math.pow((Math.pow((Math.max(x, 0) * avg), (1 / 2)) - avg), 2)) / (2 * avg);
    };
}
function getPixelToCoords(pixelWidth, pixelHeight) {
    const width = view.width;
    const height = view.height;
    return function (i, j) {
        return [
            view.center[0] - width / 2 + (i / pixelWidth) * width,
            view.center[1] + height / 2 - (j / pixelHeight) * height,
        ];
    };
}
function getMedian(ary) {
    ary.sort((x, y) => y - x);
    if (ary.length % 2 === 0) {
        return (ary[floor(ary.length / 2)] + ary[floor(ary.length / 2) + 1]) / 2;
    }
    return ary[floor(ary.length / 2)];
}
function hl2rgb(h, l) {
    if (isNaN(h)) {
        h = 0;
    }
    h = realMod(h, 2 * Math.PI);
    let h1 = h / (Math.PI / 3);
    let c = 1 - Math.abs(2 * l - 1);
    let x = c * (1 - Math.abs((h1 % 2) - 1));
    let r, g, b;
    if (c === 0) {
        [r, g, b] = [0, 0, 0];
    }
    else if (h1 <= 1) {
        [r, g, b] = [c, x, 0];
    }
    else if (h1 <= 2) {
        [r, g, b] = [x, c, 0];
    }
    else if (h1 <= 3) {
        [r, g, b] = [0, c, x];
    }
    else if (h1 <= 4) {
        [r, g, b] = [0, x, c];
    }
    else if (h1 <= 5) {
        [r, g, b] = [x, 0, c];
    }
    else {
        [r, g, b] = [c, 0, x];
    }
    let m = l - c / 2;
    return [r, g, b].map((x) => floor((x + m) * 255));
}
function drawFromHash(hash) {
    let [f, center, wh] = hash.slice(1).split("&");
    if (center !== undefined && center !== "") {
        const viewCenter = center.split(",").map((x) => parseFloat(x));
        if (viewCenter.length === 2) {
            view.center = viewCenter;
        }
    }
    setCenter(view.center[0], view.center[1]);
    if (wh !== undefined && wh !== "") {
        let [width, height] = wh.split(",").map((x) => parseFloat(x));
        view.width = width;
        if (height !== undefined) {
            view.height = height;
            view.manuallySet = true;
            showOrHideHeight();
        }
        else {
            view.setHeight(width);
        }
        view.hasChanged = true;
    }
    input.value = f;
    view.lastFuncStr = f;
    let func;
    try {
        func = (0, parse_1.strToFunc)(f);
    }
    catch (e) {
        logError(e);
        return;
    }
    draw(func, true);
}
function realMod(x, y) {
    if (x < 0) {
        return Math.abs(y) + (x % y);
    }
    else {
        return x % y;
    }
}


/***/ }),

/***/ "./src/scripts/complex/complexNumbers.ts":
/*!***********************************************!*\
  !*** ./src/scripts/complex/complexNumbers.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalizeTheta = exports.iterate = exports.tetrate = exports.tanh = exports.cosh = exports.sinh = exports.tangent = exports.cosine = exports.sine = exports.sqrt = exports.raise = exports.log = exports.exp = exports.divide = exports.mult = exports.subtract = exports.add = exports.Arg = exports.Mod = exports.Im = exports.Re = exports.imag = exports.real = void 0;
function real(x) {
    return [x, 0];
}
exports.real = real;
function imag(x) {
    return [0, x];
}
exports.imag = imag;
function Re(z) {
    return [z[0], 0];
}
exports.Re = Re;
function Im(z) {
    return [z[1], 0];
}
exports.Im = Im;
function Mod(z) {
    return [Math.sqrt(Math.pow(z[0], 2) + Math.pow(z[1], 2)), 0];
}
exports.Mod = Mod;
function Arg(z) {
    return [toPolar(z[0], z[1])[1], 0];
}
exports.Arg = Arg;
function add(z, w) {
    return [z[0] + w[0], z[1] + w[1]];
}
exports.add = add;
function subtract(z, w) {
    return [z[0] - w[0], z[1] - w[1]];
}
exports.subtract = subtract;
function mult([x1, y1], [x2, y2]) {
    return [x1 * x2 - y1 * y2, x1 * y2 + y1 * x2];
}
exports.mult = mult;
function divide(z, w) {
    let zz = toPolar(z[0], z[1]);
    let ww = toPolar(w[0], w[1]);
    return fromPolar(zz[0] * (1 / ww[0]), zz[1] - ww[1]);
}
exports.divide = divide;
function exp([x, y]) {
    if (x === Infinity || y === Infinity) {
        return [Infinity, Infinity];
    }
    return [Math.pow(Math.E, x) * Math.cos(y), Math.pow(Math.E, x) * Math.sin(y)];
}
exports.exp = exp;
function log(z) {
    let zz = toPolar(z[0], z[1]);
    return [Math.log(zz[0]), zz[1]];
}
exports.log = log;
function raise(z, w) {
    if (z[0] === 0 && z[1] === 0) {
        return z;
    }
    let zz = toPolar(z[0], z[1]);
    let logzz = toPolar(Math.log(zz[0]), zz[1]);
    let ww = toPolar(w[0], w[1]);
    return exp(fromPolar(ww[0] * logzz[0], ww[1] + logzz[1]));
}
exports.raise = raise;
function sqrt(z) {
    return raise(z, real(0.5));
}
exports.sqrt = sqrt;
function sine(z) {
    return divide(subtract(exp(mult([0, 1], z)), exp(mult([0, -1], z))), [0, 2]);
}
exports.sine = sine;
function cosine(z) {
    return divide(add(exp(mult([0, 1], z)), exp(mult([0, -1], z))), [2, 0]);
}
exports.cosine = cosine;
function tangent(z) {
    return divide(sine(z), cosine(z));
}
exports.tangent = tangent;
function sinh(z) {
    return mult([0, -1], sine(mult([0, 1], z)));
}
exports.sinh = sinh;
function cosh(z) {
    return cosine(mult([0, 1], z));
}
exports.cosh = cosh;
function tanh(z) {
    return divide(sinh(z), cosh(z));
}
exports.tanh = tanh;
function tetrate([x, y], n) {
    if (typeof n !== "number") {
        if (n.length === 0) {
            return [0, 1];
        }
        n = n[0];
    }
    n = Math.floor(n);
    if (n < 0) {
        return [NaN, NaN];
    }
    else if (n === 0) {
        return [1, 0];
    }
    else if (n === 1) {
        return [x, y];
    }
    let lnzX = Math.log(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
    let lnzY = toPolar(x, y)[1];
    let resX = x;
    let resY = y;
    for (let i = 1; i < n; i++) {
        const mX = resX * lnzX - resY * lnzY;
        const mY = resX * lnzY + resY * lnzX;
        resX = Math.pow(Math.E, mX) * Math.cos(mY);
        resY = Math.pow(Math.E, mX) * Math.sin(mY);
    }
    if (isNaN(resX) ||
        resX === Infinity ||
        resX === -Infinity ||
        isNaN(resY) ||
        resY === Infinity ||
        resY === -Infinity) {
        return [Infinity, Infinity];
    }
    return [resX, resY];
}
exports.tetrate = tetrate;
function toPolar(x, y) {
    let θ;
    if (Math.abs(x) === Infinity || Math.abs(y) === Infinity) {
        θ = 0;
    }
    else if (x === 0 && y === 0) {
        θ = 0;
    }
    else if (x >= 0) {
        θ = Math.atan(y / x);
    }
    else if (y >= 0) {
        θ = Math.PI - Math.atan(y / -x);
    }
    else {
        θ = -Math.PI - Math.atan(y / -x);
    }
    return [Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)), θ];
}
function fromPolar(r, θ) {
    if (r === Infinity) {
        return [Infinity, Infinity];
    }
    return [r * Math.cos(θ), r * Math.sin(θ)];
}
function normalizeTheta(θ) {
    if (θ === Infinity || θ === -Infinity) {
        return 0;
    }
    if (θ > Math.PI) {
        return θ - Math.floor((θ + Math.PI) / (2 * Math.PI)) * 2 * Math.PI;
    }
    else if (θ <= -Math.PI) {
        return θ + Math.floor((-θ + Math.PI) / (2 * Math.PI)) * 2 * Math.PI;
    }
    else {
        return θ;
    }
}
exports.normalizeTheta = normalizeTheta;
function iterate(f, n) {
    if (n <= 0) {
        return (_x) => 0;
    }
    else if (n === 1) {
        return f;
    }
    return (x, ...args) => {
        let res = x;
        for (let i = 0; i < n; i++) {
            res = f(res, ...args);
        }
        return res;
    };
}
exports.iterate = iterate;


/***/ }),

/***/ "./src/scripts/complex/parse.ts":
/*!**************************************!*\
  !*** ./src/scripts/complex/parse.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNextCloseParen = exports.splitArguments = exports.strToNum = exports.strToFunc = exports.functify = exports.parse = exports.Node = void 0;
const complexNumbers_1 = __webpack_require__(/*! ./complexNumbers */ "./src/scripts/complex/complexNumbers.ts");
const tokenize_1 = __webpack_require__(/*! ./tokenize */ "./src/scripts/complex/tokenize.ts");
function strToFunc(str) {
    return functify(parse((0, tokenize_1.tokenize)(str)));
}
exports.strToFunc = strToFunc;
function strToNum(str) {
    const vars = [];
    try {
        const rslt = parse((0, tokenize_1.tokenize)(str), vars);
        return functify(rslt)();
    }
    catch (e) {
        throw "Input must be a complex number";
    }
}
exports.strToNum = strToNum;
function functify(n) {
    if (n.children === undefined || n.children.length === 0) {
        return n.f;
    }
    const results = [];
    for (let i = 0; i < n.children.length; i++) {
        results.push(childToFunc(n.children[i]));
    }
    let func = function (...args) {
        return n.f(...results.map((g) => g(...args)));
    };
    return func;
}
exports.functify = functify;
function childToFunc(child) {
    if (child instanceof Node) {
        return functify(child);
    }
    else if (child instanceof Array) {
        return () => child;
    }
    else if (typeof child === "object") {
        const position = child.position;
        if (position === 1) {
            return (x) => x;
        }
        else {
            let str = "n1,";
            for (var i = 2; i < position; i++) {
                str += "n" + i + ",";
            }
            str += "n" + position;
            return new Function(str, "return n" + position + ";");
        }
    }
    else if (typeof child === "number") {
        console.log("This shouldn't happen - child in childToFunc is type number");
        return () => (0, complexNumbers_1.real)(child);
    }
    else {
        return child;
    }
}
const NamedFunctions = {
    exp: complexNumbers_1.exp,
    ln: complexNumbers_1.log,
    log: complexNumbers_1.log,
    cos: complexNumbers_1.cosine,
    sin: complexNumbers_1.sine,
    tan: complexNumbers_1.tangent,
    sinh: complexNumbers_1.sinh,
    cosh: complexNumbers_1.cosh,
    tanh: complexNumbers_1.tanh,
    tet: complexNumbers_1.tetrate,
    sqrt: complexNumbers_1.sqrt,
    Re: complexNumbers_1.Re,
    Im: complexNumbers_1.Im,
    Arg: complexNumbers_1.Arg,
    Mod: complexNumbers_1.Mod,
    iterate: complexNumbers_1.iterate,
};
class Node {
    constructor(f, children) {
        this.f = f;
        this.children = children;
    }
}
exports.Node = Node;
function parse(tokens, vars) {
    if (vars === undefined) {
        vars = [null];
    }
    let rslt = parseRec(tokens, vars);
    if (rslt instanceof Array) {
        return new Node((x) => x, [rslt]);
    }
    else if (!(rslt instanceof Node)) {
        return new Node((x) => x, [rslt]);
    }
    else {
        return rslt;
    }
}
exports.parse = parse;
function parseRec(tokens, vars) {
    if (tokens.length === 0) {
        throw "Syntax error (I don't know what to do with this input)";
    }
    const children = [];
    const tokenOne = tokens[0];
    let { funcName: funcName, index: index } = findLastFunc(tokens);
    if (funcName !== "") {
        if (funcName === "-" && index === 0) {
            children.push((0, complexNumbers_1.real)(0));
        }
        else {
            children.push(parseRec(tokens.slice(0, index), vars));
        }
        if (funcName === "implicit_mult") {
            index -= 1;
        }
        children.push(parseRec(tokens.slice(index + 1), vars));
        return new Node(getFuncFromArithFuncString(funcName), children);
    }
    if (tokens.length === 1) {
        const unit = turnTokenIntoChild(tokenOne, vars);
        if (typeof unit === "function") {
            throw tokenOne.text + " called without arguments";
        }
        return unit;
    }
    if (tokenOne.text === "(" || tokenOne.text === "[") {
        const closePos = getNextCloseParen(tokens, 0, tokenOne.type);
        if (closePos === tokens.length - 1) {
            return parseRec(tokens.slice(1, tokens.length - 1), vars);
        }
        else {
            children.push(parseRec(tokens.slice(1, closePos), vars));
            children.push(parseRec(tokens.slice(closePos + 1), vars));
            return new Node(complexNumbers_1.mult, children);
        }
    }
    if (isNamedFunction(tokenOne.text)) {
        const func = matchKnownFunc(tokenOne.text);
        if (tokens[1].text === "(") {
            if (funcHasSquareBrackets(tokenOne.text)) {
                throw tokenOne.text + " should be called with square brackets";
            }
            const endInd = getNextCloseParen(tokens, 1, tokenize_1.TokenType.Parenthesis);
            const args = splitArguments(tokens.slice(2, endInd));
            if (args.length !== func.length) {
                throw "Wrong number of parameters passed to " + tokenOne.text;
            }
            if (endInd === tokens.length - 1) {
                return new Node(func, args.map((x) => parseRec(x, vars)));
            }
            else {
                children.push(new Node(func, args.map((x) => parseRec(x, vars))));
                children.push(parseRec(tokens.slice(endInd + 1), vars));
                return new Node(complexNumbers_1.mult, children);
            }
        }
        else if (tokens[1].text === "[") {
            if (!funcHasSquareBrackets(tokenOne.text)) {
                throw tokenOne.text + " should not be called with square brackets";
            }
            const endInd = getNextCloseParen(tokens, 1, tokenize_1.TokenType.SquareBracket);
            const { complexFunc: complexFunc, numArgs: numArgs } = getComplexFuncFromFuncWithSquareBrackets(tokenOne.text, tokens.slice(2, endInd));
            tokens = tokens.slice(endInd + 1);
            if (tokens.length === 0 || tokens[0].text !== "(") {
                throw "No parameters passed to " + tokenOne.text;
            }
            const argsEndInd = getNextCloseParen(tokens, 0, tokenize_1.TokenType.Parenthesis);
            const args = splitArguments(tokens.slice(1, argsEndInd));
            if (args.length < numArgs) {
                throw "Not enough parameters passed to " + tokenOne.text;
            }
            if (argsEndInd === tokens.length - 1) {
                return new Node(complexFunc, args.map((x) => parseRec(x, vars)));
            }
            else {
                children.push(new Node(complexFunc, args.map((x) => parseRec(x, vars))));
                children.push(parseRec(tokens.slice(argsEndInd + 1), vars));
                return new Node(complexNumbers_1.mult, children);
            }
        }
        else {
            if (func.length > 1) {
                throw "Missing parentheses for " + tokenOne.text;
            }
            return new Node(func, [parseRec(tokens.slice(1), vars)]);
        }
    }
    const unit = turnTokenIntoChild(tokenOne, vars);
    if (typeof unit === "function") {
        throw tokenOne.text + " called without arguments";
    }
    children.push(unit);
    children.push(parseRec(tokens.slice(1), vars));
    return new Node(complexNumbers_1.mult, children);
}
function findLastFunc(tokens) {
    let strF = "";
    let index = -1;
    for (var i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (token.type !== tokenize_1.TokenType.Function) {
            if (i > 0) {
                let prevToken = tokens[i - 1];
                if (prevToken.type !== tokenize_1.TokenType.Function) {
                    if (!(["+", "-"].indexOf(strF) >= 0) &&
                        ([tokenize_1.TokenType.Number, tokenize_1.TokenType.String].indexOf(prevToken.type) >= 0 ||
                            prevToken.text === ")") &&
                        ([tokenize_1.TokenType.Number, tokenize_1.TokenType.String].indexOf(token.type) >= 0 ||
                            token.text === "(") &&
                        !isNamedFunction(prevToken.text)) {
                        strF = "implicit_mult";
                        index = i;
                    }
                }
            }
            if ([tokenize_1.TokenType.Parenthesis, tokenize_1.TokenType.SquareBracket].indexOf(token.type) >= 0) {
                if (["(", "["].indexOf(token.text) >= 0) {
                    i = getNextCloseParen(tokens, i, token.type);
                }
                else {
                    console.log(tokens);
                    throw "Error: unbalanced parentheses";
                }
            }
            continue;
        }
        if (strF === "") {
            strF = token.text;
            index = i;
        }
        else if (["+", "-"].indexOf(token.text) >= 0) {
            strF = token.text;
            index = i;
        }
        else if (["*", "/"].indexOf(token.text) >= 0 && !(["+", "-"].indexOf(strF) >= 0)) {
            strF = token.text;
            index = i;
        }
    }
    return { funcName: strF, index: index };
}
function isNamedFunction(strF) {
    return NamedFunctions[strF] !== undefined;
}
function matchKnownFunc(strF) {
    return NamedFunctions[strF];
}
function funcHasSquareBrackets(strF) {
    return strF === "iterate";
}
function getNextCloseParen(tokens, i, parenType) {
    let level = 1;
    let open;
    let close;
    if (parenType === tokenize_1.TokenType.Parenthesis) {
        open = "(";
        close = ")";
    }
    else if (parenType === tokenize_1.TokenType.SquareBracket) {
        open = "[";
        close = "]";
    }
    else {
        throw "getNextCloseParen called incorrectly. This should not have been possible!";
    }
    let j;
    for (j = i + 1; j < tokens.length; j++) {
        switch (tokens[j].text) {
            case open:
                level++;
                break;
            case close:
                level--;
                break;
            default:
                break;
        }
        if (level === 0) {
            break;
        }
    }
    if (j > tokens.length - 1) {
        throw "Error: unbalanced parentheses";
    }
    return j;
}
exports.getNextCloseParen = getNextCloseParen;
function getFuncFromArithFuncString(arithFuncString) {
    switch (arithFuncString) {
        case "+":
            return complexNumbers_1.add;
        case "-":
            return complexNumbers_1.subtract;
        case "*":
            return complexNumbers_1.mult;
        case "/":
            return complexNumbers_1.divide;
        case "^":
            return complexNumbers_1.raise;
        case "implicit_mult":
            return complexNumbers_1.mult;
        default:
            throw "getFuncFromArithFuncString called incorrectly. This should not have been possible!";
    }
}
function splitArguments(tokens) {
    let args = [], curArg = [];
    let level = 0;
    for (var i = 0; i < tokens.length; i++) {
        let curToken = tokens[i];
        switch (curToken.type) {
            case tokenize_1.TokenType.Comma:
                if (level === 0) {
                    args.push(curArg);
                    curArg = [];
                }
                else {
                    curArg.push(curToken);
                }
                break;
            case tokenize_1.TokenType.Parenthesis:
            case tokenize_1.TokenType.SquareBracket:
                if (curToken.text === "(" || curToken.text === "[") {
                    level++;
                }
                else {
                    level--;
                }
            default:
                curArg.push(curToken);
                break;
        }
    }
    args.push(curArg);
    return args;
}
exports.splitArguments = splitArguments;
function getComplexFuncFromFuncWithSquareBrackets(strF, tokens) {
    const args = splitArguments(tokens);
    if (strF === "iterate") {
        if (args.length !== 3) {
            throw "wrong number of square-bracket parameters for iterate";
        }
        else if (args[2].length !== 1 || args[2][0].type !== tokenize_1.TokenType.String) {
            throw "third parameter for iterate should be a single variable";
        }
        const varName = args[2][0].text;
        const newVarAry = createFilledArray(200, null);
        newVarAry[0] = varName;
        const g = functify(parse(args[0], newVarAry));
        const n = functify(parse(args[1], []))()[0];
        if (n <= 0) {
            throw "second parameter for iterate should be > 0";
        }
        return { complexFunc: (0, complexNumbers_1.iterate)(g, Math.floor(n)), numArgs: newVarAry.indexOf(null) };
    }
    else {
        throw "getComplexFuncFromFuncWithSquareBrackets called incorrectly. This should not have been possible!";
    }
}
function createFilledArray(size, value) {
    const ary = [];
    for (let index = 0; index < size; index++) {
        ary.push(value);
    }
    return ary;
}
function turnTokenIntoChild(token, vars) {
    switch (token.type) {
        case tokenize_1.TokenType.String:
            if (token.text === "i") {
                return (0, complexNumbers_1.imag)(1);
            }
            else if (token.text === "e") {
                return (0, complexNumbers_1.real)(Math.E);
            }
            else if (token.text === "pi") {
                return (0, complexNumbers_1.real)(Math.PI);
            }
            else if (isNamedFunction(token.text)) {
                const fn = matchKnownFunc(token.text);
                if (token.text === "iterate") {
                    throw "iterate cannot be used like this (I'm not sure what you entered, but it's wrong)";
                }
                return fn;
            }
            else {
                if (!canUseVar(token.text, vars)) {
                    throw tooManyVarsErr(token.text, vars);
                }
                const ind = vars.indexOf(token.text);
                const variable = {
                    name: token.text,
                    position: ind + 1,
                };
                return variable;
            }
        case tokenize_1.TokenType.Number:
            return (0, complexNumbers_1.real)(parseFloat(token.text));
        case tokenize_1.TokenType.Comma:
            throw "Rogue comma detected";
        default:
            throw ('Something went wrong; encountered "' +
                token.text +
                '" where I did not expect it. This should not have been possible!');
    }
}
function canUseVar(varName, varAry) {
    if (varAry.indexOf(varName) >= 0) {
        return true;
    }
    let nextSpot = varAry.indexOf(null);
    if (nextSpot < 0) {
        return false;
    }
    else {
        varAry[nextSpot] = varName;
        return true;
    }
}
function tooManyVarsErr(extraVar, vars) {
    let err = "Too many variables: ";
    if (vars.length === 0) {
        return err + extraVar;
    }
    else if (vars.length === 1) {
        err += vars[0] + " ";
    }
    else {
        for (let varName of vars) {
            if (varName !== null) {
                err += varName + ", ";
            }
        }
    }
    err += "and " + extraVar;
    return err;
}


/***/ }),

/***/ "./src/scripts/complex/tokenize.ts":
/*!*****************************************!*\
  !*** ./src/scripts/complex/tokenize.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tokenize = exports.TokenType = exports.Token = void 0;
const LETTERS = (() => {
    const letters = [];
    for (var i = 65; i <= 90; i++)
        letters.push(String.fromCharCode(i));
    for (var i = 97; i <= 122; i++)
        letters.push(String.fromCharCode(i));
    return letters;
})();
const DIGITS = "0123456789".split("");
const ALPHANUMERICS = LETTERS.concat(DIGITS);
const ARITHMETIC_FUNCTIONS = "+-*/^".split("");
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Function"] = 0] = "Function";
    TokenType[TokenType["Parenthesis"] = 1] = "Parenthesis";
    TokenType[TokenType["String"] = 2] = "String";
    TokenType[TokenType["Number"] = 3] = "Number";
    TokenType[TokenType["Comma"] = 4] = "Comma";
    TokenType[TokenType["SquareBracket"] = 5] = "SquareBracket";
})(TokenType || (TokenType = {}));
exports.TokenType = TokenType;
class StrBuffer {
    constructor(str) {
        this.ind = 0;
        this.ary = str.split("");
    }
    nextChar() {
        return this.ary[this.ind++];
    }
    backup() {
        this.ind -= 1;
    }
}
class Token {
    constructor(text, type) {
        this.text = text;
        this.type = type;
    }
}
exports.Token = Token;
function tokenize(str) {
    const sb = new StrBuffer(str);
    const tokens = [];
    for (let c = sb.nextChar(); c !== undefined; c = sb.nextChar()) {
        let token = c;
        let type;
        if (ARITHMETIC_FUNCTIONS.indexOf(c) >= 0) {
            type = TokenType.Function;
        }
        else if (c === "(" || c === ")") {
            type = TokenType.Parenthesis;
        }
        else if (c === "[" || c === "]") {
            type = TokenType.SquareBracket;
        }
        else if (c === ",") {
            type = TokenType.Comma;
        }
        else if (LETTERS.indexOf(c) >= 0) {
            while (ALPHANUMERICS.indexOf((c = sb.nextChar())) >= 0) {
                token += c;
            }
            sb.backup();
            type = TokenType.String;
        }
        else if (DIGITS.indexOf(c) >= 0 || c === ".") {
            let hasDot = c === ".";
            while (DIGITS.indexOf((c = sb.nextChar())) >= 0 || c === ".") {
                if (c === ".") {
                    if (hasDot) {
                        throw "Too many dots in a number: " + token + ".";
                    }
                    else {
                        hasDot = true;
                    }
                }
                token += c;
            }
            sb.backup();
            type = TokenType.Number;
        }
        else if (c === " ") {
            continue;
        }
        else {
            throw "Unrecognized character: " + c;
        }
        tokens.push(new Token(token, type));
    }
    return tokens;
}
exports.tokenize = tokenize;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/complex.tsx"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtRkFBbUYsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLGFBQWEsYUFBYSxZQUFZLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxhQUFhLGFBQWEsWUFBWSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyw2Q0FBNkMsV0FBVyxpQkFBaUIsZ0JBQWdCLEtBQUssZ0JBQWdCLHdCQUF3Qix5QkFBeUIsYUFBYSxjQUFjLG1CQUFtQixvQkFBb0Isa0JBQWtCLEtBQUssY0FBYyx1QkFBdUIsOEJBQThCLHdCQUF3QixLQUFLLHdHQUF3Ryx3QkFBd0IsNEJBQTRCLGlDQUFpQyx3QkFBd0IsMEJBQTBCLHlCQUF5QiwwQkFBMEIsb0NBQW9DLCtCQUErQiwwQkFBMEIsMEJBQTBCLDRCQUE0QixpQ0FBaUMsb0NBQW9DLGtDQUFrQyxtQ0FBbUMsdUJBQXVCLGtCQUFrQixLQUFLLDhCQUE4QixzQkFBc0IsbUJBQW1CLG9CQUFvQixrQkFBa0IsbUJBQW1CLDBCQUEwQixxQkFBcUIsbUJBQW1CLHdDQUF3Qyx5QkFBeUIsS0FBSyxrQ0FBa0MsOEJBQThCLGlCQUFpQixrQkFBa0IsdUJBQXVCLGdCQUFnQix5QkFBeUIsS0FBSyxtQ0FBbUMsZ0RBQWdELG1EQUFtRCwrQ0FBK0MsMkNBQTJDLEtBQUssZ0NBQWdDLHlCQUF5QixpQkFBaUIsa0JBQWtCLGNBQWMsK0JBQStCLGlDQUFpQyxvQ0FBb0MsZ0JBQWdCLG1CQUFtQix5QkFBeUIsa0NBQWtDLHlCQUF5QixrQ0FBa0MsS0FBSyxnREFBZ0QsV0FBVyw4QkFBOEIsd0JBQXdCLFNBQVMscUJBQXFCLG9DQUFvQyxzQkFBc0IsbUNBQW1DLGtDQUFrQyw0QkFBNEIsYUFBYSxXQUFXLHNCQUFzQix5QkFBeUIsV0FBVyw0Q0FBNEMsd0JBQXdCLFdBQVcsdUJBQXVCLHlCQUF5QixXQUFXLDhCQUE4Qix1Q0FBdUMsV0FBVyxrQ0FBa0MseUJBQXlCLHFCQUFxQix5QkFBeUIsYUFBYSxXQUFXLFNBQVMsNEJBQTRCLHVCQUF1Qiw2QkFBNkIsZ0NBQWdDLHlCQUF5Qix3QkFBd0Isb0NBQW9DLCtCQUErQixnQ0FBZ0MsMkJBQTJCLDRDQUE0QyxvQ0FBb0Msb0RBQW9ELHlDQUF5QyxrQ0FBa0Msa0RBQWtELDhFQUE4RSx3REFBd0QsYUFBYSxpREFBaUQseUNBQXlDLGlDQUFpQyxtREFBbUQsK0VBQStFLHVEQUF1RCxhQUFhLDZCQUE2Qiw0REFBNEQsMENBQTBDLDJDQUEyQyxhQUFhLDhCQUE4Qix5QkFBeUIsMEJBQTBCLDZCQUE2Qiw0QkFBNEIsOENBQThDLHNDQUFzQyxlQUFlLGFBQWEsV0FBVywyQkFBMkIsdUJBQXVCLHlCQUF5QiwwQkFBMEIsNkJBQTZCLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyxzQkFBc0IsZ0NBQWdDLGtCQUFrQixpQkFBaUIseUJBQXlCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLCtDQUErQyx5QkFBeUIseUJBQXlCLHlDQUF5Qyw2QkFBNkIsaUJBQWlCLCtCQUErQixpQkFBaUIsbUJBQW1CLGlDQUFpQyxPQUFPLG9CQUFvQixvQ0FBb0MsT0FBTyxpQkFBaUIsaUNBQWlDLE9BQU8sS0FBSyx1QkFBdUI7QUFDenJOO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZNdkMsaUVBQWUscUJBQXVCLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7QUNBL0QsaUVBQWUscUJBQXVCLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7QUNBaEUsaUVBQWUscUJBQXVCLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7QUNBekQsaUVBQWUscUJBQXVCLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7QUNBMUQsaUVBQWUscUJBQXVCLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7QUNBNUQsaUVBQWUscUJBQXVCLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7QUNBN0QsaUVBQWUscUJBQXVCLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7QUNBdkUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLDJCQUEyQjs7Ozs7Ozs7Ozs7Ozs7QUNBakUsaUVBQWUscUJBQXVCLDRCQUE0Qjs7Ozs7Ozs7Ozs7Ozs7QUNBbEUsaUVBQWUscUJBQXVCLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7QUNBaEUsaUVBQWUscUJBQXVCLDJCQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NqRSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUEwSztBQUMxSztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNKQUFPOzs7O0FBSW9IO0FBQzVJLE9BQU8saUVBQWUsc0pBQU8sSUFBSSxzSkFBTyxVQUFVLHNKQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQjdFLDhGQUErQjtBQUMvQiwwR0FBbUM7QUFDbkMsZ0VBQXdCO0FBQ3hCLHdJQUF5RDtBQUV6RCxzQkFBTSxFQUFDLG9CQUFDLHdCQUFjLE9BQUcsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMM0UsOEZBQStCO0FBQy9CLGlJQUE2RDtBQUM3RCxzR0FBZ0Y7QUFDaEYsMEhBQTRDO0FBQzVDLHVIQUEwQztBQUMxQyx1SEFBaUQ7QUFDakQsb0hBQStDO0FBQy9DLHFHQUFxQztBQUNyQyxrR0FBbUM7QUFDbkMsOEdBQTJDO0FBQzNDLDJHQUF5QztBQUN6QywrSUFBb0Q7QUFDcEQsNElBQWtEO0FBQ2xELDZIQUFxRDtBQUNyRCwwSEFBbUQ7QUFFbkQsTUFBTSxjQUFjLEdBQWEsR0FBZ0IsRUFBRSxDQUFDLENBQ25ELG9CQUFDLEtBQUssQ0FBQyxRQUFRO0lBQ2QsZ0NBQVEsRUFBRSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBVztJQUN0RSw2QkFBSyxFQUFFLEVBQUMsYUFBYTtRQUNwQiw2QkFBSyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxVQUFVO1lBQ25DLGtDQUNDLEVBQUUsRUFBQyxXQUFXLEVBQ2QsZUFBZSxRQUNmLDhCQUE4QixFQUFFLElBQUksRUFDcEMsU0FBUyxRQUNULFlBQVksRUFBQyxLQUFLLEVBQ2xCLFdBQVcsRUFBQyxLQUFLLEVBQ2pCLGNBQWMsRUFBQyxLQUFLLEVBQ3BCLFVBQVUsRUFBRSxLQUFLLEdBQ2hCO1lBQ0YsK0JBQU8sT0FBTyxFQUFDLFdBQVc7Z0JBQ3pCLDhCQUFNLFNBQVMsRUFBQyxXQUFXLGVBQWdCLENBQ3BDLENBQ0g7UUFDTiw2QkFBSyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxVQUFVO1lBQ25DLGtDQUNDLEVBQUUsRUFBQyxZQUFZLEVBQ2YsZUFBZSxRQUNmLDhCQUE4QixFQUFFLElBQUksRUFDcEMsU0FBUyxRQUNULFlBQVksRUFBQyxLQUFLLEVBQ2xCLFdBQVcsRUFBQyxLQUFLLEVBQ2pCLGNBQWMsRUFBQyxLQUFLLEVBQ3BCLFVBQVUsRUFBRSxLQUFLLEdBQ2hCO1lBQ0YsK0JBQU8sT0FBTyxFQUFDLFlBQVk7Z0JBQzFCLDhCQUFNLFNBQVMsRUFBQyxXQUFXLFlBQWEsQ0FDakMsQ0FDSDtRQUNOLDZCQUFLLFNBQVMsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLFdBQVcsRUFBQyxNQUFNO1lBQzNDLGtDQUNDLEVBQUUsRUFBQyxhQUFhLEVBQ2hCLGVBQWUsUUFDZiw4QkFBOEIsRUFBRSxJQUFJLEVBQ3BDLFNBQVMsUUFDVCxZQUFZLEVBQUMsS0FBSyxFQUNsQixXQUFXLEVBQUMsS0FBSyxFQUNqQixjQUFjLEVBQUMsS0FBSyxFQUNwQixVQUFVLEVBQUUsS0FBSyxHQUNoQjtZQUNGLCtCQUFPLE9BQU8sRUFBQyxhQUFhO2dCQUMzQiw4QkFBTSxTQUFTLEVBQUMsV0FBVyxhQUFjLENBQ2xDLENBQ0g7UUFDTiw2QkFBSyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxXQUFXO1lBQ3BDLGtDQUNDLEVBQUUsRUFBQyxhQUFhLEVBQ2hCLGVBQWUsUUFDZiw4QkFBOEIsRUFBRSxJQUFJLEVBQ3BDLFNBQVMsUUFDVCxZQUFZLEVBQUMsS0FBSyxFQUNsQixXQUFXLEVBQUMsS0FBSyxFQUNqQixjQUFjLEVBQUMsS0FBSyxFQUNwQixVQUFVLEVBQUUsS0FBSyxHQUNoQjtZQUNGLCtCQUFPLE9BQU8sRUFBQyxhQUFhO2dCQUMzQiw4QkFBTSxTQUFTLEVBQUMsV0FBVyxhQUFjLENBQ2xDLENBQ0g7UUFFTiw2QkFBSyxFQUFFLEVBQUMsY0FBYztZQUNyQiw2QkFBSyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQy9DLDZCQUFLLFNBQVMsRUFBQyxPQUFPLEdBQU8sQ0FDeEI7WUFDTiw2QkFBSyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzlDLDZCQUFLLFNBQVMsRUFBQyxPQUFPLEdBQU87Z0JBQzdCLDZCQUFLLFNBQVMsRUFBQyxNQUFNLEdBQU8sQ0FDdkI7WUFDTiw2QkFBSyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pELGlDQUFTLEtBQUssRUFBRSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUU7b0JBQzFDLGdDQUFRLElBQUksRUFBQyxZQUFZLEVBQUMsTUFBTSxFQUFFLHNCQUFXLEdBQUk7b0JBQ2pELDZCQUFLLEdBQUcsRUFBRSxxQkFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsRUFBRSxHQUFHLENBQ2pELENBQ0w7WUFDTiwrQkFBTTtZQUNOLDZCQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUMsTUFBTTtnQkFDdkIsNkJBQUssU0FBUyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNoRCxpQ0FBUyxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFO3dCQUMxQyxnQ0FBUSxJQUFJLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBRSx1QkFBSyxHQUFJO3dCQUMzQyw2QkFBSyxHQUFHLEVBQUUsc0JBQUksRUFBRSxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLEVBQUUsR0FBRyxDQUMzQyxDQUNMO2dCQUNOLDZCQUFLLFNBQVMsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUUsQ0FBQztvQkFDL0MsaUNBQVMsS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRTt3QkFDMUMsZ0NBQVEsSUFBSSxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUUsOEJBQU0sR0FBSTt3QkFDNUMsNkJBQUssR0FBRyxFQUFFLDZCQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsQ0FDNUMsQ0FDTDtnQkFDTiw2QkFBSyxTQUFTLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFFLENBQUM7b0JBQy9DLGlDQUFTLEtBQUssRUFBRSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUU7d0JBQzFDLGdDQUFRLElBQUksRUFBQyxZQUFZLEVBQUMsTUFBTSxFQUFFLHdCQUFhLEdBQUk7d0JBQ25ELDZCQUFLLEdBQUcsRUFBRSx1QkFBWSxFQUFFLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsRUFBRSxHQUFHLENBQ25ELENBQ0w7Z0JBQ04sK0JBQU07Z0JBQ04sNkJBQUssU0FBUyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBRSxDQUFDO29CQUMvQyxpQ0FBUyxLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFO3dCQUMxQyxnQ0FBUSxJQUFJLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBRSxtQkFBUSxHQUFJO3dCQUM5Qyw2QkFBSyxHQUFHLEVBQUUsa0JBQU8sRUFBRSxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLEVBQUUsR0FBRyxDQUM5QyxDQUNMO2dCQUNOLDZCQUFLLFNBQVMsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUUsQ0FBQztvQkFDL0MsaUNBQVMsS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRTt3QkFDMUMsZ0NBQVEsSUFBSSxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUUsZ0JBQUssR0FBSTt3QkFDM0MsNkJBQUssR0FBRyxFQUFFLGVBQUksRUFBRSxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUFDLEVBQUUsR0FBRyxDQUMzQyxDQUNMO2dCQUNOLCtCQUFNLENBQ0QsQ0FDRCxDQUNEO0lBRU4sNkJBQUssRUFBRSxFQUFDLFVBQVUsR0FBTyxDQUNULENBQ2pCLENBQUM7QUFFRixxQkFBZSxjQUFjLENBQUM7QUFFOUIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLFNBQVMsS0FBSyxDQUFDLEVBQVU7SUFDeEIsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBRSxDQUFDO0FBQ3JDLENBQUM7QUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBRXpCLElBQUksV0FBdUMsQ0FBQztBQU01QyxJQUFJLEtBQTJCLENBQUM7QUFDaEMsSUFBSSxVQUFnQyxDQUFDO0FBQ3JDLElBQUksV0FBaUMsQ0FBQztBQUN0QyxJQUFJLFdBQWlDLENBQUM7QUFDdEMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMzRSxJQUFJLE1BQXlCLENBQUM7QUFDOUIsSUFBSSxHQUE2QixDQUFDO0FBQ2xDLElBQUksU0FBb0IsQ0FBQztBQUN6QixJQUFJLElBQXVCLENBQUM7QUFFNUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRUYsU0FBUyxZQUFZO0lBQ3BCLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUF5QixDQUFDO0lBQ25ELFVBQVUsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUF5QixDQUFDO0lBQ3pELFdBQVcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUF5QixDQUFDO0lBQzNELFdBQVcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUF5QixDQUFDO0lBQzNELFVBQVUsR0FBRyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZFLE1BQU0sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFzQixDQUFDO0lBQ2hELEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBRSxDQUFDO0lBQy9CLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RCxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztJQUV0QixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdELEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDL0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRCxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsRUFBRTtRQUN2RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0tBQ3ZEO0lBRUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ25DLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNqQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNoQyxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTtRQUNoQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3ZEO1NBQU07UUFDTixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFLdkIsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQWE7UUFDM0MsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsRUFBRTtZQUVwQixPQUFPO1NBQ1A7UUFDRCxNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztJQUlGLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFhO1FBQ3pDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEQsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUDtRQUNELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBRWpGLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEI7WUFDRCxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQ3RCLE9BQU87U0FDUDtRQUNELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDeEUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDM0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekQsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLFNBQVMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQixTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztBQXFCckQsTUFBTSxJQUFJLEdBQVU7SUFDbkIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNyRCxTQUFTLEVBQUUsVUFBVSxLQUFhO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDaEUsQ0FBQztJQUNELFFBQVEsRUFBRSxVQUFVLE1BQWM7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNoRSxDQUFDO0lBQ0QsV0FBVyxFQUFFLEtBQUs7SUFDbEIsVUFBVSxFQUFFLEtBQUs7SUFDakIsUUFBUSxFQUFFLElBQUk7SUFDZCxXQUFXLEVBQUUsSUFBSTtJQUNqQixjQUFjLEVBQUUsSUFBSTtDQUNwQixDQUFDO0FBS0YsU0FBUyxTQUFTLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQixXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN0QyxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7QUFDM0MsQ0FBQztBQVNELFNBQVMsVUFBVTtJQUNsQixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDaEQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7S0FDdEI7U0FBTTtRQUNOLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCO0FBQ0YsQ0FBQztBQUtELFNBQVMsZ0JBQWdCO0lBQ3hCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUN2QixLQUFLLENBQUMsV0FBVyxDQUFvQixDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7S0FDNUI7U0FBTTtRQUNMLEtBQUssQ0FBQyxXQUFXLENBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztLQUMzQjtBQUNGLENBQUM7QUFLRCxTQUFTLE1BQU07SUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2pELE9BQU87S0FDUDtJQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFLRCxTQUFTLFFBQVE7SUFDaEIsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtRQUM5QixRQUFRLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUNuRCxPQUFPO0tBQ1A7SUFDRCxJQUFJLElBQUksR0FBRyx5Q0FBeUMsQ0FBQztJQUNyRCxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNwRCxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDcEQsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDekIsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQzFCO0lBQ0QsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUtELFNBQVMsZ0JBQWdCO0lBQ3hCLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FDM0IsMkRBQTJELEVBQzNELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQ3ZCLENBQUM7SUFDRixJQUFJLGFBQWEsS0FBSyxJQUFJLElBQUksYUFBYSxLQUFLLEVBQUUsRUFBRTtRQUNuRCxPQUFPO0tBQ1A7SUFDRCxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDdEIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDMUI7SUFDRCxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFOUMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUM7SUFDMUQsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7SUFDMUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7SUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQU1ELElBQUksU0FBdUMsQ0FBQztBQUs1QyxTQUFTLFVBQVUsQ0FBQyxDQUFhO0lBQ2hDLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtRQUM1QixPQUFPO0tBQ1A7SUFDRCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDbEQsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3RGLElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtRQUM5QixZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsV0FBVyxHQUFHLFNBQVMsQ0FBQztLQUN4QjtJQUNELEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUtELFNBQVMsVUFBVSxDQUFDLENBQWdCO0lBQ25DLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDeEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDMUIsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQjtLQUNEO0FBQ0YsQ0FBQztBQVNELFNBQVMsTUFBTTtJQUVkLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRSxTQUFTLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUMxQixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzNCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDNUIsQ0FBQztJQUNGLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ3RCLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsVUFBVSxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsV0FBVyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzNDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDbkQsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFVBQVUsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDVCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQixPQUFPLElBQUksQ0FBQyxDQUFDO2FBQ2I7U0FDRDtLQUNEO0lBQ0QsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztJQUN0QixHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFbEMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDaEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBS0QsU0FBUyxPQUFPO0lBRWYsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLFNBQVMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVELElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQ3RCLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFGLElBQUksT0FBTyxHQUFHLENBQUMsRUFDZCxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1QsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDdEQsT0FBTyxHQUFHLFVBQVUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNuQyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksQ0FBQyxDQUFDO1NBQ2I7S0FDRDtJQUNELEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUMsR0FBRyxDQUFDLFlBQVksQ0FDZixJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUM3QyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUNyQixLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUN0QixDQUFDO0lBQ0YsU0FBUyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUQsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFFdEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDaEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBU0QsU0FBUyxXQUFXLENBQUMsQ0FBZ0I7SUFDcEMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFO1FBQ2xCLE9BQU87S0FDUDtJQUNELFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUNmLEtBQUssS0FBSztZQUNULENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZCxNQUFNO1FBQ1AsS0FBSyxPQUFPO1lBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkIsTUFBTSxFQUFFLENBQUM7YUFDVDtZQUNELE1BQU07UUFDUCxLQUFLLE9BQU87WUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QixPQUFPLEVBQUUsQ0FBQzthQUNWO1lBQ0QsTUFBTTtLQUNQO0FBQ0YsQ0FBQztBQUtELFNBQVMsY0FBYyxDQUFDLENBQWdCO0lBQ3ZDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDM0MsQ0FBQztBQU1ELFNBQVMsZUFBZSxDQUFDLENBQWE7SUFDckMsSUFBSyxDQUFDLENBQUMsTUFBc0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNqRCxDQUFDLENBQUMsTUFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN0QztBQUNGLENBQUM7QUFLRCxTQUFTLFVBQVUsQ0FBQyxDQUFnQjtJQUNuQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUU7UUFDbEIsT0FBTztLQUNQO0lBQ0QsSUFBSSxJQUFJLEdBQUksQ0FBQyxDQUFDLE1BQXNCLENBQUMsRUFBRSxDQUFDO0lBQ3hDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbEMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUN2QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsV0FBVyxFQUFFLENBQUM7U0FDZDtLQUNEO1NBQU07UUFDTixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQzdDLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUN4QyxJQUFJLEdBQUssQ0FBQyxDQUFDLE1BQXNCLENBQUMsVUFBMEIsQ0FBQyxFQUFFLENBQUM7YUFDaEU7WUFDRCxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7S0FDRDtBQUNGLENBQUM7QUFLRCxTQUFTLGFBQWEsQ0FBQyxDQUFhO0lBQ25DLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFxQixDQUFDO0lBQ25DLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxNQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMzRSxJQUFJLEdBQUksQ0FBQyxDQUFDLE1BQXNCLENBQUMsVUFBeUIsQ0FBQztLQUMzRDtJQUNELE9BQ0MsQ0FBQztRQUNBLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO0tBQ1YsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUNsQjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDN0IsT0FBTztTQUNQO2FBQU07WUFDTixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQXlCLENBQUM7U0FDdEM7S0FDRDtJQUNELGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUtELFNBQVMsYUFBYSxDQUFDLElBQVk7SUFDbEMsUUFBUSxJQUFJLEVBQUU7UUFDYixLQUFLLFNBQVM7WUFDYixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU07UUFDUCxLQUFLLFVBQVU7WUFDZCxPQUFPLEVBQUUsQ0FBQztZQUNWLE1BQU07UUFDUCxLQUFLLFdBQVc7WUFDZixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU07UUFDUCxLQUFLLFlBQVk7WUFDaEIsVUFBVSxFQUFFLENBQUM7WUFDYixNQUFNO1FBQ1AsS0FBSyxVQUFVO1lBQ2QsUUFBUSxFQUFFLENBQUM7WUFDWCxNQUFNO1FBQ1AsS0FBSyxVQUFVO1lBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xDLE1BQU07UUFDUCxLQUFLLFVBQVU7WUFDZCxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLE1BQU07UUFDUCxLQUFLLFVBQVU7WUFDZCxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLE1BQU07S0FDUDtBQUNGLENBQUM7QUFTRCxTQUFTLFdBQVc7SUFDbkIsSUFBSSxDQUFrQixDQUFDO0lBQ3ZCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDdEIsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUM3QixJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQy9CLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFFL0IsSUFBSSxNQUFNLEtBQUssV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUNyQyxJQUFJO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBUSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBQUMsT0FBTyxDQUFNLEVBQUU7WUFFaEIsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsQjtLQUNEO0lBQ0QsSUFBSSxLQUFLLEtBQUssVUFBVSxDQUFDLFNBQVMsRUFBRTtRQUNuQyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUN4QjtJQUNELElBQUksTUFBTSxLQUFLLFdBQVcsQ0FBQyxTQUFTLEVBQUU7UUFDckMsU0FBUyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7S0FDeEI7SUFFRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLElBQUksRUFBRTtRQUFFLE9BQU87SUFDakQsSUFBSTtRQUNILENBQUMsR0FBRyxxQkFBUyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25CO0lBQUMsT0FBTyxDQUFNLEVBQUU7UUFDaEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osT0FBTztLQUNQO0lBQ0QsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLENBQUM7QUFNRCxTQUFTLFNBQVMsQ0FBQyxJQUF3QixFQUFFLEdBQVc7SUFDdkQsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1FBQ2YsT0FBTyxLQUFLLENBQUM7S0FDYjtJQUNELElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQ3RGLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyxDQUFDO0tBQ2pGO1NBQU0sSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7S0FDWjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2QsQ0FBQztBQU9ELFNBQVMsUUFBUSxDQUFDLENBQVMsRUFBRSxhQUFzQixLQUFLO0lBQ3ZELElBQUksUUFBUSxHQUFXLEVBQUUsQ0FBQztJQUMxQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNoQixRQUFRLENBQUMsU0FBUyxHQUFHLDJCQUEyQixHQUFHLENBQUMsR0FBRywyQkFBMkIsQ0FBQztRQUNuRixRQUFRLEdBQUcsU0FBUyxDQUFDO0tBQ3JCO1NBQU07UUFDTixRQUFRLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQy9DLFFBQVEsR0FBRyxZQUFZLENBQUM7S0FDeEI7SUFFRCxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxVQUFVLENBQ1QsQ0FBQyxFQUFlLEVBQUUsRUFBRTtRQUNuQixFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDLEVBQ0QsSUFBSSxFQUNKLFFBQVEsQ0FDUixDQUFDO0FBQ0gsQ0FBQztBQVNELFNBQVMsSUFBSSxDQUFDLENBQXlCLEVBQUUsYUFBc0IsS0FBSyxFQUFFLFFBQXVCO0lBQzVGLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNmLE9BQU87S0FDUDtJQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDOUIsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDcEIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtRQUNELFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbkQsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDdEIsVUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztLQUN4QjtJQUNELFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0MsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3hDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUMxQyxJQUFJLFdBQVcsS0FBSyxTQUFTLEVBQUU7UUFDOUIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsSUFBSSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVqRSxJQUFJLFVBQVUsRUFBRTtRQUNmLFVBQVUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDM0Q7SUFDRCxXQUFXLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUM3QixXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBS0QsU0FBUyxVQUFVLENBQ2xCLENBQWtCLEVBQ2xCLFFBQStCLEVBQy9CLFFBQTBCLEVBQzFCLEtBQWEsRUFDYixNQUFjO0lBRWQsSUFBSSxHQUFXLENBQUM7SUFDaEIsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzlELEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUM7WUFDekIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLHdCQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLHdCQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDaEMsR0FBRyxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDcEIsR0FBRyxJQUFJLENBQUMsQ0FBQztpQkFDVDthQUNEO1NBQ0Q7S0FDRDtJQUNELEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBS0QsU0FBUyxXQUFXLENBQ25CLENBQWtCLEVBQ2xCLENBQVMsRUFDVCxRQUErQixFQUMvQixRQUEwQixFQUMxQixLQUFhLEVBQ2IsTUFBYyxFQUNkLFFBQWtDO0lBRWxDLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtRQUNmLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMzQixRQUFRLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTztLQUNQO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsTUFBTSxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyx3QkFBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyx3QkFBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDcEI7UUFDRCxDQUFDLEVBQUUsQ0FBQztLQUNKO0lBQ0QsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLFdBQVcsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQzdCLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFNRCxTQUFTLFdBQVcsQ0FDbkIsQ0FBa0IsRUFDbEIsUUFBK0IsRUFDL0IsS0FBYSxFQUNiLE1BQWM7SUFFZCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsRUFBRTtRQUN2RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxFQUFFO1lBQ3pELE1BQU0sR0FBRyxHQUFHLHdCQUFHLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO2dCQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2Y7U0FDRDtLQUNEO0lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN0QixPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDakI7SUFDRCxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzVCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ2pCLElBQUk7U0FDRixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFJLENBQUMsRUFBQztTQUMxQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDaEIsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxDQUFDO1NBQ1Q7YUFBTTtZQUNOLEtBQUssRUFBRSxDQUFDO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7SUFDRixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ04sQ0FBQztJQUNGLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtRQUNoQixFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztLQUNoQjtJQUdELE9BQU8sVUFBVSxDQUFDO1FBQ2pCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFFL0IsT0FBTyxDQUFDLENBQUM7U0FDVDtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLGFBQUksQ0FBQyxDQUFDLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFVBQUMsRUFBSSxHQUFHLEVBQUMsRUFBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQUcsRUFBSSxDQUFDLElBQUcsVUFBQyxVQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFHLEdBQUcsQ0FBQyxFQUFJLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3pGLENBQUMsQ0FBQztBQUNILENBQUM7QUFNRCxTQUFTLGdCQUFnQixDQUFDLFVBQWtCLEVBQUUsV0FBbUI7SUFDaEUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNCLE9BQU8sVUFBVSxDQUFTLEVBQUUsQ0FBUztRQUNwQyxPQUFPO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEtBQUs7WUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLE1BQU07U0FDeEQsQ0FBQztJQUNILENBQUMsQ0FBQztBQUNILENBQUM7QUFLRCxTQUFTLFNBQVMsQ0FBQyxHQUFhO0lBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN6RTtJQUNELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQU9ELFNBQVMsTUFBTSxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQ25DLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNOO0lBQ0QsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxJQUFJLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxDQUFDO0lBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdEI7U0FBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN0QjtTQUFNLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNuQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3RCO1NBQU0sSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQ25CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdEI7U0FBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN0QjtTQUFNLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNuQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3RCO1NBQU07UUFFTixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBS0QsU0FBUyxZQUFZLENBQUMsSUFBWTtJQUNqQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQyxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLEVBQUUsRUFBRTtRQUMxQyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQW1CLENBQUM7U0FDbEM7S0FDRDtJQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxJQUFJLEVBQUUsS0FBSyxTQUFTLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsZ0JBQWdCLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0tBQ3ZCO0lBRUQsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFFckIsSUFBSSxJQUFxQixDQUFDO0lBQzFCLElBQUk7UUFDSCxJQUFJLEdBQUcscUJBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQztLQUNwQjtJQUFDLE9BQU8sQ0FBTSxFQUFFO1FBQ2hCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNaLE9BQU87S0FDUDtJQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQUtELFNBQVMsT0FBTyxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUM3QjtTQUFNO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2I7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7OztBQy82QkQsU0FBUyxJQUFJLENBQUMsQ0FBUztJQUN0QixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2YsQ0FBQztBQXpDQSxvQkFBSTtBQThDTCxTQUFTLElBQUksQ0FBQyxDQUFTO0lBQ3RCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDZixDQUFDO0FBL0NBLG9CQUFJO0FBb0RMLFNBQVMsRUFBRSxDQUFDLENBQWdCO0lBQzNCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQXJEQSxnQkFBRTtBQTBESCxTQUFTLEVBQUUsQ0FBQyxDQUFnQjtJQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUEzREEsZ0JBQUU7QUFnRUgsU0FBUyxHQUFHLENBQUMsQ0FBZ0I7SUFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFJLENBQUMsSUFBRyxVQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUksQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQWpFQSxrQkFBRztBQXNFSixTQUFTLEdBQUcsQ0FBQyxDQUFnQjtJQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBdkVBLGtCQUFHO0FBNEVKLFNBQVMsR0FBRyxDQUFDLENBQWdCLEVBQUUsQ0FBZ0I7SUFDOUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUE3RUEsa0JBQUc7QUFrRkosU0FBUyxRQUFRLENBQUMsQ0FBZ0IsRUFBRSxDQUFnQjtJQUNuRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQW5GQSw0QkFBUTtBQXdGVCxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFnQjtJQUM3RCxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUF6RkEsb0JBQUk7QUE4RkwsU0FBUyxNQUFNLENBQUMsQ0FBZ0IsRUFBRSxDQUFnQjtJQUNqRCxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsT0FBTyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBakdBLHdCQUFNO0FBc0dQLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBZ0I7SUFDakMsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDckMsT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM1QjtJQUNELE9BQU8sQ0FBQyxhQUFJLENBQUMsQ0FBQyxFQUFJLENBQUMsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQUksQ0FBQyxDQUFDLEVBQUksQ0FBQyxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvRCxDQUFDO0FBMUdBLGtCQUFHO0FBK0dKLFNBQVMsR0FBRyxDQUFDLENBQWdCO0lBQzVCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQWpIQSxrQkFBRztBQXNISixTQUFTLEtBQUssQ0FBQyxDQUFnQixFQUFFLENBQWdCO0lBQ2hELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzdCLE9BQU8sQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQTdIQSxzQkFBSztBQWtJTixTQUFTLElBQUksQ0FBQyxDQUFnQjtJQUM3QixPQUFPLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQW5JQSxvQkFBSTtBQXdJTCxTQUFTLElBQUksQ0FBQyxDQUFnQjtJQUM3QixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5RSxDQUFDO0FBeklBLG9CQUFJO0FBOElMLFNBQVMsTUFBTSxDQUFDLENBQWdCO0lBQy9CLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUEvSUEsd0JBQU07QUFvSlAsU0FBUyxPQUFPLENBQUMsQ0FBZ0I7SUFDaEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFySkEsMEJBQU87QUEwSlIsU0FBUyxJQUFJLENBQUMsQ0FBZ0I7SUFDN0IsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBM0pBLG9CQUFJO0FBZ0tMLFNBQVMsSUFBSSxDQUFDLENBQWdCO0lBQzdCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFqS0Esb0JBQUk7QUFzS0wsU0FBUyxJQUFJLENBQUMsQ0FBZ0I7SUFDN0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUF2S0Esb0JBQUk7QUE2S0wsU0FBUyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFnQixFQUFFLENBQW9CO0lBQzNELElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzFCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNkO1FBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNUO0lBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNsQjtTQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNuQixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2Q7U0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNkO0lBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBSSxDQUFDLElBQUcsVUFBQyxFQUFJLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDaEQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNCLE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckMsSUFBSSxHQUFHLGFBQUksQ0FBQyxDQUFDLEVBQUksRUFBRSxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsSUFBSSxHQUFHLGFBQUksQ0FBQyxDQUFDLEVBQUksRUFBRSxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbkM7SUFDRCxJQUNDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDWCxJQUFJLEtBQUssUUFBUTtRQUNqQixJQUFJLEtBQUssQ0FBQyxRQUFRO1FBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDWCxJQUFJLEtBQUssUUFBUTtRQUNqQixJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQ2pCO1FBQ0QsT0FBTyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM1QjtJQUNELE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckIsQ0FBQztBQWhOQSwwQkFBTztBQThOUixTQUFTLE9BQU8sQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUNwQyxJQUFJLENBQVMsQ0FBQztJQUNkLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDekQsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNOO1NBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDOUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNOO1NBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2xCLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNyQjtTQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hDO1NBQU07UUFDTixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDakM7SUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUksQ0FBQyxJQUFHLFVBQUMsRUFBSSxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBT0QsU0FBUyxTQUFTLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDdEMsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ25CLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDNUI7SUFDRCxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBTUQsU0FBUyxjQUFjLENBQUMsQ0FBUztJQUNoQyxJQUFJLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ3RDLE9BQU8sQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ25FO1NBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDcEU7U0FBTTtRQUNOLE9BQU8sQ0FBQyxDQUFDO0tBQ1Q7QUFDRixDQUFDO0FBdlFBLHdDQUFjO0FBOFFmLFNBQVMsT0FBTyxDQUFDLENBQWtCLEVBQUUsQ0FBUztJQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDWCxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDakI7U0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxDQUFDLENBQUM7S0FDVDtJQUNELE9BQU8sQ0FBQyxDQUFNLEVBQUUsR0FBRyxJQUFXLEVBQUUsRUFBRTtRQUNqQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdEI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUMsQ0FBQztBQUNILENBQUM7QUE1UkEsMEJBQU87Ozs7Ozs7Ozs7Ozs7O0FDdEJSLGdIQXdCMEI7QUFDMUIsOEZBQXdEO0FBV3hELFNBQVMsU0FBUyxDQUFDLEdBQVc7SUFDN0IsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLHVCQUFRLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFaMkQsOEJBQVM7QUFrQnJFLFNBQVMsUUFBUSxDQUFDLEdBQVc7SUFDNUIsTUFBTSxJQUFJLEdBQXNCLEVBQUUsQ0FBQztJQUNuQyxJQUFJO1FBQ0gsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLHVCQUFRLEVBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUN4QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1gsTUFBTSxnQ0FBZ0MsQ0FBQztLQUN2QztBQUNGLENBQUM7QUExQnNFLDRCQUFRO0FBa0MvRSxTQUFTLFFBQVEsQ0FBQyxDQUFPO0lBQ3hCLElBQUksQ0FBQyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3hELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNYO0lBRUQsTUFBTSxPQUFPLEdBQXNCLEVBQUUsQ0FBQztJQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDekM7SUFFRCxJQUFJLElBQUksR0FBRyxVQUFVLEdBQUcsSUFBcUI7UUFDNUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQztJQUNGLE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQWhEaUQsNEJBQVE7QUFxRDFELFNBQVMsV0FBVyxDQUFDLEtBQWdCO0lBQ3BDLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtRQUMxQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2QjtTQUFNLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtRQUVsQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztLQUNuQjtTQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBRXJDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO1lBRW5CLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBRU4sSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUNyQjtZQUNELEdBQUcsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLFVBQVUsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFvQixDQUFDO1NBQ3pFO0tBQ0Q7U0FBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7UUFDM0UsT0FBTyxHQUFHLEVBQUUsQ0FBQyx5QkFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCO1NBQU07UUFFTixPQUFPLEtBQUssQ0FBQztLQUNiO0FBQ0YsQ0FBQztBQUdELE1BQU0sY0FBYyxHQUF3RDtJQUMzRSxHQUFHLEVBQUUsb0JBQUc7SUFDUixFQUFFLEVBQUUsb0JBQUc7SUFDUCxHQUFHLEVBQUUsb0JBQUc7SUFDUixHQUFHLEVBQUUsdUJBQU07SUFDWCxHQUFHLEVBQUUscUJBQUk7SUFDVCxHQUFHLEVBQUUsd0JBQU87SUFDWixJQUFJLEVBQUUscUJBQUk7SUFDVixJQUFJLEVBQUUscUJBQUk7SUFDVixJQUFJLEVBQUUscUJBQUk7SUFDVixHQUFHLEVBQUUsd0JBQU87SUFDWixJQUFJLEVBQUUscUJBQUk7SUFDVixFQUFFLEVBQUUsbUJBQUU7SUFDTixFQUFFLEVBQUUsbUJBQUU7SUFDTixHQUFHLEVBQUUsb0JBQUc7SUFDUixHQUFHLEVBQUUsb0JBQUc7SUFDUixPQUFPLEVBQUUsd0JBQU87Q0FDaEIsQ0FBQztBQVlGLE1BQU0sSUFBSTtJQUlULFlBQVksQ0FBa0IsRUFBRSxRQUFxQjtRQUNwRCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7Q0FDRDtBQTFIUSxvQkFBSTtBQWtJYixTQUFTLEtBQUssQ0FBQyxNQUFlLEVBQUUsSUFBd0I7SUFDdkQsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1FBQ3ZCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Q7SUFDRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLElBQUksSUFBSSxZQUFZLEtBQUssRUFBRTtRQUMxQixPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ2xDO1NBQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxZQUFZLElBQUksQ0FBQyxFQUFFO1FBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDbEM7U0FBTTtRQUNOLE9BQU8sSUFBSSxDQUFDO0tBQ1o7QUFDRixDQUFDO0FBOUkwQyxzQkFBSztBQW1KaEQsU0FBUyxRQUFRLENBQUMsTUFBZSxFQUFFLElBQXVCO0lBQ3pELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDeEIsTUFBTSx3REFBd0QsQ0FBQztLQUMvRDtJQUNELE1BQU0sUUFBUSxHQUFnQixFQUFFLENBQUM7SUFDakMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRzNCLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEUsSUFBSSxRQUFRLEtBQUssRUFBRSxFQUFFO1FBQ3BCLElBQUksUUFBUSxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBRXBDLFFBQVEsQ0FBQyxJQUFJLENBQUMseUJBQUksRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDTixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxRQUFRLEtBQUssZUFBZSxFQUFFO1lBQ2pDLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDWDtRQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkQsT0FBTyxJQUFJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNoRTtJQUdELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDeEIsTUFBTSxJQUFJLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQy9CLE1BQU0sUUFBUSxDQUFDLElBQUksR0FBRywyQkFBMkIsQ0FBQztTQUNsRDtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ1o7SUFHRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO1FBQ25ELE1BQU0sUUFBUSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksUUFBUSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBRW5DLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUQ7YUFBTTtZQUVOLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekQsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxRCxPQUFPLElBQUksSUFBSSxDQUFDLHFCQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDaEM7S0FDRDtJQUdELElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNuQyxNQUFNLElBQUksR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxDQUFDO1FBRTVDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7WUFFM0IsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLE1BQU0sUUFBUSxDQUFDLElBQUksR0FBRyx3Q0FBd0MsQ0FBQzthQUMvRDtZQUNELE1BQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsb0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRSxNQUFNLElBQUksR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDaEMsTUFBTSx1Q0FBdUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQzlEO1lBQ0QsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBRWpDLE9BQU8sSUFBSSxJQUFJLENBQ2QsSUFBdUIsRUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUNsQyxDQUFDO2FBQ0Y7aUJBQU07Z0JBRU4sUUFBUSxDQUFDLElBQUksQ0FDWixJQUFJLElBQUksQ0FDUCxJQUF1QixFQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQ2xDLENBQ0QsQ0FBQztnQkFDRixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPLElBQUksSUFBSSxDQUFDLHFCQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDaEM7U0FDRDthQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7WUFFbEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDMUMsTUFBTSxRQUFRLENBQUMsSUFBSSxHQUFHLDRDQUE0QyxDQUFDO2FBQ25FO1lBQ0QsTUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxvQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyx3Q0FBd0MsQ0FDOUYsUUFBUSxDQUFDLElBQUksRUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FDdkIsQ0FBQztZQUVGLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO2dCQUNsRCxNQUFNLDBCQUEwQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDakQ7WUFFRCxNQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLG9CQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkUsTUFBTSxJQUFJLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRTtnQkFDMUIsTUFBTSxrQ0FBa0MsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxVQUFVLEtBQUssTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBRXJDLE9BQU8sSUFBSSxJQUFJLENBQ2QsV0FBVyxFQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FDbEMsQ0FBQzthQUNGO2lCQUFNO2dCQUVOLFFBQVEsQ0FBQyxJQUFJLENBQ1osSUFBSSxJQUFJLENBQ1AsV0FBVyxFQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FDbEMsQ0FDRCxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzVELE9BQU8sSUFBSSxJQUFJLENBQUMscUJBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNoQztTQUNEO2FBQU07WUFHTixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixNQUFNLDBCQUEwQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDakQ7WUFDRCxPQUFPLElBQUksSUFBSSxDQUFDLElBQXVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUU7S0FDRDtJQUdELE1BQU0sSUFBSSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsRUFBRTtRQUMvQixNQUFNLFFBQVEsQ0FBQyxJQUFJLEdBQUcsMkJBQTJCLENBQUM7S0FDbEQ7SUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvQyxPQUFPLElBQUksSUFBSSxDQUFDLHFCQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQW1CRCxTQUFTLFlBQVksQ0FBQyxNQUFlO0lBQ3BDLElBQUksSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUN0QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3ZDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssb0JBQVMsQ0FBQyxRQUFRLEVBQUU7WUFFdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNWLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLElBQUksU0FBUyxDQUFDLElBQUksS0FBSyxvQkFBUyxDQUFDLFFBQVEsRUFBRTtvQkFHMUMsSUFDQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDaEMsQ0FBQyxDQUFDLG9CQUFTLENBQUMsTUFBTSxFQUFFLG9CQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOzRCQUNqRSxTQUFTLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQzt3QkFDeEIsQ0FBQyxDQUFDLG9CQUFTLENBQUMsTUFBTSxFQUFFLG9CQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOzRCQUM3RCxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQzt3QkFDcEIsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUMvQjt3QkFDRCxJQUFJLEdBQUcsZUFBZSxDQUFDO3dCQUN2QixLQUFLLEdBQUcsQ0FBQyxDQUFDO3FCQUNWO2lCQUNEO2FBQ0Q7WUFDRCxJQUFJLENBQUMsb0JBQVMsQ0FBQyxXQUFXLEVBQUUsb0JBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDeEMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QztxQkFBTTtvQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNwQixNQUFNLCtCQUErQixDQUFDO2lCQUN0QzthQUNEO1lBQ0QsU0FBUztTQUNUO1FBRUQsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2hCLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDVjthQUFNLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFL0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDbEIsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNWO2FBQU0sSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBRW5GLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDVjtLQUVEO0lBRUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3pDLENBQUM7QUFLRCxTQUFTLGVBQWUsQ0FBQyxJQUFZO0lBQ3BDLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsQ0FBQztBQUMzQyxDQUFDO0FBS0QsU0FBUyxjQUFjLENBQUMsSUFBWTtJQUNuQyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBS0QsU0FBUyxxQkFBcUIsQ0FBQyxJQUFZO0lBQzFDLE9BQU8sSUFBSSxLQUFLLFNBQVMsQ0FBQztBQUMzQixDQUFDO0FBUUQsU0FBUyxpQkFBaUIsQ0FBQyxNQUFlLEVBQUUsQ0FBUyxFQUFFLFNBQW9CO0lBQzFFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksSUFBWSxDQUFDO0lBQ2pCLElBQUksS0FBYSxDQUFDO0lBQ2xCLElBQUksU0FBUyxLQUFLLG9CQUFTLENBQUMsV0FBVyxFQUFFO1FBQ3hDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxLQUFLLEdBQUcsR0FBRyxDQUFDO0tBQ1o7U0FBTSxJQUFJLFNBQVMsS0FBSyxvQkFBUyxDQUFDLGFBQWEsRUFBRTtRQUNqRCxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsS0FBSyxHQUFHLEdBQUcsQ0FBQztLQUNaO1NBQU07UUFDTixNQUFNLDJFQUEyRSxDQUFDO0tBQ2xGO0lBQ0QsSUFBSSxDQUFTLENBQUM7SUFDZCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3ZDLFFBQVEsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtZQUN2QixLQUFLLElBQUk7Z0JBQ1IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTTtZQUNQLEtBQUssS0FBSztnQkFDVCxLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNO1lBQ1A7Z0JBQ0MsTUFBTTtTQUNQO1FBQ0QsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLE1BQU07U0FDTjtLQUNEO0lBQ0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDMUIsTUFBTSwrQkFBK0IsQ0FBQztLQUN0QztJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQTNad0IsOENBQWlCO0FBNloxQyxTQUFTLDBCQUEwQixDQUFDLGVBQXVCO0lBQzFELFFBQVEsZUFBZSxFQUFFO1FBQ3hCLEtBQUssR0FBRztZQUNQLE9BQU8sb0JBQUcsQ0FBQztRQUNaLEtBQUssR0FBRztZQUNQLE9BQU8seUJBQVEsQ0FBQztRQUNqQixLQUFLLEdBQUc7WUFDUCxPQUFPLHFCQUFJLENBQUM7UUFDYixLQUFLLEdBQUc7WUFDUCxPQUFPLHVCQUFNLENBQUM7UUFDZixLQUFLLEdBQUc7WUFDUCxPQUFPLHNCQUFLLENBQUM7UUFDZCxLQUFLLGVBQWU7WUFDbkIsT0FBTyxxQkFBSSxDQUFDO1FBQ2I7WUFDQyxNQUFNLG9GQUFvRixDQUFDO0tBQzVGO0FBQ0YsQ0FBQztBQVVELFNBQVMsY0FBYyxDQUFDLE1BQWU7SUFDdEMsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUNaLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDYixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN2QyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsUUFBUSxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ3RCLEtBQUssb0JBQVMsQ0FBQyxLQUFLO2dCQUNuQixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2xCLE1BQU0sR0FBRyxFQUFFLENBQUM7aUJBQ1o7cUJBQU07b0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsTUFBTTtZQUNQLEtBQUssb0JBQVMsQ0FBQyxXQUFXLENBQUM7WUFDM0IsS0FBSyxvQkFBUyxDQUFDLGFBQWE7Z0JBQzNCLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7b0JBQ25ELEtBQUssRUFBRSxDQUFDO2lCQUNSO3FCQUFNO29CQUNOLEtBQUssRUFBRSxDQUFDO2lCQUNSO1lBRUY7Z0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsTUFBTTtTQUNQO0tBQ0Q7SUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQXRkUSx3Q0FBYztBQW1ldkIsU0FBUyx3Q0FBd0MsQ0FBQyxJQUFZLEVBQUUsTUFBZTtJQUM5RSxNQUFNLElBQUksR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1FBRXZCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsTUFBTSx1REFBdUQsQ0FBQztTQUM5RDthQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxvQkFBUyxDQUFDLE1BQU0sRUFBRTtZQUN4RSxNQUFNLHlEQUF5RCxDQUFDO1NBQ2hFO1FBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVoQyxNQUFNLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUN2QixNQUFNLENBQUMsR0FBb0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsR0FBVyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1gsTUFBTSw0Q0FBNEMsQ0FBQztTQUNuRDtRQUNELE9BQU8sRUFBRSxXQUFXLEVBQUUsNEJBQU8sRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDcEY7U0FBTTtRQUVOLE1BQU0sa0dBQWtHLENBQUM7S0FDekc7QUFDRixDQUFDO0FBT0QsU0FBUyxpQkFBaUIsQ0FBQyxJQUFZLEVBQUUsS0FBVTtJQUNsRCxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDZixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEI7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7QUFRRCxTQUFTLGtCQUFrQixDQUFDLEtBQVksRUFBRSxJQUF1QjtJQUNoRSxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxvQkFBUyxDQUFDLE1BQU07WUFDcEIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDdkIsT0FBTyx5QkFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2Y7aUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtnQkFDOUIsT0FBTyx5QkFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUMvQixPQUFPLHlCQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3JCO2lCQUFNLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkMsTUFBTSxFQUFFLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtvQkFDN0IsTUFBTSxrRkFBa0YsQ0FBQztpQkFDekY7Z0JBQ0QsT0FBTyxFQUFxQixDQUFDO2FBQzdCO2lCQUFNO2dCQUVOLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtvQkFDakMsTUFBTSxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDdkM7Z0JBQ0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sUUFBUSxHQUFhO29CQUMxQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQztpQkFDakIsQ0FBQztnQkFDRixPQUFPLFFBQVEsQ0FBQzthQUNoQjtRQUNGLEtBQUssb0JBQVMsQ0FBQyxNQUFNO1lBQ3BCLE9BQU8seUJBQUksRUFBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckMsS0FBSyxvQkFBUyxDQUFDLEtBQUs7WUFDbkIsTUFBTSxzQkFBc0IsQ0FBQztRQUM5QjtZQUNDLE1BQU0sQ0FDTCxxQ0FBcUM7Z0JBQ3JDLEtBQUssQ0FBQyxJQUFJO2dCQUNWLGtFQUFrRSxDQUNsRSxDQUFDO0tBQ0g7QUFDRixDQUFDO0FBT0QsU0FBUyxTQUFTLENBQUMsT0FBZSxFQUFFLE1BQXlCO0lBQzVELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFFakMsT0FBTyxJQUFJLENBQUM7S0FDWjtJQUNELElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1FBRWpCLE9BQU8sS0FBSyxDQUFDO0tBQ2I7U0FBTTtRQUVOLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7S0FDWjtBQUNGLENBQUM7QUFPRCxTQUFTLGNBQWMsQ0FBQyxRQUFnQixFQUFFLElBQXVCO0lBQ2hFLElBQUksR0FBRyxHQUFHLHNCQUFzQixDQUFDO0lBQ2pDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdEIsT0FBTyxHQUFHLEdBQUcsUUFBUSxDQUFDO0tBQ3RCO1NBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM3QixHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNyQjtTQUFNO1FBQ04sS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDekIsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUNyQixHQUFHLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQzthQUN0QjtTQUNEO0tBQ0Q7SUFDRCxHQUFHLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUN6QixPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDMW5CRCxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRTtJQUNyQixNQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7SUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRTtRQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLE9BQU8sT0FBTyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDTCxNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsTUFBTSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBSy9DLElBQUssU0FPSjtBQVBELFdBQUssU0FBUztJQUNiLGlEQUFRO0lBQ1IsdURBQVc7SUFDWCw2Q0FBTTtJQUNOLDZDQUFNO0lBQ04sMkNBQUs7SUFDTCwyREFBYTtBQUNkLENBQUMsRUFQSSxTQUFTLEtBQVQsU0FBUyxRQU9iO0FBdEJlLDhCQUFTO0FBMkJ6QixNQUFNLFNBQVM7SUFNZCxZQUFZLEdBQVc7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUtELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUtELE1BQU07UUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNmLENBQUM7Q0FDRDtBQUtELE1BQU0sS0FBSztJQUlWLFlBQVksSUFBWSxFQUFFLElBQWU7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQUNEO0FBaEVRLHNCQUFLO0FBdUVkLFNBQVMsUUFBUSxDQUFDLEdBQVc7SUFDNUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsTUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO0lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsS0FBSyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUMvRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLElBQWUsQ0FBQztRQUNwQixJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7U0FDMUI7YUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNsQyxJQUFJLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztTQUM3QjthQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2xDLElBQUksR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDO1NBQy9CO2FBQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ3JCLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUVuQyxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZELEtBQUssSUFBSSxDQUFDLENBQUM7YUFDWDtZQUNELEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNaLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO1lBRS9DLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDdkIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDZCxJQUFJLE1BQU0sRUFBRTt3QkFDWCxNQUFNLDZCQUE2QixHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7cUJBQ2xEO3lCQUFNO3dCQUNOLE1BQU0sR0FBRyxJQUFJLENBQUM7cUJBQ2Q7aUJBQ0Q7Z0JBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQzthQUNYO1lBQ0QsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1osSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7U0FDeEI7YUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDckIsU0FBUztTQUNUO2FBQU07WUFDTixNQUFNLDBCQUEwQixHQUFHLENBQUMsQ0FBQztTQUNyQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDcEM7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNmLENBQUM7QUFuSDBCLDRCQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBsZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NoZXZyb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY2hldnJvbi53ZWJwIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9pLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9saW5rLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xpbmsud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xvY2tBc3BlY3RSYXRpby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sb2NrQXNwZWN0UmF0aW8ud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hZ25pZmllci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYWduaWZpZXIud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hdGhjYWxPLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21hdGhjYWxPLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBsZXguc2Nzcz8wMDM1Iiwid2VicGFjazovLy8uL3NyYy9jb21wbGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV4UGxvdHRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcGxleC9jb21wbGV4TnVtYmVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wbGV4L3BhcnNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBsZXgvdG9rZW5pemUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmNhbnZhcyB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAtMTtcbn1cblxuYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLyoqKioqKioqKioqKioqKioqKiovXG4vKiAgIElucHV0IGJveGVzICAgKi9cbi8qKioqKioqKioqKioqKioqKioqL1xuZGl2I2FsbElucHV0RGl2IGRpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuZGl2I2FsbElucHV0RGl2IGRpdi5pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgb3ZlcmZsb3cteDogdmlzaWJsZTtcbiAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBmbG9hdDogbGVmdDtcbn1cbmRpdiNhbGxJbnB1dERpdiBkaXYuaW5wdXQgdGV4dGFyZWEge1xuICBmb250LXNpemU6IDEycHQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHJlc2l6ZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LWtlcm5pbmc6IG5vbmU7XG59XG5kaXYjYWxsSW5wdXREaXYgZGl2LmlucHV0IHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5kaXYjYWxsSW5wdXREaXYgZGl2LmlucHV0I2lucHV0RGl2IHtcbiAgd2lkdGg6IDI0MHB0O1xufVxuZGl2I2FsbElucHV0RGl2IGRpdi5pbnB1dCN3aWR0aERpdiwgZGl2I2FsbElucHV0RGl2IGRpdi5pbnB1dCNoZWlnaHREaXYge1xuICB3aWR0aDogNjBwdDtcbn1cbmRpdiNhbGxJbnB1dERpdiBkaXYuaW5wdXQjY2VudGVyRGl2IHtcbiAgd2lkdGg6IDEwMHB0O1xufVxuZGl2I2FsbElucHV0RGl2IGRpdi5pbnB1dCBzcGFuLmhvdmVyVGV4dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMS4yZW07XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICB0b3A6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZS1pbi1vdXQgMHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2UtaW4tb3V0IDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2UtaW4tb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC43NXMgZWFzZS1pbi1vdXQgMHM7XG59XG5kaXYjYWxsSW5wdXREaXYgZGl2LmlucHV0OmhvdmVyIHNwYW4uaG92ZXJUZXh0IHtcbiAgb3BhY2l0eTogMC45O1xufVxuZGl2I2FsbElucHV0RGl2IGRpdi5pbnB1dDpob3ZlciBzcGFuLmhvdmVyVGV4dDpob3ZlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5kaXYjYWxsSW5wdXREaXYgZGl2I3BsdXNNaW51c0RpdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbmRpdiNhbGxJbnB1dERpdiBkaXYjcGx1c01pbnVzRGl2IGRpdi5pbnB1dCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwLjRlbTtcbiAgd2lkdGg6IDEuNGVtO1xuICBoZWlnaHQ6IDEuNGVtO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5kaXYjYWxsSW5wdXREaXYgZGl2I3BsdXNNaW51c0RpdiBkaXYuaW5wdXQgZGl2Lmhvcml6IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwLjI1ZW07XG4gIHdpZHRoOiAxLjhlbTtcbiAgbWFyZ2luLXRvcDogMC41NzVlbTtcbiAgbWFyZ2luLWxlZnQ6IC0wLjJlbTtcbn1cbmRpdiNhbGxJbnB1dERpdiBkaXYjcGx1c01pbnVzRGl2IGRpdi5pbnB1dCBkaXYudmVydCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwLjI1ZW07XG4gIGhlaWdodDogMS44ZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjU3NWVtO1xuICBtYXJnaW4tdG9wOiAtMC4yZW07XG59XG5kaXYjYWxsSW5wdXREaXYgZGl2I3BsdXNNaW51c0RpdiBkaXYuaW5wdXQjb3JpZ2luRGl2IHtcbiAgYmFja2dyb3VuZC1zaXplOiAxLjhlbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuZGl2I2FsbElucHV0RGl2IGRpdiNwbHVzTWludXNEaXYgZGl2LmlucHV0I2NoZXZyb25EaXYge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgcGFkZGluZzogMC4xZW07XG59XG5kaXYjYWxsSW5wdXREaXYgZGl2I3BsdXNNaW51c0RpdiBkaXYuaW5wdXQjY2hldnJvbkRpdi51cHNpZGVkb3duIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbn1cbmRpdiNhbGxJbnB1dERpdiBkaXYjcGx1c01pbnVzRGl2IGRpdiNtZW51Qm94IGRpdi5pbnB1dCB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBwYWRkaW5nOiAwLjFlbTtcbn1cblxuZGl2I2Vycm9yRGl2IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDEuMmVtO1xuICBvdmVyZmxvdy14OiB2aXNpYmxlO1xuICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICBtYXJnaW46IDAuNWVtO1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGZsb2F0OiBsZWZ0O1xuICBmbG9hdDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiAxLjdlbTtcbiAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCBsaWdodGdyZXk7XG4gIGZvbnQtc2l6ZS1hZGp1c3Q6IGF1dG87XG4gIG9wYWNpdHk6IDA7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0IDBzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dCAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dCAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2UtaW4tb3V0IDBzO1xufVxuZGl2I2Vycm9yRGl2LnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwcyBlYXNlLWluLW91dCAwcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1pbi1vdXQgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1pbi1vdXQgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwcyBlYXNlLWluLW91dCAwcztcbn1cbmRpdiNlcnJvckRpdi5ub3RBbkVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufVxuZGl2I2Vycm9yRGl2LmFuRXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcGxleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0MsVUFBQTtFQUNBLFNBQUE7QUFERDs7QUFJQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUREOztBQUlBO0VBQ0MsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBREQ7O0FBSUEsb0JBQUE7QUFDQSxvQkFBQTtBQUNBLG9CQUFBO0FBdUVFO0VBQ0MsYUFBQTtBQXZFSDtBQTBFRTtFQXJFRCxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQVJlO0VBU2YsYUFSaUI7RUFTakIsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBYmM7RUFjZCxrQkFkYztFQWVkLHFCQWZjO0VBZ0JkLG1CQWhCYztFQWlCZCxvQkFqQmM7RUFrQmQsZ0JBQUE7RUFDQSxXQUFBO0FBRkQ7QUEyREc7RUFyREYsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQUhEO0FBaURJO0VBQ0MsYUFBQTtBQS9DTDtBQWtERztFQUNDLFlBQUE7QUFoREo7QUFrREc7RUFFQyxXQUFBO0FBakRKO0FBbURHO0VBQ0MsWUFBQTtBQWpESjtBQW9ERztFQXpDRixrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGFBdERpQjtFQXVEakIsa0JBekRjO0VBMERkLHFCQTFEYztFQTJEZCxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQWxCQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtBQVdEO0FBcUNHO0VBQ0MsWUFBQTtBQW5DSjtBQW9DSTtFQUNDLFVBQUE7QUFsQ0w7QUF1Q0U7RUFDQyxZQUFBO0FBckNIO0FBeUNHO0VBQ0MsV0FBQTtFQUNBLGNBSmU7RUFLZixZQU5ZO0VBT1osYUFQWTtFQVFaLGNBQUE7RUFDQSxpQkFBQTtBQXZDSjtBQTJDSTtFQW5GSCx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFnRkksY0FKWTtFQUtaLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBcENMO0FBdUNJO0VBM0ZILHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQXdGSSxhQVpZO0VBYVosYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFoQ0w7QUFtQ0k7RUFDQyxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFqQ0w7QUFvQ0k7RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFsQ0w7QUFtQ0s7RUFDQyw2QkFBQTtFQUNBLHFCQUFBO0FBakNOO0FBdUNJO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBckNMOztBQTRDQTtFQTlKQyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQVJlO0VBU2YsYUFSaUI7RUFTakIsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBYmM7RUFjZCxrQkFkYztFQWVkLHFCQWZjO0VBZ0JkLG1CQWhCYztFQWlCZCxvQkFqQmM7RUFrQmQsZ0JBQUE7RUFDQSxXQUFBO0VBa0pBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBbklBLHNDQUFBO0VBQ0EseUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGlDQUFBO0FBeUdEO0FBeUJDO0VBQ0MsVUFBQTtFQXRJRCxzQ0FBQTtFQUNBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSxpQ0FBQTtBQWdIRDtBQXNCQztFQUNDLDJCQUFBO0FBcEJGO0FBc0JDO0VBQ0Msd0JBQUE7QUFwQkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXHJcXG5cXHJcXG4qIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuY2FudmFzIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0ei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqL1xcclxcbi8qICAgSW5wdXQgYm94ZXMgICAqL1xcclxcbi8qKioqKioqKioqKioqKioqKioqL1xcclxcbiRpbnB1dC1tYXJnaW46IDAuNWVtO1xcclxcbiRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuJGlucHV0RGl2LWhlaWdodDogMS4yZW07XFxyXFxuXFxyXFxuQG1peGluIGlucHV0RGl2Rm9ybWF0KCkge1xcclxcblxcdGJhY2tncm91bmQ6IHdoaXRlO1xcclxcblxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuXFx0Ym9yZGVyLXdpZHRoOiB0aGluO1xcclxcblxcdGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuXFx0aGVpZ2h0OiAkaW5wdXREaXYtaGVpZ2h0O1xcclxcblxcdG92ZXJmbG93LXg6IHZpc2libGU7XFxyXFxuXFx0b3ZlcmZsb3cteTogdmlzaWJsZTtcXHJcXG5cXHRtYXJnaW46ICRpbnB1dC1tYXJnaW47XFxyXFxuXFx0cGFkZGluZy10b3A6ICRpbnB1dC1tYXJnaW47XFxyXFxuXFx0cGFkZGluZy1ib3R0b206ICRpbnB1dC1tYXJnaW47XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAkaW5wdXQtbWFyZ2luO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6ICRpbnB1dC1tYXJnaW47XFxyXFxuXFx0cG9zaXRpb246IHN0aWNreTtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGlucHV0Rm9ybWF0KCkge1xcclxcblxcdGZvbnQtc2l6ZTogMTJwdDtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRvdmVyZmxvdzogYXV0bztcXHJcXG5cXHRyZXNpemU6IG5vbmU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcblxcdGZvbnQta2VybmluZzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHJlY3RhbmdsZUZvcm1hdCgpIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGVhc2UtaW4tb3V0KCR0aW1lKSB7XFxyXFxuXFx0LW1vei10cmFuc2l0aW9uOiBhbGwgJHRpbWUgZWFzZS1pbi1vdXQgMHM7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgJHRpbWUgZWFzZS1pbi1vdXQgMHM7XFxyXFxuXFx0LW1zLXRyYW5zaXRpb246IGFsbCAkdGltZSBlYXNlLWluLW91dCAwcztcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgJHRpbWUgZWFzZS1pbi1vdXQgMHM7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBob3ZlclRleHRGb3JtYXQge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0aGVpZ2h0OiAkaW5wdXREaXYtaGVpZ2h0O1xcclxcblxcdHBhZGRpbmctdG9wOiAkaW5wdXQtbWFyZ2luO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAkaW5wdXQtbWFyZ2luO1xcclxcblxcdHRvcDogMTAwJTtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0QGluY2x1ZGUgZWFzZS1pbi1vdXQoMC43NXMpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBJbnB1dCBmb3JtYXR0aW5nXFxyXFxuZGl2I2FsbElucHV0RGl2IHtcXHJcXG5cXHRkaXYge1xcclxcblxcdFxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmLmlucHV0IHtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBpbnB1dERpdkZvcm1hdCgpO1xcclxcblxcdFxcdFxcdCYgdGV4dGFyZWEge1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGlucHV0Rm9ybWF0KCk7XFxyXFxuXFx0XFx0XFx0XFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmI2lucHV0RGl2IHtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMjQwcHQ7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCYjd2lkdGhEaXYsXFxyXFxuXFx0XFx0XFx0JiNoZWlnaHREaXYge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiA2MHB0O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmI2NlbnRlckRpdiB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMHB0O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRzcGFuLmhvdmVyVGV4dCB7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgaG92ZXJUZXh0Rm9ybWF0KCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6aG92ZXIgc3Bhbi5ob3ZlclRleHQge1xcclxcblxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuOTtcXHJcXG5cXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCYjcGx1c01pbnVzRGl2IHtcXHJcXG5cXHRcXHRcXHRmbG9hdDogcmlnaHQ7XFxyXFxuXFx0XFx0XFx0JGlubmVyLXNpemU6IDEuNGVtO1xcclxcblxcdFxcdFxcdCRpbm5lci1wYWRkaW5nOiAwLjRlbTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRkaXYuaW5wdXQge1xcclxcblxcdFxcdFxcdFxcdGZsb2F0OiBsZWZ0O1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6ICRpbm5lci1wYWRkaW5nO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAkaW5uZXItc2l6ZTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6ICRpbm5lci1zaXplO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1yaWdodDogMiAqICRpbnB1dC1tYXJnaW47XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0JHNob3J0LXNpZGU6IDAuMjVlbTtcXHJcXG5cXHRcXHRcXHRcXHQvL0hvcml6b250YWwgbGluZVxcclxcblxcdFxcdFxcdFxcdGRpdi5ob3JpeiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0QGluY2x1ZGUgcmVjdGFuZ2xlRm9ybWF0KCk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAkc2hvcnQtc2lkZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aDogJGlubmVyLXNpemUgKyAkaW5uZXItcGFkZGluZztcXHJcXG5cXHRcXHRcXHRcXHRcXHRtYXJnaW4tdG9wOiBtYXRoLmRpdigkaW5uZXItc2l6ZSwgMikgLSBtYXRoLmRpdigkc2hvcnQtc2lkZSwgMik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luLWxlZnQ6IG1hdGguZGl2KC0kaW5uZXItcGFkZGluZywgMik7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdC8vVmVydGljYWwgbGluZVxcclxcblxcdFxcdFxcdFxcdGRpdi52ZXJ0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSByZWN0YW5nbGVGb3JtYXQoKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aDogJHNob3J0LXNpZGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAkaW5uZXItc2l6ZSArICRpbm5lci1wYWRkaW5nO1xcclxcblxcdFxcdFxcdFxcdFxcdG1hcmdpbi1sZWZ0OiBtYXRoLmRpdigkaW5uZXItc2l6ZSwgMikgLSBtYXRoLmRpdigkc2hvcnQtc2lkZSwgMik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogbWF0aC5kaXYoLSRpbm5lci1wYWRkaW5nLCAyKTtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0JiNvcmlnaW5EaXYge1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtc2l6ZTogJGlubmVyLXNpemUgKyAkaW5uZXItcGFkZGluZztcXHJcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0JiNjaGV2cm9uRGl2IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aDogMmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdGhlaWdodDogMmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDAuMWVtO1xcclxcblxcdFxcdFxcdFxcdFxcdCYudXBzaWRlZG93biB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdGRpdiNtZW51Qm94IHtcXHJcXG5cXHRcXHRcXHRcXHRkaXYuaW5wdXQge1xcclxcblxcdFxcdFxcdFxcdFxcdHdpZHRoOiAyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZzogMC4xZW07XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5kaXYjZXJyb3JEaXYge1xcclxcblxcdEBpbmNsdWRlIGlucHV0RGl2Rm9ybWF0KCk7XFxyXFxuXFx0ZmxvYXQ6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG5cXHR3aWR0aDogNzUlO1xcclxcblxcdGhlaWdodDogJGlucHV0RGl2LWhlaWdodCArICRpbnB1dC1tYXJnaW47XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDEyLjUlO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggbGlnaHRncmV5O1xcclxcblxcdGZvbnQtc2l6ZS1hZGp1c3Q6IGF1dG87XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHRAaW5jbHVkZSBlYXNlLWluLW91dCgycyk7XFxyXFxuXFx0Ji52aXNpYmxlIHtcXHJcXG5cXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdEBpbmNsdWRlIGVhc2UtaW4tb3V0KDBzKTtcXHJcXG5cXHR9XFxyXFxuXFx0Ji5ub3RBbkVycm9yIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxuXFx0fVxcclxcblxcdCYuYW5FcnJvciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jaGV2cm9uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jaGV2cm9uLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaS53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2xpbmsucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2xpbmsud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9sb2NrQXNwZWN0UmF0aW8ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2xvY2tBc3BlY3RSYXRpby53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL21hZ25pZmllci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvbWFnbmlmaWVyLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvbWF0aGNhbE8ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL21hdGhjYWxPLndlYnBcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMl0hLi9jb21wbGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzJdIS4vY29tcGxleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IFwiLi9jb21wbGV4LnNjc3NcIjtcclxuaW1wb3J0IENvbXBsZXhQbG90dGVyIGZyb20gXCIuL2NvbXBvbmVudHMvQ29tcGxleFBsb3R0ZXJcIjtcclxuXHJcbnJlbmRlcig8Q29tcGxleFBsb3R0ZXIgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKSBhcyBIVE1MRWxlbWVudCk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcmcsIE1vZCB9IGZyb20gXCIuLi9zY3JpcHRzL2NvbXBsZXgvY29tcGxleE51bWJlcnNcIjtcclxuaW1wb3J0IHsgQ29tcGxleEZ1bmN0aW9uLCBzdHJUb0Z1bmMsIHN0clRvTnVtIH0gZnJvbSBcIi4uL3NjcmlwdHMvY29tcGxleC9wYXJzZVwiO1xyXG5pbXBvcnQgb1dlYnAgZnJvbSBcIi4uL2ltYWdlcy9tYXRoY2FsTy53ZWJwXCI7XHJcbmltcG9ydCBvUG5nIGZyb20gXCIuLi9pbWFnZXMvbWF0aGNhbE8ucG5nXCI7XHJcbmltcG9ydCBjaGV2cm9uV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2NoZXZyb24ud2VicFwiO1xyXG5pbXBvcnQgY2hldnJvblBuZyBmcm9tIFwiLi4vaW1hZ2VzL2NoZXZyb24ucG5nXCI7XHJcbmltcG9ydCBpV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2kud2VicFwiO1xyXG5pbXBvcnQgaVBuZyBmcm9tIFwiLi4vaW1hZ2VzL2kucG5nXCI7XHJcbmltcG9ydCBsaW5rV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2xpbmsud2VicFwiO1xyXG5pbXBvcnQgbGlua1BuZyBmcm9tIFwiLi4vaW1hZ2VzL2xpbmsucG5nXCI7XHJcbmltcG9ydCBhcldlYnAgZnJvbSBcIi4uL2ltYWdlcy9sb2NrQXNwZWN0UmF0aW8ud2VicFwiO1xyXG5pbXBvcnQgYXJQbmcgZnJvbSBcIi4uL2ltYWdlcy9sb2NrQXNwZWN0UmF0aW8ucG5nXCI7XHJcbmltcG9ydCBtYWduaWZpZXJXZWJwIGZyb20gXCIuLi9pbWFnZXMvbWFnbmlmaWVyLndlYnBcIjtcclxuaW1wb3J0IG1hZ25pZmllclBuZyBmcm9tIFwiLi4vaW1hZ2VzL21hZ25pZmllci5wbmdcIjtcclxuXHJcbmNvbnN0IENvbXBsZXhQbG90dGVyOiBSZWFjdC5GQyA9ICgpOiBKU1guRWxlbWVudCA9PiAoXHJcblx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0PGNhbnZhcyBpZD1cIm15Q2FudmFzXCIgd2lkdGg9ezE0NDB9IGhlaWdodD17OTAwfSB0YWJJbmRleD17MH0+PC9jYW52YXM+XHJcblx0XHQ8ZGl2IGlkPVwiYWxsSW5wdXREaXZcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiIGlkPVwiaW5wdXREaXZcIj5cclxuXHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdGlkPVwibWFpbklucHV0XCJcclxuXHRcdFx0XHRcdGNvbnRlbnRFZGl0YWJsZVxyXG5cdFx0XHRcdFx0c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nPXt0cnVlfVxyXG5cdFx0XHRcdFx0YXV0b0ZvY3VzXHJcblx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG5cdFx0XHRcdFx0YXV0b0NvcnJlY3Q9XCJvZmZcIlxyXG5cdFx0XHRcdFx0YXV0b0NhcGl0YWxpemU9XCJvZmZcIlxyXG5cdFx0XHRcdFx0c3BlbGxDaGVjaz17ZmFsc2V9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIm1haW5JbnB1dFwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaG92ZXJUZXh0XCI+ZnVuY3Rpb248L3NwYW4+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIiBpZD1cIndpZHRoRGl2XCI+XHJcblx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRpZD1cIndpZHRoSW5wdXRcIlxyXG5cdFx0XHRcdFx0Y29udGVudEVkaXRhYmxlXHJcblx0XHRcdFx0XHRzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9e3RydWV9XHJcblx0XHRcdFx0XHRhdXRvRm9jdXNcclxuXHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcblx0XHRcdFx0XHRhdXRvQ29ycmVjdD1cIm9mZlwiXHJcblx0XHRcdFx0XHRhdXRvQ2FwaXRhbGl6ZT1cIm9mZlwiXHJcblx0XHRcdFx0XHRzcGVsbENoZWNrPXtmYWxzZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwid2lkdGhJbnB1dFwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaG92ZXJUZXh0XCI+d2lkdGg8L3NwYW4+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIiBpZD1cImhlaWdodERpdlwiIGhpZGRlbj5cclxuXHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdGlkPVwiaGVpZ2h0SW5wdXRcIlxyXG5cdFx0XHRcdFx0Y29udGVudEVkaXRhYmxlXHJcblx0XHRcdFx0XHRzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9e3RydWV9XHJcblx0XHRcdFx0XHRhdXRvRm9jdXNcclxuXHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcblx0XHRcdFx0XHRhdXRvQ29ycmVjdD1cIm9mZlwiXHJcblx0XHRcdFx0XHRhdXRvQ2FwaXRhbGl6ZT1cIm9mZlwiXHJcblx0XHRcdFx0XHRzcGVsbENoZWNrPXtmYWxzZX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiaGVpZ2h0SW5wdXRcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImhvdmVyVGV4dFwiPmhlaWdodDwvc3Bhbj5cclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiIGlkPVwiY2VudGVyRGl2XCI+XHJcblx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRpZD1cImNlbnRlcklucHV0XCJcclxuXHRcdFx0XHRcdGNvbnRlbnRFZGl0YWJsZVxyXG5cdFx0XHRcdFx0c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nPXt0cnVlfVxyXG5cdFx0XHRcdFx0YXV0b0ZvY3VzXHJcblx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG5cdFx0XHRcdFx0YXV0b0NvcnJlY3Q9XCJvZmZcIlxyXG5cdFx0XHRcdFx0YXV0b0NhcGl0YWxpemU9XCJvZmZcIlxyXG5cdFx0XHRcdFx0c3BlbGxDaGVjaz17ZmFsc2V9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImNlbnRlcklucHV0XCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJob3ZlclRleHRcIj5jZW50ZXI8L3NwYW4+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHsvKiBCdXR0b25zICovfVxyXG5cdFx0XHQ8ZGl2IGlkPVwicGx1c01pbnVzRGl2XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiIGlkPVwibWludXNEaXZcIiB0YWJJbmRleD17MH0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvcml6XCI+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiIGlkPVwicGx1c0RpdlwiIHRhYkluZGV4PXswfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9yaXpcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmVydFwiPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIiBpZD1cImNoZXZyb25EaXZcIiB0YWJJbmRleD17MH0+XHJcblx0XHRcdFx0XHQ8cGljdHVyZSBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiIH19PlxyXG5cdFx0XHRcdFx0XHQ8c291cmNlIHR5cGU9XCJpbWFnZS93ZWJwXCIgc3JjU2V0PXtjaGV2cm9uV2VicH0gLz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e2NoZXZyb25Qbmd9IGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJtZW51Qm94XCIgaGlkZGVuPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiIGlkPVwib3JpZ2luRGl2XCIgdGFiSW5kZXg9ezB9PlxyXG5cdFx0XHRcdFx0XHQ8cGljdHVyZSBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiIH19PlxyXG5cdFx0XHRcdFx0XHRcdDxzb3VyY2UgdHlwZT1cImltYWdlL3dlYnBcIiBzcmNTZXQ9e29XZWJwfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtvUG5nfSBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCIgaWQ9XCJBUkJ1dHRvblwiIHRhYkluZGV4PXswfT5cclxuXHRcdFx0XHRcdFx0PHBpY3R1cmUgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiB9fT5cclxuXHRcdFx0XHRcdFx0XHQ8c291cmNlIHR5cGU9XCJpbWFnZS93ZWJwXCIgc3JjU2V0PXthcldlYnB9IC8+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2FyUG5nfSBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0XCIgaWQ9XCJyc2xuQnV0dFwiIHRhYkluZGV4PXswfT5cclxuXHRcdFx0XHRcdFx0PHBpY3R1cmUgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiB9fT5cclxuXHRcdFx0XHRcdFx0XHQ8c291cmNlIHR5cGU9XCJpbWFnZS93ZWJwXCIgc3JjU2V0PXttYWduaWZpZXJXZWJwfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXttYWduaWZpZXJQbmd9IGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiIGlkPVwiY29weUJ1dHRcIiB0YWJJbmRleD17MH0+XHJcblx0XHRcdFx0XHRcdDxwaWN0dXJlIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIgfX0+XHJcblx0XHRcdFx0XHRcdFx0PHNvdXJjZSB0eXBlPVwiaW1hZ2Uvd2VicFwiIHNyY1NldD17bGlua1dlYnB9IC8+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2xpbmtQbmd9IGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIiBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIiBpZD1cImluZm9CdXR0XCIgdGFiSW5kZXg9ezB9PlxyXG5cdFx0XHRcdFx0XHQ8cGljdHVyZSBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiIH19PlxyXG5cdFx0XHRcdFx0XHRcdDxzb3VyY2UgdHlwZT1cImltYWdlL3dlYnBcIiBzcmNTZXQ9e2lXZWJwfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtpUG5nfSBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8ZGl2IGlkPVwiZXJyb3JEaXZcIj48L2Rpdj5cclxuXHQ8L1JlYWN0LkZyYWdtZW50PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcGxleFBsb3R0ZXI7XHJcblxyXG5jb25zdCBNSU5fUElYRUxTID0gMjA7XHJcbmZ1bmN0aW9uIGRnZWJpKGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSE7XHJcbn1cclxuY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xyXG5cclxudmFyIGxhc3RUaW1lb3V0OiBOb2RlSlMuVGltZW91dCB8IHVuZGVmaW5lZDtcclxuXHJcbmludGVyZmFjZSBJSFRNTElucHV0V2l0aE1lbW9yeSBleHRlbmRzIEhUTUxJbnB1dEVsZW1lbnQge1xyXG5cdGxhc3RWYWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG52YXIgaW5wdXQ6IElIVE1MSW5wdXRXaXRoTWVtb3J5O1xyXG52YXIgd2lkdGhJbnB1dDogSUhUTUxJbnB1dFdpdGhNZW1vcnk7XHJcbnZhciBoZWlnaHRJbnB1dDogSUhUTUxJbnB1dFdpdGhNZW1vcnk7XHJcbnZhciBjZW50ZXJJbnB1dDogSUhUTUxJbnB1dFdpdGhNZW1vcnk7XHJcbnZhciBpbnB1dEJveGVzID0gW1wibWFpbklucHV0XCIsIFwid2lkdGhJbnB1dFwiLCBcImhlaWdodElucHV0XCIsIFwiY2VudGVySW5wdXRcIl07XHJcbnZhciBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG52YXIgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbnZhciBpbWFnZURhdGE6IEltYWdlRGF0YTtcclxudmFyIGRhdGE6IFVpbnQ4Q2xhbXBlZEFycmF5O1xyXG5cclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG5cdHZpZXcuaGFzQ2hhbmdlZCA9IHRydWU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbldpbmRvd0xvYWQoKTogdm9pZCB7XHJcblx0aW5wdXQgPSBkZ2ViaShcIm1haW5JbnB1dFwiKSBhcyBJSFRNTElucHV0V2l0aE1lbW9yeTtcclxuXHR3aWR0aElucHV0ID0gZGdlYmkoXCJ3aWR0aElucHV0XCIpIGFzIElIVE1MSW5wdXRXaXRoTWVtb3J5O1xyXG5cdGhlaWdodElucHV0ID0gZGdlYmkoXCJoZWlnaHRJbnB1dFwiKSBhcyBJSFRNTElucHV0V2l0aE1lbW9yeTtcclxuXHRjZW50ZXJJbnB1dCA9IGRnZWJpKFwiY2VudGVySW5wdXRcIikgYXMgSUhUTUxJbnB1dFdpdGhNZW1vcnk7XHJcblx0aW5wdXRCb3hlcyA9IFtcIm1haW5JbnB1dFwiLCBcIndpZHRoSW5wdXRcIiwgXCJoZWlnaHRJbnB1dFwiLCBcImNlbnRlcklucHV0XCJdO1xyXG5cdGNhbnZhcyA9IGRnZWJpKFwibXlDYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0Y3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSE7XHJcblx0aW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cdGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcclxuXHJcblx0ZGdlYmkoXCJhbGxJbnB1dERpdlwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbklucHV0S2V5KTtcclxuXHRkZ2ViaShcInBsdXNNaW51c0RpdlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25CdXR0b25DbGljayk7XHJcblx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uQ2FudmFzS2V5KTtcclxuXHRmb3IgKGxldCBuYW1lIG9mIFtcImlucHV0RGl2XCIsIFwid2lkdGhEaXZcIiwgXCJoZWlnaHREaXZcIl0pIHtcclxuXHRcdGRnZWJpKG5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbklucHV0RGl2Q2xpY2spO1xyXG5cdH1cclxuXHJcblx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRsZXQgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cdGlmIChoYXNoICE9PSBcIlwiICYmIGhhc2ggIT09IFwiI1wiKSB7XHJcblx0XHRzZXRUaW1lb3V0KGRyYXdGcm9tSGFzaCwgMCwgaGFzaC5yZXBsYWNlKC8lMjAvZywgXCIgXCIpKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c2V0Q2VudGVyKDAsIDApO1xyXG5cdH1cclxuXHR2aWV3Lmhhc0NoYW5nZWQgPSB0cnVlO1xyXG5cclxuXHQvKipcclxuXHQgKiBCZWdpbiB0aGUgZHJhZ1xyXG5cdCAqL1xyXG5cdGNhbnZhcy5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcblx0XHRpZiAoZS5idXR0b25zID09PSAyKSB7XHJcblx0XHRcdC8vIHJpZ2h0LWNsaWNrXHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNhbnZhcy5vbm1vdXNlbW92ZSA9IGRyYWdDYW52YXM7XHJcblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYWJvcnRJZkVzYyk7XHJcblx0XHRkcmFnU3RhcnQgPSBbZS5wYWdlWCwgZS5wYWdlWV07XHJcblx0fTtcclxuXHQvKipcclxuXHQgKiBXaGVuIHRoZSBtb3VzZSBidXR0b24gaXMgcmVsZWFzZWRcclxuXHQgKi9cclxuXHRjYW52YXMub25tb3VzZXVwID0gZnVuY3Rpb24gKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuXHRcdGNhbnZhcy5vbm1vdXNlbW92ZSA9IG51bGw7XHJcblx0XHRjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYWJvcnRJZkVzYyk7XHJcblx0XHRpZiAoZHJhZ1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKE1hdGguYWJzKGUucGFnZVggLSBkcmFnU3RhcnRbMF0pIDwgNSAmJiBNYXRoLmFicyhlLnBhZ2VZIC0gZHJhZ1N0YXJ0WzFdKSA8IDUpIHtcclxuXHRcdFx0Ly8gcHJvYnMgd2Fzbid0IHRyeWluZyB0byBkcmFnXHJcblx0XHRcdGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuXHRcdFx0aWYgKGxhc3RUaW1lb3V0ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRkcmF3KHZpZXcubGFzdEZ1bmMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRyYWdTdGFydCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHJhdGlvID0gaW1hZ2VEYXRhLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRsZXQgZHggPSAoKGUucGFnZVggLSBkcmFnU3RhcnRbMF0pIC8gY2FudmFzLndpZHRoKSAqIHZpZXcud2lkdGggKiByYXRpbztcclxuXHRcdGxldCBkeSA9IC0oKGUucGFnZVkgLSBkcmFnU3RhcnRbMV0pIC8gY2FudmFzLmhlaWdodCkgKiB2aWV3LmhlaWdodCAqIHJhdGlvO1xyXG5cdFx0dmlldy5jZW50ZXIgPSBbdmlldy5jZW50ZXJbMF0gLSBkeCwgdmlldy5jZW50ZXJbMV0gLSBkeV07XHJcblx0XHRzZXRDZW50ZXIodmlldy5jZW50ZXJbMF0sIHZpZXcuY2VudGVyWzFdKTtcclxuXHRcdGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHRcdGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcclxuXHJcblx0XHRkcmF3KHZpZXcubGFzdEZ1bmMpO1xyXG5cdFx0ZHJhZ1N0YXJ0ID0gdW5kZWZpbmVkO1xyXG5cdH07XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbldpbmRvd0xvYWQsIGZhbHNlKTtcclxuXHJcbi8vI3JlZ2lvbiBWaWV3XHJcbnR5cGUgUG9pbnQgPSBbbnVtYmVyLCBudW1iZXJdO1xyXG5cclxuaW50ZXJmYWNlIElWaWV3IHtcclxuXHRjZW50ZXI6IFBvaW50O1xyXG5cdHdpZHRoOiBudW1iZXI7XHJcblx0aGVpZ2h0OiBudW1iZXI7XHJcblx0c2V0SGVpZ2h0OiAod2lkdGg6IG51bWJlcikgPT4gdm9pZDtcclxuXHRzZXRXaWR0aDogKGhlaWdodDogbnVtYmVyKSA9PiB2b2lkO1xyXG5cdG1hbnVhbGx5U2V0OiBib29sZWFuO1xyXG5cdGhhc0NoYW5nZWQ6IGJvb2xlYW47XHJcblx0bGFzdEZ1bmM6IENvbXBsZXhGdW5jdGlvbiB8IG51bGw7XHJcblx0bGFzdEZ1bmNTdHI6IHN0cmluZyB8IG51bGw7XHJcblx0Zml4QXNwZWN0UmF0aW86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCB2aWV3XHJcbiAqL1xyXG5jb25zdCB2aWV3OiBJVmlldyA9IHtcclxuXHRjZW50ZXI6IFswLCAwXSxcclxuXHR3aWR0aDogMTAsXHJcblx0aGVpZ2h0OiAod2luZG93LmlubmVySGVpZ2h0IC8gd2luZG93LmlubmVyV2lkdGgpICogMTAsXHJcblx0c2V0SGVpZ2h0OiBmdW5jdGlvbiAod2lkdGg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5oZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC8gd2luZG93LmlubmVyV2lkdGgpICogd2lkdGg7XHJcblx0fSxcclxuXHRzZXRXaWR0aDogZnVuY3Rpb24gKGhlaWdodDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLndpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0KSAqIGhlaWdodDtcclxuXHR9LFxyXG5cdG1hbnVhbGx5U2V0OiBmYWxzZSxcclxuXHRoYXNDaGFuZ2VkOiBmYWxzZSxcclxuXHRsYXN0RnVuYzogbnVsbCxcclxuXHRsYXN0RnVuY1N0cjogbnVsbCxcclxuXHRmaXhBc3BlY3RSYXRpbzogdHJ1ZSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIGNlbnRlciBvZiB0aGUgdmlld1xyXG4gKi9cclxuZnVuY3Rpb24gc2V0Q2VudGVyKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcblx0dmlldy5jZW50ZXIgPSBbeCwgeV07XHJcblx0Y2VudGVySW5wdXQudmFsdWUgPSB4ICsgXCIrXCIgKyB5ICsgXCJpXCI7XHJcblx0Y2VudGVySW5wdXQubGFzdFZhbHVlID0gY2VudGVySW5wdXQudmFsdWU7XHJcbn1cclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8jcmVnaW9uIEJ1dHRvbnNcclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgc2hvd2luZyB0aGUgcmVzdCBvZiB0aGUgYnV0dG9uc1xyXG4gKi9cclxuZnVuY3Rpb24gdG9nZ2xlTWVudSgpOiB2b2lkIHtcclxuXHRsZXQgbWVudUJveCA9IGRnZWJpKFwibWVudUJveFwiKTtcclxuXHRsZXQgY2hldnJvbkRpdiA9IGRnZWJpKFwiY2hldnJvbkRpdlwiKTtcclxuXHRpZiAoY2hldnJvbkRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJ1cHNpZGVkb3duXCIpKSB7XHJcblx0XHRjaGV2cm9uRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJ1cHNpZGVkb3duXCIpO1xyXG5cdFx0bWVudUJveC5oaWRkZW4gPSB0cnVlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjaGV2cm9uRGl2LmNsYXNzTGlzdC5hZGQoXCJ1cHNpZGVkb3duXCIpO1xyXG5cdFx0bWVudUJveC5oaWRkZW4gPSBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAoVW4pRml4IGFzcGVjdCByYXRpbyBidXR0b25cclxuICovXHJcbmZ1bmN0aW9uIHNob3dPckhpZGVIZWlnaHQoKTogdm9pZCB7XHJcblx0aWYgKHZpZXcuZml4QXNwZWN0UmF0aW8pIHtcclxuXHRcdChkZ2ViaShcImhlaWdodERpdlwiKSBhcyBIVE1MRGl2RWxlbWVudCkuaGlkZGVuID0gZmFsc2U7XHJcblx0XHR2aWV3LmZpeEFzcGVjdFJhdGlvID0gZmFsc2U7XHJcblx0fSBlbHNlIHtcclxuXHRcdChkZ2ViaShcImhlaWdodERpdlwiKSBhcyBIVE1MRWxlbWVudCkuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdHZpZXcuZml4QXNwZWN0UmF0aW8gPSB0cnVlO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE9yaWdpbiBidXR0b24gLSBjZW50ZXJzIGF0IDAgKyAwaVxyXG4gKi9cclxuZnVuY3Rpb24gY2VudGVyKCk6IHZvaWQge1xyXG5cdGlmICh2aWV3LmNlbnRlclswXSA9PT0gMCAmJiB2aWV3LmNlbnRlclsxXSA9PT0gMCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHR2aWV3LmNlbnRlciA9IFswLCAwXTtcclxuXHR2aWV3LndpZHRoID0gMTA7XHJcblx0dmlldy5zZXRIZWlnaHQodmlldy53aWR0aCk7XHJcblx0c2V0Q2VudGVyKDAsIDApO1xyXG5cdHZpZXcuaGFzQ2hhbmdlZCA9IHRydWU7XHJcblx0dmlldy5tYW51YWxseVNldCA9IGZhbHNlO1xyXG5cdGRyYXcodmlldy5sYXN0RnVuYyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3B5IGxpbmsgdG8gY2xpcGJvYXJkIGJ1dHRvblxyXG4gKi9cclxuZnVuY3Rpb24gY29weUxpbmsoKTogdm9pZCB7XHJcblx0aWYgKHZpZXcubGFzdEZ1bmNTdHIgPT09IG51bGwpIHtcclxuXHRcdGxvZ0Vycm9yKFwiTGluayBjb3VsZCBub3QgYmUgY29waWVkOiBubyBmdW5jdGlvbi5cIik7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGxldCBsaW5rID0gXCJodHRwczovL3BpbGxpZzMuZ2l0aHViLmlvL2NvbXBsZXguaHRtbCNcIjtcclxuXHRsaW5rICs9IHZpZXcubGFzdEZ1bmNTdHIucmVwbGFjZSgvIC9nLCBcIiUyMFwiKSArIFwiJlwiOyAvLyBGdW5jdGlvblxyXG5cdGxpbmsgKz0gdmlldy5jZW50ZXJbMF0gKyBcIixcIiArIHZpZXcuY2VudGVyWzFdICsgXCImXCI7IC8vIENlbnRlclxyXG5cdGxpbmsgKz0gdmlldy53aWR0aDtcclxuXHRpZiAoIXZpZXcuZml4QXNwZWN0UmF0aW8pIHtcclxuXHRcdGxpbmsgKz0gXCIsXCIgKyB2aWV3LmhlaWdodDtcclxuXHR9XHJcblx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobGluayk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGFuZ2UgcmVzb2x1dGlvbiBidXR0b25cclxuICovXHJcbmZ1bmN0aW9uIGNoYW5nZVJlc29sdXRpb24oKTogdm9pZCB7XHJcblx0Y29uc3QgcGl4ZWxXaWR0aFN0ciA9IHByb21wdChcclxuXHRcdFwiQ2hhbmdlIHJlc29sdXRpb246XFxuRW50ZXIgYSB3aWR0aCBmb3IgdGhlIGltYWdlIGluIHBpeGVsc1wiLFxyXG5cdFx0Y2FudmFzLndpZHRoLnRvU3RyaW5nKCksXHJcblx0KTtcclxuXHRpZiAocGl4ZWxXaWR0aFN0ciA9PT0gbnVsbCB8fCBwaXhlbFdpZHRoU3RyID09PSBcIlwiKSB7XHJcblx0XHRyZXR1cm47IC8vIENhbmNlbCBidXR0b25cclxuXHR9XHJcblx0bGV0IHBpeGVsV2lkdGggPSBwYXJzZUludChwaXhlbFdpZHRoU3RyKTtcclxuXHRpZiAoaXNOYU4ocGl4ZWxXaWR0aCkpIHtcclxuXHRcdHBpeGVsV2lkdGggPSBjYW52YXMud2lkdGg7XHJcblx0fVxyXG5cdHBpeGVsV2lkdGggPSBNYXRoLm1heChwaXhlbFdpZHRoLCBNSU5fUElYRUxTKTtcclxuXHJcblx0bGV0IHBpeGVsSGVpZ2h0ID0gKHZpZXcuaGVpZ2h0IC8gdmlldy53aWR0aCkgKiBwaXhlbFdpZHRoO1xyXG5cdGNhbnZhcy53aWR0aCA9IHBpeGVsV2lkdGg7XHJcblx0Y2FudmFzLmhlaWdodCA9IHBpeGVsSGVpZ2h0O1xyXG5cdHZpZXcuaGFzQ2hhbmdlZCA9IHRydWU7XHJcblxyXG5cdGRyYXcodmlldy5sYXN0RnVuYywgZmFsc2UpO1xyXG59XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbi8vI3JlZ2lvbiBEcmFnICduJyBkcm9wXHJcblxyXG52YXIgZHJhZ1N0YXJ0OiBbbnVtYmVyLCBudW1iZXJdIHwgdW5kZWZpbmVkO1xyXG5cclxuLyoqXHJcbiAqIFdoZW4gdGhlIG1vdXNlIG1vdmVzIHdoaWxlIHRoZSBkcmFnIGlzIGluIHByb2dyZXNzXHJcbiAqL1xyXG5mdW5jdGlvbiBkcmFnQ2FudmFzKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuXHRpZiAoZHJhZ1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0Y29uc3QgcmF0aW8gPSBpbWFnZURhdGEud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRjb25zdCBbZHgsIGR5XSA9IFsoZS5wYWdlWCAtIGRyYWdTdGFydFswXSkgKiByYXRpbywgKGUucGFnZVkgLSBkcmFnU3RhcnRbMV0pICogcmF0aW9dO1xyXG5cdGlmIChsYXN0VGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRjbGVhclRpbWVvdXQobGFzdFRpbWVvdXQpO1xyXG5cdFx0bGFzdFRpbWVvdXQgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cdGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCBkeCwgZHkpO1xyXG59XHJcblxyXG4vKipcclxuICogQWJvcnQgdGhlIGRyYWcgaWYgdXNlciBwcmVzc2VzIHRoZSBlc2NhcGUgYnV0dG9uXHJcbiAqL1xyXG5mdW5jdGlvbiBhYm9ydElmRXNjKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuXHRpZiAoZS5jb2RlID09PSBcIkVzY2FwZVwiKSB7XHJcblx0XHRjYW52YXMub25tb3VzZW1vdmUgPSBudWxsO1xyXG5cdFx0ZHJhZ1N0YXJ0ID0gdW5kZWZpbmVkO1xyXG5cdFx0Y2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGFib3J0SWZFc2MpO1xyXG5cdFx0Y3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xyXG5cdFx0aWYgKGxhc3RUaW1lb3V0ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0ZHJhdyh2aWV3Lmxhc3RGdW5jKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8jcmVnaW9uIFpvb20gaW4gYW5kIG91dFxyXG5cclxuLyoqXHJcbiAqIFpvb20gaW4gdG8gaGFsZiB0aGUgY3VycmVudCB3aW5kb3cgc2l6ZVxyXG4gKi9cclxuZnVuY3Rpb24gem9vbUluKCk6IHZvaWQge1xyXG5cdC8vIE1ha2UgcXVpY2sgcGl4ZWxsYXRlZCB2ZXJzaW9uIHRvIHNob3cgd2hpbGUgbG9hZGluZ1xyXG5cdGNvbnN0IFtwaXhlbFdpZHRoLCBwaXhlbEhlaWdodF0gPSBbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XTtcclxuXHRpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKFxyXG5cdFx0TWF0aC5jZWlsKHBpeGVsV2lkdGggLyA0KSxcclxuXHRcdE1hdGguY2VpbChwaXhlbEhlaWdodCAvIDQpLFxyXG5cdFx0Zmxvb3IoKDMgKiBwaXhlbFdpZHRoKSAvIDQpLFxyXG5cdFx0Zmxvb3IoKDMgKiBwaXhlbEhlaWdodCkgLyA0KSxcclxuXHQpO1xyXG5cdGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcclxuXHRjb25zdCBuZXdEYXRhID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHBpeGVsV2lkdGggKiBwaXhlbEhlaWdodCAqIDQpO1xyXG5cdGxldCBpbmQgPSAwO1xyXG5cdGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHBpeGVsSGVpZ2h0OyByb3crKykge1xyXG5cdFx0bGV0IGRhdGFJbmQgPSBmbG9vcihyb3cgLyAyKSAqIGltYWdlRGF0YS53aWR0aCAqIDQ7XHJcblx0XHRmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBwaXhlbFdpZHRoOyBjb2wrKykge1xyXG5cdFx0XHRuZXdEYXRhW2luZF0gPSBkYXRhW2RhdGFJbmRdO1xyXG5cdFx0XHRuZXdEYXRhW2luZCArIDFdID0gZGF0YVtkYXRhSW5kICsgMV07XHJcblx0XHRcdG5ld0RhdGFbaW5kICsgMl0gPSBkYXRhW2RhdGFJbmQgKyAyXTtcclxuXHRcdFx0bmV3RGF0YVtpbmQgKyAzXSA9IGRhdGFbZGF0YUluZCArIDNdO1xyXG5cdFx0XHRpbmQgKz0gNDtcclxuXHRcdFx0aWYgKGNvbCAlIDIgPT0gMSkge1xyXG5cdFx0XHRcdGRhdGFJbmQgKz0gNDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRpbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKG5ld0RhdGEsIHBpeGVsV2lkdGgpO1xyXG5cdGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcclxuXHRjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcblx0Ly8gTm93IGRyYXcgbW9yZSBkZXRhaWxlZCBpbWFnZVxyXG5cdHZpZXcud2lkdGggLz0gMjtcclxuXHR2aWV3LmhlaWdodCAvPSAyO1xyXG5cdGRyYXcodmlldy5sYXN0RnVuYyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBab29tIG91dCB0byB0d2ljZSB0aGUgY3VycmVudCB3aW5kb3cgc2l6ZVxyXG4gKi9cclxuZnVuY3Rpb24gem9vbU91dCgpOiB2b2lkIHtcclxuXHQvLyBNYWtlIHF1aWNrIHBpeGVsbGF0ZWQgdmVyc2lvbiB0byBzaG93IHdoaWxlIGxvYWRpbmdcclxuXHRjb25zdCBbcGl4ZWxXaWR0aCwgcGl4ZWxIZWlnaHRdID0gW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF07XHJcblx0aW1hZ2VEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCk7XHJcblx0ZGF0YSA9IGltYWdlRGF0YS5kYXRhO1xyXG5cdGNvbnN0IG5ld0RhdGEgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoZmxvb3IocGl4ZWxXaWR0aCAvIDIpICogZmxvb3IocGl4ZWxIZWlnaHQgLyAyKSAqIDQpO1xyXG5cdGxldCBkYXRhSW5kID0gMCxcclxuXHRcdGluZCA9IDA7XHJcblx0Zm9yIChsZXQgcm93ID0gMDsgcm93IDwgZmxvb3IocGl4ZWxIZWlnaHQgLyAyKTsgcm93KyspIHtcclxuXHRcdGRhdGFJbmQgPSBwaXhlbFdpZHRoICogMiAqIHJvdyAqIDQ7XHJcblx0XHRmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBmbG9vcihwaXhlbFdpZHRoIC8gMik7IGNvbCsrKSB7XHJcblx0XHRcdG5ld0RhdGFbaW5kXSA9IGRhdGFbZGF0YUluZF07XHJcblx0XHRcdG5ld0RhdGFbaW5kICsgMV0gPSBkYXRhW2RhdGFJbmQgKyAxXTtcclxuXHRcdFx0bmV3RGF0YVtpbmQgKyAyXSA9IGRhdGFbZGF0YUluZCArIDJdO1xyXG5cdFx0XHRuZXdEYXRhW2luZCArIDNdID0gZGF0YVtkYXRhSW5kICsgM107XHJcblx0XHRcdGluZCArPSA0O1xyXG5cdFx0XHRkYXRhSW5kICs9IDg7XHJcblx0XHR9XHJcblx0fVxyXG5cdGN0eC5maWxsUmVjdCgwLCAwLCBwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCk7XHJcblx0Y3R4LnB1dEltYWdlRGF0YShcclxuXHRcdG5ldyBJbWFnZURhdGEobmV3RGF0YSwgZmxvb3IocGl4ZWxXaWR0aCAvIDIpKSxcclxuXHRcdGZsb29yKHBpeGVsV2lkdGggLyA0KSxcclxuXHRcdGZsb29yKHBpeGVsSGVpZ2h0IC8gNCksXHJcblx0KTtcclxuXHRpbWFnZURhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHBpeGVsV2lkdGgsIHBpeGVsSGVpZ2h0KTtcclxuXHRkYXRhID0gaW1hZ2VEYXRhLmRhdGE7XHJcblx0Ly8gTm93IGRyYXcgbW9yZSBkZXRhaWxlZCBpbWFnZVxyXG5cdHZpZXcud2lkdGggKj0gMjtcclxuXHR2aWV3LmhlaWdodCAqPSAyO1xyXG5cdGRyYXcodmlldy5sYXN0RnVuYyk7XHJcbn1cclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8jcmVnaW9uIEtleSBwcmVzc2VzXHJcblxyXG4vKipcclxuICogS2V5IHByZXNzZWQgd2hlbiBmb2N1cyBpcyBvbiB0aGUgY2FudmFzXHJcbiAqL1xyXG5mdW5jdGlvbiBvbkNhbnZhc0tleShlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcblx0aWYgKGUuaXNDb21wb3NpbmcpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0c3dpdGNoIChlLmNvZGUpIHtcclxuXHRcdGNhc2UgXCJUYWJcIjpcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRpbnB1dC5mb2N1cygpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJFcXVhbFwiOlxyXG5cdFx0XHRpZiAoIWNvbnRyb2xLZXlIZWxkKGUpKSB7XHJcblx0XHRcdFx0em9vbUluKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiTWludXNcIjpcclxuXHRcdFx0aWYgKCFjb250cm9sS2V5SGVsZChlKSkge1xyXG5cdFx0XHRcdHpvb21PdXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIG9uZSBvZiB0aGUgJ2NvbnRyb2xsaW5nJyBrZXlzIGlzIGhlbGRcclxuICovXHJcbmZ1bmN0aW9uIGNvbnRyb2xLZXlIZWxkKGU6IEtleWJvYXJkRXZlbnQpOiBib29sZWFuIHtcclxuXHRyZXR1cm4gZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBlLmFsdEtleTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldHMgZm9jdXMgZnJvbSB0aGUgY29udGFpbmluZyBkaXYgdG8gdGhlIDx0ZXh0YXJlYT4gLSBvdGhlcndpc2UgdGhlIHVzZXIgY291bGRcclxuICogY2xpY2sgb24gYSB0aW55IHBsYWNlIGluIHRoZSBpbnB1dCBib3ggYW5kIG5vdCBnZXQgdG8gdGhlIGlucHV0IGZpZWxkXHJcbiAqL1xyXG5mdW5jdGlvbiBvbklucHV0RGl2Q2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG5cdGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuXHRcdChlLnRhcmdldCBhcyBhbnkpLmNoaWxkcmVuWzBdLmZvY3VzKCk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogSGFuZGxlciB3aGVuIGEgYnV0dG9uIGlzIHByZXNzZWQgaW4gb25lIG9mIHRoZSBpbnB1dCBib3hlcyBvciBidXR0b25zXHJcbiAqL1xyXG5mdW5jdGlvbiBvbklucHV0S2V5KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuXHRpZiAoZS5pc0NvbXBvc2luZykge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRsZXQgZWxlbSA9IChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaWQ7XHJcblx0aWYgKGlucHV0Qm94ZXMuaW5kZXhPZihlbGVtKSA+PSAwKSB7XHJcblx0XHRpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRkcmF3T25FbnRlcigpO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRpZiAoZS5jb2RlID09PSBcIkVudGVyXCIgfHwgZS5jb2RlID09PSBcIlNwYWNlXCIpIHtcclxuXHRcdFx0aWYgKGVsZW0gPT09IFwiaG9yaXpcIiB8fCBlbGVtID09PSBcInZlcnRcIikge1xyXG5cdFx0XHRcdGVsZW0gPSAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KS5pZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRkb0Z1bmNGb3JFbGVtKGVsZW0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXIgd2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAqL1xyXG5mdW5jdGlvbiBvbkJ1dHRvbkNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuXHRsZXQgZWxlbSA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cdGlmIChbXCJob3JpelwiLCBcInZlcnRcIl0uaW5kZXhPZigoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdFswXSkgPj0gMCkge1xyXG5cdFx0ZWxlbSA9IChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuXHR9XHJcblx0d2hpbGUgKFxyXG5cdFx0IVtcclxuXHRcdFx0XCJwbHVzRGl2XCIsXHJcblx0XHRcdFwibWludXNEaXZcIixcclxuXHRcdFx0XCJvcmlnaW5EaXZcIixcclxuXHRcdFx0XCJjaGV2cm9uRGl2XCIsXHJcblx0XHRcdFwiY29weUJ1dHRcIixcclxuXHRcdFx0XCJpbmZvQnV0dFwiLFxyXG5cdFx0XHRcIkFSQnV0dG9uXCIsXHJcblx0XHRcdFwicnNsbkJ1dHRcIixcclxuXHRcdF0uaW5jbHVkZXMoZWxlbS5pZClcclxuXHQpIHtcclxuXHRcdGlmIChlbGVtLnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcclxuXHRcdH1cclxuXHR9XHJcblx0ZG9GdW5jRm9yRWxlbShlbGVtLmlkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEV4ZWN1dGUgdGhlIGNvcnJlc3BvbmRpbmcgZnVuY3Rpb24gd2hlbiBhIGRvYyBlbGVtZW50IGlzIGNsaWNrZWRcclxuICovXHJcbmZ1bmN0aW9uIGRvRnVuY0ZvckVsZW0oZWxlbTogc3RyaW5nKSB7XHJcblx0c3dpdGNoIChlbGVtKSB7XHJcblx0XHRjYXNlIFwicGx1c0RpdlwiOlxyXG5cdFx0XHR6b29tSW4oKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwibWludXNEaXZcIjpcclxuXHRcdFx0em9vbU91dCgpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJvcmlnaW5EaXZcIjpcclxuXHRcdFx0Y2VudGVyKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImNoZXZyb25EaXZcIjpcclxuXHRcdFx0dG9nZ2xlTWVudSgpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJjb3B5QnV0dFwiOlxyXG5cdFx0XHRjb3B5TGluaygpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJpbmZvQnV0dFwiOlxyXG5cdFx0XHR3aW5kb3cub3BlbihcIi9jb21wbGV4LWluZm8uaHRtbFwiKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiQVJCdXR0b25cIjpcclxuXHRcdFx0c2hvd09ySGlkZUhlaWdodCgpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJyc2xuQnV0dFwiOlxyXG5cdFx0XHRjaGFuZ2VSZXNvbHV0aW9uKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufVxyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG4vLyNyZWdpb24gRHJhd1xyXG5cclxuLyoqXHJcbiAqIERyYXcgd2hhdCB0aGUgdXNlciBlbnRlcmVkXHJcbiAqL1xyXG5mdW5jdGlvbiBkcmF3T25FbnRlcigpIHtcclxuXHRsZXQgZjogQ29tcGxleEZ1bmN0aW9uO1xyXG5cdGxldCBzdHIgPSBpbnB1dC52YWx1ZTtcclxuXHRsZXQgd2lkdGggPSB3aWR0aElucHV0LnZhbHVlO1xyXG5cdGxldCBoZWlnaHQgPSBoZWlnaHRJbnB1dC52YWx1ZTtcclxuXHRsZXQgY2VudGVyID0gY2VudGVySW5wdXQudmFsdWU7XHJcblxyXG5cdGlmIChjZW50ZXIgIT09IGNlbnRlcklucHV0Lmxhc3RWYWx1ZSkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dmlldy5jZW50ZXIgPSBzdHJUb051bShjZW50ZXIpO1xyXG5cdFx0XHRjZW50ZXJJbnB1dC5sYXN0VmFsdWUgPSBjZW50ZXI7XHJcblx0XHRcdHZpZXcuaGFzQ2hhbmdlZCA9IHRydWU7XHJcblx0XHR9IGNhdGNoIChlOiBhbnkpIHtcclxuXHRcdFx0Ly8gSnVzdCB1c2UgbGFzdCB2YWxpZCBjZW50ZXJcclxuXHRcdFx0bG9nRXJyb3IoZSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmICh3aWR0aCAhPT0gd2lkdGhJbnB1dC5sYXN0VmFsdWUpIHtcclxuXHRcdHNldFZpZXdIVyhcIndpZHRoXCIsIHdpZHRoSW5wdXQudmFsdWUpO1xyXG5cdFx0dmlldy5tYW51YWxseVNldCA9IHRydWU7XHJcblx0fVxyXG5cdGlmIChoZWlnaHQgIT09IGhlaWdodElucHV0Lmxhc3RWYWx1ZSkge1xyXG5cdFx0c2V0Vmlld0hXKFwiaGVpZ2h0XCIsIGhlaWdodElucHV0LnZhbHVlKTtcclxuXHRcdHZpZXcubWFudWFsbHlTZXQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0aWYgKHR5cGVvZiBzdHIgIT09IFwic3RyaW5nXCIgfHwgc3RyID09IFwiXCIpIHJldHVybjtcclxuXHR0cnkge1xyXG5cdFx0ZiA9IHN0clRvRnVuYyhzdHIpO1xyXG5cdH0gY2F0Y2ggKGU6IGFueSkge1xyXG5cdFx0bG9nRXJyb3IoZSk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGRyYXcoZiwgdmlldy5sYXN0RnVuY1N0ciAhPT0gc3RyKTtcclxuXHR2aWV3Lmxhc3RGdW5jU3RyID0gc3RyO1xyXG59XHJcblxyXG4vKipcclxuICogU2V0IHRoZSBoZWlnaHQgb3Igd2lkdGggb2YgdGhlIHZpZXdcclxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGVydHkgd2FzIGNoYW5nZWRcclxuICovXHJcbmZ1bmN0aW9uIHNldFZpZXdIVyhwcm9wOiBcIndpZHRoXCIgfCBcImhlaWdodFwiLCB2YWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdGlmICh2YWwgPT09IFwiXCIpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0bGV0IG5ld1ZhbCA9IHBhcnNlRmxvYXQodmFsKTtcclxuXHRpZiAodHlwZW9mIG5ld1ZhbCAhPT0gXCJudW1iZXJcIiB8fCBuZXdWYWwgPD0gMCB8fCBpc05hTihuZXdWYWwpIHx8IG5ld1ZhbCA9PT0gSW5maW5pdHkpIHtcclxuXHRcdGxvZ0Vycm9yKHByb3BbMF0udG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSkgKyBcIiBzaG91bGQgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7XHJcblx0fSBlbHNlIGlmIChuZXdWYWwgIT09IHZpZXdbcHJvcF0pIHtcclxuXHRcdHZpZXdbcHJvcF0gPSBuZXdWYWw7XHJcblx0XHR2aWV3Lmhhc0NoYW5nZWQgPSB0cnVlO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZVxyXG4gKiBAcGFyYW0gZSBUaGUgZXJyb3IgbWVzc2FnZVxyXG4gKiBAcGFyYW0gbm90QW5FcnJvciBUcnVlIGlmIHRoaXMgaXMgbW9yZSBvZiBhICdub3RpZmljYXRpb24nIHRoYW4gYW4gZXJyb3IgLSB0aGUgZGl2IHdpbGwgYmUgZ3JleSByYXRoZXIgdGhhbiB5ZWxsb3dcclxuICovXHJcbmZ1bmN0aW9uIGxvZ0Vycm9yKGU6IHN0cmluZywgbm90QW5FcnJvcjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcblx0bGV0IGNzc0NsYXNzOiBzdHJpbmcgPSBcIlwiO1xyXG5cdGxldCBlcnJvckRpdiA9IGRnZWJpKFwiZXJyb3JEaXZcIik7XHJcblx0aWYgKCFub3RBbkVycm9yKSB7XHJcblx0XHRlcnJvckRpdi5pbm5lckhUTUwgPSBcIuKdlyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1wiICsgZSArIFwiJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A74p2XXCI7XHJcblx0XHRjc3NDbGFzcyA9IFwiYW5FcnJvclwiOyAvLyB5ZWxsb3dcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZXJyb3JEaXYuaW5uZXJIVE1MID0gXCLinZcmbmJzcDtcIiArIGUgKyBcIiZuYnNwO+Kdl1wiO1xyXG5cdFx0Y3NzQ2xhc3MgPSBcIm5vdEFuRXJyb3JcIjsgLy8gZ3JleVxyXG5cdH1cclxuXHJcblx0ZXJyb3JEaXYuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcblx0ZXJyb3JEaXYuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcblx0c2V0VGltZW91dChcclxuXHRcdChlZDogSFRNTEVsZW1lbnQpID0+IHtcclxuXHRcdFx0ZWQuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XHJcblx0XHRcdGVkLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xyXG5cdFx0fSxcclxuXHRcdDQwMDAsXHJcblx0XHRlcnJvckRpdixcclxuXHQpO1xyXG59XHJcblxyXG50eXBlIERyYXdDYWxsYmFjayA9ICgpID0+IHZvaWQ7XHJcbnR5cGUgUGl4ZWxUb0Nvb3Jkc0Z1bmN0aW9uID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiBbbnVtYmVyLCBudW1iZXJdO1xyXG50eXBlIFNjYWxlTW9kRnVuY3Rpb24gPSAoYXJnOiBudW1iZXIpID0+IG51bWJlcjtcclxuXHJcbi8qKlxyXG4gKiBEcmF3IHRoZSBlbnRlcmVkIGZ1bmN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBkcmF3KGY6IENvbXBsZXhGdW5jdGlvbiB8IG51bGwsIHNob3dMb3dSZXM6IGJvb2xlYW4gPSBmYWxzZSwgY2FsbGJhY2s/OiBEcmF3Q2FsbGJhY2spOiB2b2lkIHtcclxuXHRpZiAoZiA9PT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHR2aWV3Lmxhc3RGdW5jID0gZjtcclxuXHRsZXQgcGl4ZWxXaWR0aCA9IGNhbnZhcy53aWR0aDtcclxuXHRsZXQgcGl4ZWxIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cdGlmICh2aWV3Lmhhc0NoYW5nZWQpIHtcclxuXHRcdGlmICh2aWV3LmZpeEFzcGVjdFJhdGlvIHx8ICF2aWV3Lm1hbnVhbGx5U2V0KSB7XHJcblx0XHRcdHZpZXcuc2V0SGVpZ2h0KHZpZXcud2lkdGgpO1xyXG5cdFx0fVxyXG5cdFx0aW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCk7XHJcblx0XHRkYXRhID0gaW1hZ2VEYXRhLmRhdGE7XHJcblx0XHRzaG93TG93UmVzID0gdHJ1ZTtcclxuXHRcdHZpZXcuaGFzQ2hhbmdlZCA9IGZhbHNlO1xyXG5cdH1cclxuXHR3aWR0aElucHV0LnZhbHVlID0gdmlldy53aWR0aC50b1N0cmluZygpO1xyXG5cdGhlaWdodElucHV0LnZhbHVlID0gdmlldy5oZWlnaHQudG9TdHJpbmcoKTtcclxuXHR3aWR0aElucHV0Lmxhc3RWYWx1ZSA9IHdpZHRoSW5wdXQudmFsdWU7XHJcblx0aGVpZ2h0SW5wdXQubGFzdFZhbHVlID0gaGVpZ2h0SW5wdXQudmFsdWU7XHJcblx0aWYgKGxhc3RUaW1lb3V0ICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdGNsZWFyVGltZW91dChsYXN0VGltZW91dCk7XHJcblx0fVxyXG5cdGxldCB0b0Nvb3JkcyA9IGdldFBpeGVsVG9Db29yZHMocGl4ZWxXaWR0aCwgcGl4ZWxIZWlnaHQpO1xyXG5cdGxldCBzY2FsZU1vZCA9IGdldFNjYWxlTW9kKGYsIHRvQ29vcmRzLCBwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCk7XHJcblxyXG5cdGlmIChzaG93TG93UmVzKSB7XHJcblx0XHRkcmF3TG93UmVzKGYsIHRvQ29vcmRzLCBzY2FsZU1vZCwgcGl4ZWxXaWR0aCwgcGl4ZWxIZWlnaHQpO1xyXG5cdH1cclxuXHRsYXN0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0ZHJhd1RpbWVvdXQoZiwgMCwgdG9Db29yZHMsIHNjYWxlTW9kLCBwaXhlbFdpZHRoLCBwaXhlbEhlaWdodCwgY2FsbGJhY2spO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRHJhdyBhIGxvdyByZXNvbHV0aW9uIHZlcnNpb24gb2YgdGhlIGZ1bmN0aW9uIHdoaWxlIHRoZSBmdWxsIGltYWdlIGxvYWRzXHJcbiAqL1xyXG5mdW5jdGlvbiBkcmF3TG93UmVzKFxyXG5cdGY6IENvbXBsZXhGdW5jdGlvbixcclxuXHR0b0Nvb3JkczogUGl4ZWxUb0Nvb3Jkc0Z1bmN0aW9uLFxyXG5cdHNjYWxlTW9kOiBTY2FsZU1vZEZ1bmN0aW9uLFxyXG5cdHdpZHRoOiBudW1iZXIsXHJcblx0aGVpZ2h0OiBudW1iZXIsXHJcbik6IHZvaWQge1xyXG5cdGxldCBpbmQ6IG51bWJlcjtcclxuXHRmb3IgKGxldCByb3cgPSAwOyByb3cgPCBNYXRoLmNlaWwoaGVpZ2h0IC8gTUlOX1BJWEVMUyk7IHJvdysrKSB7XHJcblx0XHRmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBNYXRoLmNlaWwod2lkdGggLyBNSU5fUElYRUxTKTsgY29sKyspIHtcclxuXHRcdFx0bGV0IGkgPSBjb2wgKiBNSU5fUElYRUxTO1xyXG5cdFx0XHRsZXQgaiA9IHJvdyAqIE1JTl9QSVhFTFM7XHJcblx0XHRcdGxldCByZXMgPSBmKHRvQ29vcmRzKGkgKyBNSU5fUElYRUxTIC8gMiwgaiArIE1JTl9QSVhFTFMgLyAyKSk7XHJcblx0XHRcdGxldCBbciwgZywgYl0gPSBobDJyZ2IoQXJnKHJlcylbMF0sIHNjYWxlTW9kKE1vZChyZXMpWzBdKSk7XHJcblx0XHRcdGxldCBiYXNlSW5kID0gKGluZCA9IHdpZHRoICogNCAqIGogKyA0ICogaSk7XHJcblx0XHRcdGZvciAoaiA9IDA7IGogPCBNSU5fUElYRUxTOyBqKyspIHtcclxuXHRcdFx0XHRpbmQgPSBiYXNlSW5kICsgd2lkdGggKiA0ICogajtcclxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgTUlOX1BJWEVMUzsgaSsrKSB7XHJcblx0XHRcdFx0XHRkYXRhW2luZF0gPSByO1xyXG5cdFx0XHRcdFx0ZGF0YVtpbmQgKyAxXSA9IGc7XHJcblx0XHRcdFx0XHRkYXRhW2luZCArIDJdID0gYjtcclxuXHRcdFx0XHRcdGRhdGFbaW5kICsgM10gPSAyNTU7IC8vIEFsd2F5cyAyNTVcclxuXHRcdFx0XHRcdGluZCArPSA0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEcmF3IGltYWdlIGFuZCB1cGRhdGUgc2NyZWVuIGV2ZXJ5IGZldyBjb2x1bW5zXHJcbiAqL1xyXG5mdW5jdGlvbiBkcmF3VGltZW91dChcclxuXHRmOiBDb21wbGV4RnVuY3Rpb24sXHJcblx0aTogbnVtYmVyLFxyXG5cdHRvQ29vcmRzOiBQaXhlbFRvQ29vcmRzRnVuY3Rpb24sXHJcblx0c2NhbGVNb2Q6IFNjYWxlTW9kRnVuY3Rpb24sXHJcblx0d2lkdGg6IG51bWJlcixcclxuXHRoZWlnaHQ6IG51bWJlcixcclxuXHRjYWxsYmFjazogRHJhd0NhbGxiYWNrIHwgdW5kZWZpbmVkLFxyXG4pOiB2b2lkIHtcclxuXHRpZiAoaSA+PSB3aWR0aCkge1xyXG5cdFx0aWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdH1cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGZvciAobGV0IGsgPSAwOyBrIDwgNSAmJiBpIDwgd2lkdGg7IGsrKykge1xyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xyXG5cdFx0XHRjb25zdCBpbmQgPSB3aWR0aCAqIDQgKiBqICsgNCAqIGk7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGYodG9Db29yZHMoaSwgaikpO1xyXG5cdFx0XHRjb25zdCBbciwgZywgYl0gPSBobDJyZ2IoQXJnKHJlcylbMF0sIHNjYWxlTW9kKE1vZChyZXMpWzBdKSk7XHJcblx0XHRcdGRhdGFbaW5kXSA9IHI7XHJcblx0XHRcdGRhdGFbaW5kICsgMV0gPSBnO1xyXG5cdFx0XHRkYXRhW2luZCArIDJdID0gYjtcclxuXHRcdFx0ZGF0YVtpbmQgKyAzXSA9IDI1NTsgLy8gQWx3YXlzIDI1NVxyXG5cdFx0fVxyXG5cdFx0aSsrO1xyXG5cdH1cclxuXHRjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcblx0bGFzdFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdGRyYXdUaW1lb3V0KGYsIGksIHRvQ29vcmRzLCBzY2FsZU1vZCwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCB0dXJuIGEgbW9kdWx1cyBpbiBbMCwgSW5maW5pdHkpIGludG8gYSBsaWdodG5lc3MgaW4gWzAsIDFdXHJcbiAqIGJhc2VkIG9uIHRoZSBtZWRpYW4gJiBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIGlucHV0IGZ1bmN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTY2FsZU1vZChcclxuXHRmOiBDb21wbGV4RnVuY3Rpb24sXHJcblx0dG9Db29yZHM6IFBpeGVsVG9Db29yZHNGdW5jdGlvbixcclxuXHR3aWR0aDogbnVtYmVyLFxyXG5cdGhlaWdodDogbnVtYmVyLFxyXG4pOiBTY2FsZU1vZEZ1bmN0aW9uIHtcclxuXHRsZXQgbW9kcyA9IFtdO1xyXG5cdGxldCBzYW1wbGVzID0gNjtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpICs9IGZsb29yKHdpZHRoIC8gc2FtcGxlcykpIHtcclxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqICs9IGZsb29yKGhlaWdodCAvIHNhbXBsZXMpKSB7XHJcblx0XHRcdGNvbnN0IG1vZCA9IE1vZChmKHRvQ29vcmRzKGksIGopKSlbMF07XHJcblx0XHRcdGlmICghaXNOYU4obW9kKSAmJiBtb2QgIT09IEluZmluaXR5ICYmIG1vZCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0bW9kcy5wdXNoKG1vZCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKG1vZHMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRyZXR1cm4gKF94KSA9PiAwOyAvLyBnaXZlIHVwLlxyXG5cdH1cclxuXHRsZXQgYXZnID0gZ2V0TWVkaWFuKG1vZHMpO1xyXG5cdGxldCBtYXggPSBNYXRoLm1heCguLi5tb2RzKTtcclxuXHRsZXQgY291bnQgPSAwO1xyXG5cdGxldCBzZCA9IE1hdGguc3FydChcclxuXHRcdG1vZHNcclxuXHRcdFx0Lm1hcCgoeCkgPT4gKHggLSBhdmcpICoqIDIpXHJcblx0XHRcdC5yZWR1Y2UoKHgsIHkpID0+IHtcclxuXHRcdFx0XHRpZiAoeSA9PT0gSW5maW5pdHkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB4O1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb3VudCsrO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHggKyB5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMCksXHJcblx0KTtcclxuXHRpZiAoY291bnQgIT09IDApIHtcclxuXHRcdHNkID0gc2QgLyBjb3VudDtcclxuXHR9XHJcblx0Ly8gZmluYWxseSB0aGUgYWN0dWFsIGZ1bmN0aW9uXHJcblx0Ly8gaHR0cHM6Ly93d3cuZGVzbW9zLmNvbS9jYWxjdWxhdG9yL2VmN3hjamdxdG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKHgpIHtcclxuXHRcdGlmIChpc05hTih4KSB8fCB4ID09PSBJbmZpbml0eSkge1xyXG5cdFx0XHQvLyBDb2xvciBOYU4gMSBhcyB3ZWxsIHNvIGl0J3Mgbm90IGNvbmZ1c2VkIHdpdGggemVyb3NcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRpZiAoeCA+PSBhdmcpIHtcclxuXHRcdFx0cmV0dXJuIDEgLyAoMSArIE1hdGguRSAqKiAoLSh4IC0gYXZnKSAvIDIgKiogbWF4KSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KGF2ZyAqKiAyIC0gKChNYXRoLm1heCh4LCAwKSAqIGF2ZykgKiogKDEgLyAyKSAtIGF2ZykgKiogMikgLyAoMiAqIGF2Zyk7XHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBmIHN1Y2ggdGhhdCBmKGksIGopID0gW3gsIHldIHdoZXJlIGksIGogYXJlIHRoZSBwaXhlbCBjb29yZGluYXRlcyBhbmQgeCwgeVxyXG4gKiBhcmUgdGhlIHJlYWwgYW5kIGltYWdpbmFyeSBwYXJ0c1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UGl4ZWxUb0Nvb3JkcyhwaXhlbFdpZHRoOiBudW1iZXIsIHBpeGVsSGVpZ2h0OiBudW1iZXIpOiBQaXhlbFRvQ29vcmRzRnVuY3Rpb24ge1xyXG5cdGNvbnN0IHdpZHRoID0gdmlldy53aWR0aDtcclxuXHRjb25zdCBoZWlnaHQgPSB2aWV3LmhlaWdodDtcclxuXHRyZXR1cm4gZnVuY3Rpb24gKGk6IG51bWJlciwgajogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gW1xyXG5cdFx0XHR2aWV3LmNlbnRlclswXSAtIHdpZHRoIC8gMiArIChpIC8gcGl4ZWxXaWR0aCkgKiB3aWR0aCxcclxuXHRcdFx0dmlldy5jZW50ZXJbMV0gKyBoZWlnaHQgLyAyIC0gKGogLyBwaXhlbEhlaWdodCkgKiBoZWlnaHQsXHJcblx0XHRdO1xyXG5cdH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIG1lZGlhbiB2YWx1ZSBpbiB0aGUgYXJyYXlcclxuICovXHJcbmZ1bmN0aW9uIGdldE1lZGlhbihhcnk6IG51bWJlcltdKTogbnVtYmVyIHtcclxuXHRhcnkuc29ydCgoeCwgeSkgPT4geSAtIHgpO1xyXG5cdGlmIChhcnkubGVuZ3RoICUgMiA9PT0gMCkge1xyXG5cdFx0cmV0dXJuIChhcnlbZmxvb3IoYXJ5Lmxlbmd0aCAvIDIpXSArIGFyeVtmbG9vcihhcnkubGVuZ3RoIC8gMikgKyAxXSkgLyAyO1xyXG5cdH1cclxuXHRyZXR1cm4gYXJ5W2Zsb29yKGFyeS5sZW5ndGggLyAyKV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUdXJucyBhIGh1ZSBpbiBbMCwgMnBpXSBhbmQgbGlnaHRuZXNzIGluIFswLCAxXSBpbnRvIGFuIFJHQiBjb2xvclxyXG4gKiBJbnB1dCBpcyBhbiBIU0wgY29sb3Igd2l0aCBTID0gMVxyXG4gKiBTb3VyY2U6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hTTF9hbmRfSFNWI0hTTF90b19SR0JcclxuICovXHJcbmZ1bmN0aW9uIGhsMnJnYihoOiBudW1iZXIsIGw6IG51bWJlcik6IG51bWJlcltdIHtcclxuXHRpZiAoaXNOYU4oaCkpIHtcclxuXHRcdGggPSAwO1xyXG5cdH1cclxuXHRoID0gcmVhbE1vZChoLCAyICogTWF0aC5QSSk7XHJcblx0bGV0IGgxID0gaCAvIChNYXRoLlBJIC8gMyk7XHJcblx0bGV0IGMgPSAxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKTtcclxuXHRsZXQgeCA9IGMgKiAoMSAtIE1hdGguYWJzKChoMSAlIDIpIC0gMSkpO1xyXG5cdGxldCByOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyO1xyXG5cdGlmIChjID09PSAwKSB7XHJcblx0XHRbciwgZywgYl0gPSBbMCwgMCwgMF07XHJcblx0fSBlbHNlIGlmIChoMSA8PSAxKSB7XHJcblx0XHRbciwgZywgYl0gPSBbYywgeCwgMF07XHJcblx0fSBlbHNlIGlmIChoMSA8PSAyKSB7XHJcblx0XHRbciwgZywgYl0gPSBbeCwgYywgMF07XHJcblx0fSBlbHNlIGlmIChoMSA8PSAzKSB7XHJcblx0XHRbciwgZywgYl0gPSBbMCwgYywgeF07XHJcblx0fSBlbHNlIGlmIChoMSA8PSA0KSB7XHJcblx0XHRbciwgZywgYl0gPSBbMCwgeCwgY107XHJcblx0fSBlbHNlIGlmIChoMSA8PSA1KSB7XHJcblx0XHRbciwgZywgYl0gPSBbeCwgMCwgY107XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIGgxIDw9IDZcclxuXHRcdFtyLCBnLCBiXSA9IFtjLCAwLCB4XTtcclxuXHR9XHJcblx0bGV0IG0gPSBsIC0gYyAvIDI7XHJcblx0cmV0dXJuIFtyLCBnLCBiXS5tYXAoKHgpID0+IGZsb29yKCh4ICsgbSkgKiAyNTUpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERyYXcgZnJvbSBhIGhhc2ggaW4gdGhlIHVybCAtIHRoaXMgaGFzIHRoZSBmb3JtICNmdW5jdGlvbiZjZW50ZXJYLGNlbnRlclkmd2lkdGgsaGVpZ2h0XHJcbiAqL1xyXG5mdW5jdGlvbiBkcmF3RnJvbUhhc2goaGFzaDogc3RyaW5nKTogdm9pZCB7XHJcblx0bGV0IFtmLCBjZW50ZXIsIHdoXSA9IGhhc2guc2xpY2UoMSkuc3BsaXQoXCImXCIpO1xyXG5cdGlmIChjZW50ZXIgIT09IHVuZGVmaW5lZCAmJiBjZW50ZXIgIT09IFwiXCIpIHtcclxuXHRcdGNvbnN0IHZpZXdDZW50ZXIgPSBjZW50ZXIuc3BsaXQoXCIsXCIpLm1hcCgoeCkgPT4gcGFyc2VGbG9hdCh4KSk7XHJcblx0XHRpZiAodmlld0NlbnRlci5sZW5ndGggPT09IDIpIHtcclxuXHRcdFx0dmlldy5jZW50ZXIgPSB2aWV3Q2VudGVyIGFzIFBvaW50O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRzZXRDZW50ZXIodmlldy5jZW50ZXJbMF0sIHZpZXcuY2VudGVyWzFdKTtcclxuXHRpZiAod2ggIT09IHVuZGVmaW5lZCAmJiB3aCAhPT0gXCJcIikge1xyXG5cdFx0bGV0IFt3aWR0aCwgaGVpZ2h0XSA9IHdoLnNwbGl0KFwiLFwiKS5tYXAoKHgpID0+IHBhcnNlRmxvYXQoeCkpO1xyXG5cdFx0dmlldy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0aWYgKGhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHZpZXcuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cdFx0XHR2aWV3Lm1hbnVhbGx5U2V0ID0gdHJ1ZTtcclxuXHRcdFx0c2hvd09ySGlkZUhlaWdodCgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmlldy5zZXRIZWlnaHQod2lkdGgpO1xyXG5cdFx0fVxyXG5cdFx0dmlldy5oYXNDaGFuZ2VkID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGlucHV0LnZhbHVlID0gZjtcclxuXHR2aWV3Lmxhc3RGdW5jU3RyID0gZjtcclxuXHJcblx0bGV0IGZ1bmM6IENvbXBsZXhGdW5jdGlvbjtcclxuXHR0cnkge1xyXG5cdFx0ZnVuYyA9IHN0clRvRnVuYyhmKTtcclxuXHR9IGNhdGNoIChlOiBhbnkpIHtcclxuXHRcdGxvZ0Vycm9yKGUpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRkcmF3KGZ1bmMsIHRydWUpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0cyB0aGUgcmVhbCB2YWx1ZSBvZiB4IG1vZHVsbyB5IChub25lIG9mIHRoYXQgJ3JlbWFpbmRlcicgc3R1ZmYpXHJcbiAqL1xyXG5mdW5jdGlvbiByZWFsTW9kKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRpZiAoeCA8IDApIHtcclxuXHRcdHJldHVybiBNYXRoLmFicyh5KSArICh4ICUgeSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiB4ICUgeTtcclxuXHR9XHJcbn1cclxuXHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJleHBvcnQge1xyXG5cdHJlYWwsXHJcblx0aW1hZyxcclxuXHRSZSxcclxuXHRJbSxcclxuXHRNb2QsXHJcblx0QXJnLFxyXG5cdGFkZCxcclxuXHRzdWJ0cmFjdCxcclxuXHRtdWx0LFxyXG5cdGRpdmlkZSxcclxuXHRleHAsXHJcblx0bG9nLFxyXG5cdHJhaXNlLFxyXG5cdHNxcnQsXHJcblx0c2luZSxcclxuXHRjb3NpbmUsXHJcblx0dGFuZ2VudCxcclxuXHRzaW5oLFxyXG5cdGNvc2gsXHJcblx0dGFuaCxcclxuXHR0ZXRyYXRlLFxyXG5cdGl0ZXJhdGUsXHJcblx0bm9ybWFsaXplVGhldGEsXHJcblx0Q29tcGxleE51bWJlcixcclxufTtcclxuXHJcbi8vIFR5cGUgZm9yIGEgY29tcGxleCBudW1iZXI6ICh4LCB5KVxyXG50eXBlIENvbXBsZXhOdW1iZXIgPSBbbnVtYmVyLCBudW1iZXJdO1xyXG4vLyBUeXBlIGZvciBhIGZ1bmN0aW9uIHRoYXQgd2UgY2FuIGl0ZXJhdGVcclxudHlwZSBJdGVyYXRlRnVuY3Rpb24gPSAoZmlyc3Q6IGFueSwgLi4ucmVzdDogYW55W10pID0+IGFueTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqXHJcbiAqICAgICAgIE1hdGggICAgICAgICAqXHJcbiAqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vI3JlZ2lvbiBNYXRoIGZ1bmN0aW9uc1xyXG5cclxuLyoqXHJcbiAqIE1ha2VzIGEgbm9ybWFsIGpzIG51bWJlciBpbnRvIGEgY29tcGxleCBudW1iZXIgeCswaVxyXG4gKi9cclxuZnVuY3Rpb24gcmVhbCh4OiBudW1iZXIpOiBDb21wbGV4TnVtYmVyIHtcclxuXHRyZXR1cm4gW3gsIDBdO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZXMgYSBub3JtYWwganMgbnVtYmVyIGludG8gYW4gaW1hZ2luYXJ5IG51bWJlciAwK3hpXHJcbiAqL1xyXG5mdW5jdGlvbiBpbWFnKHg6IG51bWJlcik6IENvbXBsZXhOdW1iZXIge1xyXG5cdHJldHVybiBbMCwgeF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSByZWFsIHBhcnQgb2YgYSBjb21wbGV4IG51bWJlclxyXG4gKi9cclxuZnVuY3Rpb24gUmUoejogQ29tcGxleE51bWJlcik6IENvbXBsZXhOdW1iZXIge1xyXG5cdHJldHVybiBbelswXSwgMF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBpbWFnaW5hcnkgcGFydCBvZiBhIGNvbXBsZXggbnVtYmVyXHJcbiAqL1xyXG5mdW5jdGlvbiBJbSh6OiBDb21wbGV4TnVtYmVyKTogQ29tcGxleE51bWJlciB7XHJcblx0cmV0dXJuIFt6WzFdLCAwXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIG1vZHVsdXMgb2YgYSBjb21wbGV4IG51bWJlciAoZGlzdGFuY2UgZnJvbSB6ZXJvKVxyXG4gKi9cclxuZnVuY3Rpb24gTW9kKHo6IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyIHtcclxuXHRyZXR1cm4gW01hdGguc3FydCh6WzBdICoqIDIgKyB6WzFdICoqIDIpLCAwXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIGFyZ3VtZW50IG9mIGEgY29tcGxleCBudW1iZXIgKGFuZ2xlIGZyb20gemVybylcclxuICovXHJcbmZ1bmN0aW9uIEFyZyh6OiBDb21wbGV4TnVtYmVyKTogQ29tcGxleE51bWJlciB7XHJcblx0cmV0dXJuIFt0b1BvbGFyKHpbMF0sIHpbMV0pWzFdLCAwXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgdHdvIGNvbXBsZXggbnVtYmVyc1xyXG4gKi9cclxuZnVuY3Rpb24gYWRkKHo6IENvbXBsZXhOdW1iZXIsIHc6IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyIHtcclxuXHRyZXR1cm4gW3pbMF0gKyB3WzBdLCB6WzFdICsgd1sxXV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdWJ0cmFjdHMgb25lIGNvbXBsZXggbnVtYmVyIGZyb20gYW5vdGhlclxyXG4gKi9cclxuZnVuY3Rpb24gc3VidHJhY3QoejogQ29tcGxleE51bWJlciwgdzogQ29tcGxleE51bWJlcik6IENvbXBsZXhOdW1iZXIge1xyXG5cdHJldHVybiBbelswXSAtIHdbMF0sIHpbMV0gLSB3WzFdXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIGNvbXBsZXggbnVtYmVyc1xyXG4gKi9cclxuZnVuY3Rpb24gbXVsdChbeDEsIHkxXTogQ29tcGxleE51bWJlciwgW3gyLCB5Ml06IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyIHtcclxuXHRyZXR1cm4gW3gxICogeDIgLSB5MSAqIHkyLCB4MSAqIHkyICsgeTEgKiB4Ml07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXZpZGVzIG9uZSBjb21wbGV4IG51bWJlciBieSBhbm90aGVyXHJcbiAqL1xyXG5mdW5jdGlvbiBkaXZpZGUoejogQ29tcGxleE51bWJlciwgdzogQ29tcGxleE51bWJlcik6IENvbXBsZXhOdW1iZXIge1xyXG5cdGxldCB6eiA9IHRvUG9sYXIoelswXSwgelsxXSk7XHJcblx0bGV0IHd3ID0gdG9Qb2xhcih3WzBdLCB3WzFdKTtcclxuXHRyZXR1cm4gZnJvbVBvbGFyKHp6WzBdICogKDEgLyB3d1swXSksIHp6WzFdIC0gd3dbMV0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBlIHRvIHRoZSBwb3dlciBvZiBhIG51bWJlcjogZV4oeCtpeSlcclxuICovXHJcbmZ1bmN0aW9uIGV4cChbeCwgeV06IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyIHtcclxuXHRpZiAoeCA9PT0gSW5maW5pdHkgfHwgeSA9PT0gSW5maW5pdHkpIHtcclxuXHRcdHJldHVybiBbSW5maW5pdHksIEluZmluaXR5XTtcclxuXHR9XHJcblx0cmV0dXJuIFtNYXRoLkUgKiogeCAqIE1hdGguY29zKHkpLCBNYXRoLkUgKiogeCAqIE1hdGguc2luKHkpXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG5hdHVyYWwgbG9nIG9mIGEgY29tcGxleCBudW1iZXI6IGxuKHopXHJcbiAqL1xyXG5mdW5jdGlvbiBsb2coejogQ29tcGxleE51bWJlcik6IENvbXBsZXhOdW1iZXIge1xyXG5cdGxldCB6eiA9IHRvUG9sYXIoelswXSwgelsxXSk7XHJcblx0cmV0dXJuIFtNYXRoLmxvZyh6elswXSksIHp6WzFdXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgb25lIGNvbXBsZXggbnVtYmVyIHJhaXNlZCB0byB0aGUgcG93ZXIgb2YgYW5vdGhlcjogel53ID0gZV4odyAqIGxuKHopKVxyXG4gKi9cclxuZnVuY3Rpb24gcmFpc2UoejogQ29tcGxleE51bWJlciwgdzogQ29tcGxleE51bWJlcik6IENvbXBsZXhOdW1iZXIge1xyXG5cdGlmICh6WzBdID09PSAwICYmIHpbMV0gPT09IDApIHtcclxuXHRcdHJldHVybiB6O1xyXG5cdH1cclxuXHRsZXQgenogPSB0b1BvbGFyKHpbMF0sIHpbMV0pO1xyXG5cdGxldCBsb2d6eiA9IHRvUG9sYXIoTWF0aC5sb2coenpbMF0pLCB6elsxXSk7XHJcblx0bGV0IHd3ID0gdG9Qb2xhcih3WzBdLCB3WzFdKTtcclxuXHRyZXR1cm4gZXhwKGZyb21Qb2xhcih3d1swXSAqIGxvZ3p6WzBdLCB3d1sxXSArIGxvZ3p6WzFdKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzcXVhcmUgcm9vdCBvZiBhIGNvbXBsZXggbnVtYmVyXHJcbiAqL1xyXG5mdW5jdGlvbiBzcXJ0KHo6IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyIHtcclxuXHRyZXR1cm4gcmFpc2UoeiwgcmVhbCgwLjUpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHNpbmUgb2YgdGhlIGNvbXBsZXggbnVtYmVyOiBzaW4geiA9ICggZV4oaSB6KSAtIGVeKC1pIHopICkgLyAoMmkpXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5lKHo6IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyIHtcclxuXHRyZXR1cm4gZGl2aWRlKHN1YnRyYWN0KGV4cChtdWx0KFswLCAxXSwgeikpLCBleHAobXVsdChbMCwgLTFdLCB6KSkpLCBbMCwgMl0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgY29zaW5lIG9mIHRoZSBjb21wbGV4IG51bWJlcjogY29zIHogPSAoIGVeKGkgeikgKyBlXigtaSB6KSApIC8gMlxyXG4gKi9cclxuZnVuY3Rpb24gY29zaW5lKHo6IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyIHtcclxuXHRyZXR1cm4gZGl2aWRlKGFkZChleHAobXVsdChbMCwgMV0sIHopKSwgZXhwKG11bHQoWzAsIC0xXSwgeikpKSwgWzIsIDBdKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHRhbmdlbnQgb2YgdGhlIGNvbXBsZXggbnVtYmVyOiB0YW4geiA9IHNpbiB6IC8gY29zIHpcclxuICovXHJcbmZ1bmN0aW9uIHRhbmdlbnQoejogQ29tcGxleE51bWJlcik6IENvbXBsZXhOdW1iZXIge1xyXG5cdHJldHVybiBkaXZpZGUoc2luZSh6KSwgY29zaW5lKHopKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGh5cGVyYm9saWMgc2luZSBvZiB0aGUgY29tcGxleCBudW1iZXI6IHNpbmggeiA9IC1pIHNpbihpIHopXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5oKHo6IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyIHtcclxuXHRyZXR1cm4gbXVsdChbMCwgLTFdLCBzaW5lKG11bHQoWzAsIDFdLCB6KSkpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgaHlwZXJib2xpYyBjb3NpbmUgb2YgdGhlIGNvbXBsZXggbnVtYmVyOiBjb3NoIHogPSBjb3MoaSB6KVxyXG4gKi9cclxuZnVuY3Rpb24gY29zaCh6OiBDb21wbGV4TnVtYmVyKTogQ29tcGxleE51bWJlciB7XHJcblx0cmV0dXJuIGNvc2luZShtdWx0KFswLCAxXSwgeikpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgaHlwZXJib2xpYyB0YW5nZW50IG9mIHRoZSBjb21wbGV4IG51bWJlcjogdGFuaCB6ID0gc2luaCh6KS9jb3NoKHopXHJcbiAqL1xyXG5mdW5jdGlvbiB0YW5oKHo6IENvbXBsZXhOdW1iZXIpOiBDb21wbGV4TnVtYmVyIHtcclxuXHRyZXR1cm4gZGl2aWRlKHNpbmgoeiksIGNvc2goeikpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGNvbXBsZXggbnVtYmVyIHRldHJhdGVkIGEgZ2l2ZW4gbnVtYmVyIG9mIHRpbWVzOlxyXG4gKiB6XnpeLi4uXnogID0gIGVeKGVeKC4uLmVeKHogbG4oeikpLi4uIGxuKHopKSBsbih6KSlcclxuICovXHJcbmZ1bmN0aW9uIHRldHJhdGUoW3gsIHldOiBDb21wbGV4TnVtYmVyLCBuOiBudW1iZXIgfCBudW1iZXJbXSk6IENvbXBsZXhOdW1iZXIge1xyXG5cdGlmICh0eXBlb2YgbiAhPT0gXCJudW1iZXJcIikge1xyXG5cdFx0aWYgKG4ubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHJldHVybiBbMCwgMV07IC8vSnVzdCBpbiBjYXNlLCByZXR1cm4gbXVsdGlwbGljYXRpdmUgaWRlbnRpdHlcclxuXHRcdH1cclxuXHRcdG4gPSBuWzBdOyAvL1VzZSByZWFsIHBhcnRcclxuXHR9XHJcblx0biA9IE1hdGguZmxvb3Iobik7XHJcblx0aWYgKG4gPCAwKSB7XHJcblx0XHRyZXR1cm4gW05hTiwgTmFOXTtcclxuXHR9IGVsc2UgaWYgKG4gPT09IDApIHtcclxuXHRcdHJldHVybiBbMSwgMF07XHJcblx0fSBlbHNlIGlmIChuID09PSAxKSB7XHJcblx0XHRyZXR1cm4gW3gsIHldO1xyXG5cdH1cclxuXHRsZXQgbG56WCA9IE1hdGgubG9nKE1hdGguc3FydCh4ICoqIDIgKyB5ICoqIDIpKTtcclxuXHRsZXQgbG56WSA9IHRvUG9sYXIoeCwgeSlbMV07XHJcblx0bGV0IHJlc1ggPSB4O1xyXG5cdGxldCByZXNZID0geTtcclxuXHRmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykge1xyXG5cdFx0Y29uc3QgbVggPSByZXNYICogbG56WCAtIHJlc1kgKiBsbnpZO1xyXG5cdFx0Y29uc3QgbVkgPSByZXNYICogbG56WSArIHJlc1kgKiBsbnpYOyAvLyBtdWx0XHJcblx0XHRyZXNYID0gTWF0aC5FICoqIG1YICogTWF0aC5jb3MobVkpO1xyXG5cdFx0cmVzWSA9IE1hdGguRSAqKiBtWCAqIE1hdGguc2luKG1ZKTsgLy8gZXhwXHJcblx0fVxyXG5cdGlmIChcclxuXHRcdGlzTmFOKHJlc1gpIHx8XHJcblx0XHRyZXNYID09PSBJbmZpbml0eSB8fFxyXG5cdFx0cmVzWCA9PT0gLUluZmluaXR5IHx8XHJcblx0XHRpc05hTihyZXNZKSB8fFxyXG5cdFx0cmVzWSA9PT0gSW5maW5pdHkgfHxcclxuXHRcdHJlc1kgPT09IC1JbmZpbml0eVxyXG5cdCkge1xyXG5cdFx0cmV0dXJuIFtJbmZpbml0eSwgSW5maW5pdHldO1xyXG5cdH1cclxuXHRyZXR1cm4gW3Jlc1gsIHJlc1ldO1xyXG59XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqXHJcbiAqICAgICAgSGVscGVycyAgICAgICAqXHJcbiAqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vI3JlZ2lvbiBIZWxwZXIgZnVuY3Rpb25zXHJcblxyXG4vKipcclxuICogQ29udmVydHMgZnJvbSBjYXJ0ZXNpYW4gY29vcmRpbmF0ZXMgdG8gcG9sYXIgY29vcmRpbmF0ZXNcclxuICogQHBhcmFtIHggVGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgY29tcGxleCBudW1iZXJcclxuICogQHBhcmFtIHkgVGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgY29tcGxleCBudW1iZXJcclxuICovXHJcbmZ1bmN0aW9uIHRvUG9sYXIoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBDb21wbGV4TnVtYmVyIHtcclxuXHRsZXQgzrg6IG51bWJlcjtcclxuXHRpZiAoTWF0aC5hYnMoeCkgPT09IEluZmluaXR5IHx8IE1hdGguYWJzKHkpID09PSBJbmZpbml0eSkge1xyXG5cdFx0zrggPSAwO1xyXG5cdH0gZWxzZSBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSB7XHJcblx0XHTOuCA9IDA7XHJcblx0fSBlbHNlIGlmICh4ID49IDApIHtcclxuXHRcdM64ID0gTWF0aC5hdGFuKHkgLyB4KTtcclxuXHR9IGVsc2UgaWYgKHkgPj0gMCkge1xyXG5cdFx0zrggPSBNYXRoLlBJIC0gTWF0aC5hdGFuKHkgLyAteCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdM64ID0gLU1hdGguUEkgLSBNYXRoLmF0YW4oeSAvIC14KTtcclxuXHR9XHJcblx0cmV0dXJuIFtNYXRoLnNxcnQoeCAqKiAyICsgeSAqKiAyKSwgzrhdO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgZnJvbSBwb2xhciBjb29yZGluYXRlcyB0byBjYXJ0ZXNpYW4gY29vcmRpbmF0ZXNcclxuICogQHBhcmFtIHIgVGhlIG1vZHVsdXMgb2YgdGhlIGNvbXBsZXggbnVtYmVyXHJcbiAqIEBwYXJhbSDOuCBUaGUgYXJndW1lbnQgb2YgdGhlIGNvbXBsZXggbnVtYmVyXHJcbiAqL1xyXG5mdW5jdGlvbiBmcm9tUG9sYXIocjogbnVtYmVyLCDOuDogbnVtYmVyKTogQ29tcGxleE51bWJlciB7XHJcblx0aWYgKHIgPT09IEluZmluaXR5KSB7XHJcblx0XHRyZXR1cm4gW0luZmluaXR5LCBJbmZpbml0eV07XHJcblx0fVxyXG5cdHJldHVybiBbciAqIE1hdGguY29zKM64KSwgciAqIE1hdGguc2luKM64KV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXRzIGEgbm9ybWFsaXplZCB2YWx1ZSBvZiBhbiBhbmdsZSBpbiB0aGUgcmFuZ2UgKC3PgCwgz4BdXHJcbiAqIEBwYXJhbSDOuCBUaGUgYW5nbGVcclxuICovXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVRoZXRhKM64OiBudW1iZXIpOiBudW1iZXIge1xyXG5cdGlmICjOuCA9PT0gSW5maW5pdHkgfHwgzrggPT09IC1JbmZpbml0eSkge1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fVxyXG5cdGlmICjOuCA+IE1hdGguUEkpIHtcclxuXHRcdHJldHVybiDOuCAtIE1hdGguZmxvb3IoKM64ICsgTWF0aC5QSSkgLyAoMiAqIE1hdGguUEkpKSAqIDIgKiBNYXRoLlBJO1xyXG5cdH0gZWxzZSBpZiAozrggPD0gLU1hdGguUEkpIHtcclxuXHRcdHJldHVybiDOuCArIE1hdGguZmxvb3IoKC3OuCArIE1hdGguUEkpIC8gKDIgKiBNYXRoLlBJKSkgKiAyICogTWF0aC5QSTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIM64O1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEl0ZXJhdGVzIGEgZnVuY3Rpb24gd2l0aCByZXNwZWN0IHRvIGl0cyBmaXJzdCBwYXJhbWV0ZXIgYSBnaXZlbiBudW1iZXIgb2YgdGltZXNcclxuICogQHBhcmFtIGYgVGhlIGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSBuIE51bWJlciBvZiB0aW1lcyB0byBpdGVyYXRlIGl0XHJcbiAqL1xyXG5mdW5jdGlvbiBpdGVyYXRlKGY6IEl0ZXJhdGVGdW5jdGlvbiwgbjogbnVtYmVyKTogSXRlcmF0ZUZ1bmN0aW9uIHtcclxuXHRpZiAobiA8PSAwKSB7XHJcblx0XHRyZXR1cm4gKF94KSA9PiAwO1xyXG5cdH0gZWxzZSBpZiAobiA9PT0gMSkge1xyXG5cdFx0cmV0dXJuIGY7XHJcblx0fVxyXG5cdHJldHVybiAoeDogYW55LCAuLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG5cdFx0bGV0IHJlcyA9IHg7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xyXG5cdFx0XHRyZXMgPSBmKHJlcywgLi4uYXJncyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH07XHJcbn1cclxuXHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJpbXBvcnQge1xyXG5cdHJlYWwsXHJcblx0aW1hZyxcclxuXHRSZSxcclxuXHRJbSxcclxuXHRBcmcsXHJcblx0TW9kLFxyXG5cdGFkZCxcclxuXHRzdWJ0cmFjdCxcclxuXHRtdWx0LFxyXG5cdGRpdmlkZSxcclxuXHRleHAsXHJcblx0bG9nLFxyXG5cdHJhaXNlLFxyXG5cdHNpbmUsXHJcblx0Y29zaW5lLFxyXG5cdHRhbmdlbnQsXHJcblx0c2luaCxcclxuXHRjb3NoLFxyXG5cdHRhbmgsXHJcblx0dGV0cmF0ZSxcclxuXHRpdGVyYXRlLFxyXG5cdENvbXBsZXhOdW1iZXIsXHJcblx0c3FydCxcclxufSBmcm9tIFwiLi9jb21wbGV4TnVtYmVyc1wiO1xyXG5pbXBvcnQgeyBUb2tlbiwgVG9rZW5UeXBlLCB0b2tlbml6ZSB9IGZyb20gXCIuL3Rva2VuaXplXCI7XHJcbmV4cG9ydCB7IE5vZGUsIE5vZGVDaGlsZCwgQ29tcGxleEZ1bmN0aW9uLCBwYXJzZSwgZnVuY3RpZnksIHN0clRvRnVuYywgc3RyVG9OdW0gfTtcclxuLy8gSnVzdCBmb3IgdW5pdCB0ZXN0c1xyXG5leHBvcnQgeyBzcGxpdEFyZ3VtZW50cywgZ2V0TmV4dENsb3NlUGFyZW4gfTtcclxuXHJcbi8vI3JlZ2lvbiBGdW5jdGlmeVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBmcm9tIGFuIGlucHV0IHN0cmluZyAob3IgdGhyb3dzIGFuIGVycm9yIG9uIGludmFsaWQgaW5wdXQpXHJcbiAqIEBwYXJhbSBzdHIgVGhlIGlucHV0IHN0cmluZ1xyXG4gKi9cclxuZnVuY3Rpb24gc3RyVG9GdW5jKHN0cjogc3RyaW5nKTogQ29tcGxleEZ1bmN0aW9uIHtcclxuXHRyZXR1cm4gZnVuY3RpZnkocGFyc2UodG9rZW5pemUoc3RyKSkpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGNvbXBsZXggbnVtYmVyIGZyb20gYW4gaW5wdXQgc3RyaW5nIChvciB0aHJvd3MgYW4gZXJyb3Igb24gaW52YWxpZCBpbnB1dClcclxuICogQHBhcmFtIHN0ciBUaGUgaW5wdXQgc3RyaW5nXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHJUb051bShzdHI6IHN0cmluZyk6IENvbXBsZXhOdW1iZXIge1xyXG5cdGNvbnN0IHZhcnM6IChzdHJpbmcgfCBudWxsKVtdID0gW107XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJzbHQgPSBwYXJzZSh0b2tlbml6ZShzdHIpLCB2YXJzKTtcclxuXHRcdHJldHVybiBmdW5jdGlmeShyc2x0KSgpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdHRocm93IFwiSW5wdXQgbXVzdCBiZSBhIGNvbXBsZXggbnVtYmVyXCI7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogVHVybnMgYSBOb2RlIGludG8gYSBmdW5jdGlvbiBvbiB0aGUgY29tcGxleCBudW1iZXJzXHJcbiAqIFRPRE86IENvdWxkIGJlIGltcHJvdmVkIGJ5IG5vdCBjcmVhdGluZyBzbyBtYW55IGZ1bmN0aW9uc1xyXG4gKiBAcGFyYW0gbiBUaGUgbm9kZVxyXG4gKiBAcmV0dXJucyBBIGNvbXBsZXggZnVuY3Rpb24gY29ycmVzcG9uZGluZyB0byB0aGUgcGFyc2UgdHJlZSBlbnRlcmVkXHJcbiAqL1xyXG5mdW5jdGlvbiBmdW5jdGlmeShuOiBOb2RlKTogQ29tcGxleEZ1bmN0aW9uIHtcclxuXHRpZiAobi5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkIHx8IG4uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcblx0XHRyZXR1cm4gbi5mO1xyXG5cdH1cclxuXHQvLyBUdXJuIGVhY2ggY2hpbGQgaW50byBhIGZ1bmN0aW9uXHJcblx0Y29uc3QgcmVzdWx0czogQ29tcGxleEZ1bmN0aW9uW10gPSBbXTtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IG4uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuXHRcdHJlc3VsdHMucHVzaChjaGlsZFRvRnVuYyhuLmNoaWxkcmVuW2ldKSk7XHJcblx0fVxyXG5cdC8vIFRoZW4gY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBjYWxscyB0aGUgTm9kZSdzIGZ1bmN0aW9uIG9uIHRoZSByZXN1bHQgb2YgY2FsbGluZyBlYWNoIGNoaWxkIGZ1bmN0aW9uIHdpdGggdGhlIGdpdmVuIGFyZ3VtZW50c1xyXG5cdGxldCBmdW5jID0gZnVuY3Rpb24gKC4uLmFyZ3M6IENvbXBsZXhOdW1iZXJbXSk6IENvbXBsZXhOdW1iZXIge1xyXG5cdFx0cmV0dXJuIG4uZiguLi5yZXN1bHRzLm1hcCgoZykgPT4gZyguLi5hcmdzKSkpO1xyXG5cdH07XHJcblx0cmV0dXJuIGZ1bmM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUdXJucyBhIGNoaWxkIG9mIGEgTm9kZSBpbnRvIGEgZnVuY3Rpb24gb24gdGhlIGNvbXBsZXggbnVtYmVyc1xyXG4gKi9cclxuZnVuY3Rpb24gY2hpbGRUb0Z1bmMoY2hpbGQ6IE5vZGVDaGlsZCk6IENvbXBsZXhGdW5jdGlvbiB7XHJcblx0aWYgKGNoaWxkIGluc3RhbmNlb2YgTm9kZSkge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aWZ5KGNoaWxkKTtcclxuXHR9IGVsc2UgaWYgKGNoaWxkIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdC8vIGNoaWxkIGlzIGEgQ29tcGxleE51bWJlclxyXG5cdFx0cmV0dXJuICgpID0+IGNoaWxkO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIGNoaWxkID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBjaGlsZCBpcyBhIFZhcmlhYmxlXHJcblx0XHRjb25zdCBwb3NpdGlvbiA9IGNoaWxkLnBvc2l0aW9uO1xyXG5cdFx0aWYgKHBvc2l0aW9uID09PSAxKSB7XHJcblx0XHRcdC8vIEl0J3MgdGhlIGZpcnN0IHZhcmlhYmxlXHJcblx0XHRcdHJldHVybiAoeCkgPT4geDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIEl0J3MgYSBzdWJzZXF1ZW50IHZhcmlhYmxlLCBjcmVhdGUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHBvc2l0aW9uLXRoIGFyZ3VtZW50XHJcblx0XHRcdGxldCBzdHIgPSBcIm4xLFwiO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMjsgaSA8IHBvc2l0aW9uOyBpKyspIHtcclxuXHRcdFx0XHRzdHIgKz0gXCJuXCIgKyBpICsgXCIsXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0c3RyICs9IFwiblwiICsgcG9zaXRpb247XHJcblx0XHRcdHJldHVybiBuZXcgRnVuY3Rpb24oc3RyLCBcInJldHVybiBuXCIgKyBwb3NpdGlvbiArIFwiO1wiKSBhcyBDb21wbGV4RnVuY3Rpb247XHJcblx0XHR9XHJcblx0fSBlbHNlIGlmICh0eXBlb2YgY2hpbGQgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdC8vIFNob3VsZG4ndCBoYXBwZW4gYnV0IGp1c3QgaW4gY2FzZVxyXG5cdFx0Y29uc29sZS5sb2coXCJUaGlzIHNob3VsZG4ndCBoYXBwZW4gLSBjaGlsZCBpbiBjaGlsZFRvRnVuYyBpcyB0eXBlIG51bWJlclwiKTtcclxuXHRcdHJldHVybiAoKSA9PiByZWFsKGNoaWxkKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gT3RoZXJ3aXNlLCBzaG91bGQgYmUgYSBmdW5jdGlvblxyXG5cdFx0cmV0dXJuIGNoaWxkO1xyXG5cdH1cclxufVxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmNvbnN0IE5hbWVkRnVuY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IENvbXBsZXhGdW5jdGlvbiB8IHR5cGVvZiBpdGVyYXRlIH0gPSB7XHJcblx0ZXhwOiBleHAsXHJcblx0bG46IGxvZyxcclxuXHRsb2c6IGxvZyxcclxuXHRjb3M6IGNvc2luZSxcclxuXHRzaW46IHNpbmUsXHJcblx0dGFuOiB0YW5nZW50LFxyXG5cdHNpbmg6IHNpbmgsXHJcblx0Y29zaDogY29zaCxcclxuXHR0YW5oOiB0YW5oLFxyXG5cdHRldDogdGV0cmF0ZSxcclxuXHRzcXJ0OiBzcXJ0LFxyXG5cdFJlOiBSZSxcclxuXHRJbTogSW0sXHJcblx0QXJnOiBBcmcsXHJcblx0TW9kOiBNb2QsXHJcblx0aXRlcmF0ZTogaXRlcmF0ZSxcclxufTtcclxuXHJcbnR5cGUgQ29tcGxleEZ1bmN0aW9uID0gKC4uLmFyZ3M6IENvbXBsZXhOdW1iZXJbXSkgPT4gQ29tcGxleE51bWJlcjtcclxudHlwZSBWYXJpYWJsZSA9IHtcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0cG9zaXRpb246IG51bWJlcjtcclxufTtcclxudHlwZSBOb2RlQ2hpbGQgPSBOb2RlIHwgQ29tcGxleEZ1bmN0aW9uIHwgQ29tcGxleE51bWJlciB8IFZhcmlhYmxlO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIGZvciBhIG5vZGUgaW4gdGhlIHBhcnNlIHRyZWVcclxuICovXHJcbmNsYXNzIE5vZGUge1xyXG5cdGY6IENvbXBsZXhGdW5jdGlvbjtcclxuXHRjaGlsZHJlbjogTm9kZUNoaWxkW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGY6IENvbXBsZXhGdW5jdGlvbiwgY2hpbGRyZW46IE5vZGVDaGlsZFtdKSB7XHJcblx0XHR0aGlzLmYgPSBmO1xyXG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRha2VzIGFuIGFycmF5IG9mIHRva2VucyBhbmQgdHVybnMgaXQgaW50byBhIHRyZWUgc3RydWN0dXJlLCByZXR1cm5pbmcgdGhlIHJvb3QgTm9kZVxyXG4gKiBAcGFyYW0gdG9rZW5zIFRoZSBhcnJheSBvZiB0b2tlbnMgZnJvbSB0b2tlbml6ZSgpXHJcbiAqIEBwYXJhbSB2YXJzIEFycmF5IHdpdGggb3BlbiBzcGFjZSBmb3IgdGhlIG51bWJlciBvZiB2YXJpYWJsZXMgYWxsb3dlZFxyXG4gKiBAcmV0dXJucyBUaGUgcm9vdCBOb2RlIG9mIHRoZSBwYXJzZWQgdHJlZVxyXG4gKi9cclxuZnVuY3Rpb24gcGFyc2UodG9rZW5zOiBUb2tlbltdLCB2YXJzPzogKHN0cmluZyB8IG51bGwpW10pOiBOb2RlIHtcclxuXHRpZiAodmFycyA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHR2YXJzID0gW251bGxdOyAvL09ubHkgYWxsb3cgb25lIHZhcmlhYmxlIChmb3Igbm93KVxyXG5cdH1cclxuXHRsZXQgcnNsdCA9IHBhcnNlUmVjKHRva2VucywgdmFycyk7XHJcblx0aWYgKHJzbHQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0cmV0dXJuIG5ldyBOb2RlKCh4KSA9PiB4LCBbcnNsdF0pO1xyXG5cdH0gZWxzZSBpZiAoIShyc2x0IGluc3RhbmNlb2YgTm9kZSkpIHtcclxuXHRcdHJldHVybiBuZXcgTm9kZSgoeCkgPT4geCwgW3JzbHRdKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHJzbHQ7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogUmVjdXJzaXZlIHZlcnNpb24gb2YgcGFyc2VcclxuICovXHJcbmZ1bmN0aW9uIHBhcnNlUmVjKHRva2VuczogVG9rZW5bXSwgdmFyczogKHN0cmluZyB8IG51bGwpW10pOiBOb2RlQ2hpbGQge1xyXG5cdGlmICh0b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcblx0XHR0aHJvdyBcIlN5bnRheCBlcnJvciAoSSBkb24ndCBrbm93IHdoYXQgdG8gZG8gd2l0aCB0aGlzIGlucHV0KVwiO1xyXG5cdH1cclxuXHRjb25zdCBjaGlsZHJlbjogTm9kZUNoaWxkW10gPSBbXTtcclxuXHRjb25zdCB0b2tlbk9uZSA9IHRva2Vuc1swXTtcclxuXHJcblx0Ly8gU2VlIGlmIGl0J3MgYW4gYXJpdGhtZXRpYyBmdW5jdGlvblxyXG5cdGxldCB7IGZ1bmNOYW1lOiBmdW5jTmFtZSwgaW5kZXg6IGluZGV4IH0gPSBmaW5kTGFzdEZ1bmModG9rZW5zKTtcclxuXHRpZiAoZnVuY05hbWUgIT09IFwiXCIpIHtcclxuXHRcdGlmIChmdW5jTmFtZSA9PT0gXCItXCIgJiYgaW5kZXggPT09IDApIHtcclxuXHRcdFx0Ly8gQWN0dWFsbHkgYSBuZWdhdGl2ZSBzaWduLCBub3QgbWludXNcclxuXHRcdFx0Y2hpbGRyZW4ucHVzaChyZWFsKDApKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNoaWxkcmVuLnB1c2gocGFyc2VSZWModG9rZW5zLnNsaWNlKDAsIGluZGV4KSwgdmFycykpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGZ1bmNOYW1lID09PSBcImltcGxpY2l0X211bHRcIikge1xyXG5cdFx0XHRpbmRleCAtPSAxO1xyXG5cdFx0fVxyXG5cdFx0Y2hpbGRyZW4ucHVzaChwYXJzZVJlYyh0b2tlbnMuc2xpY2UoaW5kZXggKyAxKSwgdmFycykpO1xyXG5cdFx0cmV0dXJuIG5ldyBOb2RlKGdldEZ1bmNGcm9tQXJpdGhGdW5jU3RyaW5nKGZ1bmNOYW1lKSwgY2hpbGRyZW4pO1xyXG5cdH1cclxuXHJcblx0Ly8gU2VlIGlmIGl0J3MgYSBzaW5nbGUgdGhpbmdcclxuXHRpZiAodG9rZW5zLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0Y29uc3QgdW5pdCA9IHR1cm5Ub2tlbkludG9DaGlsZCh0b2tlbk9uZSwgdmFycyk7XHJcblx0XHRpZiAodHlwZW9mIHVuaXQgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHR0aHJvdyB0b2tlbk9uZS50ZXh0ICsgXCIgY2FsbGVkIHdpdGhvdXQgYXJndW1lbnRzXCI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdW5pdDtcclxuXHR9XHJcblxyXG5cdC8vIFNlZSBpZiBpdCdzIGEgcGFyZW50aGVzaXNcclxuXHRpZiAodG9rZW5PbmUudGV4dCA9PT0gXCIoXCIgfHwgdG9rZW5PbmUudGV4dCA9PT0gXCJbXCIpIHtcclxuXHRcdGNvbnN0IGNsb3NlUG9zID0gZ2V0TmV4dENsb3NlUGFyZW4odG9rZW5zLCAwLCB0b2tlbk9uZS50eXBlKTtcclxuXHRcdGlmIChjbG9zZVBvcyA9PT0gdG9rZW5zLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0Ly8gRW50aXJlbHkgaW5zaWRlIHBhcmVuc1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VSZWModG9rZW5zLnNsaWNlKDEsIHRva2Vucy5sZW5ndGggLSAxKSwgdmFycyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBPdGhlcndpc2UsIG11bHRpcGxpY2F0aW9uXHJcblx0XHRcdGNoaWxkcmVuLnB1c2gocGFyc2VSZWModG9rZW5zLnNsaWNlKDEsIGNsb3NlUG9zKSwgdmFycykpO1xyXG5cdFx0XHRjaGlsZHJlbi5wdXNoKHBhcnNlUmVjKHRva2Vucy5zbGljZShjbG9zZVBvcyArIDEpLCB2YXJzKSk7XHJcblx0XHRcdHJldHVybiBuZXcgTm9kZShtdWx0LCBjaGlsZHJlbik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBTZWUgaWYgaXQncyBhIG5hbWVkIGZ1bmN0aW9uXHJcblx0aWYgKGlzTmFtZWRGdW5jdGlvbih0b2tlbk9uZS50ZXh0KSkge1xyXG5cdFx0Y29uc3QgZnVuYyA9IG1hdGNoS25vd25GdW5jKHRva2VuT25lLnRleHQpITtcclxuXHJcblx0XHRpZiAodG9rZW5zWzFdLnRleHQgPT09IFwiKFwiKSB7XHJcblx0XHRcdC8vIEZ1bmN0aW9uIHdpdGhvdXQgc3F1YXJlIGJyYWNrZXRzXHJcblx0XHRcdGlmIChmdW5jSGFzU3F1YXJlQnJhY2tldHModG9rZW5PbmUudGV4dCkpIHtcclxuXHRcdFx0XHR0aHJvdyB0b2tlbk9uZS50ZXh0ICsgXCIgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHNxdWFyZSBicmFja2V0c1wiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGVuZEluZCA9IGdldE5leHRDbG9zZVBhcmVuKHRva2VucywgMSwgVG9rZW5UeXBlLlBhcmVudGhlc2lzKTtcclxuXHRcdFx0Y29uc3QgYXJncyA9IHNwbGl0QXJndW1lbnRzKHRva2Vucy5zbGljZSgyLCBlbmRJbmQpKTtcclxuXHRcdFx0aWYgKGFyZ3MubGVuZ3RoICE9PSBmdW5jLmxlbmd0aCkge1xyXG5cdFx0XHRcdHRocm93IFwiV3JvbmcgbnVtYmVyIG9mIHBhcmFtZXRlcnMgcGFzc2VkIHRvIFwiICsgdG9rZW5PbmUudGV4dDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZW5kSW5kID09PSB0b2tlbnMubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdC8vIEFsbCB0b2tlbnMgYXJlIGFyZ3VtZW50cyAtIGhlcmUgd2Uga25vdyBmdW5jIGlzIGEgQ29tcGxleEZ1bmN0aW9uIHNpbmNlIGl0IGRvZXMgbm90IGhhdmUgc3F1YXJlIGJyYWNrZXRzXHJcblx0XHRcdFx0cmV0dXJuIG5ldyBOb2RlKFxyXG5cdFx0XHRcdFx0ZnVuYyBhcyBDb21wbGV4RnVuY3Rpb24sXHJcblx0XHRcdFx0XHRhcmdzLm1hcCgoeCkgPT4gcGFyc2VSZWMoeCwgdmFycykpLFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gVGhlcmUgYXJlIHRva2VucyBwYXN0IHRoZSBhcmd1bWVudHMgLSB3ZSdyZSBtdWx0aXBseWluZyB3aXRoIHRoZSBuZXh0IHBhcnRcclxuXHRcdFx0XHRjaGlsZHJlbi5wdXNoKFxyXG5cdFx0XHRcdFx0bmV3IE5vZGUoXHJcblx0XHRcdFx0XHRcdGZ1bmMgYXMgQ29tcGxleEZ1bmN0aW9uLFxyXG5cdFx0XHRcdFx0XHRhcmdzLm1hcCgoeCkgPT4gcGFyc2VSZWMoeCwgdmFycykpLFxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNoaWxkcmVuLnB1c2gocGFyc2VSZWModG9rZW5zLnNsaWNlKGVuZEluZCArIDEpLCB2YXJzKSk7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBOb2RlKG11bHQsIGNoaWxkcmVuKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0b2tlbnNbMV0udGV4dCA9PT0gXCJbXCIpIHtcclxuXHRcdFx0Ly8gRnVuY3Rpb24gd2l0aCBzcXVhcmUgYnJhY2tldHNcclxuXHRcdFx0aWYgKCFmdW5jSGFzU3F1YXJlQnJhY2tldHModG9rZW5PbmUudGV4dCkpIHtcclxuXHRcdFx0XHR0aHJvdyB0b2tlbk9uZS50ZXh0ICsgXCIgc2hvdWxkIG5vdCBiZSBjYWxsZWQgd2l0aCBzcXVhcmUgYnJhY2tldHNcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBlbmRJbmQgPSBnZXROZXh0Q2xvc2VQYXJlbih0b2tlbnMsIDEsIFRva2VuVHlwZS5TcXVhcmVCcmFja2V0KTtcclxuXHRcdFx0Y29uc3QgeyBjb21wbGV4RnVuYzogY29tcGxleEZ1bmMsIG51bUFyZ3M6IG51bUFyZ3MgfSA9IGdldENvbXBsZXhGdW5jRnJvbUZ1bmNXaXRoU3F1YXJlQnJhY2tldHMoXHJcblx0XHRcdFx0dG9rZW5PbmUudGV4dCxcclxuXHRcdFx0XHR0b2tlbnMuc2xpY2UoMiwgZW5kSW5kKSxcclxuXHRcdFx0KTtcclxuXHRcdFx0Ly8gTm93IHdlIGp1c3QgbmVlZCBldmVyeXRoaW5nIGFmdGVyIHRoZSBzcXVhcmUgYnJhY2tldHNcclxuXHRcdFx0dG9rZW5zID0gdG9rZW5zLnNsaWNlKGVuZEluZCArIDEpO1xyXG5cdFx0XHRpZiAodG9rZW5zLmxlbmd0aCA9PT0gMCB8fCB0b2tlbnNbMF0udGV4dCAhPT0gXCIoXCIpIHtcclxuXHRcdFx0XHR0aHJvdyBcIk5vIHBhcmFtZXRlcnMgcGFzc2VkIHRvIFwiICsgdG9rZW5PbmUudGV4dDtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBHZXQgdGhlIGFyZ3VtZW50c1xyXG5cdFx0XHRjb25zdCBhcmdzRW5kSW5kID0gZ2V0TmV4dENsb3NlUGFyZW4odG9rZW5zLCAwLCBUb2tlblR5cGUuUGFyZW50aGVzaXMpO1xyXG5cdFx0XHRjb25zdCBhcmdzID0gc3BsaXRBcmd1bWVudHModG9rZW5zLnNsaWNlKDEsIGFyZ3NFbmRJbmQpKTtcclxuXHRcdFx0aWYgKGFyZ3MubGVuZ3RoIDwgbnVtQXJncykge1xyXG5cdFx0XHRcdHRocm93IFwiTm90IGVub3VnaCBwYXJhbWV0ZXJzIHBhc3NlZCB0byBcIiArIHRva2VuT25lLnRleHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGFyZ3NFbmRJbmQgPT09IHRva2Vucy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0Ly8gRXZlcnl0aGluZyBpcyBpbiB0aGUgcGFyZW50aGVzZXNcclxuXHRcdFx0XHRyZXR1cm4gbmV3IE5vZGUoXHJcblx0XHRcdFx0XHRjb21wbGV4RnVuYyxcclxuXHRcdFx0XHRcdGFyZ3MubWFwKCh4KSA9PiBwYXJzZVJlYyh4LCB2YXJzKSksXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBUaGVyZSBhcmUgdG9rZW5zIHBhc3QgdGhlIGFyZ3VtZW50cyAtIHdlJ3JlIG11bHRpcGx5aW5nIHdpdGggdGhlIG5leHQgcGFydFxyXG5cdFx0XHRcdGNoaWxkcmVuLnB1c2goXHJcblx0XHRcdFx0XHRuZXcgTm9kZShcclxuXHRcdFx0XHRcdFx0Y29tcGxleEZ1bmMsXHJcblx0XHRcdFx0XHRcdGFyZ3MubWFwKCh4KSA9PiBwYXJzZVJlYyh4LCB2YXJzKSksXHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y2hpbGRyZW4ucHVzaChwYXJzZVJlYyh0b2tlbnMuc2xpY2UoYXJnc0VuZEluZCArIDEpLCB2YXJzKSk7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBOb2RlKG11bHQsIGNoaWxkcmVuKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gRnVuY3Rpb24gY2FsbGVkIHdpdGhvdXQgcGFyZW5zL2JyYWNrZXRzIChlLmcuICdjb3MgeCcgb3IgJ2NvcyBzaW4geCcpXHJcblx0XHRcdC8vIE9ubHkgYWxsb3cgdGhpcyB3aXRoIDEtYXJndW1lbnQgZnVuY3Rpb25zXHJcblx0XHRcdGlmIChmdW5jLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHR0aHJvdyBcIk1pc3NpbmcgcGFyZW50aGVzZXMgZm9yIFwiICsgdG9rZW5PbmUudGV4dDtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbmV3IE5vZGUoZnVuYyBhcyBDb21wbGV4RnVuY3Rpb24sIFtwYXJzZVJlYyh0b2tlbnMuc2xpY2UoMSksIHZhcnMpXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBPdGhlcndpc2UgaXQncyBqdXN0IGltcGxpY2l0IG11bHRpcGxpY2F0aW9uXHJcblx0Y29uc3QgdW5pdCA9IHR1cm5Ub2tlbkludG9DaGlsZCh0b2tlbk9uZSwgdmFycyk7XHJcblx0aWYgKHR5cGVvZiB1bml0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHRocm93IHRva2VuT25lLnRleHQgKyBcIiBjYWxsZWQgd2l0aG91dCBhcmd1bWVudHNcIjtcclxuXHR9XHJcblx0Y2hpbGRyZW4ucHVzaCh1bml0KTtcclxuXHRjaGlsZHJlbi5wdXNoKHBhcnNlUmVjKHRva2Vucy5zbGljZSgxKSwgdmFycykpO1xyXG5cdHJldHVybiBuZXcgTm9kZShtdWx0LCBjaGlsZHJlbik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZm9yIHJldHVybiB2YWx1ZSBvZiBmaW5kTGFzdEZ1bmNcclxuICovXHJcbmludGVyZmFjZSBGaW5kTGFzdEZ1bmNSZXR1cm4ge1xyXG5cdGZ1bmNOYW1lOiBzdHJpbmc7XHJcblx0aW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmQgbG93ZXN0IHByaW9yaXR5IGVsZW1lbnRhcnkgZnVuY3Rpb24gb3V0c2lkZSBvZiBwYXJlbnRoZXNlcyAoUEVNREFTKSBhbmQgaXRzIGluZGV4IGluIHRoZSB0b2tlbiBsaXN0XHJcbiAqIEBwYXJhbSB0b2tlbnMgVGhlIGxpc3Qgb2YgdG9rZW5zXHJcbiAqIEByZXR1cm5zIFRoZSBwYWlyIFtsb3dlc3QtcHJpb3JpdHkgZnVuY3Rpb24sIGluZGV4IGluIHRoZSB0b2tlbiBsaXN0XVxyXG4gKiBGb3IgZXhhbXBsZSxcclxuICogWycyJywgJ3gnLCAnKycsICdzaW4nLCAnMyddID0+IFthZGQsIDJdXHJcbiAqIFsnMicsICd4JywgJyonLCAnc2luJywgJzMnXSA9PiBbbXVsdCwgMl1cclxuICogWycyJywgJ3NpbicsICd4J10gICAgICAgICAgID0+IFtpbXBsaWNpdF9tdWx0LCAxXVxyXG4gKi9cclxuZnVuY3Rpb24gZmluZExhc3RGdW5jKHRva2VuczogVG9rZW5bXSk6IEZpbmRMYXN0RnVuY1JldHVybiB7XHJcblx0bGV0IHN0ckY6IHN0cmluZyA9IFwiXCI7XHJcblx0bGV0IGluZGV4ID0gLTE7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGxldCB0b2tlbiA9IHRva2Vuc1tpXTtcclxuXHRcdGlmICh0b2tlbi50eXBlICE9PSBUb2tlblR5cGUuRnVuY3Rpb24pIHtcclxuXHRcdFx0Ly8gQ2hlY2sgZm9yIGltcGxpY2l0IG11bHRpcGxpY2F0aW9uXHJcblx0XHRcdGlmIChpID4gMCkge1xyXG5cdFx0XHRcdGxldCBwcmV2VG9rZW4gPSB0b2tlbnNbaSAtIDFdO1xyXG5cdFx0XHRcdGlmIChwcmV2VG9rZW4udHlwZSAhPT0gVG9rZW5UeXBlLkZ1bmN0aW9uKSB7XHJcblx0XHRcdFx0XHQvLyBtdXN0IGhhdmUgMiB0b2tlbnMgbmV4dCB0byBlYWNoIG90aGVyIHRoYXQgYXJlIGVhY2ggZWl0aGVyXHJcblx0XHRcdFx0XHQvLyBhIG51bWJlciwgYSB2YXJpYWJsZSwgb3IgYSBwYXJlbnRoZXNpc1xyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHQhKFtcIitcIiwgXCItXCJdLmluZGV4T2Yoc3RyRikgPj0gMCkgJiYgLy8gKy8tIGFyZSBsb3dlciBwcmlvcml0eVxyXG5cdFx0XHRcdFx0XHQoW1Rva2VuVHlwZS5OdW1iZXIsIFRva2VuVHlwZS5TdHJpbmddLmluZGV4T2YocHJldlRva2VuLnR5cGUpID49IDAgfHxcclxuXHRcdFx0XHRcdFx0XHRwcmV2VG9rZW4udGV4dCA9PT0gXCIpXCIpICYmXHJcblx0XHRcdFx0XHRcdChbVG9rZW5UeXBlLk51bWJlciwgVG9rZW5UeXBlLlN0cmluZ10uaW5kZXhPZih0b2tlbi50eXBlKSA+PSAwIHx8XHJcblx0XHRcdFx0XHRcdFx0dG9rZW4udGV4dCA9PT0gXCIoXCIpICYmXHJcblx0XHRcdFx0XHRcdCFpc05hbWVkRnVuY3Rpb24ocHJldlRva2VuLnRleHQpXHJcblx0XHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdFx0c3RyRiA9IFwiaW1wbGljaXRfbXVsdFwiO1xyXG5cdFx0XHRcdFx0XHRpbmRleCA9IGk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChbVG9rZW5UeXBlLlBhcmVudGhlc2lzLCBUb2tlblR5cGUuU3F1YXJlQnJhY2tldF0uaW5kZXhPZih0b2tlbi50eXBlKSA+PSAwKSB7XHJcblx0XHRcdFx0aWYgKFtcIihcIiwgXCJbXCJdLmluZGV4T2YodG9rZW4udGV4dCkgPj0gMCkge1xyXG5cdFx0XHRcdFx0aSA9IGdldE5leHRDbG9zZVBhcmVuKHRva2VucywgaSwgdG9rZW4udHlwZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRva2Vucyk7XHJcblx0XHRcdFx0XHR0aHJvdyBcIkVycm9yOiB1bmJhbGFuY2VkIHBhcmVudGhlc2VzXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Ly8gYWx3YXlzIHNvbWUgZnVuY3Rpb24gaWYgb25lIGV4aXN0c1xyXG5cdFx0aWYgKHN0ckYgPT09IFwiXCIpIHtcclxuXHRcdFx0c3RyRiA9IHRva2VuLnRleHQ7XHJcblx0XHRcdGluZGV4ID0gaTtcclxuXHRcdH0gZWxzZSBpZiAoW1wiK1wiLCBcIi1cIl0uaW5kZXhPZih0b2tlbi50ZXh0KSA+PSAwKSB7XHJcblx0XHRcdC8vIGFsd2F5cyBsb3dlc3QgcHJpb3JpdHlcclxuXHRcdFx0c3RyRiA9IHRva2VuLnRleHQ7XHJcblx0XHRcdGluZGV4ID0gaTtcclxuXHRcdH0gZWxzZSBpZiAoW1wiKlwiLCBcIi9cIl0uaW5kZXhPZih0b2tlbi50ZXh0KSA+PSAwICYmICEoW1wiK1wiLCBcIi1cIl0uaW5kZXhPZihzdHJGKSA+PSAwKSkge1xyXG5cdFx0XHQvLyBvbmx5IGxvd2VzdCBwcmlvcml0eSBpZiBubyBhZGQgb3Igc3VidHJhY3RcclxuXHRcdFx0c3RyRiA9IHRva2VuLnRleHQ7XHJcblx0XHRcdGluZGV4ID0gaTtcclxuXHRcdH1cclxuXHRcdC8vIE5vIGNhc2UgZm9yIF4gYmVjYXVzZSBpdCdzIHNldCBpZihmKSBzdHJGIGlzIGVtcHR5IHNvIGZhclxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgZnVuY05hbWU6IHN0ckYsIGluZGV4OiBpbmRleCB9O1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBzdHJpbmcgaXMgYSBrbm93biBmdW5jdGlvbiAobGlrZSBsbiwgdGV0LCBldGMuKVxyXG4gKi9cclxuZnVuY3Rpb24gaXNOYW1lZEZ1bmN0aW9uKHN0ckY6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdHJldHVybiBOYW1lZEZ1bmN0aW9uc1tzdHJGXSAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogTWF0Y2hlcyB0aGUgc3RyaW5nIHRvIGEga25vd24gZnVuY3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIG1hdGNoS25vd25GdW5jKHN0ckY6IHN0cmluZyk6IENvbXBsZXhGdW5jdGlvbiB8IHR5cGVvZiBpdGVyYXRlIHwgdW5kZWZpbmVkIHtcclxuXHRyZXR1cm4gTmFtZWRGdW5jdGlvbnNbc3RyRl07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGZ1bmN0aW9uIHVzZXMgc3F1YXJlIGJyYWNrZXRzXHJcbiAqL1xyXG5mdW5jdGlvbiBmdW5jSGFzU3F1YXJlQnJhY2tldHMoc3RyRjogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0cmV0dXJuIHN0ckYgPT09IFwiaXRlcmF0ZVwiO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIGNsb3NpbmcgcGFyZW50aGVzaXMgbWF0Y2hpbmcgdGhlIG9wZW5pbmcgcGFyZW50aGVzaXMgYXQgdGhlIGdpdmVuIHBvc2l0aW9uXHJcbiAqIEBwYXJhbSB0b2tlbnMgVGhlIGxpc3Qgb2YgdG9rZW5zXHJcbiAqIEBwYXJhbSBpIFRoZSBwb3NpdGlvbiBvZiB0aGUgb3BlbmluZyBwYXJlbnRoZXNpc1xyXG4gKiBAcGFyYW0gcGFyZW5UeXBlIEVpdGhlciBUb2tlblR5cGUuUGFyZW50aGVzaXMgb3IgVG9rZW5UeXBlLlNxdWFyZUJyYWNrZXQgdG8gdGVsbCB3aGljaCB0eXBlIG9mIHBhcmVuIHdlJ3JlIGxvb2tpbmcgZm9yXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXROZXh0Q2xvc2VQYXJlbih0b2tlbnM6IFRva2VuW10sIGk6IG51bWJlciwgcGFyZW5UeXBlOiBUb2tlblR5cGUpOiBudW1iZXIge1xyXG5cdGxldCBsZXZlbCA9IDE7XHJcblx0bGV0IG9wZW46IHN0cmluZztcclxuXHRsZXQgY2xvc2U6IHN0cmluZztcclxuXHRpZiAocGFyZW5UeXBlID09PSBUb2tlblR5cGUuUGFyZW50aGVzaXMpIHtcclxuXHRcdG9wZW4gPSBcIihcIjtcclxuXHRcdGNsb3NlID0gXCIpXCI7XHJcblx0fSBlbHNlIGlmIChwYXJlblR5cGUgPT09IFRva2VuVHlwZS5TcXVhcmVCcmFja2V0KSB7XHJcblx0XHRvcGVuID0gXCJbXCI7XHJcblx0XHRjbG9zZSA9IFwiXVwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBcImdldE5leHRDbG9zZVBhcmVuIGNhbGxlZCBpbmNvcnJlY3RseS4gVGhpcyBzaG91bGQgbm90IGhhdmUgYmVlbiBwb3NzaWJsZSFcIjtcclxuXHR9XHJcblx0bGV0IGo6IG51bWJlcjtcclxuXHRmb3IgKGogPSBpICsgMTsgaiA8IHRva2Vucy5sZW5ndGg7IGorKykge1xyXG5cdFx0c3dpdGNoICh0b2tlbnNbal0udGV4dCkge1xyXG5cdFx0XHRjYXNlIG9wZW46XHJcblx0XHRcdFx0bGV2ZWwrKztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBjbG9zZTpcclxuXHRcdFx0XHRsZXZlbC0tO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGxldmVsID09PSAwKSB7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAoaiA+IHRva2Vucy5sZW5ndGggLSAxKSB7XHJcblx0XHR0aHJvdyBcIkVycm9yOiB1bmJhbGFuY2VkIHBhcmVudGhlc2VzXCI7XHJcblx0fVxyXG5cdHJldHVybiBqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGdW5jRnJvbUFyaXRoRnVuY1N0cmluZyhhcml0aEZ1bmNTdHJpbmc6IHN0cmluZyk6IENvbXBsZXhGdW5jdGlvbiB7XHJcblx0c3dpdGNoIChhcml0aEZ1bmNTdHJpbmcpIHtcclxuXHRcdGNhc2UgXCIrXCI6XHJcblx0XHRcdHJldHVybiBhZGQ7XHJcblx0XHRjYXNlIFwiLVwiOlxyXG5cdFx0XHRyZXR1cm4gc3VidHJhY3Q7XHJcblx0XHRjYXNlIFwiKlwiOlxyXG5cdFx0XHRyZXR1cm4gbXVsdDtcclxuXHRcdGNhc2UgXCIvXCI6XHJcblx0XHRcdHJldHVybiBkaXZpZGU7XHJcblx0XHRjYXNlIFwiXlwiOlxyXG5cdFx0XHRyZXR1cm4gcmFpc2U7XHJcblx0XHRjYXNlIFwiaW1wbGljaXRfbXVsdFwiOlxyXG5cdFx0XHRyZXR1cm4gbXVsdDtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHRocm93IFwiZ2V0RnVuY0Zyb21Bcml0aEZ1bmNTdHJpbmcgY2FsbGVkIGluY29ycmVjdGx5LiBUaGlzIHNob3VsZCBub3QgaGF2ZSBiZWVuIHBvc3NpYmxlIVwiO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGEgbGlzdCBvZiB0b2tlbnMgcGFzc2VkIGludG8gYSBmdW5jdGlvbiwgcmV0dXJucyBhIGxpc3Qgd2hlcmUgdGhlIG50aCBlbnRyeSBpcyB0aGUgbGlzdCBvZiB0b2tlbnMgY29ycmVzcG9uZGluZyB0byB0aGUgbnRoIGFyZ3VtZW50LlxyXG4gKiBAcGFyYW0gdG9rZW5zIFRoZSB0b2tlbnMgcGFzc2VkIGludG8gYSBmdW5jdGlvblxyXG4gKiBAcmV0dXJucyBBIGxpc3Qgb2YgYXJndW1lbnRzIChlYWNoIGFyZ3VtZW50IGlzIGEgbGlzdCBvZiB0b2tlbnMpXHJcbiAqIEZvciBleGFtcGxlLCBpZiB0aGUgb3ZlcmFsbCBpbnB1dCBpczogdGV0KDIqbiwgMzUgdGV0KDEsIDIpKVxyXG4gKiB0aGVuIHBhc3MgdG9rZW5zID0gWycyJywgJ24nLCAnLCcsICczNScsICd0ZXQnLCAnKCcsICcxJywgJzInLCAnKSddXHJcbiAqIGFuZCB0aGlzIHJldHVybnMgWyBbJzInLCAnbiddLCBbJzM1JywgJ3RldCcsICcoJywgJzEnLCAnMicsICcpJ10gXVxyXG4gKi9cclxuZnVuY3Rpb24gc3BsaXRBcmd1bWVudHModG9rZW5zOiBUb2tlbltdKTogVG9rZW5bXVtdIHtcclxuXHRsZXQgYXJncyA9IFtdLFxyXG5cdFx0Y3VyQXJnID0gW107XHJcblx0bGV0IGxldmVsID0gMDtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0bGV0IGN1clRva2VuID0gdG9rZW5zW2ldO1xyXG5cdFx0c3dpdGNoIChjdXJUb2tlbi50eXBlKSB7XHJcblx0XHRcdGNhc2UgVG9rZW5UeXBlLkNvbW1hOlxyXG5cdFx0XHRcdGlmIChsZXZlbCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0YXJncy5wdXNoKGN1ckFyZyk7XHJcblx0XHRcdFx0XHRjdXJBcmcgPSBbXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y3VyQXJnLnB1c2goY3VyVG9rZW4pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBUb2tlblR5cGUuUGFyZW50aGVzaXM6XHJcblx0XHRcdGNhc2UgVG9rZW5UeXBlLlNxdWFyZUJyYWNrZXQ6XHJcblx0XHRcdFx0aWYgKGN1clRva2VuLnRleHQgPT09IFwiKFwiIHx8IGN1clRva2VuLnRleHQgPT09IFwiW1wiKSB7XHJcblx0XHRcdFx0XHRsZXZlbCsrO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsZXZlbC0tO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0Ly8gRG9uJ3QgYnJlYWtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRjdXJBcmcucHVzaChjdXJUb2tlbik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cdGFyZ3MucHVzaChjdXJBcmcpO1xyXG5cdHJldHVybiBhcmdzO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgR2V0Q29tcGxleEZ1bmNSZXR1cm4ge1xyXG5cdGNvbXBsZXhGdW5jOiBDb21wbGV4RnVuY3Rpb247XHJcblx0bnVtQXJnczogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogVHVybiBhIGZ1bmN0aW4gd2l0aCBzcXVhcmUgYnJhY2tldHMgKCdmdW5jdGlvblthcmcxLCBhcmcyLCAuLi5dJykgaW50byBhIHNpbmdsZSBmdW5jdGlvblxyXG4gKiBAcGFyYW0gc3RyRiBUaGUgZnVuY3Rpb24gYXMgYSBzdHJpbmcgKG9ubHkgJ2l0ZXJhdGUnIHN1cHBvcnRlZCBmb3Igbm93KVxyXG4gKiBAcGFyYW0gdG9rZW5zIFRoZSB0b2tlbnMgZnJvbSBpbnNpZGUgdGhlIHNxdWFyZSBicmFja2V0c1xyXG4gKiBAcmV0dXJucyBUaGUgY29tcGxleCBmdW5jdGlvbiBhbmQgdGhlIG51bWJlciBvZiBhcmd1bWVudHMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBjb21wbGV4IGZ1bmN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDb21wbGV4RnVuY0Zyb21GdW5jV2l0aFNxdWFyZUJyYWNrZXRzKHN0ckY6IHN0cmluZywgdG9rZW5zOiBUb2tlbltdKTogR2V0Q29tcGxleEZ1bmNSZXR1cm4ge1xyXG5cdGNvbnN0IGFyZ3MgPSBzcGxpdEFyZ3VtZW50cyh0b2tlbnMpO1xyXG5cdGlmIChzdHJGID09PSBcIml0ZXJhdGVcIikge1xyXG5cdFx0Ly8gRnVuY3Rpb24gaXMgaXRlcmF0ZVtnLCBuLCB2YXJOYW1lXVxyXG5cdFx0aWYgKGFyZ3MubGVuZ3RoICE9PSAzKSB7XHJcblx0XHRcdHRocm93IFwid3JvbmcgbnVtYmVyIG9mIHNxdWFyZS1icmFja2V0IHBhcmFtZXRlcnMgZm9yIGl0ZXJhdGVcIjtcclxuXHRcdH0gZWxzZSBpZiAoYXJnc1syXS5sZW5ndGggIT09IDEgfHwgYXJnc1syXVswXS50eXBlICE9PSBUb2tlblR5cGUuU3RyaW5nKSB7XHJcblx0XHRcdHRocm93IFwidGhpcmQgcGFyYW1ldGVyIGZvciBpdGVyYXRlIHNob3VsZCBiZSBhIHNpbmdsZSB2YXJpYWJsZVwiO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgdmFyTmFtZSA9IGFyZ3NbMl1bMF0udGV4dDtcclxuXHRcdC8vIEFsbG93IFthcmJpdHJhcnkgbGFyZ2UgbnVtYmVyXSB2YXJpYWJsZXNcclxuXHRcdGNvbnN0IG5ld1ZhckFyeSA9IGNyZWF0ZUZpbGxlZEFycmF5KDIwMCwgbnVsbCk7XHJcblx0XHRuZXdWYXJBcnlbMF0gPSB2YXJOYW1lO1xyXG5cdFx0Y29uc3QgZzogQ29tcGxleEZ1bmN0aW9uID0gZnVuY3RpZnkocGFyc2UoYXJnc1swXSwgbmV3VmFyQXJ5KSk7XHJcblx0XHRjb25zdCBuOiBudW1iZXIgPSBmdW5jdGlmeShwYXJzZShhcmdzWzFdLCBbXSkpKClbMF07XHJcblx0XHRpZiAobiA8PSAwKSB7XHJcblx0XHRcdHRocm93IFwic2Vjb25kIHBhcmFtZXRlciBmb3IgaXRlcmF0ZSBzaG91bGQgYmUgPiAwXCI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4geyBjb21wbGV4RnVuYzogaXRlcmF0ZShnLCBNYXRoLmZsb29yKG4pKSwgbnVtQXJnczogbmV3VmFyQXJ5LmluZGV4T2YobnVsbCkgfTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gTm90IHN1cHBvcnRlZFxyXG5cdFx0dGhyb3cgXCJnZXRDb21wbGV4RnVuY0Zyb21GdW5jV2l0aFNxdWFyZUJyYWNrZXRzIGNhbGxlZCBpbmNvcnJlY3RseS4gVGhpcyBzaG91bGQgbm90IGhhdmUgYmVlbiBwb3NzaWJsZSFcIjtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gYXJyYXkgZmlsbGVkIHdpdGggYSB2YWx1ZVxyXG4gKiBAcGFyYW0gc2l6ZSBUaGUgc2l6ZSBmb3IgdGhlIGFycmF5XHJcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gZmlsbCB0aGUgYXJyYXlcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpbGxlZEFycmF5KHNpemU6IG51bWJlciwgdmFsdWU6IGFueSk6IGFueVtdIHtcclxuXHRjb25zdCBhcnkgPSBbXTtcclxuXHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2l6ZTsgaW5kZXgrKykge1xyXG5cdFx0YXJ5LnB1c2godmFsdWUpO1xyXG5cdH1cclxuXHRyZXR1cm4gYXJ5O1xyXG59XHJcblxyXG4vKipcclxuICogVHVybiBhIHNpbmdsZSB0b2tlbiBpbnRvIGEgdGhpbmcgdGhhdCBjYW4gYmUgYSBjaGlsZCBvZiBhIE5vZGVcclxuICogQHBhcmFtIHRva2VuIFRoZSB0b2tlblxyXG4gKiBAcGFyYW0gdmFycyBBcnJheSB3aXRoIHRoZSB2YXJpYWJsZXMgd2UndmUgZW5jb3VudGVyZWQgc28gZmFyIGFuZCBvcGVuIHNwYWNlIGZvciB0aGUgbnVtYmVyIG9mIHJlbWFpbmluZyB2YXJpYWJsZXMgYWxsb3dlZFxyXG4gKiBAcmV0dXJucyBUaGUgdG9rZW4gdHVybmVkIGludG8gYSB0eXBlIHRoYXQgY2FuIGJlIGEgY2hpbGQgb2YgYSBOb2RlXHJcbiAqL1xyXG5mdW5jdGlvbiB0dXJuVG9rZW5JbnRvQ2hpbGQodG9rZW46IFRva2VuLCB2YXJzOiAoc3RyaW5nIHwgbnVsbClbXSk6IE5vZGVDaGlsZCB7XHJcblx0c3dpdGNoICh0b2tlbi50eXBlKSB7XHJcblx0XHRjYXNlIFRva2VuVHlwZS5TdHJpbmc6XHJcblx0XHRcdGlmICh0b2tlbi50ZXh0ID09PSBcImlcIikge1xyXG5cdFx0XHRcdHJldHVybiBpbWFnKDEpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2VuLnRleHQgPT09IFwiZVwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlYWwoTWF0aC5FKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0b2tlbi50ZXh0ID09PSBcInBpXCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVhbChNYXRoLlBJKTtcclxuXHRcdFx0fSBlbHNlIGlmIChpc05hbWVkRnVuY3Rpb24odG9rZW4udGV4dCkpIHtcclxuXHRcdFx0XHRjb25zdCBmbiA9IG1hdGNoS25vd25GdW5jKHRva2VuLnRleHQpO1xyXG5cdFx0XHRcdGlmICh0b2tlbi50ZXh0ID09PSBcIml0ZXJhdGVcIikge1xyXG5cdFx0XHRcdFx0dGhyb3cgXCJpdGVyYXRlIGNhbm5vdCBiZSB1c2VkIGxpa2UgdGhpcyAoSSdtIG5vdCBzdXJlIHdoYXQgeW91IGVudGVyZWQsIGJ1dCBpdCdzIHdyb25nKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZm4gYXMgQ29tcGxleEZ1bmN0aW9uO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIE90aGVyd2lzZSwgaXQncyBhIHZhcmlhYmxlXHJcblx0XHRcdFx0aWYgKCFjYW5Vc2VWYXIodG9rZW4udGV4dCwgdmFycykpIHtcclxuXHRcdFx0XHRcdHRocm93IHRvb01hbnlWYXJzRXJyKHRva2VuLnRleHQsIHZhcnMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdCBpbmQgPSB2YXJzLmluZGV4T2YodG9rZW4udGV4dCk7XHJcblx0XHRcdFx0Y29uc3QgdmFyaWFibGU6IFZhcmlhYmxlID0ge1xyXG5cdFx0XHRcdFx0bmFtZTogdG9rZW4udGV4dCxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBpbmQgKyAxLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0cmV0dXJuIHZhcmlhYmxlO1xyXG5cdFx0XHR9XHJcblx0XHRjYXNlIFRva2VuVHlwZS5OdW1iZXI6XHJcblx0XHRcdHJldHVybiByZWFsKHBhcnNlRmxvYXQodG9rZW4udGV4dCkpO1xyXG5cdFx0Y2FzZSBUb2tlblR5cGUuQ29tbWE6XHJcblx0XHRcdHRocm93IFwiUm9ndWUgY29tbWEgZGV0ZWN0ZWRcIjtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHRocm93IChcclxuXHRcdFx0XHQnU29tZXRoaW5nIHdlbnQgd3Jvbmc7IGVuY291bnRlcmVkIFwiJyArXHJcblx0XHRcdFx0dG9rZW4udGV4dCArXHJcblx0XHRcdFx0J1wiIHdoZXJlIEkgZGlkIG5vdCBleHBlY3QgaXQuIFRoaXMgc2hvdWxkIG5vdCBoYXZlIGJlZW4gcG9zc2libGUhJ1xyXG5cdFx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB3ZSBjYW4gdXNlIGEgdmFyaWFibGUgd2l0aCB0aGlzIG5hbWUgZ2l2ZW4gdGhlIHZhcmlhYmxlcyBzZWVuIHNvIGZhci4gQWxzbyBhZGRzIHZhcmlhYmxlIHRvIHRoZSB2YXJpYWJsZSBhcnJheSBpZiB3ZSBjYW4gdXNlIGl0LlxyXG4gKiBAcGFyYW0gdmFyTmFtZSBUaGUgbmFtZSBvZiB0aGUgcG90ZW50aWFsIHZhcmlhYmxlXHJcbiAqIEBwYXJhbSB2YXJzIEFycmF5IHdpdGggdGhlIHZhcmlhYmxlcyB3ZSd2ZSBlbmNvdW50ZXJlZCBzbyBmYXIgYW5kIG9wZW4gc3BhY2UgZm9yIHRoZSBudW1iZXIgb2YgcmVtYWluaW5nIHZhcmlhYmxlcyBhbGxvd2VkXHJcbiAqL1xyXG5mdW5jdGlvbiBjYW5Vc2VWYXIodmFyTmFtZTogc3RyaW5nLCB2YXJBcnk6IChzdHJpbmcgfCBudWxsKVtdKSB7XHJcblx0aWYgKHZhckFyeS5pbmRleE9mKHZhck5hbWUpID49IDApIHtcclxuXHRcdC8vIHllcCwgd2UndmUgdXNlZCBpdCBiZWZvcmVcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRsZXQgbmV4dFNwb3QgPSB2YXJBcnkuaW5kZXhPZihudWxsKTtcclxuXHRpZiAobmV4dFNwb3QgPCAwKSB7XHJcblx0XHQvLyBub3BlLCB0b28gbWFueVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyB5ZXAsIGFkZCBpdFxyXG5cdFx0dmFyQXJ5W25leHRTcG90XSA9IHZhck5hbWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIGVycm9yIHN0cmluZyBmb3Igd2hlbiB0aGVyZSBhcmUgdG9vIG1hbnkgdmFyaWFibGVzIHVzZWRcclxuICogQHBhcmFtIGV4dHJhVmFyIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0aGF0IGJyb2tlIHRoZSBjYW1lbCdzIGJhY2tcclxuICogQHBhcmFtIHZhcnMgQXJyYXkgd2l0aCB0aGUgdmFyaWFibGVzIHdlJ3ZlIGVuY291bnRlcmVkIHNvIGZhciBhbmQgb3BlbiBzcGFjZSBmb3IgdGhlIG51bWJlciBvZiByZW1haW5pbmcgdmFyaWFibGVzIGFsbG93ZWRcclxuICovXHJcbmZ1bmN0aW9uIHRvb01hbnlWYXJzRXJyKGV4dHJhVmFyOiBzdHJpbmcsIHZhcnM6IChzdHJpbmcgfCBudWxsKVtdKSB7XHJcblx0bGV0IGVyciA9IFwiVG9vIG1hbnkgdmFyaWFibGVzOiBcIjtcclxuXHRpZiAodmFycy5sZW5ndGggPT09IDApIHtcclxuXHRcdHJldHVybiBlcnIgKyBleHRyYVZhcjtcclxuXHR9IGVsc2UgaWYgKHZhcnMubGVuZ3RoID09PSAxKSB7XHJcblx0XHRlcnIgKz0gdmFyc1swXSArIFwiIFwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRmb3IgKGxldCB2YXJOYW1lIG9mIHZhcnMpIHtcclxuXHRcdFx0aWYgKHZhck5hbWUgIT09IG51bGwpIHtcclxuXHRcdFx0XHRlcnIgKz0gdmFyTmFtZSArIFwiLCBcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRlcnIgKz0gXCJhbmQgXCIgKyBleHRyYVZhcjtcclxuXHRyZXR1cm4gZXJyO1xyXG59XHJcbiIsImV4cG9ydCB7IFRva2VuLCBUb2tlblR5cGUsIHRva2VuaXplIH07XHJcblxyXG5jb25zdCBMRVRURVJTID0gKCgpID0+IHtcclxuXHRjb25zdCBsZXR0ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG5cdGZvciAodmFyIGkgPSA2NTsgaSA8PSA5MDsgaSsrKSBsZXR0ZXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7XHJcblx0Zm9yICh2YXIgaSA9IDk3OyBpIDw9IDEyMjsgaSsrKSBsZXR0ZXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShpKSk7XHJcblx0cmV0dXJuIGxldHRlcnM7XHJcbn0pKCk7XHJcbmNvbnN0IERJR0lUUyA9IFwiMDEyMzQ1Njc4OVwiLnNwbGl0KFwiXCIpO1xyXG5jb25zdCBBTFBIQU5VTUVSSUNTID0gTEVUVEVSUy5jb25jYXQoRElHSVRTKTtcclxuY29uc3QgQVJJVEhNRVRJQ19GVU5DVElPTlMgPSBcIistKi9eXCIuc3BsaXQoXCJcIik7XHJcblxyXG4vKipcclxuICogRW51bSBmb3IgdGhlIHR5cGUgb2YgYSB0b2tlblxyXG4gKi9cclxuZW51bSBUb2tlblR5cGUge1xyXG5cdEZ1bmN0aW9uLFxyXG5cdFBhcmVudGhlc2lzLFxyXG5cdFN0cmluZyxcclxuXHROdW1iZXIsXHJcblx0Q29tbWEsXHJcblx0U3F1YXJlQnJhY2tldCxcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBzdHJpbmcgYnVmZmVyIHRoYXQgZ2V0cyBvbmUgY2hhcmFjdGVyIGF0IGEgdGltZVxyXG4gKi9cclxuY2xhc3MgU3RyQnVmZmVyIHtcclxuXHQvLyBDdXJyZW50IHBvc2l0aW9uXHJcblx0aW5kOiBudW1iZXI7XHJcblx0Ly8gQXJyYXkgb2YgY2hhcmFjdGVyc1xyXG5cdGFyeTogc3RyaW5nW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHN0cjogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmluZCA9IDA7XHJcblx0XHR0aGlzLmFyeSA9IHN0ci5zcGxpdChcIlwiKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldHMgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZSBzdHJpbmcsIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBub3Qgb25lXHJcblx0ICovXHJcblx0bmV4dENoYXIoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLmFyeVt0aGlzLmluZCsrXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEJhY2tzIHVwIHRoZSBjdXJyZW50IHBvc2l0aW9uIGJ5IG9uZVxyXG5cdCAqL1xyXG5cdGJhY2t1cCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuaW5kIC09IDE7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBvbmUgdG9rZW4gZnJvbSB0aGUgaW5wdXQgdGV4dFxyXG4gKi9cclxuY2xhc3MgVG9rZW4ge1xyXG5cdHRleHQ6IHN0cmluZztcclxuXHR0eXBlOiBUb2tlblR5cGU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgdHlwZTogVG9rZW5UeXBlKSB7XHJcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUb2tlbml6ZXMgYSBzdHJpbmcgYW5kIHJldHVybnMgYSBsaXN0IG9mIHRoZSB0b2tlbnNcclxuICogQHBhcmFtIHN0ciBUaGUgaW5wdXQgc3RyaW5nXHJcbiAqIEByZXR1cm5zIFRoZSBsaXN0IG9mIHRva2VucyBmcm9tIHRoZSBzdHJpbmdcclxuICovXHJcbmZ1bmN0aW9uIHRva2VuaXplKHN0cjogc3RyaW5nKTogVG9rZW5bXSB7XHJcblx0Y29uc3Qgc2IgPSBuZXcgU3RyQnVmZmVyKHN0cik7XHJcblx0Y29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XHJcblx0Zm9yIChsZXQgYyA9IHNiLm5leHRDaGFyKCk7IGMgIT09IHVuZGVmaW5lZDsgYyA9IHNiLm5leHRDaGFyKCkpIHtcclxuXHRcdGxldCB0b2tlbiA9IGM7XHJcblx0XHRsZXQgdHlwZTogVG9rZW5UeXBlO1xyXG5cdFx0aWYgKEFSSVRITUVUSUNfRlVOQ1RJT05TLmluZGV4T2YoYykgPj0gMCkge1xyXG5cdFx0XHR0eXBlID0gVG9rZW5UeXBlLkZ1bmN0aW9uO1xyXG5cdFx0fSBlbHNlIGlmIChjID09PSBcIihcIiB8fCBjID09PSBcIilcIikge1xyXG5cdFx0XHR0eXBlID0gVG9rZW5UeXBlLlBhcmVudGhlc2lzO1xyXG5cdFx0fSBlbHNlIGlmIChjID09PSBcIltcIiB8fCBjID09PSBcIl1cIikge1xyXG5cdFx0XHR0eXBlID0gVG9rZW5UeXBlLlNxdWFyZUJyYWNrZXQ7XHJcblx0XHR9IGVsc2UgaWYgKGMgPT09IFwiLFwiKSB7XHJcblx0XHRcdHR5cGUgPSBUb2tlblR5cGUuQ29tbWE7XHJcblx0XHR9IGVsc2UgaWYgKExFVFRFUlMuaW5kZXhPZihjKSA+PSAwKSB7XHJcblx0XHRcdC8vIHZhcmlhYmxlLCBpLCBwaSwgc2luLCBldGMuXHJcblx0XHRcdHdoaWxlIChBTFBIQU5VTUVSSUNTLmluZGV4T2YoKGMgPSBzYi5uZXh0Q2hhcigpKSkgPj0gMCkge1xyXG5cdFx0XHRcdHRva2VuICs9IGM7XHJcblx0XHRcdH1cclxuXHRcdFx0c2IuYmFja3VwKCk7XHJcblx0XHRcdHR5cGUgPSBUb2tlblR5cGUuU3RyaW5nO1xyXG5cdFx0fSBlbHNlIGlmIChESUdJVFMuaW5kZXhPZihjKSA+PSAwIHx8IGMgPT09IFwiLlwiKSB7XHJcblx0XHRcdC8vIE51bWJlclxyXG5cdFx0XHRsZXQgaGFzRG90ID0gYyA9PT0gXCIuXCI7XHJcblx0XHRcdHdoaWxlIChESUdJVFMuaW5kZXhPZigoYyA9IHNiLm5leHRDaGFyKCkpKSA+PSAwIHx8IGMgPT09IFwiLlwiKSB7XHJcblx0XHRcdFx0aWYgKGMgPT09IFwiLlwiKSB7XHJcblx0XHRcdFx0XHRpZiAoaGFzRG90KSB7XHJcblx0XHRcdFx0XHRcdHRocm93IFwiVG9vIG1hbnkgZG90cyBpbiBhIG51bWJlcjogXCIgKyB0b2tlbiArIFwiLlwiO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aGFzRG90ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dG9rZW4gKz0gYztcclxuXHRcdFx0fVxyXG5cdFx0XHRzYi5iYWNrdXAoKTtcclxuXHRcdFx0dHlwZSA9IFRva2VuVHlwZS5OdW1iZXI7XHJcblx0XHR9IGVsc2UgaWYgKGMgPT09IFwiIFwiKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgXCJVbnJlY29nbml6ZWQgY2hhcmFjdGVyOiBcIiArIGM7XHJcblx0XHR9XHJcblx0XHR0b2tlbnMucHVzaChuZXcgVG9rZW4odG9rZW4sIHR5cGUpKTtcclxuXHR9XHJcblx0cmV0dXJuIHRva2VucztcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["befunge-info"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/index.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/index.scss ***!
  \*********************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `html,
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin: 0;
}

body {
  padding: 1%;
  background-color: #d3eded;
}

p {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

div.p {
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

div.title {
  font-size: 32pt;
  text-align: center;
  font-variant: small-caps;
  font-weight: 250;
  margin: 15px;
  margin-top: 0;
  padding-top: 15px;
  padding-bottom: 1px;
}

.card {
  background-color: white;
  min-height: 20px;
  border-radius: 10px;
  margin: 15px;
  margin-bottom: 10px;
  overflow: hidden;
  float: none;
}

.inner_card {
  width: calc(100% - 30px);
  padding: 10px 15px;
  overflow-x: auto;
}

.katex {
  text-rendering: auto;
  font: normal 1.1em KaTeX_Main, Times New Roman, serif;
  line-height: 1.2;
  text-indent: 0;
}

.katex-display {
  overflow-x: auto;
  overflow-y: hidden;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

picture > img {
  max-width: 100%;
}

.centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.fit_content {
  width: fit-content;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

/**
 * Menu Styling
 */
.menu_collapsed {
  left: 0;
  top: 0;
  background-color: #fff;
  margin: 15px;
  border-radius: 10px;
  float: left;
  z-index: 100;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.menu_expanded {
  left: 0;
  top: 0;
  background-color: #fff;
  margin: 15px;
  border-radius: 10px;
  float: left;
  z-index: 100;
  width: auto;
  height: auto;
  margin-bottom: 7.5px;
  overflow-x: hidden;
}
@media only screen and (max-aspect-ratio: 2/3) {
  .menu_expanded {
    width: -webkit-fill-available;
    width: -moz-available;
  }
}

.menu_button {
  left: 0;
  top: 0;
  background-color: #fff;
  margin: 15px;
  border-radius: 10px;
  float: left;
  z-index: 100;
  width: 50px;
  height: 50px;
  margin: 0;
  cursor: pointer;
  float: left;
}

.menu_button_inner {
  margin: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 30px;
  border-top-color: #fff;
  border-top-style: solid;
  border-top-width: 5.7142857143px;
  height: 34.2857142857px;
}

.menu_button_line {
  width: 100%;
  height: 5.7142857143px;
  margin-bottom: 5.7142857143px;
  background-color: black;
}

a.menu_item {
  color: black;
  text-decoration: none;
}
a.menu_item:hover {
  font-weight: bold;
}

ul.menu_list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
  text-align: center;
  width: 8em;
}
@media only screen and (min-aspect-ratio: 2/3) {
  ul.menu_list {
    margin-top: 55.7142857143px;
  }
}
ul.menu_list > li > a > p {
  margin: 16px 0;
}

ul.math_list > li {
  padding-bottom: 0.5em;
  list-style-type: circle;
}

.inline_code {
  font-family: "Courier New", monospace;
  padding: 1px 1px;
}

textarea.codeblock {
  font-family: "Courier New", monospace;
  width: 100%;
  resize: none;
}

span.red {
  color: red;
}
span.blue {
  color: blue;
}

.hidden {
  visibility: hidden;
}

.command_table {
  border-collapse: collapse;
  width: 100%;
}
.command_table th,
.command_table td {
  border-style: solid;
  border-width: thin;
}
.command_table th {
  font-weight: normal;
  padding: 10px;
  background-color: lightgray;
}
.command_table td {
  padding: 0.5em;
}

.subsection {
  font-size: 1em;
}

.nodisp {
  display: none;
}

.upsidedown {
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
}

.float_left {
  float: left;
}

canvas.full_canvas {
  width: 100%;
  height: 100%;
}

.nopadding {
  padding: 0;
}

.list_no_style {
  list-style-type: none;
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAKA;;EAEC,kMAAA;EAEA,SAAA;AALD;;AAQA;EACC,WAAA;EACA,yBAAA;AALD;;AAQA;EACC,uBAAA;EACA,qBAAA;EACA,wBAAA;EACA,sBAAA;AALD;;AAQA;EACC,uBAAA;EACA,qBAAA;EACA,wBAAA;EACA,sBAAA;AALD;;AAQA;EACC,eAAA;EACA,kBAAA;EACA,wBAAA;EACA,gBAAA;EACA,YAlCa;EAmCb,aAAA;EACA,iBApCa;EAuCb,mBAAA;AAPD;;AAUA;EACC,uBAAA;EACA,gBAAA;EACA,mBA5Ce;EA6Cf,YA9Ca;EA+Cb,mBAAA;EACA,gBAAA;EACA,WAAA;AAPD;;AAUA;EACC,wBAAA;EACA,kBAAA;EACA,gBAAA;AAPD;;AAWA;EACC,oBAAA;EACA,qDAAA;EACA,gBAAA;EACA,cAAA;AARD;;AAYA;EACC,gBAAA;EACA,kBAAA;EAEA,kBAAA;EACA,qBAAA;EACA,iBAAA;EACA,oBAAA;AAVD;;AAaA;EACC,eAAA;AAVD;;AAaA;EACC,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;AAVD;;AAaA;EACC,kBAAA;AAVD;;AAaA;EACC,aAAA;EACA,eAAA;AAVD;;AAaA;;EAAA;AAkBA;EATC,OAAA;EACA,MAAA;EACA,sBAAA;EACA,YA7Ga;EA8Gb,mBA7Ge;EA8Gf,WAAA;EACA,YAAA;EAKA,WAjBqB;EAkBrB,YAlBqB;EAmBrB,eAAA;AAnBD;;AAsBA;EAhBC,OAAA;EACA,MAAA;EACA,sBAAA;EACA,YA7Ga;EA8Gb,mBA7Ge;EA8Gf,WAAA;EACA,YAAA;EAYA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,kBAAA;AAbD;AAeC;EAPD;IAQE,6BAAA;IACA,qBAAA;EAZA;AACF;;AAeA;EA7BC,OAAA;EACA,MAAA;EACA,sBAAA;EACA,YA7Ga;EA8Gb,mBA7Ge;EA8Gf,WAAA;EACA,YAAA;EAyBA,WArCqB;EAsCrB,YAtCqB;EAuCrB,SAAA;EACA,eAAA;EACA,WAAA;AAND;;AASA;EACC,YA5CwB;EA6CxB,eA5CuB;EA6CvB,kBA7CuB;EA8CvB,WAAA;EACA,sBAAA;EACA,uBAAA;EACA,gCAAA;EACA,uBAAA;AAND;;AASA;EACC,WAAA;EACA,sBAAA;EACA,6BAAA;EACA,uBAAA;AAND;;AASA;EACC,YAAA;EACA,qBAAA;AAND;AAQC;EACC,iBAAA;AANF;;AAUA;EACC,qBAAA;EACA,UAAA;EACA,mBAzEwB;EA0ExB,kBAAA;EACA,UAAA;AAPD;AAQC;EAND;IAOE,2BAAA;EALA;AACF;AAOC;EACC,cAAA;AALF;;AASA;EACC,qBAAA;EACA,uBAAA;AAND;;AASA;EACC,qCAAA;EACA,gBAAA;AAND;;AASA;EACC,qCAAA;EACA,WAAA;EACA,YAAA;AAND;;AAUC;EACC,UAAA;AAPF;AASC;EACC,WAAA;AAPF;;AAWA;EACC,kBAAA;AARD;;AAWA;EACC,yBAAA;EACA,WAAA;AARD;AAUC;;EAEC,mBAAA;EACA,kBAAA;AARF;AAWC;EACC,mBAAA;EACA,aAAA;EACA,2BAAA;AATF;AAYC;EACC,cAAA;AAVF;;AAcA;EACC,cAAA;AAXD;;AAcA;EACC,aAAA;AAXD;;AAcA;EACC,6BAAA;EACA,qBAAA;AAXD;;AAcA;EACC,WAAA;AAXD;;AAcA;EACC,WAAA;EACA,YAAA;AAXD;;AAcA;EACC,UAAA;AAXD;;AAcA;EACC,qBAAA;AAXD","sourcesContent":["@use \"sass:math\";\r\n\r\n$page-margin: 15px;\r\n$border-radius: 10px;\r\n\r\nhtml,\r\nbody {\r\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\",\r\n\t\tsans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n\tmargin: 0;\r\n}\r\n\r\nbody {\r\n\tpadding: 1%;\r\n\tbackground-color: #d3eded;\r\n}\r\n\r\np {\r\n\tmargin-block-start: 1em;\r\n\tmargin-block-end: 1em;\r\n\tmargin-inline-start: 0px;\r\n\tmargin-inline-end: 0px;\r\n}\r\n\r\ndiv.p {\r\n\tmargin-block-start: 1em;\r\n\tmargin-block-end: 1em;\r\n\tmargin-inline-start: 0px;\r\n\tmargin-inline-end: 0px;\r\n}\r\n\r\ndiv.title {\r\n\tfont-size: 32pt;\r\n\ttext-align: center;\r\n\tfont-variant: small-caps;\r\n\tfont-weight: 250;\r\n\tmargin: $page-margin;\r\n\tmargin-top: 0;\r\n\tpadding-top: $page-margin;\r\n\t// Add 1px of padding under the title. Without this, for some reason, Chrome on mobile would squish the topmost Card under the title to the right\r\n\t// (only Chrome, and only on actual mobile device. Desktop Chrome pretending to be a mobile device was fine) \r\n\tpadding-bottom: 1px;\r\n}\r\n\r\n.card {\r\n\tbackground-color: white;\r\n\tmin-height: 20px;\r\n\tborder-radius: $border-radius;\r\n\tmargin: $page-margin;\r\n\tmargin-bottom: 10px;\r\n\toverflow: hidden;\r\n\tfloat: none;\r\n}\r\n\r\n.inner_card {\r\n\twidth: calc(100% - 30px);\r\n\tpadding: 10px 15px;\r\n\toverflow-x: auto;\r\n}\r\n\r\n// KaTeX override to make the font slightly smaller\r\n.katex {\r\n\ttext-rendering: auto;\r\n\tfont: normal 1.1em KaTeX_Main, Times New Roman, serif;\r\n\tline-height: 1.2;\r\n\ttext-indent: 0;\r\n}\r\n\r\n// If the math goes off the screen allow scrolling\r\n.katex-display {\r\n\toverflow-x: auto;\r\n\toverflow-y: hidden;\r\n\t// Need to add some padding so the scrollbar doesn't cover the text\r\n\tpadding-top: 0.5em;\r\n\tpadding-bottom: 0.5em;\r\n\tmargin-top: 0.5em;\r\n\tmargin-bottom: 0.5em;\r\n}\r\n\r\npicture > img {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.centered {\r\n\tdisplay: block;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n.fit_content {\r\n\twidth: fit-content;\r\n}\r\n\r\n.flex {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n/**\r\n * Menu Styling\r\n */\r\n$menu-collapsed-size: 50px;\r\n$menu-inner-side-margin: $menu-collapsed-size * 0.2;\r\n$menu-inner-top-margin: $menu-collapsed-size * 0.1;\r\n$menu-inner-button-height: $menu-collapsed-size - 2 * $menu-inner-top-margin;\r\n\r\n@mixin menu() {\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground-color: #fff;\r\n\tmargin: $page-margin;\r\n\tborder-radius: $border-radius;\r\n\tfloat: left;\r\n\tz-index: 100;\r\n}\r\n\r\n.menu_collapsed {\r\n\t@include menu();\r\n\twidth: $menu-collapsed-size;\r\n\theight: $menu-collapsed-size;\r\n\tcursor: pointer;\r\n}\r\n\r\n.menu_expanded {\r\n\t@include menu();\r\n\twidth: auto;\r\n\theight: auto;\r\n\tmargin-bottom: math.div($page-margin, 2);\r\n\toverflow-x: hidden;\r\n\r\n\t@media only screen and (max-aspect-ratio: 2/3) {\r\n\t\twidth: -webkit-fill-available;\r\n\t\twidth: -moz-available;\r\n\t}\r\n}\r\n\r\n.menu_button {\r\n\t@include menu();\r\n\twidth: $menu-collapsed-size;\r\n\theight: $menu-collapsed-size;\r\n\tmargin: 0;\r\n\tcursor: pointer;\r\n\tfloat: left;\r\n}\r\n\r\n.menu_button_inner {\r\n\tmargin: $menu-inner-side-margin;\r\n\tmargin-top: $menu-inner-top-margin;\r\n\tmargin-bottom: $menu-inner-top-margin;\r\n\twidth: $menu-collapsed-size - 2 * $menu-inner-side-margin;\r\n\tborder-top-color: #fff;\r\n\tborder-top-style: solid;\r\n\tborder-top-width: math.div($menu-inner-button-height, 7);\r\n\theight: math.div($menu-inner-button-height * 6, 7);\r\n}\r\n\r\n.menu_button_line {\r\n\twidth: 100%;\r\n\theight: math.div($menu-inner-button-height, 7);\r\n\tmargin-bottom: math.div($menu-inner-button-height, 7);\r\n\tbackground-color: black;\r\n}\r\n\r\na.menu_item {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n\r\n\t&:hover {\r\n\t\tfont-weight: bold;\r\n\t}\r\n}\r\n\r\nul.menu_list {\r\n\tlist-style-type: none;\r\n\tpadding: 0;\r\n\tmargin-bottom: $menu-inner-side-margin;\r\n\ttext-align: center;\r\n\twidth: 8em;\r\n\t@media only screen and (min-aspect-ratio: 2/3) {\r\n\t\tmargin-top: $menu-collapsed-size + math.div($menu-inner-button-height, 7);\r\n\t}\r\n\r\n\t& > li > a > p {\r\n\t\tmargin: 16px 0;\r\n\t}\r\n}\r\n\r\nul.math_list > li {\r\n\tpadding-bottom: 0.5em;\r\n\tlist-style-type: circle;\r\n}\r\n\r\n.inline_code {\r\n\tfont-family: \"Courier New\", monospace;\r\n\tpadding: 1px 1px;\r\n}\r\n\r\ntextarea.codeblock {\r\n\tfont-family: \"Courier New\", monospace;\r\n\twidth: 100%;\r\n\tresize: none;\r\n}\r\n\r\nspan {\r\n\t&.red {\r\n\t\tcolor: red;\r\n\t}\r\n\t&.blue {\r\n\t\tcolor: blue;\r\n\t}\r\n}\r\n\r\n.hidden {\r\n\tvisibility: hidden;\r\n}\r\n\r\n.command_table {\r\n\tborder-collapse: collapse;\r\n\twidth: 100%;\r\n\r\n\tth,\r\n\ttd {\r\n\t\tborder-style: solid;\r\n\t\tborder-width: thin;\r\n\t}\r\n\r\n\tth {\r\n\t\tfont-weight: normal;\r\n\t\tpadding: 10px;\r\n\t\tbackground-color: lightgray;\r\n\t}\r\n\r\n\ttd {\r\n\t\tpadding: 0.5em;\r\n\t}\r\n}\r\n\r\n.subsection {\r\n\tfont-size: 1em;\r\n}\r\n\r\n.nodisp {\r\n\tdisplay: none;\r\n}\r\n\r\n.upsidedown {\r\n\t-webkit-transform: scaleY(-1);\r\n\ttransform: scaleY(-1);\r\n}\r\n\r\n.float_left {\r\n\tfloat: left;\r\n}\r\n\r\ncanvas.full_canvas {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.nopadding {\r\n\tpadding: 0;\r\n}\r\n\r\n.list_no_style {\r\n\tlist-style-type: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/images/choco.png":
/*!******************************!*\
  !*** ./src/images/choco.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/choco.png");

/***/ }),

/***/ "./src/images/choco.webp":
/*!*******************************!*\
  !*** ./src/images/choco.webp ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/choco.webp");

/***/ }),

/***/ "./src/images/compass.png":
/*!********************************!*\
  !*** ./src/images/compass.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/compass.png");

/***/ }),

/***/ "./src/images/compass.webp":
/*!*********************************!*\
  !*** ./src/images/compass.webp ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/compass.webp");

/***/ }),

/***/ "./src/images/heart.png":
/*!******************************!*\
  !*** ./src/images/heart.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/heart.png");

/***/ }),

/***/ "./src/images/heart.webp":
/*!*******************************!*\
  !*** ./src/images/heart.webp ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/heart.webp");

/***/ }),

/***/ "./src/images/home.png":
/*!*****************************!*\
  !*** ./src/images/home.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/home.png");

/***/ }),

/***/ "./src/images/home.webp":
/*!******************************!*\
  !*** ./src/images/home.webp ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/home.webp");

/***/ }),

/***/ "./src/images/mushroom.png":
/*!*********************************!*\
  !*** ./src/images/mushroom.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/mushroom.png");

/***/ }),

/***/ "./src/images/mushroom.webp":
/*!**********************************!*\
  !*** ./src/images/mushroom.webp ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/mushroom.webp");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/befunge-info.tsx":
/*!******************************!*\
  !*** ./src/befunge-info.tsx ***!
  \******************************/
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
const BefungeInfo_1 = __importDefault(__webpack_require__(/*! ./components/BefungeInfo */ "./src/components/BefungeInfo.tsx"));
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
(0, react_dom_1.render)(React.createElement(BefungeInfo_1.default, null), document.querySelector("#root"));


/***/ }),

/***/ "./src/components/BefungeInfo.tsx":
/*!****************************************!*\
  !*** ./src/components/BefungeInfo.tsx ***!
  \****************************************/
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
const Card_1 = __importDefault(__webpack_require__(/*! ./Card */ "./src/components/Card.tsx"));
const Menu_1 = __importDefault(__webpack_require__(/*! ./Menu */ "./src/components/Menu.tsx"));
const TeX_1 = __importDefault(__webpack_require__(/*! ./TeX */ "./src/components/TeX.tsx"));
const BefungeInfo = () => (React.createElement(React.Fragment, null,
    React.createElement(Menu_1.default, null),
    React.createElement("div", { className: "title" }, "About Befunge 93\u2013\u221E"),
    React.createElement(Card_1.default, null,
        React.createElement("h3", { id: "introduction" }, "Introduction"),
        React.createElement("p", null,
            "Befunge is a two-dimensional, toroidal, self-modifying programming language; it was created in 1993 in an attempt to create a language as difficult to compile as possible. Instead of having a program counter that just counts lines, Befunge features a program counter with both x and y coordinates (now called an ",
            React.createElement("em", null, "instruction pointer"),
            " [IP]). Furthermore, the IP will wrap around the top, bottom, or sides of the program, making your code a torus! Oh, and it's self-modifying."),
        React.createElement("p", null,
            "The original Befunge language, officially called",
            " ",
            React.createElement("a", { href: "//github.com/catseye/Befunge-93/blob/master/doc/Befunge-93.markdown" }, "Befunge 93"),
            ", has an ",
            React.createElement(TeX_1.default, null, "80\\times 25"),
            "-character area for input, an IP, and a stack. The second iteration, ",
            React.createElement("a", { href: "//quadium.net/funge/spec98.html" }, "Befunge 98"),
            ", introduced a lot of fun new features; it has an unbounded input area, supports multithreading with multiple instruction pointers, and gives each IP a modifiable velocity vector and a stack of stacks. It also supports libraries via \"fingerprints,\" and the specification describes variants of Befunge in three dimensions or higher."),
        React.createElement("p", null, "Befunge 93\u2013\u221E is the result of me taking the parts of each that I like and putting them together. It's basically like Befunge 93 with unbounded size and unbounded integers (hence the name), multithreading, arbitrary IP velocities, and stacks of stacks.")),
    React.createElement(Card_1.default, null,
        React.createElement("h3", { id: "Notes" }, " Notes "),
        React.createElement("p", null,
            "Back at ",
            React.createElement("a", { href: "/befunge.html" }, "befunge.html"),
            ", you can run code with or without the \"state,\" which shows the code, pointers, and stack of stacks after each step. If the state is displayed, the \"wait\" time is how long to pause between steps. Even with a wait time of 0 it's pretty slow; running with the state hidden is much faster."),
        React.createElement("p", null, "Also, even though each pointer has its own stack of stacks, the only one displayed is the one belonging to the \"top\" pointer (when a new pointer is created, it is placed onto the list of pointers one spot \"below\" the current pointer)."),
        React.createElement("p", null,
            "For more sophisticated example programs, see",
            " ",
            React.createElement("a", { href: "//github.com/catseye/Befunge-93/blob/master/eg/README.markdown" }, "here"),
            " \u2013",
            " ",
            React.createElement("a", { href: "https://raw.githubusercontent.com/catseye/Befunge-93/master/eg/aturley.bf" }, "aturley.bf"),
            ",",
            " ",
            React.createElement("a", { href: "https://raw.githubusercontent.com/catseye/Befunge-93/master/eg/befbef2.bf" }, "befbef2.bf"),
            ", and",
            " ",
            React.createElement("a", { href: "https://raw.githubusercontent.com/catseye/Befunge-93/master/eg/life.bf" }, "life.bf"),
            " ",
            "are especially cool. Also check out ",
            React.createElement("a", { href: "//www.bedroomlan.org/coding/soup/" }, "this"),
            " ",
            "beautiful quine.")),
    React.createElement(Card_1.default, null,
        React.createElement("h3", { id: "details" }, "Details"),
        React.createElement("p", null, "Some ways in which Befunge 93\u2013\u221E differs from Befunge 93; many of the bonus features are borrowed from Befunge 98."),
        React.createElement("ol", { type: "a" },
            React.createElement("li", null, "Code is treated as a resizeable torus, with a size that is determined at runtime and may be changed. More specifically: viewing each character as a 1-by-1 square with integer vertices (a \"cell\"), we take the smallest bounding box of the cells, and identify the edges to create a torus. If, at some point during program execution, we write to a cell that is not in this bounding box, we take the new smallest bounding box containing all cells including the new one, and identify these edges to create a larger torus."),
            React.createElement("li", null, "We can still only write to cells with non-negative integer coordinates, so the grid is unbounded to the East and South."),
            React.createElement("li", null, "Arbitrarily large integers are supported, and program size is theoretically unbounded (in practice limited to the maximum size of a JavaScript array)."),
            React.createElement("li", null, "The IP initially moves right at a speed of one cell per step, and will remain at that speed if only Befunge 93 commands are used. However, it can also be set to any velocity using \"x\"."),
            React.createElement("li", null, "Instead of a single stack there is a stack of stacks, which initially contains one stack. All stack operations from Befunge 93 operate on the stack that is at the top of the stack of stacks (called the Top-Of-Stack Stack, or the TOSS)."),
            React.createElement("li", null, "Multithreading is supported with the \"t\" instruction, which splits the current pointer in two.")),
        React.createElement("p", null, "Despite the differences, this implementation should be able to run most Befunge 93 programs, with the exception of those that depend on edge case behavior like not being able to write out of bounds.")),
    React.createElement(Card_1.default, null,
        React.createElement("h3", { id: "refTable" }, "Reference Tables"),
        React.createElement("p", null, "The available instructions. Many of the advanced instructions come from Befunge 98, but some of them work differently. In general, when the program can't do what an instruction specifies (e.g. there are not enough things on the stack, or it tries to write to a negative position), it simply does nothing. Here \"IP\" stands for \"instruction pointer,\" \"delta\" is the velocity vector of the IP in question, the \"TOSS\" is the \"Top Of Stack Stack,\" and the \"SOSS\" is the \"Second Of Stack Stack\" (the one that becomes the TOSS if the TOSS is popped off)."),
        React.createElement("h3", { className: "subsection" }, "Basic Instructions"),
        React.createElement("table", { className: "command_table" },
            React.createElement("colgroup", null,
                React.createElement("col", { style: { width: "15%" } }),
                React.createElement("col", { style: { width: "15%" } }),
                React.createElement("col", { style: { width: "70%" } })),
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("th", null, " Instruction "),
                    React.createElement("th", null, " Name "),
                    React.createElement("th", null, " Explanation ")),
                React.createElement("tr", null,
                    React.createElement("td", null, "0,1,..., or 9"),
                    React.createElement("td", null, "Push number"),
                    React.createElement("td", null, "Pushes 0,1,..., or 9 to the top-of-stack stack (TOSS)")),
                React.createElement("tr", null,
                    React.createElement("td", null, "a,b,c,d,e, or f"),
                    React.createElement("td", null, "Push number"),
                    React.createElement("td", null, "Pushes 10,11,12,13,14, or 15 to the TOSS")),
                React.createElement("tr", null,
                    React.createElement("td", null, "^"),
                    React.createElement("td", null, "Go North"),
                    React.createElement("td", null, "Sets delta to be a unit vector pointing North. IP will begin traveling up at a speed of 1 instruction per step.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "v"),
                    React.createElement("td", null, "Go South"),
                    React.createElement("td", null, "Sets delta to be a unit vector pointing South. IP will begin traveling down at a speed of 1 instruction per step.")),
                React.createElement("tr", null,
                    React.createElement("td", null, ">"),
                    React.createElement("td", null, "Go East"),
                    React.createElement("td", null, "Sets delta to be a unit vector pointing East. IP will begin traveling right at a speed of 1 instruction per step.")),
                React.createElement("tr", null,
                    React.createElement("td", null, " < "),
                    React.createElement("td", null, "Go West"),
                    React.createElement("td", null, "Sets delta to be a unit vector pointing West. IP will begin traveling left at a speed of 1 instruction per step.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "?"),
                    React.createElement("td", null, "Go away!"),
                    React.createElement("td", null, "Randomly acts like one of ^, v, >, or <. ")),
                React.createElement("tr", null,
                    React.createElement("td", null, "+, -, *, /, %"),
                    React.createElement("td", null, "Add, subtract, multiply, divide, modulo"),
                    React.createElement("td", null,
                        "Pops the top two values off the TOSS, performs the operation in question, and pushes the result onto the TOSS. The first value popped will be on the right hand side of the operator. For instance, 5 3 - becomes 2. Division is integer division, with the result rounded down to the nearest integer. Modulo behaves as it does in JavaScript, C, etc. \u2013 it will be ",
                        React.createElement(TeX_1.default, null, "\\leq"),
                        "0 iff the left hand side is negative. Anything mod 0 is 0 by convention (and the Befungian philosophy of never throwing errors).")),
                React.createElement("tr", null,
                    React.createElement("td", null, ". (period)"),
                    React.createElement("td", null, "Output integer"),
                    React.createElement("td", null,
                        "Pops a value off the TOSS and writes it to output as an integer in base ten, followed by a space. (if you don't want the space, print a backspace character after (character code 8)",
                        " ")),
                React.createElement("tr", null,
                    React.createElement("td", null, ", (comma)"),
                    React.createElement("td", null, "Output character"),
                    React.createElement("td", null, "Pops a value off the TOSS and writes the corresponding unicode character to output. (pro tip: a newline is character 10)")),
                React.createElement("tr", null,
                    React.createElement("td", null, "\""),
                    React.createElement("td", null, "Enter/Exit stringmode"),
                    React.createElement("td", null, "When in stringmode, each character under the pointer is pushed to the stack instead of being executed. For instance, if the IP travels over \"Hello world!\", the TOSS will have the character codes for H,e,...,d,! on top. Note that if there are multiple pointers each will have its own stringmode toggle.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "!"),
                    React.createElement("td", null, "Negate!"),
                    React.createElement("td", null, "Pops the top value off the TOSS, and pushes its negation: 1 if the value is 0, and 0 if the value is nonzero.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "` (backtick)"),
                    React.createElement("td", null, "Greater than"),
                    React.createElement("td", null, "Pops b, then a, off the TOSS and compares them. Pushes 1 if a>b, otherwise pushes 0.")),
                React.createElement("tr", null,
                    React.createElement("td", null, ":"),
                    React.createElement("td", null, "Duplicate"),
                    React.createElement("td", null, "Pops a value off the TOSS, then pushes two copies of that value back onto the TOSS.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "$"),
                    React.createElement("td", null, "Discard"),
                    React.createElement("td", null, "Pops a value off the TOSS and discards it.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "\\"),
                    React.createElement("td", null, "Swap"),
                    React.createElement("td", null, "Swaps the top two elements on the TOSS. In other words: pops a, pops b, pushes a, pushes b.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "#"),
                    React.createElement("td", null, "Bridge"),
                    React.createElement("td", null, "Skips over the next cell, so on the next step the IP moves twice as far as it otherwise would (before skipping over spaces, if applicable).")),
                React.createElement("tr", null,
                    React.createElement("td", null, "&"),
                    React.createElement("td", null, "Input integer"),
                    React.createElement("td", null, "Prompts the user for an integer, then pushes it onto the TOSS. Pushes 0 if no input is entered.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "~"),
                    React.createElement("td", null, "Input character"),
                    React.createElement("td", null, "Prompts the user for a character, then pushes its unicode value onto the TOSS. Pushes 10 if no input is entered.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "_"),
                    React.createElement("td", null, "Horizontal if"),
                    React.createElement("td", null, "Pops a value off the TOSS. If it is nonzero makes delta a unit vector pointing left, otherwise makes delta a unit vector pointing right.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "|"),
                    React.createElement("td", null, "Vertical if"),
                    React.createElement("td", null, "Pops a value off the TOSS. If it is nonzero makes delta a unit vector pointing up, otherwise makes delta a unit vector pointing down.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "g"),
                    React.createElement("td", null, "Get"),
                    React.createElement("td", null, "Pops values y, then x off the TOSS. Gets the value currently at position (x,y) in the program grid, and pushes it onto the stack. (top left is (0,0), x increases to the right, and y increases going down).")),
                React.createElement("tr", null,
                    React.createElement("td", null, "p"),
                    React.createElement("td", null, "Put"),
                    React.createElement("td", null, "Pops values y, then x, then v off the TOSS. Puts v at position (x,y) in the program grid. Note that if this value v is the unicode number of an instruction, the program will treat it just like any other instruction. (if v is not the unicode number of a character it is still placed at that position, and \"g\" will still get it, but it's displayed as \"\u00D8\" in the \"State\" section)")),
                React.createElement("tr", null,
                    React.createElement("td", null, "q"),
                    React.createElement("td", null, "Quit"),
                    React.createElement("td", null, "Quits the program.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "@"),
                    React.createElement("td", null, "Stop"),
                    React.createElement("td", null, "Stops a pointer that lands on it. If that was the only pointer, quits the program.")),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("span", { style: { backgroundColor: "lightblue" } }, "\u00A0"),
                        " (space)"),
                    React.createElement("td", null, "No op"),
                    React.createElement("td", null, "Does nothing. Whenever the IP lands on a space outside of stringmode it immediately moves again, jumping over all spaces until it reaches a non-space character.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "Anything not defined"),
                    React.createElement("td", null, "No op II"),
                    React.createElement("td", null, "Does nothing, but the IP doesn't jump over it.")))),
        React.createElement("br", null),
        React.createElement("h3", { className: "subsection" }, "Advanced Instructions (not in Befunge 93)"),
        React.createElement("table", { className: "command_table" },
            React.createElement("colgroup", null,
                React.createElement("col", { style: { width: "15%" } }),
                React.createElement("col", { style: { width: "15%" } }),
                React.createElement("col", { style: { width: "70%" } })),
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("th", null, " Instruction "),
                    React.createElement("th", null, " Name "),
                    React.createElement("th", null, " Explanation ")),
                React.createElement("tr", null,
                    React.createElement("td", null, "n"),
                    React.createElement("td", null, "Clear stack"),
                    React.createElement("td", null, "Pops items from the TOSS until it's empty.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "{"),
                    React.createElement("td", null, "Begin block"),
                    React.createElement("td", null,
                        "Pops a value (",
                        React.createElement(TeX_1.default, null, "n"),
                        ") from the TOSS, then creates a new stack and pushes it to the stack of stacks. Then the top ",
                        React.createElement(TeX_1.default, null, "n"),
                        " values from the SOSS (which used to be the TOSS) are transferred to the new TOSS. The order of the values is preserved. If the SOSS has ",
                        React.createElement(TeX_1.default, null, "k"),
                        " elements where ",
                        React.createElement(TeX_1.default, { math: "k < n" }),
                        ", then all elements are copied but with ",
                        React.createElement(TeX_1.default, null, "n-k"),
                        " zeros below them. The new TOSS will be empty if ",
                        React.createElement(TeX_1.default, null, "n = 0"),
                        " or if the initial TOSS is empty.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "}"),
                    React.createElement("td", null, "End block"),
                    React.createElement("td", null,
                        "Pops a value (",
                        React.createElement(TeX_1.default, null, "n"),
                        ") from the TOSS, then transfers the top ",
                        React.createElement(TeX_1.default, null, "n"),
                        " ",
                        "values from the TOSS to the SOSS, then pops the TOSS from the stack of stacks. As before, if the TOSS has ",
                        React.createElement(TeX_1.default, { math: "k < n" }),
                        " elements, ",
                        React.createElement(TeX_1.default, null, "n-k"),
                        " zeros will be pushed to the SOSS before the elements are transferred. Does nothing if there is only one stack left.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "u"),
                    React.createElement("td", null, "Stack under stack"),
                    React.createElement("td", null,
                        "Pops a value (",
                        React.createElement(TeX_1.default, null, "n"),
                        ") from the TOSS, then transfers the top ",
                        React.createElement(TeX_1.default, null, "n"),
                        " ",
                        "values from the SOSS to the TOSS in a pop-push loop (order is reversed). If the SOSS has ",
                        React.createElement(TeX_1.default, { math: "k < n" }),
                        " elements, ",
                        React.createElement(TeX_1.default, null, "n-k"),
                        " zeros will be pushed to the TOSS after the SOSS is empty. Does nothing if there is only one stack left.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "r"),
                    React.createElement("td", null, "Reflect"),
                    React.createElement("td", null,
                        "Reflects the IP, multiplying its velocity vector by ",
                        React.createElement(TeX_1.default, null, "-1"),
                        ".")),
                React.createElement("tr", null,
                    React.createElement("td", null, "x"),
                    React.createElement("td", null, "Set velocity"),
                    React.createElement("td", null,
                        "Pops ",
                        React.createElement(TeX_1.default, null, "y"),
                        " then ",
                        React.createElement(TeX_1.default, null, "x"),
                        " from the TOSS, and sets delta to",
                        " ",
                        React.createElement(TeX_1.default, null, "(x, y)"),
                        ". If there are fewer than 2 values on the TOSS, does nothing.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "\u203D (interrobang)"),
                    React.createElement("td", null, "Go away\u203D"),
                    React.createElement("td", null,
                        "Randomly chooses a new velocity vector ",
                        React.createElement(TeX_1.default, null, "(x,y)"),
                        " where ",
                        React.createElement(TeX_1.default, null, "x"),
                        " and",
                        " ",
                        React.createElement(TeX_1.default, null, "y"),
                        " are not both 0.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "["),
                    React.createElement("td", null, "Turn left"),
                    React.createElement("td", null, "Rotate delta left by 90 degrees.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "]"),
                    React.createElement("td", null, "Turn right"),
                    React.createElement("td", null, "Rotate delta right by 90 degrees. To quote the Funge-98 specification, \"to remember which [of \"[\" and \"]\"] is which, visualize yourself on the seat of a bicycle, looking down at the handlebars.\"")),
                React.createElement("tr", null,
                    React.createElement("td", null, "w"),
                    React.createElement("td", null, "Compare and turn"),
                    React.createElement("td", null, "Pops b, then a, from the TOSS and compares them. If a<b, acts like \"[\"; if a>b, acts like \"]\"; if a=b, does nothing.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "t"),
                    React.createElement("td", null, "Split"),
                    React.createElement("td", null,
                        "Creates a new pointer (",
                        React.createElement(TeX_1.default, null, "p^\\prime"),
                        ") from the current pointer (",
                        React.createElement(TeX_1.default, null, "p"),
                        "). The position of ",
                        React.createElement(TeX_1.default, null, "p^\\prime"),
                        " equals ",
                        React.createElement(TeX_1.default, null, "p"),
                        "'s, the stack of",
                        " ",
                        React.createElement(TeX_1.default, null, "p^\\prime"),
                        " is a copy of ",
                        React.createElement(TeX_1.default, null, "p"),
                        "'s, and the delta of",
                        " ",
                        React.createElement(TeX_1.default, null, "p^\\prime"),
                        " equals the delta of ",
                        React.createElement(TeX_1.default, null, "p"),
                        " times ",
                        React.createElement(TeX_1.default, null, "-1"),
                        ".",
                        " ",
                        React.createElement(TeX_1.default, null, "p^\\prime"),
                        " is placed in the pointer list just before ",
                        React.createElement(TeX_1.default, null, "p"),
                        "; so in a given step, first ",
                        React.createElement(TeX_1.default, null, "p^\\prime"),
                        " is executed, and then ",
                        React.createElement(TeX_1.default, null, "p"),
                        ".")),
                React.createElement("tr", null,
                    React.createElement("td", null, "' (single quote)"),
                    React.createElement("td", null, "Fetch character"),
                    React.createElement("td", null, "Looks ahead to the cell that would be encountered next (position+delta), and pushes its value onto the TOSS. Then skips over that cell when updating its position. So, for instance, the program 'a,@ would only take three steps.")),
                React.createElement("tr", null,
                    React.createElement("td", null, "s"),
                    React.createElement("td", null, "Store character"),
                    React.createElement("td", null, "The opposite of '. Pops a value from the TOSS and places it in cell (position+delta), then skips over that cell when updating its position. If there is nothing on the TOSS, skips over the cell without changing it.")))))));
exports["default"] = BefungeInfo;


/***/ }),

/***/ "./src/components/Card.tsx":
/*!*********************************!*\
  !*** ./src/components/Card.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Card = ({ children }) => {
    return (react_1.default.createElement("div", { className: "card" },
        react_1.default.createElement("div", { className: "inner_card" }, children)));
};
exports["default"] = Card;


/***/ }),

/***/ "./src/components/Menu.tsx":
/*!*********************************!*\
  !*** ./src/components/Menu.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const home_png_1 = __importDefault(__webpack_require__(/*! ../images/home.png */ "./src/images/home.png"));
const home_webp_1 = __importDefault(__webpack_require__(/*! ../images/home.webp */ "./src/images/home.webp"));
const compass_png_1 = __importDefault(__webpack_require__(/*! ../images/compass.png */ "./src/images/compass.png"));
const compass_webp_1 = __importDefault(__webpack_require__(/*! ../images/compass.webp */ "./src/images/compass.webp"));
const choco_png_1 = __importDefault(__webpack_require__(/*! ../images/choco.png */ "./src/images/choco.png"));
const choco_webp_1 = __importDefault(__webpack_require__(/*! ../images/choco.webp */ "./src/images/choco.webp"));
const mushroom_png_1 = __importDefault(__webpack_require__(/*! ../images/mushroom.png */ "./src/images/mushroom.png"));
const mushroom_webp_1 = __importDefault(__webpack_require__(/*! ../images/mushroom.webp */ "./src/images/mushroom.webp"));
const heart_png_1 = __importDefault(__webpack_require__(/*! ../images/heart.png */ "./src/images/heart.png"));
const heart_webp_1 = __importDefault(__webpack_require__(/*! ../images/heart.webp */ "./src/images/heart.webp"));
const Menu = ({ startExpanded }) => {
    const [expanded, toggleExpanded] = (0, react_2.useState)(startExpanded !== null && startExpanded !== void 0 ? startExpanded : false);
    return (react_1.default.createElement("div", { className: expanded ? "menu_expanded" : "menu_collapsed" },
        MenuButton(expanded, toggleExpanded),
        expanded ? (react_1.default.createElement("div", { className: "centered" },
            react_1.default.createElement("ul", { className: "menu_list centered" },
                MenuItem("/", "Home", home_png_1.default, home_webp_1.default),
                MenuItem("/problems.html", "Problems", compass_png_1.default, compass_webp_1.default),
                MenuItem("/chomp.html", "Chomp", choco_png_1.default, choco_webp_1.default),
                MenuItem("/befunge.html", "Befunge", mushroom_png_1.default, mushroom_webp_1.default),
                MenuItem("/misc.html", "Miscellanea", heart_png_1.default, heart_webp_1.default)))) : null));
};
function MenuItem(reference, text, png, webp) {
    return (react_1.default.createElement("li", null,
        react_1.default.createElement("a", { className: "menu_item", href: reference },
            react_1.default.createElement("p", null,
                react_1.default.createElement("picture", null,
                    react_1.default.createElement("source", { type: "image/webp", srcSet: webp }),
                    react_1.default.createElement("img", { src: png, height: "16px", width: "16px", alt: "" })),
                "\u00A0",
                text))));
}
function MenuButton(expanded, toggleExpanded) {
    return (react_1.default.createElement("div", { className: "menu_button", onClick: () => toggleExpanded(!expanded) },
        react_1.default.createElement("div", { className: "menu_button_inner" },
            react_1.default.createElement("div", { className: "menu_button_line" }),
            react_1.default.createElement("div", { className: "menu_button_line" }),
            react_1.default.createElement("div", { className: "menu_button_line" }))));
}
exports["default"] = Menu;


/***/ }),

/***/ "./src/components/TeX.tsx":
/*!********************************!*\
  !*** ./src/components/TeX.tsx ***!
  \********************************/
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const katex_1 = __importDefault(__webpack_require__(/*! katex */ "./node_modules/katex/dist/katex.js"));
const TeX = (_a) => {
    var { children, math, block, errorColor, renderError, settings, as: asComponent } = _a, props = __rest(_a, ["children", "math", "block", "errorColor", "renderError", "settings", "as"]);
    const Component = asComponent || (block ? "div" : "span");
    const content = (children !== null && children !== void 0 ? children : math);
    const [state, setState] = (0, react_1.useState)({
        innerHtml: "",
    });
    (0, react_1.useEffect)(() => {
        try {
            const innerHtml = katex_1.default.renderToString(content, Object.assign({ displayMode: !!block, errorColor, throwOnError: !!renderError }, settings));
            setState({ innerHtml });
        }
        catch (error) {
            if (error instanceof katex_1.default.ParseError || error instanceof TypeError) {
                if (renderError) {
                    setState({ errorElement: renderError(error) });
                }
                else {
                    setState({ innerHtml: error.message });
                }
            }
            else {
                throw error;
            }
        }
    }, [block, content, errorColor, renderError, settings]);
    if ("errorElement" in state) {
        return state.errorElement;
    }
    return react_1.default.createElement(Component, Object.assign({}, props, { dangerouslySetInnerHTML: { __html: state.innerHtml } }));
};
exports["default"] = (0, react_1.memo)(TeX);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/befunge-info.tsx"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVmdW5nZS1pbmZvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sS0FBSyxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFX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TyxrQkFDN0MsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQ3BCLFVBQVUsRUFDVixZQUFZLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFDeEIsUUFBUSxFQUNWLENBQUM7WUFFSCxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3hCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZixJQUFJLEtBQUssWUFBWSxlQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssWUFBWSxTQUFTLEVBQUU7Z0JBQ3BFLElBQUksV0FBVyxFQUFFO29CQUNoQixRQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDL0M7cUJBQU07b0JBQ04sUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2lCQUN2QzthQUNEO2lCQUFNO2dCQUNOLE1BQU0sS0FBSyxDQUFDO2FBQ1o7U0FDRDtJQUNGLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXhELElBQUksY0FBYyxJQUFJLEtBQUssRUFBRTtRQUM1QixPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUM7S0FDMUI7SUFFRCxPQUFPLDhCQUFDLFNBQVMsb0JBQUssS0FBSyxJQUFFLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO0FBQ3ZGLENBQUMsQ0FBQztBQUVGLHFCQUFlLGdCQUFJLEVBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Nob2NvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Nob2NvLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb21wYXNzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NvbXBhc3Mud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hlYXJ0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hlYXJ0LndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ob21lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hvbWUud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL211c2hyb29tLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL211c2hyb29tLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/ZTlkNiIsIndlYnBhY2s6Ly8vLi9zcmMvYmVmdW5nZS1pbmZvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CZWZ1bmdlSW5mby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVYLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcbmJvZHkge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZWRlZDtcbn1cblxucCB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuZGl2LnAge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbmRpdi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzJwdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gIGZvbnQtd2VpZ2h0OiAyNTA7XG4gIG1hcmdpbjogMTVweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi5pbm5lcl9jYXJkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5rYXRleCB7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICBmb250OiBub3JtYWwgMS4xZW0gS2FUZVhfTWFpbiwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1pbmRlbnQ6IDA7XG59XG5cbi5rYXRleC1kaXNwbGF5IHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG5waWN0dXJlID4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY2VudGVyZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZml0X2NvbnRlbnQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4vKipcbiAqIE1lbnUgU3R5bGluZ1xuICovXG4ubWVudV9jb2xsYXBzZWQge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudV9leHBhbmRlZCB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA3LjVweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIC5tZW51X2V4cGFuZGVkIHtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICB3aWR0aDogLW1vei1hdmFpbGFibGU7XG4gIH1cbn1cblxuLm1lbnVfYnV0dG9uIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1lbnVfYnV0dG9uX2lubmVyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLXdpZHRoOiA1LjcxNDI4NTcxNDNweDtcbiAgaGVpZ2h0OiAzNC4yODU3MTQyODU3cHg7XG59XG5cbi5tZW51X2J1dHRvbl9saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNS43MTQyODU3MTQzcHg7XG4gIG1hcmdpbi1ib3R0b206IDUuNzE0Mjg1NzE0M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuYS5tZW51X2l0ZW0ge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmEubWVudV9pdGVtOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnVsLm1lbnVfbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOGVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIHVsLm1lbnVfbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogNTUuNzE0Mjg1NzE0M3B4O1xuICB9XG59XG51bC5tZW51X2xpc3QgPiBsaSA+IGEgPiBwIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbnVsLm1hdGhfbGlzdCA+IGxpIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbn1cblxuLmlubGluZV9jb2RlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBwYWRkaW5nOiAxcHggMXB4O1xufVxuXG50ZXh0YXJlYS5jb2RlYmxvY2sge1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG59XG5cbnNwYW4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cbnNwYW4uYmx1ZSB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY29tbWFuZF90YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbW1hbmRfdGFibGUgdGgsXG4uY29tbWFuZF90YWJsZSB0ZCB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbn1cbi5jb21tYW5kX3RhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuLmNvbW1hbmRfdGFibGUgdGQge1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLnN1YnNlY3Rpb24ge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLm5vZGlzcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi51cHNpZGVkb3duIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbn1cblxuLmZsb2F0X2xlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuY2FudmFzLmZ1bGxfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5saXN0X25vX3N0eWxlIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7O0VBRUMsa01BQUE7RUFFQSxTQUFBO0FBTEQ7O0FBUUE7RUFDQyxXQUFBO0VBQ0EseUJBQUE7QUFMRDs7QUFRQTtFQUNDLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBTEQ7O0FBUUE7RUFDQyx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQUxEOztBQVFBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBbENhO0VBbUNiLGFBQUE7RUFDQSxpQkFwQ2E7RUF1Q2IsbUJBQUE7QUFQRDs7QUFVQTtFQUNDLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkE1Q2U7RUE2Q2YsWUE5Q2E7RUErQ2IsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFQRDs7QUFVQTtFQUNDLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBEOztBQVdBO0VBQ0Msb0JBQUE7RUFDQSxxREFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVJEOztBQVlBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBVkQ7O0FBYUE7RUFDQyxlQUFBO0FBVkQ7O0FBYUE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBVkQ7O0FBYUE7RUFDQyxrQkFBQTtBQVZEOztBQWFBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7QUFWRDs7QUFhQTs7RUFBQTtBQWtCQTtFQVRDLE9BQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQTdHYTtFQThHYixtQkE3R2U7RUE4R2YsV0FBQTtFQUNBLFlBQUE7RUFLQSxXQWpCcUI7RUFrQnJCLFlBbEJxQjtFQW1CckIsZUFBQTtBQW5CRDs7QUFzQkE7RUFoQkMsT0FBQTtFQUNBLE1BQUE7RUFDQSxzQkFBQTtFQUNBLFlBN0dhO0VBOEdiLG1CQTdHZTtFQThHZixXQUFBO0VBQ0EsWUFBQTtFQVlBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWJEO0FBZUM7RUFQRDtJQVFFLDZCQUFBO0lBQ0EscUJBQUE7RUFaQTtBQUNGOztBQWVBO0VBN0JDLE9BQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQTdHYTtFQThHYixtQkE3R2U7RUE4R2YsV0FBQTtFQUNBLFlBQUE7RUF5QkEsV0FyQ3FCO0VBc0NyQixZQXRDcUI7RUF1Q3JCLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQU5EOztBQVNBO0VBQ0MsWUE1Q3dCO0VBNkN4QixlQTVDdUI7RUE2Q3ZCLGtCQTdDdUI7RUE4Q3ZCLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQU5EOztBQVNBO0VBQ0MsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQU5EOztBQVNBO0VBQ0MsWUFBQTtFQUNBLHFCQUFBO0FBTkQ7QUFRQztFQUNDLGlCQUFBO0FBTkY7O0FBVUE7RUFDQyxxQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkF6RXdCO0VBMEV4QixrQkFBQTtFQUNBLFVBQUE7QUFQRDtBQVFDO0VBTkQ7SUFPRSwyQkFBQTtFQUxBO0FBQ0Y7QUFPQztFQUNDLGNBQUE7QUFMRjs7QUFTQTtFQUNDLHFCQUFBO0VBQ0EsdUJBQUE7QUFORDs7QUFTQTtFQUNDLHFDQUFBO0VBQ0EsZ0JBQUE7QUFORDs7QUFTQTtFQUNDLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFORDs7QUFVQztFQUNDLFVBQUE7QUFQRjtBQVNDO0VBQ0MsV0FBQTtBQVBGOztBQVdBO0VBQ0Msa0JBQUE7QUFSRDs7QUFXQTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtBQVJEO0FBVUM7O0VBRUMsbUJBQUE7RUFDQSxrQkFBQTtBQVJGO0FBV0M7RUFDQyxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQVRGO0FBWUM7RUFDQyxjQUFBO0FBVkY7O0FBY0E7RUFDQyxjQUFBO0FBWEQ7O0FBY0E7RUFDQyxhQUFBO0FBWEQ7O0FBY0E7RUFDQyw2QkFBQTtFQUNBLHFCQUFBO0FBWEQ7O0FBY0E7RUFDQyxXQUFBO0FBWEQ7O0FBY0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQVhEOztBQWNBO0VBQ0MsVUFBQTtBQVhEOztBQWNBO0VBQ0MscUJBQUE7QUFYRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbiRwYWdlLW1hcmdpbjogMTVweDtcXHJcXG4kYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLFxcclxcblxcdFxcdHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRwYWRkaW5nOiAxJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDNlZGVkO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG5cXHRtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXHJcXG5cXHRtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxyXFxuXFx0bWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcclxcblxcdG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5wIHtcXHJcXG5cXHRtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXHJcXG5cXHRtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxyXFxuXFx0bWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcclxcblxcdG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi50aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAzMnB0O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDI1MDtcXHJcXG5cXHRtYXJnaW46ICRwYWdlLW1hcmdpbjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAwO1xcclxcblxcdHBhZGRpbmctdG9wOiAkcGFnZS1tYXJnaW47XFxyXFxuXFx0Ly8gQWRkIDFweCBvZiBwYWRkaW5nIHVuZGVyIHRoZSB0aXRsZS4gV2l0aG91dCB0aGlzLCBmb3Igc29tZSByZWFzb24sIENocm9tZSBvbiBtb2JpbGUgd291bGQgc3F1aXNoIHRoZSB0b3Btb3N0IENhcmQgdW5kZXIgdGhlIHRpdGxlIHRvIHRoZSByaWdodFxcclxcblxcdC8vIChvbmx5IENocm9tZSwgYW5kIG9ubHkgb24gYWN0dWFsIG1vYmlsZSBkZXZpY2UuIERlc2t0b3AgQ2hyb21lIHByZXRlbmRpbmcgdG8gYmUgYSBtb2JpbGUgZGV2aWNlIHdhcyBmaW5lKSBcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0bWluLWhlaWdodDogMjBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG5cXHRtYXJnaW46ICRwYWdlLW1hcmdpbjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0ZmxvYXQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbm5lcl9jYXJkIHtcXHJcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XFxyXFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcclxcblxcdG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8vIEthVGVYIG92ZXJyaWRlIHRvIG1ha2UgdGhlIGZvbnQgc2xpZ2h0bHkgc21hbGxlclxcclxcbi5rYXRleCB7XFxyXFxuXFx0dGV4dC1yZW5kZXJpbmc6IGF1dG87XFxyXFxuXFx0Zm9udDogbm9ybWFsIDEuMWVtIEthVGVYX01haW4sIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMjtcXHJcXG5cXHR0ZXh0LWluZGVudDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gSWYgdGhlIG1hdGggZ29lcyBvZmYgdGhlIHNjcmVlbiBhbGxvdyBzY3JvbGxpbmdcXHJcXG4ua2F0ZXgtZGlzcGxheSB7XFxyXFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXHJcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuXFx0Ly8gTmVlZCB0byBhZGQgc29tZSBwYWRkaW5nIHNvIHRoZSBzY3JvbGxiYXIgZG9lc24ndCBjb3ZlciB0aGUgdGV4dFxcclxcblxcdHBhZGRpbmctdG9wOiAwLjVlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxyXFxuXFx0bWFyZ2luLXRvcDogMC41ZW07XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxyXFxufVxcclxcblxcclxcbnBpY3R1cmUgPiBpbWcge1xcclxcblxcdG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlcmVkIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZml0X2NvbnRlbnQge1xcclxcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBNZW51IFN0eWxpbmdcXHJcXG4gKi9cXHJcXG4kbWVudS1jb2xsYXBzZWQtc2l6ZTogNTBweDtcXHJcXG4kbWVudS1pbm5lci1zaWRlLW1hcmdpbjogJG1lbnUtY29sbGFwc2VkLXNpemUgKiAwLjI7XFxyXFxuJG1lbnUtaW5uZXItdG9wLW1hcmdpbjogJG1lbnUtY29sbGFwc2VkLXNpemUgKiAwLjE7XFxyXFxuJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodDogJG1lbnUtY29sbGFwc2VkLXNpemUgLSAyICogJG1lbnUtaW5uZXItdG9wLW1hcmdpbjtcXHJcXG5cXHJcXG5AbWl4aW4gbWVudSgpIHtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdG1hcmdpbjogJHBhZ2UtbWFyZ2luO1xcclxcblxcdGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcblxcdHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfY29sbGFwc2VkIHtcXHJcXG5cXHRAaW5jbHVkZSBtZW51KCk7XFxyXFxuXFx0d2lkdGg6ICRtZW51LWNvbGxhcHNlZC1zaXplO1xcclxcblxcdGhlaWdodDogJG1lbnUtY29sbGFwc2VkLXNpemU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9leHBhbmRlZCB7XFxyXFxuXFx0QGluY2x1ZGUgbWVudSgpO1xcclxcblxcdHdpZHRoOiBhdXRvO1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiBtYXRoLmRpdigkcGFnZS1tYXJnaW4sIDIpO1xcclxcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG5cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAyLzMpIHtcXHJcXG5cXHRcXHR3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXHJcXG5cXHRcXHR3aWR0aDogLW1vei1hdmFpbGFibGU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9idXR0b24ge1xcclxcblxcdEBpbmNsdWRlIG1lbnUoKTtcXHJcXG5cXHR3aWR0aDogJG1lbnUtY29sbGFwc2VkLXNpemU7XFxyXFxuXFx0aGVpZ2h0OiAkbWVudS1jb2xsYXBzZWQtc2l6ZTtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9idXR0b25faW5uZXIge1xcclxcblxcdG1hcmdpbjogJG1lbnUtaW5uZXItc2lkZS1tYXJnaW47XFxyXFxuXFx0bWFyZ2luLXRvcDogJG1lbnUtaW5uZXItdG9wLW1hcmdpbjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAkbWVudS1pbm5lci10b3AtbWFyZ2luO1xcclxcblxcdHdpZHRoOiAkbWVudS1jb2xsYXBzZWQtc2l6ZSAtIDIgKiAkbWVudS1pbm5lci1zaWRlLW1hcmdpbjtcXHJcXG5cXHRib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xcclxcblxcdGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xcclxcblxcdGJvcmRlci10b3Atd2lkdGg6IG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQsIDcpO1xcclxcblxcdGhlaWdodDogbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCAqIDYsIDcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9idXR0b25fbGluZSB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0LCA3KTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0LCA3KTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYS5tZW51X2l0ZW0ge1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxuXFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG51bC5tZW51X2xpc3Qge1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbi1ib3R0b206ICRtZW51LWlubmVyLXNpZGUtbWFyZ2luO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogOGVtO1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDIvMykge1xcclxcblxcdFxcdG1hcmdpbi10b3A6ICRtZW51LWNvbGxhcHNlZC1zaXplICsgbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCwgNyk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCYgPiBsaSA+IGEgPiBwIHtcXHJcXG5cXHRcXHRtYXJnaW46IDE2cHggMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbnVsLm1hdGhfbGlzdCA+IGxpIHtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxyXFxufVxcclxcblxcclxcbi5pbmxpbmVfY29kZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXHJcXG5cXHRwYWRkaW5nOiAxcHggMXB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYS5jb2RlYmxvY2sge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0cmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG5cXHQmLnJlZCB7XFxyXFxuXFx0XFx0Y29sb3I6IHJlZDtcXHJcXG5cXHR9XFxyXFxuXFx0Ji5ibHVlIHtcXHJcXG5cXHRcXHRjb2xvcjogYmx1ZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1hbmRfdGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuXFx0dGgsXFxyXFxuXFx0dGQge1xcclxcblxcdFxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuXFx0XFx0Ym9yZGVyLXdpZHRoOiB0aGluO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHR0aCB7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0dGQge1xcclxcblxcdFxcdHBhZGRpbmc6IDAuNWVtO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLnN1YnNlY3Rpb24ge1xcclxcblxcdGZvbnQtc2l6ZTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9kaXNwIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udXBzaWRlZG93biB7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxvYXRfbGVmdCB7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbmNhbnZhcy5mdWxsX2NhbnZhcyB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9wYWRkaW5nIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdF9ub19zdHlsZSB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2Nob2NvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jaG9jby53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2NvbXBhc3MucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2NvbXBhc3Mud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9oZWFydC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaGVhcnQud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9ob21lLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9ob21lLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvbXVzaHJvb20ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL211c2hyb29tLndlYnBcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMl0hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQmVmdW5nZUluZm8gZnJvbSBcIi4vY29tcG9uZW50cy9CZWZ1bmdlSW5mb1wiO1xyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbnJlbmRlcig8QmVmdW5nZUluZm8gLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKSBhcyBIVE1MRWxlbWVudCk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IFRlWCBmcm9tIFwiLi9UZVhcIjtcclxuXHJcbmNvbnN0IEJlZnVuZ2VJbmZvOiBSZWFjdC5GQyA9ICgpOiBKU1guRWxlbWVudCA9PiAoXHJcblx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0PE1lbnUgLz5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5BYm91dCBCZWZ1bmdlIDkzJm5kYXNoOyZpbmZpbjs8L2Rpdj5cclxuXHRcdDxDYXJkPlxyXG5cdFx0XHQ8aDMgaWQ9XCJpbnRyb2R1Y3Rpb25cIj5JbnRyb2R1Y3Rpb248L2gzPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRCZWZ1bmdlIGlzIGEgdHdvLWRpbWVuc2lvbmFsLCB0b3JvaWRhbCwgc2VsZi1tb2RpZnlpbmcgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2U7IGl0IHdhcyBjcmVhdGVkIGluXHJcblx0XHRcdFx0MTk5MyBpbiBhbiBhdHRlbXB0IHRvIGNyZWF0ZSBhIGxhbmd1YWdlIGFzIGRpZmZpY3VsdCB0byBjb21waWxlIGFzIHBvc3NpYmxlLiBJbnN0ZWFkIG9mIGhhdmluZ1xyXG5cdFx0XHRcdGEgcHJvZ3JhbSBjb3VudGVyIHRoYXQganVzdCBjb3VudHMgbGluZXMsIEJlZnVuZ2UgZmVhdHVyZXMgYSBwcm9ncmFtIGNvdW50ZXIgd2l0aCBib3RoIHggYW5kIHlcclxuXHRcdFx0XHRjb29yZGluYXRlcyAobm93IGNhbGxlZCBhbiA8ZW0+aW5zdHJ1Y3Rpb24gcG9pbnRlcjwvZW0+IFtJUF0pLiBGdXJ0aGVybW9yZSwgdGhlIElQIHdpbGwgd3JhcFxyXG5cdFx0XHRcdGFyb3VuZCB0aGUgdG9wLCBib3R0b20sIG9yIHNpZGVzIG9mIHRoZSBwcm9ncmFtLCBtYWtpbmcgeW91ciBjb2RlIGEgdG9ydXMhIE9oLCBhbmQgaXQnc1xyXG5cdFx0XHRcdHNlbGYtbW9kaWZ5aW5nLlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdFRoZSBvcmlnaW5hbCBCZWZ1bmdlIGxhbmd1YWdlLCBvZmZpY2lhbGx5IGNhbGxlZHtcIiBcIn1cclxuXHRcdFx0XHQ8YSBocmVmPVwiLy9naXRodWIuY29tL2NhdHNleWUvQmVmdW5nZS05My9ibG9iL21hc3Rlci9kb2MvQmVmdW5nZS05My5tYXJrZG93blwiPkJlZnVuZ2UgOTM8L2E+LFxyXG5cdFx0XHRcdGhhcyBhbiA8VGVYPjgwXFx0aW1lcyAyNTwvVGVYPi1jaGFyYWN0ZXIgYXJlYSBmb3IgaW5wdXQsIGFuIElQLCBhbmQgYSBzdGFjay4gVGhlIHNlY29uZFxyXG5cdFx0XHRcdGl0ZXJhdGlvbiwgPGEgaHJlZj1cIi8vcXVhZGl1bS5uZXQvZnVuZ2Uvc3BlYzk4Lmh0bWxcIj5CZWZ1bmdlIDk4PC9hPiwgaW50cm9kdWNlZCBhIGxvdCBvZiBmdW5cclxuXHRcdFx0XHRuZXcgZmVhdHVyZXM7IGl0IGhhcyBhbiB1bmJvdW5kZWQgaW5wdXQgYXJlYSwgc3VwcG9ydHMgbXVsdGl0aHJlYWRpbmcgd2l0aCBtdWx0aXBsZVxyXG5cdFx0XHRcdGluc3RydWN0aW9uIHBvaW50ZXJzLCBhbmQgZ2l2ZXMgZWFjaCBJUCBhIG1vZGlmaWFibGUgdmVsb2NpdHkgdmVjdG9yIGFuZCBhIHN0YWNrIG9mIHN0YWNrcy4gSXRcclxuXHRcdFx0XHRhbHNvIHN1cHBvcnRzIGxpYnJhcmllcyB2aWEgXCJmaW5nZXJwcmludHMsXCIgYW5kIHRoZSBzcGVjaWZpY2F0aW9uIGRlc2NyaWJlcyB2YXJpYW50cyBvZlxyXG5cdFx0XHRcdEJlZnVuZ2UgaW4gdGhyZWUgZGltZW5zaW9ucyBvciBoaWdoZXIuXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0QmVmdW5nZSA5MyZuZGFzaDsmaW5maW47IGlzIHRoZSByZXN1bHQgb2YgbWUgdGFraW5nIHRoZSBwYXJ0cyBvZiBlYWNoIHRoYXQgSSBsaWtlIGFuZCBwdXR0aW5nXHJcblx0XHRcdFx0dGhlbSB0b2dldGhlci4gSXQncyBiYXNpY2FsbHkgbGlrZSBCZWZ1bmdlIDkzIHdpdGggdW5ib3VuZGVkIHNpemUgYW5kIHVuYm91bmRlZCBpbnRlZ2Vyc1xyXG5cdFx0XHRcdChoZW5jZSB0aGUgbmFtZSksIG11bHRpdGhyZWFkaW5nLCBhcmJpdHJhcnkgSVAgdmVsb2NpdGllcywgYW5kIHN0YWNrcyBvZiBzdGFja3MuXHJcblx0XHRcdDwvcD5cclxuXHRcdDwvQ2FyZD5cclxuXHRcdDxDYXJkPlxyXG5cdFx0XHQ8aDMgaWQ9XCJOb3Rlc1wiPiBOb3RlcyA8L2gzPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRCYWNrIGF0IDxhIGhyZWY9XCIvYmVmdW5nZS5odG1sXCI+YmVmdW5nZS5odG1sPC9hPiwgeW91IGNhbiBydW4gY29kZSB3aXRoIG9yIHdpdGhvdXQgdGhlXHJcblx0XHRcdFx0XCJzdGF0ZSxcIiB3aGljaCBzaG93cyB0aGUgY29kZSwgcG9pbnRlcnMsIGFuZCBzdGFjayBvZiBzdGFja3MgYWZ0ZXIgZWFjaCBzdGVwLiBJZiB0aGUgc3RhdGUgaXNcclxuXHRcdFx0XHRkaXNwbGF5ZWQsIHRoZSBcIndhaXRcIiB0aW1lIGlzIGhvdyBsb25nIHRvIHBhdXNlIGJldHdlZW4gc3RlcHMuIEV2ZW4gd2l0aCBhIHdhaXQgdGltZSBvZiAwIGl0J3NcclxuXHRcdFx0XHRwcmV0dHkgc2xvdzsgcnVubmluZyB3aXRoIHRoZSBzdGF0ZSBoaWRkZW4gaXMgbXVjaCBmYXN0ZXIuXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0QWxzbywgZXZlbiB0aG91Z2ggZWFjaCBwb2ludGVyIGhhcyBpdHMgb3duIHN0YWNrIG9mIHN0YWNrcywgdGhlIG9ubHkgb25lIGRpc3BsYXllZCBpcyB0aGUgb25lXHJcblx0XHRcdFx0YmVsb25naW5nIHRvIHRoZSBcInRvcFwiIHBvaW50ZXIgKHdoZW4gYSBuZXcgcG9pbnRlciBpcyBjcmVhdGVkLCBpdCBpcyBwbGFjZWQgb250byB0aGUgbGlzdCBvZlxyXG5cdFx0XHRcdHBvaW50ZXJzIG9uZSBzcG90IFwiYmVsb3dcIiB0aGUgY3VycmVudCBwb2ludGVyKS5cclxuXHRcdFx0PC9wPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRGb3IgbW9yZSBzb3BoaXN0aWNhdGVkIGV4YW1wbGUgcHJvZ3JhbXMsIHNlZXtcIiBcIn1cclxuXHRcdFx0XHQ8YSBocmVmPVwiLy9naXRodWIuY29tL2NhdHNleWUvQmVmdW5nZS05My9ibG9iL21hc3Rlci9lZy9SRUFETUUubWFya2Rvd25cIj5oZXJlPC9hPiAmbmRhc2g7e1wiIFwifVxyXG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY2F0c2V5ZS9CZWZ1bmdlLTkzL21hc3Rlci9lZy9hdHVybGV5LmJmXCI+XHJcblx0XHRcdFx0XHRhdHVybGV5LmJmXHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdCx7XCIgXCJ9XHJcblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jYXRzZXllL0JlZnVuZ2UtOTMvbWFzdGVyL2VnL2JlZmJlZjIuYmZcIj5cclxuXHRcdFx0XHRcdGJlZmJlZjIuYmZcclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0LCBhbmR7XCIgXCJ9XHJcblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jYXRzZXllL0JlZnVuZ2UtOTMvbWFzdGVyL2VnL2xpZmUuYmZcIj5saWZlLmJmPC9hPntcIiBcIn1cclxuXHRcdFx0XHRhcmUgZXNwZWNpYWxseSBjb29sLiBBbHNvIGNoZWNrIG91dCA8YSBocmVmPVwiLy93d3cuYmVkcm9vbWxhbi5vcmcvY29kaW5nL3NvdXAvXCI+dGhpczwvYT57XCIgXCJ9XHJcblx0XHRcdFx0YmVhdXRpZnVsIHF1aW5lLlxyXG5cdFx0XHQ8L3A+XHJcblx0XHQ8L0NhcmQ+XHJcblx0XHQ8Q2FyZD5cclxuXHRcdFx0PGgzIGlkPVwiZGV0YWlsc1wiPkRldGFpbHM8L2gzPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRTb21lIHdheXMgaW4gd2hpY2ggQmVmdW5nZSA5MyZuZGFzaDsmaW5maW47IGRpZmZlcnMgZnJvbSBCZWZ1bmdlIDkzOyBtYW55IG9mIHRoZSBib251c1xyXG5cdFx0XHRcdGZlYXR1cmVzIGFyZSBib3Jyb3dlZCBmcm9tIEJlZnVuZ2UgOTguXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PG9sIHR5cGU9XCJhXCI+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0Q29kZSBpcyB0cmVhdGVkIGFzIGEgcmVzaXplYWJsZSB0b3J1cywgd2l0aCBhIHNpemUgdGhhdCBpcyBkZXRlcm1pbmVkIGF0IHJ1bnRpbWUgYW5kIG1heVxyXG5cdFx0XHRcdFx0YmUgY2hhbmdlZC4gTW9yZSBzcGVjaWZpY2FsbHk6IHZpZXdpbmcgZWFjaCBjaGFyYWN0ZXIgYXMgYSAxLWJ5LTEgc3F1YXJlIHdpdGggaW50ZWdlclxyXG5cdFx0XHRcdFx0dmVydGljZXMgKGEgXCJjZWxsXCIpLCB3ZSB0YWtlIHRoZSBzbWFsbGVzdCBib3VuZGluZyBib3ggb2YgdGhlIGNlbGxzLCBhbmQgaWRlbnRpZnkgdGhlXHJcblx0XHRcdFx0XHRlZGdlcyB0byBjcmVhdGUgYSB0b3J1cy4gSWYsIGF0IHNvbWUgcG9pbnQgZHVyaW5nIHByb2dyYW0gZXhlY3V0aW9uLCB3ZSB3cml0ZSB0byBhIGNlbGxcclxuXHRcdFx0XHRcdHRoYXQgaXMgbm90IGluIHRoaXMgYm91bmRpbmcgYm94LCB3ZSB0YWtlIHRoZSBuZXcgc21hbGxlc3QgYm91bmRpbmcgYm94IGNvbnRhaW5pbmcgYWxsXHJcblx0XHRcdFx0XHRjZWxscyBpbmNsdWRpbmcgdGhlIG5ldyBvbmUsIGFuZCBpZGVudGlmeSB0aGVzZSBlZGdlcyB0byBjcmVhdGUgYSBsYXJnZXIgdG9ydXMuXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRXZSBjYW4gc3RpbGwgb25seSB3cml0ZSB0byBjZWxscyB3aXRoIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIGNvb3JkaW5hdGVzLCBzbyB0aGUgZ3JpZCBpc1xyXG5cdFx0XHRcdFx0dW5ib3VuZGVkIHRvIHRoZSBFYXN0IGFuZCBTb3V0aC5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdEFyYml0cmFyaWx5IGxhcmdlIGludGVnZXJzIGFyZSBzdXBwb3J0ZWQsIGFuZCBwcm9ncmFtIHNpemUgaXMgdGhlb3JldGljYWxseSB1bmJvdW5kZWQgKGluXHJcblx0XHRcdFx0XHRwcmFjdGljZSBsaW1pdGVkIHRvIHRoZSBtYXhpbXVtIHNpemUgb2YgYSBKYXZhU2NyaXB0IGFycmF5KS5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFRoZSBJUCBpbml0aWFsbHkgbW92ZXMgcmlnaHQgYXQgYSBzcGVlZCBvZiBvbmUgY2VsbCBwZXIgc3RlcCwgYW5kIHdpbGwgcmVtYWluIGF0IHRoYXRcclxuXHRcdFx0XHRcdHNwZWVkIGlmIG9ubHkgQmVmdW5nZSA5MyBjb21tYW5kcyBhcmUgdXNlZC4gSG93ZXZlciwgaXQgY2FuIGFsc28gYmUgc2V0IHRvIGFueSB2ZWxvY2l0eVxyXG5cdFx0XHRcdFx0dXNpbmcgXCJ4XCIuXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRJbnN0ZWFkIG9mIGEgc2luZ2xlIHN0YWNrIHRoZXJlIGlzIGEgc3RhY2sgb2Ygc3RhY2tzLCB3aGljaCBpbml0aWFsbHkgY29udGFpbnMgb25lIHN0YWNrLlxyXG5cdFx0XHRcdFx0QWxsIHN0YWNrIG9wZXJhdGlvbnMgZnJvbSBCZWZ1bmdlIDkzIG9wZXJhdGUgb24gdGhlIHN0YWNrIHRoYXQgaXMgYXQgdGhlIHRvcCBvZiB0aGUgc3RhY2tcclxuXHRcdFx0XHRcdG9mIHN0YWNrcyAoY2FsbGVkIHRoZSBUb3AtT2YtU3RhY2sgU3RhY2ssIG9yIHRoZSBUT1NTKS5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdE11bHRpdGhyZWFkaW5nIGlzIHN1cHBvcnRlZCB3aXRoIHRoZSBcInRcIiBpbnN0cnVjdGlvbiwgd2hpY2ggc3BsaXRzIHRoZSBjdXJyZW50IHBvaW50ZXIgaW5cclxuXHRcdFx0XHRcdHR3by5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L29sPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHREZXNwaXRlIHRoZSBkaWZmZXJlbmNlcywgdGhpcyBpbXBsZW1lbnRhdGlvbiBzaG91bGQgYmUgYWJsZSB0byBydW4gbW9zdCBCZWZ1bmdlIDkzIHByb2dyYW1zLFxyXG5cdFx0XHRcdHdpdGggdGhlIGV4Y2VwdGlvbiBvZiB0aG9zZSB0aGF0IGRlcGVuZCBvbiBlZGdlIGNhc2UgYmVoYXZpb3IgbGlrZSBub3QgYmVpbmcgYWJsZSB0byB3cml0ZSBvdXRcclxuXHRcdFx0XHRvZiBib3VuZHMuXHJcblx0XHRcdDwvcD5cclxuXHRcdDwvQ2FyZD5cclxuXHRcdDxDYXJkPlxyXG5cdFx0XHQ8aDMgaWQ9XCJyZWZUYWJsZVwiPlJlZmVyZW5jZSBUYWJsZXM8L2gzPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRUaGUgYXZhaWxhYmxlIGluc3RydWN0aW9ucy4gTWFueSBvZiB0aGUgYWR2YW5jZWQgaW5zdHJ1Y3Rpb25zIGNvbWUgZnJvbSBCZWZ1bmdlIDk4LCBidXQgc29tZVxyXG5cdFx0XHRcdG9mIHRoZW0gd29yayBkaWZmZXJlbnRseS4gSW4gZ2VuZXJhbCwgd2hlbiB0aGUgcHJvZ3JhbSBjYW4ndCBkbyB3aGF0IGFuIGluc3RydWN0aW9uIHNwZWNpZmllc1xyXG5cdFx0XHRcdChlLmcuIHRoZXJlIGFyZSBub3QgZW5vdWdoIHRoaW5ncyBvbiB0aGUgc3RhY2ssIG9yIGl0IHRyaWVzIHRvIHdyaXRlIHRvIGEgbmVnYXRpdmUgcG9zaXRpb24pLFxyXG5cdFx0XHRcdGl0IHNpbXBseSBkb2VzIG5vdGhpbmcuIEhlcmUgXCJJUFwiIHN0YW5kcyBmb3IgXCJpbnN0cnVjdGlvbiBwb2ludGVyLFwiIFwiZGVsdGFcIiBpcyB0aGUgdmVsb2NpdHlcclxuXHRcdFx0XHR2ZWN0b3Igb2YgdGhlIElQIGluIHF1ZXN0aW9uLCB0aGUgXCJUT1NTXCIgaXMgdGhlIFwiVG9wIE9mIFN0YWNrIFN0YWNrLFwiIGFuZCB0aGUgXCJTT1NTXCIgaXMgdGhlXHJcblx0XHRcdFx0XCJTZWNvbmQgT2YgU3RhY2sgU3RhY2tcIiAodGhlIG9uZSB0aGF0IGJlY29tZXMgdGhlIFRPU1MgaWYgdGhlIFRPU1MgaXMgcG9wcGVkIG9mZikuXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PGgzIGNsYXNzTmFtZT1cInN1YnNlY3Rpb25cIj5CYXNpYyBJbnN0cnVjdGlvbnM8L2gzPlxyXG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwiY29tbWFuZF90YWJsZVwiPlxyXG5cdFx0XHRcdDxjb2xncm91cD5cclxuXHRcdFx0XHRcdDxjb2wgc3R5bGU9e3sgd2lkdGg6IFwiMTUlXCIgfX0gLz5cclxuXHRcdFx0XHRcdDxjb2wgc3R5bGU9e3sgd2lkdGg6IFwiMTUlXCIgfX0gLz5cclxuXHRcdFx0XHRcdDxjb2wgc3R5bGU9e3sgd2lkdGg6IFwiNzAlXCIgfX0gLz5cclxuXHRcdFx0XHQ8L2NvbGdyb3VwPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPiBJbnN0cnVjdGlvbiA8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IE5hbWUgPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPiBFeHBsYW5hdGlvbiA8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjAsMSwuLi4sIG9yIDk8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+UHVzaCBudW1iZXI8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+UHVzaGVzIDAsMSwuLi4sIG9yIDkgdG8gdGhlIHRvcC1vZi1zdGFjayBzdGFjayAoVE9TUyk8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPmEsYixjLGQsZSwgb3IgZjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5QdXNoIG51bWJlcjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5QdXNoZXMgMTAsMTEsMTIsMTMsMTQsIG9yIDE1IHRvIHRoZSBUT1NTPC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD5ePC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPkdvIE5vcnRoPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFNldHMgZGVsdGEgdG8gYmUgYSB1bml0IHZlY3RvciBwb2ludGluZyBOb3J0aC4gSVAgd2lsbCBiZWdpbiB0cmF2ZWxpbmcgdXAgYXQgYVxyXG5cdFx0XHRcdFx0XHRcdHNwZWVkIG9mIDEgaW5zdHJ1Y3Rpb24gcGVyIHN0ZXAuXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+djwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5HbyBTb3V0aDwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRTZXRzIGRlbHRhIHRvIGJlIGEgdW5pdCB2ZWN0b3IgcG9pbnRpbmcgU291dGguIElQIHdpbGwgYmVnaW4gdHJhdmVsaW5nIGRvd24gYXQgYVxyXG5cdFx0XHRcdFx0XHRcdHNwZWVkIG9mIDEgaW5zdHJ1Y3Rpb24gcGVyIHN0ZXAuXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+Jmd0OzwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5HbyBFYXN0PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFNldHMgZGVsdGEgdG8gYmUgYSB1bml0IHZlY3RvciBwb2ludGluZyBFYXN0LiBJUCB3aWxsIGJlZ2luIHRyYXZlbGluZyByaWdodCBhdCBhXHJcblx0XHRcdFx0XHRcdFx0c3BlZWQgb2YgMSBpbnN0cnVjdGlvbiBwZXIgc3RlcC5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD4gJmx0OyA8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+R28gV2VzdDwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRTZXRzIGRlbHRhIHRvIGJlIGEgdW5pdCB2ZWN0b3IgcG9pbnRpbmcgV2VzdC4gSVAgd2lsbCBiZWdpbiB0cmF2ZWxpbmcgbGVmdCBhdCBhXHJcblx0XHRcdFx0XHRcdFx0c3BlZWQgb2YgMSBpbnN0cnVjdGlvbiBwZXIgc3RlcC5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD4/PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPkdvIGF3YXkhPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlJhbmRvbWx5IGFjdHMgbGlrZSBvbmUgb2YgXiwgdiwgJmd0Oywgb3IgJmx0Oy4gPC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD4rLCAtLCAqLCAvLCAlPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPkFkZCwgc3VidHJhY3QsIG11bHRpcGx5LCBkaXZpZGUsIG1vZHVsbzwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRQb3BzIHRoZSB0b3AgdHdvIHZhbHVlcyBvZmYgdGhlIFRPU1MsIHBlcmZvcm1zIHRoZSBvcGVyYXRpb24gaW4gcXVlc3Rpb24sIGFuZFxyXG5cdFx0XHRcdFx0XHRcdHB1c2hlcyB0aGUgcmVzdWx0IG9udG8gdGhlIFRPU1MuIFRoZSBmaXJzdCB2YWx1ZSBwb3BwZWQgd2lsbCBiZSBvbiB0aGUgcmlnaHQgaGFuZFxyXG5cdFx0XHRcdFx0XHRcdHNpZGUgb2YgdGhlIG9wZXJhdG9yLiBGb3IgaW5zdGFuY2UsIDUgMyAtIGJlY29tZXMgMi4gRGl2aXNpb24gaXMgaW50ZWdlciBkaXZpc2lvbixcclxuXHRcdFx0XHRcdFx0XHR3aXRoIHRoZSByZXN1bHQgcm91bmRlZCBkb3duIHRvIHRoZSBuZWFyZXN0IGludGVnZXIuIE1vZHVsbyBiZWhhdmVzIGFzIGl0IGRvZXMgaW5cclxuXHRcdFx0XHRcdFx0XHRKYXZhU2NyaXB0LCBDLCBldGMuICZuZGFzaDsgaXQgd2lsbCBiZSA8VGVYPlxcbGVxPC9UZVg+MCBpZmYgdGhlIGxlZnQgaGFuZCBzaWRlIGlzXHJcblx0XHRcdFx0XHRcdFx0bmVnYXRpdmUuIEFueXRoaW5nIG1vZCAwIGlzIDAgYnkgY29udmVudGlvbiAoYW5kIHRoZSBCZWZ1bmdpYW4gcGhpbG9zb3BoeSBvZiBuZXZlclxyXG5cdFx0XHRcdFx0XHRcdHRocm93aW5nIGVycm9ycykuXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+LiAocGVyaW9kKTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5PdXRwdXQgaW50ZWdlcjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRQb3BzIGEgdmFsdWUgb2ZmIHRoZSBUT1NTIGFuZCB3cml0ZXMgaXQgdG8gb3V0cHV0IGFzIGFuIGludGVnZXIgaW4gYmFzZSB0ZW4sXHJcblx0XHRcdFx0XHRcdFx0Zm9sbG93ZWQgYnkgYSBzcGFjZS4gKGlmIHlvdSBkb24ndCB3YW50IHRoZSBzcGFjZSwgcHJpbnQgYSBiYWNrc3BhY2UgY2hhcmFjdGVyXHJcblx0XHRcdFx0XHRcdFx0YWZ0ZXIgKGNoYXJhY3RlciBjb2RlIDgpe1wiIFwifVxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPiwgKGNvbW1hKTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5PdXRwdXQgY2hhcmFjdGVyPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFBvcHMgYSB2YWx1ZSBvZmYgdGhlIFRPU1MgYW5kIHdyaXRlcyB0aGUgY29ycmVzcG9uZGluZyB1bmljb2RlIGNoYXJhY3RlciB0b1xyXG5cdFx0XHRcdFx0XHRcdG91dHB1dC4gKHBybyB0aXA6IGEgbmV3bGluZSBpcyBjaGFyYWN0ZXIgMTApXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XCI8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+RW50ZXIvRXhpdCBzdHJpbmdtb2RlPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFdoZW4gaW4gc3RyaW5nbW9kZSwgZWFjaCBjaGFyYWN0ZXIgdW5kZXIgdGhlIHBvaW50ZXIgaXMgcHVzaGVkIHRvIHRoZSBzdGFja1xyXG5cdFx0XHRcdFx0XHRcdGluc3RlYWQgb2YgYmVpbmcgZXhlY3V0ZWQuIEZvciBpbnN0YW5jZSwgaWYgdGhlIElQIHRyYXZlbHMgb3ZlciBcIkhlbGxvIHdvcmxkIVwiLFxyXG5cdFx0XHRcdFx0XHRcdHRoZSBUT1NTIHdpbGwgaGF2ZSB0aGUgY2hhcmFjdGVyIGNvZGVzIGZvciBILGUsLi4uLGQsISBvbiB0b3AuIE5vdGUgdGhhdCBpZiB0aGVyZVxyXG5cdFx0XHRcdFx0XHRcdGFyZSBtdWx0aXBsZSBwb2ludGVycyBlYWNoIHdpbGwgaGF2ZSBpdHMgb3duIHN0cmluZ21vZGUgdG9nZ2xlLlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPiE8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+TmVnYXRlITwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRQb3BzIHRoZSB0b3AgdmFsdWUgb2ZmIHRoZSBUT1NTLCBhbmQgcHVzaGVzIGl0cyBuZWdhdGlvbjogMSBpZiB0aGUgdmFsdWUgaXMgMCwgYW5kXHJcblx0XHRcdFx0XHRcdFx0MCBpZiB0aGUgdmFsdWUgaXMgbm9uemVyby5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD5gIChiYWNrdGljayk8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+R3JlYXRlciB0aGFuPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFBvcHMgYiwgdGhlbiBhLCBvZmYgdGhlIFRPU1MgYW5kIGNvbXBhcmVzIHRoZW0uIFB1c2hlcyAxIGlmIGEmZ3Q7Yiwgb3RoZXJ3aXNlXHJcblx0XHRcdFx0XHRcdFx0cHVzaGVzIDAuXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+OjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5EdXBsaWNhdGU8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0UG9wcyBhIHZhbHVlIG9mZiB0aGUgVE9TUywgdGhlbiBwdXNoZXMgdHdvIGNvcGllcyBvZiB0aGF0IHZhbHVlIGJhY2sgb250byB0aGVcclxuXHRcdFx0XHRcdFx0XHRUT1NTLlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPiQ8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+RGlzY2FyZDwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5Qb3BzIGEgdmFsdWUgb2ZmIHRoZSBUT1NTIGFuZCBkaXNjYXJkcyBpdC48L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPlxcPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlN3YXA8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0U3dhcHMgdGhlIHRvcCB0d28gZWxlbWVudHMgb24gdGhlIFRPU1MuIEluIG90aGVyIHdvcmRzOiBwb3BzIGEsIHBvcHMgYiwgcHVzaGVzIGEsXHJcblx0XHRcdFx0XHRcdFx0cHVzaGVzIGIuXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+IzwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5CcmlkZ2U8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0U2tpcHMgb3ZlciB0aGUgbmV4dCBjZWxsLCBzbyBvbiB0aGUgbmV4dCBzdGVwIHRoZSBJUCBtb3ZlcyB0d2ljZSBhcyBmYXIgYXMgaXRcclxuXHRcdFx0XHRcdFx0XHRvdGhlcndpc2Ugd291bGQgKGJlZm9yZSBza2lwcGluZyBvdmVyIHNwYWNlcywgaWYgYXBwbGljYWJsZSkuXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+JmFtcDs8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+SW5wdXQgaW50ZWdlcjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRQcm9tcHRzIHRoZSB1c2VyIGZvciBhbiBpbnRlZ2VyLCB0aGVuIHB1c2hlcyBpdCBvbnRvIHRoZSBUT1NTLiBQdXNoZXMgMCBpZiBub1xyXG5cdFx0XHRcdFx0XHRcdGlucHV0IGlzIGVudGVyZWQuXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+fjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5JbnB1dCBjaGFyYWN0ZXI8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0UHJvbXB0cyB0aGUgdXNlciBmb3IgYSBjaGFyYWN0ZXIsIHRoZW4gcHVzaGVzIGl0cyB1bmljb2RlIHZhbHVlIG9udG8gdGhlIFRPU1MuXHJcblx0XHRcdFx0XHRcdFx0UHVzaGVzIDEwIGlmIG5vIGlucHV0IGlzIGVudGVyZWQuXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XzwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5Ib3Jpem9udGFsIGlmPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFBvcHMgYSB2YWx1ZSBvZmYgdGhlIFRPU1MuIElmIGl0IGlzIG5vbnplcm8gbWFrZXMgZGVsdGEgYSB1bml0IHZlY3RvciBwb2ludGluZ1xyXG5cdFx0XHRcdFx0XHRcdGxlZnQsIG90aGVyd2lzZSBtYWtlcyBkZWx0YSBhIHVuaXQgdmVjdG9yIHBvaW50aW5nIHJpZ2h0LlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPnw8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+VmVydGljYWwgaWY8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0UG9wcyBhIHZhbHVlIG9mZiB0aGUgVE9TUy4gSWYgaXQgaXMgbm9uemVybyBtYWtlcyBkZWx0YSBhIHVuaXQgdmVjdG9yIHBvaW50aW5nIHVwLFxyXG5cdFx0XHRcdFx0XHRcdG90aGVyd2lzZSBtYWtlcyBkZWx0YSBhIHVuaXQgdmVjdG9yIHBvaW50aW5nIGRvd24uXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+ZzwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5HZXQ8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0UG9wcyB2YWx1ZXMgeSwgdGhlbiB4IG9mZiB0aGUgVE9TUy4gR2V0cyB0aGUgdmFsdWUgY3VycmVudGx5IGF0IHBvc2l0aW9uICh4LHkpIGluXHJcblx0XHRcdFx0XHRcdFx0dGhlIHByb2dyYW0gZ3JpZCwgYW5kIHB1c2hlcyBpdCBvbnRvIHRoZSBzdGFjay4gKHRvcCBsZWZ0IGlzICgwLDApLCB4IGluY3JlYXNlcyB0b1xyXG5cdFx0XHRcdFx0XHRcdHRoZSByaWdodCwgYW5kIHkgaW5jcmVhc2VzIGdvaW5nIGRvd24pLlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPnA8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+UHV0PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFBvcHMgdmFsdWVzIHksIHRoZW4geCwgdGhlbiB2IG9mZiB0aGUgVE9TUy4gUHV0cyB2IGF0IHBvc2l0aW9uICh4LHkpIGluIHRoZVxyXG5cdFx0XHRcdFx0XHRcdHByb2dyYW0gZ3JpZC4gTm90ZSB0aGF0IGlmIHRoaXMgdmFsdWUgdiBpcyB0aGUgdW5pY29kZSBudW1iZXIgb2YgYW4gaW5zdHJ1Y3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0dGhlIHByb2dyYW0gd2lsbCB0cmVhdCBpdCBqdXN0IGxpa2UgYW55IG90aGVyIGluc3RydWN0aW9uLiAoaWYgdiBpcyBub3QgdGhlXHJcblx0XHRcdFx0XHRcdFx0dW5pY29kZSBudW1iZXIgb2YgYSBjaGFyYWN0ZXIgaXQgaXMgc3RpbGwgcGxhY2VkIGF0IHRoYXQgcG9zaXRpb24sIGFuZCBcImdcIiB3aWxsXHJcblx0XHRcdFx0XHRcdFx0c3RpbGwgZ2V0IGl0LCBidXQgaXQncyBkaXNwbGF5ZWQgYXMgXCLDmFwiIGluIHRoZSBcIlN0YXRlXCIgc2VjdGlvbilcclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD5xPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlF1aXQ8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+UXVpdHMgdGhlIHByb2dyYW0uPC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD5APC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlN0b3A8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0U3RvcHMgYSBwb2ludGVyIHRoYXQgbGFuZHMgb24gaXQuIElmIHRoYXQgd2FzIHRoZSBvbmx5IHBvaW50ZXIsIHF1aXRzIHRoZSBwcm9ncmFtLlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJsaWdodGJsdWVcIiB9fT4mbmJzcDs8L3NwYW4+IChzcGFjZSlcclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPk5vIG9wPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdERvZXMgbm90aGluZy4gV2hlbmV2ZXIgdGhlIElQIGxhbmRzIG9uIGEgc3BhY2Ugb3V0c2lkZSBvZiBzdHJpbmdtb2RlIGl0XHJcblx0XHRcdFx0XHRcdFx0aW1tZWRpYXRlbHkgbW92ZXMgYWdhaW4sIGp1bXBpbmcgb3ZlciBhbGwgc3BhY2VzIHVudGlsIGl0IHJlYWNoZXMgYSBub24tc3BhY2VcclxuXHRcdFx0XHRcdFx0XHRjaGFyYWN0ZXIuXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+QW55dGhpbmcgbm90IGRlZmluZWQ8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+Tm8gb3AgSUk8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+RG9lcyBub3RoaW5nLCBidXQgdGhlIElQIGRvZXNuJ3QganVtcCBvdmVyIGl0LjwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvdGFibGU+XHJcblxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGgzIGNsYXNzTmFtZT1cInN1YnNlY3Rpb25cIj5BZHZhbmNlZCBJbnN0cnVjdGlvbnMgKG5vdCBpbiBCZWZ1bmdlIDkzKTwvaDM+XHJcblxyXG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwiY29tbWFuZF90YWJsZVwiPlxyXG5cdFx0XHRcdDxjb2xncm91cD5cclxuXHRcdFx0XHRcdDxjb2wgc3R5bGU9e3sgd2lkdGg6IFwiMTUlXCIgfX0gLz5cclxuXHRcdFx0XHRcdDxjb2wgc3R5bGU9e3sgd2lkdGg6IFwiMTUlXCIgfX0gLz5cclxuXHRcdFx0XHRcdDxjb2wgc3R5bGU9e3sgd2lkdGg6IFwiNzAlXCIgfX0gLz5cclxuXHRcdFx0XHQ8L2NvbGdyb3VwPlxyXG5cdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRoPiBJbnN0cnVjdGlvbiA8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+IE5hbWUgPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPiBFeHBsYW5hdGlvbiA8L3RoPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPm48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+Q2xlYXIgc3RhY2s8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+UG9wcyBpdGVtcyBmcm9tIHRoZSBUT1NTIHVudGlsIGl0J3MgZW1wdHkuPC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD57XCJ7XCJ9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPkJlZ2luIGJsb2NrPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFBvcHMgYSB2YWx1ZSAoPFRlWD5uPC9UZVg+KSBmcm9tIHRoZSBUT1NTLCB0aGVuIGNyZWF0ZXMgYSBuZXcgc3RhY2sgYW5kIHB1c2hlcyBpdFxyXG5cdFx0XHRcdFx0XHRcdHRvIHRoZSBzdGFjayBvZiBzdGFja3MuIFRoZW4gdGhlIHRvcCA8VGVYPm48L1RlWD4gdmFsdWVzIGZyb20gdGhlIFNPU1MgKHdoaWNoIHVzZWRcclxuXHRcdFx0XHRcdFx0XHR0byBiZSB0aGUgVE9TUykgYXJlIHRyYW5zZmVycmVkIHRvIHRoZSBuZXcgVE9TUy4gVGhlIG9yZGVyIG9mIHRoZSB2YWx1ZXMgaXNcclxuXHRcdFx0XHRcdFx0XHRwcmVzZXJ2ZWQuIElmIHRoZSBTT1NTIGhhcyA8VGVYPms8L1RlWD4gZWxlbWVudHMgd2hlcmUgPFRlWCBtYXRoPVwiayA8IG5cIiAvPiwgdGhlblxyXG5cdFx0XHRcdFx0XHRcdGFsbCBlbGVtZW50cyBhcmUgY29waWVkIGJ1dCB3aXRoIDxUZVg+bi1rPC9UZVg+IHplcm9zIGJlbG93IHRoZW0uIFRoZSBuZXcgVE9TU1xyXG5cdFx0XHRcdFx0XHRcdHdpbGwgYmUgZW1wdHkgaWYgPFRlWD5uID0gMDwvVGVYPiBvciBpZiB0aGUgaW5pdGlhbCBUT1NTIGlzIGVtcHR5LlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPntcIn1cIn08L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+RW5kIGJsb2NrPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFBvcHMgYSB2YWx1ZSAoPFRlWD5uPC9UZVg+KSBmcm9tIHRoZSBUT1NTLCB0aGVuIHRyYW5zZmVycyB0aGUgdG9wIDxUZVg+bjwvVGVYPntcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHR2YWx1ZXMgZnJvbSB0aGUgVE9TUyB0byB0aGUgU09TUywgdGhlbiBwb3BzIHRoZSBUT1NTIGZyb20gdGhlIHN0YWNrIG9mIHN0YWNrcy4gQXNcclxuXHRcdFx0XHRcdFx0XHRiZWZvcmUsIGlmIHRoZSBUT1NTIGhhcyA8VGVYIG1hdGg9XCJrIDwgblwiIC8+IGVsZW1lbnRzLCA8VGVYPm4tazwvVGVYPiB6ZXJvcyB3aWxsXHJcblx0XHRcdFx0XHRcdFx0YmUgcHVzaGVkIHRvIHRoZSBTT1NTIGJlZm9yZSB0aGUgZWxlbWVudHMgYXJlIHRyYW5zZmVycmVkLiBEb2VzIG5vdGhpbmcgaWYgdGhlcmVcclxuXHRcdFx0XHRcdFx0XHRpcyBvbmx5IG9uZSBzdGFjayBsZWZ0LlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPnU8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+U3RhY2sgdW5kZXIgc3RhY2s8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0UG9wcyBhIHZhbHVlICg8VGVYPm48L1RlWD4pIGZyb20gdGhlIFRPU1MsIHRoZW4gdHJhbnNmZXJzIHRoZSB0b3AgPFRlWD5uPC9UZVg+e1wiIFwifVxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlcyBmcm9tIHRoZSBTT1NTIHRvIHRoZSBUT1NTIGluIGEgcG9wLXB1c2ggbG9vcCAob3JkZXIgaXMgcmV2ZXJzZWQpLiBJZiB0aGVcclxuXHRcdFx0XHRcdFx0XHRTT1NTIGhhcyA8VGVYIG1hdGg9XCJrIDwgblwiIC8+IGVsZW1lbnRzLCA8VGVYPm4tazwvVGVYPiB6ZXJvcyB3aWxsIGJlIHB1c2hlZCB0byB0aGVcclxuXHRcdFx0XHRcdFx0XHRUT1NTIGFmdGVyIHRoZSBTT1NTIGlzIGVtcHR5LiBEb2VzIG5vdGhpbmcgaWYgdGhlcmUgaXMgb25seSBvbmUgc3RhY2sgbGVmdC5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD5yPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlJlZmxlY3Q8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0UmVmbGVjdHMgdGhlIElQLCBtdWx0aXBseWluZyBpdHMgdmVsb2NpdHkgdmVjdG9yIGJ5IDxUZVg+LTE8L1RlWD4uXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+eDwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5TZXQgdmVsb2NpdHk8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0UG9wcyA8VGVYPnk8L1RlWD4gdGhlbiA8VGVYPng8L1RlWD4gZnJvbSB0aGUgVE9TUywgYW5kIHNldHMgZGVsdGEgdG97XCIgXCJ9XHJcblx0XHRcdFx0XHRcdFx0PFRlWD4oeCwgeSk8L1RlWD4uIElmIHRoZXJlIGFyZSBmZXdlciB0aGFuIDIgdmFsdWVzIG9uIHRoZSBUT1NTLCBkb2VzIG5vdGhpbmcuXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+4oC9IChpbnRlcnJvYmFuZyk8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+R28gYXdheeKAvTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRSYW5kb21seSBjaG9vc2VzIGEgbmV3IHZlbG9jaXR5IHZlY3RvciA8VGVYPih4LHkpPC9UZVg+IHdoZXJlIDxUZVg+eDwvVGVYPiBhbmR7XCIgXCJ9XHJcblx0XHRcdFx0XHRcdFx0PFRlWD55PC9UZVg+IGFyZSBub3QgYm90aCAwLlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPls8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+VHVybiBsZWZ0PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlJvdGF0ZSBkZWx0YSBsZWZ0IGJ5IDkwIGRlZ3JlZXMuPC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD5dPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlR1cm4gcmlnaHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0Um90YXRlIGRlbHRhIHJpZ2h0IGJ5IDkwIGRlZ3JlZXMuIFRvIHF1b3RlIHRoZSBGdW5nZS05OCBzcGVjaWZpY2F0aW9uLCBcInRvXHJcblx0XHRcdFx0XHRcdFx0cmVtZW1iZXIgd2hpY2ggW29mIFwiW1wiIGFuZCBcIl1cIl0gaXMgd2hpY2gsIHZpc3VhbGl6ZSB5b3Vyc2VsZiBvbiB0aGUgc2VhdCBvZiBhXHJcblx0XHRcdFx0XHRcdFx0YmljeWNsZSwgbG9va2luZyBkb3duIGF0IHRoZSBoYW5kbGViYXJzLlwiXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+dzwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5Db21wYXJlIGFuZCB0dXJuPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFBvcHMgYiwgdGhlbiBhLCBmcm9tIHRoZSBUT1NTIGFuZCBjb21wYXJlcyB0aGVtLiBJZiBhJmx0O2IsIGFjdHMgbGlrZSBcIltcIjsgaWZcclxuXHRcdFx0XHRcdFx0XHRhJmd0O2IsIGFjdHMgbGlrZSBcIl1cIjsgaWYgYT1iLCBkb2VzIG5vdGhpbmcuXHJcblx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+dDwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5TcGxpdDwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRDcmVhdGVzIGEgbmV3IHBvaW50ZXIgKDxUZVg+cF5cXHByaW1lPC9UZVg+KSBmcm9tIHRoZSBjdXJyZW50IHBvaW50ZXIgKDxUZVg+cDwvVGVYPlxyXG5cdFx0XHRcdFx0XHRcdCkuIFRoZSBwb3NpdGlvbiBvZiA8VGVYPnBeXFxwcmltZTwvVGVYPiBlcXVhbHMgPFRlWD5wPC9UZVg+J3MsIHRoZSBzdGFjayBvZntcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHQ8VGVYPnBeXFxwcmltZTwvVGVYPiBpcyBhIGNvcHkgb2YgPFRlWD5wPC9UZVg+J3MsIGFuZCB0aGUgZGVsdGEgb2Z7XCIgXCJ9XHJcblx0XHRcdFx0XHRcdFx0PFRlWD5wXlxccHJpbWU8L1RlWD4gZXF1YWxzIHRoZSBkZWx0YSBvZiA8VGVYPnA8L1RlWD4gdGltZXMgPFRlWD4tMTwvVGVYPi57XCIgXCJ9XHJcblx0XHRcdFx0XHRcdFx0PFRlWD5wXlxccHJpbWU8L1RlWD4gaXMgcGxhY2VkIGluIHRoZSBwb2ludGVyIGxpc3QganVzdCBiZWZvcmUgPFRlWD5wPC9UZVg+OyBzbyBpblxyXG5cdFx0XHRcdFx0XHRcdGEgZ2l2ZW4gc3RlcCwgZmlyc3QgPFRlWD5wXlxccHJpbWU8L1RlWD4gaXMgZXhlY3V0ZWQsIGFuZCB0aGVuIDxUZVg+cDwvVGVYPi5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD4nIChzaW5nbGUgcXVvdGUpPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPkZldGNoIGNoYXJhY3RlcjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRMb29rcyBhaGVhZCB0byB0aGUgY2VsbCB0aGF0IHdvdWxkIGJlIGVuY291bnRlcmVkIG5leHQgKHBvc2l0aW9uK2RlbHRhKSwgYW5kXHJcblx0XHRcdFx0XHRcdFx0cHVzaGVzIGl0cyB2YWx1ZSBvbnRvIHRoZSBUT1NTLiBUaGVuIHNraXBzIG92ZXIgdGhhdCBjZWxsIHdoZW4gdXBkYXRpbmcgaXRzXHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb24uIFNvLCBmb3IgaW5zdGFuY2UsIHRoZSBwcm9ncmFtICdhLEAgd291bGQgb25seSB0YWtlIHRocmVlIHN0ZXBzLlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPnM8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+U3RvcmUgY2hhcmFjdGVyPC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdFRoZSBvcHBvc2l0ZSBvZiAnLiBQb3BzIGEgdmFsdWUgZnJvbSB0aGUgVE9TUyBhbmQgcGxhY2VzIGl0IGluIGNlbGxcclxuXHRcdFx0XHRcdFx0XHQocG9zaXRpb24rZGVsdGEpLCB0aGVuIHNraXBzIG92ZXIgdGhhdCBjZWxsIHdoZW4gdXBkYXRpbmcgaXRzIHBvc2l0aW9uLiBJZiB0aGVyZVxyXG5cdFx0XHRcdFx0XHRcdGlzIG5vdGhpbmcgb24gdGhlIFRPU1MsIHNraXBzIG92ZXIgdGhlIGNlbGwgd2l0aG91dCBjaGFuZ2luZyBpdC5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0PC90YWJsZT5cclxuXHRcdDwvQ2FyZD5cclxuXHQ8L1JlYWN0LkZyYWdtZW50PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVmdW5nZUluZm87XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENhcmQ6IFJlYWN0LkZDPENvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcImRpdlwiPj4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubmVyX2NhcmRcIj57Y2hpbGRyZW59PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFByb3BzV2l0aG91dFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaG9tZVBuZyBmcm9tIFwiLi4vaW1hZ2VzL2hvbWUucG5nXCI7XHJcbmltcG9ydCBob21lV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2hvbWUud2VicFwiO1xyXG5pbXBvcnQgY29tcGFzc1BuZyBmcm9tIFwiLi4vaW1hZ2VzL2NvbXBhc3MucG5nXCI7XHJcbmltcG9ydCBjb21wYXNzV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2NvbXBhc3Mud2VicFwiO1xyXG5pbXBvcnQgY2hvY29QbmcgZnJvbSBcIi4uL2ltYWdlcy9jaG9jby5wbmdcIjtcclxuaW1wb3J0IGNob2NvV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2Nob2NvLndlYnBcIjtcclxuaW1wb3J0IG11c2hyb29tUG5nIGZyb20gXCIuLi9pbWFnZXMvbXVzaHJvb20ucG5nXCI7XHJcbmltcG9ydCBtdXNocm9vbVdlYnAgZnJvbSBcIi4uL2ltYWdlcy9tdXNocm9vbS53ZWJwXCI7XHJcbmltcG9ydCBoZWFydFBuZyBmcm9tIFwiLi4vaW1hZ2VzL2hlYXJ0LnBuZ1wiO1xyXG5pbXBvcnQgaGVhcnRXZWJwIGZyb20gXCIuLi9pbWFnZXMvaGVhcnQud2VicFwiO1xyXG5cclxuY29uc3QgTWVudTogUmVhY3QuRkM8TWVudVByb3BzPiA9ICh7IHN0YXJ0RXhwYW5kZWQgfSkgPT4ge1xyXG5cdGNvbnN0IFtleHBhbmRlZCwgdG9nZ2xlRXhwYW5kZWRdID0gdXNlU3RhdGUoc3RhcnRFeHBhbmRlZCA/PyBmYWxzZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17ZXhwYW5kZWQgPyBcIm1lbnVfZXhwYW5kZWRcIiA6IFwibWVudV9jb2xsYXBzZWRcIn0+XHJcblx0XHRcdHtNZW51QnV0dG9uKGV4cGFuZGVkLCB0b2dnbGVFeHBhbmRlZCl9XHJcblx0XHRcdHtleHBhbmRlZCA/IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibWVudV9saXN0IGNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9cIiwgXCJIb21lXCIsIGhvbWVQbmcsIGhvbWVXZWJwKX1cclxuXHRcdFx0XHRcdFx0e01lbnVJdGVtKFwiL3Byb2JsZW1zLmh0bWxcIiwgXCJQcm9ibGVtc1wiLCBjb21wYXNzUG5nLCBjb21wYXNzV2VicCl9XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9jaG9tcC5odG1sXCIsIFwiQ2hvbXBcIiwgY2hvY29QbmcsIGNob2NvV2VicCl9XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9iZWZ1bmdlLmh0bWxcIiwgXCJCZWZ1bmdlXCIsIG11c2hyb29tUG5nLCBtdXNocm9vbVdlYnApfVxyXG5cdFx0XHRcdFx0XHR7TWVudUl0ZW0oXCIvbWlzYy5odG1sXCIsIFwiTWlzY2VsbGFuZWFcIiwgaGVhcnRQbmcsIGhlYXJ0V2VicCl9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpIDogbnVsbH1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBNZW51SXRlbShyZWZlcmVuY2U6IHN0cmluZywgdGV4dDogc3RyaW5nLCBwbmc6IGFueSwgd2VicDogYW55KTogSlNYLkVsZW1lbnQge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8bGk+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cIm1lbnVfaXRlbVwiIGhyZWY9e3JlZmVyZW5jZX0+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHQ8cGljdHVyZT5cclxuXHRcdFx0XHRcdFx0PHNvdXJjZSB0eXBlPVwiaW1hZ2Uvd2VicFwiIHNyY1NldD17d2VicH0gLz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e3BuZ30gaGVpZ2h0PVwiMTZweFwiIHdpZHRoPVwiMTZweFwiIGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdFx0XHQmbmJzcDtcclxuXHRcdFx0XHRcdHt0ZXh0fVxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9saT5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZW51QnV0dG9uKFxyXG5cdGV4cGFuZGVkOiBib29sZWFuLFxyXG5cdHRvZ2dsZUV4cGFuZGVkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4sXHJcbik6IEpTWC5FbGVtZW50IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51X2J1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUV4cGFuZGVkKCFleHBhbmRlZCl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uX2lubmVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51X2J1dHRvbl9saW5lXCIgLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uX2xpbmVcIiAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudV9idXR0b25fbGluZVwiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuXHJcbnR5cGUgTWVudVByb3BzID0gQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFwiZGl2XCI+ICZcclxuXHRQYXJ0aWFsPHtcclxuXHRcdHN0YXJ0RXhwYW5kZWQ6IGJvb2xlYW47XHJcblx0fT47XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0RWxlbWVudCwgRWxlbWVudFR5cGUsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGthdGV4IGZyb20gXCJrYXRleFwiO1xyXG5cclxuY29uc3QgVGVYOiBSZWFjdC5GQzxUZVhQcm9wcz4gPSAoe1xyXG5cdGNoaWxkcmVuLFxyXG5cdG1hdGgsXHJcblx0YmxvY2ssXHJcblx0ZXJyb3JDb2xvcixcclxuXHRyZW5kZXJFcnJvcixcclxuXHRzZXR0aW5ncyxcclxuXHRhczogYXNDb21wb25lbnQsXHJcblx0Li4ucHJvcHNcclxufSkgPT4ge1xyXG5cdGNvbnN0IENvbXBvbmVudCA9IGFzQ29tcG9uZW50IHx8IChibG9jayA/IFwiZGl2XCIgOiBcInNwYW5cIik7XHJcblx0Y29uc3QgY29udGVudCA9IChjaGlsZHJlbiA/PyBtYXRoKSBhcyBzdHJpbmc7XHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTx7IGlubmVySHRtbDogc3RyaW5nIH0gfCB7IGVycm9yRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50IH0+KHtcclxuXHRcdGlubmVySHRtbDogXCJcIixcclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGlubmVySHRtbCA9IGthdGV4LnJlbmRlclRvU3RyaW5nKGNvbnRlbnQsIHtcclxuXHRcdFx0XHRkaXNwbGF5TW9kZTogISFibG9jayxcclxuXHRcdFx0XHRlcnJvckNvbG9yLFxyXG5cdFx0XHRcdHRocm93T25FcnJvcjogISFyZW5kZXJFcnJvcixcclxuXHRcdFx0XHQuLi5zZXR0aW5ncyxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzZXRTdGF0ZSh7IGlubmVySHRtbCB9KTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIGthdGV4LlBhcnNlRXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcclxuXHRcdFx0XHRpZiAocmVuZGVyRXJyb3IpIHtcclxuXHRcdFx0XHRcdHNldFN0YXRlKHsgZXJyb3JFbGVtZW50OiByZW5kZXJFcnJvcihlcnJvcikgfSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNldFN0YXRlKHsgaW5uZXJIdG1sOiBlcnJvci5tZXNzYWdlIH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIFtibG9jaywgY29udGVudCwgZXJyb3JDb2xvciwgcmVuZGVyRXJyb3IsIHNldHRpbmdzXSk7XHJcblxyXG5cdGlmIChcImVycm9yRWxlbWVudFwiIGluIHN0YXRlKSB7XHJcblx0XHRyZXR1cm4gc3RhdGUuZXJyb3JFbGVtZW50O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0YXRlLmlubmVySHRtbCB9fSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oVGVYKTtcclxuXHJcbnR5cGUgVGVYUHJvcHMgPSBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJkaXZcIj4gJlxyXG5cdFBhcnRpYWw8e1xyXG5cdFx0YXM6IEVsZW1lbnRUeXBlO1xyXG5cdFx0bWF0aDogc3RyaW5nIHwgbnVtYmVyO1xyXG5cdFx0YmxvY2s6IGJvb2xlYW47XHJcblx0XHRlcnJvckNvbG9yOiBzdHJpbmc7XHJcblx0XHRyZW5kZXJFcnJvcjogKGVycm9yOiBrYXRleC5QYXJzZUVycm9yIHwgVHlwZUVycm9yKSA9PiBSZWFjdEVsZW1lbnQ7XHJcblx0XHRzZXR0aW5nczoga2F0ZXguS2F0ZXhPcHRpb25zO1xyXG5cdH0+O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
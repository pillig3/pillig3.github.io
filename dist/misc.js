"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["misc"],{

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


/***/ }),

/***/ "./src/misc.tsx":
/*!**********************!*\
  !*** ./src/misc.tsx ***!
  \**********************/
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
const Card_1 = __importDefault(__webpack_require__(/*! ./components/Card */ "./src/components/Card.tsx"));
const Menu_1 = __importDefault(__webpack_require__(/*! ./components/Menu */ "./src/components/Menu.tsx"));
const TeX_1 = __importDefault(__webpack_require__(/*! ./components/TeX */ "./src/components/TeX.tsx"));
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
(0, react_dom_1.render)(React.createElement(React.Fragment, null,
    React.createElement(Menu_1.default, null),
    React.createElement("div", { className: "title" }, "Miscellanea"),
    React.createElement(Card_1.default, null,
        React.createElement("a", { href: "/complex.html" }, "Complex function plotter"),
        " \u2013 A place to graph functions on the complex plane! It uses ",
        React.createElement("a", { href: "https://en.wikipedia.org/wiki/Domain_coloring" }, "domain coloring"),
        " to visualize complex functions in two dimensions. Click and drag to move around, and press the - and + keys to zoom. Here are some examples:",
        React.createElement("ul", { className: "math_list" },
            React.createElement("li", null,
                React.createElement("a", { href: "/complex.html#1/x%20ln(x-1)^2&&12" },
                    React.createElement(TeX_1.default, { math: "\\displaystyle \\frac{1}{x}\\ln(x-1)^2" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "/complex.html#(1/x^5-i) (1/(x/2)^5+1) (1/(x/3)^5+i) (1/(x/4)^5-1)&&15" },
                    React.createElement(TeX_1.default, { math: "\\displaystyle \\prod_{n=1}^4\\left( (x/n)^{-5} - i^n \\right)" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "/complex.html#sin(ln(exp(x^2)))sin(ln(exp(x^3-pi/2)))&&8" },
                    React.createElement(TeX_1.default, { math: "\\displaystyle \\sin\\left(\\ln\\left( e^{x^2} \\right)\\right) \\sin\\left(\\ln\\left( e^{x^3-\\pi/2} \\right)\\right)" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "/complex.html#x^2/((x-1)(x-(-1/2+3^(1/2)i/2))(x-(-1/2-3^(1/2)i/2)))&&5" },
                    React.createElement(TeX_1.default, { math: "\\displaystyle \\frac{x^2}{(x-\\zeta_1)(x-\\zeta_2)(x-\\zeta_3)}" })),
                ", where the ",
                React.createElement(TeX_1.default, null, "\\zeta_i"),
                " are the third roots of unity"),
            React.createElement("li", null,
                React.createElement("a", { href: "/complex.html#tet(x,52)&-0.5,0&8" },
                    React.createElement(TeX_1.default, { math: "\\displaystyle \\mathrm{tet}(x, 52)" })),
                ", where ",
                React.createElement(TeX_1.default, { math: "\\mathrm{tet}" }),
                " is is",
                " ",
                React.createElement("a", { href: "https://en.wikipedia.org/wiki/Tetration" }, "tetration"),
                " \u2014",
                " ",
                React.createElement(TeX_1.default, { math: "\\mathrm{tet}(x, n) = \\left. x^{x^{...^{x}}}\\right\\} n\\text{ times}" }),
                "."))),
    React.createElement(Card_1.default, null,
        React.createElement("a", { href: "/comps.html" }, "Comps"),
        " \u2013 An overview of some cool research I did on newly reducible polynomials."),
    React.createElement(Card_1.default, null,
        React.createElement("a", { href: "/pentris.html" }, "Pentris"),
        " \u2013 It's like tetris, but with pentominos and reflection!",
        React.createElement("ul", { className: "list_no_style" },
            React.createElement("li", null, "Left / Right \u2013 Move piece sideways"),
            React.createElement("li", null, "Up \u2013 Rotate piece"),
            React.createElement("li", null, "X \u2013 Reflect piece"),
            React.createElement("li", null, "C \u2013 Store piece for later"),
            React.createElement("li", null, "Down \u2013 Soft drop"),
            React.createElement("li", null, "Space \u2013 Hard drop")))), document.querySelector("#root"));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/misc.tsx"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxrRkFBa0YsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxNQUFNLEtBQUssV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtB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QUMsSUFBSSxFQUFDLHlIQUEyRyxHQUFHLENBQ3JILENBQ0E7WUFDTDtnQkFDQywyQkFBRyxJQUFJLEVBQUMsd0VBQXdFO29CQUMvRSxvQkFBQyxhQUFHLElBQUMsSUFBSSxFQUFDLGtFQUE2RCxHQUFHLENBQ3ZFOztnQkFDUSxvQkFBQyxhQUFHLG1CQUFjO2dEQUMxQjtZQUNMO2dCQUNDLDJCQUFHLElBQUksRUFBQyxrQ0FBa0M7b0JBQ3pDLG9CQUFDLGFBQUcsSUFBQyxJQUFJLEVBQUMscUNBQW1DLEdBQUcsQ0FDN0M7O2dCQUNJLG9CQUFDLGFBQUcsSUFBQyxJQUFJLEVBQUMsZUFBYyxHQUFHOztnQkFBTyxHQUFHO2dCQUM3QywyQkFBRyxJQUFJLEVBQUMseUNBQXlDLGdCQUFjOztnQkFBUyxHQUFHO2dCQUMzRSxvQkFBQyxhQUFHLElBQUMsSUFBSSxFQUFDLHlFQUFvRSxHQUFHO29CQUM3RSxDQUNELENBQ0M7SUFDUCxvQkFBQyxjQUFJO1FBQ0osMkJBQUcsSUFBSSxFQUFDLGFBQWEsWUFBVTswRkFFekI7SUFDUCxvQkFBQyxjQUFJO1FBQ0osMkJBQUcsSUFBSSxFQUFDLGVBQWUsY0FBWTs7UUFDbkMsNEJBQUksU0FBUyxFQUFDLGVBQWU7WUFDNUIsMEVBQWlEO1lBQ2pELHlEQUFnQztZQUNoQyx5REFBZ0M7WUFDaEMsaUVBQXdDO1lBQ3hDLHdEQUErQjtZQUMvQix5REFBZ0MsQ0FDNUIsQ0FDQyxDQUNTLEVBQ2pCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFnQixDQUM5QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jaG9jby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jaG9jby53ZWJwIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY29tcGFzcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb21wYXNzLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oZWFydC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oZWFydC53ZWJwIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaG9tZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ob21lLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tdXNocm9vbS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tdXNocm9vbS53ZWJwIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzP2U5ZDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVYLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbWlzYy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2VkZWQ7XG59XG5cbnAge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbmRpdi5wIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG5kaXYudGl0bGUge1xuICBmb250LXNpemU6IDMycHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBmb250LXdlaWdodDogMjUwO1xuICBtYXJnaW46IDE1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsb2F0OiBub25lO1xufVxuXG4uaW5uZXJfY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4ua2F0ZXgge1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgZm9udDogbm9ybWFsIDEuMWVtIEthVGVYX01haW4sIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtaW5kZW50OiAwO1xufVxuXG4ua2F0ZXgtZGlzcGxheSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxucGljdHVyZSA+IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNlbnRlcmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpdF9jb250ZW50IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLyoqXG4gKiBNZW51IFN0eWxpbmdcbiAqL1xuLm1lbnVfY29sbGFwc2VkIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnVfZXhwYW5kZWQge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNy41cHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDIvMykge1xuICAubWVudV9leHBhbmRlZCB7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlO1xuICB9XG59XG5cbi5tZW51X2J1dHRvbiB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tZW51X2J1dHRvbl9pbm5lciB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC13aWR0aDogNS43MTQyODU3MTQzcHg7XG4gIGhlaWdodDogMzQuMjg1NzE0Mjg1N3B4O1xufVxuXG4ubWVudV9idXR0b25fbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUuNzE0Mjg1NzE0M3B4O1xuICBtYXJnaW4tYm90dG9tOiA1LjcxNDI4NTcxNDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmEubWVudV9pdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hLm1lbnVfaXRlbTpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG51bC5tZW51X2xpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDhlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDIvMykge1xuICB1bC5tZW51X2xpc3Qge1xuICAgIG1hcmdpbi10b3A6IDU1LjcxNDI4NTcxNDNweDtcbiAgfVxufVxudWwubWVudV9saXN0ID4gbGkgPiBhID4gcCB7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG51bC5tYXRoX2xpc3QgPiBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG59XG5cbi5pbmxpbmVfY29kZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgcGFkZGluZzogMXB4IDFweDtcbn1cblxudGV4dGFyZWEuY29kZWJsb2NrIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICB3aWR0aDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xufVxuXG5zcGFuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5zcGFuLmJsdWUge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNvbW1hbmRfdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb21tYW5kX3RhYmxlIHRoLFxuLmNvbW1hbmRfdGFibGUgdGQge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG59XG4uY29tbWFuZF90YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5jb21tYW5kX3RhYmxlIHRkIHtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5zdWJzZWN0aW9uIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5ub2Rpc3Age1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udXBzaWRlZG93biB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG59XG5cbi5mbG9hdF9sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmNhbnZhcy5mdWxsX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ub3BhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGlzdF9ub19zdHlsZSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBOztFQUVDLGtNQUFBO0VBRUEsU0FBQTtBQUxEOztBQVFBO0VBQ0MsV0FBQTtFQUNBLHlCQUFBO0FBTEQ7O0FBUUE7RUFDQyx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQUxEOztBQVFBO0VBQ0MsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFMRDs7QUFRQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQWxDYTtFQW1DYixhQUFBO0VBQ0EsaUJBcENhO0VBdUNiLG1CQUFBO0FBUEQ7O0FBVUE7RUFDQyx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBNUNlO0VBNkNmLFlBOUNhO0VBK0NiLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBUEQ7O0FBVUE7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQRDs7QUFXQTtFQUNDLG9CQUFBO0VBQ0EscURBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFSRDs7QUFZQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVZEOztBQWFBO0VBQ0MsZUFBQTtBQVZEOztBQWFBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVZEOztBQWFBO0VBQ0Msa0JBQUE7QUFWRDs7QUFhQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0FBVkQ7O0FBYUE7O0VBQUE7QUFrQkE7RUFUQyxPQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUE3R2E7RUE4R2IsbUJBN0dlO0VBOEdmLFdBQUE7RUFDQSxZQUFBO0VBS0EsV0FqQnFCO0VBa0JyQixZQWxCcUI7RUFtQnJCLGVBQUE7QUFuQkQ7O0FBc0JBO0VBaEJDLE9BQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQTdHYTtFQThHYixtQkE3R2U7RUE4R2YsV0FBQTtFQUNBLFlBQUE7RUFZQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFiRDtBQWVDO0VBUEQ7SUFRRSw2QkFBQTtJQUNBLHFCQUFBO0VBWkE7QUFDRjs7QUFlQTtFQTdCQyxPQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUE3R2E7RUE4R2IsbUJBN0dlO0VBOEdmLFdBQUE7RUFDQSxZQUFBO0VBeUJBLFdBckNxQjtFQXNDckIsWUF0Q3FCO0VBdUNyQixTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFORDs7QUFTQTtFQUNDLFlBNUN3QjtFQTZDeEIsZUE1Q3VCO0VBNkN2QixrQkE3Q3VCO0VBOEN2QixXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7QUFORDs7QUFTQTtFQUNDLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUFORDs7QUFTQTtFQUNDLFlBQUE7RUFDQSxxQkFBQTtBQU5EO0FBUUM7RUFDQyxpQkFBQTtBQU5GOztBQVVBO0VBQ0MscUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBekV3QjtFQTBFeEIsa0JBQUE7RUFDQSxVQUFBO0FBUEQ7QUFRQztFQU5EO0lBT0UsMkJBQUE7RUFMQTtBQUNGO0FBT0M7RUFDQyxjQUFBO0FBTEY7O0FBU0E7RUFDQyxxQkFBQTtFQUNBLHVCQUFBO0FBTkQ7O0FBU0E7RUFDQyxxQ0FBQTtFQUNBLGdCQUFBO0FBTkQ7O0FBU0E7RUFDQyxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTkQ7O0FBVUM7RUFDQyxVQUFBO0FBUEY7QUFTQztFQUNDLFdBQUE7QUFQRjs7QUFXQTtFQUNDLGtCQUFBO0FBUkQ7O0FBV0E7RUFDQyx5QkFBQTtFQUNBLFdBQUE7QUFSRDtBQVVDOztFQUVDLG1CQUFBO0VBQ0Esa0JBQUE7QUFSRjtBQVdDO0VBQ0MsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFURjtBQVlDO0VBQ0MsY0FBQTtBQVZGOztBQWNBO0VBQ0MsY0FBQTtBQVhEOztBQWNBO0VBQ0MsYUFBQTtBQVhEOztBQWNBO0VBQ0MsNkJBQUE7RUFDQSxxQkFBQTtBQVhEOztBQWNBO0VBQ0MsV0FBQTtBQVhEOztBQWNBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFYRDs7QUFjQTtFQUNDLFVBQUE7QUFYRDs7QUFjQTtFQUNDLHFCQUFBO0FBWERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXHJcXG5cXHJcXG4kcGFnZS1tYXJnaW46IDE1cHg7XFxyXFxuJGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIixcXHJcXG5cXHRcXHRzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0cGFkZGluZzogMSU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2QzZWRlZDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuXFx0bWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxyXFxuXFx0bWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcclxcblxcdG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXHJcXG5cXHRtYXJnaW4taW5saW5lLWVuZDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYucCB7XFxyXFxuXFx0bWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxyXFxuXFx0bWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcclxcblxcdG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXHJcXG5cXHRtYXJnaW4taW5saW5lLWVuZDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMzJwdDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcclxcblxcdGZvbnQtd2VpZ2h0OiAyNTA7XFxyXFxuXFx0bWFyZ2luOiAkcGFnZS1tYXJnaW47XFxyXFxuXFx0bWFyZ2luLXRvcDogMDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogJHBhZ2UtbWFyZ2luO1xcclxcblxcdC8vIEFkZCAxcHggb2YgcGFkZGluZyB1bmRlciB0aGUgdGl0bGUuIFdpdGhvdXQgdGhpcywgZm9yIHNvbWUgcmVhc29uLCBDaHJvbWUgb24gbW9iaWxlIHdvdWxkIHNxdWlzaCB0aGUgdG9wbW9zdCBDYXJkIHVuZGVyIHRoZSB0aXRsZSB0byB0aGUgcmlnaHRcXHJcXG5cXHQvLyAob25seSBDaHJvbWUsIGFuZCBvbmx5IG9uIGFjdHVhbCBtb2JpbGUgZGV2aWNlLiBEZXNrdG9wIENocm9tZSBwcmV0ZW5kaW5nIHRvIGJlIGEgbW9iaWxlIGRldmljZSB3YXMgZmluZSkgXFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdG1pbi1oZWlnaHQ6IDIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuXFx0bWFyZ2luOiAkcGFnZS1tYXJnaW47XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGZsb2F0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXJfY2FyZCB7XFxyXFxuXFx0d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xcclxcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBLYVRlWCBvdmVycmlkZSB0byBtYWtlIHRoZSBmb250IHNsaWdodGx5IHNtYWxsZXJcXHJcXG4ua2F0ZXgge1xcclxcblxcdHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcclxcblxcdGZvbnQ6IG5vcm1hbCAxLjFlbSBLYVRlWF9NYWluLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuXFx0dGV4dC1pbmRlbnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi8vIElmIHRoZSBtYXRoIGdvZXMgb2ZmIHRoZSBzY3JlZW4gYWxsb3cgc2Nyb2xsaW5nXFxyXFxuLmthdGV4LWRpc3BsYXkge1xcclxcblxcdG92ZXJmbG93LXg6IGF1dG87XFxyXFxuXFx0b3ZlcmZsb3cteTogaGlkZGVuO1xcclxcblxcdC8vIE5lZWQgdG8gYWRkIHNvbWUgcGFkZGluZyBzbyB0aGUgc2Nyb2xsYmFyIGRvZXNuJ3QgY292ZXIgdGhlIHRleHRcXHJcXG5cXHRwYWRkaW5nLXRvcDogMC41ZW07XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDAuNWVtO1xcclxcblxcdG1hcmdpbi10b3A6IDAuNWVtO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5waWN0dXJlID4gaW1nIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jZW50ZXJlZCB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpdF9jb250ZW50IHtcXHJcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5mbGV4IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogTWVudSBTdHlsaW5nXFxyXFxuICovXFxyXFxuJG1lbnUtY29sbGFwc2VkLXNpemU6IDUwcHg7XFxyXFxuJG1lbnUtaW5uZXItc2lkZS1tYXJnaW46ICRtZW51LWNvbGxhcHNlZC1zaXplICogMC4yO1xcclxcbiRtZW51LWlubmVyLXRvcC1tYXJnaW46ICRtZW51LWNvbGxhcHNlZC1zaXplICogMC4xO1xcclxcbiRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQ6ICRtZW51LWNvbGxhcHNlZC1zaXplIC0gMiAqICRtZW51LWlubmVyLXRvcC1tYXJnaW47XFxyXFxuXFxyXFxuQG1peGluIG1lbnUoKSB7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRtYXJnaW46ICRwYWdlLW1hcmdpbjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG5cXHR6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2NvbGxhcHNlZCB7XFxyXFxuXFx0QGluY2x1ZGUgbWVudSgpO1xcclxcblxcdHdpZHRoOiAkbWVudS1jb2xsYXBzZWQtc2l6ZTtcXHJcXG5cXHRoZWlnaHQ6ICRtZW51LWNvbGxhcHNlZC1zaXplO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfZXhwYW5kZWQge1xcclxcblxcdEBpbmNsdWRlIG1lbnUoKTtcXHJcXG5cXHR3aWR0aDogYXV0bztcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogbWF0aC5kaXYoJHBhZ2UtbWFyZ2luLCAyKTtcXHJcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMi8zKSB7XFxyXFxuXFx0XFx0d2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxyXFxuXFx0XFx0d2lkdGg6IC1tb3otYXZhaWxhYmxlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfYnV0dG9uIHtcXHJcXG5cXHRAaW5jbHVkZSBtZW51KCk7XFxyXFxuXFx0d2lkdGg6ICRtZW51LWNvbGxhcHNlZC1zaXplO1xcclxcblxcdGhlaWdodDogJG1lbnUtY29sbGFwc2VkLXNpemU7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfYnV0dG9uX2lubmVyIHtcXHJcXG5cXHRtYXJnaW46ICRtZW51LWlubmVyLXNpZGUtbWFyZ2luO1xcclxcblxcdG1hcmdpbi10b3A6ICRtZW51LWlubmVyLXRvcC1tYXJnaW47XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogJG1lbnUtaW5uZXItdG9wLW1hcmdpbjtcXHJcXG5cXHR3aWR0aDogJG1lbnUtY29sbGFwc2VkLXNpemUgLSAyICogJG1lbnUtaW5uZXItc2lkZS1tYXJnaW47XFxyXFxuXFx0Ym9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcXHJcXG5cXHRib3JkZXItdG9wLXdpZHRoOiBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0LCA3KTtcXHJcXG5cXHRoZWlnaHQ6IG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQgKiA2LCA3KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfYnV0dG9uX2xpbmUge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCwgNyk7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCwgNyk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmEubWVudV9pdGVtIHtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcblxcdCY6aG92ZXIge1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxudWwubWVudV9saXN0IHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAkbWVudS1pbm5lci1zaWRlLW1hcmdpbjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0d2lkdGg6IDhlbTtcXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAyLzMpIHtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAkbWVudS1jb2xsYXBzZWQtc2l6ZSArIG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQsIDcpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmID4gbGkgPiBhID4gcCB7XFxyXFxuXFx0XFx0bWFyZ2luOiAxNnB4IDA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG51bC5tYXRoX2xpc3QgPiBsaSB7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDAuNWVtO1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5saW5lX2NvZGUge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxyXFxuXFx0cGFkZGluZzogMXB4IDFweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEuY29kZWJsb2NrIHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuXFx0Ji5yZWQge1xcclxcblxcdFxcdGNvbG9yOiByZWQ7XFxyXFxuXFx0fVxcclxcblxcdCYuYmx1ZSB7XFxyXFxuXFx0XFx0Y29sb3I6IGJsdWU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5jb21tYW5kX3RhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcclxcblxcdHRoLFxcclxcblxcdHRkIHtcXHJcXG5cXHRcXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcblxcdFxcdGJvcmRlci13aWR0aDogdGhpbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0dGgge1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuXFx0XFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHRkIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAwLjVlbTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5zdWJzZWN0aW9uIHtcXHJcXG5cXHRmb250LXNpemU6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vZGlzcCB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwc2lkZWRvd24ge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsb2F0X2xlZnQge1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG5jYW52YXMuZnVsbF9jYW52YXMge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcGFkZGluZyB7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Rfbm9fc3R5bGUge1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jaG9jby5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvY2hvY28ud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jb21wYXNzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jb21wYXNzLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaGVhcnQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2hlYXJ0LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaG9tZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaG9tZS53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL211c2hyb29tLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9tdXNocm9vbS53ZWJwXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzJdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMl0hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFByb3BzV2l0aG91dFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2FyZDogUmVhY3QuRkM8Q29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFwiZGl2XCI+PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfY2FyZFwiPntjaGlsZHJlbn08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBob21lUG5nIGZyb20gXCIuLi9pbWFnZXMvaG9tZS5wbmdcIjtcclxuaW1wb3J0IGhvbWVXZWJwIGZyb20gXCIuLi9pbWFnZXMvaG9tZS53ZWJwXCI7XHJcbmltcG9ydCBjb21wYXNzUG5nIGZyb20gXCIuLi9pbWFnZXMvY29tcGFzcy5wbmdcIjtcclxuaW1wb3J0IGNvbXBhc3NXZWJwIGZyb20gXCIuLi9pbWFnZXMvY29tcGFzcy53ZWJwXCI7XHJcbmltcG9ydCBjaG9jb1BuZyBmcm9tIFwiLi4vaW1hZ2VzL2Nob2NvLnBuZ1wiO1xyXG5pbXBvcnQgY2hvY29XZWJwIGZyb20gXCIuLi9pbWFnZXMvY2hvY28ud2VicFwiO1xyXG5pbXBvcnQgbXVzaHJvb21QbmcgZnJvbSBcIi4uL2ltYWdlcy9tdXNocm9vbS5wbmdcIjtcclxuaW1wb3J0IG11c2hyb29tV2VicCBmcm9tIFwiLi4vaW1hZ2VzL211c2hyb29tLndlYnBcIjtcclxuaW1wb3J0IGhlYXJ0UG5nIGZyb20gXCIuLi9pbWFnZXMvaGVhcnQucG5nXCI7XHJcbmltcG9ydCBoZWFydFdlYnAgZnJvbSBcIi4uL2ltYWdlcy9oZWFydC53ZWJwXCI7XHJcblxyXG5jb25zdCBNZW51OiBSZWFjdC5GQzxNZW51UHJvcHM+ID0gKHsgc3RhcnRFeHBhbmRlZCB9KSA9PiB7XHJcblx0Y29uc3QgW2V4cGFuZGVkLCB0b2dnbGVFeHBhbmRlZF0gPSB1c2VTdGF0ZShzdGFydEV4cGFuZGVkID8/IGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtleHBhbmRlZCA/IFwibWVudV9leHBhbmRlZFwiIDogXCJtZW51X2NvbGxhcHNlZFwifT5cclxuXHRcdFx0e01lbnVCdXR0b24oZXhwYW5kZWQsIHRvZ2dsZUV4cGFuZGVkKX1cclxuXHRcdFx0e2V4cGFuZGVkID8gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWRcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJtZW51X2xpc3QgY2VudGVyZWRcIj5cclxuXHRcdFx0XHRcdFx0e01lbnVJdGVtKFwiL1wiLCBcIkhvbWVcIiwgaG9tZVBuZywgaG9tZVdlYnApfVxyXG5cdFx0XHRcdFx0XHR7TWVudUl0ZW0oXCIvcHJvYmxlbXMuaHRtbFwiLCBcIlByb2JsZW1zXCIsIGNvbXBhc3NQbmcsIGNvbXBhc3NXZWJwKX1cclxuXHRcdFx0XHRcdFx0e01lbnVJdGVtKFwiL2Nob21wLmh0bWxcIiwgXCJDaG9tcFwiLCBjaG9jb1BuZywgY2hvY29XZWJwKX1cclxuXHRcdFx0XHRcdFx0e01lbnVJdGVtKFwiL2JlZnVuZ2UuaHRtbFwiLCBcIkJlZnVuZ2VcIiwgbXVzaHJvb21QbmcsIG11c2hyb29tV2VicCl9XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9taXNjLmh0bWxcIiwgXCJNaXNjZWxsYW5lYVwiLCBoZWFydFBuZywgaGVhcnRXZWJwKX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkgOiBudWxsfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIE1lbnVJdGVtKHJlZmVyZW5jZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHBuZzogYW55LCB3ZWJwOiBhbnkpOiBKU1guRWxlbWVudCB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxsaT5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPVwibWVudV9pdGVtXCIgaHJlZj17cmVmZXJlbmNlfT5cclxuXHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdDxwaWN0dXJlPlxyXG5cdFx0XHRcdFx0XHQ8c291cmNlIHR5cGU9XCJpbWFnZS93ZWJwXCIgc3JjU2V0PXt3ZWJwfSAvPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17cG5nfSBoZWlnaHQ9XCIxNnB4XCIgd2lkdGg9XCIxNnB4XCIgYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdDwvcGljdHVyZT5cclxuXHRcdFx0XHRcdCZuYnNwO1xyXG5cdFx0XHRcdFx0e3RleHR9XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHQ8L2xpPlxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lbnVCdXR0b24oXHJcblx0ZXhwYW5kZWQ6IGJvb2xlYW4sXHJcblx0dG9nZ2xlRXhwYW5kZWQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PixcclxuKTogSlNYLkVsZW1lbnQge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlRXhwYW5kZWQoIWV4cGFuZGVkKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudV9idXR0b25faW5uZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uX2xpbmVcIiAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudV9idXR0b25fbGluZVwiIC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51X2J1dHRvbl9saW5lXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG5cclxudHlwZSBNZW51UHJvcHMgPSBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJkaXZcIj4gJlxyXG5cdFBhcnRpYWw8e1xyXG5cdFx0c3RhcnRFeHBhbmRlZDogYm9vbGVhbjtcclxuXHR9PjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFByb3BzV2l0aG91dFJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgUmVhY3RFbGVtZW50LCBFbGVtZW50VHlwZSwgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQga2F0ZXggZnJvbSBcImthdGV4XCI7XHJcblxyXG5jb25zdCBUZVg6IFJlYWN0LkZDPFRlWFByb3BzPiA9ICh7XHJcblx0Y2hpbGRyZW4sXHJcblx0bWF0aCxcclxuXHRibG9jayxcclxuXHRlcnJvckNvbG9yLFxyXG5cdHJlbmRlckVycm9yLFxyXG5cdHNldHRpbmdzLFxyXG5cdGFzOiBhc0NvbXBvbmVudCxcclxuXHQuLi5wcm9wc1xyXG59KSA9PiB7XHJcblx0Y29uc3QgQ29tcG9uZW50ID0gYXNDb21wb25lbnQgfHwgKGJsb2NrID8gXCJkaXZcIiA6IFwic3BhblwiKTtcclxuXHRjb25zdCBjb250ZW50ID0gKGNoaWxkcmVuID8/IG1hdGgpIGFzIHN0cmluZztcclxuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPHsgaW5uZXJIdG1sOiBzdHJpbmcgfSB8IHsgZXJyb3JFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQgfT4oe1xyXG5cdFx0aW5uZXJIdG1sOiBcIlwiLFxyXG5cdH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgaW5uZXJIdG1sID0ga2F0ZXgucmVuZGVyVG9TdHJpbmcoY29udGVudCwge1xyXG5cdFx0XHRcdGRpc3BsYXlNb2RlOiAhIWJsb2NrLFxyXG5cdFx0XHRcdGVycm9yQ29sb3IsXHJcblx0XHRcdFx0dGhyb3dPbkVycm9yOiAhIXJlbmRlckVycm9yLFxyXG5cdFx0XHRcdC4uLnNldHRpbmdzLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHNldFN0YXRlKHsgaW5uZXJIdG1sIH0pO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2Yga2F0ZXguUGFyc2VFcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xyXG5cdFx0XHRcdGlmIChyZW5kZXJFcnJvcikge1xyXG5cdFx0XHRcdFx0c2V0U3RhdGUoeyBlcnJvckVsZW1lbnQ6IHJlbmRlckVycm9yKGVycm9yKSB9KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c2V0U3RhdGUoeyBpbm5lckh0bWw6IGVycm9yLm1lc3NhZ2UgfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSwgW2Jsb2NrLCBjb250ZW50LCBlcnJvckNvbG9yLCByZW5kZXJFcnJvciwgc2V0dGluZ3NdKTtcclxuXHJcblx0aWYgKFwiZXJyb3JFbGVtZW50XCIgaW4gc3RhdGUpIHtcclxuXHRcdHJldHVybiBzdGF0ZS5lcnJvckVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3RhdGUuaW5uZXJIdG1sIH19IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhUZVgpO1xyXG5cclxudHlwZSBUZVhQcm9wcyA9IENvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcImRpdlwiPiAmXHJcblx0UGFydGlhbDx7XHJcblx0XHRhczogRWxlbWVudFR5cGU7XHJcblx0XHRtYXRoOiBzdHJpbmcgfCBudW1iZXI7XHJcblx0XHRibG9jazogYm9vbGVhbjtcclxuXHRcdGVycm9yQ29sb3I6IHN0cmluZztcclxuXHRcdHJlbmRlckVycm9yOiAoZXJyb3I6IGthdGV4LlBhcnNlRXJyb3IgfCBUeXBlRXJyb3IpID0+IFJlYWN0RWxlbWVudDtcclxuXHRcdHNldHRpbmdzOiBrYXRleC5LYXRleE9wdGlvbnM7XHJcblx0fT47XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL01lbnVcIjtcclxuaW1wb3J0IFRlWCBmcm9tIFwiLi9jb21wb25lbnRzL1RlWFwiO1xyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbnJlbmRlcihcclxuXHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHQ8TWVudSAvPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPk1pc2NlbGxhbmVhPC9kaXY+XHJcblx0XHQ8Q2FyZD5cclxuXHRcdFx0PGEgaHJlZj1cIi9jb21wbGV4Lmh0bWxcIj5Db21wbGV4IGZ1bmN0aW9uIHBsb3R0ZXI8L2E+ICZuZGFzaDsgQSBwbGFjZSB0byBncmFwaCBmdW5jdGlvbnMgb24gdGhlXHJcblx0XHRcdGNvbXBsZXggcGxhbmUhIEl0IHVzZXMgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0RvbWFpbl9jb2xvcmluZ1wiPmRvbWFpbiBjb2xvcmluZzwvYT4gdG8gdmlzdWFsaXplIGNvbXBsZXggZnVuY3Rpb25zIGluIHR3byBkaW1lbnNpb25zLlxyXG5cdFx0XHRDbGljayBhbmQgZHJhZyB0byBtb3ZlIGFyb3VuZCwgYW5kIHByZXNzIHRoZSAtIGFuZCArIGtleXMgdG8gem9vbS4gSGVyZSBhcmUgc29tZVxyXG5cdFx0XHRleGFtcGxlczpcclxuXHRcdFx0PHVsIGNsYXNzTmFtZT1cIm1hdGhfbGlzdFwiPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvY29tcGxleC5odG1sIzEveCUyMGxuKHgtMSleMiYmMTJcIj5cclxuXHRcdFx0XHRcdFx0PFRlWCBtYXRoPVwiXFxkaXNwbGF5c3R5bGUgXFxmcmFjezF9e3h9XFxsbih4LTEpXjJcIiAvPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PGEgaHJlZj1cIi9jb21wbGV4Lmh0bWwjKDEveF41LWkpICgxLyh4LzIpXjUrMSkgKDEvKHgvMyleNStpKSAoMS8oeC80KV41LTEpJiYxNVwiPlxyXG5cdFx0XHRcdFx0XHQ8VGVYIG1hdGg9XCJcXGRpc3BsYXlzdHlsZSBcXHByb2Rfe249MX1eNFxcbGVmdCggKHgvbileey01fSAtIGlebiBcXHJpZ2h0KVwiIC8+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8YSBocmVmPVwiL2NvbXBsZXguaHRtbCNzaW4obG4oZXhwKHheMikpKXNpbihsbihleHAoeF4zLXBpLzIpKSkmJjhcIj5cclxuXHRcdFx0XHRcdFx0PFRlWCBtYXRoPVwiXFxkaXNwbGF5c3R5bGUgXFxzaW5cXGxlZnQoXFxsblxcbGVmdCggZV57eF4yfSBcXHJpZ2h0KVxccmlnaHQpIFxcc2luXFxsZWZ0KFxcbG5cXGxlZnQoIGVee3heMy1cXHBpLzJ9IFxccmlnaHQpXFxyaWdodClcIiAvPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PGEgaHJlZj1cIi9jb21wbGV4Lmh0bWwjeF4yLygoeC0xKSh4LSgtMS8yKzNeKDEvMilpLzIpKSh4LSgtMS8yLTNeKDEvMilpLzIpKSkmJjVcIj5cclxuXHRcdFx0XHRcdFx0PFRlWCBtYXRoPVwiXFxkaXNwbGF5c3R5bGUgXFxmcmFje3heMn17KHgtXFx6ZXRhXzEpKHgtXFx6ZXRhXzIpKHgtXFx6ZXRhXzMpfVwiIC8+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQsIHdoZXJlIHRoZSA8VGVYPlxcemV0YV9pPC9UZVg+IGFyZSB0aGUgdGhpcmQgcm9vdHMgb2YgdW5pdHlcclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvY29tcGxleC5odG1sI3RldCh4LDUyKSYtMC41LDAmOFwiPlxyXG5cdFx0XHRcdFx0XHQ8VGVYIG1hdGg9XCJcXGRpc3BsYXlzdHlsZSBcXG1hdGhybXt0ZXR9KHgsIDUyKVwiIC8+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQsIHdoZXJlIDxUZVggbWF0aD1cIlxcbWF0aHJte3RldH1cIiAvPiBpcyBpc3tcIiBcIn1cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9UZXRyYXRpb25cIj50ZXRyYXRpb248L2E+ICZtZGFzaDt7XCIgXCJ9XHJcblx0XHRcdFx0XHQ8VGVYIG1hdGg9XCJcXG1hdGhybXt0ZXR9KHgsIG4pID0gXFxsZWZ0LiB4Xnt4XnsuLi5ee3h9fX1cXHJpZ2h0XFx9IG5cXHRleHR7IHRpbWVzfVwiIC8+LlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L0NhcmQ+XHJcblx0XHQ8Q2FyZD5cclxuXHRcdFx0PGEgaHJlZj1cIi9jb21wcy5odG1sXCI+Q29tcHM8L2E+ICZuZGFzaDsgQW4gb3ZlcnZpZXcgb2Ygc29tZSBjb29sIHJlc2VhcmNoIEkgZGlkIG9uIG5ld2x5IHJlZHVjaWJsZVxyXG5cdFx0XHRwb2x5bm9taWFscy5cclxuXHRcdDwvQ2FyZD5cclxuXHRcdDxDYXJkPlxyXG5cdFx0XHQ8YSBocmVmPVwiL3BlbnRyaXMuaHRtbFwiPlBlbnRyaXM8L2E+ICZuZGFzaDsgSXQncyBsaWtlIHRldHJpcywgYnV0IHdpdGggcGVudG9taW5vcyBhbmQgcmVmbGVjdGlvbiFcclxuXHRcdFx0PHVsIGNsYXNzTmFtZT1cImxpc3Rfbm9fc3R5bGVcIj5cclxuXHRcdFx0XHQ8bGk+TGVmdCAvIFJpZ2h0ICZuZGFzaDsgTW92ZSBwaWVjZSBzaWRld2F5czwvbGk+XHJcblx0XHRcdFx0PGxpPlVwICZuZGFzaDsgUm90YXRlIHBpZWNlPC9saT5cclxuXHRcdFx0XHQ8bGk+WCAmbmRhc2g7IFJlZmxlY3QgcGllY2U8L2xpPlxyXG5cdFx0XHRcdDxsaT5DICZuZGFzaDsgU3RvcmUgcGllY2UgZm9yIGxhdGVyPC9saT5cclxuXHRcdFx0XHQ8bGk+RG93biAmbmRhc2g7IFNvZnQgZHJvcDwvbGk+XHJcblx0XHRcdFx0PGxpPlNwYWNlICZuZGFzaDsgSGFyZCBkcm9wPC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvQ2FyZD5cclxuXHQ8L1JlYWN0LkZyYWdtZW50PixcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIikgYXMgSFRNTEVsZW1lbnQsXHJcbik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
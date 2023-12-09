"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["comps"],{

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

/***/ "./src/comps.tsx":
/*!***********************!*\
  !*** ./src/comps.tsx ***!
  \***********************/
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
    React.createElement("div", { className: "title" }, "Comps"),
    React.createElement(Card_1.default, null,
        "This page gives a brief introduction to my \"comps\" (",
        React.createElement("i", null, "comp"),
        "rehensive senior project at Carleton). If you're interested, there is much more detail in the",
        " ",
        React.createElement("a", { href: "https://arxiv.org/abs/2008.01222" }, "paper"),
        "!"),
    React.createElement(Card_1.default, null,
        React.createElement("h3", null, "Introduction"),
        React.createElement("p", null,
            "For this project we focused on the",
            " ",
            React.createElement("a", { href: "//en.wikipedia.org/wiki/Irreducible_polynomial" }, "reducibility"),
            " of polynomial iterates. What do we mean by iterates? If ",
            React.createElement(TeX_1.default, null, "f(x)"),
            " is an arbitrary polynomial, define the ",
            React.createElement(TeX_1.default, null, "n"),
            "th iterate of ",
            React.createElement(TeX_1.default, null, "f"),
            " to be"),
        React.createElement(TeX_1.default, { block: true, math: "f^n(x) = \\underbrace{f(f(...f(x)))}_{n\\ f\\text{'s}}." }),
        React.createElement("p", null,
            "We say that ",
            React.createElement(TeX_1.default, null, "f^n(x)"),
            " is ",
            React.createElement("i", null, "newly reducible"),
            " when each of",
            " ",
            React.createElement(TeX_1.default, { math: "f(x), f^2(x), ..., f^{n-1}(x)" }),
            " is irreducible, but ",
            React.createElement(TeX_1.default, null, "f^n(x)"),
            " is reducible. Note that once some iterate ",
            React.createElement(TeX_1.default, null, "f^n"),
            " is reducible, all further iterates are also reducible. This is why we're interested in the ",
            React.createElement("i", null, "first"),
            " time an iterate of",
            " ",
            React.createElement(TeX_1.default, null, "f"),
            " is reducible."),
        React.createElement("p", null,
            "We can study newly reducible polynomial iterates over any field, but on this page we'll keep things limited to the rational numbers ",
            React.createElement(TeX_1.default, { math: "\\mathbb{Q}" }),
            "."),
        React.createElement("p", null,
            "Let's look at an example: the polynomial ",
            React.createElement(TeX_1.default, null, "f(x) = x^2 - x - 1"),
            " is a famous one, being the minimal polynomial of the golden ratio ",
            React.createElement(TeX_1.default, null, "\\varphi"),
            ". It is irreducible over",
            " ",
            React.createElement(TeX_1.default, { math: "\\mathbb{Q}" }),
            " because ",
            React.createElement(TeX_1.default, null, "\\varphi"),
            " is irrational. Now let's look at its iterates:"),
        React.createElement(TeX_1.default, { block: true, math: `\\begin{aligned}
				f^2(x) &= x^4 - 2x^3 - 2x^2 + 3x + 1 &&\\text{is irreducible.} \\\\
				f^3(x) &= (x^4 - 3x^3 + 4x - 1) (x^4 - x^3 - 3x^2 + x + 1) &&\\text{is reducible!}
				\\end{aligned}` }),
        React.createElement("p", null,
            "So this polynomial has a newly reducible third iterate. This makes it very rare; there are only ",
            React.createElement("i", null, "eight"),
            " other monic quadratic integer polynomials ",
            React.createElement(TeX_1.default, null, "x^2 + ax + b"),
            " with",
            " ",
            React.createElement(TeX_1.default, { math: "|a| \\le 10^5, |b| \\le 10^9" }),
            " that have newly reducible third iterates. Such rarity naturally inspires us to wonder: \"What makes these polynomials special?\" \"How many are there total?\" \"Are there infinitely many?\" So our preliminary questions were:"),
        React.createElement("ol", { type: "1" },
            React.createElement("li", null,
                "How many polynomials of the above form have newly reducible third iterates (over",
                " ",
                React.createElement(TeX_1.default, { math: "\\mathbb{Q}" }),
                ")?"),
            React.createElement("li", null,
                "Why is the minimal polynomial of ",
                React.createElement(TeX_1.default, null, "\\varphi"),
                " one of them?")),
        React.createElement("p", null, "We were able to find answers to these questions, as well as some equivelant questions for other iterates and other fields."),
        React.createElement("p", null, "We also tackled some additional questions, though they're not completely solved:"),
        React.createElement("ol", { type: "1", start: 3 },
            React.createElement("li", null,
                "Given a degree ",
                React.createElement(TeX_1.default, null, "d"),
                ", how many rational monic degree-",
                React.createElement(TeX_1.default, null, "d"),
                " polynomials have newly reducible ",
                React.createElement("i", null, "second"),
                " iterates?"),
            React.createElement("li", null,
                "Are there any rational polynomials with a newly reducible ",
                React.createElement("i", null, "fourth"),
                " iterate?"),
            React.createElement("li", null,
                "Given ",
                React.createElement(TeX_1.default, { math: "n\\geq 4" }),
                ", are there any rational polynomials with a newly reducible",
                " ",
                React.createElement("i", null,
                    React.createElement(TeX_1.default, null, "n"),
                    "th"),
                " ",
                "iterate?")),
        React.createElement("p", null,
            "We made some progress on question 3 \u2014 it turns out that if ",
            React.createElement(TeX_1.default, null, "d = 3"),
            ",",
            " ",
            React.createElement(TeX_1.default, null, "d = 4"),
            ", or ",
            React.createElement(TeX_1.default, { math: "d\\equiv 2\\ (\\text{mod}\\ 4)" }),
            ", then there are infinitely many rational monic degree-",
            React.createElement(TeX_1.default, null, "d"),
            " polynomials with a newly reducible second iterate! And this result still holds if we require the polynomials to have integer coefficients. For other",
            " ",
            React.createElement(TeX_1.default, { math: "d > 1" }),
            ", this remains an open question.")),
    React.createElement(Card_1.default, null,
        React.createElement("h3", null, "Quadratic Polynomials with Newly Reducible Second Iterate"),
        React.createElement("p", null,
            "Earlier we asked whether there were infinitely many monic quadratic integer polynomials with a newly reducible ",
            React.createElement("i", null, "third"),
            " iterate \u2014 A somewhat easier question is whether there are infinitely many with a newly reducible ",
            React.createElement("i", null, "second"),
            " iterate. In this section, we'll prove that there are!"),
        React.createElement("p", null,
            "First, let ",
            React.createElement(TeX_1.default, null, "f(x) = (x-\\gamma)^2 + m + \\gamma"),
            ", for rational ",
            React.createElement(TeX_1.default, null, "m"),
            " and",
            " ",
            React.createElement(TeX_1.default, null, "\\gamma"),
            ". This form is equivalent to the form ",
            React.createElement(TeX_1.default, null, "f(x)=x^2 + ax + b"),
            ", but makes iterates nicer to work with. Then ",
            React.createElement(TeX_1.default, null, "f"),
            " factors uniquely over the complex numbers as",
            " ",
            React.createElement(TeX_1.default, { math: "f(x) = ((x-\\gamma)+\\sqrt{-m-\\gamma})((x-\\gamma)-\\sqrt{-m-\\gamma})" }),
            ", so it's reducible over the rational numbers if and only if ",
            React.createElement(TeX_1.default, null, "-m-\\gamma"),
            " is the square of a rational number. So if we want a newly reducible ",
            React.createElement("i", null, "second"),
            " iterate, we need",
            " ",
            React.createElement(TeX_1.default, null, "-m-\\gamma"),
            " to not be a square."),
        React.createElement("p", null,
            "Now let's suppose ",
            React.createElement(TeX_1.default, null, "f^2(x)"),
            " is newly reducible. What does this tell us about",
            " ",
            React.createElement(TeX_1.default, null, "m"),
            " and ",
            React.createElement(TeX_1.default, null, "\\gamma"),
            "? If ",
            React.createElement(TeX_1.default, null, "f^2(x)"),
            " is reducible, we can write it as"),
        React.createElement(TeX_1.default, { block: true, math: "f^2(x) = \\left((x-\\gamma)^2 + b_1(x-\\gamma) + a_1\\right)\\left((x-\\gamma)^2 - b_2(x-\\gamma) + a_2\\right)" }),
        React.createElement("p", null,
            "For some rational ",
            React.createElement(TeX_1.default, null, "a_1,a_2,b_1,b_2"),
            ". Note that here we assume that the degree-4 polynomial factors into two quadratic polynomials, rather than a linear and a cubic. It turns out this is always the case when ",
            React.createElement(TeX_1.default, null, "f"),
            " is irreducible - this is Lemma 2.3 in the paper."),
        React.createElement("p", null,
            "On the other hand, we can also write ",
            React.createElement(TeX_1.default, null, "f^2(x)"),
            " as"),
        React.createElement(TeX_1.default, { block: true, math: `\\begin{align*}
				f^2(x) &= f(f(x)) \\\\
				&= \\left( (x-\\gamma)^2 + m + \\gamma - \\gamma \\right)^2 + m + \\gamma \\\\
				&= (x-\\gamma)^4 + 2m(x-\\gamma) + m^2 + m + \\gamma.
				\\end{align*}` }),
        React.createElement("p", null,
            "Then we can equate the coefficients of powers of ",
            React.createElement(TeX_1.default, null, "(x-\\gamma)"),
            " in these two expressions to get the following system of equations:"),
        React.createElement(TeX_1.default, { block: true, math: `\\begin{align*}
				m^2+m+\\gamma &= a_1a_2 \\\\
				0 &= a_1b_2 + a_2b_1 \\\\
				2m &= a_1 + a_2 + b_1b_2 \\\\
				0 &= b_1 + b_2
				\\end{align*}` }),
        React.createElement("p", null,
            "The last equation shows that ",
            React.createElement(TeX_1.default, null, "b_2 = -b_1"),
            ". Putting this into the other equations gives"),
        React.createElement(TeX_1.default, { block: true, math: `\\begin{align*}
				m^2+m+\\gamma &= a_1a_2 \\\\
				0 &= -a_1b_1 + a_2b_1 \\\\
				2m &= a_1 + a_2 - b_1^2
				\\end{align*}` }),
        React.createElement("p", null,
            "Next we would like to use the second equation to say that ",
            React.createElement(TeX_1.default, null, "a_1 = a_2"),
            ", but",
            " ",
            React.createElement(TeX_1.default, null, "b_1"),
            " may be zero. Well, if it is zero, then solving the other equations for",
            " ",
            React.createElement(TeX_1.default, null, "m"),
            " and ",
            React.createElement(TeX_1.default, null, "\\gamma"),
            " and putting those values into our expression for",
            " ",
            React.createElement(TeX_1.default, null, "f(x)"),
            " shows that"),
        React.createElement(TeX_1.default, { block: true, math: "f(x+\\gamma) = \\frac{1}{4}(2x - a_1 + a_2)(2x + a_1 - a_2)." }),
        React.createElement("p", null,
            "However, we were assuming that ",
            React.createElement(TeX_1.default, null, "f^2(x)"),
            " is ",
            React.createElement("i", null, "newly"),
            " reducible, so this is a contradiction. Therefore, we know that ",
            React.createElement(TeX_1.default, null, "b_1\\neq 0"),
            ", so in fact ",
            React.createElement(TeX_1.default, null, "a_1 = a_2"),
            ". Now solving the remaining equations gives"),
        React.createElement(TeX_1.default, { block: true, math: `\\begin{align*}
					m &= \\frac{1}{2} \\left(2 a_1-b_1^2\\right) \\\\
					\\gamma &= \\frac{1}{4} \\left(4 a_1 b_1^2-4 a_1-b_1^4+2 b_1^2\\right)
					\\end{align*}\\tag{$\\ast$}` }),
        React.createElement("p", null,
            "To summarize, we now know that if ",
            React.createElement(TeX_1.default, null, "f(x)"),
            " has a newly reducible second iterate, then there exist rational numbers ",
            React.createElement(TeX_1.default, null, "a_1"),
            " and ",
            React.createElement(TeX_1.default, null, "b_1"),
            " such that equations",
            " ",
            React.createElement(TeX_1.default, null, "(\\ast)"),
            " are true."),
        React.createElement("p", null,
            "What about the opposite direction? Suppose we do have rational numbers ",
            React.createElement(TeX_1.default, null, "a_1"),
            " and",
            " ",
            React.createElement(TeX_1.default, null, "b_1"),
            ", and set ",
            React.createElement(TeX_1.default, null, "m"),
            " and ",
            React.createElement(TeX_1.default, null, "\\gamma"),
            " as in equations ",
            React.createElement(TeX_1.default, null, "(\\ast)"),
            ". Then ",
            React.createElement(TeX_1.default, null, "f^2"),
            " is reducible, because"),
        React.createElement(TeX_1.default, { block: true, math: "f^2(x+\\gamma) = \\left(x^2+b_1 x+a_1\\right) \\left(x^2-b_1 x+a_1\\right)." }),
        React.createElement("p", null,
            "For ",
            React.createElement(TeX_1.default, null, "f^2"),
            " to be ",
            React.createElement("i", null, "newly"),
            " reducible, we also need ",
            React.createElement(TeX_1.default, null, "f"),
            " to be irreducible. We said that this is the case whenever ",
            React.createElement(TeX_1.default, null, "-m-\\gamma"),
            " is not the square of a rational number. Here we have"),
        React.createElement(TeX_1.default, { block: true, math: "-m-\\gamma = - a_1 b_1^2 + \\frac{1}{4} b_1^4" }),
        React.createElement("p", null,
            "So we just need this number to not be a rational square. In other words, to prove that there are infinitely many ",
            React.createElement(TeX_1.default, null, "f(x)"),
            " with newly reducible second iterate, we just need infinitely many ",
            React.createElement(TeX_1.default, null, "a_1, b_1"),
            " pairs such that this number is not a square (and such that",
            " ",
            React.createElement(TeX_1.default, null, "m"),
            " and ",
            React.createElement(TeX_1.default, null, "\\gamma"),
            " are integers)."),
        React.createElement("p", null, "To find these, we rely on the facts that"),
        React.createElement("ul", null,
            React.createElement("li", null,
                "For any integer ",
                React.createElement(TeX_1.default, null, "n"),
                ", ",
                React.createElement(TeX_1.default, null, "n^2"),
                " is equivalent to 0 or 1 mod 3."),
            React.createElement("li", null,
                "For any integer ",
                React.createElement(TeX_1.default, null, "n"),
                ", ",
                React.createElement(TeX_1.default, null, "n"),
                " is a square if and only if ",
                React.createElement(TeX_1.default, null, "4n"),
                " is a square."),
            React.createElement("li", null,
                "For any integer ",
                React.createElement(TeX_1.default, null, "n"),
                ", if ",
                React.createElement(TeX_1.default, null, "n"),
                " is not the square of an integer, then it is also not the square of a rational number.")),
        React.createElement("p", null,
            "Let ",
            React.createElement(TeX_1.default, null, "a_1"),
            " and ",
            React.createElement(TeX_1.default, null, "b_1"),
            " be integers equivalent to 2 mod 3. Then we have"),
        React.createElement(TeX_1.default, { block: true, math: `\\begin{align*}
				4(-m-\\gamma) &= - 4 a_1 b_1^2 + b_1^4 \\\\
				&\\equiv - 1 * 2 * 1 + 1 \\ (\\text{mod}\\ 3) \\\\
				&\\equiv 2 \\ (\\text{mod}\\ 3) 
				\\end{align*}` }),
        React.createElement("p", null,
            "Therefore ",
            React.createElement(TeX_1.default, null, "-m-\\gamma"),
            " is not a square. Since there are infinitely many pairs of integers ",
            React.createElement(TeX_1.default, null, "(a_1,b_1)"),
            " equivalent to 2 mod 3, we now know there are infinitely many rational polynomials ",
            React.createElement(TeX_1.default, null, "f(x)"),
            " with a newly reducible second iterate! To complete the proof, we just need to find that infinitely many of these pairs also result in ",
            React.createElement(TeX_1.default, null, "f(x)"),
            " ",
            "with integer coefficients. Looking at equations ",
            React.createElement(TeX_1.default, null, "(\\ast)"),
            ", we see that this is satisfied whenever ",
            React.createElement(TeX_1.default, null, "b_1"),
            " is divisible by 2. Since there are infinitely many",
            " ",
            React.createElement(TeX_1.default, null, "b_1"),
            " that are both divisible by 2 and equivalent to 2 mod 3 (all integers of the form ",
            React.createElement(TeX_1.default, null, "6n + 2"),
            "), we have completed our proof!"),
        React.createElement("p", null, "Here's some Mathematica code for experimental validation:"),
        React.createElement("textarea", { className: "codeblock", readOnly: true, rows: 13, value: `Do[
 Do[
  a1 = 3*i + 2;
  b1 = 2*j*3 + 2;
  m = (2 a1 - b1^2)/2;
  gamma = (4 a1*b1^2 - 4 a1 - b1^4 + 2 b1^2)/4;
  f[x_] := (x - gamma)^2 + m + gamma;
  If[Not[IntegerQ[m] && IntegerQ[gamma] && 
     IrreduciblePolynomialQ[f[x]] && 
     Not[IrreduciblePolynomialQ[f[f[x]]]]],
   Print["Counterexample!"]];
  , {j, 0, i}]
 , {i, 0, 100}]` }))), document.querySelector("#root"));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/comps.tsx"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sa0ZBQWtGLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksTUFBTSxLQUFLLFdBQVcsV0FBVyxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxL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LENBQUMsT0FBTyxDQUFnQixDQUM5QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jaG9jby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jaG9jby53ZWJwIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY29tcGFzcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb21wYXNzLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oZWFydC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9oZWFydC53ZWJwIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaG9tZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ob21lLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tdXNocm9vbS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tdXNocm9vbS53ZWJwIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzP2U5ZDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVYLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLFxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNlZGVkO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG5kaXYucCB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuZGl2LnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMnB0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcbiAgZm9udC13ZWlnaHQ6IDI1MDtcbiAgbWFyZ2luOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbG9hdDogbm9uZTtcbn1cblxuLmlubmVyX2NhcmQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLmthdGV4IHtcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gIGZvbnQ6IG5vcm1hbCAxLjFlbSBLYVRlWF9NYWluLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWluZGVudDogMDtcbn1cblxuLmthdGV4LWRpc3BsYXkge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbnBpY3R1cmUgPiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maXRfY29udGVudCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi8qKlxuICogTWVudSBTdHlsaW5nXG4gKi9cbi5tZW51X2NvbGxhcHNlZCB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51X2V4cGFuZGVkIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDcuNXB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAyLzMpIHtcbiAgLm1lbnVfZXhwYW5kZWQge1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcbiAgfVxufVxuXG4ubWVudV9idXR0b24ge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWVudV9idXR0b25faW5uZXIge1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3Atd2lkdGg6IDUuNzE0Mjg1NzE0M3B4O1xuICBoZWlnaHQ6IDM0LjI4NTcxNDI4NTdweDtcbn1cblxuLm1lbnVfYnV0dG9uX2xpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1LjcxNDI4NTcxNDNweDtcbiAgbWFyZ2luLWJvdHRvbTogNS43MTQyODU3MTQzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5hLm1lbnVfaXRlbSB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYS5tZW51X2l0ZW06aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudWwubWVudV9saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4ZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAyLzMpIHtcbiAgdWwubWVudV9saXN0IHtcbiAgICBtYXJnaW4tdG9wOiA1NS43MTQyODU3MTQzcHg7XG4gIH1cbn1cbnVsLm1lbnVfbGlzdCA+IGxpID4gYSA+IHAge1xuICBtYXJnaW46IDE2cHggMDtcbn1cblxudWwubWF0aF9saXN0ID4gbGkge1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xufVxuXG4uaW5saW5lX2NvZGUge1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIHBhZGRpbmc6IDFweCAxcHg7XG59XG5cbnRleHRhcmVhLmNvZGVibG9jayB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuc3Bhbi5yZWQge1xuICBjb2xvcjogcmVkO1xufVxuc3Bhbi5ibHVlIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jb21tYW5kX3RhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29tbWFuZF90YWJsZSB0aCxcbi5jb21tYW5kX3RhYmxlIHRkIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xufVxuLmNvbW1hbmRfdGFibGUgdGgge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG4uY29tbWFuZF90YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uc3Vic2VjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4ubm9kaXNwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVwc2lkZWRvd24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xufVxuXG4uZmxvYXRfbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5jYW52YXMuZnVsbF9jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubm9wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxpc3Rfbm9fc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTs7RUFFQyxrTUFBQTtFQUVBLFNBQUE7QUFMRDs7QUFRQTtFQUNDLFdBQUE7RUFDQSx5QkFBQTtBQUxEOztBQVFBO0VBQ0MsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFMRDs7QUFRQTtFQUNDLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBTEQ7O0FBUUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFsQ2E7RUFtQ2IsYUFBQTtFQUNBLGlCQXBDYTtFQXVDYixtQkFBQTtBQVBEOztBQVVBO0VBQ0MsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQTVDZTtFQTZDZixZQTlDYTtFQStDYixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVBEOztBQVVBO0VBQ0Msd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUEQ7O0FBV0E7RUFDQyxvQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUkQ7O0FBWUE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFWRDs7QUFhQTtFQUNDLGVBQUE7QUFWRDs7QUFhQTtFQUNDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFWRDs7QUFhQTtFQUNDLGtCQUFBO0FBVkQ7O0FBYUE7RUFDQyxhQUFBO0VBQ0EsZUFBQTtBQVZEOztBQWFBOztFQUFBO0FBa0JBO0VBVEMsT0FBQTtFQUNBLE1BQUE7RUFDQSxzQkFBQTtFQUNBLFlBN0dhO0VBOEdiLG1CQTdHZTtFQThHZixXQUFBO0VBQ0EsWUFBQTtFQUtBLFdBakJxQjtFQWtCckIsWUFsQnFCO0VBbUJyQixlQUFBO0FBbkJEOztBQXNCQTtFQWhCQyxPQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUE3R2E7RUE4R2IsbUJBN0dlO0VBOEdmLFdBQUE7RUFDQSxZQUFBO0VBWUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBYkQ7QUFlQztFQVBEO0lBUUUsNkJBQUE7SUFDQSxxQkFBQTtFQVpBO0FBQ0Y7O0FBZUE7RUE3QkMsT0FBQTtFQUNBLE1BQUE7RUFDQSxzQkFBQTtFQUNBLFlBN0dhO0VBOEdiLG1CQTdHZTtFQThHZixXQUFBO0VBQ0EsWUFBQTtFQXlCQSxXQXJDcUI7RUFzQ3JCLFlBdENxQjtFQXVDckIsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTkQ7O0FBU0E7RUFDQyxZQTVDd0I7RUE2Q3hCLGVBNUN1QjtFQTZDdkIsa0JBN0N1QjtFQThDdkIsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FBTkQ7O0FBU0E7RUFDQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBTkQ7O0FBU0E7RUFDQyxZQUFBO0VBQ0EscUJBQUE7QUFORDtBQVFDO0VBQ0MsaUJBQUE7QUFORjs7QUFVQTtFQUNDLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQXpFd0I7RUEwRXhCLGtCQUFBO0VBQ0EsVUFBQTtBQVBEO0FBUUM7RUFORDtJQU9FLDJCQUFBO0VBTEE7QUFDRjtBQU9DO0VBQ0MsY0FBQTtBQUxGOztBQVNBO0VBQ0MscUJBQUE7RUFDQSx1QkFBQTtBQU5EOztBQVNBO0VBQ0MscUNBQUE7RUFDQSxnQkFBQTtBQU5EOztBQVNBO0VBQ0MscUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU5EOztBQVVDO0VBQ0MsVUFBQTtBQVBGO0FBU0M7RUFDQyxXQUFBO0FBUEY7O0FBV0E7RUFDQyxrQkFBQTtBQVJEOztBQVdBO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0FBUkQ7QUFVQzs7RUFFQyxtQkFBQTtFQUNBLGtCQUFBO0FBUkY7QUFXQztFQUNDLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBVEY7QUFZQztFQUNDLGNBQUE7QUFWRjs7QUFjQTtFQUNDLGNBQUE7QUFYRDs7QUFjQTtFQUNDLGFBQUE7QUFYRDs7QUFjQTtFQUNDLDZCQUFBO0VBQ0EscUJBQUE7QUFYRDs7QUFjQTtFQUNDLFdBQUE7QUFYRDs7QUFjQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBWEQ7O0FBY0E7RUFDQyxVQUFBO0FBWEQ7O0FBY0E7RUFDQyxxQkFBQTtBQVhEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuJHBhZ2UtbWFyZ2luOiAxNXB4O1xcclxcbiRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsXFxyXFxuXFx0XFx0c2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdHBhZGRpbmc6IDElO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNkM2VkZWQ7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcblxcdG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcclxcblxcdG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXHJcXG5cXHRtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XFxyXFxuXFx0bWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnAge1xcclxcblxcdG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcclxcblxcdG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXHJcXG5cXHRtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XFxyXFxuXFx0bWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDMycHQ7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXHJcXG5cXHRmb250LXdlaWdodDogMjUwO1xcclxcblxcdG1hcmdpbjogJHBhZ2UtbWFyZ2luO1xcclxcblxcdG1hcmdpbi10b3A6IDA7XFxyXFxuXFx0cGFkZGluZy10b3A6ICRwYWdlLW1hcmdpbjtcXHJcXG5cXHQvLyBBZGQgMXB4IG9mIHBhZGRpbmcgdW5kZXIgdGhlIHRpdGxlLiBXaXRob3V0IHRoaXMsIGZvciBzb21lIHJlYXNvbiwgQ2hyb21lIG9uIG1vYmlsZSB3b3VsZCBzcXVpc2ggdGhlIHRvcG1vc3QgQ2FyZCB1bmRlciB0aGUgdGl0bGUgdG8gdGhlIHJpZ2h0XFxyXFxuXFx0Ly8gKG9ubHkgQ2hyb21lLCBhbmQgb25seSBvbiBhY3R1YWwgbW9iaWxlIGRldmljZS4gRGVza3RvcCBDaHJvbWUgcHJldGVuZGluZyB0byBiZSBhIG1vYmlsZSBkZXZpY2Ugd2FzIGZpbmUpIFxcclxcblxcdHBhZGRpbmctYm90dG9tOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRtaW4taGVpZ2h0OiAyMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcclxcblxcdG1hcmdpbjogJHBhZ2UtbWFyZ2luO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRmbG9hdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyX2NhcmQge1xcclxcblxcdHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLy8gS2FUZVggb3ZlcnJpZGUgdG8gbWFrZSB0aGUgZm9udCBzbGlnaHRseSBzbWFsbGVyXFxyXFxuLmthdGV4IHtcXHJcXG5cXHR0ZXh0LXJlbmRlcmluZzogYXV0bztcXHJcXG5cXHRmb250OiBub3JtYWwgMS4xZW0gS2FUZVhfTWFpbiwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS4yO1xcclxcblxcdHRleHQtaW5kZW50OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBJZiB0aGUgbWF0aCBnb2VzIG9mZiB0aGUgc2NyZWVuIGFsbG93IHNjcm9sbGluZ1xcclxcbi5rYXRleC1kaXNwbGF5IHtcXHJcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcclxcblxcdG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG5cXHQvLyBOZWVkIHRvIGFkZCBzb21lIHBhZGRpbmcgc28gdGhlIHNjcm9sbGJhciBkb2Vzbid0IGNvdmVyIHRoZSB0ZXh0XFxyXFxuXFx0cGFkZGluZy10b3A6IDAuNWVtO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAwLjVlbTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxucGljdHVyZSA+IGltZyB7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyZWQge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maXRfY29udGVudCB7XFxyXFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIE1lbnUgU3R5bGluZ1xcclxcbiAqL1xcclxcbiRtZW51LWNvbGxhcHNlZC1zaXplOiA1MHB4O1xcclxcbiRtZW51LWlubmVyLXNpZGUtbWFyZ2luOiAkbWVudS1jb2xsYXBzZWQtc2l6ZSAqIDAuMjtcXHJcXG4kbWVudS1pbm5lci10b3AtbWFyZ2luOiAkbWVudS1jb2xsYXBzZWQtc2l6ZSAqIDAuMTtcXHJcXG4kbWVudS1pbm5lci1idXR0b24taGVpZ2h0OiAkbWVudS1jb2xsYXBzZWQtc2l6ZSAtIDIgKiAkbWVudS1pbm5lci10b3AtbWFyZ2luO1xcclxcblxcclxcbkBtaXhpbiBtZW51KCkge1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0bWFyZ2luOiAkcGFnZS1tYXJnaW47XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxuXFx0ei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9jb2xsYXBzZWQge1xcclxcblxcdEBpbmNsdWRlIG1lbnUoKTtcXHJcXG5cXHR3aWR0aDogJG1lbnUtY29sbGFwc2VkLXNpemU7XFxyXFxuXFx0aGVpZ2h0OiAkbWVudS1jb2xsYXBzZWQtc2l6ZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2V4cGFuZGVkIHtcXHJcXG5cXHRAaW5jbHVkZSBtZW51KCk7XFxyXFxuXFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdG1hcmdpbi1ib3R0b206IG1hdGguZGl2KCRwYWdlLW1hcmdpbiwgMik7XFxyXFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDIvMykge1xcclxcblxcdFxcdHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcclxcblxcdFxcdHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5tZW51X2J1dHRvbiB7XFxyXFxuXFx0QGluY2x1ZGUgbWVudSgpO1xcclxcblxcdHdpZHRoOiAkbWVudS1jb2xsYXBzZWQtc2l6ZTtcXHJcXG5cXHRoZWlnaHQ6ICRtZW51LWNvbGxhcHNlZC1zaXplO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2J1dHRvbl9pbm5lciB7XFxyXFxuXFx0bWFyZ2luOiAkbWVudS1pbm5lci1zaWRlLW1hcmdpbjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAkbWVudS1pbm5lci10b3AtbWFyZ2luO1xcclxcblxcdG1hcmdpbi1ib3R0b206ICRtZW51LWlubmVyLXRvcC1tYXJnaW47XFxyXFxuXFx0d2lkdGg6ICRtZW51LWNvbGxhcHNlZC1zaXplIC0gMiAqICRtZW51LWlubmVyLXNpZGUtbWFyZ2luO1xcclxcblxcdGJvcmRlci10b3AtY29sb3I6ICNmZmY7XFxyXFxuXFx0Ym9yZGVyLXRvcC1zdHlsZTogc29saWQ7XFxyXFxuXFx0Ym9yZGVyLXRvcC13aWR0aDogbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCwgNyk7XFxyXFxuXFx0aGVpZ2h0OiBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0ICogNiwgNyk7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2J1dHRvbl9saW5lIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQsIDcpO1xcclxcblxcdG1hcmdpbi1ib3R0b206IG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQsIDcpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5hLm1lbnVfaXRlbSB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG5cXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbnVsLm1lbnVfbGlzdCB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogJG1lbnUtaW5uZXItc2lkZS1tYXJnaW47XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHdpZHRoOiA4ZW07XFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMi8zKSB7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogJG1lbnUtY29sbGFwc2VkLXNpemUgKyBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0LCA3KTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0JiA+IGxpID4gYSA+IHAge1xcclxcblxcdFxcdG1hcmdpbjogMTZweCAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxudWwubWF0aF9saXN0ID4gbGkge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZV9jb2RlIHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcclxcblxcdHBhZGRpbmc6IDFweCAxcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhLmNvZGVibG9jayB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRyZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcblxcdCYucmVkIHtcXHJcXG5cXHRcXHRjb2xvcjogcmVkO1xcclxcblxcdH1cXHJcXG5cXHQmLmJsdWUge1xcclxcblxcdFxcdGNvbG9yOiBibHVlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWFuZF90YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG5cXHR0aCxcXHJcXG5cXHR0ZCB7XFxyXFxuXFx0XFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG5cXHRcXHRib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHRoIHtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcblxcdFxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHR0ZCB7XFxyXFxuXFx0XFx0cGFkZGluZzogMC41ZW07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uc3Vic2VjdGlvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5ub2Rpc3Age1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi51cHNpZGVkb3duIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XFxyXFxufVxcclxcblxcclxcbi5mbG9hdF9sZWZ0IHtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuY2FudmFzLmZ1bGxfY2FudmFzIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5ub3BhZGRpbmcge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0X25vX3N0eWxlIHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvY2hvY28ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2Nob2NvLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvY29tcGFzcy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvY29tcGFzcy53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2hlYXJ0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9oZWFydC53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2hvbWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2hvbWUud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9tdXNocm9vbS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvbXVzaHJvb20ud2VicFwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzJdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENhcmQ6IFJlYWN0LkZDPENvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcImRpdlwiPj4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubmVyX2NhcmRcIj57Y2hpbGRyZW59PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFByb3BzV2l0aG91dFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaG9tZVBuZyBmcm9tIFwiLi4vaW1hZ2VzL2hvbWUucG5nXCI7XHJcbmltcG9ydCBob21lV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2hvbWUud2VicFwiO1xyXG5pbXBvcnQgY29tcGFzc1BuZyBmcm9tIFwiLi4vaW1hZ2VzL2NvbXBhc3MucG5nXCI7XHJcbmltcG9ydCBjb21wYXNzV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2NvbXBhc3Mud2VicFwiO1xyXG5pbXBvcnQgY2hvY29QbmcgZnJvbSBcIi4uL2ltYWdlcy9jaG9jby5wbmdcIjtcclxuaW1wb3J0IGNob2NvV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2Nob2NvLndlYnBcIjtcclxuaW1wb3J0IG11c2hyb29tUG5nIGZyb20gXCIuLi9pbWFnZXMvbXVzaHJvb20ucG5nXCI7XHJcbmltcG9ydCBtdXNocm9vbVdlYnAgZnJvbSBcIi4uL2ltYWdlcy9tdXNocm9vbS53ZWJwXCI7XHJcbmltcG9ydCBoZWFydFBuZyBmcm9tIFwiLi4vaW1hZ2VzL2hlYXJ0LnBuZ1wiO1xyXG5pbXBvcnQgaGVhcnRXZWJwIGZyb20gXCIuLi9pbWFnZXMvaGVhcnQud2VicFwiO1xyXG5cclxuY29uc3QgTWVudTogUmVhY3QuRkM8TWVudVByb3BzPiA9ICh7IHN0YXJ0RXhwYW5kZWQgfSkgPT4ge1xyXG5cdGNvbnN0IFtleHBhbmRlZCwgdG9nZ2xlRXhwYW5kZWRdID0gdXNlU3RhdGUoc3RhcnRFeHBhbmRlZCA/PyBmYWxzZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17ZXhwYW5kZWQgPyBcIm1lbnVfZXhwYW5kZWRcIiA6IFwibWVudV9jb2xsYXBzZWRcIn0+XHJcblx0XHRcdHtNZW51QnV0dG9uKGV4cGFuZGVkLCB0b2dnbGVFeHBhbmRlZCl9XHJcblx0XHRcdHtleHBhbmRlZCA/IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibWVudV9saXN0IGNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9cIiwgXCJIb21lXCIsIGhvbWVQbmcsIGhvbWVXZWJwKX1cclxuXHRcdFx0XHRcdFx0e01lbnVJdGVtKFwiL3Byb2JsZW1zLmh0bWxcIiwgXCJQcm9ibGVtc1wiLCBjb21wYXNzUG5nLCBjb21wYXNzV2VicCl9XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9jaG9tcC5odG1sXCIsIFwiQ2hvbXBcIiwgY2hvY29QbmcsIGNob2NvV2VicCl9XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9iZWZ1bmdlLmh0bWxcIiwgXCJCZWZ1bmdlXCIsIG11c2hyb29tUG5nLCBtdXNocm9vbVdlYnApfVxyXG5cdFx0XHRcdFx0XHR7TWVudUl0ZW0oXCIvbWlzYy5odG1sXCIsIFwiTWlzY2VsbGFuZWFcIiwgaGVhcnRQbmcsIGhlYXJ0V2VicCl9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpIDogbnVsbH1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBNZW51SXRlbShyZWZlcmVuY2U6IHN0cmluZywgdGV4dDogc3RyaW5nLCBwbmc6IGFueSwgd2VicDogYW55KTogSlNYLkVsZW1lbnQge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8bGk+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cIm1lbnVfaXRlbVwiIGhyZWY9e3JlZmVyZW5jZX0+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHQ8cGljdHVyZT5cclxuXHRcdFx0XHRcdFx0PHNvdXJjZSB0eXBlPVwiaW1hZ2Uvd2VicFwiIHNyY1NldD17d2VicH0gLz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e3BuZ30gaGVpZ2h0PVwiMTZweFwiIHdpZHRoPVwiMTZweFwiIGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdFx0XHQmbmJzcDtcclxuXHRcdFx0XHRcdHt0ZXh0fVxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9saT5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZW51QnV0dG9uKFxyXG5cdGV4cGFuZGVkOiBib29sZWFuLFxyXG5cdHRvZ2dsZUV4cGFuZGVkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4sXHJcbik6IEpTWC5FbGVtZW50IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51X2J1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUV4cGFuZGVkKCFleHBhbmRlZCl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uX2lubmVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51X2J1dHRvbl9saW5lXCIgLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uX2xpbmVcIiAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudV9idXR0b25fbGluZVwiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuXHJcbnR5cGUgTWVudVByb3BzID0gQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFwiZGl2XCI+ICZcclxuXHRQYXJ0aWFsPHtcclxuXHRcdHN0YXJ0RXhwYW5kZWQ6IGJvb2xlYW47XHJcblx0fT47XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0RWxlbWVudCwgRWxlbWVudFR5cGUsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGthdGV4IGZyb20gXCJrYXRleFwiO1xyXG5cclxuY29uc3QgVGVYOiBSZWFjdC5GQzxUZVhQcm9wcz4gPSAoe1xyXG5cdGNoaWxkcmVuLFxyXG5cdG1hdGgsXHJcblx0YmxvY2ssXHJcblx0ZXJyb3JDb2xvcixcclxuXHRyZW5kZXJFcnJvcixcclxuXHRzZXR0aW5ncyxcclxuXHRhczogYXNDb21wb25lbnQsXHJcblx0Li4ucHJvcHNcclxufSkgPT4ge1xyXG5cdGNvbnN0IENvbXBvbmVudCA9IGFzQ29tcG9uZW50IHx8IChibG9jayA/IFwiZGl2XCIgOiBcInNwYW5cIik7XHJcblx0Y29uc3QgY29udGVudCA9IChjaGlsZHJlbiA/PyBtYXRoKSBhcyBzdHJpbmc7XHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTx7IGlubmVySHRtbDogc3RyaW5nIH0gfCB7IGVycm9yRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50IH0+KHtcclxuXHRcdGlubmVySHRtbDogXCJcIixcclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGlubmVySHRtbCA9IGthdGV4LnJlbmRlclRvU3RyaW5nKGNvbnRlbnQsIHtcclxuXHRcdFx0XHRkaXNwbGF5TW9kZTogISFibG9jayxcclxuXHRcdFx0XHRlcnJvckNvbG9yLFxyXG5cdFx0XHRcdHRocm93T25FcnJvcjogISFyZW5kZXJFcnJvcixcclxuXHRcdFx0XHQuLi5zZXR0aW5ncyxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzZXRTdGF0ZSh7IGlubmVySHRtbCB9KTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIGthdGV4LlBhcnNlRXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcclxuXHRcdFx0XHRpZiAocmVuZGVyRXJyb3IpIHtcclxuXHRcdFx0XHRcdHNldFN0YXRlKHsgZXJyb3JFbGVtZW50OiByZW5kZXJFcnJvcihlcnJvcikgfSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNldFN0YXRlKHsgaW5uZXJIdG1sOiBlcnJvci5tZXNzYWdlIH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIFtibG9jaywgY29udGVudCwgZXJyb3JDb2xvciwgcmVuZGVyRXJyb3IsIHNldHRpbmdzXSk7XHJcblxyXG5cdGlmIChcImVycm9yRWxlbWVudFwiIGluIHN0YXRlKSB7XHJcblx0XHRyZXR1cm4gc3RhdGUuZXJyb3JFbGVtZW50O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0YXRlLmlubmVySHRtbCB9fSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oVGVYKTtcclxuXHJcbnR5cGUgVGVYUHJvcHMgPSBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJkaXZcIj4gJlxyXG5cdFBhcnRpYWw8e1xyXG5cdFx0YXM6IEVsZW1lbnRUeXBlO1xyXG5cdFx0bWF0aDogc3RyaW5nIHwgbnVtYmVyO1xyXG5cdFx0YmxvY2s6IGJvb2xlYW47XHJcblx0XHRlcnJvckNvbG9yOiBzdHJpbmc7XHJcblx0XHRyZW5kZXJFcnJvcjogKGVycm9yOiBrYXRleC5QYXJzZUVycm9yIHwgVHlwZUVycm9yKSA9PiBSZWFjdEVsZW1lbnQ7XHJcblx0XHRzZXR0aW5nczoga2F0ZXguS2F0ZXhPcHRpb25zO1xyXG5cdH0+O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9jb21wb25lbnRzL0NhcmRcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9NZW51XCI7XHJcbmltcG9ydCBUZVggZnJvbSBcIi4vY29tcG9uZW50cy9UZVhcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5yZW5kZXIoXHJcblx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0PE1lbnUgLz5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Db21wczwvZGl2PlxyXG5cdFx0PENhcmQ+XHJcblx0XHRcdFRoaXMgcGFnZSBnaXZlcyBhIGJyaWVmIGludHJvZHVjdGlvbiB0byBteSBcImNvbXBzXCIgKDxpPmNvbXA8L2k+cmVoZW5zaXZlIHNlbmlvciBwcm9qZWN0IGF0XHJcblx0XHRcdENhcmxldG9uKS4gSWYgeW91J3JlIGludGVyZXN0ZWQsIHRoZXJlIGlzIG11Y2ggbW9yZSBkZXRhaWwgaW4gdGhle1wiIFwifVxyXG5cdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9hcnhpdi5vcmcvYWJzLzIwMDguMDEyMjJcIj5wYXBlcjwvYT4hXHJcblx0XHQ8L0NhcmQ+XHJcblx0XHQ8Q2FyZD5cclxuXHRcdFx0PGgzPkludHJvZHVjdGlvbjwvaDM+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdEZvciB0aGlzIHByb2plY3Qgd2UgZm9jdXNlZCBvbiB0aGV7XCIgXCJ9XHJcblx0XHRcdFx0PGEgaHJlZj1cIi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lycmVkdWNpYmxlX3BvbHlub21pYWxcIj5yZWR1Y2liaWxpdHk8L2E+IG9mIHBvbHlub21pYWxcclxuXHRcdFx0XHRpdGVyYXRlcy4gV2hhdCBkbyB3ZSBtZWFuIGJ5IGl0ZXJhdGVzPyBJZiA8VGVYPmYoeCk8L1RlWD4gaXMgYW4gYXJiaXRyYXJ5IHBvbHlub21pYWwsIGRlZmluZVxyXG5cdFx0XHRcdHRoZSA8VGVYPm48L1RlWD50aCBpdGVyYXRlIG9mIDxUZVg+ZjwvVGVYPiB0byBiZVxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxUZVggYmxvY2sgbWF0aD1cImZebih4KSA9IFxcdW5kZXJicmFjZXtmKGYoLi4uZih4KSkpfV97blxcIGZcXHRleHR7J3N9fS5cIiAvPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRXZSBzYXkgdGhhdCA8VGVYPmZebih4KTwvVGVYPiBpcyA8aT5uZXdseSByZWR1Y2libGU8L2k+IHdoZW4gZWFjaCBvZntcIiBcIn1cclxuXHRcdFx0XHQ8VGVYIG1hdGg9XCJmKHgpLCBmXjIoeCksIC4uLiwgZl57bi0xfSh4KVwiIC8+IGlzIGlycmVkdWNpYmxlLCBidXQgPFRlWD5mXm4oeCk8L1RlWD4gaXNcclxuXHRcdFx0XHRyZWR1Y2libGUuIE5vdGUgdGhhdCBvbmNlIHNvbWUgaXRlcmF0ZSA8VGVYPmZebjwvVGVYPiBpcyByZWR1Y2libGUsIGFsbCBmdXJ0aGVyIGl0ZXJhdGVzIGFyZVxyXG5cdFx0XHRcdGFsc28gcmVkdWNpYmxlLiBUaGlzIGlzIHdoeSB3ZSdyZSBpbnRlcmVzdGVkIGluIHRoZSA8aT5maXJzdDwvaT4gdGltZSBhbiBpdGVyYXRlIG9me1wiIFwifVxyXG5cdFx0XHRcdDxUZVg+ZjwvVGVYPiBpcyByZWR1Y2libGUuXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0V2UgY2FuIHN0dWR5IG5ld2x5IHJlZHVjaWJsZSBwb2x5bm9taWFsIGl0ZXJhdGVzIG92ZXIgYW55IGZpZWxkLCBidXQgb24gdGhpcyBwYWdlIHdlJ2xsIGtlZXBcclxuXHRcdFx0XHR0aGluZ3MgbGltaXRlZCB0byB0aGUgcmF0aW9uYWwgbnVtYmVycyA8VGVYIG1hdGg9XCJcXG1hdGhiYntRfVwiIC8+LlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdExldCdzIGxvb2sgYXQgYW4gZXhhbXBsZTogdGhlIHBvbHlub21pYWwgPFRlWD5mKHgpID0geF4yIC0geCAtIDE8L1RlWD4gaXMgYSBmYW1vdXMgb25lLCBiZWluZ1xyXG5cdFx0XHRcdHRoZSBtaW5pbWFsIHBvbHlub21pYWwgb2YgdGhlIGdvbGRlbiByYXRpbyA8VGVYPlxcdmFycGhpPC9UZVg+LiBJdCBpcyBpcnJlZHVjaWJsZSBvdmVye1wiIFwifVxyXG5cdFx0XHRcdDxUZVggbWF0aD1cIlxcbWF0aGJie1F9XCIgLz4gYmVjYXVzZSA8VGVYPlxcdmFycGhpPC9UZVg+IGlzIGlycmF0aW9uYWwuIE5vdyBsZXQncyBsb29rIGF0IGl0c1xyXG5cdFx0XHRcdGl0ZXJhdGVzOlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxUZVhcclxuXHRcdFx0XHRibG9ja1xyXG5cdFx0XHRcdG1hdGg9e2BcXFxcYmVnaW57YWxpZ25lZH1cclxuXHRcdFx0XHRmXjIoeCkgJj0geF40IC0gMnheMyAtIDJ4XjIgKyAzeCArIDEgJiZcXFxcdGV4dHtpcyBpcnJlZHVjaWJsZS59IFxcXFxcXFxcXHJcblx0XHRcdFx0Zl4zKHgpICY9ICh4XjQgLSAzeF4zICsgNHggLSAxKSAoeF40IC0geF4zIC0gM3heMiArIHggKyAxKSAmJlxcXFx0ZXh0e2lzIHJlZHVjaWJsZSF9XHJcblx0XHRcdFx0XFxcXGVuZHthbGlnbmVkfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdFNvIHRoaXMgcG9seW5vbWlhbCBoYXMgYSBuZXdseSByZWR1Y2libGUgdGhpcmQgaXRlcmF0ZS4gVGhpcyBtYWtlcyBpdCB2ZXJ5IHJhcmU7IHRoZXJlIGFyZVxyXG5cdFx0XHRcdG9ubHkgPGk+ZWlnaHQ8L2k+IG90aGVyIG1vbmljIHF1YWRyYXRpYyBpbnRlZ2VyIHBvbHlub21pYWxzIDxUZVg+eF4yICsgYXggKyBiPC9UZVg+IHdpdGh7XCIgXCJ9XHJcblx0XHRcdFx0PFRlWCBtYXRoPVwifGF8IFxcbGUgMTBeNSwgfGJ8IFxcbGUgMTBeOVwiIC8+IHRoYXQgaGF2ZSBuZXdseSByZWR1Y2libGUgdGhpcmQgaXRlcmF0ZXMuIFN1Y2hcclxuXHRcdFx0XHRyYXJpdHkgbmF0dXJhbGx5IGluc3BpcmVzIHVzIHRvIHdvbmRlcjogXCJXaGF0IG1ha2VzIHRoZXNlIHBvbHlub21pYWxzIHNwZWNpYWw/XCIgXCJIb3cgbWFueSBhcmVcclxuXHRcdFx0XHR0aGVyZSB0b3RhbD9cIiBcIkFyZSB0aGVyZSBpbmZpbml0ZWx5IG1hbnk/XCIgU28gb3VyIHByZWxpbWluYXJ5IHF1ZXN0aW9ucyB3ZXJlOlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxvbCB0eXBlPVwiMVwiPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdEhvdyBtYW55IHBvbHlub21pYWxzIG9mIHRoZSBhYm92ZSBmb3JtIGhhdmUgbmV3bHkgcmVkdWNpYmxlIHRoaXJkIGl0ZXJhdGVzIChvdmVye1wiIFwifVxyXG5cdFx0XHRcdFx0PFRlWCBtYXRoPVwiXFxtYXRoYmJ7UX1cIiAvPlxyXG5cdFx0XHRcdFx0KT9cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFdoeSBpcyB0aGUgbWluaW1hbCBwb2x5bm9taWFsIG9mIDxUZVg+XFx2YXJwaGk8L1RlWD4gb25lIG9mIHRoZW0/XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC9vbD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0V2Ugd2VyZSBhYmxlIHRvIGZpbmQgYW5zd2VycyB0byB0aGVzZSBxdWVzdGlvbnMsIGFzIHdlbGwgYXMgc29tZSBlcXVpdmVsYW50IHF1ZXN0aW9ucyBmb3JcclxuXHRcdFx0XHRvdGhlciBpdGVyYXRlcyBhbmQgb3RoZXIgZmllbGRzLlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxwPldlIGFsc28gdGFja2xlZCBzb21lIGFkZGl0aW9uYWwgcXVlc3Rpb25zLCB0aG91Z2ggdGhleSdyZSBub3QgY29tcGxldGVseSBzb2x2ZWQ6PC9wPlxyXG5cdFx0XHQ8b2wgdHlwZT1cIjFcIiBzdGFydD17M30+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0R2l2ZW4gYSBkZWdyZWUgPFRlWD5kPC9UZVg+LCBob3cgbWFueSByYXRpb25hbCBtb25pYyBkZWdyZWUtPFRlWD5kPC9UZVg+IHBvbHlub21pYWxzIGhhdmVcclxuXHRcdFx0XHRcdG5ld2x5IHJlZHVjaWJsZSA8aT5zZWNvbmQ8L2k+IGl0ZXJhdGVzP1xyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0QXJlIHRoZXJlIGFueSByYXRpb25hbCBwb2x5bm9taWFscyB3aXRoIGEgbmV3bHkgcmVkdWNpYmxlIDxpPmZvdXJ0aDwvaT4gaXRlcmF0ZT9cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdEdpdmVuIDxUZVggbWF0aD1cIm5cXGdlcSA0XCIgLz4sIGFyZSB0aGVyZSBhbnkgcmF0aW9uYWwgcG9seW5vbWlhbHMgd2l0aCBhIG5ld2x5IHJlZHVjaWJsZXtcIiBcIn1cclxuXHRcdFx0XHRcdDxpPlxyXG5cdFx0XHRcdFx0XHQ8VGVYPm48L1RlWD50aFxyXG5cdFx0XHRcdFx0PC9pPntcIiBcIn1cclxuXHRcdFx0XHRcdGl0ZXJhdGU/XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC9vbD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0V2UgbWFkZSBzb21lIHByb2dyZXNzIG9uIHF1ZXN0aW9uIDMgJm1kYXNoOyBpdCB0dXJucyBvdXQgdGhhdCBpZiA8VGVYPmQgPSAzPC9UZVg+LHtcIiBcIn1cclxuXHRcdFx0XHQ8VGVYPmQgPSA0PC9UZVg+LCBvciA8VGVYIG1hdGg9XCJkXFxlcXVpdiAyXFwgKFxcdGV4dHttb2R9XFwgNClcIiAvPiwgdGhlbiB0aGVyZSBhcmUgaW5maW5pdGVseSBtYW55XHJcblx0XHRcdFx0cmF0aW9uYWwgbW9uaWMgZGVncmVlLTxUZVg+ZDwvVGVYPiBwb2x5bm9taWFscyB3aXRoIGEgbmV3bHkgcmVkdWNpYmxlIHNlY29uZCBpdGVyYXRlISBBbmQgdGhpc1xyXG5cdFx0XHRcdHJlc3VsdCBzdGlsbCBob2xkcyBpZiB3ZSByZXF1aXJlIHRoZSBwb2x5bm9taWFscyB0byBoYXZlIGludGVnZXIgY29lZmZpY2llbnRzLiBGb3Igb3RoZXJ7XCIgXCJ9XHJcblx0XHRcdFx0PFRlWCBtYXRoPVwiZCA+IDFcIiAvPiwgdGhpcyByZW1haW5zIGFuIG9wZW4gcXVlc3Rpb24uXHJcblx0XHRcdDwvcD5cclxuXHRcdDwvQ2FyZD5cclxuXHRcdDxDYXJkPlxyXG5cdFx0XHQ8aDM+UXVhZHJhdGljIFBvbHlub21pYWxzIHdpdGggTmV3bHkgUmVkdWNpYmxlIFNlY29uZCBJdGVyYXRlPC9oMz5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0RWFybGllciB3ZSBhc2tlZCB3aGV0aGVyIHRoZXJlIHdlcmUgaW5maW5pdGVseSBtYW55IG1vbmljIHF1YWRyYXRpYyBpbnRlZ2VyIHBvbHlub21pYWxzIHdpdGggYVxyXG5cdFx0XHRcdG5ld2x5IHJlZHVjaWJsZSA8aT50aGlyZDwvaT4gaXRlcmF0ZSAmbWRhc2g7IEEgc29tZXdoYXQgZWFzaWVyIHF1ZXN0aW9uIGlzIHdoZXRoZXIgdGhlcmUgYXJlXHJcblx0XHRcdFx0aW5maW5pdGVseSBtYW55IHdpdGggYSBuZXdseSByZWR1Y2libGUgPGk+c2Vjb25kPC9pPiBpdGVyYXRlLiBJbiB0aGlzIHNlY3Rpb24sIHdlJ2xsIHByb3ZlXHJcblx0XHRcdFx0dGhhdCB0aGVyZSBhcmUhXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0Rmlyc3QsIGxldCA8VGVYPmYoeCkgPSAoeC1cXGdhbW1hKV4yICsgbSArIFxcZ2FtbWE8L1RlWD4sIGZvciByYXRpb25hbCA8VGVYPm08L1RlWD4gYW5ke1wiIFwifVxyXG5cdFx0XHRcdDxUZVg+XFxnYW1tYTwvVGVYPi4gVGhpcyBmb3JtIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGZvcm0gPFRlWD5mKHgpPXheMiArIGF4ICsgYjwvVGVYPiwgYnV0IG1ha2VzXHJcblx0XHRcdFx0aXRlcmF0ZXMgbmljZXIgdG8gd29yayB3aXRoLiBUaGVuIDxUZVg+ZjwvVGVYPiBmYWN0b3JzIHVuaXF1ZWx5IG92ZXIgdGhlIGNvbXBsZXggbnVtYmVycyBhc3tcIiBcIn1cclxuXHRcdFx0XHQ8VGVYIG1hdGg9XCJmKHgpID0gKCh4LVxcZ2FtbWEpK1xcc3FydHstbS1cXGdhbW1hfSkoKHgtXFxnYW1tYSktXFxzcXJ0ey1tLVxcZ2FtbWF9KVwiIC8+LCBzbyBpdCdzXHJcblx0XHRcdFx0cmVkdWNpYmxlIG92ZXIgdGhlIHJhdGlvbmFsIG51bWJlcnMgaWYgYW5kIG9ubHkgaWYgPFRlWD4tbS1cXGdhbW1hPC9UZVg+IGlzIHRoZSBzcXVhcmUgb2YgYVxyXG5cdFx0XHRcdHJhdGlvbmFsIG51bWJlci4gU28gaWYgd2Ugd2FudCBhIG5ld2x5IHJlZHVjaWJsZSA8aT5zZWNvbmQ8L2k+IGl0ZXJhdGUsIHdlIG5lZWR7XCIgXCJ9XHJcblx0XHRcdFx0PFRlWD4tbS1cXGdhbW1hPC9UZVg+IHRvIG5vdCBiZSBhIHNxdWFyZS5cclxuXHRcdFx0PC9wPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHROb3cgbGV0J3Mgc3VwcG9zZSA8VGVYPmZeMih4KTwvVGVYPiBpcyBuZXdseSByZWR1Y2libGUuIFdoYXQgZG9lcyB0aGlzIHRlbGwgdXMgYWJvdXR7XCIgXCJ9XHJcblx0XHRcdFx0PFRlWD5tPC9UZVg+IGFuZCA8VGVYPlxcZ2FtbWE8L1RlWD4/IElmIDxUZVg+Zl4yKHgpPC9UZVg+IGlzIHJlZHVjaWJsZSwgd2UgY2FuIHdyaXRlIGl0IGFzXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PFRlWFxyXG5cdFx0XHRcdGJsb2NrXHJcblx0XHRcdFx0bWF0aD1cImZeMih4KSA9IFxcbGVmdCgoeC1cXGdhbW1hKV4yICsgYl8xKHgtXFxnYW1tYSkgKyBhXzFcXHJpZ2h0KVxcbGVmdCgoeC1cXGdhbW1hKV4yIC0gYl8yKHgtXFxnYW1tYSkgKyBhXzJcXHJpZ2h0KVwiXHJcblx0XHRcdC8+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdEZvciBzb21lIHJhdGlvbmFsIDxUZVg+YV8xLGFfMixiXzEsYl8yPC9UZVg+LiBOb3RlIHRoYXQgaGVyZSB3ZSBhc3N1bWUgdGhhdCB0aGUgZGVncmVlLTRcclxuXHRcdFx0XHRwb2x5bm9taWFsIGZhY3RvcnMgaW50byB0d28gcXVhZHJhdGljIHBvbHlub21pYWxzLCByYXRoZXIgdGhhbiBhIGxpbmVhciBhbmQgYSBjdWJpYy4gSXQgdHVybnNcclxuXHRcdFx0XHRvdXQgdGhpcyBpcyBhbHdheXMgdGhlIGNhc2Ugd2hlbiA8VGVYPmY8L1RlWD4gaXMgaXJyZWR1Y2libGUgLSB0aGlzIGlzIExlbW1hIDIuMyBpbiB0aGUgcGFwZXIuXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0T24gdGhlIG90aGVyIGhhbmQsIHdlIGNhbiBhbHNvIHdyaXRlIDxUZVg+Zl4yKHgpPC9UZVg+IGFzXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PFRlWFxyXG5cdFx0XHRcdGJsb2NrXHJcblx0XHRcdFx0bWF0aD17YFxcXFxiZWdpbnthbGlnbip9XHJcblx0XHRcdFx0Zl4yKHgpICY9IGYoZih4KSkgXFxcXFxcXFxcclxuXHRcdFx0XHQmPSBcXFxcbGVmdCggKHgtXFxcXGdhbW1hKV4yICsgbSArIFxcXFxnYW1tYSAtIFxcXFxnYW1tYSBcXFxccmlnaHQpXjIgKyBtICsgXFxcXGdhbW1hIFxcXFxcXFxcXHJcblx0XHRcdFx0Jj0gKHgtXFxcXGdhbW1hKV40ICsgMm0oeC1cXFxcZ2FtbWEpICsgbV4yICsgbSArIFxcXFxnYW1tYS5cclxuXHRcdFx0XHRcXFxcZW5ke2FsaWduKn1gfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRUaGVuIHdlIGNhbiBlcXVhdGUgdGhlIGNvZWZmaWNpZW50cyBvZiBwb3dlcnMgb2YgPFRlWD4oeC1cXGdhbW1hKTwvVGVYPiBpbiB0aGVzZSB0d29cclxuXHRcdFx0XHRleHByZXNzaW9ucyB0byBnZXQgdGhlIGZvbGxvd2luZyBzeXN0ZW0gb2YgZXF1YXRpb25zOlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxUZVhcclxuXHRcdFx0XHRibG9ja1xyXG5cdFx0XHRcdG1hdGg9e2BcXFxcYmVnaW57YWxpZ24qfVxyXG5cdFx0XHRcdG1eMittK1xcXFxnYW1tYSAmPSBhXzFhXzIgXFxcXFxcXFxcclxuXHRcdFx0XHQwICY9IGFfMWJfMiArIGFfMmJfMSBcXFxcXFxcXFxyXG5cdFx0XHRcdDJtICY9IGFfMSArIGFfMiArIGJfMWJfMiBcXFxcXFxcXFxyXG5cdFx0XHRcdDAgJj0gYl8xICsgYl8yXHJcblx0XHRcdFx0XFxcXGVuZHthbGlnbip9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0VGhlIGxhc3QgZXF1YXRpb24gc2hvd3MgdGhhdCA8VGVYPmJfMiA9IC1iXzE8L1RlWD4uIFB1dHRpbmcgdGhpcyBpbnRvIHRoZSBvdGhlciBlcXVhdGlvbnNcclxuXHRcdFx0XHRnaXZlc1xyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxUZVhcclxuXHRcdFx0XHRibG9ja1xyXG5cdFx0XHRcdG1hdGg9e2BcXFxcYmVnaW57YWxpZ24qfVxyXG5cdFx0XHRcdG1eMittK1xcXFxnYW1tYSAmPSBhXzFhXzIgXFxcXFxcXFxcclxuXHRcdFx0XHQwICY9IC1hXzFiXzEgKyBhXzJiXzEgXFxcXFxcXFxcclxuXHRcdFx0XHQybSAmPSBhXzEgKyBhXzIgLSBiXzFeMlxyXG5cdFx0XHRcdFxcXFxlbmR7YWxpZ24qfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdE5leHQgd2Ugd291bGQgbGlrZSB0byB1c2UgdGhlIHNlY29uZCBlcXVhdGlvbiB0byBzYXkgdGhhdCA8VGVYPmFfMSA9IGFfMjwvVGVYPiwgYnV0e1wiIFwifVxyXG5cdFx0XHRcdDxUZVg+Yl8xPC9UZVg+IG1heSBiZSB6ZXJvLiBXZWxsLCBpZiBpdCBpcyB6ZXJvLCB0aGVuIHNvbHZpbmcgdGhlIG90aGVyIGVxdWF0aW9ucyBmb3J7XCIgXCJ9XHJcblx0XHRcdFx0PFRlWD5tPC9UZVg+IGFuZCA8VGVYPlxcZ2FtbWE8L1RlWD4gYW5kIHB1dHRpbmcgdGhvc2UgdmFsdWVzIGludG8gb3VyIGV4cHJlc3Npb24gZm9ye1wiIFwifVxyXG5cdFx0XHRcdDxUZVg+Zih4KTwvVGVYPiBzaG93cyB0aGF0XHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PFRlWCBibG9jayBtYXRoPVwiZih4K1xcZ2FtbWEpID0gXFxmcmFjezF9ezR9KDJ4IC0gYV8xICsgYV8yKSgyeCArIGFfMSAtIGFfMikuXCIgLz5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0SG93ZXZlciwgd2Ugd2VyZSBhc3N1bWluZyB0aGF0IDxUZVg+Zl4yKHgpPC9UZVg+IGlzIDxpPm5ld2x5PC9pPiByZWR1Y2libGUsIHNvIHRoaXMgaXMgYVxyXG5cdFx0XHRcdGNvbnRyYWRpY3Rpb24uIFRoZXJlZm9yZSwgd2Uga25vdyB0aGF0IDxUZVg+Yl8xXFxuZXEgMDwvVGVYPiwgc28gaW4gZmFjdCA8VGVYPmFfMSA9IGFfMjwvVGVYPi5cclxuXHRcdFx0XHROb3cgc29sdmluZyB0aGUgcmVtYWluaW5nIGVxdWF0aW9ucyBnaXZlc1xyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxUZVhcclxuXHRcdFx0XHRibG9ja1xyXG5cdFx0XHRcdG1hdGg9e2BcXFxcYmVnaW57YWxpZ24qfVxyXG5cdFx0XHRcdFx0bSAmPSBcXFxcZnJhY3sxfXsyfSBcXFxcbGVmdCgyIGFfMS1iXzFeMlxcXFxyaWdodCkgXFxcXFxcXFxcclxuXHRcdFx0XHRcdFxcXFxnYW1tYSAmPSBcXFxcZnJhY3sxfXs0fSBcXFxcbGVmdCg0IGFfMSBiXzFeMi00IGFfMS1iXzFeNCsyIGJfMV4yXFxcXHJpZ2h0KVxyXG5cdFx0XHRcdFx0XFxcXGVuZHthbGlnbip9XFxcXHRhZ3skXFxcXGFzdCR9YH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0VG8gc3VtbWFyaXplLCB3ZSBub3cga25vdyB0aGF0IGlmIDxUZVg+Zih4KTwvVGVYPiBoYXMgYSBuZXdseSByZWR1Y2libGUgc2Vjb25kIGl0ZXJhdGUsIHRoZW5cclxuXHRcdFx0XHR0aGVyZSBleGlzdCByYXRpb25hbCBudW1iZXJzIDxUZVg+YV8xPC9UZVg+IGFuZCA8VGVYPmJfMTwvVGVYPiBzdWNoIHRoYXQgZXF1YXRpb25ze1wiIFwifVxyXG5cdFx0XHRcdDxUZVg+KFxcYXN0KTwvVGVYPiBhcmUgdHJ1ZS5cclxuXHRcdFx0PC9wPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRXaGF0IGFib3V0IHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24/IFN1cHBvc2Ugd2UgZG8gaGF2ZSByYXRpb25hbCBudW1iZXJzIDxUZVg+YV8xPC9UZVg+IGFuZHtcIiBcIn1cclxuXHRcdFx0XHQ8VGVYPmJfMTwvVGVYPiwgYW5kIHNldCA8VGVYPm08L1RlWD4gYW5kIDxUZVg+XFxnYW1tYTwvVGVYPiBhcyBpbiBlcXVhdGlvbnMgPFRlWD4oXFxhc3QpPC9UZVg+LlxyXG5cdFx0XHRcdFRoZW4gPFRlWD5mXjI8L1RlWD4gaXMgcmVkdWNpYmxlLCBiZWNhdXNlXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PFRlWCBibG9jayBtYXRoPVwiZl4yKHgrXFxnYW1tYSkgPSBcXGxlZnQoeF4yK2JfMSB4K2FfMVxccmlnaHQpIFxcbGVmdCh4XjItYl8xIHgrYV8xXFxyaWdodCkuXCIgLz5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0Rm9yIDxUZVg+Zl4yPC9UZVg+IHRvIGJlIDxpPm5ld2x5PC9pPiByZWR1Y2libGUsIHdlIGFsc28gbmVlZCA8VGVYPmY8L1RlWD4gdG8gYmUgaXJyZWR1Y2libGUuXHJcblx0XHRcdFx0V2Ugc2FpZCB0aGF0IHRoaXMgaXMgdGhlIGNhc2Ugd2hlbmV2ZXIgPFRlWD4tbS1cXGdhbW1hPC9UZVg+IGlzIG5vdCB0aGUgc3F1YXJlIG9mIGEgcmF0aW9uYWxcclxuXHRcdFx0XHRudW1iZXIuIEhlcmUgd2UgaGF2ZVxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxUZVggYmxvY2sgbWF0aD1cIi1tLVxcZ2FtbWEgPSAtIGFfMSBiXzFeMiArIFxcZnJhY3sxfXs0fSBiXzFeNFwiIC8+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdFNvIHdlIGp1c3QgbmVlZCB0aGlzIG51bWJlciB0byBub3QgYmUgYSByYXRpb25hbCBzcXVhcmUuIEluIG90aGVyIHdvcmRzLCB0byBwcm92ZSB0aGF0IHRoZXJlXHJcblx0XHRcdFx0YXJlIGluZmluaXRlbHkgbWFueSA8VGVYPmYoeCk8L1RlWD4gd2l0aCBuZXdseSByZWR1Y2libGUgc2Vjb25kIGl0ZXJhdGUsIHdlIGp1c3QgbmVlZFxyXG5cdFx0XHRcdGluZmluaXRlbHkgbWFueSA8VGVYPmFfMSwgYl8xPC9UZVg+IHBhaXJzIHN1Y2ggdGhhdCB0aGlzIG51bWJlciBpcyBub3QgYSBzcXVhcmUgKGFuZCBzdWNoIHRoYXR7XCIgXCJ9XHJcblx0XHRcdFx0PFRlWD5tPC9UZVg+IGFuZCA8VGVYPlxcZ2FtbWE8L1RlWD4gYXJlIGludGVnZXJzKS5cclxuXHRcdFx0PC9wPlxyXG5cdFx0XHQ8cD5UbyBmaW5kIHRoZXNlLCB3ZSByZWx5IG9uIHRoZSBmYWN0cyB0aGF0PC9wPlxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0Rm9yIGFueSBpbnRlZ2VyIDxUZVg+bjwvVGVYPiwgPFRlWD5uXjI8L1RlWD4gaXMgZXF1aXZhbGVudCB0byAwIG9yIDEgbW9kIDMuXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRGb3IgYW55IGludGVnZXIgPFRlWD5uPC9UZVg+LCA8VGVYPm48L1RlWD4gaXMgYSBzcXVhcmUgaWYgYW5kIG9ubHkgaWYgPFRlWD40bjwvVGVYPiBpcyBhXHJcblx0XHRcdFx0XHRzcXVhcmUuXHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRGb3IgYW55IGludGVnZXIgPFRlWD5uPC9UZVg+LCBpZiA8VGVYPm48L1RlWD4gaXMgbm90IHRoZSBzcXVhcmUgb2YgYW4gaW50ZWdlciwgdGhlbiBpdCBpc1xyXG5cdFx0XHRcdFx0YWxzbyBub3QgdGhlIHNxdWFyZSBvZiBhIHJhdGlvbmFsIG51bWJlci5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8cD5cclxuXHRcdFx0XHRMZXQgPFRlWD5hXzE8L1RlWD4gYW5kIDxUZVg+Yl8xPC9UZVg+IGJlIGludGVnZXJzIGVxdWl2YWxlbnQgdG8gMiBtb2QgMy4gVGhlbiB3ZSBoYXZlXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PFRlWFxyXG5cdFx0XHRcdGJsb2NrXHJcblx0XHRcdFx0bWF0aD17YFxcXFxiZWdpbnthbGlnbip9XHJcblx0XHRcdFx0NCgtbS1cXFxcZ2FtbWEpICY9IC0gNCBhXzEgYl8xXjIgKyBiXzFeNCBcXFxcXFxcXFxyXG5cdFx0XHRcdCZcXFxcZXF1aXYgLSAxICogMiAqIDEgKyAxIFxcXFwgKFxcXFx0ZXh0e21vZH1cXFxcIDMpIFxcXFxcXFxcXHJcblx0XHRcdFx0JlxcXFxlcXVpdiAyIFxcXFwgKFxcXFx0ZXh0e21vZH1cXFxcIDMpIFxyXG5cdFx0XHRcdFxcXFxlbmR7YWxpZ24qfWB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdFRoZXJlZm9yZSA8VGVYPi1tLVxcZ2FtbWE8L1RlWD4gaXMgbm90IGEgc3F1YXJlLiBTaW5jZSB0aGVyZSBhcmUgaW5maW5pdGVseSBtYW55IHBhaXJzIG9mXHJcblx0XHRcdFx0aW50ZWdlcnMgPFRlWD4oYV8xLGJfMSk8L1RlWD4gZXF1aXZhbGVudCB0byAyIG1vZCAzLCB3ZSBub3cga25vdyB0aGVyZSBhcmUgaW5maW5pdGVseSBtYW55XHJcblx0XHRcdFx0cmF0aW9uYWwgcG9seW5vbWlhbHMgPFRlWD5mKHgpPC9UZVg+IHdpdGggYSBuZXdseSByZWR1Y2libGUgc2Vjb25kIGl0ZXJhdGUhIFRvIGNvbXBsZXRlIHRoZVxyXG5cdFx0XHRcdHByb29mLCB3ZSBqdXN0IG5lZWQgdG8gZmluZCB0aGF0IGluZmluaXRlbHkgbWFueSBvZiB0aGVzZSBwYWlycyBhbHNvIHJlc3VsdCBpbiA8VGVYPmYoeCk8L1RlWD57XCIgXCJ9XHJcblx0XHRcdFx0d2l0aCBpbnRlZ2VyIGNvZWZmaWNpZW50cy4gTG9va2luZyBhdCBlcXVhdGlvbnMgPFRlWD4oXFxhc3QpPC9UZVg+LCB3ZSBzZWUgdGhhdCB0aGlzIGlzXHJcblx0XHRcdFx0c2F0aXNmaWVkIHdoZW5ldmVyIDxUZVg+Yl8xPC9UZVg+IGlzIGRpdmlzaWJsZSBieSAyLiBTaW5jZSB0aGVyZSBhcmUgaW5maW5pdGVseSBtYW55e1wiIFwifVxyXG5cdFx0XHRcdDxUZVg+Yl8xPC9UZVg+IHRoYXQgYXJlIGJvdGggZGl2aXNpYmxlIGJ5IDIgYW5kIGVxdWl2YWxlbnQgdG8gMiBtb2QgMyAoYWxsIGludGVnZXJzIG9mIHRoZVxyXG5cdFx0XHRcdGZvcm0gPFRlWD42biArIDI8L1RlWD4pLCB3ZSBoYXZlIGNvbXBsZXRlZCBvdXIgcHJvb2YhXHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PHA+SGVyZSdzIHNvbWUgTWF0aGVtYXRpY2EgY29kZSBmb3IgZXhwZXJpbWVudGFsIHZhbGlkYXRpb246PC9wPlxyXG5cdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJjb2RlYmxvY2tcIlxyXG5cdFx0XHRcdHJlYWRPbmx5XHJcblx0XHRcdFx0cm93cz17MTN9XHJcblx0XHRcdFx0dmFsdWU9e2BEb1tcclxuIERvW1xyXG4gIGExID0gMyppICsgMjtcclxuICBiMSA9IDIqaiozICsgMjtcclxuICBtID0gKDIgYTEgLSBiMV4yKS8yO1xyXG4gIGdhbW1hID0gKDQgYTEqYjFeMiAtIDQgYTEgLSBiMV40ICsgMiBiMV4yKS80O1xyXG4gIGZbeF9dIDo9ICh4IC0gZ2FtbWEpXjIgKyBtICsgZ2FtbWE7XHJcbiAgSWZbTm90W0ludGVnZXJRW21dICYmIEludGVnZXJRW2dhbW1hXSAmJiBcclxuICAgICBJcnJlZHVjaWJsZVBvbHlub21pYWxRW2ZbeF1dICYmIFxyXG4gICAgIE5vdFtJcnJlZHVjaWJsZVBvbHlub21pYWxRW2ZbZlt4XV1dXV0sXHJcbiAgIFByaW50W1wiQ291bnRlcmV4YW1wbGUhXCJdXTtcclxuICAsIHtqLCAwLCBpfV1cclxuICwge2ksIDAsIDEwMH1dYH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvQ2FyZD5cclxuXHQ8L1JlYWN0LkZyYWdtZW50PixcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIikgYXMgSFRNTEVsZW1lbnQsXHJcbik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
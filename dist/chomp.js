"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["chomp"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/chomp.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/chomp.scss ***!
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
}

table.chocolate {
  background-color: black;
  border-collapse: separate;
  border: 2px solid black;
  margin: auto;
  width: auto;
  border-spacing: 0;
}
table.chocolate tr {
  display: flex;
}
table.chocolate td {
  width: 5em;
  height: 5em;
  border: 0;
  margin: 0;
  padding: 0;
}

.chomp_square {
  background-position: 0px 0px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.chomp_square:hover {
  cursor: pointer;
}

div.table_container {
  width: 100%;
  overflow-x: auto;
}

div.loader {
  border-radius: 50%;
  width: 3em;
  height: 3em;
  border-top: 0.3em solid cornflowerblue;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`, "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/chomp.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"sass:math\";\r\n\r\n$page-margin: 15px;\r\n$border-radius: 10px;\r\n\r\nhtml,\r\nbody {\r\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\",\r\n\t\tsans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n\tmargin: 0;\r\n}\r\n\r\nbody {\r\n\tpadding: 1%;\r\n\tbackground-color: #d3eded;\r\n}\r\n\r\np {\r\n\tmargin-block-start: 1em;\r\n\tmargin-block-end: 1em;\r\n\tmargin-inline-start: 0px;\r\n\tmargin-inline-end: 0px;\r\n}\r\n\r\ndiv.p {\r\n\tmargin-block-start: 1em;\r\n\tmargin-block-end: 1em;\r\n\tmargin-inline-start: 0px;\r\n\tmargin-inline-end: 0px;\r\n}\r\n\r\ndiv.title {\r\n\tfont-size: 32pt;\r\n\ttext-align: center;\r\n\tfont-variant: small-caps;\r\n\tfont-weight: 250;\r\n\tmargin: $page-margin;\r\n\tmargin-top: 0;\r\n\tpadding-top: $page-margin;\r\n\t// Add 1px of padding under the title. Without this, for some reason, Chrome on mobile would squish the topmost Card under the title to the right\r\n\t// (only Chrome, and only on actual mobile device. Desktop Chrome pretending to be a mobile device was fine) \r\n\tpadding-bottom: 1px;\r\n}\r\n\r\n.card {\r\n\tbackground-color: white;\r\n\tmin-height: 20px;\r\n\tborder-radius: $border-radius;\r\n\tmargin: $page-margin;\r\n\tmargin-bottom: 10px;\r\n\toverflow: hidden;\r\n\tfloat: none;\r\n}\r\n\r\n.inner_card {\r\n\twidth: calc(100% - 30px);\r\n\tpadding: 10px 15px;\r\n\toverflow-x: auto;\r\n}\r\n\r\n// KaTeX override to make the font slightly smaller\r\n.katex {\r\n\ttext-rendering: auto;\r\n\tfont: normal 1.1em KaTeX_Main, Times New Roman, serif;\r\n\tline-height: 1.2;\r\n\ttext-indent: 0;\r\n}\r\n\r\n// If the math goes off the screen allow scrolling\r\n.katex-display {\r\n\toverflow-x: auto;\r\n\toverflow-y: hidden;\r\n\t// Need to add some padding so the scrollbar doesn't cover the text\r\n\tpadding-top: 0.5em;\r\n\tpadding-bottom: 0.5em;\r\n\tmargin-top: 0.5em;\r\n\tmargin-bottom: 0.5em;\r\n}\r\n\r\npicture > img {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.centered {\r\n\tdisplay: block;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n.fit_content {\r\n\twidth: fit-content;\r\n}\r\n\r\n.flex {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n/**\r\n * Menu Styling\r\n */\r\n$menu-collapsed-size: 50px;\r\n$menu-inner-side-margin: $menu-collapsed-size * 0.2;\r\n$menu-inner-top-margin: $menu-collapsed-size * 0.1;\r\n$menu-inner-button-height: $menu-collapsed-size - 2 * $menu-inner-top-margin;\r\n\r\n@mixin menu() {\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground-color: #fff;\r\n\tmargin: $page-margin;\r\n\tborder-radius: $border-radius;\r\n\tfloat: left;\r\n\tz-index: 100;\r\n}\r\n\r\n.menu_collapsed {\r\n\t@include menu();\r\n\twidth: $menu-collapsed-size;\r\n\theight: $menu-collapsed-size;\r\n\tcursor: pointer;\r\n}\r\n\r\n.menu_expanded {\r\n\t@include menu();\r\n\twidth: auto;\r\n\theight: auto;\r\n\tmargin-bottom: math.div($page-margin, 2);\r\n\toverflow-x: hidden;\r\n\r\n\t@media only screen and (max-aspect-ratio: 2/3) {\r\n\t\twidth: -webkit-fill-available;\r\n\t\twidth: -moz-available;\r\n\t}\r\n}\r\n\r\n.menu_button {\r\n\t@include menu();\r\n\twidth: $menu-collapsed-size;\r\n\theight: $menu-collapsed-size;\r\n\tmargin: 0;\r\n\tcursor: pointer;\r\n\tfloat: left;\r\n}\r\n\r\n.menu_button_inner {\r\n\tmargin: $menu-inner-side-margin;\r\n\tmargin-top: $menu-inner-top-margin;\r\n\tmargin-bottom: $menu-inner-top-margin;\r\n\twidth: $menu-collapsed-size - 2 * $menu-inner-side-margin;\r\n\tborder-top-color: #fff;\r\n\tborder-top-style: solid;\r\n\tborder-top-width: math.div($menu-inner-button-height, 7);\r\n\theight: math.div($menu-inner-button-height * 6, 7);\r\n}\r\n\r\n.menu_button_line {\r\n\twidth: 100%;\r\n\theight: math.div($menu-inner-button-height, 7);\r\n\tmargin-bottom: math.div($menu-inner-button-height, 7);\r\n\tbackground-color: black;\r\n}\r\n\r\na.menu_item {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n\r\n\t&:hover {\r\n\t\tfont-weight: bold;\r\n\t}\r\n}\r\n\r\nul.menu_list {\r\n\tlist-style-type: none;\r\n\tpadding: 0;\r\n\tmargin-bottom: $menu-inner-side-margin;\r\n\ttext-align: center;\r\n\twidth: 8em;\r\n\t@media only screen and (min-aspect-ratio: 2/3) {\r\n\t\tmargin-top: $menu-collapsed-size + math.div($menu-inner-button-height, 7);\r\n\t}\r\n\r\n\t& > li > a > p {\r\n\t\tmargin: 16px 0;\r\n\t}\r\n}\r\n\r\nul.math_list > li {\r\n\tpadding-bottom: 0.5em;\r\n\tlist-style-type: circle;\r\n}\r\n\r\n.inline_code {\r\n\tfont-family: \"Courier New\", monospace;\r\n\tpadding: 1px 1px;\r\n}\r\n\r\ntextarea.codeblock {\r\n\tfont-family: \"Courier New\", monospace;\r\n\twidth: 100%;\r\n\tresize: none;\r\n}\r\n\r\nspan {\r\n\t&.red {\r\n\t\tcolor: red;\r\n\t}\r\n\t&.blue {\r\n\t\tcolor: blue;\r\n\t}\r\n}\r\n\r\n.hidden {\r\n\tvisibility: hidden;\r\n}\r\n\r\n.command_table {\r\n\tborder-collapse: collapse;\r\n\twidth: 100%;\r\n\r\n\tth,\r\n\ttd {\r\n\t\tborder-style: solid;\r\n\t\tborder-width: thin;\r\n\t}\r\n\r\n\tth {\r\n\t\tfont-weight: normal;\r\n\t\tpadding: 10px;\r\n\t\tbackground-color: lightgray;\r\n\t}\r\n\r\n\ttd {\r\n\t\tpadding: 0.5em;\r\n\t}\r\n}\r\n\r\n.subsection {\r\n\tfont-size: 1em;\r\n}\r\n\r\n.nodisp {\r\n\tdisplay: none;\r\n}\r\n\r\n.upsidedown {\r\n\t-webkit-transform: scaleY(-1);\r\n\ttransform: scaleY(-1);\r\n}\r\n\r\n.float_left {\r\n\tfloat: left;\r\n}\r\n\r\ncanvas.full_canvas {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.nopadding {\r\n\tpadding: 0;\r\n}\r\n\r\n.list_no_style {\r\n\tlist-style-type: none;\r\n}\r\n","@import \"./index.scss\";\r\n\r\ntable.chocolate {\r\n\tbackground-color: black;\r\n\tborder-collapse: separate;\r\n\tborder: 2px solid black;\r\n\tmargin: auto;\r\n\twidth: auto;\r\n\tborder-spacing: 0;\r\n\r\n\ttr {\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\ttd {\r\n\t\twidth: 5em; // 75px;\r\n\t\theight: 5em; // 75px;\r\n\t\tborder: 0;\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t}\r\n}\r\n\r\n.chomp_square {\r\n\tbackground: {\r\n\t\tposition: 0px 0px;\r\n\t\tsize: 100% 100%;\r\n\t\trepeat: no-repeat;\r\n\t}\r\n\t&:hover {\r\n\t\tcursor: pointer;\r\n\t}\r\n}\r\n\r\ndiv.table_container {\r\n\twidth: 100%;\r\n\toverflow-x: auto;\r\n}\r\n\r\ndiv.loader {\r\n\tborder-radius: 50%;\r\n\twidth: 3em;\r\n\theight: 3em;\r\n\tborder-top: 0.3em solid cornflowerblue;\r\n\tanimation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n\t0% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/images/chocobar.jpg":
/*!*********************************!*\
  !*** ./src/images/chocobar.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/chocobar.jpg");

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

/***/ "./src/images/sans1.png":
/*!******************************!*\
  !*** ./src/images/sans1.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/sans1.png");

/***/ }),

/***/ "./src/chomp.scss":
/*!************************!*\
  !*** ./src/chomp.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_chomp_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./chomp.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/chomp.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_chomp_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_chomp_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_chomp_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_chomp_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/chomp.tsx":
/*!***********************!*\
  !*** ./src/chomp.tsx ***!
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
const Chomp_1 = __importDefault(__webpack_require__(/*! ./components/Chomp */ "./src/components/Chomp.tsx"));
__webpack_require__(/*! ./chomp.scss */ "./src/chomp.scss");
(0, react_dom_1.render)(React.createElement(Chomp_1.default, null), document.querySelector("#root"));


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

/***/ "./src/components/Chomp.tsx":
/*!**********************************!*\
  !*** ./src/components/Chomp.tsx ***!
  \**********************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Card_1 = __importDefault(__webpack_require__(/*! ./Card */ "./src/components/Card.tsx"));
const TeX_1 = __importDefault(__webpack_require__(/*! ./TeX */ "./src/components/TeX.tsx"));
const Menu_1 = __importDefault(__webpack_require__(/*! ./Menu */ "./src/components/Menu.tsx"));
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const chocobar_jpg_1 = __importDefault(__webpack_require__(/*! ../images/chocobar.jpg */ "./src/images/chocobar.jpg"));
const sans1_png_1 = __importDefault(__webpack_require__(/*! ../images/sans1.png */ "./src/images/sans1.png"));
const MAX_COLS = 10;
const MAX_ROWS = 12;
const NULL_MSG = "-";
let canMove = true;
const messageSpace = React.createRef();
const loadingDiv = React.createRef();
const Chomp = () => (React.createElement(React.Fragment, null,
    React.createElement(Menu_1.default, null),
    React.createElement("div", { className: "title" }, "Chomp"),
    React.createElement(Card_1.default, null,
        "Chomp is a two-player game about eating chocolate! The rules are simple: To play, two people (or in this case, a person and a computer) take turns removing any square, plus all squares above and to the right. Whichever player takes the bottom left square loses, and the other player wins.",
        React.createElement("p", null,
            "Since this game is ",
            React.createElement("a", { href: "//mathworld.wolfram.com/FiniteGame.html" }, "finite"),
            ",",
            " ",
            React.createElement("a", { href: "//www.whatgamesare.com/determinism.html" }, "deterministic"),
            ", and",
            " ",
            React.createElement("a", { href: "//mathworld.wolfram.com/ImpartialGame.html" }, "impartial"),
            ", with no draws, we",
            " ",
            React.createElement("a", { href: "//en.wikipedia.org/wiki/Zermelo%27s_theorem_(game_theory)" }, "know"),
            " that one of the players always has a winning strategy (can you prove which player it is?). However, this strategy is not known in general (for arbitrarily large boards), and only recently have results been found for ",
            React.createElement(TeX_1.default, null, "3\\times n"),
            " boards.")),
    React.createElement(ChompCard, null),
    React.createElement(Card_1.default, null,
        "For more information on Chomp, see:",
        React.createElement("ul", { className: "math_list" },
            React.createElement("li", null,
                React.createElement("a", { href: "//en.wikipedia.org/wiki/Chomp#Generalisations_of_Chomp" }, "Generalizations")),
            React.createElement("li", null,
                React.createElement("a", { href: "//xorshammer.com/2008/09/29/playing-games-in-the-transfinite-an-introduction-to-ordinal-chomp/" }, "Ordinal chomp")),
            React.createElement("li", null,
                React.createElement("a", { href: "//www.win.tue.nl/~aeb/games/chomp.html" }, "Interesting variants, open questions")),
            React.createElement("li", null,
                React.createElement("a", { href: "//www.kurims.kyoto-u.ac.jp/EMIS/journals/INTEGERS/papers/fg7/fg7.pdf" }, "More variants, work on 3 \u00D7 n boards")),
            React.createElement("li", null,
                React.createElement("a", { href: "//citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.718.8493&rep=rep1&type=pdf" }, "General poset games and 3 \u00D7 n chomp"))))));
exports["default"] = Chomp;
const ChompCard = function () {
    const [numRows, setNumRows] = (0, react_1.useState)(3);
    const [numCols, setNumCols] = (0, react_1.useState)(4);
    const [board, setBoard] = (0, react_1.useState)(new Array(numCols).fill(numRows));
    return (React.createElement(Card_1.default, null,
        React.createElement("p", null, "What size chocolate bar would you like to play on?"),
        React.createElement("div", { className: "centered" },
            React.createElement("select", { id: "colSelect", defaultValue: numCols, onChange: (event) => {
                    const newCols = parseInt(event.target.value);
                    resetBoard(numRows, newCols, setNumRows, setNumCols, setBoard);
                } }, buildOptions(MAX_COLS)),
            React.createElement(TeX_1.default, null, "\\times"),
            React.createElement("select", { id: "rowSelect", defaultValue: numRows, onChange: (event) => {
                    const newRows = parseInt(event.target.value);
                    resetBoard(newRows, numCols, setNumRows, setNumCols, setBoard);
                } }, buildOptions(MAX_ROWS)),
            "\u00A0\u00A0",
            React.createElement("button", { onClick: () => {
                    var _a, _b, _c, _d;
                    const rows = parseInt((_b = (_a = document.querySelector("#rowSelect")) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "2");
                    const cols = parseInt((_d = (_c = document.querySelector("#colSelect")) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : "2");
                    resetBoard(rows, cols, setNumRows, setNumCols, setBoard);
                } }, "Go!")),
        React.createElement("p", null),
        buildChocolateBar(board, setBoard, numRows, numCols),
        React.createElement("div", { className: "centered p" },
            React.createElement("div", { ref: loadingDiv, className: "loader centered hidden" })),
        React.createElement("p", { className: "hidden", ref: messageSpace }, NULL_MSG)));
};
function resetBoard(rows, cols, setNumRows, setNumCols, setBoard) {
    setNumRows(rows);
    setNumCols(cols);
    setBoard(new Array(cols).fill(rows));
    setMessage(NULL_MSG);
    toggleLoadingDiv(false);
}
function buildOptions(maxSize) {
    const children = [];
    for (let i = 2; i <= maxSize; i++) {
        children.push(React.createElement("option", { key: i, value: i }, i));
    }
    return React.createElement(React.Fragment, null, ...children);
}
function buildChocolateBar(board, setBoard, numRows, numCols) {
    const rowList = [];
    for (let row = numRows; row >= 1; row--) {
        const colList = [];
        for (let col = 1; col <= numCols; col++) {
            if (board[col - 1] < row) {
                colList.push(React.createElement("td", { key: col }));
            }
            else {
                colList.push(React.createElement("td", { onClick: () => {
                        playerMove(board, setBoard, col, row);
                    }, key: col, className: "chomp_square", style: {
                        backgroundImage: (row === 1 && col === 1 ? "url(" + sans1_png_1.default + ")," : "") +
                            "url(" +
                            chocobar_jpg_1.default +
                            ")",
                    } }));
            }
        }
        rowList.push(React.createElement("tr", { key: row }, ...colList));
    }
    return (React.createElement("div", { className: "table_container" },
        React.createElement("table", { className: "chocolate" },
            React.createElement("tbody", null, ...rowList))));
}
function playerMove(board, setBoard, c, r) {
    if (canMove) {
        canMove = false;
        board = monch(board, c, r);
        setBoard(board);
        if (isGameOver(board)) {
            setMessage("The computer won! Rats!");
            canMove = true;
        }
        else {
            toggleLoadingDiv(true);
            setTimeout(() => cpuMove(board, setBoard), 100);
        }
    }
}
function monch(board, c, r) {
    const newBoard = board.slice();
    for (let col = c - 1; col < newBoard.length; col++) {
        newBoard[col] = Math.min(r - 1, newBoard[col]);
    }
    return newBoard;
}
function isGameOver(board) {
    return board.indexOf(0) === 0;
}
function cpuMove(board, setBoard) {
    return __awaiter(this, void 0, void 0, function* () {
        const time = Date.now();
        const move = getBestMove(board);
        if (Date.now() - time < 1000) {
            yield sleep(1000);
        }
        board = monch(board, move[0], move[1]);
        setBoard(board);
        toggleLoadingDiv(false);
        canMove = true;
        if (isGameOver(board)) {
            setMessage("You won! Congrats!");
        }
    });
}
function getBestMove(board) {
    for (let c = 1; c <= board.length; c++) {
        for (let r = 1; r <= board[c - 1]; r++) {
            const nextPos = monch(board, c, r);
            if (isLosingPosition(nextPos)) {
                return [c, r];
            }
        }
    }
    const numSquares = board.reduce((a, b) => a + b);
    let n = Math.floor(Math.random() * numSquares) + 1;
    if (numSquares > 3) {
        while (n === 1 || n === 2 || n === board[0] + 1) {
            n = Math.floor(Math.random() * numSquares) + 1;
        }
    }
    let c = 0;
    while (n > board[c]) {
        n -= board[c];
        c += 1;
    }
    c += 1;
    return [c, n];
}
function isLosingPosition(pos) {
    if (pos.reduce((a, b) => a + b) === 0) {
        return false;
    }
    const posCopy = pos.slice();
    if (posCopy.length < 10) {
        posCopy.push(...new Array(10 - posCopy.length).fill(0));
    }
    if (LPS[getIndexString(posCopy)]) {
        return true;
    }
    else if (WPS[getIndexString(posCopy)]) {
        return false;
    }
    for (let c = 1; c <= posCopy.length; c++) {
        for (let r = 1; r <= posCopy[c - 1]; r++) {
            if (isLosingPosition(monch(posCopy, c, r))) {
                WPS[getIndexString(posCopy)] = true;
                return false;
            }
        }
    }
    LPS[getIndexString(posCopy)] = true;
    return true;
}
function getIndexString(pos) {
    return "[" + pos.toString() + "]";
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function setMessage(msg) {
    if (messageSpace.current) {
        messageSpace.current.innerText = msg;
        if (msg === NULL_MSG) {
            messageSpace.current.classList.add("hidden");
        }
        else {
            messageSpace.current.classList.remove("hidden");
        }
    }
}
function toggleLoadingDiv(loading) {
    if (loadingDiv.current) {
        if (!loading) {
            loadingDiv.current.classList.add("hidden");
        }
        else {
            loadingDiv.current.classList.remove("hidden");
        }
    }
}
const WPS = {
    "[0,0,0,0,0,0,0,0,0,0]": true,
};
const LPS = {
    "[1,0,0,0,0,0,0,0,0,0]": true,
    "[2,1,0,0,0,0,0,0,0,0]": true,
    "[2,2,1,0,0,0,0,0,0,0]": true,
    "[2,2,2,1,0,0,0,0,0,0]": true,
    "[2,2,2,2,1,0,0,0,0,0]": true,
    "[3,1,1,0,0,0,0,0,0,0]": true,
    "[3,2,0,0,0,0,0,0,0,0]": true,
    "[3,3,1,1,0,0,0,0,0,0]": true,
    "[3,3,2,1,1,0,0,0,0,0]": true,
    "[3,3,3,2,2,0,0,0,0,0]": true,
    "[4,1,1,1,0,0,0,0,0,0]": true,
    "[4,2,1,1,1,0,0,0,0,0]": true,
    "[4,2,2,0,0,0,0,0,0,0]": true,
    "[4,3,0,0,0,0,0,0,0,0]": true,
    "[4,4,2,2,2,0,0,0,0,0]": true,
    "[4,4,3,1,1,0,0,0,0,0]": true,
    "[5,1,1,1,1,0,0,0,0,0]": true,
    "[5,2,1,1,0,0,0,0,0,0]": true,
    "[5,3,2,0,0,0,0,0,0,0]": true,
    "[5,3,3,2,0,0,0,0,0,0]": true,
    "[5,4,0,0,0,0,0,0,0,0]": true,
    "[5,5,2,2,0,0,0,0,0,0]": true,
    "[5,5,3,0,0,0,0,0,0,0]": true,
    "[6,2,2,1,1,0,0,0,0,0]": true,
    "[6,2,2,2,0,0,0,0,0,0]": true,
    "[6,3,1,1,1,0,0,0,0,0]": true,
    "[6,3,3,0,0,0,0,0,0,0]": true,
    "[6,4,2,0,0,0,0,0,0,0]": true,
    "[6,4,3,3,2,0,0,0,0,0]": true,
    "[6,4,4,3,3,0,0,0,0,0]": true,
    "[6,5,0,0,0,0,0,0,0,0]": true,
    "[6,6,3,3,3,0,0,0,0,0]": true,
    "[6,6,4,3,2,0,0,0,0,0]": true,
    "[6,6,5,4,2,0,0,0,0,0]": true,
    "[6,6,6,5,2,0,0,0,0,0]": true,
    "[2,2,2,2,2,1,0,0,0,0]": true,
    "[3,3,2,2,1,1,0,0,0,0]": true,
    "[3,3,3,1,1,1,0,0,0,0]": true,
    "[4,4,1,1,1,1,0,0,0,0]": true,
    "[5,2,2,1,1,1,0,0,0,0]": true,
    "[5,3,1,1,1,1,0,0,0,0]": true,
    "[5,5,4,2,1,1,0,0,0,0]": true,
    "[5,5,5,3,1,1,0,0,0,0]": true,
    "[6,1,1,1,1,1,0,0,0,0]": true,
    "[3,3,2,2,2,1,1,0,0,0]": true,
    "[3,3,3,2,1,1,1,0,0,0]": true,
    "[4,4,2,1,1,1,1,0,0,0]": true,
    "[4,4,3,2,2,1,1,0,0,0]": true,
    "[4,4,3,3,1,1,1,0,0,0]": true,
    "[4,4,4,3,2,1,1,0,0,0]": true,
    "[4,4,4,4,3,1,1,0,0,0]": true,
    "[5,2,2,2,1,1,1,0,0,0]": true,
    "[5,3,3,1,1,1,1,0,0,0]": true,
    "[5,5,1,1,1,1,1,0,0,0]": true,
    "[6,2,1,1,1,1,1,0,0,0]": true,
    "[6,3,2,1,1,1,1,0,0,0]": true,
    "[6,4,3,1,1,1,1,0,0,0]": true,
    "[6,4,4,2,2,1,1,0,0,0]": true,
    "[6,4,4,3,1,1,1,0,0,0]": true,
    "[6,6,2,2,1,1,1,0,0,0]": true,
    "[6,6,3,3,2,1,1,0,0,0]": true,
    "[6,6,4,1,1,1,1,0,0,0]": true,
};


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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/chomp.tsx"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvbXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrR0FBK0csV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxNQUFNLEtBQUssV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFVBQVUsYUFBYSxjQUFjLFlBQVksVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGNBQWMsZUFBZSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLGFBQWEsYUFBYSxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxX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QUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUs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QUMsU0FBUyxvQkFBSyxLQUFLLElBQUUsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7QUFDdkYsQ0FBQyxDQUFDO0FBRUYscUJBQWUsZ0JBQUksRUFBQyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jaG9tcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY2hvY28ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY2hvY28ud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Nob2NvYmFyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NvbXBhc3MucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY29tcGFzcy53ZWJwIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGVhcnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGVhcnQud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hvbWUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaG9tZS53ZWJwIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbXVzaHJvb20ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbXVzaHJvb20ud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NhbnMxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hvbXAuc2Nzcz83ZWM4Iiwid2VicGFjazovLy8uL3NyYy9jaG9tcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hvbXAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RlWC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2VkZWQ7XG59XG5cbnAge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbmRpdi5wIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG5kaXYudGl0bGUge1xuICBmb250LXNpemU6IDMycHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBmb250LXdlaWdodDogMjUwO1xuICBtYXJnaW46IDE1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsb2F0OiBub25lO1xufVxuXG4uaW5uZXJfY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4ua2F0ZXgge1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgZm9udDogbm9ybWFsIDEuMWVtIEthVGVYX01haW4sIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtaW5kZW50OiAwO1xufVxuXG4ua2F0ZXgtZGlzcGxheSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxucGljdHVyZSA+IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNlbnRlcmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpdF9jb250ZW50IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLyoqXG4gKiBNZW51IFN0eWxpbmdcbiAqL1xuLm1lbnVfY29sbGFwc2VkIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnVfZXhwYW5kZWQge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNy41cHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDIvMykge1xuICAubWVudV9leHBhbmRlZCB7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlO1xuICB9XG59XG5cbi5tZW51X2J1dHRvbiB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tZW51X2J1dHRvbl9pbm5lciB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC13aWR0aDogNS43MTQyODU3MTQzcHg7XG4gIGhlaWdodDogMzQuMjg1NzE0Mjg1N3B4O1xufVxuXG4ubWVudV9idXR0b25fbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUuNzE0Mjg1NzE0M3B4O1xuICBtYXJnaW4tYm90dG9tOiA1LjcxNDI4NTcxNDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmEubWVudV9pdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hLm1lbnVfaXRlbTpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG51bC5tZW51X2xpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDhlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDIvMykge1xuICB1bC5tZW51X2xpc3Qge1xuICAgIG1hcmdpbi10b3A6IDU1LjcxNDI4NTcxNDNweDtcbiAgfVxufVxudWwubWVudV9saXN0ID4gbGkgPiBhID4gcCB7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG51bC5tYXRoX2xpc3QgPiBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG59XG5cbi5pbmxpbmVfY29kZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgcGFkZGluZzogMXB4IDFweDtcbn1cblxudGV4dGFyZWEuY29kZWJsb2NrIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICB3aWR0aDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xufVxuXG5zcGFuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5zcGFuLmJsdWUge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNvbW1hbmRfdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb21tYW5kX3RhYmxlIHRoLFxuLmNvbW1hbmRfdGFibGUgdGQge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG59XG4uY29tbWFuZF90YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5jb21tYW5kX3RhYmxlIHRkIHtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5zdWJzZWN0aW9uIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5ub2Rpc3Age1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udXBzaWRlZG93biB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG59XG5cbi5mbG9hdF9sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmNhbnZhcy5mdWxsX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ub3BhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGlzdF9ub19zdHlsZSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxudGFibGUuY2hvY29sYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbnRhYmxlLmNob2NvbGF0ZSB0ciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG50YWJsZS5jaG9jb2xhdGUgdGQge1xuICB3aWR0aDogNWVtO1xuICBoZWlnaHQ6IDVlbTtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jaG9tcF9zcXVhcmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5jaG9tcF9zcXVhcmU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi50YWJsZV9jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuZGl2LmxvYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDNlbTtcbiAgaGVpZ2h0OiAzZW07XG4gIGJvcmRlci10b3A6IDAuM2VtIHNvbGlkIGNvcm5mbG93ZXJibHVlO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jaG9tcC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBOztFQUVDLGtNQUFB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RUFDQSxxQkFBQTtBQ1hEOztBRGNBO0VBQ0MsV0FBQTtBQ1hEOztBRGNBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNYRDs7QURjQTtFQUNDLFVBQUE7QUNYRDs7QURjQTtFQUNDLHFCQUFBO0FDWEQ7O0FBNVBBO0VBQ0MsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQStQRDtBQTdQQztFQUNDLGFBQUE7QUErUEY7QUE1UEM7RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQThQRjs7QUExUEE7RUFFRSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUE0UEY7QUExUEM7RUFDQyxlQUFBO0FBNFBGOztBQXhQQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtBQTJQRDs7QUF4UEE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtBQTJQRDs7QUF4UEE7RUFDQztJQUNDLHVCQUFBO0VBMlBBO0VBelBEO0lBQ0MseUJBQUE7RUEyUEE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbiRwYWdlLW1hcmdpbjogMTVweDtcXHJcXG4kYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLFxcclxcblxcdFxcdHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRwYWRkaW5nOiAxJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDNlZGVkO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG5cXHRtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXHJcXG5cXHRtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxyXFxuXFx0bWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcclxcblxcdG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5wIHtcXHJcXG5cXHRtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXHJcXG5cXHRtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxyXFxuXFx0bWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcclxcblxcdG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi50aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAzMnB0O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDI1MDtcXHJcXG5cXHRtYXJnaW46ICRwYWdlLW1hcmdpbjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAwO1xcclxcblxcdHBhZGRpbmctdG9wOiAkcGFnZS1tYXJnaW47XFxyXFxuXFx0Ly8gQWRkIDFweCBvZiBwYWRkaW5nIHVuZGVyIHRoZSB0aXRsZS4gV2l0aG91dCB0aGlzLCBmb3Igc29tZSByZWFzb24sIENocm9tZSBvbiBtb2JpbGUgd291bGQgc3F1aXNoIHRoZSB0b3Btb3N0IENhcmQgdW5kZXIgdGhlIHRpdGxlIHRvIHRoZSByaWdodFxcclxcblxcdC8vIChvbmx5IENocm9tZSwgYW5kIG9ubHkgb24gYWN0dWFsIG1vYmlsZSBkZXZpY2UuIERlc2t0b3AgQ2hyb21lIHByZXRlbmRpbmcgdG8gYmUgYSBtb2JpbGUgZGV2aWNlIHdhcyBmaW5lKSBcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0bWluLWhlaWdodDogMjBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG5cXHRtYXJnaW46ICRwYWdlLW1hcmdpbjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0ZmxvYXQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbm5lcl9jYXJkIHtcXHJcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XFxyXFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcclxcblxcdG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8vIEthVGVYIG92ZXJyaWRlIHRvIG1ha2UgdGhlIGZvbnQgc2xpZ2h0bHkgc21hbGxlclxcclxcbi5rYXRleCB7XFxyXFxuXFx0dGV4dC1yZW5kZXJpbmc6IGF1dG87XFxyXFxuXFx0Zm9udDogbm9ybWFsIDEuMWVtIEthVGVYX01haW4sIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMjtcXHJcXG5cXHR0ZXh0LWluZGVudDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gSWYgdGhlIG1hdGggZ29lcyBvZmYgdGhlIHNjcmVlbiBhbGxvdyBzY3JvbGxpbmdcXHJcXG4ua2F0ZXgtZGlzcGxheSB7XFxyXFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXHJcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuXFx0Ly8gTmVlZCB0byBhZGQgc29tZSBwYWRkaW5nIHNvIHRoZSBzY3JvbGxiYXIgZG9lc24ndCBjb3ZlciB0aGUgdGV4dFxcclxcblxcdHBhZGRpbmctdG9wOiAwLjVlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxyXFxuXFx0bWFyZ2luLXRvcDogMC41ZW07XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxyXFxufVxcclxcblxcclxcbnBpY3R1cmUgPiBpbWcge1xcclxcblxcdG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlcmVkIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZml0X2NvbnRlbnQge1xcclxcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBNZW51IFN0eWxpbmdcXHJcXG4gKi9cXHJcXG4kbWVudS1jb2xsYXBzZWQtc2l6ZTogNTBweDtcXHJcXG4kbWVudS1pbm5lci1zaWRlLW1hcmdpbjogJG1lbnUtY29sbGFwc2VkLXNpemUgKiAwLjI7XFxyXFxuJG1lbnUtaW5uZXItdG9wLW1hcmdpbjogJG1lbnUtY29sbGFwc2VkLXNpemUgKiAwLjE7XFxyXFxuJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodDogJG1lbnUtY29sbGFwc2VkLXNpemUgLSAyICogJG1lbnUtaW5uZXItdG9wLW1hcmdpbjtcXHJcXG5cXHJcXG5AbWl4aW4gbWVudSgpIHtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdG1hcmdpbjogJHBhZ2UtbWFyZ2luO1xcclxcblxcdGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcblxcdHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfY29sbGFwc2VkIHtcXHJcXG5cXHRAaW5jbHVkZSBtZW51KCk7XFxyXFxuXFx0d2lkdGg6ICRtZW51LWNvbGxhcHNlZC1zaXplO1xcclxcblxcdGhlaWdodDogJG1lbnUtY29sbGFwc2VkLXNpemU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9leHBhbmRlZCB7XFxyXFxuXFx0QGluY2x1ZGUgbWVudSgpO1xcclxcblxcdHdpZHRoOiBhdXRvO1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiBtYXRoLmRpdigkcGFnZS1tYXJnaW4sIDIpO1xcclxcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG5cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAyLzMpIHtcXHJcXG5cXHRcXHR3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXHJcXG5cXHRcXHR3aWR0aDogLW1vei1hdmFpbGFibGU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9idXR0b24ge1xcclxcblxcdEBpbmNsdWRlIG1lbnUoKTtcXHJcXG5cXHR3aWR0aDogJG1lbnUtY29sbGFwc2VkLXNpemU7XFxyXFxuXFx0aGVpZ2h0OiAkbWVudS1jb2xsYXBzZWQtc2l6ZTtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9idXR0b25faW5uZXIge1xcclxcblxcdG1hcmdpbjogJG1lbnUtaW5uZXItc2lkZS1tYXJnaW47XFxyXFxuXFx0bWFyZ2luLXRvcDogJG1lbnUtaW5uZXItdG9wLW1hcmdpbjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAkbWVudS1pbm5lci10b3AtbWFyZ2luO1xcclxcblxcdHdpZHRoOiAkbWVudS1jb2xsYXBzZWQtc2l6ZSAtIDIgKiAkbWVudS1pbm5lci1zaWRlLW1hcmdpbjtcXHJcXG5cXHRib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xcclxcblxcdGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xcclxcblxcdGJvcmRlci10b3Atd2lkdGg6IG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQsIDcpO1xcclxcblxcdGhlaWdodDogbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCAqIDYsIDcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9idXR0b25fbGluZSB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0LCA3KTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0LCA3KTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYS5tZW51X2l0ZW0ge1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxuXFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG51bC5tZW51X2xpc3Qge1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbi1ib3R0b206ICRtZW51LWlubmVyLXNpZGUtbWFyZ2luO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogOGVtO1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDIvMykge1xcclxcblxcdFxcdG1hcmdpbi10b3A6ICRtZW51LWNvbGxhcHNlZC1zaXplICsgbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCwgNyk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCYgPiBsaSA+IGEgPiBwIHtcXHJcXG5cXHRcXHRtYXJnaW46IDE2cHggMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbnVsLm1hdGhfbGlzdCA+IGxpIHtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxyXFxufVxcclxcblxcclxcbi5pbmxpbmVfY29kZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXHJcXG5cXHRwYWRkaW5nOiAxcHggMXB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYS5jb2RlYmxvY2sge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0cmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG5cXHQmLnJlZCB7XFxyXFxuXFx0XFx0Y29sb3I6IHJlZDtcXHJcXG5cXHR9XFxyXFxuXFx0Ji5ibHVlIHtcXHJcXG5cXHRcXHRjb2xvcjogYmx1ZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1hbmRfdGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuXFx0dGgsXFxyXFxuXFx0dGQge1xcclxcblxcdFxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuXFx0XFx0Ym9yZGVyLXdpZHRoOiB0aGluO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHR0aCB7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0dGQge1xcclxcblxcdFxcdHBhZGRpbmc6IDAuNWVtO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLnN1YnNlY3Rpb24ge1xcclxcblxcdGZvbnQtc2l6ZTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9kaXNwIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udXBzaWRlZG93biB7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxvYXRfbGVmdCB7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbmNhbnZhcy5mdWxsX2NhbnZhcyB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9wYWRkaW5nIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdF9ub19zdHlsZSB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4vaW5kZXguc2Nzc1xcXCI7XFxyXFxuXFxyXFxudGFibGUuY2hvY29sYXRlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcblxcdG1hcmdpbjogYXV0bztcXHJcXG5cXHR3aWR0aDogYXV0bztcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG5cXHJcXG5cXHR0ciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0dGQge1xcclxcblxcdFxcdHdpZHRoOiA1ZW07IC8vIDc1cHg7XFxyXFxuXFx0XFx0aGVpZ2h0OiA1ZW07IC8vIDc1cHg7XFxyXFxuXFx0XFx0Ym9yZGVyOiAwO1xcclxcblxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmNob21wX3NxdWFyZSB7XFxyXFxuXFx0YmFja2dyb3VuZDoge1xcclxcblxcdFxcdHBvc2l0aW9uOiAwcHggMHB4O1xcclxcblxcdFxcdHNpemU6IDEwMCUgMTAwJTtcXHJcXG5cXHRcXHRyZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5cXHR9XFxyXFxuXFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRhYmxlX2NvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmxvYWRlciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdHdpZHRoOiAzZW07XFxyXFxuXFx0aGVpZ2h0OiAzZW07XFxyXFxuXFx0Ym9yZGVyLXRvcDogMC4zZW0gc29saWQgY29ybmZsb3dlcmJsdWU7XFxyXFxuXFx0YW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzcGluIHtcXHJcXG5cXHQwJSB7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuXFx0fVxcclxcblxcdDEwMCUge1xcclxcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2Nob2NvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jaG9jby53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2Nob2NvYmFyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jb21wYXNzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jb21wYXNzLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaGVhcnQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2hlYXJ0LndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaG9tZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaG9tZS53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL211c2hyb29tLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9tdXNocm9vbS53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL3NhbnMxLnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL2Nob21wLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzJdIS4vY2hvbXAuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBDaG9tcCBmcm9tIFwiLi9jb21wb25lbnRzL0Nob21wXCI7XHJcbmltcG9ydCBcIi4vY2hvbXAuc2Nzc1wiO1xyXG5cclxucmVuZGVyKDxDaG9tcCAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpIGFzIEhUTUxFbGVtZW50KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFByb3BzV2l0aG91dFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2FyZDogUmVhY3QuRkM8Q29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFwiZGl2XCI+PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfY2FyZFwiPntjaGlsZHJlbn08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgVGVYIGZyb20gXCIuL1RlWFwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjaG9jb0pwZyBmcm9tIFwiLi4vaW1hZ2VzL2Nob2NvYmFyLmpwZ1wiO1xyXG5pbXBvcnQgc2Fuc1BuZyBmcm9tIFwiLi4vaW1hZ2VzL3NhbnMxLnBuZ1wiO1xyXG5cclxuY29uc3QgTUFYX0NPTFMgPSAxMDtcclxuY29uc3QgTUFYX1JPV1MgPSAxMjtcclxuY29uc3QgTlVMTF9NU0cgPSBcIi1cIjtcclxuXHJcbmxldCBjYW5Nb3ZlID0gdHJ1ZTtcclxuY29uc3QgbWVzc2FnZVNwYWNlID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxQYXJhZ3JhcGhFbGVtZW50PigpO1xyXG5jb25zdCBsb2FkaW5nRGl2ID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuY29uc3QgQ2hvbXA6IFJlYWN0LkZDID0gKCk6IEpTWC5FbGVtZW50ID0+IChcclxuXHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHQ8TWVudSAvPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNob21wPC9kaXY+XHJcblx0XHQ8Q2FyZD5cclxuXHRcdFx0Q2hvbXAgaXMgYSB0d28tcGxheWVyIGdhbWUgYWJvdXQgZWF0aW5nIGNob2NvbGF0ZSEgVGhlIHJ1bGVzIGFyZSBzaW1wbGU6IFRvIHBsYXksIHR3byBwZW9wbGUgKG9yXHJcblx0XHRcdGluIHRoaXMgY2FzZSwgYSBwZXJzb24gYW5kIGEgY29tcHV0ZXIpIHRha2UgdHVybnMgcmVtb3ZpbmcgYW55IHNxdWFyZSwgcGx1cyBhbGwgc3F1YXJlcyBhYm92ZSBhbmRcclxuXHRcdFx0dG8gdGhlIHJpZ2h0LiBXaGljaGV2ZXIgcGxheWVyIHRha2VzIHRoZSBib3R0b20gbGVmdCBzcXVhcmUgbG9zZXMsIGFuZCB0aGUgb3RoZXIgcGxheWVyIHdpbnMuXHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdFNpbmNlIHRoaXMgZ2FtZSBpcyA8YSBocmVmPVwiLy9tYXRod29ybGQud29sZnJhbS5jb20vRmluaXRlR2FtZS5odG1sXCI+ZmluaXRlPC9hPix7XCIgXCJ9XHJcblx0XHRcdFx0PGEgaHJlZj1cIi8vd3d3LndoYXRnYW1lc2FyZS5jb20vZGV0ZXJtaW5pc20uaHRtbFwiPmRldGVybWluaXN0aWM8L2E+LCBhbmR7XCIgXCJ9XHJcblx0XHRcdFx0PGEgaHJlZj1cIi8vbWF0aHdvcmxkLndvbGZyYW0uY29tL0ltcGFydGlhbEdhbWUuaHRtbFwiPmltcGFydGlhbDwvYT4sIHdpdGggbm8gZHJhd3MsIHdle1wiIFwifVxyXG5cdFx0XHRcdDxhIGhyZWY9XCIvL2VuLndpa2lwZWRpYS5vcmcvd2lraS9aZXJtZWxvJTI3c190aGVvcmVtXyhnYW1lX3RoZW9yeSlcIj5rbm93PC9hPiB0aGF0IG9uZSBvZiB0aGVcclxuXHRcdFx0XHRwbGF5ZXJzIGFsd2F5cyBoYXMgYSB3aW5uaW5nIHN0cmF0ZWd5IChjYW4geW91IHByb3ZlIHdoaWNoIHBsYXllciBpdCBpcz8pLiBIb3dldmVyLCB0aGlzXHJcblx0XHRcdFx0c3RyYXRlZ3kgaXMgbm90IGtub3duIGluIGdlbmVyYWwgKGZvciBhcmJpdHJhcmlseSBsYXJnZSBib2FyZHMpLCBhbmQgb25seSByZWNlbnRseSBoYXZlXHJcblx0XHRcdFx0cmVzdWx0cyBiZWVuIGZvdW5kIGZvciA8VGVYPjNcXHRpbWVzIG48L1RlWD4gYm9hcmRzLlxyXG5cdFx0XHQ8L3A+XHJcblx0XHQ8L0NhcmQ+XHJcblx0XHQ8Q2hvbXBDYXJkIC8+XHJcblx0XHQ8Q2FyZD5cclxuXHRcdFx0Rm9yIG1vcmUgaW5mb3JtYXRpb24gb24gQ2hvbXAsIHNlZTpcclxuXHRcdFx0PHVsIGNsYXNzTmFtZT1cIm1hdGhfbGlzdFwiPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DaG9tcCNHZW5lcmFsaXNhdGlvbnNfb2ZfQ2hvbXBcIj5HZW5lcmFsaXphdGlvbnM8L2E+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8YSBocmVmPVwiLy94b3JzaGFtbWVyLmNvbS8yMDA4LzA5LzI5L3BsYXlpbmctZ2FtZXMtaW4tdGhlLXRyYW5zZmluaXRlLWFuLWludHJvZHVjdGlvbi10by1vcmRpbmFsLWNob21wL1wiPlxyXG5cdFx0XHRcdFx0XHRPcmRpbmFsIGNob21wXHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8YSBocmVmPVwiLy93d3cud2luLnR1ZS5ubC9+YWViL2dhbWVzL2Nob21wLmh0bWxcIj5JbnRlcmVzdGluZyB2YXJpYW50cywgb3BlbiBxdWVzdGlvbnM8L2E+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8YSBocmVmPVwiLy93d3cua3VyaW1zLmt5b3RvLXUuYWMuanAvRU1JUy9qb3VybmFscy9JTlRFR0VSUy9wYXBlcnMvZmc3L2ZnNy5wZGZcIj5cclxuXHRcdFx0XHRcdFx0TW9yZSB2YXJpYW50cywgd29yayBvbiAzIMOXIG4gYm9hcmRzXHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8YSBocmVmPVwiLy9jaXRlc2VlcnguaXN0LnBzdS5lZHUvdmlld2RvYy9kb3dubG9hZD9kb2k9MTAuMS4xLjcxOC44NDkzJnJlcD1yZXAxJnR5cGU9cGRmXCI+XHJcblx0XHRcdFx0XHRcdEdlbmVyYWwgcG9zZXQgZ2FtZXMgYW5kIDMgw5cgbiBjaG9tcFxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L0NhcmQ+XHJcblx0PC9SZWFjdC5GcmFnbWVudD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENob21wO1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkcyB0aGUgQ2FyZCBjb250YWluaW5nIHRoZSBDaG9tcCBib2FyZFxyXG4gKiBAcmV0dXJucyBUaGUgQ2FyZCB3aXRoIHRoZSBib2FyZCwgc2VsZWN0aW9uIGJ1dHRvbnMsIGV0Yy5cclxuICovXHJcbmNvbnN0IENob21wQ2FyZDogUmVhY3QuRkMgPSBmdW5jdGlvbiAoKTogSlNYLkVsZW1lbnQge1xyXG5cdGNvbnN0IFtudW1Sb3dzLCBzZXROdW1Sb3dzXSA9IHVzZVN0YXRlKDMpO1xyXG5cdGNvbnN0IFtudW1Db2xzLCBzZXROdW1Db2xzXSA9IHVzZVN0YXRlKDQpO1xyXG5cdGNvbnN0IFtib2FyZCwgc2V0Qm9hcmRdID0gdXNlU3RhdGU8bnVtYmVyW10+KG5ldyBBcnJheShudW1Db2xzKS5maWxsKG51bVJvd3MpKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDYXJkPlxyXG5cdFx0XHQ8cD5XaGF0IHNpemUgY2hvY29sYXRlIGJhciB3b3VsZCB5b3UgbGlrZSB0byBwbGF5IG9uPzwvcD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPlxyXG5cdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdGlkPVwiY29sU2VsZWN0XCJcclxuXHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17bnVtQ29sc31cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgbmV3Q29scyA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdHJlc2V0Qm9hcmQobnVtUm93cywgbmV3Q29scywgc2V0TnVtUm93cywgc2V0TnVtQ29scywgc2V0Qm9hcmQpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7YnVpbGRPcHRpb25zKE1BWF9DT0xTKX1cclxuXHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHQ8VGVYPlxcdGltZXM8L1RlWD5cclxuXHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRpZD1cInJvd1NlbGVjdFwiXHJcblx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e251bVJvd3N9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IG5ld1Jvd3MgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRyZXNldEJvYXJkKG5ld1Jvd3MsIG51bUNvbHMsIHNldE51bVJvd3MsIHNldE51bUNvbHMsIHNldEJvYXJkKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e2J1aWxkT3B0aW9ucyhNQVhfUk9XUyl9XHJcblx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCByb3dzID0gcGFyc2VJbnQoXHJcblx0XHRcdFx0XHRcdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm93U2VsZWN0XCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50KT8udmFsdWUgPz8gXCIyXCIsXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGNvbHMgPSBwYXJzZUludChcclxuXHRcdFx0XHRcdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2xTZWxlY3RcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQpPy52YWx1ZSA/PyBcIjJcIixcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0cmVzZXRCb2FyZChyb3dzLCBjb2xzLCBzZXROdW1Sb3dzLCBzZXROdW1Db2xzLCBzZXRCb2FyZCk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdEdvIVxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHAgLz5cclxuXHRcdFx0e2J1aWxkQ2hvY29sYXRlQmFyKGJvYXJkLCBzZXRCb2FyZCwgbnVtUm93cywgbnVtQ29scyl9XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWQgcFwiPlxyXG5cdFx0XHRcdDxkaXYgcmVmPXtsb2FkaW5nRGl2fSBjbGFzc05hbWU9XCJsb2FkZXIgY2VudGVyZWQgaGlkZGVuXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxwIGNsYXNzTmFtZT1cImhpZGRlblwiIHJlZj17bWVzc2FnZVNwYWNlfT5cclxuXHRcdFx0XHR7TlVMTF9NU0d9XHJcblx0XHRcdDwvcD5cclxuXHRcdDwvQ2FyZD5cclxuXHQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlc2V0cyB0aGUgYm9hcmQgdG8gaXRzIGNvbXBsZXRlbHkgdW4tZWF0ZW4gc3RhdGVcclxuICogQHBhcmFtIHJvd3MgTnVtYmVyIG9mIHJvd3NcclxuICogQHBhcmFtIGNvbHMgTnVtYmVyIG9mIGNvbHVtbnNcclxuICogQHBhcmFtIHNldE51bVJvd3MgRnVuY3Rpb24gdG8gc2V0IHRoZSBudW1iZXIgb2Ygcm93c1xyXG4gKiBAcGFyYW0gc2V0TnVtQ29scyBGdW5jdGlvbiB0byBzZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zXHJcbiAqIEBwYXJhbSBzZXRCb2FyZCBGdW5jdGlvbiB0byBzZXQgdGhlIGJvYXJkIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gcmVzZXRCb2FyZChcclxuXHRyb3dzOiBudW1iZXIsXHJcblx0Y29sczogbnVtYmVyLFxyXG5cdHNldE51bVJvd3M6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxyXG5cdHNldE51bUNvbHM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+LFxyXG5cdHNldEJvYXJkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXJbXT4+LFxyXG4pOiB2b2lkIHtcclxuXHRzZXROdW1Sb3dzKHJvd3MpO1xyXG5cdHNldE51bUNvbHMoY29scyk7XHJcblx0c2V0Qm9hcmQobmV3IEFycmF5KGNvbHMpLmZpbGwocm93cykpO1xyXG5cdHNldE1lc3NhZ2UoTlVMTF9NU0cpO1xyXG5cdHRvZ2dsZUxvYWRpbmdEaXYoZmFsc2UpO1xyXG59XHJcblxyXG4vKipcclxuICogQnVpbGQgdGhlIGRyb3Bkb3duIGxpc3QgZm9yIGNob29zaW5nIHRoZSBudW1iZXIgb2Ygcm93cyBvciBjb2x1bW5zXHJcbiAqIEBwYXJhbSBtYXhTaXplIE1heGltdW0gc2VsZWN0YWJsZSBvcHRpb25cclxuICogQHJldHVybnMgVGhlIDxvcHRpb24+cyB0byBnbyBpbnNpZGUgdGhlIDxzZWxlY3Q+IG5vZGVcclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkT3B0aW9ucyhtYXhTaXplOiBudW1iZXIpOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3QgY2hpbGRyZW46IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHRmb3IgKGxldCBpID0gMjsgaSA8PSBtYXhTaXplOyBpKyspIHtcclxuXHRcdGNoaWxkcmVuLnB1c2goXHJcblx0XHRcdDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17aX0+XHJcblx0XHRcdFx0e2l9XHJcblx0XHRcdDwvb3B0aW9uPixcclxuXHRcdCk7XHJcblx0fVxyXG5cdHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+ey4uLmNoaWxkcmVufTwvUmVhY3QuRnJhZ21lbnQ+O1xyXG59XHJcblxyXG4vKipcclxuICogQnVpbGRzIHRoZSBjaG9jb2xhdGUgYmFyIHRhYmxlIHRvIGJlIHVzZWQgYXMgZ2FtZSBib2FyZFxyXG4gKiBAcGFyYW0gYm9hcmQgVGhlIGJvYXJkIGFycmF5OiBbYV8xLCBhXzIsIC4uLiwgYV9jXSwgd2hlcmUgdGhlcmUgYXJlIGMgY29sdW1ucyB0b3RhbCBhbmQgYV9pIGNob2NvbGF0ZSBzcXVhcmVzIGluIGNvbHVtbiBpXHJcbiAqIEBwYXJhbSBzZXRCb2FyZCBGdW5jdGlvbiB0byBzZXQgdGhlIGJvYXJkIG9iamVjdFxyXG4gKiBAcGFyYW0gbnVtUm93cyBOdW1iZXIgb2Ygcm93c1xyXG4gKiBAcGFyYW0gbnVtQ29scyBOdW1iZXIgb2YgY29sdW1uc1xyXG4gKiBAcmV0dXJucyBUaGUgKHBvc3NpYmx5IHBhcnRseS1lYXRlbikgY2hvY29sYXRlIGJhciDwn5iLXHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZENob2NvbGF0ZUJhcihcclxuXHRib2FyZDogbnVtYmVyW10sXHJcblx0c2V0Qm9hcmQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcltdPj4sXHJcblx0bnVtUm93czogbnVtYmVyLFxyXG5cdG51bUNvbHM6IG51bWJlcixcclxuKTogSlNYLkVsZW1lbnQge1xyXG5cdGNvbnN0IHJvd0xpc3Q6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHRmb3IgKGxldCByb3cgPSBudW1Sb3dzOyByb3cgPj0gMTsgcm93LS0pIHtcclxuXHRcdGNvbnN0IGNvbExpc3Q6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHRcdGZvciAobGV0IGNvbCA9IDE7IGNvbCA8PSBudW1Db2xzOyBjb2wrKykge1xyXG5cdFx0XHRpZiAoYm9hcmRbY29sIC0gMV0gPCByb3cpIHtcclxuXHRcdFx0XHRjb2xMaXN0LnB1c2goPHRkIGtleT17Y29sfT48L3RkPik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29sTGlzdC5wdXNoKFxyXG5cdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRwbGF5ZXJNb3ZlKGJvYXJkLCBzZXRCb2FyZCwgY29sLCByb3cpO1xyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRrZXk9e2NvbH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2hvbXBfc3F1YXJlXCJcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6XHJcblx0XHRcdFx0XHRcdFx0XHQocm93ID09PSAxICYmIGNvbCA9PT0gMSA/IFwidXJsKFwiICsgc2Fuc1BuZyArIFwiKSxcIiA6IFwiXCIpICtcclxuXHRcdFx0XHRcdFx0XHRcdFwidXJsKFwiICtcclxuXHRcdFx0XHRcdFx0XHRcdGNob2NvSnBnICtcclxuXHRcdFx0XHRcdFx0XHRcdFwiKVwiLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0PjwvdGQ+LFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJvd0xpc3QucHVzaCg8dHIga2V5PXtyb3d9PnsuLi5jb2xMaXN0fTwvdHI+KTtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidGFibGVfY29udGFpbmVyXCI+XHJcblx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJjaG9jb2xhdGVcIj5cclxuXHRcdFx0XHQ8dGJvZHk+ey4uLnJvd0xpc3R9PC90Ym9keT5cclxuXHRcdFx0PC90YWJsZT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxsZWQgd2hlbiB0aGUgcGxheWVyIGNsaWNrcyBhIGNob2NvbGF0ZSBzcXVhcmVcclxuICogQHBhcmFtIGJvYXJkIFRoZSBib2FyZCBhcnJheVxyXG4gKiBAcGFyYW0gc2V0Qm9hcmQgRnVuY3Rpb24gdG8gc2V0IHRoZSBib2FyZCBvYmplY3RcclxuICogQHBhcmFtIGMgQ2xpY2tlZCBjb2x1bW5cclxuICogQHBhcmFtIHIgQ2xpY2tlZCByb3dcclxuICovXHJcbmZ1bmN0aW9uIHBsYXllck1vdmUoXHJcblx0Ym9hcmQ6IG51bWJlcltdLFxyXG5cdHNldEJvYXJkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXJbXT4+LFxyXG5cdGM6IG51bWJlcixcclxuXHRyOiBudW1iZXIsXHJcbik6IHZvaWQge1xyXG5cdGlmIChjYW5Nb3ZlKSB7XHJcblx0XHRjYW5Nb3ZlID0gZmFsc2U7XHJcblx0XHRib2FyZCA9IG1vbmNoKGJvYXJkLCBjLCByKTtcclxuXHRcdHNldEJvYXJkKGJvYXJkKTtcclxuXHJcblx0XHRpZiAoaXNHYW1lT3Zlcihib2FyZCkpIHtcclxuXHRcdFx0c2V0TWVzc2FnZShcIlRoZSBjb21wdXRlciB3b24hIFJhdHMhXCIpO1xyXG5cdFx0XHRjYW5Nb3ZlID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRvZ2dsZUxvYWRpbmdEaXYodHJ1ZSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gY3B1TW92ZShib2FyZCwgc2V0Qm9hcmQpLCAxMDApO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1vbmNoZXMgb2ZmIHRoZSB0b3AtcmlnaHQgcG9ydGlvbiBvZiB0aGUgY2hvY29sYXRlIGJhciBhbmQgcmV0dXJucyB0aGUgbmV3IGNob2NvbGF0ZSBiYXJcclxuICogQHBhcmFtIGJvYXJkIFRoZSBib2FyZCBhcnJheVxyXG4gKiBAcGFyYW0gYyBDb2x1bW4gdG8gc3RhcnQgdGhlIG1vbmNoIGF0XHJcbiAqIEBwYXJhbSByIFJvdyB0byBzdGFydCB0aGUgbW9uY2ggYXRcclxuICogQHJldHVybnMgVGhlIG5ldyBib2FyZCwgcG9zdC1tb25jaFxyXG4gKi9cclxuZnVuY3Rpb24gbW9uY2goYm9hcmQ6IG51bWJlcltdLCBjOiBudW1iZXIsIHI6IG51bWJlcik6IG51bWJlcltdIHtcclxuXHRjb25zdCBuZXdCb2FyZCA9IGJvYXJkLnNsaWNlKCk7XHJcblx0Zm9yIChsZXQgY29sID0gYyAtIDE7IGNvbCA8IG5ld0JvYXJkLmxlbmd0aDsgY29sKyspIHtcclxuXHRcdG5ld0JvYXJkW2NvbF0gPSBNYXRoLm1pbihyIC0gMSwgbmV3Qm9hcmRbY29sXSk7XHJcblx0fVxyXG5cdHJldHVybiBuZXdCb2FyZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdoZXRoZXIgdGhlIGdhbWUgaXMgb3ZlciAobm8gbW9yZSBjaG9jb2xhdGUg4pi577iPKVxyXG4gKiBAcGFyYW0gYm9hcmQgVGhlIGJvYXJkIGFycmF5XHJcbiAqIEByZXR1cm5zIFRydWUgaWZmIHRoZSBnYW1lIGlzIG92ZXJcclxuICovXHJcbmZ1bmN0aW9uIGlzR2FtZU92ZXIoYm9hcmQ6IG51bWJlcltdKTogYm9vbGVhbiB7XHJcblx0cmV0dXJuIGJvYXJkLmluZGV4T2YoMCkgPT09IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlcyBhIG1vdmUgZm9yIHRoZSBjb21wdXRlclxyXG4gKiBAcGFyYW0gYm9hcmQgVGhlIGJvYXJkIGFycmF5XHJcbiAqIEBwYXJhbSBzZXRCb2FyZCBGdW5jdGlvbiB0byBzZXQgdGhlIGJvYXJkIG9iamVjdFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gY3B1TW92ZShcclxuXHRib2FyZDogbnVtYmVyW10sXHJcblx0c2V0Qm9hcmQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcltdPj4sXHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG5cdGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpO1xyXG5cdGNvbnN0IG1vdmUgPSBnZXRCZXN0TW92ZShib2FyZCk7XHJcblx0Ly8gV2FpdCBhIHNlY29uZCBpZiBuZWNlc3NhcnkgdG8gYXZvaWQgdXNlciBjb25mdXNpb25cclxuXHRpZiAoRGF0ZS5ub3coKSAtIHRpbWUgPCAxMDAwKSB7XHJcblx0XHRhd2FpdCBzbGVlcCgxMDAwKTtcclxuXHR9XHJcblx0Ym9hcmQgPSBtb25jaChib2FyZCwgbW92ZVswXSwgbW92ZVsxXSk7XHJcblx0c2V0Qm9hcmQoYm9hcmQpO1xyXG5cdHRvZ2dsZUxvYWRpbmdEaXYoZmFsc2UpO1xyXG5cdGNhbk1vdmUgPSB0cnVlO1xyXG5cdGlmIChpc0dhbWVPdmVyKGJvYXJkKSkge1xyXG5cdFx0c2V0TWVzc2FnZShcIllvdSB3b24hIENvbmdyYXRzIVwiKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGJlc3QgbW92ZSBmb3IgdGhlIGNvbXB1dGVyIHRvIG1ha2UgKGlmIHRoZXJlIGlzIG9uZSlcclxuICogQHBhcmFtIGJvYXJkIFRoZSBib2FyZCBhcnJheVxyXG4gKiBAcmV0dXJucyBUaGUgYmVzdCBbY29sdW1uLCByb3ddIHRvIG1vbmNoIG5leHRcclxuICovXHJcbmZ1bmN0aW9uIGdldEJlc3RNb3ZlKGJvYXJkOiBudW1iZXJbXSk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG5cdC8vIFdlIHRyeSB0byBtb3ZlIHRvIGEgbG9zaW5nIHBvc2l0aW9uXHJcblx0Zm9yIChsZXQgYyA9IDE7IGMgPD0gYm9hcmQubGVuZ3RoOyBjKyspIHtcclxuXHRcdGZvciAobGV0IHIgPSAxOyByIDw9IGJvYXJkW2MgLSAxXTsgcisrKSB7XHJcblx0XHRcdGNvbnN0IG5leHRQb3MgPSBtb25jaChib2FyZCwgYywgcik7XHJcblx0XHRcdC8vIElmIGh1bWFuIGhhcyB0byBtb3ZlIGZyb20gYSBsb3NpbmcgcG9zaXRpb24sIHdlIGNhbiBmb3JjZSBhIHdpblxyXG5cdFx0XHRpZiAoaXNMb3NpbmdQb3NpdGlvbihuZXh0UG9zKSkge1xyXG5cdFx0XHRcdHJldHVybiBbYywgcl07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Ly8gT3RoZXJ3aXNlLCBwbGF5IG1vc3RseSByYW5kb21seVxyXG5cdGNvbnN0IG51bVNxdWFyZXMgPSBib2FyZC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuXHRsZXQgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG51bVNxdWFyZXMpICsgMTtcclxuXHRpZiAobnVtU3F1YXJlcyA+IDMpIHtcclxuXHRcdC8vIERvbid0IG9idmlvdXNseSBsb3NlIGlmIHdlIGNhbiBoZWxwIGl0XHJcblx0XHR3aGlsZSAobiA9PT0gMSB8fCBuID09PSAyIHx8IG4gPT09IGJvYXJkWzBdICsgMSkge1xyXG5cdFx0XHRuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtU3F1YXJlcykgKyAxO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyBGaW5kIGNvcnJlc3BvbmRpbmcgcm93ICYgY29sXHJcblx0bGV0IGMgPSAwO1xyXG5cdHdoaWxlIChuID4gYm9hcmRbY10pIHtcclxuXHRcdG4gLT0gYm9hcmRbY107XHJcblx0XHRjICs9IDE7XHJcblx0fVxyXG5cdGMgKz0gMTtcclxuXHRyZXR1cm4gW2MsIG5dO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBlbnRlcmVkIGJvYXJkIGlzIGEgXCJsb3NpbmcgcG9zaXRpb25cIlxyXG4gKiAoYSBwb3NpdGlvbiB3aGVyZSwgaWYgeW91IG11c3QgbW92ZSBmcm9tIGl0LCB5b3UgY2FuIGJlIGZvcmNlZFxyXG4gKiBpbnRvIGEgbG9zcyBpZiB5b3VyIG9wcG9uZW50IHBsYXlzIG9wdGltYWxseSlcclxuICogQHBhcmFtIHBvcyBCb2FyZCBzdGF0ZSB0byBjaGVja1xyXG4gKiBAcmV0dXJucyBUcnVlIGlmZiB0aGUgYm9hcmQgaXMgYSBsb3NpbmcgcG9zaXRpb25cclxuICovXHJcbmZ1bmN0aW9uIGlzTG9zaW5nUG9zaXRpb24ocG9zOiBudW1iZXJbXSk6IGJvb2xlYW4ge1xyXG5cdGlmIChwb3MucmVkdWNlKChhLCBiKSA9PiBhICsgYikgPT09IDApIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0Ly8gR2l2ZSBwb3MgbWF4IGxlbmd0aCBmb3IgY29tcGFyaXNvblxyXG5cdGNvbnN0IHBvc0NvcHkgPSBwb3Muc2xpY2UoKTtcclxuXHRpZiAocG9zQ29weS5sZW5ndGggPCAxMCkge1xyXG5cdFx0cG9zQ29weS5wdXNoKC4uLm5ldyBBcnJheSgxMCAtIHBvc0NvcHkubGVuZ3RoKS5maWxsKDApKTtcclxuXHR9XHJcblx0Ly8gU2VhcmNoIGZvciBsb3NpbmcgcG9zaXRpb25cclxuXHRpZiAoTFBTW2dldEluZGV4U3RyaW5nKHBvc0NvcHkpXSkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSBlbHNlIGlmIChXUFNbZ2V0SW5kZXhTdHJpbmcocG9zQ29weSldKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdGZvciAobGV0IGMgPSAxOyBjIDw9IHBvc0NvcHkubGVuZ3RoOyBjKyspIHtcclxuXHRcdGZvciAobGV0IHIgPSAxOyByIDw9IHBvc0NvcHlbYyAtIDFdOyByKyspIHtcclxuXHRcdFx0Ly8gSWYgeW91IGNhbiByZWFjaCBhIGxvc2luZyBwb3NpdGlvbiwgeW91J3JlIG5vdCBhdCBvbmUgbm93XHJcblx0XHRcdGlmIChpc0xvc2luZ1Bvc2l0aW9uKG1vbmNoKHBvc0NvcHksIGMsIHIpKSkge1xyXG5cdFx0XHRcdFdQU1tnZXRJbmRleFN0cmluZyhwb3NDb3B5KV0gPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyBJZiBub25lIG9mIHRoZSBwb3NzaWJsZSBtb3ZlcyBnb3QgdXMgdG8gYSBsb3NpbmcgcG9zaXRpb24sIHRoZW4gd2UncmUgYXQgYSBsb3NpbmcgcG9zaXRpb24gbm93XHJcblx0TFBTW2dldEluZGV4U3RyaW5nKHBvc0NvcHkpXSA9IHRydWU7XHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIHN0cmluZyB1c2VkIHRvIGluZGV4IHRoZSBwb3NpdGlvbiB0YWJsZXNcclxuICogQHBhcmFtIHBvcyBCb2FyZCBzdGF0ZVxyXG4gKiBAcmV0dXJucyBUaGUgc3RhbmRhcmQgc3RyaW5nIHVzZWQgZm9yIGluZGV4aW5nXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbmRleFN0cmluZyhwb3M6IG51bWJlcltdKTogc3RyaW5nIHtcclxuXHRyZXR1cm4gXCJbXCIgKyBwb3MudG9TdHJpbmcoKSArIFwiXVwiO1xyXG59XHJcblxyXG4vKipcclxuICogV2FpdCBmb3IgYW4gYW1vdW50IG9mIHRpbWVcclxuICogQHBhcmFtIG1zIE1pbGxpc2Vjb25kc1xyXG4gKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgbXMgbWlsbGlzZWNvbmRzXHJcbiAqL1xyXG5mdW5jdGlvbiBzbGVlcChtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaG93IGEgbWVzc2FnZSBpbiB0aGUgbWVzc2FnZSA8ZGl2PlxyXG4gKiBAcGFyYW0gbXNnIE1lc3NhZ2UgdG8gc2hvd1xyXG4gKi9cclxuZnVuY3Rpb24gc2V0TWVzc2FnZShtc2c6IHN0cmluZyk6IHZvaWQge1xyXG5cdGlmIChtZXNzYWdlU3BhY2UuY3VycmVudCkge1xyXG5cdFx0bWVzc2FnZVNwYWNlLmN1cnJlbnQuaW5uZXJUZXh0ID0gbXNnO1xyXG5cdFx0aWYgKG1zZyA9PT0gTlVMTF9NU0cpIHtcclxuXHRcdFx0bWVzc2FnZVNwYWNlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1lc3NhZ2VTcGFjZS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogVG9nZ2xlIHdoZXRoZXIgdGhlIGxvYWRpbmcgYW5pbWF0aW9uIGlzIHZpc2libGVcclxuICogQHBhcmFtIGxvYWRpbmcgVHJ1ZSBpZiB3ZSdyZSBsb2FkaW5nIHNvbWV0aGluZyAoYW5kIHNob3VsZCBzaG93IHRoZSBhbmltYXRpb24pXHJcbiAqL1xyXG5mdW5jdGlvbiB0b2dnbGVMb2FkaW5nRGl2KGxvYWRpbmc6IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRpZiAobG9hZGluZ0Rpdi5jdXJyZW50KSB7XHJcblx0XHRpZiAoIWxvYWRpbmcpIHtcclxuXHRcdFx0bG9hZGluZ0Rpdi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsb2FkaW5nRGl2LmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qIHRhYmxlIG9mIHdpbm5pbmcgcG9zaXRpb25zICovXHJcbmNvbnN0IFdQUzogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7XHJcblx0XCJbMCwwLDAsMCwwLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxufTtcclxuXHJcbi8qIHRhYmxlIG9mIGxvc2luZyBwb3NpdGlvbnMgKi9cclxuY29uc3QgTFBTOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHtcclxuXHRcIlsxLDAsMCwwLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzIsMSwwLDAsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbMiwyLDEsMCwwLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIlsyLDIsMiwxLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzIsMiwyLDIsMSwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbMywxLDEsMCwwLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIlszLDIsMCwwLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzMsMywxLDEsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbMywzLDIsMSwxLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIlszLDMsMywyLDIsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzQsMSwxLDEsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNCwyLDEsMSwxLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls0LDIsMiwwLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzQsMywwLDAsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNCw0LDIsMiwyLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls0LDQsMywxLDEsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzUsMSwxLDEsMSwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNSwyLDEsMSwwLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls1LDMsMiwwLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzUsMywzLDIsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNSw0LDAsMCwwLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls1LDUsMiwyLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzUsNSwzLDAsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiwyLDIsMSwxLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDIsMiwyLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsMywxLDEsMSwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiwzLDMsMCwwLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDQsMiwwLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsNCwzLDMsMiwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiw0LDQsMywzLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDUsMCwwLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsNiwzLDMsMywwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiw2LDQsMywyLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDYsNSw0LDIsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsNiw2LDUsMiwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbMiwyLDIsMiwyLDEsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIlszLDMsMiwyLDEsMSwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzMsMywzLDEsMSwxLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNCw0LDEsMSwxLDEsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls1LDIsMiwxLDEsMSwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzUsMywxLDEsMSwxLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNSw1LDQsMiwxLDEsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls1LDUsNSwzLDEsMSwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsMSwxLDEsMSwxLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbMywzLDIsMiwyLDEsMSwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIlszLDMsMywyLDEsMSwxLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzQsNCwyLDEsMSwxLDEsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNCw0LDMsMiwyLDEsMSwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls0LDQsMywzLDEsMSwxLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzQsNCw0LDMsMiwxLDEsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNCw0LDQsNCwzLDEsMSwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls1LDIsMiwyLDEsMSwxLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzUsMywzLDEsMSwxLDEsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNSw1LDEsMSwxLDEsMSwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDIsMSwxLDEsMSwxLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsMywyLDEsMSwxLDEsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiw0LDMsMSwxLDEsMSwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDQsNCwyLDIsMSwxLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsNCw0LDMsMSwxLDEsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiw2LDIsMiwxLDEsMSwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDYsMywzLDIsMSwxLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsNiw0LDEsMSwxLDEsMCwwLDBdXCI6IHRydWUsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGhvbWVQbmcgZnJvbSBcIi4uL2ltYWdlcy9ob21lLnBuZ1wiO1xyXG5pbXBvcnQgaG9tZVdlYnAgZnJvbSBcIi4uL2ltYWdlcy9ob21lLndlYnBcIjtcclxuaW1wb3J0IGNvbXBhc3NQbmcgZnJvbSBcIi4uL2ltYWdlcy9jb21wYXNzLnBuZ1wiO1xyXG5pbXBvcnQgY29tcGFzc1dlYnAgZnJvbSBcIi4uL2ltYWdlcy9jb21wYXNzLndlYnBcIjtcclxuaW1wb3J0IGNob2NvUG5nIGZyb20gXCIuLi9pbWFnZXMvY2hvY28ucG5nXCI7XHJcbmltcG9ydCBjaG9jb1dlYnAgZnJvbSBcIi4uL2ltYWdlcy9jaG9jby53ZWJwXCI7XHJcbmltcG9ydCBtdXNocm9vbVBuZyBmcm9tIFwiLi4vaW1hZ2VzL211c2hyb29tLnBuZ1wiO1xyXG5pbXBvcnQgbXVzaHJvb21XZWJwIGZyb20gXCIuLi9pbWFnZXMvbXVzaHJvb20ud2VicFwiO1xyXG5pbXBvcnQgaGVhcnRQbmcgZnJvbSBcIi4uL2ltYWdlcy9oZWFydC5wbmdcIjtcclxuaW1wb3J0IGhlYXJ0V2VicCBmcm9tIFwiLi4vaW1hZ2VzL2hlYXJ0LndlYnBcIjtcclxuXHJcbmNvbnN0IE1lbnU6IFJlYWN0LkZDPE1lbnVQcm9wcz4gPSAoeyBzdGFydEV4cGFuZGVkIH0pID0+IHtcclxuXHRjb25zdCBbZXhwYW5kZWQsIHRvZ2dsZUV4cGFuZGVkXSA9IHVzZVN0YXRlKHN0YXJ0RXhwYW5kZWQgPz8gZmFsc2UpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2V4cGFuZGVkID8gXCJtZW51X2V4cGFuZGVkXCIgOiBcIm1lbnVfY29sbGFwc2VkXCJ9PlxyXG5cdFx0XHR7TWVudUJ1dHRvbihleHBhbmRlZCwgdG9nZ2xlRXhwYW5kZWQpfVxyXG5cdFx0XHR7ZXhwYW5kZWQgPyAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPlxyXG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm1lbnVfbGlzdCBjZW50ZXJlZFwiPlxyXG5cdFx0XHRcdFx0XHR7TWVudUl0ZW0oXCIvXCIsIFwiSG9tZVwiLCBob21lUG5nLCBob21lV2VicCl9XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9wcm9ibGVtcy5odG1sXCIsIFwiUHJvYmxlbXNcIiwgY29tcGFzc1BuZywgY29tcGFzc1dlYnApfVxyXG5cdFx0XHRcdFx0XHR7TWVudUl0ZW0oXCIvY2hvbXAuaHRtbFwiLCBcIkNob21wXCIsIGNob2NvUG5nLCBjaG9jb1dlYnApfVxyXG5cdFx0XHRcdFx0XHR7TWVudUl0ZW0oXCIvYmVmdW5nZS5odG1sXCIsIFwiQmVmdW5nZVwiLCBtdXNocm9vbVBuZywgbXVzaHJvb21XZWJwKX1cclxuXHRcdFx0XHRcdFx0e01lbnVJdGVtKFwiL21pc2MuaHRtbFwiLCBcIk1pc2NlbGxhbmVhXCIsIGhlYXJ0UG5nLCBoZWFydFdlYnApfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KSA6IG51bGx9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gTWVudUl0ZW0ocmVmZXJlbmNlOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgcG5nOiBhbnksIHdlYnA6IGFueSk6IEpTWC5FbGVtZW50IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGxpPlxyXG5cdFx0XHQ8YSBjbGFzc05hbWU9XCJtZW51X2l0ZW1cIiBocmVmPXtyZWZlcmVuY2V9PlxyXG5cdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0PHBpY3R1cmU+XHJcblx0XHRcdFx0XHRcdDxzb3VyY2UgdHlwZT1cImltYWdlL3dlYnBcIiBzcmNTZXQ9e3dlYnB9IC8+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtwbmd9IGhlaWdodD1cIjE2cHhcIiB3aWR0aD1cIjE2cHhcIiBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHRcdFx0Jm5ic3A7XHJcblx0XHRcdFx0XHR7dGV4dH1cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvYT5cclxuXHRcdDwvbGk+XHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWVudUJ1dHRvbihcclxuXHRleHBhbmRlZDogYm9vbGVhbixcclxuXHR0b2dnbGVFeHBhbmRlZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+LFxyXG4pOiBKU1guRWxlbWVudCB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudV9idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVFeHBhbmRlZCghZXhwYW5kZWQpfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51X2J1dHRvbl9pbm5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudV9idXR0b25fbGluZVwiIC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51X2J1dHRvbl9saW5lXCIgLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uX2xpbmVcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcblxyXG50eXBlIE1lbnVQcm9wcyA9IENvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcImRpdlwiPiAmXHJcblx0UGFydGlhbDx7XHJcblx0XHRzdGFydEV4cGFuZGVkOiBib29sZWFuO1xyXG5cdH0+O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBSZWFjdEVsZW1lbnQsIEVsZW1lbnRUeXBlLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBrYXRleCBmcm9tIFwia2F0ZXhcIjtcclxuXHJcbmNvbnN0IFRlWDogUmVhY3QuRkM8VGVYUHJvcHM+ID0gKHtcclxuXHRjaGlsZHJlbixcclxuXHRtYXRoLFxyXG5cdGJsb2NrLFxyXG5cdGVycm9yQ29sb3IsXHJcblx0cmVuZGVyRXJyb3IsXHJcblx0c2V0dGluZ3MsXHJcblx0YXM6IGFzQ29tcG9uZW50LFxyXG5cdC4uLnByb3BzXHJcbn0pID0+IHtcclxuXHRjb25zdCBDb21wb25lbnQgPSBhc0NvbXBvbmVudCB8fCAoYmxvY2sgPyBcImRpdlwiIDogXCJzcGFuXCIpO1xyXG5cdGNvbnN0IGNvbnRlbnQgPSAoY2hpbGRyZW4gPz8gbWF0aCkgYXMgc3RyaW5nO1xyXG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8eyBpbm5lckh0bWw6IHN0cmluZyB9IHwgeyBlcnJvckVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudCB9Pih7XHJcblx0XHRpbm5lckh0bWw6IFwiXCIsXHJcblx0fSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBpbm5lckh0bWwgPSBrYXRleC5yZW5kZXJUb1N0cmluZyhjb250ZW50LCB7XHJcblx0XHRcdFx0ZGlzcGxheU1vZGU6ICEhYmxvY2ssXHJcblx0XHRcdFx0ZXJyb3JDb2xvcixcclxuXHRcdFx0XHR0aHJvd09uRXJyb3I6ICEhcmVuZGVyRXJyb3IsXHJcblx0XHRcdFx0Li4uc2V0dGluZ3MsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2V0U3RhdGUoeyBpbm5lckh0bWwgfSk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBrYXRleC5QYXJzZUVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yKSB7XHJcblx0XHRcdFx0aWYgKHJlbmRlckVycm9yKSB7XHJcblx0XHRcdFx0XHRzZXRTdGF0ZSh7IGVycm9yRWxlbWVudDogcmVuZGVyRXJyb3IoZXJyb3IpIH0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzZXRTdGF0ZSh7IGlubmVySHRtbDogZXJyb3IubWVzc2FnZSB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LCBbYmxvY2ssIGNvbnRlbnQsIGVycm9yQ29sb3IsIHJlbmRlckVycm9yLCBzZXR0aW5nc10pO1xyXG5cclxuXHRpZiAoXCJlcnJvckVsZW1lbnRcIiBpbiBzdGF0ZSkge1xyXG5cdFx0cmV0dXJuIHN0YXRlLmVycm9yRWxlbWVudDtcclxuXHR9XHJcblxyXG5cdHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdGF0ZS5pbm5lckh0bWwgfX0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKFRlWCk7XHJcblxyXG50eXBlIFRlWFByb3BzID0gQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFwiZGl2XCI+ICZcclxuXHRQYXJ0aWFsPHtcclxuXHRcdGFzOiBFbGVtZW50VHlwZTtcclxuXHRcdG1hdGg6IHN0cmluZyB8IG51bWJlcjtcclxuXHRcdGJsb2NrOiBib29sZWFuO1xyXG5cdFx0ZXJyb3JDb2xvcjogc3RyaW5nO1xyXG5cdFx0cmVuZGVyRXJyb3I6IChlcnJvcjoga2F0ZXguUGFyc2VFcnJvciB8IFR5cGVFcnJvcikgPT4gUmVhY3RFbGVtZW50O1xyXG5cdFx0c2V0dGluZ3M6IGthdGV4LkthdGV4T3B0aW9ucztcclxuXHR9PjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
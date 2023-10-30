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
  width: calc(100% - 20px);
  padding: 10px;
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
}`, "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/chomp.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"sass:math\";\r\n\r\n$page-margin: 15px;\r\n$border-radius: 10px;\r\n\r\nhtml,\r\nbody {\r\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\",\r\n\t\tsans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n\tmargin: 0;\r\n}\r\n\r\nbody {\r\n\tpadding: 1%;\r\n\tbackground-color: #d3eded;\r\n}\r\n\r\np {\r\n\tmargin-block-start: 1em;\r\n\tmargin-block-end: 1em;\r\n\tmargin-inline-start: 0px;\r\n\tmargin-inline-end: 0px;\r\n}\r\n\r\ndiv.p {\r\n\tmargin-block-start: 1em;\r\n\tmargin-block-end: 1em;\r\n\tmargin-inline-start: 0px;\r\n\tmargin-inline-end: 0px;\r\n}\r\n\r\ndiv.title {\r\n\tfont-size: 32pt;\r\n\ttext-align: center;\r\n\tfont-variant: small-caps;\r\n\tfont-weight: 250;\r\n\tmargin: $page-margin;\r\n\tmargin-top: 0;\r\n\tpadding-top: $page-margin;\r\n}\r\n\r\n.card {\r\n\tbackground-color: white;\r\n\tmin-height: 20px;\r\n\tborder-radius: $border-radius;\r\n\tmargin: $page-margin;\r\n\tmargin-bottom: 10px;\r\n\toverflow: hidden;\r\n\tfloat: none;\r\n}\r\n\r\n.inner_card {\r\n\twidth: calc(100% - 20px);\r\n\tpadding: 10px;\r\n\toverflow-x: auto;\r\n}\r\n\r\n// KaTeX override to make the font slightly smaller\r\n.katex {\r\n\ttext-rendering: auto;\r\n\tfont: normal 1.1em KaTeX_Main, Times New Roman, serif;\r\n\tline-height: 1.2;\r\n\ttext-indent: 0;\r\n}\r\n\r\n// If the math goes off the screen allow scrolling\r\n.katex-display {\r\n\toverflow-x: auto;\r\n\toverflow-y: hidden;\r\n\t// Need to add some padding so the scrollbar doesn't cover the text\r\n\tpadding-top: 0.5em;\r\n\tpadding-bottom: 0.5em;\r\n\tmargin-top: 0.5em;\r\n\tmargin-bottom: 0.5em;\r\n}\r\n\r\npicture > img {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.centered {\r\n\tdisplay: block;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n.fit_content {\r\n\twidth: fit-content;\r\n}\r\n\r\n.flex {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n/**\r\n * Menu Styling\r\n */\r\n$menu-collapsed-size: 50px;\r\n$menu-inner-side-margin: $menu-collapsed-size * 0.2;\r\n$menu-inner-top-margin: $menu-collapsed-size * 0.1;\r\n$menu-inner-button-height: $menu-collapsed-size - 2 * $menu-inner-top-margin;\r\n\r\n@mixin menu() {\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground-color: #fff;\r\n\tmargin: $page-margin;\r\n\tborder-radius: $border-radius;\r\n\tfloat: left;\r\n\tz-index: 100;\r\n}\r\n\r\n.menu_collapsed {\r\n\t@include menu();\r\n\twidth: $menu-collapsed-size;\r\n\theight: $menu-collapsed-size;\r\n\tcursor: pointer;\r\n}\r\n\r\n.menu_expanded {\r\n\t@include menu();\r\n\twidth: auto;\r\n\theight: auto;\r\n\tmargin-bottom: math.div($page-margin, 2);\r\n\toverflow-x: hidden;\r\n\r\n\t@media only screen and (max-aspect-ratio: 2/3) {\r\n\t\twidth: -webkit-fill-available;\r\n\t\twidth: -moz-available;\r\n\t}\r\n}\r\n\r\n.menu_button {\r\n\t@include menu();\r\n\twidth: $menu-collapsed-size;\r\n\theight: $menu-collapsed-size;\r\n\tmargin: 0;\r\n\tcursor: pointer;\r\n\tfloat: left;\r\n}\r\n\r\n.menu_button_inner {\r\n\tmargin: $menu-inner-side-margin;\r\n\tmargin-top: $menu-inner-top-margin;\r\n\tmargin-bottom: $menu-inner-top-margin;\r\n\twidth: $menu-collapsed-size - 2 * $menu-inner-side-margin;\r\n\tborder-top-color: #fff;\r\n\tborder-top-style: solid;\r\n\tborder-top-width: math.div($menu-inner-button-height, 7);\r\n\theight: math.div($menu-inner-button-height * 6, 7);\r\n}\r\n\r\n.menu_button_line {\r\n\twidth: 100%;\r\n\theight: math.div($menu-inner-button-height, 7);\r\n\tmargin-bottom: math.div($menu-inner-button-height, 7);\r\n\tbackground-color: black;\r\n}\r\n\r\na.menu_item {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n\r\n\t&:hover {\r\n\t\tfont-weight: bold;\r\n\t}\r\n}\r\n\r\nul.menu_list {\r\n\tlist-style-type: none;\r\n\tpadding: 0;\r\n\tmargin-bottom: $menu-inner-side-margin;\r\n\ttext-align: center;\r\n\twidth: 8em;\r\n\t@media only screen and (min-aspect-ratio: 2/3) {\r\n\t\tmargin-top: $menu-collapsed-size + math.div($menu-inner-button-height, 7);\r\n\t}\r\n\r\n\t& > li > a > p {\r\n\t\tmargin: 16px 0;\r\n\t}\r\n}\r\n\r\nul.math_list > li {\r\n\tpadding-bottom: 0.5em;\r\n\tlist-style-type: circle;\r\n}\r\n\r\n.inline_code {\r\n\tfont-family: \"Courier New\", monospace;\r\n\tpadding: 1px 1px;\r\n}\r\n\r\ntextarea.codeblock {\r\n\tfont-family: \"Courier New\", monospace;\r\n\twidth: 100%;\r\n\tresize: none;\r\n}\r\n\r\nspan {\r\n\t&.red {\r\n\t\tcolor: red;\r\n\t}\r\n\t&.blue {\r\n\t\tcolor: blue;\r\n\t}\r\n}\r\n\r\n.hidden {\r\n\tvisibility: hidden;\r\n}\r\n\r\n.command_table {\r\n\tborder-collapse: collapse;\r\n\twidth: 100%;\r\n\r\n\tth,\r\n\ttd {\r\n\t\tborder-style: solid;\r\n\t\tborder-width: thin;\r\n\t}\r\n\r\n\tth {\r\n\t\tfont-weight: normal;\r\n\t\tpadding: 10px;\r\n\t\tbackground-color: lightgray;\r\n\t}\r\n\r\n\ttd {\r\n\t\tpadding: 0.5em;\r\n\t}\r\n}\r\n\r\n.subsection {\r\n\tfont-size: 1em;\r\n}\r\n\r\n.nodisp {\r\n\tdisplay: none;\r\n}\r\n\r\n.upsidedown {\r\n\t-webkit-transform: scaleY(-1);\r\n\ttransform: scaleY(-1);\r\n}\r\n\r\n.float_left {\r\n\tfloat: left;\r\n}\r\n\r\ncanvas.full_canvas {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.nopadding {\r\n\tpadding: 0;\r\n}\r\n\r\n.list_no_style {\r\n\tlist-style-type: none;\r\n}\r\n","@import \"./index.scss\";\r\n\r\ntable.chocolate {\r\n\tbackground-color: black;\r\n\tborder-collapse: separate;\r\n\tborder: 2px solid black;\r\n\tmargin: auto;\r\n\twidth: auto;\r\n\tborder-spacing: 0;\r\n\r\n\ttr {\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\ttd {\r\n\t\twidth: 5em; // 75px;\r\n\t\theight: 5em; // 75px;\r\n\t\tborder: 0;\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t}\r\n}\r\n\r\n.chomp_square {\r\n\tbackground: {\r\n\t\tposition: 0px 0px;\r\n\t\tsize: 100% 100%;\r\n\t\trepeat: no-repeat;\r\n\t}\r\n\t&:hover {\r\n\t\tcursor: pointer;\r\n\t}\r\n}\r\n\r\ndiv.table_container {\r\n\twidth: 100%;\r\n\toverflow-x: auto;\r\n}\r\n\r\ndiv.loader {\r\n\tborder-radius: 50%;\r\n\twidth: 3em;\r\n\theight: 3em;\r\n\tborder-top: 0.3em solid cornflowerblue;\r\n\tanimation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n\t0% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvbXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK0dBQStHLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxhQUFhLFdBQVcsVUFBVSxhQUFhLGNBQWMsWUFBWSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksY0FBYyxlQUFlLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsYUFBYSxhQUFhLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxX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QXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7SUFDN0IsdUJBQXVCLEVBQUUsSUFBSTtJQUM3Qix1QkFBdUIsRUFBRSxJQUFJO0lBQzdCLHVCQUF1QixFQUFFLElBQUk7Q0FDN0IsQ0FBQzs7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SyxJQUFFLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO0FBQ3ZGLENBQUMsQ0FBQztBQUVGLHFCQUFlLGdCQUFJLEVBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2hvbXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Nob2NvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Nob2NvLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jaG9jb2Jhci5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb21wYXNzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NvbXBhc3Mud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hlYXJ0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hlYXJ0LndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ob21lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hvbWUud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL211c2hyb29tLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL211c2hyb29tLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zYW5zMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nob21wLnNjc3M/N2VjOCIsIndlYnBhY2s6Ly8vLi9zcmMvY2hvbXAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Nob21wLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZVgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLFxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNlZGVkO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG5kaXYucCB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuZGl2LnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMnB0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcbiAgZm9udC13ZWlnaHQ6IDI1MDtcbiAgbWFyZ2luOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbG9hdDogbm9uZTtcbn1cblxuLmlubmVyX2NhcmQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5rYXRleCB7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICBmb250OiBub3JtYWwgMS4xZW0gS2FUZVhfTWFpbiwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1pbmRlbnQ6IDA7XG59XG5cbi5rYXRleC1kaXNwbGF5IHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG5waWN0dXJlID4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY2VudGVyZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZml0X2NvbnRlbnQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4vKipcbiAqIE1lbnUgU3R5bGluZ1xuICovXG4ubWVudV9jb2xsYXBzZWQge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudV9leHBhbmRlZCB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA3LjVweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIC5tZW51X2V4cGFuZGVkIHtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICB3aWR0aDogLW1vei1hdmFpbGFibGU7XG4gIH1cbn1cblxuLm1lbnVfYnV0dG9uIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1lbnVfYnV0dG9uX2lubmVyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLXdpZHRoOiA1LjcxNDI4NTcxNDNweDtcbiAgaGVpZ2h0OiAzNC4yODU3MTQyODU3cHg7XG59XG5cbi5tZW51X2J1dHRvbl9saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNS43MTQyODU3MTQzcHg7XG4gIG1hcmdpbi1ib3R0b206IDUuNzE0Mjg1NzE0M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuYS5tZW51X2l0ZW0ge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmEubWVudV9pdGVtOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnVsLm1lbnVfbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOGVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIHVsLm1lbnVfbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogNTUuNzE0Mjg1NzE0M3B4O1xuICB9XG59XG51bC5tZW51X2xpc3QgPiBsaSA+IGEgPiBwIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbnVsLm1hdGhfbGlzdCA+IGxpIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbn1cblxuLmlubGluZV9jb2RlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBwYWRkaW5nOiAxcHggMXB4O1xufVxuXG50ZXh0YXJlYS5jb2RlYmxvY2sge1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG59XG5cbnNwYW4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cbnNwYW4uYmx1ZSB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY29tbWFuZF90YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbW1hbmRfdGFibGUgdGgsXG4uY29tbWFuZF90YWJsZSB0ZCB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbn1cbi5jb21tYW5kX3RhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuLmNvbW1hbmRfdGFibGUgdGQge1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLnN1YnNlY3Rpb24ge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLm5vZGlzcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi51cHNpZGVkb3duIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbn1cblxuLmZsb2F0X2xlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuY2FudmFzLmZ1bGxfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5saXN0X25vX3N0eWxlIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG50YWJsZS5jaG9jb2xhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxudGFibGUuY2hvY29sYXRlIHRyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbnRhYmxlLmNob2NvbGF0ZSB0ZCB7XG4gIHdpZHRoOiA1ZW07XG4gIGhlaWdodDogNWVtO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNob21wX3NxdWFyZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmNob21wX3NxdWFyZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LnRhYmxlX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG5kaXYubG9hZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogM2VtO1xuICBoZWlnaHQ6IDNlbTtcbiAgYm9yZGVyLXRvcDogMC4zZW0gc29saWQgY29ybmZsb3dlcmJsdWU7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nob21wLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7O0VBRUMsa01BQUE7RUFFQSxTQUFBO0FDTEQ7O0FEUUE7RUFDQyxXQUFBO0VBQ0EseUJBQUE7QUNM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WUFBQTtBQ1REOztBRFlBO0VBQ0MsVUFBQTtBQ1REOztBRFlBO0VBQ0MscUJBQUE7QUNURDs7QUEzUEE7RUFDQyx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBOFBEO0FBNVBDO0VBQ0MsYUFBQTtBQThQRjtBQTNQQztFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBNlBGOztBQXpQQTtFQUVFLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQTJQRjtBQXpQQztFQUNDLGVBQUE7QUEyUEY7O0FBdlBBO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0FBMFBEOztBQXZQQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0FBMFBEOztBQXZQQTtFQUNDO0lBQ0MsdUJBQUE7RUEwUEE7RUF4UEQ7SUFDQyx5QkFBQTtFQTBQQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuJHBhZ2UtbWFyZ2luOiAxNXB4O1xcclxcbiRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsXFxyXFxuXFx0XFx0c2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdHBhZGRpbmc6IDElO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNkM2VkZWQ7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcblxcdG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcclxcblxcdG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXHJcXG5cXHRtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XFxyXFxuXFx0bWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnAge1xcclxcblxcdG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcclxcblxcdG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXHJcXG5cXHRtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XFxyXFxuXFx0bWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDMycHQ7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXHJcXG5cXHRmb250LXdlaWdodDogMjUwO1xcclxcblxcdG1hcmdpbjogJHBhZ2UtbWFyZ2luO1xcclxcblxcdG1hcmdpbi10b3A6IDA7XFxyXFxuXFx0cGFkZGluZy10b3A6ICRwYWdlLW1hcmdpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdG1pbi1oZWlnaHQ6IDIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuXFx0bWFyZ2luOiAkcGFnZS1tYXJnaW47XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGZsb2F0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXJfY2FyZCB7XFxyXFxuXFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLy8gS2FUZVggb3ZlcnJpZGUgdG8gbWFrZSB0aGUgZm9udCBzbGlnaHRseSBzbWFsbGVyXFxyXFxuLmthdGV4IHtcXHJcXG5cXHR0ZXh0LXJlbmRlcmluZzogYXV0bztcXHJcXG5cXHRmb250OiBub3JtYWwgMS4xZW0gS2FUZVhfTWFpbiwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS4yO1xcclxcblxcdHRleHQtaW5kZW50OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBJZiB0aGUgbWF0aCBnb2VzIG9mZiB0aGUgc2NyZWVuIGFsbG93IHNjcm9sbGluZ1xcclxcbi5rYXRleC1kaXNwbGF5IHtcXHJcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcclxcblxcdG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG5cXHQvLyBOZWVkIHRvIGFkZCBzb21lIHBhZGRpbmcgc28gdGhlIHNjcm9sbGJhciBkb2Vzbid0IGNvdmVyIHRoZSB0ZXh0XFxyXFxuXFx0cGFkZGluZy10b3A6IDAuNWVtO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAwLjVlbTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxucGljdHVyZSA+IGltZyB7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyZWQge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maXRfY29udGVudCB7XFxyXFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIE1lbnUgU3R5bGluZ1xcclxcbiAqL1xcclxcbiRtZW51LWNvbGxhcHNlZC1zaXplOiA1MHB4O1xcclxcbiRtZW51LWlubmVyLXNpZGUtbWFyZ2luOiAkbWVudS1jb2xsYXBzZWQtc2l6ZSAqIDAuMjtcXHJcXG4kbWVudS1pbm5lci10b3AtbWFyZ2luOiAkbWVudS1jb2xsYXBzZWQtc2l6ZSAqIDAuMTtcXHJcXG4kbWVudS1pbm5lci1idXR0b24taGVpZ2h0OiAkbWVudS1jb2xsYXBzZWQtc2l6ZSAtIDIgKiAkbWVudS1pbm5lci10b3AtbWFyZ2luO1xcclxcblxcclxcbkBtaXhpbiBtZW51KCkge1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0bWFyZ2luOiAkcGFnZS1tYXJnaW47XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxuXFx0ei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9jb2xsYXBzZWQge1xcclxcblxcdEBpbmNsdWRlIG1lbnUoKTtcXHJcXG5cXHR3aWR0aDogJG1lbnUtY29sbGFwc2VkLXNpemU7XFxyXFxuXFx0aGVpZ2h0OiAkbWVudS1jb2xsYXBzZWQtc2l6ZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2V4cGFuZGVkIHtcXHJcXG5cXHRAaW5jbHVkZSBtZW51KCk7XFxyXFxuXFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdG1hcmdpbi1ib3R0b206IG1hdGguZGl2KCRwYWdlLW1hcmdpbiwgMik7XFxyXFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDIvMykge1xcclxcblxcdFxcdHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcclxcblxcdFxcdHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5tZW51X2J1dHRvbiB7XFxyXFxuXFx0QGluY2x1ZGUgbWVudSgpO1xcclxcblxcdHdpZHRoOiAkbWVudS1jb2xsYXBzZWQtc2l6ZTtcXHJcXG5cXHRoZWlnaHQ6ICRtZW51LWNvbGxhcHNlZC1zaXplO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2J1dHRvbl9pbm5lciB7XFxyXFxuXFx0bWFyZ2luOiAkbWVudS1pbm5lci1zaWRlLW1hcmdpbjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAkbWVudS1pbm5lci10b3AtbWFyZ2luO1xcclxcblxcdG1hcmdpbi1ib3R0b206ICRtZW51LWlubmVyLXRvcC1tYXJnaW47XFxyXFxuXFx0d2lkdGg6ICRtZW51LWNvbGxhcHNlZC1zaXplIC0gMiAqICRtZW51LWlubmVyLXNpZGUtbWFyZ2luO1xcclxcblxcdGJvcmRlci10b3AtY29sb3I6ICNmZmY7XFxyXFxuXFx0Ym9yZGVyLXRvcC1zdHlsZTogc29saWQ7XFxyXFxuXFx0Ym9yZGVyLXRvcC13aWR0aDogbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCwgNyk7XFxyXFxuXFx0aGVpZ2h0OiBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0ICogNiwgNyk7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2J1dHRvbl9saW5lIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQsIDcpO1xcclxcblxcdG1hcmdpbi1ib3R0b206IG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQsIDcpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5hLm1lbnVfaXRlbSB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG5cXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbnVsLm1lbnVfbGlzdCB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogJG1lbnUtaW5uZXItc2lkZS1tYXJnaW47XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHdpZHRoOiA4ZW07XFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMi8zKSB7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogJG1lbnUtY29sbGFwc2VkLXNpemUgKyBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0LCA3KTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0JiA+IGxpID4gYSA+IHAge1xcclxcblxcdFxcdG1hcmdpbjogMTZweCAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxudWwubWF0aF9saXN0ID4gbGkge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZV9jb2RlIHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcclxcblxcdHBhZGRpbmc6IDFweCAxcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhLmNvZGVibG9jayB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRyZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcblxcdCYucmVkIHtcXHJcXG5cXHRcXHRjb2xvcjogcmVkO1xcclxcblxcdH1cXHJcXG5cXHQmLmJsdWUge1xcclxcblxcdFxcdGNvbG9yOiBibHVlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWFuZF90YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG5cXHR0aCxcXHJcXG5cXHR0ZCB7XFxyXFxuXFx0XFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG5cXHRcXHRib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHRoIHtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcblxcdFxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHR0ZCB7XFxyXFxuXFx0XFx0cGFkZGluZzogMC41ZW07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uc3Vic2VjdGlvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5ub2Rpc3Age1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi51cHNpZGVkb3duIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XFxyXFxufVxcclxcblxcclxcbi5mbG9hdF9sZWZ0IHtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuY2FudmFzLmZ1bGxfY2FudmFzIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5ub3BhZGRpbmcge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0X25vX3N0eWxlIHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi9pbmRleC5zY3NzXFxcIjtcXHJcXG5cXHJcXG50YWJsZS5jaG9jb2xhdGUge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuXFx0bWFyZ2luOiBhdXRvO1xcclxcblxcdHdpZHRoOiBhdXRvO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcblxcclxcblxcdHRyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHR0ZCB7XFxyXFxuXFx0XFx0d2lkdGg6IDVlbTsgLy8gNzVweDtcXHJcXG5cXHRcXHRoZWlnaHQ6IDVlbTsgLy8gNzVweDtcXHJcXG5cXHRcXHRib3JkZXI6IDA7XFxyXFxuXFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uY2hvbXBfc3F1YXJlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB7XFxyXFxuXFx0XFx0cG9zaXRpb246IDBweCAwcHg7XFxyXFxuXFx0XFx0c2l6ZTogMTAwJSAxMDAlO1xcclxcblxcdFxcdHJlcGVhdDogbm8tcmVwZWF0O1xcclxcblxcdH1cXHJcXG5cXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5kaXYudGFibGVfY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYubG9hZGVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0d2lkdGg6IDNlbTtcXHJcXG5cXHRoZWlnaHQ6IDNlbTtcXHJcXG5cXHRib3JkZXItdG9wOiAwLjNlbSBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcXHJcXG5cXHRhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcclxcblxcdDAlIHtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG5cXHR9XFxyXFxuXFx0MTAwJSB7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvY2hvY28ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2Nob2NvLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvY2hvY29iYXIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2NvbXBhc3MucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2NvbXBhc3Mud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9oZWFydC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaGVhcnQud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9ob21lLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9ob21lLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvbXVzaHJvb20ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL211c2hyb29tLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvc2FuczEucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzJdIS4vY2hvbXAuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMl0hLi9jaG9tcC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IENob21wIGZyb20gXCIuL2NvbXBvbmVudHMvQ2hvbXBcIjtcclxuaW1wb3J0IFwiLi9jaG9tcC5zY3NzXCI7XHJcblxyXG5yZW5kZXIoPENob21wIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIikgYXMgSFRNTEVsZW1lbnQpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDYXJkOiBSZWFjdC5GQzxDb21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJkaXZcIj4+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbm5lcl9jYXJkXCI+e2NoaWxkcmVufTwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCBUZVggZnJvbSBcIi4vVGVYXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNob2NvSnBnIGZyb20gXCIuLi9pbWFnZXMvY2hvY29iYXIuanBnXCI7XHJcbmltcG9ydCBzYW5zUG5nIGZyb20gXCIuLi9pbWFnZXMvc2FuczEucG5nXCI7XHJcblxyXG5jb25zdCBNQVhfQ09MUyA9IDEwO1xyXG5jb25zdCBNQVhfUk9XUyA9IDEyO1xyXG5jb25zdCBOVUxMX01TRyA9IFwiLVwiO1xyXG5cclxubGV0IGNhbk1vdmUgPSB0cnVlO1xyXG5jb25zdCBtZXNzYWdlU3BhY2UgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTFBhcmFncmFwaEVsZW1lbnQ+KCk7XHJcbmNvbnN0IGxvYWRpbmdEaXYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG5jb25zdCBDaG9tcDogUmVhY3QuRkMgPSAoKTogSlNYLkVsZW1lbnQgPT4gKFxyXG5cdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdDxNZW51IC8+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q2hvbXA8L2Rpdj5cclxuXHRcdDxDYXJkPlxyXG5cdFx0XHRDaG9tcCBpcyBhIHR3by1wbGF5ZXIgZ2FtZSBhYm91dCBlYXRpbmcgY2hvY29sYXRlISBUaGUgcnVsZXMgYXJlIHNpbXBsZTogVG8gcGxheSwgdHdvIHBlb3BsZSAob3JcclxuXHRcdFx0aW4gdGhpcyBjYXNlLCBhIHBlcnNvbiBhbmQgYSBjb21wdXRlcikgdGFrZSB0dXJucyByZW1vdmluZyBhbnkgc3F1YXJlLCBwbHVzIGFsbCBzcXVhcmVzIGFib3ZlIGFuZFxyXG5cdFx0XHR0byB0aGUgcmlnaHQuIFdoaWNoZXZlciBwbGF5ZXIgdGFrZXMgdGhlIGJvdHRvbSBsZWZ0IHNxdWFyZSBsb3NlcywgYW5kIHRoZSBvdGhlciBwbGF5ZXIgd2lucy5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0U2luY2UgdGhpcyBnYW1lIGlzIDxhIGhyZWY9XCIvL21hdGh3b3JsZC53b2xmcmFtLmNvbS9GaW5pdGVHYW1lLmh0bWxcIj5maW5pdGU8L2E+LHtcIiBcIn1cclxuXHRcdFx0XHQ8YSBocmVmPVwiLy93d3cud2hhdGdhbWVzYXJlLmNvbS9kZXRlcm1pbmlzbS5odG1sXCI+ZGV0ZXJtaW5pc3RpYzwvYT4sIGFuZHtcIiBcIn1cclxuXHRcdFx0XHQ8YSBocmVmPVwiLy9tYXRod29ybGQud29sZnJhbS5jb20vSW1wYXJ0aWFsR2FtZS5odG1sXCI+aW1wYXJ0aWFsPC9hPiwgd2l0aCBubyBkcmF3cywgd2V7XCIgXCJ9XHJcblx0XHRcdFx0PGEgaHJlZj1cIi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1plcm1lbG8lMjdzX3RoZW9yZW1fKGdhbWVfdGhlb3J5KVwiPmtub3c8L2E+IHRoYXQgb25lIG9mIHRoZVxyXG5cdFx0XHRcdHBsYXllcnMgYWx3YXlzIGhhcyBhIHdpbm5pbmcgc3RyYXRlZ3kgKGNhbiB5b3UgcHJvdmUgd2hpY2ggcGxheWVyIGl0IGlzPykuIEhvd2V2ZXIsIHRoaXNcclxuXHRcdFx0XHRzdHJhdGVneSBpcyBub3Qga25vd24gaW4gZ2VuZXJhbCAoZm9yIGFyYml0cmFyaWx5IGxhcmdlIGJvYXJkcyksIGFuZCBvbmx5IHJlY2VudGx5IGhhdmVcclxuXHRcdFx0XHRyZXN1bHRzIGJlZW4gZm91bmQgZm9yIDxUZVg+M1xcdGltZXMgbjwvVGVYPiBib2FyZHMuXHJcblx0XHRcdDwvcD5cclxuXHRcdDwvQ2FyZD5cclxuXHRcdDxDaG9tcENhcmQgLz5cclxuXHRcdDxDYXJkPlxyXG5cdFx0XHRGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBDaG9tcCwgc2VlOlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPVwibWF0aF9saXN0XCI+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PGEgaHJlZj1cIi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Nob21wI0dlbmVyYWxpc2F0aW9uc19vZl9DaG9tcFwiPkdlbmVyYWxpemF0aW9uczwvYT5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvL3hvcnNoYW1tZXIuY29tLzIwMDgvMDkvMjkvcGxheWluZy1nYW1lcy1pbi10aGUtdHJhbnNmaW5pdGUtYW4taW50cm9kdWN0aW9uLXRvLW9yZGluYWwtY2hvbXAvXCI+XHJcblx0XHRcdFx0XHRcdE9yZGluYWwgY2hvbXBcclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvL3d3dy53aW4udHVlLm5sL35hZWIvZ2FtZXMvY2hvbXAuaHRtbFwiPkludGVyZXN0aW5nIHZhcmlhbnRzLCBvcGVuIHF1ZXN0aW9uczwvYT5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvL3d3dy5rdXJpbXMua3lvdG8tdS5hYy5qcC9FTUlTL2pvdXJuYWxzL0lOVEVHRVJTL3BhcGVycy9mZzcvZmc3LnBkZlwiPlxyXG5cdFx0XHRcdFx0XHRNb3JlIHZhcmlhbnRzLCB3b3JrIG9uIDMgw5cgbiBib2FyZHNcclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvL2NpdGVzZWVyeC5pc3QucHN1LmVkdS92aWV3ZG9jL2Rvd25sb2FkP2RvaT0xMC4xLjEuNzE4Ljg0OTMmcmVwPXJlcDEmdHlwZT1wZGZcIj5cclxuXHRcdFx0XHRcdFx0R2VuZXJhbCBwb3NldCBnYW1lcyBhbmQgMyDDlyBuIGNob21wXHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvQ2FyZD5cclxuXHQ8L1JlYWN0LkZyYWdtZW50PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hvbXA7XHJcblxyXG4vKipcclxuICogQnVpbGRzIHRoZSBDYXJkIGNvbnRhaW5pbmcgdGhlIENob21wIGJvYXJkXHJcbiAqIEByZXR1cm5zIFRoZSBDYXJkIHdpdGggdGhlIGJvYXJkLCBzZWxlY3Rpb24gYnV0dG9ucywgZXRjLlxyXG4gKi9cclxuY29uc3QgQ2hvbXBDYXJkOiBSZWFjdC5GQyA9IGZ1bmN0aW9uICgpOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3QgW251bVJvd3MsIHNldE51bVJvd3NdID0gdXNlU3RhdGUoMyk7XHJcblx0Y29uc3QgW251bUNvbHMsIHNldE51bUNvbHNdID0gdXNlU3RhdGUoNCk7XHJcblx0Y29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZTxudW1iZXJbXT4obmV3IEFycmF5KG51bUNvbHMpLmZpbGwobnVtUm93cykpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcmQ+XHJcblx0XHRcdDxwPldoYXQgc2l6ZSBjaG9jb2xhdGUgYmFyIHdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgb24/PC9wPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XHJcblx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0aWQ9XCJjb2xTZWxlY3RcIlxyXG5cdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtudW1Db2xzfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBuZXdDb2xzID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0cmVzZXRCb2FyZChudW1Sb3dzLCBuZXdDb2xzLCBzZXROdW1Sb3dzLCBzZXROdW1Db2xzLCBzZXRCb2FyZCk7XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHtidWlsZE9wdGlvbnMoTUFYX0NPTFMpfVxyXG5cdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdDxUZVg+XFx0aW1lczwvVGVYPlxyXG5cdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdGlkPVwicm93U2VsZWN0XCJcclxuXHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17bnVtUm93c31cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgbmV3Um93cyA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdHJlc2V0Qm9hcmQobmV3Um93cywgbnVtQ29scywgc2V0TnVtUm93cywgc2V0TnVtQ29scywgc2V0Qm9hcmQpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7YnVpbGRPcHRpb25zKE1BWF9ST1dTKX1cclxuXHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHQmbmJzcDsmbmJzcDtcclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJvd3MgPSBwYXJzZUludChcclxuXHRcdFx0XHRcdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3dTZWxlY3RcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQpPy52YWx1ZSA/PyBcIjJcIixcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgY29scyA9IHBhcnNlSW50KFxyXG5cdFx0XHRcdFx0XHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbFNlbGVjdFwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudCk/LnZhbHVlID8/IFwiMlwiLFxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRyZXNldEJvYXJkKHJvd3MsIGNvbHMsIHNldE51bVJvd3MsIHNldE51bUNvbHMsIHNldEJvYXJkKTtcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0R28hXHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8cCAvPlxyXG5cdFx0XHR7YnVpbGRDaG9jb2xhdGVCYXIoYm9hcmQsIHNldEJvYXJkLCBudW1Sb3dzLCBudW1Db2xzKX1cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZCBwXCI+XHJcblx0XHRcdFx0PGRpdiByZWY9e2xvYWRpbmdEaXZ9IGNsYXNzTmFtZT1cImxvYWRlciBjZW50ZXJlZCBoaWRkZW5cIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHAgY2xhc3NOYW1lPVwiaGlkZGVuXCIgcmVmPXttZXNzYWdlU3BhY2V9PlxyXG5cdFx0XHRcdHtOVUxMX01TR31cclxuXHRcdFx0PC9wPlxyXG5cdFx0PC9DYXJkPlxyXG5cdCk7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVzZXRzIHRoZSBib2FyZCB0byBpdHMgY29tcGxldGVseSB1bi1lYXRlbiBzdGF0ZVxyXG4gKiBAcGFyYW0gcm93cyBOdW1iZXIgb2Ygcm93c1xyXG4gKiBAcGFyYW0gY29scyBOdW1iZXIgb2YgY29sdW1uc1xyXG4gKiBAcGFyYW0gc2V0TnVtUm93cyBGdW5jdGlvbiB0byBzZXQgdGhlIG51bWJlciBvZiByb3dzXHJcbiAqIEBwYXJhbSBzZXROdW1Db2xzIEZ1bmN0aW9uIHRvIHNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnNcclxuICogQHBhcmFtIHNldEJvYXJkIEZ1bmN0aW9uIHRvIHNldCB0aGUgYm9hcmQgb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiByZXNldEJvYXJkKFxyXG5cdHJvd3M6IG51bWJlcixcclxuXHRjb2xzOiBudW1iZXIsXHJcblx0c2V0TnVtUm93czogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sXHJcblx0c2V0TnVtQ29sczogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPj4sXHJcblx0c2V0Qm9hcmQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcltdPj4sXHJcbik6IHZvaWQge1xyXG5cdHNldE51bVJvd3Mocm93cyk7XHJcblx0c2V0TnVtQ29scyhjb2xzKTtcclxuXHRzZXRCb2FyZChuZXcgQXJyYXkoY29scykuZmlsbChyb3dzKSk7XHJcblx0c2V0TWVzc2FnZShOVUxMX01TRyk7XHJcblx0dG9nZ2xlTG9hZGluZ0RpdihmYWxzZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCdWlsZCB0aGUgZHJvcGRvd24gbGlzdCBmb3IgY2hvb3NpbmcgdGhlIG51bWJlciBvZiByb3dzIG9yIGNvbHVtbnNcclxuICogQHBhcmFtIG1heFNpemUgTWF4aW11bSBzZWxlY3RhYmxlIG9wdGlvblxyXG4gKiBAcmV0dXJucyBUaGUgPG9wdGlvbj5zIHRvIGdvIGluc2lkZSB0aGUgPHNlbGVjdD4gbm9kZVxyXG4gKi9cclxuZnVuY3Rpb24gYnVpbGRPcHRpb25zKG1heFNpemU6IG51bWJlcik6IEpTWC5FbGVtZW50IHtcclxuXHRjb25zdCBjaGlsZHJlbjogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cdGZvciAobGV0IGkgPSAyOyBpIDw9IG1heFNpemU7IGkrKykge1xyXG5cdFx0Y2hpbGRyZW4ucHVzaChcclxuXHRcdFx0PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpfT5cclxuXHRcdFx0XHR7aX1cclxuXHRcdFx0PC9vcHRpb24+LFxyXG5cdFx0KTtcclxuXHR9XHJcblx0cmV0dXJuIDxSZWFjdC5GcmFnbWVudD57Li4uY2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCdWlsZHMgdGhlIGNob2NvbGF0ZSBiYXIgdGFibGUgdG8gYmUgdXNlZCBhcyBnYW1lIGJvYXJkXHJcbiAqIEBwYXJhbSBib2FyZCBUaGUgYm9hcmQgYXJyYXk6IFthXzEsIGFfMiwgLi4uLCBhX2NdLCB3aGVyZSB0aGVyZSBhcmUgYyBjb2x1bW5zIHRvdGFsIGFuZCBhX2kgY2hvY29sYXRlIHNxdWFyZXMgaW4gY29sdW1uIGlcclxuICogQHBhcmFtIHNldEJvYXJkIEZ1bmN0aW9uIHRvIHNldCB0aGUgYm9hcmQgb2JqZWN0XHJcbiAqIEBwYXJhbSBudW1Sb3dzIE51bWJlciBvZiByb3dzXHJcbiAqIEBwYXJhbSBudW1Db2xzIE51bWJlciBvZiBjb2x1bW5zXHJcbiAqIEByZXR1cm5zIFRoZSAocG9zc2libHkgcGFydGx5LWVhdGVuKSBjaG9jb2xhdGUgYmFyIPCfmItcclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkQ2hvY29sYXRlQmFyKFxyXG5cdGJvYXJkOiBudW1iZXJbXSxcclxuXHRzZXRCb2FyZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyW10+PixcclxuXHRudW1Sb3dzOiBudW1iZXIsXHJcblx0bnVtQ29sczogbnVtYmVyLFxyXG4pOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3Qgcm93TGlzdDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cdGZvciAobGV0IHJvdyA9IG51bVJvd3M7IHJvdyA+PSAxOyByb3ctLSkge1xyXG5cdFx0Y29uc3QgY29sTGlzdDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgY29sID0gMTsgY29sIDw9IG51bUNvbHM7IGNvbCsrKSB7XHJcblx0XHRcdGlmIChib2FyZFtjb2wgLSAxXSA8IHJvdykge1xyXG5cdFx0XHRcdGNvbExpc3QucHVzaCg8dGQga2V5PXtjb2x9PjwvdGQ+KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb2xMaXN0LnB1c2goXHJcblx0XHRcdFx0XHQ8dGRcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHBsYXllck1vdmUoYm9hcmQsIHNldEJvYXJkLCBjb2wsIHJvdyk7XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdGtleT17Y29sfVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjaG9tcF9zcXVhcmVcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHRcdFx0XHRcdChyb3cgPT09IDEgJiYgY29sID09PSAxID8gXCJ1cmwoXCIgKyBzYW5zUG5nICsgXCIpLFwiIDogXCJcIikgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XCJ1cmwoXCIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hvY29KcGcgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XCIpXCIsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+PC90ZD4sXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cm93TGlzdC5wdXNoKDx0ciBrZXk9e3Jvd30+ey4uLmNvbExpc3R9PC90cj4pO1xyXG5cdH1cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWJsZV9jb250YWluZXJcIj5cclxuXHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cImNob2NvbGF0ZVwiPlxyXG5cdFx0XHRcdDx0Ym9keT57Li4ucm93TGlzdH08L3Rib2R5PlxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGxlZCB3aGVuIHRoZSBwbGF5ZXIgY2xpY2tzIGEgY2hvY29sYXRlIHNxdWFyZVxyXG4gKiBAcGFyYW0gYm9hcmQgVGhlIGJvYXJkIGFycmF5XHJcbiAqIEBwYXJhbSBzZXRCb2FyZCBGdW5jdGlvbiB0byBzZXQgdGhlIGJvYXJkIG9iamVjdFxyXG4gKiBAcGFyYW0gYyBDbGlja2VkIGNvbHVtblxyXG4gKiBAcGFyYW0gciBDbGlja2VkIHJvd1xyXG4gKi9cclxuZnVuY3Rpb24gcGxheWVyTW92ZShcclxuXHRib2FyZDogbnVtYmVyW10sXHJcblx0c2V0Qm9hcmQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcltdPj4sXHJcblx0YzogbnVtYmVyLFxyXG5cdHI6IG51bWJlcixcclxuKTogdm9pZCB7XHJcblx0aWYgKGNhbk1vdmUpIHtcclxuXHRcdGNhbk1vdmUgPSBmYWxzZTtcclxuXHRcdGJvYXJkID0gbW9uY2goYm9hcmQsIGMsIHIpO1xyXG5cdFx0c2V0Qm9hcmQoYm9hcmQpO1xyXG5cclxuXHRcdGlmIChpc0dhbWVPdmVyKGJvYXJkKSkge1xyXG5cdFx0XHRzZXRNZXNzYWdlKFwiVGhlIGNvbXB1dGVyIHdvbiEgUmF0cyFcIik7XHJcblx0XHRcdGNhbk1vdmUgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dG9nZ2xlTG9hZGluZ0Rpdih0cnVlKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiBjcHVNb3ZlKGJvYXJkLCBzZXRCb2FyZCksIDEwMCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogTW9uY2hlcyBvZmYgdGhlIHRvcC1yaWdodCBwb3J0aW9uIG9mIHRoZSBjaG9jb2xhdGUgYmFyIGFuZCByZXR1cm5zIHRoZSBuZXcgY2hvY29sYXRlIGJhclxyXG4gKiBAcGFyYW0gYm9hcmQgVGhlIGJvYXJkIGFycmF5XHJcbiAqIEBwYXJhbSBjIENvbHVtbiB0byBzdGFydCB0aGUgbW9uY2ggYXRcclxuICogQHBhcmFtIHIgUm93IHRvIHN0YXJ0IHRoZSBtb25jaCBhdFxyXG4gKiBAcmV0dXJucyBUaGUgbmV3IGJvYXJkLCBwb3N0LW1vbmNoXHJcbiAqL1xyXG5mdW5jdGlvbiBtb25jaChib2FyZDogbnVtYmVyW10sIGM6IG51bWJlciwgcjogbnVtYmVyKTogbnVtYmVyW10ge1xyXG5cdGNvbnN0IG5ld0JvYXJkID0gYm9hcmQuc2xpY2UoKTtcclxuXHRmb3IgKGxldCBjb2wgPSBjIC0gMTsgY29sIDwgbmV3Qm9hcmQubGVuZ3RoOyBjb2wrKykge1xyXG5cdFx0bmV3Qm9hcmRbY29sXSA9IE1hdGgubWluKHIgLSAxLCBuZXdCb2FyZFtjb2xdKTtcclxuXHR9XHJcblx0cmV0dXJuIG5ld0JvYXJkO1xyXG59XHJcblxyXG4vKipcclxuICogV2hldGhlciB0aGUgZ2FtZSBpcyBvdmVyIChubyBtb3JlIGNob2NvbGF0ZSDimLnvuI8pXHJcbiAqIEBwYXJhbSBib2FyZCBUaGUgYm9hcmQgYXJyYXlcclxuICogQHJldHVybnMgVHJ1ZSBpZmYgdGhlIGdhbWUgaXMgb3ZlclxyXG4gKi9cclxuZnVuY3Rpb24gaXNHYW1lT3Zlcihib2FyZDogbnVtYmVyW10pOiBib29sZWFuIHtcclxuXHRyZXR1cm4gYm9hcmQuaW5kZXhPZigwKSA9PT0gMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1ha2VzIGEgbW92ZSBmb3IgdGhlIGNvbXB1dGVyXHJcbiAqIEBwYXJhbSBib2FyZCBUaGUgYm9hcmQgYXJyYXlcclxuICogQHBhcmFtIHNldEJvYXJkIEZ1bmN0aW9uIHRvIHNldCB0aGUgYm9hcmQgb2JqZWN0XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBjcHVNb3ZlKFxyXG5cdGJvYXJkOiBudW1iZXJbXSxcclxuXHRzZXRCb2FyZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyW10+PixcclxuKTogUHJvbWlzZTx2b2lkPiB7XHJcblx0Y29uc3QgdGltZSA9IERhdGUubm93KCk7XHJcblx0Y29uc3QgbW92ZSA9IGdldEJlc3RNb3ZlKGJvYXJkKTtcclxuXHQvLyBXYWl0IGEgc2Vjb25kIGlmIG5lY2Vzc2FyeSB0byBhdm9pZCB1c2VyIGNvbmZ1c2lvblxyXG5cdGlmIChEYXRlLm5vdygpIC0gdGltZSA8IDEwMDApIHtcclxuXHRcdGF3YWl0IHNsZWVwKDEwMDApO1xyXG5cdH1cclxuXHRib2FyZCA9IG1vbmNoKGJvYXJkLCBtb3ZlWzBdLCBtb3ZlWzFdKTtcclxuXHRzZXRCb2FyZChib2FyZCk7XHJcblx0dG9nZ2xlTG9hZGluZ0RpdihmYWxzZSk7XHJcblx0Y2FuTW92ZSA9IHRydWU7XHJcblx0aWYgKGlzR2FtZU92ZXIoYm9hcmQpKSB7XHJcblx0XHRzZXRNZXNzYWdlKFwiWW91IHdvbiEgQ29uZ3JhdHMhXCIpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgYmVzdCBtb3ZlIGZvciB0aGUgY29tcHV0ZXIgdG8gbWFrZSAoaWYgdGhlcmUgaXMgb25lKVxyXG4gKiBAcGFyYW0gYm9hcmQgVGhlIGJvYXJkIGFycmF5XHJcbiAqIEByZXR1cm5zIFRoZSBiZXN0IFtjb2x1bW4sIHJvd10gdG8gbW9uY2ggbmV4dFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0QmVzdE1vdmUoYm9hcmQ6IG51bWJlcltdKTogW251bWJlciwgbnVtYmVyXSB7XHJcblx0Ly8gV2UgdHJ5IHRvIG1vdmUgdG8gYSBsb3NpbmcgcG9zaXRpb25cclxuXHRmb3IgKGxldCBjID0gMTsgYyA8PSBib2FyZC5sZW5ndGg7IGMrKykge1xyXG5cdFx0Zm9yIChsZXQgciA9IDE7IHIgPD0gYm9hcmRbYyAtIDFdOyByKyspIHtcclxuXHRcdFx0Y29uc3QgbmV4dFBvcyA9IG1vbmNoKGJvYXJkLCBjLCByKTtcclxuXHRcdFx0Ly8gSWYgaHVtYW4gaGFzIHRvIG1vdmUgZnJvbSBhIGxvc2luZyBwb3NpdGlvbiwgd2UgY2FuIGZvcmNlIGEgd2luXHJcblx0XHRcdGlmIChpc0xvc2luZ1Bvc2l0aW9uKG5leHRQb3MpKSB7XHJcblx0XHRcdFx0cmV0dXJuIFtjLCByXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyBPdGhlcndpc2UsIHBsYXkgbW9zdGx5IHJhbmRvbWx5XHJcblx0Y29uc3QgbnVtU3F1YXJlcyA9IGJvYXJkLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xyXG5cdGxldCBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbnVtU3F1YXJlcykgKyAxO1xyXG5cdGlmIChudW1TcXVhcmVzID4gMykge1xyXG5cdFx0Ly8gRG9uJ3Qgb2J2aW91c2x5IGxvc2UgaWYgd2UgY2FuIGhlbHAgaXRcclxuXHRcdHdoaWxlIChuID09PSAxIHx8IG4gPT09IDIgfHwgbiA9PT0gYm9hcmRbMF0gKyAxKSB7XHJcblx0XHRcdG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW1TcXVhcmVzKSArIDE7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIEZpbmQgY29ycmVzcG9uZGluZyByb3cgJiBjb2xcclxuXHRsZXQgYyA9IDA7XHJcblx0d2hpbGUgKG4gPiBib2FyZFtjXSkge1xyXG5cdFx0biAtPSBib2FyZFtjXTtcclxuXHRcdGMgKz0gMTtcclxuXHR9XHJcblx0YyArPSAxO1xyXG5cdHJldHVybiBbYywgbl07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGVudGVyZWQgYm9hcmQgaXMgYSBcImxvc2luZyBwb3NpdGlvblwiXHJcbiAqIChhIHBvc2l0aW9uIHdoZXJlLCBpZiB5b3UgbXVzdCBtb3ZlIGZyb20gaXQsIHlvdSBjYW4gYmUgZm9yY2VkXHJcbiAqIGludG8gYSBsb3NzIGlmIHlvdXIgb3Bwb25lbnQgcGxheXMgb3B0aW1hbGx5KVxyXG4gKiBAcGFyYW0gcG9zIEJvYXJkIHN0YXRlIHRvIGNoZWNrXHJcbiAqIEByZXR1cm5zIFRydWUgaWZmIHRoZSBib2FyZCBpcyBhIGxvc2luZyBwb3NpdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gaXNMb3NpbmdQb3NpdGlvbihwb3M6IG51bWJlcltdKTogYm9vbGVhbiB7XHJcblx0aWYgKHBvcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKSA9PT0gMCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHQvLyBHaXZlIHBvcyBtYXggbGVuZ3RoIGZvciBjb21wYXJpc29uXHJcblx0Y29uc3QgcG9zQ29weSA9IHBvcy5zbGljZSgpO1xyXG5cdGlmIChwb3NDb3B5Lmxlbmd0aCA8IDEwKSB7XHJcblx0XHRwb3NDb3B5LnB1c2goLi4ubmV3IEFycmF5KDEwIC0gcG9zQ29weS5sZW5ndGgpLmZpbGwoMCkpO1xyXG5cdH1cclxuXHQvLyBTZWFyY2ggZm9yIGxvc2luZyBwb3NpdGlvblxyXG5cdGlmIChMUFNbZ2V0SW5kZXhTdHJpbmcocG9zQ29weSldKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9IGVsc2UgaWYgKFdQU1tnZXRJbmRleFN0cmluZyhwb3NDb3B5KV0pIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0Zm9yIChsZXQgYyA9IDE7IGMgPD0gcG9zQ29weS5sZW5ndGg7IGMrKykge1xyXG5cdFx0Zm9yIChsZXQgciA9IDE7IHIgPD0gcG9zQ29weVtjIC0gMV07IHIrKykge1xyXG5cdFx0XHQvLyBJZiB5b3UgY2FuIHJlYWNoIGEgbG9zaW5nIHBvc2l0aW9uLCB5b3UncmUgbm90IGF0IG9uZSBub3dcclxuXHRcdFx0aWYgKGlzTG9zaW5nUG9zaXRpb24obW9uY2gocG9zQ29weSwgYywgcikpKSB7XHJcblx0XHRcdFx0V1BTW2dldEluZGV4U3RyaW5nKHBvc0NvcHkpXSA9IHRydWU7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIElmIG5vbmUgb2YgdGhlIHBvc3NpYmxlIG1vdmVzIGdvdCB1cyB0byBhIGxvc2luZyBwb3NpdGlvbiwgdGhlbiB3ZSdyZSBhdCBhIGxvc2luZyBwb3NpdGlvbiBub3dcclxuXHRMUFNbZ2V0SW5kZXhTdHJpbmcocG9zQ29weSldID0gdHJ1ZTtcclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgc3RyaW5nIHVzZWQgdG8gaW5kZXggdGhlIHBvc2l0aW9uIHRhYmxlc1xyXG4gKiBAcGFyYW0gcG9zIEJvYXJkIHN0YXRlXHJcbiAqIEByZXR1cm5zIFRoZSBzdGFuZGFyZCBzdHJpbmcgdXNlZCBmb3IgaW5kZXhpbmdcclxuICovXHJcbmZ1bmN0aW9uIGdldEluZGV4U3RyaW5nKHBvczogbnVtYmVyW10pOiBzdHJpbmcge1xyXG5cdHJldHVybiBcIltcIiArIHBvcy50b1N0cmluZygpICsgXCJdXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXYWl0IGZvciBhbiBhbW91bnQgb2YgdGltZVxyXG4gKiBAcGFyYW0gbXMgTWlsbGlzZWNvbmRzXHJcbiAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciBtcyBtaWxsaXNlY29uZHNcclxuICovXHJcbmZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNob3cgYSBtZXNzYWdlIGluIHRoZSBtZXNzYWdlIDxkaXY+XHJcbiAqIEBwYXJhbSBtc2cgTWVzc2FnZSB0byBzaG93XHJcbiAqL1xyXG5mdW5jdGlvbiBzZXRNZXNzYWdlKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcblx0aWYgKG1lc3NhZ2VTcGFjZS5jdXJyZW50KSB7XHJcblx0XHRtZXNzYWdlU3BhY2UuY3VycmVudC5pbm5lclRleHQgPSBtc2c7XHJcblx0XHRpZiAobXNnID09PSBOVUxMX01TRykge1xyXG5cdFx0XHRtZXNzYWdlU3BhY2UuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bWVzc2FnZVNwYWNlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUb2dnbGUgd2hldGhlciB0aGUgbG9hZGluZyBhbmltYXRpb24gaXMgdmlzaWJsZVxyXG4gKiBAcGFyYW0gbG9hZGluZyBUcnVlIGlmIHdlJ3JlIGxvYWRpbmcgc29tZXRoaW5nIChhbmQgc2hvdWxkIHNob3cgdGhlIGFuaW1hdGlvbilcclxuICovXHJcbmZ1bmN0aW9uIHRvZ2dsZUxvYWRpbmdEaXYobG9hZGluZzogYm9vbGVhbik6IHZvaWQge1xyXG5cdGlmIChsb2FkaW5nRGl2LmN1cnJlbnQpIHtcclxuXHRcdGlmICghbG9hZGluZykge1xyXG5cdFx0XHRsb2FkaW5nRGl2LmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxvYWRpbmdEaXYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyogdGFibGUgb2Ygd2lubmluZyBwb3NpdGlvbnMgKi9cclxuY29uc3QgV1BTOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHtcclxuXHRcIlswLDAsMCwwLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG59O1xyXG5cclxuLyogdGFibGUgb2YgbG9zaW5nIHBvc2l0aW9ucyAqL1xyXG5jb25zdCBMUFM6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge1xyXG5cdFwiWzEsMCwwLDAsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbMiwxLDAsMCwwLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIlsyLDIsMSwwLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzIsMiwyLDEsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbMiwyLDIsMiwxLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIlszLDEsMSwwLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzMsMiwwLDAsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbMywzLDEsMSwwLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIlszLDMsMiwxLDEsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzMsMywzLDIsMiwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNCwxLDEsMSwwLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls0LDIsMSwxLDEsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzQsMiwyLDAsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNCwzLDAsMCwwLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls0LDQsMiwyLDIsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzQsNCwzLDEsMSwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNSwxLDEsMSwxLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls1LDIsMSwxLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzUsMywyLDAsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNSwzLDMsMiwwLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls1LDQsMCwwLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzUsNSwyLDIsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNSw1LDMsMCwwLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDIsMiwxLDEsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsMiwyLDIsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiwzLDEsMSwxLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDMsMywwLDAsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsNCwyLDAsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiw0LDMsMywyLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDQsNCwzLDMsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsNSwwLDAsMCwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiw2LDMsMywzLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDYsNCwzLDIsMCwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsNiw1LDQsMiwwLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiw2LDYsNSwyLDAsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIlsyLDIsMiwyLDIsMSwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzMsMywyLDIsMSwxLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbMywzLDMsMSwxLDEsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls0LDQsMSwxLDEsMSwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzUsMiwyLDEsMSwxLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNSwzLDEsMSwxLDEsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls1LDUsNCwyLDEsMSwwLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzUsNSw1LDMsMSwxLDAsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiwxLDEsMSwxLDEsMCwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIlszLDMsMiwyLDIsMSwxLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzMsMywzLDIsMSwxLDEsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNCw0LDIsMSwxLDEsMSwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls0LDQsMywyLDIsMSwxLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzQsNCwzLDMsMSwxLDEsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNCw0LDQsMywyLDEsMSwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls0LDQsNCw0LDMsMSwxLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzUsMiwyLDIsMSwxLDEsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNSwzLDMsMSwxLDEsMSwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls1LDUsMSwxLDEsMSwxLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsMiwxLDEsMSwxLDEsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiwzLDIsMSwxLDEsMSwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDQsMywxLDEsMSwxLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsNCw0LDIsMiwxLDEsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiw0LDQsMywxLDEsMSwwLDAsMF1cIjogdHJ1ZSxcclxuXHRcIls2LDYsMiwyLDEsMSwxLDAsMCwwXVwiOiB0cnVlLFxyXG5cdFwiWzYsNiwzLDMsMiwxLDEsMCwwLDBdXCI6IHRydWUsXHJcblx0XCJbNiw2LDQsMSwxLDEsMSwwLDAsMF1cIjogdHJ1ZSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFByb3BzV2l0aG91dFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaG9tZVBuZyBmcm9tIFwiLi4vaW1hZ2VzL2hvbWUucG5nXCI7XHJcbmltcG9ydCBob21lV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2hvbWUud2VicFwiO1xyXG5pbXBvcnQgY29tcGFzc1BuZyBmcm9tIFwiLi4vaW1hZ2VzL2NvbXBhc3MucG5nXCI7XHJcbmltcG9ydCBjb21wYXNzV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2NvbXBhc3Mud2VicFwiO1xyXG5pbXBvcnQgY2hvY29QbmcgZnJvbSBcIi4uL2ltYWdlcy9jaG9jby5wbmdcIjtcclxuaW1wb3J0IGNob2NvV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2Nob2NvLndlYnBcIjtcclxuaW1wb3J0IG11c2hyb29tUG5nIGZyb20gXCIuLi9pbWFnZXMvbXVzaHJvb20ucG5nXCI7XHJcbmltcG9ydCBtdXNocm9vbVdlYnAgZnJvbSBcIi4uL2ltYWdlcy9tdXNocm9vbS53ZWJwXCI7XHJcbmltcG9ydCBoZWFydFBuZyBmcm9tIFwiLi4vaW1hZ2VzL2hlYXJ0LnBuZ1wiO1xyXG5pbXBvcnQgaGVhcnRXZWJwIGZyb20gXCIuLi9pbWFnZXMvaGVhcnQud2VicFwiO1xyXG5cclxuY29uc3QgTWVudTogUmVhY3QuRkM8TWVudVByb3BzPiA9ICh7IHN0YXJ0RXhwYW5kZWQgfSkgPT4ge1xyXG5cdGNvbnN0IFtleHBhbmRlZCwgdG9nZ2xlRXhwYW5kZWRdID0gdXNlU3RhdGUoc3RhcnRFeHBhbmRlZCA/PyBmYWxzZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17ZXhwYW5kZWQgPyBcIm1lbnVfZXhwYW5kZWRcIiA6IFwibWVudV9jb2xsYXBzZWRcIn0+XHJcblx0XHRcdHtNZW51QnV0dG9uKGV4cGFuZGVkLCB0b2dnbGVFeHBhbmRlZCl9XHJcblx0XHRcdHtleHBhbmRlZCA/IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibWVudV9saXN0IGNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9cIiwgXCJIb21lXCIsIGhvbWVQbmcsIGhvbWVXZWJwKX1cclxuXHRcdFx0XHRcdFx0e01lbnVJdGVtKFwiL3Byb2JsZW1zLmh0bWxcIiwgXCJQcm9ibGVtc1wiLCBjb21wYXNzUG5nLCBjb21wYXNzV2VicCl9XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9jaG9tcC5odG1sXCIsIFwiQ2hvbXBcIiwgY2hvY29QbmcsIGNob2NvV2VicCl9XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9iZWZ1bmdlLmh0bWxcIiwgXCJCZWZ1bmdlXCIsIG11c2hyb29tUG5nLCBtdXNocm9vbVdlYnApfVxyXG5cdFx0XHRcdFx0XHR7TWVudUl0ZW0oXCIvbWlzYy5odG1sXCIsIFwiTWlzY2VsbGFuZWFcIiwgaGVhcnRQbmcsIGhlYXJ0V2VicCl9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpIDogbnVsbH1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBNZW51SXRlbShyZWZlcmVuY2U6IHN0cmluZywgdGV4dDogc3RyaW5nLCBwbmc6IGFueSwgd2VicDogYW55KTogSlNYLkVsZW1lbnQge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8bGk+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cIm1lbnVfaXRlbVwiIGhyZWY9e3JlZmVyZW5jZX0+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHQ8cGljdHVyZT5cclxuXHRcdFx0XHRcdFx0PHNvdXJjZSB0eXBlPVwiaW1hZ2Uvd2VicFwiIHNyY1NldD17d2VicH0gLz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e3BuZ30gaGVpZ2h0PVwiMTZweFwiIHdpZHRoPVwiMTZweFwiIGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdFx0XHQmbmJzcDtcclxuXHRcdFx0XHRcdHt0ZXh0fVxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9saT5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZW51QnV0dG9uKFxyXG5cdGV4cGFuZGVkOiBib29sZWFuLFxyXG5cdHRvZ2dsZUV4cGFuZGVkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4sXHJcbik6IEpTWC5FbGVtZW50IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51X2J1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUV4cGFuZGVkKCFleHBhbmRlZCl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uX2lubmVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51X2J1dHRvbl9saW5lXCIgLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uX2xpbmVcIiAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudV9idXR0b25fbGluZVwiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuXHJcbnR5cGUgTWVudVByb3BzID0gQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFwiZGl2XCI+ICZcclxuXHRQYXJ0aWFsPHtcclxuXHRcdHN0YXJ0RXhwYW5kZWQ6IGJvb2xlYW47XHJcblx0fT47XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0RWxlbWVudCwgRWxlbWVudFR5cGUsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGthdGV4IGZyb20gXCJrYXRleFwiO1xyXG5cclxuY29uc3QgVGVYOiBSZWFjdC5GQzxUZVhQcm9wcz4gPSAoe1xyXG5cdGNoaWxkcmVuLFxyXG5cdG1hdGgsXHJcblx0YmxvY2ssXHJcblx0ZXJyb3JDb2xvcixcclxuXHRyZW5kZXJFcnJvcixcclxuXHRzZXR0aW5ncyxcclxuXHRhczogYXNDb21wb25lbnQsXHJcblx0Li4ucHJvcHNcclxufSkgPT4ge1xyXG5cdGNvbnN0IENvbXBvbmVudCA9IGFzQ29tcG9uZW50IHx8IChibG9jayA/IFwiZGl2XCIgOiBcInNwYW5cIik7XHJcblx0Y29uc3QgY29udGVudCA9IChjaGlsZHJlbiA/PyBtYXRoKSBhcyBzdHJpbmc7XHJcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTx7IGlubmVySHRtbDogc3RyaW5nIH0gfCB7IGVycm9yRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50IH0+KHtcclxuXHRcdGlubmVySHRtbDogXCJcIixcclxuXHR9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGlubmVySHRtbCA9IGthdGV4LnJlbmRlclRvU3RyaW5nKGNvbnRlbnQsIHtcclxuXHRcdFx0XHRkaXNwbGF5TW9kZTogISFibG9jayxcclxuXHRcdFx0XHRlcnJvckNvbG9yLFxyXG5cdFx0XHRcdHRocm93T25FcnJvcjogISFyZW5kZXJFcnJvcixcclxuXHRcdFx0XHQuLi5zZXR0aW5ncyxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzZXRTdGF0ZSh7IGlubmVySHRtbCB9KTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIGthdGV4LlBhcnNlRXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcclxuXHRcdFx0XHRpZiAocmVuZGVyRXJyb3IpIHtcclxuXHRcdFx0XHRcdHNldFN0YXRlKHsgZXJyb3JFbGVtZW50OiByZW5kZXJFcnJvcihlcnJvcikgfSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNldFN0YXRlKHsgaW5uZXJIdG1sOiBlcnJvci5tZXNzYWdlIH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aHJvdyBlcnJvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIFtibG9jaywgY29udGVudCwgZXJyb3JDb2xvciwgcmVuZGVyRXJyb3IsIHNldHRpbmdzXSk7XHJcblxyXG5cdGlmIChcImVycm9yRWxlbWVudFwiIGluIHN0YXRlKSB7XHJcblx0XHRyZXR1cm4gc3RhdGUuZXJyb3JFbGVtZW50O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0YXRlLmlubmVySHRtbCB9fSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oVGVYKTtcclxuXHJcbnR5cGUgVGVYUHJvcHMgPSBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJkaXZcIj4gJlxyXG5cdFBhcnRpYWw8e1xyXG5cdFx0YXM6IEVsZW1lbnRUeXBlO1xyXG5cdFx0bWF0aDogc3RyaW5nIHwgbnVtYmVyO1xyXG5cdFx0YmxvY2s6IGJvb2xlYW47XHJcblx0XHRlcnJvckNvbG9yOiBzdHJpbmc7XHJcblx0XHRyZW5kZXJFcnJvcjogKGVycm9yOiBrYXRleC5QYXJzZUVycm9yIHwgVHlwZUVycm9yKSA9PiBSZWFjdEVsZW1lbnQ7XHJcblx0XHRzZXR0aW5nczoga2F0ZXguS2F0ZXhPcHRpb25zO1xyXG5cdH0+O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
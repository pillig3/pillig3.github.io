"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["befunge"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/befunge.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/befunge.scss ***!
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

button {
  font-size: 12pt;
  outline: none;
  padding: 0.5em 1em;
  text-align: center;
  border-radius: 20px;
  border: 0;
}
button:hover {
  cursor: pointer;
}
button#run {
  background-color: #66e2b3;
}
button#displayButton {
  background-color: #dea3ff;
}
button#pause {
  background-color: #fabdfc;
}
button#step {
  background-color: #ffc268;
}

div.button_container {
  padding: 0.5em;
  float: left;
}

div.options_container {
  padding: 1em 1em;
  float: left;
}

input#pauseInterval {
  width: 4em;
  outline: none;
}
input#pauseInterval::-webkit-inner-spin-button, input#pauseInterval::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

span.bordered_char {
  display: inline-block;
  outline: 1px solid black;
  outline-offset: -1px;
}
span.bordered_char_darkmode {
  display: inline-block;
  outline: 1px solid white;
  outline-offset: -1px;
}
span.right_aligned {
  float: right;
  text-align: right;
}

div#befungeCodeWrapper,
div#display,
div#output {
  width: 100%;
}

textarea {
  font-size: 12pt;
  border: thin solid black;
  outline: none;
  width: -webkit-fill-available;
  width: -moz-available;
  white-space: pre;
  overflow: auto;
  resize: vertical;
  font-family: monospace, monospace;
  font-kerning: none;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
}

.code_output {
  font-size: 12pt;
  border: thin solid black;
  outline: none;
  width: -webkit-fill-available;
  width: -moz-available;
  white-space: pre;
  overflow: auto;
  resize: vertical;
  font-family: monospace, monospace;
  font-kerning: none;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 0;
  margin-right: 0;
  padding: 0 0;
  background-color: white;
}
.code_output:hover {
  cursor: default;
}

.word_wrap {
  white-space: pre-wrap; /* CSS3 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera <7 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* IE */
}

#befungeOutput {
  height: 400px;
  width: 100%;
}

div#display {
  width: 100%;
  padding: 0;
}
div#display #befungeState {
  height: 200px;
}
div#display #befungeStack {
  height: 60px;
  line-height: 30px;
  border-top: 0;
}

div#chevronContainer {
  height: 18px;
}

button#examplesButton {
  width: max-content;
  cursor: pointer;
  border: 1px solid grey;
  background-color: white;
  padding: 0.3em 1em;
}

.examples_collapsed {
  left: 0;
  top: 0;
  margin: 15px;
  float: left;
  z-index: 100;
}

.examples_expanded {
  left: 0;
  top: 0;
  margin: 15px;
  float: left;
  z-index: 100;
  width: -webkit-fill-available;
  width: -moz-available;
}

.max_content {
  width: max-content;
}`, "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/befunge.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"sass:math\";\r\n\r\n$page-margin: 15px;\r\n$border-radius: 10px;\r\n\r\nhtml,\r\nbody {\r\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\",\r\n\t\tsans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n\tmargin: 0;\r\n}\r\n\r\nbody {\r\n\tpadding: 1%;\r\n\tbackground-color: #d3eded;\r\n}\r\n\r\np {\r\n\tmargin-block-start: 1em;\r\n\tmargin-block-end: 1em;\r\n\tmargin-inline-start: 0px;\r\n\tmargin-inline-end: 0px;\r\n}\r\n\r\ndiv.p {\r\n\tmargin-block-start: 1em;\r\n\tmargin-block-end: 1em;\r\n\tmargin-inline-start: 0px;\r\n\tmargin-inline-end: 0px;\r\n}\r\n\r\ndiv.title {\r\n\tfont-size: 32pt;\r\n\ttext-align: center;\r\n\tfont-variant: small-caps;\r\n\tfont-weight: 250;\r\n\tmargin: $page-margin;\r\n\tmargin-top: 0;\r\n\tpadding-top: $page-margin;\r\n}\r\n\r\n.card {\r\n\tbackground-color: white;\r\n\tmin-height: 20px;\r\n\tborder-radius: $border-radius;\r\n\tmargin: $page-margin;\r\n\tmargin-bottom: 10px;\r\n\toverflow: hidden;\r\n\tfloat: none;\r\n}\r\n\r\n.inner_card {\r\n\twidth: calc(100% - 20px);\r\n\tpadding: 10px;\r\n\toverflow-x: auto;\r\n}\r\n\r\n// KaTeX override to make the font slightly smaller\r\n.katex {\r\n\ttext-rendering: auto;\r\n\tfont: normal 1.1em KaTeX_Main, Times New Roman, serif;\r\n\tline-height: 1.2;\r\n\ttext-indent: 0;\r\n}\r\n\r\n// If the math goes off the screen allow scrolling\r\n.katex-display {\r\n\toverflow-x: auto;\r\n\toverflow-y: hidden;\r\n\t// Need to add some padding so the scrollbar doesn't cover the text\r\n\tpadding-top: 0.5em;\r\n\tpadding-bottom: 0.5em;\r\n\tmargin-top: 0.5em;\r\n\tmargin-bottom: 0.5em;\r\n}\r\n\r\npicture > img {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.centered {\r\n\tdisplay: block;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n.fit_content {\r\n\twidth: fit-content;\r\n}\r\n\r\n.flex {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n/**\r\n * Menu Styling\r\n */\r\n$menu-collapsed-size: 50px;\r\n$menu-inner-side-margin: $menu-collapsed-size * 0.2;\r\n$menu-inner-top-margin: $menu-collapsed-size * 0.1;\r\n$menu-inner-button-height: $menu-collapsed-size - 2 * $menu-inner-top-margin;\r\n\r\n@mixin menu() {\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground-color: #fff;\r\n\tmargin: $page-margin;\r\n\tborder-radius: $border-radius;\r\n\tfloat: left;\r\n\tz-index: 100;\r\n}\r\n\r\n.menu_collapsed {\r\n\t@include menu();\r\n\twidth: $menu-collapsed-size;\r\n\theight: $menu-collapsed-size;\r\n\tcursor: pointer;\r\n}\r\n\r\n.menu_expanded {\r\n\t@include menu();\r\n\twidth: auto;\r\n\theight: auto;\r\n\tmargin-bottom: math.div($page-margin, 2);\r\n\toverflow-x: hidden;\r\n\r\n\t@media only screen and (max-aspect-ratio: 2/3) {\r\n\t\twidth: -webkit-fill-available;\r\n\t\twidth: -moz-available;\r\n\t}\r\n}\r\n\r\n.menu_button {\r\n\t@include menu();\r\n\twidth: $menu-collapsed-size;\r\n\theight: $menu-collapsed-size;\r\n\tmargin: 0;\r\n\tcursor: pointer;\r\n\tfloat: left;\r\n}\r\n\r\n.menu_button_inner {\r\n\tmargin: $menu-inner-side-margin;\r\n\tmargin-top: $menu-inner-top-margin;\r\n\tmargin-bottom: $menu-inner-top-margin;\r\n\twidth: $menu-collapsed-size - 2 * $menu-inner-side-margin;\r\n\tborder-top-color: #fff;\r\n\tborder-top-style: solid;\r\n\tborder-top-width: math.div($menu-inner-button-height, 7);\r\n\theight: math.div($menu-inner-button-height * 6, 7);\r\n}\r\n\r\n.menu_button_line {\r\n\twidth: 100%;\r\n\theight: math.div($menu-inner-button-height, 7);\r\n\tmargin-bottom: math.div($menu-inner-button-height, 7);\r\n\tbackground-color: black;\r\n}\r\n\r\na.menu_item {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n\r\n\t&:hover {\r\n\t\tfont-weight: bold;\r\n\t}\r\n}\r\n\r\nul.menu_list {\r\n\tlist-style-type: none;\r\n\tpadding: 0;\r\n\tmargin-bottom: $menu-inner-side-margin;\r\n\ttext-align: center;\r\n\twidth: 8em;\r\n\t@media only screen and (min-aspect-ratio: 2/3) {\r\n\t\tmargin-top: $menu-collapsed-size + math.div($menu-inner-button-height, 7);\r\n\t}\r\n\r\n\t& > li > a > p {\r\n\t\tmargin: 16px 0;\r\n\t}\r\n}\r\n\r\nul.math_list > li {\r\n\tpadding-bottom: 0.5em;\r\n\tlist-style-type: circle;\r\n}\r\n\r\n.inline_code {\r\n\tfont-family: \"Courier New\", monospace;\r\n\tpadding: 1px 1px;\r\n}\r\n\r\ntextarea.codeblock {\r\n\tfont-family: \"Courier New\", monospace;\r\n\twidth: 100%;\r\n\tresize: none;\r\n}\r\n\r\nspan {\r\n\t&.red {\r\n\t\tcolor: red;\r\n\t}\r\n\t&.blue {\r\n\t\tcolor: blue;\r\n\t}\r\n}\r\n\r\n.hidden {\r\n\tvisibility: hidden;\r\n}\r\n\r\n.command_table {\r\n\tborder-collapse: collapse;\r\n\twidth: 100%;\r\n\r\n\tth,\r\n\ttd {\r\n\t\tborder-style: solid;\r\n\t\tborder-width: thin;\r\n\t}\r\n\r\n\tth {\r\n\t\tfont-weight: normal;\r\n\t\tpadding: 10px;\r\n\t\tbackground-color: lightgray;\r\n\t}\r\n\r\n\ttd {\r\n\t\tpadding: 0.5em;\r\n\t}\r\n}\r\n\r\n.subsection {\r\n\tfont-size: 1em;\r\n}\r\n\r\n.nodisp {\r\n\tdisplay: none;\r\n}\r\n\r\n.upsidedown {\r\n\t-webkit-transform: scaleY(-1);\r\n\ttransform: scaleY(-1);\r\n}\r\n\r\n.float_left {\r\n\tfloat: left;\r\n}\r\n\r\ncanvas.full_canvas {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.nopadding {\r\n\tpadding: 0;\r\n}\r\n\r\n.list_no_style {\r\n\tlist-style-type: none;\r\n}\r\n","@import \"./index.scss\";\r\n\r\n$button-padding-vertical: 0.5em;\r\n$button-padding-horizontal: 1em;\r\n\r\nbutton {\r\n\tfont-size: 12pt;\r\n\toutline: none;\r\n\tpadding: $button-padding-vertical $button-padding-horizontal;\r\n\ttext-align: center;\r\n\tborder-radius: 20px;\r\n\tborder: 0;\r\n\r\n\t&:hover {\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t&#run {\r\n\t\tbackground-color: #66e2b3;\r\n\t}\r\n\t&#displayButton {\r\n\t\tbackground-color: #dea3ff;\r\n\t}\r\n\t&#pause {\r\n\t\tbackground-color: #fabdfc;\r\n\t}\r\n\t&#step {\r\n\t\tbackground-color: #ffc268;\r\n\t}\r\n}\r\n\r\ndiv.button_container {\r\n\tpadding: 0.5em;\r\n\tfloat: left;\r\n}\r\n\r\ndiv.options_container {\r\n\tpadding: $button-padding-vertical + 0.5em $button-padding-horizontal;\r\n\tfloat: left;\r\n}\r\n\r\ninput#pauseInterval {\r\n\twidth: 4em;\r\n\toutline: none;\r\n\t// border: none;\r\n\r\n\t&::-webkit-inner-spin-button,\r\n\t&::-webkit-outer-spin-button {\r\n\t\t-webkit-appearance: none;\r\n\t\tmargin: 0;\r\n\t}\r\n}\r\n\r\nspan {\r\n\t&.bordered_char {\r\n\t\tdisplay: inline-block;\r\n\t\toutline: 1px solid black;\r\n\t\toutline-offset: -1px;\r\n\t}\r\n\t&.bordered_char_darkmode {\r\n\t\tdisplay: inline-block;\r\n\t\toutline: 1px solid white;\r\n\t\toutline-offset: -1px;\r\n\t}\r\n\t&.right_aligned {\r\n\t\tfloat: right;\r\n\t\ttext-align: right;\r\n\t}\r\n}\r\n\r\ndiv#befungeCodeWrapper,\r\ndiv#display,\r\ndiv#output {\r\n\twidth: 100%;\r\n}\r\n\r\n@mixin codeFormatting() {\r\n\tfont-size: 12pt;\r\n\tborder: thin solid black;\r\n\toutline: none;\r\n\twidth: -webkit-fill-available;\r\n\twidth: -moz-available;\r\n\twhite-space: pre;\r\n\toverflow: auto;\r\n\tresize: vertical;\r\n\tfont-family: monospace, monospace;\r\n\tfont-kerning: none;\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n// Input\r\ntextarea {\r\n\t@include codeFormatting();\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\n// State, stack, and output\r\n.code_output {\r\n\t@include codeFormatting();\r\n\tmargin-left: 0;\r\n\tmargin-right: 0;\r\n\tpadding: 0 0;\r\n\tbackground-color: white;\r\n\t&:hover {\r\n\t\tcursor: default;\r\n\t}\r\n}\r\n\r\n// For wrapping output\r\n.word_wrap {\r\n\twhite-space: pre-wrap; /* CSS3 */\r\n\twhite-space: -moz-pre-wrap; /* Firefox */\r\n\twhite-space: -pre-wrap; /* Opera <7 */\r\n\twhite-space: -o-pre-wrap; /* Opera 7 */\r\n\tword-wrap: break-word; /* IE */\r\n}\r\n\r\n#befungeOutput {\r\n\theight: 400px;\r\n\twidth: 100%;\r\n}\r\n\r\ndiv#display {\r\n\twidth: 100%;\r\n\tpadding: 0;\r\n\r\n\t#befungeState {\r\n\t\theight: 200px;\r\n\t}\r\n\r\n\t#befungeStack {\r\n\t\theight: 60px;\r\n\t\tline-height: 30px;\r\n\t\tborder-top: 0;\r\n\t}\r\n}\r\n\r\ndiv#chevronContainer {\r\n\theight: 18px;\r\n}\r\n\r\nbutton#examplesButton {\r\n\twidth: max-content;\r\n\tcursor: pointer;\r\n\tborder: 1px solid grey;\r\n\tbackground-color: white;\r\n\tpadding: 0.3em 1em;\r\n}\r\n\r\n@mixin examplesSection() {\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tmargin: $page-margin;\r\n\tfloat: left;\r\n\tz-index: 100;\r\n}\r\n\r\n.examples_collapsed {\r\n\t@include examplesSection();\r\n}\r\n\r\n.examples_expanded {\r\n\t@include examplesSection();\r\n\twidth: -webkit-fill-available;\r\n\twidth: -moz-available;\r\n}\r\n\r\n.max_content {\r\n\twidth: max-content;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/befunge.scss":
/*!**************************!*\
  !*** ./src/befunge.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_befunge_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./befunge.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/befunge.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_befunge_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_befunge_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_befunge_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_befunge_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/befunge.tsx":
/*!*************************!*\
  !*** ./src/befunge.tsx ***!
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
const Befunge_1 = __importDefault(__webpack_require__(/*! ./components/Befunge */ "./src/components/Befunge.tsx"));
__webpack_require__(/*! ./befunge.scss */ "./src/befunge.scss");
(0, react_dom_1.render)(React.createElement(Befunge_1.default, null), document.querySelector("#root"));


/***/ }),

/***/ "./src/components/Befunge.tsx":
/*!************************************!*\
  !*** ./src/components/Befunge.tsx ***!
  \************************************/
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
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const BefungeExamples_1 = __importDefault(__webpack_require__(/*! ./BefungeExamples */ "./src/components/BefungeExamples.tsx"));
const Card_1 = __importDefault(__webpack_require__(/*! ./Card */ "./src/components/Card.tsx"));
const Menu_1 = __importDefault(__webpack_require__(/*! ./Menu */ "./src/components/Menu.tsx"));
const ZERO = BigInt(0);
const ONE = BigInt(1);
const STEPS_BTWN_CALLBACKS = 1500;
const STEPS_OVER_WHITESPACE = 10000;
var HALT_EXECUTION = false;
var PAUSE_EXECUTION = false;
var DARKMODE = false;
var PAUSE_STATE = null;
class Pointer {
    constructor(ip, delta) {
        this.ip = ip;
        this.delta = delta;
    }
}
const Befunge = function () {
    const [stateShown, toggleStateShown] = (0, react_2.useState)(true);
    const [pauseInterval, setPauseInterval] = (0, react_2.useState)("20");
    const [inputText, setInputText] = (0, react_2.useState)("");
    const [wordWrap, toggleWordWrap] = (0, react_2.useState)(false);
    const [codeArray, setCodeArray] = (0, react_2.useState)([]);
    const [stateContent, setStateContent] = (0, react_2.useState)(React.createElement(React.Fragment, null));
    const [stackContent, setStackContent] = (0, react_2.useState)("");
    const [isRunning, setIsRunning] = (0, react_2.useState)(false);
    const [paused, setPaused] = (0, react_2.useState)(false);
    const befungeOutput = (0, react_1.useRef)(null);
    const setInputTextAndState = function (text) {
        const ary = text.split("\n").map((line) => line.split(""));
        setInputText(text);
        setCodeArray(ary);
        if (stateShown) {
            setStateContent(buildStateContent(ary, {}));
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Menu_1.default, null),
        React.createElement("div", { className: "title" }, "Befunge 93\u2013\u221E"),
        React.createElement(Card_1.default, null,
            "An interpreter for ",
            React.createElement("a", { href: "/befunge-info.html" }, "Befunge 93\u2013\u221E"),
            ". ",
            React.createElement("br", null),
            React.createElement(BefungeExamples_1.default, { setInputTextAndState: setInputTextAndState })),
        React.createElement(Card_1.default, null,
            React.createElement("div", { className: "centered fit_content flex" },
                buildButton("run", isRunning ? "Stop" : "Run", () => {
                    if (isRunning) {
                        setIsRunning(false);
                        setPaused(false);
                        HALT_EXECUTION = true;
                        PAUSE_EXECUTION = false;
                        if (stateShown) {
                            setStateContent(buildStateContent(codeArray, {}));
                            setStackContent("");
                        }
                    }
                    else {
                        setIsRunning(true);
                        setPaused(false);
                        runBefunge(inputText, stateShown, parseInt(pauseInterval), setCodeArray, befungeOutput, setStateContent, setStackContent, setIsRunning, false);
                    }
                }),
                buildButton("displayButton", stateShown ? "Hide State" : "Show State", () => {
                    if (!isRunning) {
                        if (!stateShown) {
                            setColors(DARKMODE ? "#343434" : "white", DARKMODE ? "lightgray" : "black", true);
                            setStateContent(buildStateContent(codeArray, {}));
                        }
                        toggleStateShown(!stateShown);
                    }
                }),
                buildButton("step", "Step", () => {
                    if (!isRunning) {
                        setIsRunning(true);
                        setPaused(true);
                        runBefunge(inputText, stateShown, parseInt(pauseInterval), setCodeArray, befungeOutput, setStateContent, setStackContent, setIsRunning, true);
                    }
                    else {
                        if (PAUSE_STATE !== null) {
                            setPaused(true);
                            PAUSE_EXECUTION = false;
                            step(PAUSE_STATE.codeArray, PAUSE_STATE.pointers, PAUSE_STATE.pointerIndex, PAUSE_STATE.stacks, PAUSE_STATE.stateShown, PAUSE_STATE.stateWidth, PAUSE_STATE.stateHeight, parseInt(pauseInterval), PAUSE_STATE.pointersStringmode, PAUSE_STATE.outputContent, PAUSE_STATE.outputElement, PAUSE_STATE.setStateContent, PAUSE_STATE.setStackContent, PAUSE_STATE.setIsRunning, true);
                        }
                    }
                }, stateShown),
                buildButton("pause", paused ? "Resume" : "Pause", () => {
                    if (!isRunning) {
                        return;
                    }
                    setPaused(!paused);
                    onPauseClicked(parseInt(pauseInterval));
                }, stateShown),
                React.createElement("div", { className: "options_container" + (!stateShown ? " hidden" : "") },
                    React.createElement("span", { id: "pauseOptions" },
                        React.createElement("label", { htmlFor: "pauseInterval" }, "Wait:"),
                        "\u00A0",
                        React.createElement("input", { id: "pauseInterval", type: "number", value: pauseInterval, onChange: (event) => {
                                setPauseInterval(event.target.value);
                            } }),
                        "\u00A0ms"))),
            React.createElement("br", null),
            React.createElement("span", null,
                React.createElement("label", { htmlFor: "befungeCode" }, "Input")),
            React.createElement("span", { className: "right_aligned" },
                React.createElement("label", { htmlFor: "dm" }, "Darkmode"),
                React.createElement("input", { id: "dm", type: "checkbox", checked: DARKMODE, onChange: (event) => {
                        changeDarkmode(event.target.checked, stateShown, setStateContent, codeArray);
                    } })),
            React.createElement("div", { id: "befungeCodeWrapper" },
                React.createElement("textarea", { readOnly: isRunning, id: "befungeCode", placeholder: "Write some code here, or choose an example above!", rows: 10, autoFocus: true, autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", spellCheck: false, value: inputText, onChange: (event) => {
                        const text = event.target.value;
                        setInputTextAndState(text);
                    } })),
            React.createElement("div", { id: "display", className: stateShown ? "" : "nodisp" },
                React.createElement("label", { htmlFor: "befungeState" }, "State"),
                React.createElement("div", { className: "code_output", id: "befungeState" }, stateContent),
                React.createElement("label", { htmlFor: "befungeStack" }, "Stack"),
                React.createElement("div", { className: "code_output", id: "befungeStack" }, stackContent)),
            React.createElement("div", { id: "output" },
                React.createElement("span", null,
                    React.createElement("label", { htmlFor: "befungeOutput" }, "Output")),
                React.createElement("span", { className: "right_aligned" },
                    React.createElement("label", { htmlFor: "wrap" }, "Wrap Text"),
                    React.createElement("input", { id: "wrap", type: "checkbox", checked: wordWrap, onChange: () => toggleWordWrap(!wordWrap) })),
                React.createElement("div", { className: "code_output" + (wordWrap ? " word_wrap" : ""), id: "befungeOutput", ref: befungeOutput }),
                React.createElement("br", null))),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null)));
};
exports["default"] = Befunge;
function onPauseClicked(pauseInterval) {
    if (PAUSE_STATE === null) {
        if (PAUSE_EXECUTION === true) {
            setTimeout(onPauseClicked);
            return;
        }
        else {
            PAUSE_EXECUTION = true;
        }
    }
    else {
        PAUSE_EXECUTION = false;
        step(PAUSE_STATE.codeArray, PAUSE_STATE.pointers, PAUSE_STATE.pointerIndex, PAUSE_STATE.stacks, PAUSE_STATE.stateShown, PAUSE_STATE.stateWidth, PAUSE_STATE.stateHeight, pauseInterval, PAUSE_STATE.pointersStringmode, PAUSE_STATE.outputContent, PAUSE_STATE.outputElement, PAUSE_STATE.setStateContent, PAUSE_STATE.setStackContent, PAUSE_STATE.setIsRunning, false);
        PAUSE_STATE = null;
    }
}
function changeDarkmode(newDarkmode, stateShown, setStateContent, codeArray) {
    DARKMODE = newDarkmode;
    document.body.style.backgroundColor = newDarkmode ? "darkgrey" : "#d3eded";
    setColors(newDarkmode ? "#343434" : "white", newDarkmode ? "lightgray" : "black", stateShown);
    if (stateShown) {
        setStateContent(buildStateContent(codeArray, {}));
    }
}
function setColors(bkgColor, txtColor, stateShown) {
    const ids = ["befungeOutput", "befungeCode"];
    if (stateShown) {
        ids.push("befungeState", "befungeStack", "pauseInterval");
    }
    for (const id of ids) {
        const el = document.getElementById(id);
        if (el !== null) {
            el.style.backgroundColor = bkgColor;
            el.style.color = txtColor;
        }
    }
}
function buildButton(id, text, callback, stateShown) {
    return (React.createElement("div", { className: "button_container" + (stateShown === false ? " hidden" : "") },
        React.createElement("button", { id: id, onClick: callback }, text)));
}
function buildStackContent(curStack) {
    let str = "";
    for (let i = curStack.length - 1; i >= 0; i--) {
        const stack = curStack[i];
        str += "[";
        for (const item of stack) {
            str += item.toString() + " ";
        }
        str += "\n";
    }
    return str;
}
function buildStateContent(codeArray, pointerIndex) {
    let childArray = [];
    let key = 0;
    for (const y in codeArray) {
        for (const x in codeArray[y]) {
            const bordered = pointerIndex[x] !== undefined && pointerIndex[x][y] === true;
            let color = "white";
            let title = "";
            let content = "";
            const curItem = codeArray[y][x];
            if (typeof curItem === "string") {
                color = instructionColorTable[curItem];
                if (typeof color === "undefined") {
                    if (curItem === " ") {
                        title = "32";
                        content = curItem;
                    }
                    else {
                        color = DARKMODE ? "darkgrey" : "lightgrey";
                        title = curItem.charCodeAt(0).toString();
                        content = curItem;
                    }
                }
                else {
                    if (DARKMODE) {
                        if (color === "black") {
                            color = "lightgrey";
                        }
                        else if (color === colorOp) {
                            color = "#00abff";
                        }
                    }
                    title = curItem.charCodeAt(0).toString();
                    content = curItem;
                }
            }
            else if (typeof curItem === "undefined") {
                title = "32";
                content = " ";
            }
            else {
                color = DARKMODE ? "darkgrey" : "lightgrey";
                title = curItem.toString();
                content = "Ø";
            }
            childArray.push(React.createElement("span", { className: bordered ? (DARKMODE ? "bordered_char_darkmode" : "bordered_char") : "", style: { color: color }, title: title, key: key++ }, content === " " ? "\u00A0" : content));
        }
        childArray.push(React.createElement("br", { key: key++ }));
    }
    return React.createElement(React.Fragment, null, ...childArray);
}
function printOutput(newString, curOutput, outputElement) {
    let newOutput = "";
    if (newString === null) {
        newOutput = curOutput.substring(0, curOutput.length - 1);
    }
    else {
        newOutput = curOutput + newString;
    }
    outputElement.innerHTML = newOutput;
    outputElement.scrollTop = outputElement.scrollHeight;
    return newOutput;
}
function runBefunge(inputText, stateShown, pauseInterval, setCodeArray, outputRef, setStateContent, setStackContent, setIsRunning, stepOnce) {
    if (isNaN(pauseInterval) || pauseInterval < 0) {
        pauseInterval = 0;
    }
    const codeArray = inputText.split("\n").map((line) => line.split(""));
    setCodeArray(codeArray);
    if (outputRef.current) {
        outputRef.current.innerHTML = "";
    }
    const outputElement = outputRef.current;
    const stateWidth = codeArray.reduce((x, row) => Math.max(x, row.length), -99);
    const stateHeight = codeArray.length;
    const pointers = [{ ip: { x: 0, y: 0 }, delta: { x: 1, y: 0 } }];
    const pointerIndex = { 0: { 0: true } };
    const stacks = [[[]]];
    const pointersStringmode = [false];
    if (stateShown) {
        setStateContent(buildStateContent(codeArray, pointerIndex));
    }
    HALT_EXECUTION = false;
    PAUSE_EXECUTION = false;
    PAUSE_STATE = null;
    if (stateShown) {
        setTimeout(() => {
            step(codeArray, pointers, pointerIndex, stacks, stateShown, stateWidth, stateHeight, pauseInterval, pointersStringmode, "", outputElement, setStateContent, setStackContent, setIsRunning, stepOnce);
        }, 0);
    }
    else {
        setTimeout(() => {
            step(codeArray, pointers, pointerIndex, stacks, false, stateWidth, stateHeight, pauseInterval, pointersStringmode, "", outputElement, setStateContent, setStackContent, setIsRunning, false);
        });
    }
}
function step(codeArray, pointers, pointerIndex, stacks, stateShown, stateWidth, stateHeight, pauseInterval, pointersStringmode, outputContent, outputElement, setStateContent, setStackContent, setIsRunning, stepOnce = false) {
    if (PAUSE_EXECUTION) {
        PAUSE_STATE = {
            codeArray: codeArray,
            pointers: pointers,
            pointerIndex: pointerIndex,
            stacks: stacks,
            stateShown: stateShown,
            stateWidth: stateWidth,
            stateHeight: stateHeight,
            pauseInterval: pauseInterval,
            pointersStringmode: pointersStringmode,
            outputContent: outputContent,
            outputElement: outputElement,
            setStateContent: setStateContent,
            setStackContent: setStackContent,
            setIsRunning: setIsRunning,
        };
        return;
    }
    if (HALT_EXECUTION) {
        haltExecution(codeArray, stateShown, setStateContent, setStackContent, setIsRunning);
        return;
    }
    const numIters = stateShown ? 1 : STEPS_BTWN_CALLBACKS;
    for (let ctr = 0; ctr < numIters && !HALT_EXECUTION; ctr++) {
        for (let i = 0; i < pointers.length; i++) {
            const ip = pointers[i].ip;
            const delta = pointers[i].delta;
            const toss = stacks[i][stacks[i].length - 1];
            const curCommand = codeArray[ip.y][ip.x];
            let flag = 3;
            if (pointersStringmode[i]) {
                if (typeof curCommand === "string") {
                    if (curCommand === '"') {
                        pointersStringmode[i] = false;
                    }
                    else {
                        toss.push(BigInt(curCommand.charCodeAt(0)));
                    }
                }
                else if (curCommand === undefined) {
                    toss.push(BigInt(32));
                }
                else {
                    toss.push(curCommand);
                }
            }
            else if (typeof curCommand === "bigint") {
            }
            else {
                [flag, outputContent, stateWidth, stateHeight] = doInstruction(codeArray, curCommand, stateShown, ip, delta, pointers, pointerIndex, i, pointersStringmode, stacks, outputContent, stateWidth, stateHeight, outputElement);
                if (flag === 1) {
                    i--;
                }
                else {
                    if (flag === 0) {
                        updatePosition(pointers[i].ip, pointers[i].delta, stateWidth, stateHeight, stateShown, codeArray, pointersStringmode, i, pointerIndex);
                        i++;
                    }
                    else if (flag === 2) {
                        HALT_EXECUTION = true;
                    }
                }
            }
            if (HALT_EXECUTION) {
                break;
            }
            else if (flag !== 1) {
                updatePosition(ip, delta, stateWidth, stateHeight, stateShown, codeArray, pointersStringmode, i, pointerIndex);
            }
        }
        if (HALT_EXECUTION) {
            break;
        }
    }
    if (stateShown) {
        setStateContent(buildStateContent(codeArray, pointerIndex));
        setStackContent(buildStackContent(stacks[stacks.length - 1]));
    }
    if (HALT_EXECUTION) {
        haltExecution(codeArray, stateShown, setStateContent, setStackContent, setIsRunning);
        return;
    }
    if (stepOnce) {
        PAUSE_STATE = {
            codeArray: codeArray,
            pointers: pointers,
            pointerIndex: pointerIndex,
            stacks: stacks,
            stateShown: stateShown,
            stateWidth: stateWidth,
            stateHeight: stateHeight,
            pauseInterval: pauseInterval,
            pointersStringmode: pointersStringmode,
            outputContent: outputContent,
            outputElement: outputElement,
            setStateContent: setStateContent,
            setStackContent: setStackContent,
            setIsRunning: setIsRunning,
        };
    }
    else {
        setTimeout(() => {
            step(codeArray, pointers, pointerIndex, stacks, stateShown, stateWidth, stateHeight, pauseInterval, pointersStringmode, outputContent, outputElement, setStateContent, setStackContent, setIsRunning, stepOnce);
        }, pauseInterval);
    }
}
function haltExecution(codeArray, stateShown, setStateContent, setStackContent, setIsRunning) {
    if (stateShown) {
        setStateContent(buildStateContent(codeArray, {}));
        setStackContent("");
    }
    setIsRunning(false);
    PAUSE_STATE = null;
    PAUSE_EXECUTION = false;
}
function updatePointerIndex(pointerIndex, x, y, value) {
    if (pointerIndex[x] === undefined) {
        pointerIndex[x] = {};
    }
    pointerIndex[x][y] = value;
}
function updatePosition(ip, delta, stateWidth, stateHeight, stateShown, codeArray, pointersStringmode, pointerId, pointerIndex) {
    if (stateShown) {
        updatePointerIndex(pointerIndex, ip.x, ip.y, false);
    }
    var ctr = 0;
    do {
        ip.x = (ip.x + delta.x) % stateWidth;
        ip.y = (ip.y + delta.y) % stateHeight;
        if (ip.x < 0) {
            ip.x = stateWidth + ip.x;
        }
        if (ip.y < 0) {
            ip.y = stateHeight + ip.y;
        }
        ctr++;
    } while ((codeArray[ip.y] === undefined ||
        codeArray[ip.y][ip.x] === undefined ||
        codeArray[ip.y][ip.x] === " ") &&
        !pointersStringmode[pointerId] &&
        ctr < STEPS_OVER_WHITESPACE);
    if (ctr === STEPS_OVER_WHITESPACE) {
        setTimeout(() => {
            updatePosition(ip, delta, stateWidth, stateHeight, stateShown, codeArray, pointersStringmode, pointerId, pointerIndex);
        }, 0);
    }
    else {
        if (stateShown) {
            updatePointerIndex(pointerIndex, ip.x, ip.y, true);
        }
    }
}
function doInstruction(codeArray, curCommand, stateShown, ip, delta, pointers, pointerIndex, pointerId, pointersStringmode, stacks, outputContent, stateWidth, stateHeight, outputElement) {
    var _a;
    const toss = stacks[pointerId][stacks[pointerId].length - 1];
    switch (curCommand) {
        case "q":
            return [2, outputContent, stateWidth, stateHeight];
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            toss.push(BigInt(curCommand));
            break;
        case "a":
        case "b":
        case "c":
        case "d":
        case "e":
        case "f":
            toss.push(BigInt(curCommand.charCodeAt(0) - 87));
            break;
        case '"':
            pointersStringmode[pointerId] = true;
            break;
        case "$":
            toss.pop();
            break;
        case ":":
            if (toss.length > 0) {
                toss.push(toss[toss.length - 1]);
            }
            break;
        case "\\":
            if (toss.length > 1) {
                const temp = toss[toss.length - 1];
                toss[toss.length - 1] = toss[toss.length - 2];
                toss[toss.length - 2] = temp;
            }
            break;
        case "+":
            handleArithmetic(toss, (a, b) => a + b);
            break;
        case "*":
            handleArithmetic(toss, (a, b) => a * b);
            break;
        case "-":
            handleArithmetic(toss, (a, b) => a - b);
            break;
        case "/":
            handleArithmetic(toss, (a, b) => (b === ZERO ? ZERO : a / b));
            break;
        case "%":
            handleArithmetic(toss, (a, b) => (b === ZERO ? ZERO : a % b));
            break;
        case ".":
            if (toss.length > 0) {
                outputContent = printOutput(toss.pop().toString() + " ", outputContent, outputElement);
            }
            break;
        case ",":
            if (toss.length > 0) {
                const num = bigIntAsInt(toss.pop());
                if (num === 8) {
                    outputContent = printOutput(null, outputContent, outputElement);
                }
                else {
                    outputContent = printOutput(String.fromCharCode(num), outputContent, outputElement);
                }
            }
            break;
        case "&":
            const num = prompt("Enter an integer");
            let ints = [];
            if (num === null) {
                ints = ["0"];
            }
            else {
                ints = (_a = num.match(/-?[0-9]+/)) !== null && _a !== void 0 ? _a : ["0"];
            }
            toss.push(BigInt(ints[0]));
            break;
        case "~":
            const char = prompt("Enter a character");
            if (char === "" || char === null) {
                toss.push(BigInt(10));
            }
            else {
                toss.push(BigInt(char.charCodeAt(0)));
            }
            break;
        case "!":
            if (toss.length > 0) {
                toss[toss.length - 1] = toss[toss.length - 1] === ZERO ? ONE : ZERO;
            }
            break;
        case "#":
            if (stateShown) {
                updatePointerIndex(pointerIndex, ip.x, ip.y, false);
            }
            ip.x = (ip.x + delta.x) % stateWidth;
            ip.y = (ip.y + delta.y) % stateHeight;
            if (ip.x < 0) {
                ip.x = stateWidth + ip.x;
            }
            if (ip.y < 0) {
                ip.y = stateHeight + ip.y;
            }
            if (stateShown) {
                updatePointerIndex(pointerIndex, ip.x, ip.y, true);
            }
            break;
        case "<":
            delta.x = -1;
            delta.y = 0;
            break;
        case "^":
            delta.x = 0;
            delta.y = -1;
            break;
        case ">":
            delta.x = 1;
            delta.y = 0;
            break;
        case "v":
            delta.x = 0;
            delta.y = 1;
            break;
        case "?":
            let rand = Math.floor(Math.random() * 4);
            switch (rand) {
                case 0:
                    delta.x = -1;
                    delta.y = 0;
                    break;
                case 1:
                    delta.x = 0;
                    delta.y = -1;
                    break;
                case 2:
                    delta.x = 1;
                    delta.y = 0;
                    break;
                default:
                    delta.x = 0;
                    delta.y = 1;
                    break;
            }
            break;
        case "‽":
            let rand1 = 0, rand2 = 0;
            while (rand1 === 0 && rand2 === 0) {
                rand1 = Math.floor(Math.random() * 2 * codeArray.length + 1) - codeArray.length;
                rand2 = Math.floor(Math.random() * 2 * codeArray[0].length + 1) - codeArray[0].length;
            }
            delta.x = rand1;
            delta.y = rand2;
            break;
        case "`":
            handleArithmetic(toss, (a, b) => (a > b ? ONE : ZERO));
            break;
        case "|":
            if (toss.length > 0 && toss.pop() !== ZERO) {
                delta.x = 0;
                delta.y = -1;
            }
            else {
                delta.x = 0;
                delta.y = 1;
            }
            break;
        case "_":
            if (toss.length > 0 && toss.pop() !== ZERO) {
                delta.x = -1;
                delta.y = 0;
            }
            else {
                delta.x = 1;
                delta.y = 0;
            }
            break;
        case "g":
            if (toss.length > 1) {
                const y = bigIntAsInt(toss.pop());
                const x = bigIntAsInt(toss.pop());
                pushItemAtLocation(toss, x, y, codeArray);
            }
            break;
        case "p":
            if (toss.length > 2) {
                const y = bigIntAsInt(toss.pop());
                const x = bigIntAsInt(toss.pop());
                const item = toss.pop();
                if (31 < item && item < 127) {
                    [stateWidth, stateHeight] = putItemOnBoard(String.fromCharCode(bigIntAsInt(item)), x, y, codeArray, stateWidth, stateHeight);
                }
                else {
                    [stateWidth, stateHeight] = putItemOnBoard(item, x, y, codeArray, stateWidth, stateHeight);
                }
            }
            break;
        case "@":
            if (pointers.length === 1) {
                return [2, outputContent, stateWidth, stateHeight];
            }
            else {
                if (stateShown) {
                    updatePointerIndex(pointerIndex, ip.x, ip.y, false);
                }
                pointers.splice(pointerId, 1);
                pointersStringmode.splice(pointerId, 1);
                stacks.splice(pointerId, 1);
                return [1, outputContent, stateWidth, stateHeight];
            }
        case "n":
            toss.splice(0);
            break;
        case "{":
            const newToss = [];
            if (toss.length > 0) {
                const n = bigIntAsInt(toss.pop());
                if (toss.length >= n) {
                    newToss.push(...toss.splice(toss.length - n));
                }
                else {
                    newToss.push(...new Array(n - toss.length).fill(ZERO).concat(toss.splice(0)));
                }
            }
            stacks[pointerId].push(newToss);
            break;
        case "}":
            if (stacks[pointerId].length > 1) {
                if (toss.length > 0) {
                    const soss = stacks[pointerId][stacks[pointerId].length - 2];
                    const n = bigIntAsInt(toss.pop());
                    if (toss.length >= n) {
                        soss.splice.apply(soss, [soss.length, 0, ...toss.splice(toss.length - n)]);
                    }
                    else {
                        soss.splice.apply(soss, [
                            soss.length,
                            0,
                            ...new Array(n - toss.length).fill(ZERO).concat(toss),
                        ]);
                    }
                }
                stacks[pointerId].pop();
            }
            break;
        case "u":
            if (toss.length > 0) {
                let n = bigIntAsInt(toss.pop());
                for (let j = 0; j < n; j++) {
                    const item = stacks[pointerId][stacks[pointerId].length - 2].pop();
                    toss.push(item === undefined ? ZERO : item);
                }
            }
            break;
        case "x":
            if (toss.length > 1) {
                delta.y = bigIntAsInt(toss.pop());
                delta.x = bigIntAsInt(toss.pop());
            }
            break;
        case "[": {
            const x = delta.x;
            const y = delta.y;
            delta.x = -y;
            delta.y = x;
            break;
        }
        case "]": {
            const x = delta.x;
            const y = delta.y;
            delta.x = y;
            delta.y = -x;
            break;
        }
        case "w":
            if (toss.length > 1) {
                const b = toss.pop();
                const a = toss.pop();
                if (a < b) {
                    const x = delta.x;
                    const y = delta.y;
                    delta.x = -y;
                    delta.y = x;
                }
                else if (a > b) {
                    const x = delta.x;
                    const y = delta.y;
                    delta.x = y;
                    delta.y = -x;
                }
            }
            break;
        case "t":
            const newSOSS = [];
            for (const stack of stacks[pointerId]) {
                newSOSS.push(stack.slice());
            }
            pointers.splice(pointerId, 0, {
                ip: { x: ip.x, y: ip.y },
                delta: { x: -delta.x, y: -delta.y },
            });
            pointersStringmode.splice(pointerId, 0, false);
            stacks.splice(pointerId, 0, newSOSS);
            return [0, outputContent, stateWidth, stateHeight];
        case "'":
            if (stateShown) {
                updatePointerIndex(pointerIndex, ip.x, ip.y, false);
            }
            ip.x = (ip.x + delta.x) % stateWidth;
            ip.y = (ip.y + delta.y) % stateHeight;
            if (ip.x < 0) {
                ip.x = stateWidth + ip.x;
            }
            if (ip.y < 0) {
                ip.y = stateHeight + ip.y;
            }
            if (stateShown) {
                updatePointerIndex(pointerIndex, ip.x, ip.y, true);
            }
            pushItemAtLocation(toss, ip.x, ip.y, codeArray);
            break;
        case "s":
            if (stateShown) {
                updatePointerIndex(pointerIndex, ip.x, ip.y, false);
            }
            ip.x = (ip.x + delta.x) % stateWidth;
            ip.y = (ip.y + delta.y) % stateHeight;
            if (ip.x < 0) {
                ip.x = stateWidth + ip.x;
            }
            if (ip.y < 0) {
                ip.y = stateHeight + ip.y;
            }
            if (toss.length > 0) {
                const item = toss.pop();
                if (31 < item && item < 127) {
                    [stateWidth, stateHeight] = putItemOnBoard(String.fromCharCode(bigIntAsInt(item)), ip.x, ip.y, codeArray, stateWidth, stateHeight);
                }
                else {
                    [stateWidth, stateHeight] = putItemOnBoard(item, ip.x, ip.y, codeArray, stateWidth, stateHeight);
                }
            }
            if (stateShown) {
                updatePointerIndex(pointerIndex, ip.x, ip.y, true);
            }
            break;
        case "r":
            delta.x *= -1;
            delta.y *= -1;
            break;
        case " ":
            break;
        default:
            break;
    }
    return [3, outputContent, stateWidth, stateHeight];
}
function pushItemAtLocation(toss, x, y, codeArray) {
    if (codeArray[y] === undefined || codeArray[y][x] === undefined) {
        toss.push(BigInt(32));
    }
    else {
        const item = codeArray[y][x];
        if (typeof item === "string") {
            toss.push(BigInt(item.charCodeAt(0)));
        }
        else {
            toss.push(item);
        }
    }
}
function putItemOnBoard(item, x, y, codeArray, stateWidth, stateHeight) {
    if (x < 0 || y < 0) {
        return [stateWidth, stateHeight];
    }
    if (codeArray[y] === undefined) {
        for (let i = 0; i <= y - stateHeight; i++) {
            codeArray.push([]);
        }
        stateHeight = codeArray.length;
    }
    if (codeArray[y][x] === undefined) {
        codeArray[y].push(...new Array(x - codeArray[y].length + 1).fill(" "));
        stateWidth = Math.max(stateWidth, codeArray[y].length);
    }
    codeArray[y][x] = item;
    return [stateWidth, stateHeight];
}
function bigIntAsInt(n) {
    if (n < -Number.MAX_SAFE_INTEGER) {
        return -Number.MAX_SAFE_INTEGER;
    }
    else if (n > Number.MAX_SAFE_INTEGER) {
        return Number.MAX_SAFE_INTEGER;
    }
    else {
        return parseInt(n.toString(10));
    }
}
function handleArithmetic(toss, op) {
    if (toss.length > 1) {
        const b = toss.pop();
        const a = toss.pop();
        toss.push(op(a, b));
    }
}
const colorConst = "black";
const colorOp = "blue";
const colorMove = "limegreen";
const colorIO = "#cc00ff";
const colorStack = "orange";
const colorQuit = "red";
const colorStorage = "cyan";
const instructionColorTable = {
    "0": colorConst,
    "1": colorConst,
    "2": colorConst,
    "3": colorConst,
    "4": colorConst,
    "5": colorConst,
    "6": colorConst,
    "7": colorConst,
    "8": colorConst,
    "9": colorConst,
    a: colorConst,
    b: colorConst,
    c: colorConst,
    d: colorConst,
    e: colorConst,
    f: colorConst,
    "+": colorOp,
    "-": colorOp,
    "*": colorOp,
    "/": colorOp,
    "%": colorOp,
    "!": colorOp,
    "`": colorOp,
    "<": colorMove,
    "^": colorMove,
    ">": colorMove,
    v: colorMove,
    "?": colorMove,
    "‽": colorMove,
    _: colorMove,
    "|": colorMove,
    "#": colorMove,
    r: colorMove,
    x: colorMove,
    "[": colorMove,
    "]": colorMove,
    w: colorMove,
    ":": colorStack,
    "\\": colorStack,
    $: colorStack,
    n: colorStack,
    "{": colorStack,
    "}": colorStack,
    u: colorStack,
    ".": colorIO,
    ",": colorIO,
    "&": colorIO,
    "~": colorIO,
    '"': colorIO,
    "'": colorIO,
    s: colorIO,
    q: colorQuit,
    "@": colorQuit,
    g: colorStorage,
    p: colorStorage,
    t: "magenta",
};


/***/ }),

/***/ "./src/components/BefungeExamples.tsx":
/*!********************************************!*\
  !*** ./src/components/BefungeExamples.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const chevron_png_1 = __importDefault(__webpack_require__(/*! ../images/chevron.png */ "./src/images/chevron.png"));
const chevron_webp_1 = __importDefault(__webpack_require__(/*! ../images/chevron.webp */ "./src/images/chevron.webp"));
const BefungeExamples = ({ setInputTextAndState }) => {
    const [expanded, toggleExpanded] = (0, react_2.useState)(false);
    return (react_1.default.createElement("div", { className: expanded ? "examples_expanded" : "examples_collapsed" },
        MainButton(expanded, toggleExpanded),
        expanded ? (react_1.default.createElement("div", { className: "centered fit_content flex" },
            buildButton("helloWorld", "Hello World!", setInputTextAndState, `"!dlrow olleH"v,_@
              >:^`),
            buildButton("factorial", "Factorial", setInputTextAndState, `&:>00pv
  *   1
  g   -
  0   :
.@^0 :_00g`),
            buildButton("factor", "Factor", setInputTextAndState, `&:." =",,:v ; Factors an integer
v  _v#\`0:<_0.@
 -10<    ^*-10\\
>00p>00g1-#v_>:#._@
^/\\g00:<   2
     >   1+v
     ^_^#%<:
          \\0
          g0
          ^<`),
            buildButton("binomial", "Binomial", setInputTextAndState, `>            a         4         v
 calculates n^ choose k^
v                                < makes k>n-k
>:1aa*p \\ :0aa*p \\ -: 1aa*g \\\`#v_ 1aa*g2av
 n-k!                    vp*aa2<vp*aa1p*a<
v:g*aa2     tv#     tv#  <      <
>3aa*p1-:v    v:g*aa0<        >16aa*p@
^ *g*aa3:_v   >4aa*p:1aa*g1+-v
   @p*aa51<   ^ * g*aa4 : -1 _^
<v -1  g*aa5 <
$>6aa*g 1-v
^      _v#<
^       _4aa*g3aa*g/.q`),
            buildButton("pi", "Pi", setInputTextAndState, `;              5                ;v>74* 383*p >0:>446*g\\\`#v_383*g1+383*p0083*p1-:v
;  calculates n^ digits of pi   ;    *----*   v- 1g*383::<v g*380g-1g*383 <p*831<
;  with the spigot algorithm    ; n  | -> |   >g a*\\383*gv>+:138*g2d*g:00v^_v
;  described in [1]             ;    |loop|     ^ : +1 p <v0pg*383g*381%p< +n
v 1p*6460 p-1*554: /3*a p-1*552: <p  *----*               >0g/138*g55*g*0v 10
> 055*p 10>+00p:00g\`#v_a0d2*p2093*^v               p*646+1g*646<v*381p*38< :c
v*d2\\+1*2p *55::::g00<         v_v# \`\\g*646:< 1,8.+1g*2c5<;10; n>g1-:138*p ^2
>p:2\\39*p1^       vp*6461p*6450>#<    0.8,1+^ v  !g*646 _^#-a _^#- 9 : g *  <
546*p1646*pv      <                <  >-2c2*p|>#v_546*g.8,1>:646*g\\\`#v_083*g
           > 383*g1+383*p   22c*g:0\`\\1^      @  >         1^ +1 ,8.9 <

_____________________________________________________________________________
                                                                             |
References:                                                                  |
 [1] - S. Rabinowitz and S. Wagon, A Spigot Algorithm for the Digits of Pi.  |
       The American Mathematical Monthly, 102:195-203, 1995.                 |
 [2] - J. Gibbons, An unbounded spigot algorithm for the digits of Pi.       |
       The American Mathematical Monthly, 113(4):318-328, 2006.              |
                                                                             |
_____________________________________________________________________________|`),
            buildButton("quine", "Quine", setInputTextAndState, `200p010p0v>v·················g01g00<
v·,8.,8.2<·g·······>····>,·00g1+00p^
>00g10g···^>:3a*2+-|················
:gp01:+1g01p0000,a$<····|-+2*a3·····
························@···········
·······This·is·a·simple·quine·······
·····(self-reproducing·program)·····
··It·is·quite·easy·to·write·a·quine·
in·befunge,·due·to·its·introspective
nature.·This·one·prints·itself·until
it·encounters·whitespace,·hence·the·
dots·everywhere.·The·algorithm·is:··
····································
0.·Write·out·the·first·two·numbers,·
···since·these·cells·are·later·used·
···as·storage·locations.············
1.·Initialize·x=2,y=0.··············
2.·Get·position·(x,y).··············
3.·If·it·is·empty:··················
····a.·Write·a·new·line.············
····b.·Increment·y·and·set·x=0.·····
····c.·Get·(x,y)·again.·············
····d.·If·it·is·still·empty,·halt.··
4.·Write·it·out.····················
5.·Increment·x.·····················
6.·Go·to·step·2.····················`))) : null));
};
function buildButton(id, text, setInputTextAndState, code) {
    return (react_1.default.createElement("div", { className: "button_container" },
        react_1.default.createElement("button", { id: id, onClick: () => {
                setInputTextAndState(code);
            } }, text)));
}
function MainButton(expanded, toggleExpanded) {
    return (react_1.default.createElement("button", { id: "examplesButton", onClick: () => toggleExpanded(!expanded) },
        react_1.default.createElement("div", { id: "chevronContainer", className: "float_left" + (expanded ? " upsidedown" : "") },
            react_1.default.createElement("picture", { style: { verticalAlign: "middle" } },
                react_1.default.createElement("source", { type: "image/webp", srcSet: chevron_webp_1.default }),
                react_1.default.createElement("img", { src: chevron_png_1.default, height: "14px", width: "14px", alt: "" }))),
        "\u00A0Examples"));
}
exports["default"] = BefungeExamples;


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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/befunge.tsx"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVmdW5nZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6Qiw4QkFBOEI7QUFDOUIsMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxpSEFBaUgsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsV0FBVyxZQUFZLFlBQVksWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLGFBQWEsY0FBYyxZQUFZLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxjQUFjLGVBQWUsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxhQUFhLGFBQWEsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLEtBQUssTUFBTSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxRQUFRLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FB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YWNrOi8vLy4vc3JjL2ltYWdlcy9jaGV2cm9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NoZXZyb24ud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Nob2NvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Nob2NvLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb21wYXNzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NvbXBhc3Mud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hlYXJ0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hlYXJ0LndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ob21lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hvbWUud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL211c2hyb29tLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL211c2hyb29tLndlYnAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlZnVuZ2Uuc2Nzcz83MmIwIiwid2VicGFjazovLy8uL3NyYy9iZWZ1bmdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CZWZ1bmdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CZWZ1bmdlRXhhbXBsZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLFxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNlZGVkO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG5kaXYucCB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuZGl2LnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMnB0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcbiAgZm9udC13ZWlnaHQ6IDI1MDtcbiAgbWFyZ2luOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbG9hdDogbm9uZTtcbn1cblxuLmlubmVyX2NhcmQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5rYXRleCB7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICBmb250OiBub3JtYWwgMS4xZW0gS2FUZVhfTWFpbiwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1pbmRlbnQ6IDA7XG59XG5cbi5rYXRleC1kaXNwbGF5IHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG5waWN0dXJlID4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY2VudGVyZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZml0X2NvbnRlbnQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4vKipcbiAqIE1lbnUgU3R5bGluZ1xuICovXG4ubWVudV9jb2xsYXBzZWQge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudV9leHBhbmRlZCB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA3LjVweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIC5tZW51X2V4cGFuZGVkIHtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICB3aWR0aDogLW1vei1hdmFpbGFibGU7XG4gIH1cbn1cblxuLm1lbnVfYnV0dG9uIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1lbnVfYnV0dG9uX2lubmVyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLXdpZHRoOiA1LjcxNDI4NTcxNDNweDtcbiAgaGVpZ2h0OiAzNC4yODU3MTQyODU3cHg7XG59XG5cbi5tZW51X2J1dHRvbl9saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNS43MTQyODU3MTQzcHg7XG4gIG1hcmdpbi1ib3R0b206IDUuNzE0Mjg1NzE0M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuYS5tZW51X2l0ZW0ge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmEubWVudV9pdGVtOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnVsLm1lbnVfbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOGVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIHVsLm1lbnVfbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogNTUuNzE0Mjg1NzE0M3B4O1xuICB9XG59XG51bC5tZW51X2xpc3QgPiBsaSA+IGEgPiBwIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbnVsLm1hdGhfbGlzdCA+IGxpIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbn1cblxuLmlubGluZV9jb2RlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBwYWRkaW5nOiAxcHggMXB4O1xufVxuXG50ZXh0YXJlYS5jb2RlYmxvY2sge1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG59XG5cbnNwYW4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cbnNwYW4uYmx1ZSB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY29tbWFuZF90YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbW1hbmRfdGFibGUgdGgsXG4uY29tbWFuZF90YWJsZSB0ZCB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbn1cbi5jb21tYW5kX3RhYmxlIHRoIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuLmNvbW1hbmRfdGFibGUgdGQge1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLnN1YnNlY3Rpb24ge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLm5vZGlzcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi51cHNpZGVkb3duIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcbn1cblxuLmZsb2F0X2xlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuY2FudmFzLmZ1bGxfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5saXN0X25vX3N0eWxlIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5idXR0b24ge1xuICBmb250LXNpemU6IDEycHQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDA7XG59XG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b24jcnVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2ZTJiMztcbn1cbmJ1dHRvbiNkaXNwbGF5QnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlYTNmZjtcbn1cbmJ1dHRvbiNwYXVzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWJkZmM7XG59XG5idXR0b24jc3RlcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMyNjg7XG59XG5cbmRpdi5idXR0b25fY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC41ZW07XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5kaXYub3B0aW9uc19jb250YWluZXIge1xuICBwYWRkaW5nOiAxZW0gMWVtO1xuICBmbG9hdDogbGVmdDtcbn1cblxuaW5wdXQjcGF1c2VJbnRlcnZhbCB7XG4gIHdpZHRoOiA0ZW07XG4gIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dCNwYXVzZUludGVydmFsOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBpbnB1dCNwYXVzZUludGVydmFsOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbnNwYW4uYm9yZGVyZWRfY2hhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn1cbnNwYW4uYm9yZGVyZWRfY2hhcl9kYXJrbW9kZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn1cbnNwYW4ucmlnaHRfYWxpZ25lZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmRpdiNiZWZ1bmdlQ29kZVdyYXBwZXIsXG5kaXYjZGlzcGxheSxcbmRpdiNvdXRwdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGV4dGFyZWEge1xuICBmb250LXNpemU6IDEycHQ7XG4gIGJvcmRlcjogdGhpbiBzb2xpZCBibGFjaztcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgZm9udC1rZXJuaW5nOiBub25lO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNvZGVfb3V0cHV0IHtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBib3JkZXI6IHRoaW4gc29saWQgYmxhY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB3aWR0aDogLW1vei1hdmFpbGFibGU7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIGZvbnQta2VybmluZzogbm9uZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY29kZV9vdXRwdXQ6aG92ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi53b3JkX3dyYXAge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IC8qIENTUzMgKi9cbiAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7IC8qIEZpcmVmb3ggKi9cbiAgd2hpdGUtc3BhY2U6IC1wcmUtd3JhcDsgLyogT3BlcmEgPDcgKi9cbiAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwOyAvKiBPcGVyYSA3ICovXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgLyogSUUgKi9cbn1cblxuI2JlZnVuZ2VPdXRwdXQge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGl2I2Rpc3BsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cbmRpdiNkaXNwbGF5ICNiZWZ1bmdlU3RhdGUge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuZGl2I2Rpc3BsYXkgI2JlZnVuZ2VTdGFjayB7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci10b3A6IDA7XG59XG5cbmRpdiNjaGV2cm9uQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG5idXR0b24jZXhhbXBsZXNCdXR0b24ge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuM2VtIDFlbTtcbn1cblxuLmV4YW1wbGVzX2NvbGxhcHNlZCB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiAxNXB4O1xuICBmbG9hdDogbGVmdDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uZXhhbXBsZXNfZXhwYW5kZWQge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcbn1cblxuLm1heF9jb250ZW50IHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9iZWZ1bmdlLnNjc3NcIl0s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QUE7RUFDQSxrQkFBQTtFQWFBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBeVBEO0FBeFBDO0VBQ0MsZUFBQTtBQTBQRjs7QUFyUEE7RUFDQyxxQkFBQSxFQUFBLFNBQUE7RUFDQSwwQkFBQSxFQUFBLFlBQUE7RUFDQSxzQkFBQSxFQUFBLGFBQUE7RUFDQSx3QkFBQSxFQUFBLFlBQUE7RUFDQSxxQkFBQSxFQUFBLE9BQUE7QUF3UEQ7O0FBclBBO0VBQ0MsYUFBQTtFQUNBLFdBQUE7QUF3UEQ7O0FBclBBO0VBQ0MsV0FBQTtFQUNBLFVBQUE7QUF3UEQ7QUF0UEM7RUFDQyxhQUFBO0FBd1BGO0FBclBDO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQXVQRjs7QUFuUEE7RUFDQyxZQUFBO0FBc1BEOztBQW5QQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXNQRDs7QUEzT0E7RUFQQyxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlEeEphO0VDeUpiLFdBQUE7RUFDQSxZQUFBO0FBc1BEOztBQS9PQTtFQVhDLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUR4SmE7RUN5SmIsV0FBQTtFQUNBLFlBQUE7RUFTQSw2QkFBQTtFQUNBLHFCQUFBO0FBc1BEOztBQW5QQTtFQUNDLGtCQUFBO0FBc1BEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuJHBhZ2UtbWFyZ2luOiAxNXB4O1xcclxcbiRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsXFxyXFxuXFx0XFx0c2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdHBhZGRpbmc6IDElO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNkM2VkZWQ7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcblxcdG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcclxcblxcdG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXHJcXG5cXHRtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XFxyXFxuXFx0bWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnAge1xcclxcblxcdG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xcclxcblxcdG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcXHJcXG5cXHRtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XFxyXFxuXFx0bWFyZ2luLWlubGluZS1lbmQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnRpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDMycHQ7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXHJcXG5cXHRmb250LXdlaWdodDogMjUwO1xcclxcblxcdG1hcmdpbjogJHBhZ2UtbWFyZ2luO1xcclxcblxcdG1hcmdpbi10b3A6IDA7XFxyXFxuXFx0cGFkZGluZy10b3A6ICRwYWdlLW1hcmdpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdG1pbi1oZWlnaHQ6IDIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuXFx0bWFyZ2luOiAkcGFnZS1tYXJnaW47XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGZsb2F0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXJfY2FyZCB7XFxyXFxuXFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcclxcblxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLy8gS2FUZVggb3ZlcnJpZGUgdG8gbWFrZSB0aGUgZm9udCBzbGlnaHRseSBzbWFsbGVyXFxyXFxuLmthdGV4IHtcXHJcXG5cXHR0ZXh0LXJlbmRlcmluZzogYXV0bztcXHJcXG5cXHRmb250OiBub3JtYWwgMS4xZW0gS2FUZVhfTWFpbiwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS4yO1xcclxcblxcdHRleHQtaW5kZW50OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBJZiB0aGUgbWF0aCBnb2VzIG9mZiB0aGUgc2NyZWVuIGFsbG93IHNjcm9sbGluZ1xcclxcbi5rYXRleC1kaXNwbGF5IHtcXHJcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcclxcblxcdG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG5cXHQvLyBOZWVkIHRvIGFkZCBzb21lIHBhZGRpbmcgc28gdGhlIHNjcm9sbGJhciBkb2Vzbid0IGNvdmVyIHRoZSB0ZXh0XFxyXFxuXFx0cGFkZGluZy10b3A6IDAuNWVtO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAwLjVlbTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxucGljdHVyZSA+IGltZyB7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyZWQge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maXRfY29udGVudCB7XFxyXFxuXFx0d2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIE1lbnUgU3R5bGluZ1xcclxcbiAqL1xcclxcbiRtZW51LWNvbGxhcHNlZC1zaXplOiA1MHB4O1xcclxcbiRtZW51LWlubmVyLXNpZGUtbWFyZ2luOiAkbWVudS1jb2xsYXBzZWQtc2l6ZSAqIDAuMjtcXHJcXG4kbWVudS1pbm5lci10b3AtbWFyZ2luOiAkbWVudS1jb2xsYXBzZWQtc2l6ZSAqIDAuMTtcXHJcXG4kbWVudS1pbm5lci1idXR0b24taGVpZ2h0OiAkbWVudS1jb2xsYXBzZWQtc2l6ZSAtIDIgKiAkbWVudS1pbm5lci10b3AtbWFyZ2luO1xcclxcblxcclxcbkBtaXhpbiBtZW51KCkge1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0bWFyZ2luOiAkcGFnZS1tYXJnaW47XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxuXFx0ei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9jb2xsYXBzZWQge1xcclxcblxcdEBpbmNsdWRlIG1lbnUoKTtcXHJcXG5cXHR3aWR0aDogJG1lbnUtY29sbGFwc2VkLXNpemU7XFxyXFxuXFx0aGVpZ2h0OiAkbWVudS1jb2xsYXBzZWQtc2l6ZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2V4cGFuZGVkIHtcXHJcXG5cXHRAaW5jbHVkZSBtZW51KCk7XFxyXFxuXFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdG1hcmdpbi1ib3R0b206IG1hdGguZGl2KCRwYWdlLW1hcmdpbiwgMik7XFxyXFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDIvMykge1xcclxcblxcdFxcdHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcclxcblxcdFxcdHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5tZW51X2J1dHRvbiB7XFxyXFxuXFx0QGluY2x1ZGUgbWVudSgpO1xcclxcblxcdHdpZHRoOiAkbWVudS1jb2xsYXBzZWQtc2l6ZTtcXHJcXG5cXHRoZWlnaHQ6ICRtZW51LWNvbGxhcHNlZC1zaXplO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2J1dHRvbl9pbm5lciB7XFxyXFxuXFx0bWFyZ2luOiAkbWVudS1pbm5lci1zaWRlLW1hcmdpbjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAkbWVudS1pbm5lci10b3AtbWFyZ2luO1xcclxcblxcdG1hcmdpbi1ib3R0b206ICRtZW51LWlubmVyLXRvcC1tYXJnaW47XFxyXFxuXFx0d2lkdGg6ICRtZW51LWNvbGxhcHNlZC1zaXplIC0gMiAqICRtZW51LWlubmVyLXNpZGUtbWFyZ2luO1xcclxcblxcdGJvcmRlci10b3AtY29sb3I6ICNmZmY7XFxyXFxuXFx0Ym9yZGVyLXRvcC1zdHlsZTogc29saWQ7XFxyXFxuXFx0Ym9yZGVyLXRvcC13aWR0aDogbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCwgNyk7XFxyXFxuXFx0aGVpZ2h0OiBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0ICogNiwgNyk7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2J1dHRvbl9saW5lIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQsIDcpO1xcclxcblxcdG1hcmdpbi1ib3R0b206IG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQsIDcpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5hLm1lbnVfaXRlbSB7XFxyXFxuXFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG5cXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbnVsLm1lbnVfbGlzdCB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogJG1lbnUtaW5uZXItc2lkZS1tYXJnaW47XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHdpZHRoOiA4ZW07XFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWFzcGVjdC1yYXRpbzogMi8zKSB7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogJG1lbnUtY29sbGFwc2VkLXNpemUgKyBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0LCA3KTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0JiA+IGxpID4gYSA+IHAge1xcclxcblxcdFxcdG1hcmdpbjogMTZweCAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxudWwubWF0aF9saXN0ID4gbGkge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZV9jb2RlIHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcclxcblxcdHBhZGRpbmc6IDFweCAxcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhLmNvZGVibG9jayB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRyZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcblxcdCYucmVkIHtcXHJcXG5cXHRcXHRjb2xvcjogcmVkO1xcclxcblxcdH1cXHJcXG5cXHQmLmJsdWUge1xcclxcblxcdFxcdGNvbG9yOiBibHVlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWFuZF90YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG5cXHR0aCxcXHJcXG5cXHR0ZCB7XFxyXFxuXFx0XFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG5cXHRcXHRib3JkZXItd2lkdGg6IHRoaW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHRoIHtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcblxcdFxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHR0ZCB7XFxyXFxuXFx0XFx0cGFkZGluZzogMC41ZW07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uc3Vic2VjdGlvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5ub2Rpc3Age1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi51cHNpZGVkb3duIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKC0xKTtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XFxyXFxufVxcclxcblxcclxcbi5mbG9hdF9sZWZ0IHtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuY2FudmFzLmZ1bGxfY2FudmFzIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5ub3BhZGRpbmcge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5saXN0X25vX3N0eWxlIHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi9pbmRleC5zY3NzXFxcIjtcXHJcXG5cXHJcXG4kYnV0dG9uLXBhZGRpbmctdmVydGljYWw6IDAuNWVtO1xcclxcbiRidXR0b24tcGFkZGluZy1ob3Jpem9udGFsOiAxZW07XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRmb250LXNpemU6IDEycHQ7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRwYWRkaW5nOiAkYnV0dG9uLXBhZGRpbmctdmVydGljYWwgJGJ1dHRvbi1wYWRkaW5nLWhvcml6b250YWw7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcclxcblxcdCY6aG92ZXIge1xcclxcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0JiNydW4ge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM2NmUyYjM7XFxyXFxuXFx0fVxcclxcblxcdCYjZGlzcGxheUJ1dHRvbiB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2RlYTNmZjtcXHJcXG5cXHR9XFxyXFxuXFx0JiNwYXVzZSB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhYmRmYztcXHJcXG5cXHR9XFxyXFxuXFx0JiNzdGVwIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMjY4O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuZGl2LmJ1dHRvbl9jb250YWluZXIge1xcclxcblxcdHBhZGRpbmc6IDAuNWVtO1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYub3B0aW9uc19jb250YWluZXIge1xcclxcblxcdHBhZGRpbmc6ICRidXR0b24tcGFkZGluZy12ZXJ0aWNhbCArIDAuNWVtICRidXR0b24tcGFkZGluZy1ob3Jpem9udGFsO1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCNwYXVzZUludGVydmFsIHtcXHJcXG5cXHR3aWR0aDogNGVtO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0Ly8gYm9yZGVyOiBub25lO1xcclxcblxcclxcblxcdCY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuXFx0Jjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuXFx0XFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcblxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcblxcdCYuYm9yZGVyZWRfY2hhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdFxcdG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRcXHRvdXRsaW5lLW9mZnNldDogLTFweDtcXHJcXG5cXHR9XFxyXFxuXFx0Ji5ib3JkZXJlZF9jaGFyX2Rhcmttb2RlIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0XFx0b3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcclxcblxcdFxcdG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xcclxcblxcdH1cXHJcXG5cXHQmLnJpZ2h0X2FsaWduZWQge1xcclxcblxcdFxcdGZsb2F0OiByaWdodDtcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiByaWdodDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbmRpdiNiZWZ1bmdlQ29kZVdyYXBwZXIsXFxyXFxuZGl2I2Rpc3BsYXksXFxyXFxuZGl2I291dHB1dCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBjb2RlRm9ybWF0dGluZygpIHtcXHJcXG5cXHRmb250LXNpemU6IDEycHQ7XFxyXFxuXFx0Ym9yZGVyOiB0aGluIHNvbGlkIGJsYWNrO1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0d2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxyXFxuXFx0d2lkdGg6IC1tb3otYXZhaWxhYmxlO1xcclxcblxcdHdoaXRlLXNwYWNlOiBwcmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0cmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuXFx0Zm9udC1rZXJuaW5nOiBub25lO1xcclxcblxcdG1hcmdpbi10b3A6IDVweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8vIElucHV0XFxyXFxudGV4dGFyZWEge1xcclxcblxcdEBpbmNsdWRlIGNvZGVGb3JtYXR0aW5nKCk7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBTdGF0ZSwgc3RhY2ssIGFuZCBvdXRwdXRcXHJcXG4uY29kZV9vdXRwdXQge1xcclxcblxcdEBpbmNsdWRlIGNvZGVGb3JtYXR0aW5nKCk7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDA7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAwO1xcclxcblxcdHBhZGRpbmc6IDAgMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBGb3Igd3JhcHBpbmcgb3V0cHV0XFxyXFxuLndvcmRfd3JhcCB7XFxyXFxuXFx0d2hpdGUtc3BhY2U6IHByZS13cmFwOyAvKiBDU1MzICovXFxyXFxuXFx0d2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7IC8qIEZpcmVmb3ggKi9cXHJcXG5cXHR3aGl0ZS1zcGFjZTogLXByZS13cmFwOyAvKiBPcGVyYSA8NyAqL1xcclxcblxcdHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDsgLyogT3BlcmEgNyAqL1xcclxcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDsgLyogSUUgKi9cXHJcXG59XFxyXFxuXFxyXFxuI2JlZnVuZ2VPdXRwdXQge1xcclxcblxcdGhlaWdodDogNDAwcHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmRpdiNkaXNwbGF5IHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcclxcblxcdCNiZWZ1bmdlU3RhdGUge1xcclxcblxcdFxcdGhlaWdodDogMjAwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCNiZWZ1bmdlU3RhY2sge1xcclxcblxcdFxcdGhlaWdodDogNjBweDtcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMzBweDtcXHJcXG5cXHRcXHRib3JkZXItdG9wOiAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuZGl2I2NoZXZyb25Db250YWluZXIge1xcclxcblxcdGhlaWdodDogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uI2V4YW1wbGVzQnV0dG9uIHtcXHJcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0cGFkZGluZzogMC4zZW0gMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZXhhbXBsZXNTZWN0aW9uKCkge1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdG1hcmdpbjogJHBhZ2UtbWFyZ2luO1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcblxcdHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4YW1wbGVzX2NvbGxhcHNlZCB7XFxyXFxuXFx0QGluY2x1ZGUgZXhhbXBsZXNTZWN0aW9uKCk7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlc19leHBhbmRlZCB7XFxyXFxuXFx0QGluY2x1ZGUgZXhhbXBsZXNTZWN0aW9uKCk7XFxyXFxuXFx0d2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxyXFxuXFx0d2lkdGg6IC1tb3otYXZhaWxhYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF4X2NvbnRlbnQge1xcclxcblxcdHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jaGV2cm9uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jaGV2cm9uLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvY2hvY28ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2Nob2NvLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvY29tcGFzcy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvY29tcGFzcy53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2hlYXJ0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9oZWFydC53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2hvbWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2hvbWUud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9tdXNocm9vbS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvbXVzaHJvb20ud2VicFwiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL2JlZnVuZ2Uuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMl0hLi9iZWZ1bmdlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQmVmdW5nZSBmcm9tIFwiLi9jb21wb25lbnRzL0JlZnVuZ2VcIjtcclxuaW1wb3J0IFwiLi9iZWZ1bmdlLnNjc3NcIjtcclxuXHJcbnJlbmRlcig8QmVmdW5nZSAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpIGFzIEhUTUxFbGVtZW50KTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQmVmdW5nZUV4YW1wbGVzIGZyb20gXCIuL0JlZnVuZ2VFeGFtcGxlc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcclxuXHJcbmNvbnN0IFpFUk8gPSBCaWdJbnQoMCk7XHJcbmNvbnN0IE9ORSA9IEJpZ0ludCgxKTtcclxuLy8gSWYgcnVubmluZyB3aXRob3V0IHNob3dpbmcgc3RhdGUsIHRoaXMgaXMgdGhlIG51bWJlciBvZiBzdGVwcyB3ZSBzaG91bGQgcnVuIGJlZm9yZSBzZXR0aW5nIGEgdGltZW91dFxyXG5jb25zdCBTVEVQU19CVFdOX0NBTExCQUNLUyA9IDE1MDA7XHJcbi8vIE51bWJlciBvZiB0aW1lcyB3ZSBzaG91bGQgdHJ5IHRvIG1vdmUgYSBwb2ludGVyIG92ZXIgd2hpdGVzcGFjZSBiZWZvcmUgc2V0dGluZyBhIHRpbWVvdXRcclxuY29uc3QgU1RFUFNfT1ZFUl9XSElURVNQQUNFID0gMTAwMDA7XHJcblxyXG52YXIgSEFMVF9FWEVDVVRJT04gPSBmYWxzZTtcclxudmFyIFBBVVNFX0VYRUNVVElPTiA9IGZhbHNlO1xyXG52YXIgREFSS01PREUgPSBmYWxzZTtcclxudmFyIFBBVVNFX1NUQVRFOiBQYXVzZVN0YXRlIHwgbnVsbCA9IG51bGw7XHJcblxyXG50eXBlIFBvaW50ID0ge1xyXG5cdHg6IG51bWJlcjtcclxuXHR5OiBudW1iZXI7XHJcbn07XHJcblxyXG5jbGFzcyBQb2ludGVyIHtcclxuXHRwdWJsaWMgaXA6IFBvaW50O1xyXG5cdHB1YmxpYyBkZWx0YTogUG9pbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGlwOiBQb2ludCwgZGVsdGE6IFBvaW50KSB7XHJcblx0XHR0aGlzLmlwID0gaXA7XHJcblx0XHR0aGlzLmRlbHRhID0gZGVsdGE7XHJcblx0fVxyXG59XHJcblxyXG50eXBlIFBvaW50ZXJJbmRleCA9IHtcclxuXHRbeDogbnVtYmVyXToge1xyXG5cdFx0W3k6IG51bWJlcl06IGJvb2xlYW47XHJcblx0fTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNYWluIEJlZnVuZ2UgY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIEJlZnVuZ2UgY29tcG9uZW50XHJcbiAqL1xyXG5jb25zdCBCZWZ1bmdlOiBSZWFjdC5GQyA9IGZ1bmN0aW9uICgpOiBKU1guRWxlbWVudCB7XHJcblx0Y29uc3QgW3N0YXRlU2hvd24sIHRvZ2dsZVN0YXRlU2hvd25dID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Y29uc3QgW3BhdXNlSW50ZXJ2YWwsIHNldFBhdXNlSW50ZXJ2YWxdID0gdXNlU3RhdGUoXCIyMFwiKTtcclxuXHRjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW3dvcmRXcmFwLCB0b2dnbGVXb3JkV3JhcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2NvZGVBcnJheSwgc2V0Q29kZUFycmF5XSA9IHVzZVN0YXRlPChzdHJpbmcgfCBiaWdpbnQpW11bXT4oW10pO1xyXG5cdGNvbnN0IFtzdGF0ZUNvbnRlbnQsIHNldFN0YXRlQ29udGVudF0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudD4oPFJlYWN0LkZyYWdtZW50IC8+KTtcclxuXHRjb25zdCBbc3RhY2tDb250ZW50LCBzZXRTdGFja0NvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2lzUnVubmluZywgc2V0SXNSdW5uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbcGF1c2VkLCBzZXRQYXVzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCBiZWZ1bmdlT3V0cHV0ID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHJcblx0Y29uc3Qgc2V0SW5wdXRUZXh0QW5kU3RhdGUgPSBmdW5jdGlvbiAodGV4dDogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBhcnkgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpLm1hcCgobGluZSkgPT4gbGluZS5zcGxpdChcIlwiKSk7XHJcblx0XHRzZXRJbnB1dFRleHQodGV4dCk7XHJcblx0XHRzZXRDb2RlQXJyYXkoYXJ5KTtcclxuXHRcdGlmIChzdGF0ZVNob3duKSB7XHJcblx0XHRcdHNldFN0YXRlQ29udGVudChidWlsZFN0YXRlQ29udGVudChhcnksIHt9KSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PE1lbnUgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkJlZnVuZ2UgOTMmbmRhc2g7JmluZmluOzwvZGl2PlxyXG5cdFx0XHQ8Q2FyZD5cclxuXHRcdFx0XHRBbiBpbnRlcnByZXRlciBmb3IgPGEgaHJlZj1cIi9iZWZ1bmdlLWluZm8uaHRtbFwiPkJlZnVuZ2UgOTMmbmRhc2g7JmluZmluOzwvYT4uIDxiciAvPlxyXG5cdFx0XHRcdDxCZWZ1bmdlRXhhbXBsZXMgc2V0SW5wdXRUZXh0QW5kU3RhdGU9e3NldElucHV0VGV4dEFuZFN0YXRlfSAvPlxyXG5cdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdDxDYXJkPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWQgZml0X2NvbnRlbnQgZmxleFwiPlxyXG5cdFx0XHRcdFx0e2J1aWxkQnV0dG9uKFwicnVuXCIsIGlzUnVubmluZyA/IFwiU3RvcFwiIDogXCJSdW5cIiwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoaXNSdW5uaW5nKSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0SXNSdW5uaW5nKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQYXVzZWQoZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdEhBTFRfRVhFQ1VUSU9OID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRQQVVTRV9FWEVDVVRJT04gPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2V0U3RhdGVDb250ZW50KGJ1aWxkU3RhdGVDb250ZW50KGNvZGVBcnJheSwge30pKTtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFN0YWNrQ29udGVudChcIlwiKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0SXNSdW5uaW5nKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdHNldFBhdXNlZChmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0cnVuQmVmdW5nZShcclxuXHRcdFx0XHRcdFx0XHRcdGlucHV0VGV4dCxcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXRlU2hvd24sXHJcblx0XHRcdFx0XHRcdFx0XHRwYXJzZUludChwYXVzZUludGVydmFsKSxcclxuXHRcdFx0XHRcdFx0XHRcdHNldENvZGVBcnJheSxcclxuXHRcdFx0XHRcdFx0XHRcdGJlZnVuZ2VPdXRwdXQsXHJcblx0XHRcdFx0XHRcdFx0XHRzZXRTdGF0ZUNvbnRlbnQsXHJcblx0XHRcdFx0XHRcdFx0XHRzZXRTdGFja0NvbnRlbnQsXHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJc1J1bm5pbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdHtidWlsZEJ1dHRvbihcImRpc3BsYXlCdXR0b25cIiwgc3RhdGVTaG93biA/IFwiSGlkZSBTdGF0ZVwiIDogXCJTaG93IFN0YXRlXCIsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCFpc1J1bm5pbmcpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlU2hvd24pIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldENvbG9ycyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0REFSS01PREUgPyBcIiMzNDM0MzRcIiA6IFwid2hpdGVcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0REFSS01PREUgPyBcImxpZ2h0Z3JheVwiIDogXCJibGFja1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFN0YXRlQ29udGVudChidWlsZFN0YXRlQ29udGVudChjb2RlQXJyYXksIHt9KSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRvZ2dsZVN0YXRlU2hvd24oIXN0YXRlU2hvd24pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdHtidWlsZEJ1dHRvbihcclxuXHRcdFx0XHRcdFx0XCJzdGVwXCIsXHJcblx0XHRcdFx0XHRcdFwiU3RlcFwiLFxyXG5cdFx0XHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFpc1J1bm5pbmcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIEZpcnN0IHN0ZXBcclxuXHRcdFx0XHRcdFx0XHRcdHNldElzUnVubmluZyh0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFBhdXNlZCh0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJ1bkJlZnVuZ2UoXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlucHV0VGV4dCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVTaG93bixcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFyc2VJbnQocGF1c2VJbnRlcnZhbCksXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldENvZGVBcnJheSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YmVmdW5nZU91dHB1dCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0U3RhdGVDb250ZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRTdGFja0NvbnRlbnQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldElzUnVubmluZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1YnNlcXVlbnQgc3RlcCAtIHdlIHNob3VsZCBoYXZlIFBBVVNFX1NUQVRFIHBvcHVsYXRlZFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKFBBVVNFX1NUQVRFICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFBhdXNlZCh0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0UEFVU0VfRVhFQ1VUSU9OID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0ZXAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UEFVU0VfU1RBVEUuY29kZUFycmF5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBBVVNFX1NUQVRFLnBvaW50ZXJzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBBVVNFX1NUQVRFLnBvaW50ZXJJbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQQVVTRV9TVEFURS5zdGFja3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UEFVU0VfU1RBVEUuc3RhdGVTaG93bixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQQVVTRV9TVEFURS5zdGF0ZVdpZHRoLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBBVVNFX1NUQVRFLnN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlSW50KHBhdXNlSW50ZXJ2YWwpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBBVVNFX1NUQVRFLnBvaW50ZXJzU3RyaW5nbW9kZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQQVVTRV9TVEFURS5vdXRwdXRDb250ZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBBVVNFX1NUQVRFLm91dHB1dEVsZW1lbnQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UEFVU0VfU1RBVEUuc2V0U3RhdGVDb250ZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBBVVNFX1NUQVRFLnNldFN0YWNrQ29udGVudCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQQVVTRV9TVEFURS5zZXRJc1J1bm5pbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHN0YXRlU2hvd24sXHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0e2J1aWxkQnV0dG9uKFxyXG5cdFx0XHRcdFx0XHRcInBhdXNlXCIsXHJcblx0XHRcdFx0XHRcdHBhdXNlZCA/IFwiUmVzdW1lXCIgOiBcIlBhdXNlXCIsXHJcblx0XHRcdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIWlzUnVubmluZykge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRzZXRQYXVzZWQoIXBhdXNlZCk7XHJcblx0XHRcdFx0XHRcdFx0b25QYXVzZUNsaWNrZWQocGFyc2VJbnQocGF1c2VJbnRlcnZhbCkpO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRzdGF0ZVNob3duLFxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcIm9wdGlvbnNfY29udGFpbmVyXCIgKyAoIXN0YXRlU2hvd24gPyBcIiBoaWRkZW5cIiA6IFwiXCIpfT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gaWQ9XCJwYXVzZU9wdGlvbnNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInBhdXNlSW50ZXJ2YWxcIj5XYWl0OjwvbGFiZWw+Jm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInBhdXNlSW50ZXJ2YWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cGF1c2VJbnRlcnZhbH1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UGF1c2VJbnRlcnZhbChldmVudC50YXJnZXQudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdCZuYnNwO21zXHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHsvKiBFbmQgYnV0dG9uIHNlY3Rpb24gLyBCZWdpbiBpbnB1dCBhbmQgb3V0cHV0IGFyZWFzICovfVxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJiZWZ1bmdlQ29kZVwiPklucHV0PC9sYWJlbD5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicmlnaHRfYWxpZ25lZFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJkbVwiPkRhcmttb2RlPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRpZD1cImRtXCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcclxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17REFSS01PREV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjaGFuZ2VEYXJrbW9kZShldmVudC50YXJnZXQuY2hlY2tlZCwgc3RhdGVTaG93biwgc2V0U3RhdGVDb250ZW50LCBjb2RlQXJyYXkpO1xyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBpZD1cImJlZnVuZ2VDb2RlV3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdHJlYWRPbmx5PXtpc1J1bm5pbmd9XHJcblx0XHRcdFx0XHRcdGlkPVwiYmVmdW5nZUNvZGVcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIldyaXRlIHNvbWUgY29kZSBoZXJlLCBvciBjaG9vc2UgYW4gZXhhbXBsZSBhYm92ZSFcIlxyXG5cdFx0XHRcdFx0XHRyb3dzPXsxMH1cclxuXHRcdFx0XHRcdFx0YXV0b0ZvY3VzPXt0cnVlfVxyXG5cdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG5cdFx0XHRcdFx0XHRhdXRvQ29ycmVjdD1cIm9mZlwiXHJcblx0XHRcdFx0XHRcdGF1dG9DYXBpdGFsaXplPVwib2ZmXCJcclxuXHRcdFx0XHRcdFx0c3BlbGxDaGVjaz17ZmFsc2V9XHJcblx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dFRleHR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdHNldElucHV0VGV4dEFuZFN0YXRlKHRleHQpO1xyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBpZD1cImRpc3BsYXlcIiBjbGFzc05hbWU9e3N0YXRlU2hvd24gPyBcIlwiIDogXCJub2Rpc3BcIn0+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImJlZnVuZ2VTdGF0ZVwiPlN0YXRlPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29kZV9vdXRwdXRcIiBpZD1cImJlZnVuZ2VTdGF0ZVwiPlxyXG5cdFx0XHRcdFx0XHR7c3RhdGVDb250ZW50fVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImJlZnVuZ2VTdGFja1wiPlN0YWNrPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29kZV9vdXRwdXRcIiBpZD1cImJlZnVuZ2VTdGFja1wiPlxyXG5cdFx0XHRcdFx0XHR7c3RhY2tDb250ZW50fVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJvdXRwdXRcIj5cclxuXHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImJlZnVuZ2VPdXRwdXRcIj5PdXRwdXQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicmlnaHRfYWxpZ25lZFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIndyYXBcIj5XcmFwIFRleHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cIndyYXBcIlxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17d29yZFdyYXB9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHRvZ2dsZVdvcmRXcmFwKCF3b3JkV3JhcCl9XHJcblx0XHRcdFx0XHRcdD48L2lucHV0PlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e1wiY29kZV9vdXRwdXRcIiArICh3b3JkV3JhcCA/IFwiIHdvcmRfd3JhcFwiIDogXCJcIil9XHJcblx0XHRcdFx0XHRcdGlkPVwiYmVmdW5nZU91dHB1dFwiXHJcblx0XHRcdFx0XHRcdHJlZj17YmVmdW5nZU91dHB1dH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9DYXJkPlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVmdW5nZTtcclxuXHJcbmZ1bmN0aW9uIG9uUGF1c2VDbGlja2VkKHBhdXNlSW50ZXJ2YWw6IG51bWJlcik6IHZvaWQge1xyXG5cdGlmIChQQVVTRV9TVEFURSA9PT0gbnVsbCkge1xyXG5cdFx0aWYgKFBBVVNFX0VYRUNVVElPTiA9PT0gdHJ1ZSkge1xyXG5cdFx0XHQvLyBXYWl0IGZvciBQQVVTRV9TVEFURSB0byBiZSBwb3B1bGF0ZWRcclxuXHRcdFx0c2V0VGltZW91dChvblBhdXNlQ2xpY2tlZCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFBBVVNFX0VYRUNVVElPTiA9IHRydWU7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIFJlc3VtZVxyXG5cdFx0UEFVU0VfRVhFQ1VUSU9OID0gZmFsc2U7XHJcblx0XHRzdGVwKFxyXG5cdFx0XHRQQVVTRV9TVEFURS5jb2RlQXJyYXksXHJcblx0XHRcdFBBVVNFX1NUQVRFLnBvaW50ZXJzLFxyXG5cdFx0XHRQQVVTRV9TVEFURS5wb2ludGVySW5kZXgsXHJcblx0XHRcdFBBVVNFX1NUQVRFLnN0YWNrcyxcclxuXHRcdFx0UEFVU0VfU1RBVEUuc3RhdGVTaG93bixcclxuXHRcdFx0UEFVU0VfU1RBVEUuc3RhdGVXaWR0aCxcclxuXHRcdFx0UEFVU0VfU1RBVEUuc3RhdGVIZWlnaHQsXHJcblx0XHRcdHBhdXNlSW50ZXJ2YWwsXHJcblx0XHRcdFBBVVNFX1NUQVRFLnBvaW50ZXJzU3RyaW5nbW9kZSxcclxuXHRcdFx0UEFVU0VfU1RBVEUub3V0cHV0Q29udGVudCxcclxuXHRcdFx0UEFVU0VfU1RBVEUub3V0cHV0RWxlbWVudCxcclxuXHRcdFx0UEFVU0VfU1RBVEUuc2V0U3RhdGVDb250ZW50LFxyXG5cdFx0XHRQQVVTRV9TVEFURS5zZXRTdGFja0NvbnRlbnQsXHJcblx0XHRcdFBBVVNFX1NUQVRFLnNldElzUnVubmluZyxcclxuXHRcdFx0ZmFsc2UsXHJcblx0XHQpO1xyXG5cdFx0UEFVU0VfU1RBVEUgPSBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbCBmdW5jdGlvbnMgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqXHJcbiAqIENoYW5nZSB3aGV0aGVyIGRhcmttb2RlIGlzIGN1cnJlbnRseSBlbmFibGVkXHJcbiAqIEBwYXJhbSBuZXdEYXJrbW9kZSBOZXcgdmFsdWUgb2YgZGFya21vZGVcclxuICogQHBhcmFtIHNldERhcmttb2RlIEZ1bmN0aW9uIHRvIHNldCB0aGUgdmFsdWUgb2YgZGFya21vZGVcclxuICogQHBhcmFtIHN0YXRlU2hvd24gV2hldGhlciB0aGUgc3RhdGUgaXMgY3VycmVudGx5IHNob3duXHJcbiAqIEBwYXJhbSBzZXRTdGF0ZUNvbnRlbnQgRnVuY3Rpb24gdG8gc2V0IHRoZSBzdGF0ZSBjb250ZW50XHJcbiAqIEBwYXJhbSBjb2RlQXJyYXkgQ3VycmVudCBjb2RlXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGFuZ2VEYXJrbW9kZShcclxuXHRuZXdEYXJrbW9kZTogYm9vbGVhbixcclxuXHRzdGF0ZVNob3duOiBib29sZWFuLFxyXG5cdHNldFN0YXRlQ29udGVudDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248SlNYLkVsZW1lbnQ+PixcclxuXHRjb2RlQXJyYXk6IChzdHJpbmcgfCBiaWdpbnQpW11bXSxcclxuKTogdm9pZCB7XHJcblx0REFSS01PREUgPSBuZXdEYXJrbW9kZTtcclxuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG5ld0Rhcmttb2RlID8gXCJkYXJrZ3JleVwiIDogXCIjZDNlZGVkXCI7XHJcblx0c2V0Q29sb3JzKG5ld0Rhcmttb2RlID8gXCIjMzQzNDM0XCIgOiBcIndoaXRlXCIsIG5ld0Rhcmttb2RlID8gXCJsaWdodGdyYXlcIiA6IFwiYmxhY2tcIiwgc3RhdGVTaG93bik7XHJcblx0aWYgKHN0YXRlU2hvd24pIHtcclxuXHRcdHNldFN0YXRlQ29udGVudChidWlsZFN0YXRlQ29udGVudChjb2RlQXJyYXksIHt9KSk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogU2V0IHRoZSBjb2xvcnMgb2YgdGhlIG1haW4gZGlzcGxheWVkIGVsZW1lbnRzIHdoZW4gdG9nZ2xpbmcgZGFya21vZGVcclxuICogQHBhcmFtIGJrZ0NvbG9yIE5ldyBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAqIEBwYXJhbSB0eHRDb2xvciBOZXcgdGV4dCBjb2xvclxyXG4gKiBAcGFyYW0gc3RhdGVTaG93biBXaGV0aGVyIHRoZSBzdGF0ZSBpcyBjdXJyZW50bHkgc2hvd25cclxuICovXHJcbmZ1bmN0aW9uIHNldENvbG9ycyhia2dDb2xvcjogc3RyaW5nLCB0eHRDb2xvcjogc3RyaW5nLCBzdGF0ZVNob3duOiBib29sZWFuKTogdm9pZCB7XHJcblx0Y29uc3QgaWRzID0gW1wiYmVmdW5nZU91dHB1dFwiLCBcImJlZnVuZ2VDb2RlXCJdO1xyXG5cdGlmIChzdGF0ZVNob3duKSB7XHJcblx0XHRpZHMucHVzaChcImJlZnVuZ2VTdGF0ZVwiLCBcImJlZnVuZ2VTdGFja1wiLCBcInBhdXNlSW50ZXJ2YWxcIik7XHJcblx0fVxyXG5cdGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XHJcblx0XHRjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHRcdGlmIChlbCAhPT0gbnVsbCkge1xyXG5cdFx0XHRlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBia2dDb2xvcjtcclxuXHRcdFx0ZWwuc3R5bGUuY29sb3IgPSB0eHRDb2xvcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCdWlsZHMgYSBidXR0b24gdG8gZGlzcGxheSBhdCB0aGUgdG9wIG9mIGJlZnVuZ2VcclxuICogQHBhcmFtIGlkIElEIGZvciB0aGUgYnV0dG9uXHJcbiAqIEBwYXJhbSB0ZXh0IERpc3BsYXkgdGV4dFxyXG4gKiBAcGFyYW0gY2FsbGJhY2sgb25DbGljayBmdW5jdGlvbiBmb3IgdGhlIGJ1dHRvblxyXG4gKiBAcmV0dXJucyBUaGUgYnV0dG9uIGVsZW1lbnRcclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkQnV0dG9uKFxyXG5cdGlkOiBzdHJpbmcsXHJcblx0dGV4dDogc3RyaW5nLFxyXG5cdGNhbGxiYWNrPzogTW91c2VFdmVudEhhbmRsZXI8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG5cdHN0YXRlU2hvd24/OiBib29sZWFuLFxyXG4pOiBKU1guRWxlbWVudCB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtcImJ1dHRvbl9jb250YWluZXJcIiArIChzdGF0ZVNob3duID09PSBmYWxzZSA/IFwiIGhpZGRlblwiIDogXCJcIil9PlxyXG5cdFx0XHQ8YnV0dG9uIGlkPXtpZH0gb25DbGljaz17Y2FsbGJhY2t9PlxyXG5cdFx0XHRcdHt0ZXh0fVxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkU3RhY2tDb250ZW50KGN1clN0YWNrOiBiaWdpbnRbXVtdKTogc3RyaW5nIHtcclxuXHRsZXQgc3RyID0gXCJcIjtcclxuXHRmb3IgKGxldCBpID0gY3VyU3RhY2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHRcdGNvbnN0IHN0YWNrID0gY3VyU3RhY2tbaV07XHJcblx0XHRzdHIgKz0gXCJbXCI7XHJcblx0XHRmb3IgKGNvbnN0IGl0ZW0gb2Ygc3RhY2spIHtcclxuXHRcdFx0c3RyICs9IGl0ZW0udG9TdHJpbmcoKSArIFwiIFwiO1xyXG5cdFx0fVxyXG5cdFx0c3RyICs9IFwiXFxuXCI7XHJcblx0fVxyXG5cdHJldHVybiBzdHI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCdWlsZHMgdGhlIGNvbnRlbnQgZm9yIHRoZSBcIlN0YXRlXCIgc2VjdGlvbiBkaXNwbGF5aW5nIHRoZSBjdXJyZW50IHByb2dyYW0gc3RhdGVcclxuICogQHBhcmFtIGNvZGVBcnJheSBDdXJyZW50IGNvZGVcclxuICogQHBhcmFtIHBvaW50ZXJJbmRleCBJbmRleCBvZiB0aGUgZXhpc3RpbmcgcG9pbnRlcnNcclxuICogQHBhcmFtIGRhcmtNb2RlIFdoZXRoZXIgd2UncmUgY3VycmVudGx5IGluIGRhcmsgbW9kZVxyXG4gKiBAcmV0dXJucyBUaGUgY29udGVudCB0byBwdXQgaW4gdGhlIHN0YXRlIHNlY3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkU3RhdGVDb250ZW50KGNvZGVBcnJheTogKHN0cmluZyB8IGJpZ2ludClbXVtdLCBwb2ludGVySW5kZXg6IFBvaW50ZXJJbmRleCk6IEpTWC5FbGVtZW50IHtcclxuXHRsZXQgY2hpbGRBcnJheTogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cdGxldCBrZXkgPSAwO1xyXG5cdGZvciAoY29uc3QgeSBpbiBjb2RlQXJyYXkpIHtcclxuXHRcdGZvciAoY29uc3QgeCBpbiBjb2RlQXJyYXlbeV0pIHtcclxuXHRcdFx0Y29uc3QgYm9yZGVyZWQgPSBwb2ludGVySW5kZXhbeF0gIT09IHVuZGVmaW5lZCAmJiBwb2ludGVySW5kZXhbeF1beV0gPT09IHRydWU7XHJcblx0XHRcdGxldCBjb2xvciA9IFwid2hpdGVcIjtcclxuXHRcdFx0bGV0IHRpdGxlID0gXCJcIjtcclxuXHRcdFx0bGV0IGNvbnRlbnQgPSBcIlwiO1xyXG5cdFx0XHRjb25zdCBjdXJJdGVtID0gY29kZUFycmF5W3ldW3hdO1xyXG5cdFx0XHRpZiAodHlwZW9mIGN1ckl0ZW0gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRjb2xvciA9IGluc3RydWN0aW9uQ29sb3JUYWJsZVtjdXJJdGVtXTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGNvbG9yID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0XHRpZiAoY3VySXRlbSA9PT0gXCIgXCIpIHtcclxuXHRcdFx0XHRcdFx0dGl0bGUgPSBcIjMyXCI7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQgPSBjdXJJdGVtO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29sb3IgPSBEQVJLTU9ERSA/IFwiZGFya2dyZXlcIiA6IFwibGlnaHRncmV5XCI7XHJcblx0XHRcdFx0XHRcdHRpdGxlID0gY3VySXRlbS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQgPSBjdXJJdGVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoREFSS01PREUpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGNvbG9yID09PSBcImJsYWNrXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvciA9IFwibGlnaHRncmV5XCI7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoY29sb3IgPT09IGNvbG9yT3ApIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvciA9IFwiIzAwYWJmZlwiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aXRsZSA9IGN1ckl0ZW0uY2hhckNvZGVBdCgwKS50b1N0cmluZygpO1xyXG5cdFx0XHRcdFx0Y29udGVudCA9IGN1ckl0ZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjdXJJdGVtID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdFx0dGl0bGUgPSBcIjMyXCI7XHJcblx0XHRcdFx0Y29udGVudCA9IFwiIFwiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbG9yID0gREFSS01PREUgPyBcImRhcmtncmV5XCIgOiBcImxpZ2h0Z3JleVwiO1xyXG5cdFx0XHRcdHRpdGxlID0gY3VySXRlbS50b1N0cmluZygpO1xyXG5cdFx0XHRcdGNvbnRlbnQgPSBcIsOYXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2hpbGRBcnJheS5wdXNoKFxyXG5cdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2JvcmRlcmVkID8gKERBUktNT0RFID8gXCJib3JkZXJlZF9jaGFyX2Rhcmttb2RlXCIgOiBcImJvcmRlcmVkX2NoYXJcIikgOiBcIlwifVxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6IGNvbG9yIH19XHJcblx0XHRcdFx0XHR0aXRsZT17dGl0bGV9XHJcblx0XHRcdFx0XHRrZXk9e2tleSsrfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHtjb250ZW50ID09PSBcIiBcIiA/IFwiXFx1MDBBMFwiIDogY29udGVudH1cclxuXHRcdFx0XHQ8L3NwYW4+LFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y2hpbGRBcnJheS5wdXNoKDxiciBrZXk9e2tleSsrfSAvPik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gPFJlYWN0LkZyYWdtZW50PnsuLi5jaGlsZEFycmF5fTwvUmVhY3QuRnJhZ21lbnQ+O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dHB1dChuZXdTdHJpbmc6IHN0cmluZyB8IG51bGwsIGN1ck91dHB1dDogc3RyaW5nLCBvdXRwdXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XHJcblx0bGV0IG5ld091dHB1dCA9IFwiXCI7XHJcblx0aWYgKG5ld1N0cmluZyA9PT0gbnVsbCkge1xyXG5cdFx0Ly8gU2lnbmFsIGZvciBiYWNrc3BhY2UgKGNoYXIgOClcclxuXHRcdG5ld091dHB1dCA9IGN1ck91dHB1dC5zdWJzdHJpbmcoMCwgY3VyT3V0cHV0Lmxlbmd0aCAtIDEpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRuZXdPdXRwdXQgPSBjdXJPdXRwdXQgKyBuZXdTdHJpbmc7XHJcblx0fVxyXG5cclxuXHRvdXRwdXRFbGVtZW50LmlubmVySFRNTCA9IG5ld091dHB1dDtcclxuXHRvdXRwdXRFbGVtZW50LnNjcm9sbFRvcCA9IG91dHB1dEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cdHJldHVybiBuZXdPdXRwdXQ7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICBGdW5jdGlvbnMgdG8gYWN0dWFsbHkgcnVuIHRoZSBiZWZ1bmdlIGNvZGUgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbmZ1bmN0aW9uIHJ1bkJlZnVuZ2UoXHJcblx0aW5wdXRUZXh0OiBzdHJpbmcsXHJcblx0c3RhdGVTaG93bjogYm9vbGVhbixcclxuXHRwYXVzZUludGVydmFsOiBudW1iZXIsXHJcblx0c2V0Q29kZUFycmF5OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjwoc3RyaW5nIHwgYmlnaW50KVtdW10+PixcclxuXHRvdXRwdXRSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4sXHJcblx0c2V0U3RhdGVDb250ZW50OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxKU1guRWxlbWVudD4+LFxyXG5cdHNldFN0YWNrQ29udGVudDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nPj4sXHJcblx0c2V0SXNSdW5uaW5nOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4sXHJcblx0c3RlcE9uY2U/OiBib29sZWFuLFxyXG4pOiB2b2lkIHtcclxuXHRpZiAoaXNOYU4ocGF1c2VJbnRlcnZhbCkgfHwgcGF1c2VJbnRlcnZhbCA8IDApIHtcclxuXHRcdHBhdXNlSW50ZXJ2YWwgPSAwO1xyXG5cdH1cclxuXHRjb25zdCBjb2RlQXJyYXkgPSBpbnB1dFRleHQuc3BsaXQoXCJcXG5cIikubWFwKChsaW5lKSA9PiBsaW5lLnNwbGl0KFwiXCIpKTtcclxuXHRzZXRDb2RlQXJyYXkoY29kZUFycmF5KTtcclxuXHRpZiAob3V0cHV0UmVmLmN1cnJlbnQpIHtcclxuXHRcdG91dHB1dFJlZi5jdXJyZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblx0fVxyXG5cdGNvbnN0IG91dHB1dEVsZW1lbnQgPSBvdXRwdXRSZWYuY3VycmVudCE7XHJcblx0Y29uc3Qgc3RhdGVXaWR0aCA9IGNvZGVBcnJheS5yZWR1Y2UoKHgsIHJvdykgPT4gTWF0aC5tYXgoeCwgcm93Lmxlbmd0aCksIC05OSk7XHJcblx0Y29uc3Qgc3RhdGVIZWlnaHQgPSBjb2RlQXJyYXkubGVuZ3RoO1xyXG5cdGNvbnN0IHBvaW50ZXJzOiBQb2ludGVyW10gPSBbeyBpcDogeyB4OiAwLCB5OiAwIH0sIGRlbHRhOiB7IHg6IDEsIHk6IDAgfSB9XTtcclxuXHRjb25zdCBwb2ludGVySW5kZXg6IFBvaW50ZXJJbmRleCA9IHsgMDogeyAwOiB0cnVlIH0gfTtcclxuXHRjb25zdCBzdGFja3M6IGJpZ2ludFtdW11bXSA9IFtbW11dXTtcclxuXHRjb25zdCBwb2ludGVyc1N0cmluZ21vZGUgPSBbZmFsc2VdO1xyXG5cdGlmIChzdGF0ZVNob3duKSB7XHJcblx0XHRzZXRTdGF0ZUNvbnRlbnQoYnVpbGRTdGF0ZUNvbnRlbnQoY29kZUFycmF5LCBwb2ludGVySW5kZXgpKTtcclxuXHR9XHJcblx0SEFMVF9FWEVDVVRJT04gPSBmYWxzZTtcclxuXHRQQVVTRV9FWEVDVVRJT04gPSBmYWxzZTtcclxuXHRQQVVTRV9TVEFURSA9IG51bGw7XHJcblxyXG5cdC8vIFJ1blxyXG5cdGlmIChzdGF0ZVNob3duKSB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0c3RlcChcclxuXHRcdFx0XHRjb2RlQXJyYXksXHJcblx0XHRcdFx0cG9pbnRlcnMsXHJcblx0XHRcdFx0cG9pbnRlckluZGV4LFxyXG5cdFx0XHRcdHN0YWNrcyxcclxuXHRcdFx0XHRzdGF0ZVNob3duLFxyXG5cdFx0XHRcdHN0YXRlV2lkdGgsXHJcblx0XHRcdFx0c3RhdGVIZWlnaHQsXHJcblx0XHRcdFx0cGF1c2VJbnRlcnZhbCxcclxuXHRcdFx0XHRwb2ludGVyc1N0cmluZ21vZGUsXHJcblx0XHRcdFx0XCJcIixcclxuXHRcdFx0XHRvdXRwdXRFbGVtZW50LFxyXG5cdFx0XHRcdHNldFN0YXRlQ29udGVudCxcclxuXHRcdFx0XHRzZXRTdGFja0NvbnRlbnQsXHJcblx0XHRcdFx0c2V0SXNSdW5uaW5nLFxyXG5cdFx0XHRcdHN0ZXBPbmNlLFxyXG5cdFx0XHQpO1xyXG5cdFx0fSwgMCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRzdGVwKFxyXG5cdFx0XHRcdGNvZGVBcnJheSxcclxuXHRcdFx0XHRwb2ludGVycyxcclxuXHRcdFx0XHRwb2ludGVySW5kZXgsXHJcblx0XHRcdFx0c3RhY2tzLFxyXG5cdFx0XHRcdGZhbHNlLFxyXG5cdFx0XHRcdHN0YXRlV2lkdGgsXHJcblx0XHRcdFx0c3RhdGVIZWlnaHQsXHJcblx0XHRcdFx0cGF1c2VJbnRlcnZhbCxcclxuXHRcdFx0XHRwb2ludGVyc1N0cmluZ21vZGUsXHJcblx0XHRcdFx0XCJcIixcclxuXHRcdFx0XHRvdXRwdXRFbGVtZW50LFxyXG5cdFx0XHRcdHNldFN0YXRlQ29udGVudCxcclxuXHRcdFx0XHRzZXRTdGFja0NvbnRlbnQsXHJcblx0XHRcdFx0c2V0SXNSdW5uaW5nLFxyXG5cdFx0XHRcdGZhbHNlLFxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vL1RoaXMgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIHRoZSBhcmdzIHRvIHN0ZXBcclxudHlwZSBQYXVzZVN0YXRlID0ge1xyXG5cdGNvZGVBcnJheTogKHN0cmluZyB8IGJpZ2ludClbXVtdO1xyXG5cdHBvaW50ZXJzOiBQb2ludGVyW107XHJcblx0cG9pbnRlckluZGV4OiBQb2ludGVySW5kZXg7XHJcblx0c3RhY2tzOiBiaWdpbnRbXVtdW107XHJcblx0c3RhdGVTaG93bjogYm9vbGVhbjtcclxuXHRzdGF0ZVdpZHRoOiBudW1iZXI7XHJcblx0c3RhdGVIZWlnaHQ6IG51bWJlcjtcclxuXHRwYXVzZUludGVydmFsOiBudW1iZXI7XHJcblx0cG9pbnRlcnNTdHJpbmdtb2RlOiBib29sZWFuW107XHJcblx0b3V0cHV0Q29udGVudDogc3RyaW5nO1xyXG5cdG91dHB1dEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdHNldFN0YXRlQ29udGVudDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248SlNYLkVsZW1lbnQ+PjtcclxuXHRzZXRTdGFja0NvbnRlbnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+O1xyXG5cdHNldElzUnVubmluZzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc3RlcChcclxuXHRjb2RlQXJyYXk6IChzdHJpbmcgfCBiaWdpbnQpW11bXSxcclxuXHRwb2ludGVyczogUG9pbnRlcltdLFxyXG5cdHBvaW50ZXJJbmRleDogUG9pbnRlckluZGV4LFxyXG5cdHN0YWNrczogYmlnaW50W11bXVtdLFxyXG5cdHN0YXRlU2hvd246IGJvb2xlYW4sXHJcblx0c3RhdGVXaWR0aDogbnVtYmVyLFxyXG5cdHN0YXRlSGVpZ2h0OiBudW1iZXIsXHJcblx0cGF1c2VJbnRlcnZhbDogbnVtYmVyLFxyXG5cdHBvaW50ZXJzU3RyaW5nbW9kZTogYm9vbGVhbltdLFxyXG5cdG91dHB1dENvbnRlbnQ6IHN0cmluZyxcclxuXHRvdXRwdXRFbGVtZW50OiBIVE1MRWxlbWVudCxcclxuXHRzZXRTdGF0ZUNvbnRlbnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEpTWC5FbGVtZW50Pj4sXHJcblx0c2V0U3RhY2tDb250ZW50OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PixcclxuXHRzZXRJc1J1bm5pbmc6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PixcclxuXHRzdGVwT25jZTogYm9vbGVhbiA9IGZhbHNlLFxyXG4pOiB2b2lkIHtcclxuXHRpZiAoUEFVU0VfRVhFQ1VUSU9OKSB7XHJcblx0XHRQQVVTRV9TVEFURSA9IHtcclxuXHRcdFx0Y29kZUFycmF5OiBjb2RlQXJyYXksXHJcblx0XHRcdHBvaW50ZXJzOiBwb2ludGVycyxcclxuXHRcdFx0cG9pbnRlckluZGV4OiBwb2ludGVySW5kZXgsXHJcblx0XHRcdHN0YWNrczogc3RhY2tzLFxyXG5cdFx0XHRzdGF0ZVNob3duOiBzdGF0ZVNob3duLFxyXG5cdFx0XHRzdGF0ZVdpZHRoOiBzdGF0ZVdpZHRoLFxyXG5cdFx0XHRzdGF0ZUhlaWdodDogc3RhdGVIZWlnaHQsXHJcblx0XHRcdHBhdXNlSW50ZXJ2YWw6IHBhdXNlSW50ZXJ2YWwsXHJcblx0XHRcdHBvaW50ZXJzU3RyaW5nbW9kZTogcG9pbnRlcnNTdHJpbmdtb2RlLFxyXG5cdFx0XHRvdXRwdXRDb250ZW50OiBvdXRwdXRDb250ZW50LFxyXG5cdFx0XHRvdXRwdXRFbGVtZW50OiBvdXRwdXRFbGVtZW50LFxyXG5cdFx0XHRzZXRTdGF0ZUNvbnRlbnQ6IHNldFN0YXRlQ29udGVudCxcclxuXHRcdFx0c2V0U3RhY2tDb250ZW50OiBzZXRTdGFja0NvbnRlbnQsXHJcblx0XHRcdHNldElzUnVubmluZzogc2V0SXNSdW5uaW5nLFxyXG5cdFx0fTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0aWYgKEhBTFRfRVhFQ1VUSU9OKSB7XHJcblx0XHRoYWx0RXhlY3V0aW9uKGNvZGVBcnJheSwgc3RhdGVTaG93biwgc2V0U3RhdGVDb250ZW50LCBzZXRTdGFja0NvbnRlbnQsIHNldElzUnVubmluZyk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBudW1JdGVycyA9IHN0YXRlU2hvd24gPyAxIDogU1RFUFNfQlRXTl9DQUxMQkFDS1M7XHJcblx0Zm9yIChsZXQgY3RyID0gMDsgY3RyIDwgbnVtSXRlcnMgJiYgIUhBTFRfRVhFQ1VUSU9OOyBjdHIrKykge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludGVycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBpcCA9IHBvaW50ZXJzW2ldLmlwO1xyXG5cdFx0XHRjb25zdCBkZWx0YSA9IHBvaW50ZXJzW2ldLmRlbHRhO1xyXG5cdFx0XHRjb25zdCB0b3NzID0gc3RhY2tzW2ldW3N0YWNrc1tpXS5sZW5ndGggLSAxXTtcclxuXHRcdFx0Y29uc3QgY3VyQ29tbWFuZCA9IGNvZGVBcnJheVtpcC55XVtpcC54XTtcclxuXHRcdFx0bGV0IGZsYWcgPSBJbnN0cnVjdGlvblJlc3VsdC5Db250aW51ZTtcclxuXHRcdFx0Ly8gSWYgd2UgYXJlIGN1cnJlbnRseSBpbiBzdHJpbmcgbW9kZVxyXG5cdFx0XHRpZiAocG9pbnRlcnNTdHJpbmdtb2RlW2ldKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBjdXJDb21tYW5kID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHRpZiAoY3VyQ29tbWFuZCA9PT0gJ1wiJykge1xyXG5cdFx0XHRcdFx0XHRwb2ludGVyc1N0cmluZ21vZGVbaV0gPSBmYWxzZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRvc3MucHVzaChCaWdJbnQoY3VyQ29tbWFuZC5jaGFyQ29kZUF0KDApKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChjdXJDb21tYW5kID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdHRvc3MucHVzaChCaWdJbnQoMzIpKTsgLy8gU3BhY2VcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dG9zcy5wdXNoKGN1ckNvbW1hbmQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBOb3QgY3VycmVudGx5IGluIHN0cmluZyBtb2RlXHJcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBjdXJDb21tYW5kID09PSBcImJpZ2ludFwiKSB7XHJcblx0XHRcdFx0Ly8gRG8gbm90aGluZyAtIGNoYXJhY3RlciBvdXQgb2YgaW5zdHJ1Y3Rpb24gcmFuZ2VcclxuXHRcdFx0XHQvLyAoY2hhcmFjdGVycyBpbiBpbnN0cnVjdGlvbiByYW5nZSBhbHdheXMgc2F2ZWQgYXMgc3RyaW5ncylcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRbZmxhZywgb3V0cHV0Q29udGVudCwgc3RhdGVXaWR0aCwgc3RhdGVIZWlnaHRdID0gZG9JbnN0cnVjdGlvbihcclxuXHRcdFx0XHRcdGNvZGVBcnJheSxcclxuXHRcdFx0XHRcdGN1ckNvbW1hbmQsXHJcblx0XHRcdFx0XHRzdGF0ZVNob3duLFxyXG5cdFx0XHRcdFx0aXAsXHJcblx0XHRcdFx0XHRkZWx0YSxcclxuXHRcdFx0XHRcdHBvaW50ZXJzLFxyXG5cdFx0XHRcdFx0cG9pbnRlckluZGV4LFxyXG5cdFx0XHRcdFx0aSxcclxuXHRcdFx0XHRcdHBvaW50ZXJzU3RyaW5nbW9kZSxcclxuXHRcdFx0XHRcdHN0YWNrcyxcclxuXHRcdFx0XHRcdG91dHB1dENvbnRlbnQsXHJcblx0XHRcdFx0XHRzdGF0ZVdpZHRoLFxyXG5cdFx0XHRcdFx0c3RhdGVIZWlnaHQsXHJcblx0XHRcdFx0XHRvdXRwdXRFbGVtZW50LFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGlmIChmbGFnID09PSBJbnN0cnVjdGlvblJlc3VsdC5EZWxldGVkUG9pbnRlcikge1xyXG5cdFx0XHRcdFx0aS0tO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoZmxhZyA9PT0gSW5zdHJ1Y3Rpb25SZXN1bHQuTmV3UG9pbnRlcikge1xyXG5cdFx0XHRcdFx0XHQvLyBVcGRhdGUgcG9zaXRpb24gb2YgbmV3IHBvaW50ZXJcclxuXHRcdFx0XHRcdFx0dXBkYXRlUG9zaXRpb24oXHJcblx0XHRcdFx0XHRcdFx0cG9pbnRlcnNbaV0uaXAsXHJcblx0XHRcdFx0XHRcdFx0cG9pbnRlcnNbaV0uZGVsdGEsXHJcblx0XHRcdFx0XHRcdFx0c3RhdGVXaWR0aCxcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZUhlaWdodCxcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZVNob3duLFxyXG5cdFx0XHRcdFx0XHRcdGNvZGVBcnJheSxcclxuXHRcdFx0XHRcdFx0XHRwb2ludGVyc1N0cmluZ21vZGUsXHJcblx0XHRcdFx0XHRcdFx0aSxcclxuXHRcdFx0XHRcdFx0XHRwb2ludGVySW5kZXgsXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdGkrKztcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZmxhZyA9PT0gSW5zdHJ1Y3Rpb25SZXN1bHQuU3RvcHBlZCkge1xyXG5cdFx0XHRcdFx0XHRIQUxUX0VYRUNVVElPTiA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChIQUxUX0VYRUNVVElPTikge1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGZsYWcgIT09IEluc3RydWN0aW9uUmVzdWx0LkRlbGV0ZWRQb2ludGVyKSB7XHJcblx0XHRcdFx0dXBkYXRlUG9zaXRpb24oXHJcblx0XHRcdFx0XHRpcCxcclxuXHRcdFx0XHRcdGRlbHRhLFxyXG5cdFx0XHRcdFx0c3RhdGVXaWR0aCxcclxuXHRcdFx0XHRcdHN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRcdFx0c3RhdGVTaG93bixcclxuXHRcdFx0XHRcdGNvZGVBcnJheSxcclxuXHRcdFx0XHRcdHBvaW50ZXJzU3RyaW5nbW9kZSxcclxuXHRcdFx0XHRcdGksXHJcblx0XHRcdFx0XHRwb2ludGVySW5kZXgsXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKEhBTFRfRVhFQ1VUSU9OKSB7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKHN0YXRlU2hvd24pIHtcclxuXHRcdHNldFN0YXRlQ29udGVudChidWlsZFN0YXRlQ29udGVudChjb2RlQXJyYXksIHBvaW50ZXJJbmRleCkpO1xyXG5cdFx0c2V0U3RhY2tDb250ZW50KGJ1aWxkU3RhY2tDb250ZW50KHN0YWNrc1tzdGFja3MubGVuZ3RoIC0gMV0pKTtcclxuXHR9XHJcblxyXG5cdGlmIChIQUxUX0VYRUNVVElPTikge1xyXG5cdFx0aGFsdEV4ZWN1dGlvbihjb2RlQXJyYXksIHN0YXRlU2hvd24sIHNldFN0YXRlQ29udGVudCwgc2V0U3RhY2tDb250ZW50LCBzZXRJc1J1bm5pbmcpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKHN0ZXBPbmNlKSB7XHJcblx0XHRQQVVTRV9TVEFURSA9IHtcclxuXHRcdFx0Y29kZUFycmF5OiBjb2RlQXJyYXksXHJcblx0XHRcdHBvaW50ZXJzOiBwb2ludGVycyxcclxuXHRcdFx0cG9pbnRlckluZGV4OiBwb2ludGVySW5kZXgsXHJcblx0XHRcdHN0YWNrczogc3RhY2tzLFxyXG5cdFx0XHRzdGF0ZVNob3duOiBzdGF0ZVNob3duLFxyXG5cdFx0XHRzdGF0ZVdpZHRoOiBzdGF0ZVdpZHRoLFxyXG5cdFx0XHRzdGF0ZUhlaWdodDogc3RhdGVIZWlnaHQsXHJcblx0XHRcdHBhdXNlSW50ZXJ2YWw6IHBhdXNlSW50ZXJ2YWwsXHJcblx0XHRcdHBvaW50ZXJzU3RyaW5nbW9kZTogcG9pbnRlcnNTdHJpbmdtb2RlLFxyXG5cdFx0XHRvdXRwdXRDb250ZW50OiBvdXRwdXRDb250ZW50LFxyXG5cdFx0XHRvdXRwdXRFbGVtZW50OiBvdXRwdXRFbGVtZW50LFxyXG5cdFx0XHRzZXRTdGF0ZUNvbnRlbnQ6IHNldFN0YXRlQ29udGVudCxcclxuXHRcdFx0c2V0U3RhY2tDb250ZW50OiBzZXRTdGFja0NvbnRlbnQsXHJcblx0XHRcdHNldElzUnVubmluZzogc2V0SXNSdW5uaW5nLFxyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHN0ZXAoXHJcblx0XHRcdFx0Y29kZUFycmF5LFxyXG5cdFx0XHRcdHBvaW50ZXJzLFxyXG5cdFx0XHRcdHBvaW50ZXJJbmRleCxcclxuXHRcdFx0XHRzdGFja3MsXHJcblx0XHRcdFx0c3RhdGVTaG93bixcclxuXHRcdFx0XHRzdGF0ZVdpZHRoLFxyXG5cdFx0XHRcdHN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRcdHBhdXNlSW50ZXJ2YWwsXHJcblx0XHRcdFx0cG9pbnRlcnNTdHJpbmdtb2RlLFxyXG5cdFx0XHRcdG91dHB1dENvbnRlbnQsXHJcblx0XHRcdFx0b3V0cHV0RWxlbWVudCxcclxuXHRcdFx0XHRzZXRTdGF0ZUNvbnRlbnQsXHJcblx0XHRcdFx0c2V0U3RhY2tDb250ZW50LFxyXG5cdFx0XHRcdHNldElzUnVubmluZyxcclxuXHRcdFx0XHRzdGVwT25jZSxcclxuXHRcdFx0KTtcclxuXHRcdH0sIHBhdXNlSW50ZXJ2YWwpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFsdEV4ZWN1dGlvbihcclxuXHRjb2RlQXJyYXk6IChzdHJpbmcgfCBiaWdpbnQpW11bXSxcclxuXHRzdGF0ZVNob3duOiBib29sZWFuLFxyXG5cdHNldFN0YXRlQ29udGVudDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248SlNYLkVsZW1lbnQ+PixcclxuXHRzZXRTdGFja0NvbnRlbnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+LFxyXG5cdHNldElzUnVubmluZzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+LFxyXG4pOiB2b2lkIHtcclxuXHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0c2V0U3RhdGVDb250ZW50KGJ1aWxkU3RhdGVDb250ZW50KGNvZGVBcnJheSwge30pKTtcclxuXHRcdHNldFN0YWNrQ29udGVudChcIlwiKTtcclxuXHR9XHJcblx0c2V0SXNSdW5uaW5nKGZhbHNlKTtcclxuXHRQQVVTRV9TVEFURSA9IG51bGw7XHJcblx0UEFVU0VfRVhFQ1VUSU9OID0gZmFsc2U7XHJcbn1cclxuXHJcbmNvbnN0IGVudW0gSW5zdHJ1Y3Rpb25SZXN1bHQge1xyXG5cdE5ld1BvaW50ZXIsXHJcblx0RGVsZXRlZFBvaW50ZXIsXHJcblx0U3RvcHBlZCxcclxuXHRDb250aW51ZSxcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUG9pbnRlckluZGV4KHBvaW50ZXJJbmRleDogUG9pbnRlckluZGV4LCB4OiBudW1iZXIsIHk6IG51bWJlciwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRpZiAocG9pbnRlckluZGV4W3hdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdHBvaW50ZXJJbmRleFt4XSA9IHt9O1xyXG5cdH1cclxuXHRwb2ludGVySW5kZXhbeF1beV0gPSB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oXHJcblx0aXA6IFBvaW50LFxyXG5cdGRlbHRhOiBQb2ludCxcclxuXHRzdGF0ZVdpZHRoOiBudW1iZXIsXHJcblx0c3RhdGVIZWlnaHQ6IG51bWJlcixcclxuXHRzdGF0ZVNob3duOiBib29sZWFuLFxyXG5cdGNvZGVBcnJheTogKHN0cmluZyB8IGJpZ2ludClbXVtdLFxyXG5cdHBvaW50ZXJzU3RyaW5nbW9kZTogYm9vbGVhbltdLFxyXG5cdHBvaW50ZXJJZDogbnVtYmVyLFxyXG5cdHBvaW50ZXJJbmRleDogUG9pbnRlckluZGV4LFxyXG4pOiB2b2lkIHtcclxuXHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0dXBkYXRlUG9pbnRlckluZGV4KHBvaW50ZXJJbmRleCwgaXAueCwgaXAueSwgZmFsc2UpO1xyXG5cdH1cclxuXHR2YXIgY3RyID0gMDtcclxuXHRkbyB7XHJcblx0XHRpcC54ID0gKGlwLnggKyBkZWx0YS54KSAlIHN0YXRlV2lkdGg7XHJcblx0XHRpcC55ID0gKGlwLnkgKyBkZWx0YS55KSAlIHN0YXRlSGVpZ2h0O1xyXG5cdFx0aWYgKGlwLnggPCAwKSB7XHJcblx0XHRcdGlwLnggPSBzdGF0ZVdpZHRoICsgaXAueDtcclxuXHRcdH1cclxuXHRcdGlmIChpcC55IDwgMCkge1xyXG5cdFx0XHRpcC55ID0gc3RhdGVIZWlnaHQgKyBpcC55O1xyXG5cdFx0fVxyXG5cdFx0Y3RyKys7XHJcblx0fSB3aGlsZSAoXHJcblx0XHQoY29kZUFycmF5W2lwLnldID09PSB1bmRlZmluZWQgfHxcclxuXHRcdFx0Y29kZUFycmF5W2lwLnldW2lwLnhdID09PSB1bmRlZmluZWQgfHxcclxuXHRcdFx0Y29kZUFycmF5W2lwLnldW2lwLnhdID09PSBcIiBcIikgJiZcclxuXHRcdCFwb2ludGVyc1N0cmluZ21vZGVbcG9pbnRlcklkXSAmJlxyXG5cdFx0Y3RyIDwgU1RFUFNfT1ZFUl9XSElURVNQQUNFXHJcblx0KTtcclxuXHRpZiAoY3RyID09PSBTVEVQU19PVkVSX1dISVRFU1BBQ0UpIHtcclxuXHRcdC8vIExpa2VseSBpbmZpbml0ZSBsb29wLCBzZXQgdGltZW91dCBzbyB1c2VyIGNhbiBxdWl0XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dXBkYXRlUG9zaXRpb24oXHJcblx0XHRcdFx0aXAsXHJcblx0XHRcdFx0ZGVsdGEsXHJcblx0XHRcdFx0c3RhdGVXaWR0aCxcclxuXHRcdFx0XHRzdGF0ZUhlaWdodCxcclxuXHRcdFx0XHRzdGF0ZVNob3duLFxyXG5cdFx0XHRcdGNvZGVBcnJheSxcclxuXHRcdFx0XHRwb2ludGVyc1N0cmluZ21vZGUsXHJcblx0XHRcdFx0cG9pbnRlcklkLFxyXG5cdFx0XHRcdHBvaW50ZXJJbmRleCxcclxuXHRcdFx0KTtcclxuXHRcdH0sIDApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0XHR1cGRhdGVQb2ludGVySW5kZXgocG9pbnRlckluZGV4LCBpcC54LCBpcC55LCB0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICAgICBZT1UgU0hBTEwgTk9UIFBBU1MgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgICAgICAgICAgICAsLS0tLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIC8gICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAvICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogIC1HYW5kYWxmICAgICAgICAgICAgLyAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICAgICAgIC8gICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICAgIF9fXywnICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgIDwgIC0nICAgICAgICAgIDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgIGAtLl9fLi4tLSdgYC0sX1xcXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICAgIHxvLyBgIDosLilfYD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICAgICAgOi8gYCAgICAgfHwvKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgICAgICAoXy4pLl9fLC1gIHxcXCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgICAgICAvKCBgLmBgICAgYHwgOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICAgIFxcJ2AtLikgIGAgIDsgOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICAgIHwgYCAgICAgICAvLTwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICAgICAgfCAgICAgYCAgLyAgIGAuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICwtXy0uLl9fX18gICAgIC98ICBgICAgIDpfXy4uLSdcXCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogLywnLS5fX1xcXFwgIGBgLS4vIDpgICAgICAgOyAgICAgICBcXCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiBgXFwgYFxcICBgXFxcXCAgXFwgOiAgKCAgIGAgIC8gICwgICBgLiBcXCAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgXFxgIFxcICAgXFxcXCAgIHwgIHwgYCAgIDogIDogICAgIC5cXCBcXCAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgXFwgYFxcXyAgKSkgIDogIDsgICAgIHwgIHwgICAgICApOiA6ICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgKGAtLi0nXFwgfHwgIHxcXCBcXCAgIGAgOyAgOyAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgXFwtXyAgIGA7Oy5fICAgKCBgICAvICAvXyAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgIGAtLi0uLy8gLCdgLS5fXFxfXy9fLCcgICAgICAgICA7IHwgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgIFxcOjogOiAgICAgLyAgICAgYCAgICAgLCAgIC8gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICB8fCB8ICAgICggICAgICAgICwnIC8gICAvICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgIHx8ICAgICAgICAgICAgICAgICwnICAgLyAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICovXHJcblxyXG5mdW5jdGlvbiBkb0luc3RydWN0aW9uKFxyXG5cdGNvZGVBcnJheTogKHN0cmluZyB8IGJpZ2ludClbXVtdLFxyXG5cdGN1ckNvbW1hbmQ6IHN0cmluZyB8IGJpZ2ludCxcclxuXHRzdGF0ZVNob3duOiBib29sZWFuLFxyXG5cdGlwOiBQb2ludCxcclxuXHRkZWx0YTogUG9pbnQsXHJcblx0cG9pbnRlcnM6IFBvaW50ZXJbXSxcclxuXHRwb2ludGVySW5kZXg6IFBvaW50ZXJJbmRleCxcclxuXHRwb2ludGVySWQ6IG51bWJlcixcclxuXHRwb2ludGVyc1N0cmluZ21vZGU6IGJvb2xlYW5bXSxcclxuXHRzdGFja3M6IGJpZ2ludFtdW11bXSxcclxuXHRvdXRwdXRDb250ZW50OiBzdHJpbmcsXHJcblx0c3RhdGVXaWR0aDogbnVtYmVyLFxyXG5cdHN0YXRlSGVpZ2h0OiBudW1iZXIsXHJcblx0b3V0cHV0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbik6IFtJbnN0cnVjdGlvblJlc3VsdCwgc3RyaW5nLCBudW1iZXIsIG51bWJlcl0ge1xyXG5cdGNvbnN0IHRvc3MgPSBzdGFja3NbcG9pbnRlcklkXVtzdGFja3NbcG9pbnRlcklkXS5sZW5ndGggLSAxXTtcclxuXHRzd2l0Y2ggKGN1ckNvbW1hbmQpIHtcclxuXHRcdGNhc2UgXCJxXCI6XHJcblx0XHRcdHJldHVybiBbSW5zdHJ1Y3Rpb25SZXN1bHQuU3RvcHBlZCwgb3V0cHV0Q29udGVudCwgc3RhdGVXaWR0aCwgc3RhdGVIZWlnaHRdO1xyXG5cdFx0Y2FzZSBcIjBcIjpcclxuXHRcdGNhc2UgXCIxXCI6XHJcblx0XHRjYXNlIFwiMlwiOlxyXG5cdFx0Y2FzZSBcIjNcIjpcclxuXHRcdGNhc2UgXCI0XCI6XHJcblx0XHRjYXNlIFwiNVwiOlxyXG5cdFx0Y2FzZSBcIjZcIjpcclxuXHRcdGNhc2UgXCI3XCI6XHJcblx0XHRjYXNlIFwiOFwiOlxyXG5cdFx0Y2FzZSBcIjlcIjpcclxuXHRcdFx0Ly8gUHVzaCB0aGUgbnVtYmVyXHJcblx0XHRcdHRvc3MucHVzaChCaWdJbnQoY3VyQ29tbWFuZCkpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJhXCI6XHJcblx0XHRjYXNlIFwiYlwiOlxyXG5cdFx0Y2FzZSBcImNcIjpcclxuXHRcdGNhc2UgXCJkXCI6XHJcblx0XHRjYXNlIFwiZVwiOlxyXG5cdFx0Y2FzZSBcImZcIjpcclxuXHRcdFx0Ly8gUHVzaCAxMCB0aHJvdWdoIDE1XHJcblx0XHRcdHRvc3MucHVzaChCaWdJbnQoY3VyQ29tbWFuZC5jaGFyQ29kZUF0KDApIC0gODcpKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdcIic6XHJcblx0XHRcdC8vIEVudGVyIHN0cmluZ21vZGVcclxuXHRcdFx0cG9pbnRlcnNTdHJpbmdtb2RlW3BvaW50ZXJJZF0gPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCIkXCI6XHJcblx0XHRcdC8vIFBvcFxyXG5cdFx0XHR0b3NzLnBvcCgpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCI6XCI6XHJcblx0XHRcdC8vIER1cGxpY2F0ZVxyXG5cdFx0XHRpZiAodG9zcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dG9zcy5wdXNoKHRvc3NbdG9zcy5sZW5ndGggLSAxXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiXFxcXFwiOlxyXG5cdFx0XHQvLyBTd2FwXHJcblx0XHRcdGlmICh0b3NzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRjb25zdCB0ZW1wID0gdG9zc1t0b3NzLmxlbmd0aCAtIDFdO1xyXG5cdFx0XHRcdHRvc3NbdG9zcy5sZW5ndGggLSAxXSA9IHRvc3NbdG9zcy5sZW5ndGggLSAyXTtcclxuXHRcdFx0XHR0b3NzW3Rvc3MubGVuZ3RoIC0gMl0gPSB0ZW1wO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIitcIjpcclxuXHRcdFx0Ly8gQWRkXHJcblx0XHRcdGhhbmRsZUFyaXRobWV0aWModG9zcywgKGEsIGIpID0+IGEgKyBiKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiKlwiOlxyXG5cdFx0XHQvLyBNdWx0aXBseVxyXG5cdFx0XHRoYW5kbGVBcml0aG1ldGljKHRvc3MsIChhLCBiKSA9PiBhICogYik7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIi1cIjpcclxuXHRcdFx0Ly8gU3VidHJhY3RcclxuXHRcdFx0aGFuZGxlQXJpdGhtZXRpYyh0b3NzLCAoYSwgYikgPT4gYSAtIGIpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCIvXCI6XHJcblx0XHRcdC8vIERpdmlkZVxyXG5cdFx0XHRoYW5kbGVBcml0aG1ldGljKHRvc3MsIChhLCBiKSA9PiAoYiA9PT0gWkVSTyA/IFpFUk8gOiBhIC8gYikpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCIlXCI6XHJcblx0XHRcdC8vIE1vZFxyXG5cdFx0XHRoYW5kbGVBcml0aG1ldGljKHRvc3MsIChhLCBiKSA9PiAoYiA9PT0gWkVSTyA/IFpFUk8gOiBhICUgYikpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCIuXCI6XHJcblx0XHRcdC8vIE91dHB1dCBudW1iZXJcclxuXHRcdFx0aWYgKHRvc3MubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdG91dHB1dENvbnRlbnQgPSBwcmludE91dHB1dCh0b3NzLnBvcCgpIS50b1N0cmluZygpICsgXCIgXCIsIG91dHB1dENvbnRlbnQsIG91dHB1dEVsZW1lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIixcIjpcclxuXHRcdFx0Ly8gT3V0cHV0IGNoYXJhY3RlclxyXG5cdFx0XHRpZiAodG9zcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Y29uc3QgbnVtID0gYmlnSW50QXNJbnQodG9zcy5wb3AoKSEpO1xyXG5cdFx0XHRcdGlmIChudW0gPT09IDgpIHtcclxuXHRcdFx0XHRcdG91dHB1dENvbnRlbnQgPSBwcmludE91dHB1dChudWxsLCBvdXRwdXRDb250ZW50LCBvdXRwdXRFbGVtZW50KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0b3V0cHV0Q29udGVudCA9IHByaW50T3V0cHV0KFN0cmluZy5mcm9tQ2hhckNvZGUobnVtKSwgb3V0cHV0Q29udGVudCwgb3V0cHV0RWxlbWVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIiZcIjpcclxuXHRcdFx0Ly8gSW5wdXQgaW50ZWdlclxyXG5cdFx0XHRjb25zdCBudW0gPSBwcm9tcHQoXCJFbnRlciBhbiBpbnRlZ2VyXCIpO1xyXG5cdFx0XHRsZXQgaW50czogc3RyaW5nW10gPSBbXTtcclxuXHRcdFx0aWYgKG51bSA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdGludHMgPSBbXCIwXCJdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGludHMgPSBudW0ubWF0Y2goLy0/WzAtOV0rLykgPz8gW1wiMFwiXTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b3NzLnB1c2goQmlnSW50KGludHNbMF0pKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiflwiOlxyXG5cdFx0XHQvLyBJbnB1dCBjaGFyYWN0ZXJcclxuXHRcdFx0Y29uc3QgY2hhciA9IHByb21wdChcIkVudGVyIGEgY2hhcmFjdGVyXCIpO1xyXG5cdFx0XHRpZiAoY2hhciA9PT0gXCJcIiB8fCBjaGFyID09PSBudWxsKSB7XHJcblx0XHRcdFx0dG9zcy5wdXNoKEJpZ0ludCgxMCkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRvc3MucHVzaChCaWdJbnQoY2hhci5jaGFyQ29kZUF0KDApKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiIVwiOlxyXG5cdFx0XHQvLyBOb3QgLSBjaGFuZ2VzIDAgdG8gMSBhbmQgbm9uemVybyB0byAwXHJcblx0XHRcdGlmICh0b3NzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHR0b3NzW3Rvc3MubGVuZ3RoIC0gMV0gPSB0b3NzW3Rvc3MubGVuZ3RoIC0gMV0gPT09IFpFUk8gPyBPTkUgOiBaRVJPO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIiNcIjpcclxuXHRcdFx0Ly8gU2tpcCBvdmVyIG5leHQgY29tbWFuZFxyXG5cdFx0XHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0XHRcdHVwZGF0ZVBvaW50ZXJJbmRleChwb2ludGVySW5kZXgsIGlwLngsIGlwLnksIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpcC54ID0gKGlwLnggKyBkZWx0YS54KSAlIHN0YXRlV2lkdGg7XHJcblx0XHRcdGlwLnkgPSAoaXAueSArIGRlbHRhLnkpICUgc3RhdGVIZWlnaHQ7XHJcblx0XHRcdGlmIChpcC54IDwgMCkge1xyXG5cdFx0XHRcdGlwLnggPSBzdGF0ZVdpZHRoICsgaXAueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaXAueSA8IDApIHtcclxuXHRcdFx0XHRpcC55ID0gc3RhdGVIZWlnaHQgKyBpcC55O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChzdGF0ZVNob3duKSB7XHJcblx0XHRcdFx0dXBkYXRlUG9pbnRlckluZGV4KHBvaW50ZXJJbmRleCwgaXAueCwgaXAueSwgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiPFwiOlxyXG5cdFx0XHQvLyBMZWZ0XHJcblx0XHRcdGRlbHRhLnggPSAtMTtcclxuXHRcdFx0ZGVsdGEueSA9IDA7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIl5cIjpcclxuXHRcdFx0Ly8gVXBcclxuXHRcdFx0ZGVsdGEueCA9IDA7XHJcblx0XHRcdGRlbHRhLnkgPSAtMTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiPlwiOlxyXG5cdFx0XHQvLyBSaWdodFxyXG5cdFx0XHRkZWx0YS54ID0gMTtcclxuXHRcdFx0ZGVsdGEueSA9IDA7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInZcIjpcclxuXHRcdFx0Ly8gRG93blxyXG5cdFx0XHRkZWx0YS54ID0gMDtcclxuXHRcdFx0ZGVsdGEueSA9IDE7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIj9cIjpcclxuXHRcdFx0Ly8gR28gYXdheSFcclxuXHRcdFx0bGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcclxuXHRcdFx0c3dpdGNoIChyYW5kKSB7XHJcblx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdFx0ZGVsdGEueCA9IC0xO1xyXG5cdFx0XHRcdFx0ZGVsdGEueSA9IDA7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRkZWx0YS54ID0gMDtcclxuXHRcdFx0XHRcdGRlbHRhLnkgPSAtMTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdGRlbHRhLnggPSAxO1xyXG5cdFx0XHRcdFx0ZGVsdGEueSA9IDA7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0Ly8gM1xyXG5cdFx0XHRcdFx0ZGVsdGEueCA9IDA7XHJcblx0XHRcdFx0XHRkZWx0YS55ID0gMTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIuKAvVwiOlxyXG5cdFx0XHQvLyBHbyBhd2F54oC9XHJcblx0XHRcdGxldCByYW5kMSA9IDAsXHJcblx0XHRcdFx0cmFuZDIgPSAwO1xyXG5cdFx0XHR3aGlsZSAocmFuZDEgPT09IDAgJiYgcmFuZDIgPT09IDApIHtcclxuXHRcdFx0XHRyYW5kMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIgKiBjb2RlQXJyYXkubGVuZ3RoICsgMSkgLSBjb2RlQXJyYXkubGVuZ3RoO1xyXG5cdFx0XHRcdHJhbmQyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiAqIGNvZGVBcnJheVswXS5sZW5ndGggKyAxKSAtIGNvZGVBcnJheVswXS5sZW5ndGg7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVsdGEueCA9IHJhbmQxO1xyXG5cdFx0XHRkZWx0YS55ID0gcmFuZDI7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImBcIjpcclxuXHRcdFx0Ly8gR3JlYXRlciB0aGFuXHJcblx0XHRcdGhhbmRsZUFyaXRobWV0aWModG9zcywgKGEsIGIpID0+IChhID4gYiA/IE9ORSA6IFpFUk8pKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwifFwiOlxyXG5cdFx0XHQvLyBVcCBpZiBub256ZXJvXHJcblx0XHRcdGlmICh0b3NzLmxlbmd0aCA+IDAgJiYgdG9zcy5wb3AoKSAhPT0gWkVSTykge1xyXG5cdFx0XHRcdGRlbHRhLnggPSAwO1xyXG5cdFx0XHRcdGRlbHRhLnkgPSAtMTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkZWx0YS54ID0gMDtcclxuXHRcdFx0XHRkZWx0YS55ID0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJfXCI6XHJcblx0XHRcdC8vIExlZnQgaWYgbm9uemVyb1xyXG5cdFx0XHRpZiAodG9zcy5sZW5ndGggPiAwICYmIHRvc3MucG9wKCkgIT09IFpFUk8pIHtcclxuXHRcdFx0XHRkZWx0YS54ID0gLTE7XHJcblx0XHRcdFx0ZGVsdGEueSA9IDA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGVsdGEueCA9IDE7XHJcblx0XHRcdFx0ZGVsdGEueSA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZ1wiOlxyXG5cdFx0XHQvLyBHZXRcclxuXHRcdFx0aWYgKHRvc3MubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdGNvbnN0IHkgPSBiaWdJbnRBc0ludCh0b3NzLnBvcCgpISk7XHJcblx0XHRcdFx0Y29uc3QgeCA9IGJpZ0ludEFzSW50KHRvc3MucG9wKCkhKTtcclxuXHRcdFx0XHRwdXNoSXRlbUF0TG9jYXRpb24odG9zcywgeCwgeSwgY29kZUFycmF5KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJwXCI6XHJcblx0XHRcdC8vIFB1dFxyXG5cdFx0XHRpZiAodG9zcy5sZW5ndGggPiAyKSB7XHJcblx0XHRcdFx0Y29uc3QgeSA9IGJpZ0ludEFzSW50KHRvc3MucG9wKCkhKTtcclxuXHRcdFx0XHRjb25zdCB4ID0gYmlnSW50QXNJbnQodG9zcy5wb3AoKSEpO1xyXG5cdFx0XHRcdGNvbnN0IGl0ZW0gPSB0b3NzLnBvcCgpITtcclxuXHRcdFx0XHRpZiAoMzEgPCBpdGVtICYmIGl0ZW0gPCAxMjcpIHtcclxuXHRcdFx0XHRcdC8vIElmIGl0ZW0gaXMgYSBudW1iZXIgd2l0aCBhIGNvcnJlc3BvbmRpbmcgQVNDSUkgY2hhcmFjdGVyLCBwdXQgdGhhdCBjaGFyYWN0ZXJcclxuXHRcdFx0XHRcdFtzdGF0ZVdpZHRoLCBzdGF0ZUhlaWdodF0gPSBwdXRJdGVtT25Cb2FyZChcclxuXHRcdFx0XHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZShiaWdJbnRBc0ludChpdGVtKSksXHJcblx0XHRcdFx0XHRcdHgsXHJcblx0XHRcdFx0XHRcdHksXHJcblx0XHRcdFx0XHRcdGNvZGVBcnJheSxcclxuXHRcdFx0XHRcdFx0c3RhdGVXaWR0aCxcclxuXHRcdFx0XHRcdFx0c3RhdGVIZWlnaHQsXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRbc3RhdGVXaWR0aCwgc3RhdGVIZWlnaHRdID0gcHV0SXRlbU9uQm9hcmQoXHJcblx0XHRcdFx0XHRcdGl0ZW0sXHJcblx0XHRcdFx0XHRcdHgsXHJcblx0XHRcdFx0XHRcdHksXHJcblx0XHRcdFx0XHRcdGNvZGVBcnJheSxcclxuXHRcdFx0XHRcdFx0c3RhdGVXaWR0aCxcclxuXHRcdFx0XHRcdFx0c3RhdGVIZWlnaHQsXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJAXCI6XHJcblx0XHRcdC8vIFJlbW92ZSBjdXJyZW50IHBvaW50ZXJcclxuXHRcdFx0aWYgKHBvaW50ZXJzLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRcdHJldHVybiBbSW5zdHJ1Y3Rpb25SZXN1bHQuU3RvcHBlZCwgb3V0cHV0Q29udGVudCwgc3RhdGVXaWR0aCwgc3RhdGVIZWlnaHRdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChzdGF0ZVNob3duKSB7XHJcblx0XHRcdFx0XHR1cGRhdGVQb2ludGVySW5kZXgocG9pbnRlckluZGV4LCBpcC54LCBpcC55LCBmYWxzZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHBvaW50ZXJzLnNwbGljZShwb2ludGVySWQsIDEpO1xyXG5cdFx0XHRcdHBvaW50ZXJzU3RyaW5nbW9kZS5zcGxpY2UocG9pbnRlcklkLCAxKTtcclxuXHRcdFx0XHRzdGFja3Muc3BsaWNlKHBvaW50ZXJJZCwgMSk7XHJcblx0XHRcdFx0cmV0dXJuIFtJbnN0cnVjdGlvblJlc3VsdC5EZWxldGVkUG9pbnRlciwgb3V0cHV0Q29udGVudCwgc3RhdGVXaWR0aCwgc3RhdGVIZWlnaHRdO1xyXG5cdFx0XHR9XHJcblx0XHRjYXNlIFwiblwiOlxyXG5cdFx0XHQvLyBDbGVhciBUT1NTXHJcblx0XHRcdHRvc3Muc3BsaWNlKDApO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ7XCI6XHJcblx0XHRcdC8vIEJlZ2luIGJsb2NrXHJcblx0XHRcdGNvbnN0IG5ld1Rvc3M6IGJpZ2ludFtdID0gW107XHJcblx0XHRcdGlmICh0b3NzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRjb25zdCBuID0gYmlnSW50QXNJbnQodG9zcy5wb3AoKSEpO1xyXG5cdFx0XHRcdC8vIE1vdmUgdGhlIHRvcCBuIGl0ZW1zIHRvIHRoZSBuZXcgVE9TU1xyXG5cdFx0XHRcdGlmICh0b3NzLmxlbmd0aCA+PSBuKSB7XHJcblx0XHRcdFx0XHRuZXdUb3NzLnB1c2goLi4udG9zcy5zcGxpY2UodG9zcy5sZW5ndGggLSBuKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG5ld1Rvc3MucHVzaCguLi5uZXcgQXJyYXk8YmlnaW50PihuIC0gdG9zcy5sZW5ndGgpLmZpbGwoWkVSTykuY29uY2F0KHRvc3Muc3BsaWNlKDApKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHN0YWNrc1twb2ludGVySWRdLnB1c2gobmV3VG9zcyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIn1cIjpcclxuXHRcdFx0Ly8gRW5kIGJsb2NrXHJcblx0XHRcdGlmIChzdGFja3NbcG9pbnRlcklkXS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0Ly8gVHJhbnNmZXIgdG8gU09TU1xyXG5cdFx0XHRcdGlmICh0b3NzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdGNvbnN0IHNvc3MgPSBzdGFja3NbcG9pbnRlcklkXVtzdGFja3NbcG9pbnRlcklkXS5sZW5ndGggLSAyXTtcclxuXHRcdFx0XHRcdGNvbnN0IG4gPSBiaWdJbnRBc0ludCh0b3NzLnBvcCgpISk7XHJcblx0XHRcdFx0XHRpZiAodG9zcy5sZW5ndGggPj0gbikge1xyXG5cdFx0XHRcdFx0XHRzb3NzLnNwbGljZS5hcHBseShzb3NzLCBbc29zcy5sZW5ndGgsIDAsIC4uLnRvc3Muc3BsaWNlKHRvc3MubGVuZ3RoIC0gbildKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNvc3Muc3BsaWNlLmFwcGx5KHNvc3MsIFtcclxuXHRcdFx0XHRcdFx0XHRzb3NzLmxlbmd0aCxcclxuXHRcdFx0XHRcdFx0XHQwLFxyXG5cdFx0XHRcdFx0XHRcdC4uLm5ldyBBcnJheTxiaWdpbnQ+KG4gLSB0b3NzLmxlbmd0aCkuZmlsbChaRVJPKS5jb25jYXQodG9zcyksXHJcblx0XHRcdFx0XHRcdF0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzdGFja3NbcG9pbnRlcklkXS5wb3AoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ1XCI6XHJcblx0XHRcdC8vIFN0YWNrIHVuZGVyIHN0YWNrXHJcblx0XHRcdGlmICh0b3NzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRsZXQgbiA9IGJpZ0ludEFzSW50KHRvc3MucG9wKCkhKTtcclxuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbSA9IHN0YWNrc1twb2ludGVySWRdW3N0YWNrc1twb2ludGVySWRdLmxlbmd0aCAtIDJdLnBvcCgpO1xyXG5cdFx0XHRcdFx0dG9zcy5wdXNoKGl0ZW0gPT09IHVuZGVmaW5lZCA/IFpFUk8gOiBpdGVtKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwieFwiOlxyXG5cdFx0XHRpZiAodG9zcy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0ZGVsdGEueSA9IGJpZ0ludEFzSW50KHRvc3MucG9wKCkhKTtcclxuXHRcdFx0XHRkZWx0YS54ID0gYmlnSW50QXNJbnQodG9zcy5wb3AoKSEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIltcIjoge1xyXG5cdFx0XHQvLyBUdXJuIGxlZnRcclxuXHRcdFx0Y29uc3QgeCA9IGRlbHRhLng7XHJcblx0XHRcdGNvbnN0IHkgPSBkZWx0YS55O1xyXG5cdFx0XHRkZWx0YS54ID0gLXk7XHJcblx0XHRcdGRlbHRhLnkgPSB4O1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgXCJdXCI6IHtcclxuXHRcdFx0Ly8gVHVybiByaWdodFxyXG5cdFx0XHRjb25zdCB4ID0gZGVsdGEueDtcclxuXHRcdFx0Y29uc3QgeSA9IGRlbHRhLnk7XHJcblx0XHRcdGRlbHRhLnggPSB5O1xyXG5cdFx0XHRkZWx0YS55ID0gLXg7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBcIndcIjpcclxuXHRcdFx0Ly8gQ29tcGFyZSBhbmQgdHVyblxyXG5cdFx0XHRpZiAodG9zcy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0Y29uc3QgYiA9IHRvc3MucG9wKCkhO1xyXG5cdFx0XHRcdGNvbnN0IGEgPSB0b3NzLnBvcCgpITtcclxuXHRcdFx0XHRpZiAoYSA8IGIpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHggPSBkZWx0YS54O1xyXG5cdFx0XHRcdFx0Y29uc3QgeSA9IGRlbHRhLnk7XHJcblx0XHRcdFx0XHRkZWx0YS54ID0gLXk7XHJcblx0XHRcdFx0XHRkZWx0YS55ID0geDtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGEgPiBiKSB7XHJcblx0XHRcdFx0XHRjb25zdCB4ID0gZGVsdGEueDtcclxuXHRcdFx0XHRcdGNvbnN0IHkgPSBkZWx0YS55O1xyXG5cdFx0XHRcdFx0ZGVsdGEueCA9IHk7XHJcblx0XHRcdFx0XHRkZWx0YS55ID0gLXg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIElmIHRoZXkncmUgdGhlIHNhbWUsIGNvbnRpbnVlIHN0cmFpZ2h0XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwidFwiOlxyXG5cdFx0XHQvLyBOZXcgcG9pbnRlclxyXG5cdFx0XHRjb25zdCBuZXdTT1NTOiBiaWdpbnRbXVtdID0gW107XHJcblx0XHRcdGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzW3BvaW50ZXJJZF0pIHtcclxuXHRcdFx0XHRuZXdTT1NTLnB1c2goc3RhY2suc2xpY2UoKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cG9pbnRlcnMuc3BsaWNlKHBvaW50ZXJJZCwgMCwge1xyXG5cdFx0XHRcdGlwOiB7IHg6IGlwLngsIHk6IGlwLnkgfSxcclxuXHRcdFx0XHRkZWx0YTogeyB4OiAtZGVsdGEueCwgeTogLWRlbHRhLnkgfSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHBvaW50ZXJzU3RyaW5nbW9kZS5zcGxpY2UocG9pbnRlcklkLCAwLCBmYWxzZSk7XHJcblx0XHRcdHN0YWNrcy5zcGxpY2UocG9pbnRlcklkLCAwLCBuZXdTT1NTKTtcclxuXHRcdFx0cmV0dXJuIFtJbnN0cnVjdGlvblJlc3VsdC5OZXdQb2ludGVyLCBvdXRwdXRDb250ZW50LCBzdGF0ZVdpZHRoLCBzdGF0ZUhlaWdodF07XHJcblx0XHRjYXNlIFwiJ1wiOlxyXG5cdFx0XHQvLyBGZXRjaCBjaGFyYWN0ZXJcclxuXHRcdFx0aWYgKHN0YXRlU2hvd24pIHtcclxuXHRcdFx0XHR1cGRhdGVQb2ludGVySW5kZXgocG9pbnRlckluZGV4LCBpcC54LCBpcC55LCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aXAueCA9IChpcC54ICsgZGVsdGEueCkgJSBzdGF0ZVdpZHRoO1xyXG5cdFx0XHRpcC55ID0gKGlwLnkgKyBkZWx0YS55KSAlIHN0YXRlSGVpZ2h0O1xyXG5cdFx0XHRpZiAoaXAueCA8IDApIHtcclxuXHRcdFx0XHRpcC54ID0gc3RhdGVXaWR0aCArIGlwLng7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGlwLnkgPCAwKSB7XHJcblx0XHRcdFx0aXAueSA9IHN0YXRlSGVpZ2h0ICsgaXAueTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0XHRcdHVwZGF0ZVBvaW50ZXJJbmRleChwb2ludGVySW5kZXgsIGlwLngsIGlwLnksIHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHB1c2hJdGVtQXRMb2NhdGlvbih0b3NzLCBpcC54LCBpcC55LCBjb2RlQXJyYXkpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzXCI6XHJcblx0XHRcdC8vIFN0b3JlIGNoYXJhY3RlclxyXG5cdFx0XHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0XHRcdHVwZGF0ZVBvaW50ZXJJbmRleChwb2ludGVySW5kZXgsIGlwLngsIGlwLnksIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpcC54ID0gKGlwLnggKyBkZWx0YS54KSAlIHN0YXRlV2lkdGg7XHJcblx0XHRcdGlwLnkgPSAoaXAueSArIGRlbHRhLnkpICUgc3RhdGVIZWlnaHQ7XHJcblx0XHRcdGlmIChpcC54IDwgMCkge1xyXG5cdFx0XHRcdGlwLnggPSBzdGF0ZVdpZHRoICsgaXAueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaXAueSA8IDApIHtcclxuXHRcdFx0XHRpcC55ID0gc3RhdGVIZWlnaHQgKyBpcC55O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0b3NzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRjb25zdCBpdGVtID0gdG9zcy5wb3AoKSE7XHJcblx0XHRcdFx0aWYgKDMxIDwgaXRlbSAmJiBpdGVtIDwgMTI3KSB7XHJcblx0XHRcdFx0XHRbc3RhdGVXaWR0aCwgc3RhdGVIZWlnaHRdID0gcHV0SXRlbU9uQm9hcmQoXHJcblx0XHRcdFx0XHRcdFN0cmluZy5mcm9tQ2hhckNvZGUoYmlnSW50QXNJbnQoaXRlbSkpLFxyXG5cdFx0XHRcdFx0XHRpcC54LFxyXG5cdFx0XHRcdFx0XHRpcC55LFxyXG5cdFx0XHRcdFx0XHRjb2RlQXJyYXksXHJcblx0XHRcdFx0XHRcdHN0YXRlV2lkdGgsXHJcblx0XHRcdFx0XHRcdHN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0W3N0YXRlV2lkdGgsIHN0YXRlSGVpZ2h0XSA9IHB1dEl0ZW1PbkJvYXJkKFxyXG5cdFx0XHRcdFx0XHRpdGVtLFxyXG5cdFx0XHRcdFx0XHRpcC54LFxyXG5cdFx0XHRcdFx0XHRpcC55LFxyXG5cdFx0XHRcdFx0XHRjb2RlQXJyYXksXHJcblx0XHRcdFx0XHRcdHN0YXRlV2lkdGgsXHJcblx0XHRcdFx0XHRcdHN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHN0YXRlU2hvd24pIHtcclxuXHRcdFx0XHR1cGRhdGVQb2ludGVySW5kZXgocG9pbnRlckluZGV4LCBpcC54LCBpcC55LCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJyXCI6XHJcblx0XHRcdC8vIFJlZmxlY3RcclxuXHRcdFx0ZGVsdGEueCAqPSAtMTtcclxuXHRcdFx0ZGVsdGEueSAqPSAtMTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Ly8gRW5kIG9mIHRoZSBtYWluIGNhc2VzXHJcblxyXG5cdFx0Y2FzZSBcIiBcIjpcclxuXHRcdFx0Ly8gU2hvdWxkIG9ubHkgaGFwcGVuIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZywgb3RoZXJ3aXNlIHdlJ2QgaGF2ZSBza2lwcGVkIHRoaXMgcG9zaXRpb25cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdC8vIElmIHdlIG1hZGUgaXQgb3V0IG9mIHRoZSBzd2l0Y2ggc3RhdGVtZW50LCBjb250aW51ZVxyXG5cdHJldHVybiBbSW5zdHJ1Y3Rpb25SZXN1bHQuQ29udGludWUsIG91dHB1dENvbnRlbnQsIHN0YXRlV2lkdGgsIHN0YXRlSGVpZ2h0XTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHVzaEl0ZW1BdExvY2F0aW9uKHRvc3M6IGJpZ2ludFtdLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY29kZUFycmF5OiAoYmlnaW50IHwgc3RyaW5nKVtdW10pOiB2b2lkIHtcclxuXHRpZiAoY29kZUFycmF5W3ldID09PSB1bmRlZmluZWQgfHwgY29kZUFycmF5W3ldW3hdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdC8vIFB1c2ggYSBzcGFjZVxyXG5cdFx0dG9zcy5wdXNoKEJpZ0ludCgzMikpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zdCBpdGVtID0gY29kZUFycmF5W3ldW3hdO1xyXG5cdFx0aWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdHRvc3MucHVzaChCaWdJbnQoaXRlbS5jaGFyQ29kZUF0KDApKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0b3NzLnB1c2goaXRlbSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBwdXRJdGVtT25Cb2FyZChcclxuXHRpdGVtOiBiaWdpbnQgfCBzdHJpbmcsXHJcblx0eDogbnVtYmVyLFxyXG5cdHk6IG51bWJlcixcclxuXHRjb2RlQXJyYXk6IChiaWdpbnQgfCBzdHJpbmcpW11bXSxcclxuXHRzdGF0ZVdpZHRoOiBudW1iZXIsXHJcblx0c3RhdGVIZWlnaHQ6IG51bWJlcixcclxuKTogW251bWJlciwgbnVtYmVyXSB7XHJcblx0aWYgKHggPCAwIHx8IHkgPCAwKSB7XHJcblx0XHRyZXR1cm4gW3N0YXRlV2lkdGgsIHN0YXRlSGVpZ2h0XTtcclxuXHR9XHJcblx0aWYgKGNvZGVBcnJheVt5XSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHQvLyBBZGQgbW9yZSByb3dzXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSB5IC0gc3RhdGVIZWlnaHQ7IGkrKykge1xyXG5cdFx0XHRjb2RlQXJyYXkucHVzaChbXSk7XHJcblx0XHR9XHJcblx0XHRzdGF0ZUhlaWdodCA9IGNvZGVBcnJheS5sZW5ndGg7XHJcblx0fVxyXG5cdGlmIChjb2RlQXJyYXlbeV1beF0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0Ly8gQWRkIG1vcmUgY29sdW1ucyB0byBjdXJyZW50IHJvd1xyXG5cdFx0Y29kZUFycmF5W3ldLnB1c2goLi4ubmV3IEFycmF5PHN0cmluZyB8IGJpZ2ludD4oeCAtIGNvZGVBcnJheVt5XS5sZW5ndGggKyAxKS5maWxsKFwiIFwiKSk7XHJcblx0XHRzdGF0ZVdpZHRoID0gTWF0aC5tYXgoc3RhdGVXaWR0aCwgY29kZUFycmF5W3ldLmxlbmd0aCk7XHJcblx0fVxyXG5cdGNvZGVBcnJheVt5XVt4XSA9IGl0ZW07XHJcblx0cmV0dXJuIFtzdGF0ZVdpZHRoLCBzdGF0ZUhlaWdodF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpZ0ludEFzSW50KG46IGJpZ2ludCkge1xyXG5cdGlmIChuIDwgLU51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSB7XHJcblx0XHRyZXR1cm4gLU51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG5cdH0gZWxzZSBpZiAobiA+IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSB7XHJcblx0XHRyZXR1cm4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBwYXJzZUludChuLnRvU3RyaW5nKDEwKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVBcml0aG1ldGljKHRvc3M6IGJpZ2ludFtdLCBvcDogKGE6IGJpZ2ludCwgYjogYmlnaW50KSA9PiBiaWdpbnQpOiB2b2lkIHtcclxuXHRpZiAodG9zcy5sZW5ndGggPiAxKSB7XHJcblx0XHRjb25zdCBiID0gdG9zcy5wb3AoKSE7XHJcblx0XHRjb25zdCBhID0gdG9zcy5wb3AoKSE7XHJcblx0XHR0b3NzLnB1c2gob3AoYSwgYikpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gQ29sb3JzIHRvIGRpc3BsYXkgaW5zdHJ1Y3Rpb25zXHJcbmNvbnN0IGNvbG9yQ29uc3QgPSBcImJsYWNrXCI7XHJcbmNvbnN0IGNvbG9yT3AgPSBcImJsdWVcIjtcclxuY29uc3QgY29sb3JNb3ZlID0gXCJsaW1lZ3JlZW5cIjtcclxuY29uc3QgY29sb3JJTyA9IFwiI2NjMDBmZlwiO1xyXG5jb25zdCBjb2xvclN0YWNrID0gXCJvcmFuZ2VcIjtcclxuY29uc3QgY29sb3JRdWl0ID0gXCJyZWRcIjtcclxuY29uc3QgY29sb3JTdG9yYWdlID0gXCJjeWFuXCI7XHJcblxyXG5jb25zdCBpbnN0cnVjdGlvbkNvbG9yVGFibGU6IHsgW2NoYXI6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG5cdC8vIENvbnN0YW50c1xyXG5cdFwiMFwiOiBjb2xvckNvbnN0LFxyXG5cdFwiMVwiOiBjb2xvckNvbnN0LFxyXG5cdFwiMlwiOiBjb2xvckNvbnN0LFxyXG5cdFwiM1wiOiBjb2xvckNvbnN0LFxyXG5cdFwiNFwiOiBjb2xvckNvbnN0LFxyXG5cdFwiNVwiOiBjb2xvckNvbnN0LFxyXG5cdFwiNlwiOiBjb2xvckNvbnN0LFxyXG5cdFwiN1wiOiBjb2xvckNvbnN0LFxyXG5cdFwiOFwiOiBjb2xvckNvbnN0LFxyXG5cdFwiOVwiOiBjb2xvckNvbnN0LFxyXG5cdGE6IGNvbG9yQ29uc3QsXHJcblx0YjogY29sb3JDb25zdCxcclxuXHRjOiBjb2xvckNvbnN0LFxyXG5cdGQ6IGNvbG9yQ29uc3QsXHJcblx0ZTogY29sb3JDb25zdCxcclxuXHRmOiBjb2xvckNvbnN0LFxyXG5cdC8vIHBvcCAtPiBvcGVyYXRpb24gLT4gcHVzaFxyXG5cdFwiK1wiOiBjb2xvck9wLFxyXG5cdFwiLVwiOiBjb2xvck9wLFxyXG5cdFwiKlwiOiBjb2xvck9wLFxyXG5cdFwiL1wiOiBjb2xvck9wLFxyXG5cdFwiJVwiOiBjb2xvck9wLFxyXG5cdFwiIVwiOiBjb2xvck9wLFxyXG5cdFwiYFwiOiBjb2xvck9wLFxyXG5cdC8vIE1vdmVtZW50XHJcblx0XCI8XCI6IGNvbG9yTW92ZSxcclxuXHRcIl5cIjogY29sb3JNb3ZlLFxyXG5cdFwiPlwiOiBjb2xvck1vdmUsXHJcblx0djogY29sb3JNb3ZlLFxyXG5cdFwiP1wiOiBjb2xvck1vdmUsXHJcblx0XCLigL1cIjogY29sb3JNb3ZlLFxyXG5cdF86IGNvbG9yTW92ZSxcclxuXHRcInxcIjogY29sb3JNb3ZlLFxyXG5cdFwiI1wiOiBjb2xvck1vdmUsXHJcblx0cjogY29sb3JNb3ZlLFxyXG5cdHg6IGNvbG9yTW92ZSxcclxuXHRcIltcIjogY29sb3JNb3ZlLFxyXG5cdFwiXVwiOiBjb2xvck1vdmUsXHJcblx0dzogY29sb3JNb3ZlLFxyXG5cdC8vIFN0YWNrIGluc3RydWN0aW9uc1xyXG5cdFwiOlwiOiBjb2xvclN0YWNrLFxyXG5cdFwiXFxcXFwiOiBjb2xvclN0YWNrLFxyXG5cdCQ6IGNvbG9yU3RhY2ssXHJcblx0bjogY29sb3JTdGFjayxcclxuXHRcIntcIjogY29sb3JTdGFjayxcclxuXHRcIn1cIjogY29sb3JTdGFjayxcclxuXHR1OiBjb2xvclN0YWNrLFxyXG5cdC8vIEkvTygtaXNoKVxyXG5cdFwiLlwiOiBjb2xvcklPLFxyXG5cdFwiLFwiOiBjb2xvcklPLFxyXG5cdFwiJlwiOiBjb2xvcklPLFxyXG5cdFwiflwiOiBjb2xvcklPLFxyXG5cdCdcIic6IGNvbG9ySU8sXHJcblx0XCInXCI6IGNvbG9ySU8sXHJcblx0czogY29sb3JJTyxcclxuXHQvLyBRdWl0XHJcblx0cTogY29sb3JRdWl0LFxyXG5cdFwiQFwiOiBjb2xvclF1aXQsXHJcblx0Ly8gU3RvcmFnZVxyXG5cdGc6IGNvbG9yU3RvcmFnZSxcclxuXHRwOiBjb2xvclN0b3JhZ2UsXHJcblx0Ly8gTWlzY1xyXG5cdHQ6IFwibWFnZW50YVwiLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjaGV2cm9uUG5nIGZyb20gXCIuLi9pbWFnZXMvY2hldnJvbi5wbmdcIjtcclxuaW1wb3J0IGNoZXZyb25XZWJwIGZyb20gXCIuLi9pbWFnZXMvY2hldnJvbi53ZWJwXCI7XHJcblxyXG5jb25zdCBCZWZ1bmdlRXhhbXBsZXM6IFJlYWN0LkZDPEV4YW1wbGVzUHJvcHM+ID0gKHsgc2V0SW5wdXRUZXh0QW5kU3RhdGUgfSkgPT4ge1xyXG5cdGNvbnN0IFtleHBhbmRlZCwgdG9nZ2xlRXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2V4cGFuZGVkID8gXCJleGFtcGxlc19leHBhbmRlZFwiIDogXCJleGFtcGxlc19jb2xsYXBzZWRcIn0+XHJcblx0XHRcdHtNYWluQnV0dG9uKGV4cGFuZGVkLCB0b2dnbGVFeHBhbmRlZCl9XHJcblx0XHRcdHtleHBhbmRlZCA/IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkIGZpdF9jb250ZW50IGZsZXhcIj5cclxuXHRcdFx0XHRcdHtidWlsZEJ1dHRvbihcclxuXHRcdFx0XHRcdFx0XCJoZWxsb1dvcmxkXCIsXHJcblx0XHRcdFx0XHRcdFwiSGVsbG8gV29ybGQhXCIsXHJcblx0XHRcdFx0XHRcdHNldElucHV0VGV4dEFuZFN0YXRlLFxyXG5cdFx0XHRcdFx0XHRgXCIhZGxyb3cgb2xsZUhcInYsX0BcclxuICAgICAgICAgICAgICA+Ol5gLFxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHtidWlsZEJ1dHRvbihcclxuXHRcdFx0XHRcdFx0XCJmYWN0b3JpYWxcIixcclxuXHRcdFx0XHRcdFx0XCJGYWN0b3JpYWxcIixcclxuXHRcdFx0XHRcdFx0c2V0SW5wdXRUZXh0QW5kU3RhdGUsXHJcblx0XHRcdFx0XHRcdGAmOj4wMHB2XHJcbiAgKiAgIDFcclxuICBnICAgLVxyXG4gIDAgICA6XHJcbi5AXjAgOl8wMGdgLFxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHtidWlsZEJ1dHRvbihcclxuXHRcdFx0XHRcdFx0XCJmYWN0b3JcIixcclxuXHRcdFx0XHRcdFx0XCJGYWN0b3JcIixcclxuXHRcdFx0XHRcdFx0c2V0SW5wdXRUZXh0QW5kU3RhdGUsXHJcblx0XHRcdFx0XHRcdGAmOi5cIiA9XCIsLDp2IDsgRmFjdG9ycyBhbiBpbnRlZ2VyXHJcbnYgIF92I1xcYDA6PF8wLkBcclxuIC0xMDwgICAgXiotMTBcXFxcXHJcbj4wMHA+MDBnMS0jdl8+OiMuX0BcclxuXi9cXFxcZzAwOjwgICAyXHJcbiAgICAgPiAgIDErdlxyXG4gICAgIF5fXiMlPDpcclxuICAgICAgICAgIFxcXFwwXHJcbiAgICAgICAgICBnMFxyXG4gICAgICAgICAgXjxgLFxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHtidWlsZEJ1dHRvbihcclxuXHRcdFx0XHRcdFx0XCJiaW5vbWlhbFwiLFxyXG5cdFx0XHRcdFx0XHRcIkJpbm9taWFsXCIsXHJcblx0XHRcdFx0XHRcdHNldElucHV0VGV4dEFuZFN0YXRlLFxyXG5cdFx0XHRcdFx0XHRgPiAgICAgICAgICAgIGEgICAgICAgICA0ICAgICAgICAgdlxyXG4gY2FsY3VsYXRlcyBuXiBjaG9vc2Uga15cclxudiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBtYWtlcyBrPm4ta1xyXG4+OjFhYSpwIFxcXFwgOjBhYSpwIFxcXFwgLTogMWFhKmcgXFxcXFxcYCN2XyAxYWEqZzJhdlxyXG4gbi1rISAgICAgICAgICAgICAgICAgICAgdnAqYWEyPHZwKmFhMXAqYTxcclxudjpnKmFhMiAgICAgdHYjICAgICB0diMgIDwgICAgICA8XHJcbj4zYWEqcDEtOnYgICAgdjpnKmFhMDwgICAgICAgID4xNmFhKnBAXHJcbl4gKmcqYWEzOl92ICAgPjRhYSpwOjFhYSpnMSstdlxyXG4gICBAcCphYTUxPCAgIF4gKiBnKmFhNCA6IC0xIF9eXHJcbjx2IC0xICBnKmFhNSA8XHJcbiQ+NmFhKmcgMS12XHJcbl4gICAgICBfdiM8XHJcbl4gICAgICAgXzRhYSpnM2FhKmcvLnFgLFxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHtidWlsZEJ1dHRvbihcclxuXHRcdFx0XHRcdFx0XCJwaVwiLFxyXG5cdFx0XHRcdFx0XHRcIlBpXCIsXHJcblx0XHRcdFx0XHRcdHNldElucHV0VGV4dEFuZFN0YXRlLFxyXG5cdFx0XHRcdFx0XHRgOyAgICAgICAgICAgICAgNSAgICAgICAgICAgICAgICA7dj43NCogMzgzKnAgPjA6PjQ0NipnXFxcXFxcYCN2XzM4MypnMSszODMqcDAwODMqcDEtOnZcclxuOyAgY2FsY3VsYXRlcyBuXiBkaWdpdHMgb2YgcGkgICA7ICAgICotLS0tKiAgIHYtIDFnKjM4Mzo6PHYgZyozODBnLTFnKjM4MyA8cCo4MzE8XHJcbjsgIHdpdGggdGhlIHNwaWdvdCBhbGdvcml0aG0gICAgOyBuICB8IC0+IHwgICA+ZyBhKlxcXFwzODMqZ3Y+KzoxMzgqZzJkKmc6MDB2Xl92XHJcbjsgIGRlc2NyaWJlZCBpbiBbMV0gICAgICAgICAgICAgOyAgICB8bG9vcHwgICAgIF4gOiArMSBwIDx2MHBnKjM4M2cqMzgxJXA8ICtuXHJcbnYgMXAqNjQ2MCBwLTEqNTU0OiAvMyphIHAtMSo1NTI6IDxwICAqLS0tLSogICAgICAgICAgICAgICA+MGcvMTM4Kmc1NSpnKjB2IDEwXHJcbj4gMDU1KnAgMTA+KzAwcDowMGdcXGAjdl9hMGQyKnAyMDkzKl52ICAgICAgICAgICAgICAgcCo2NDYrMWcqNjQ2PHYqMzgxcCozODwgOmNcclxudipkMlxcXFwrMSoycCAqNTU6Ojo6ZzAwPCAgICAgICAgIHZfdiMgXFxgXFxcXGcqNjQ2OjwgMSw4LisxZyoyYzU8OzEwOyBuPmcxLToxMzgqcCBeMlxyXG4+cDoyXFxcXDM5KnAxXiAgICAgICB2cCo2NDYxcCo2NDUwPiM8ICAgIDAuOCwxK14gdiAgIWcqNjQ2IF9eIy1hIF9eIy0gOSA6IGcgKiAgPFxyXG41NDYqcDE2NDYqcHYgICAgICA8ICAgICAgICAgICAgICAgIDwgID4tMmMyKnB8PiN2XzU0NipnLjgsMT46NjQ2KmdcXFxcXFxgI3ZfMDgzKmdcclxuICAgICAgICAgICA+IDM4MypnMSszODMqcCAgIDIyYypnOjBcXGBcXFxcMV4gICAgICBAICA+ICAgICAgICAgMV4gKzEgLDguOSA8XHJcblxyXG5fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuUmVmZXJlbmNlczogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiBbMV0gLSBTLiBSYWJpbm93aXR6IGFuZCBTLiBXYWdvbiwgQSBTcGlnb3QgQWxnb3JpdGhtIGZvciB0aGUgRGlnaXRzIG9mIFBpLiAgfFxyXG4gICAgICAgVGhlIEFtZXJpY2FuIE1hdGhlbWF0aWNhbCBNb250aGx5LCAxMDI6MTk1LTIwMywgMTk5NS4gICAgICAgICAgICAgICAgIHxcclxuIFsyXSAtIEouIEdpYmJvbnMsIEFuIHVuYm91bmRlZCBzcGlnb3QgYWxnb3JpdGhtIGZvciB0aGUgZGlnaXRzIG9mIFBpLiAgICAgICB8XHJcbiAgICAgICBUaGUgQW1lcmljYW4gTWF0aGVtYXRpY2FsIE1vbnRobHksIDExMyg0KTozMTgtMzI4LCAyMDA2LiAgICAgICAgICAgICAgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX198YCxcclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHR7YnVpbGRCdXR0b24oXHJcblx0XHRcdFx0XHRcdFwicXVpbmVcIixcclxuXHRcdFx0XHRcdFx0XCJRdWluZVwiLFxyXG5cdFx0XHRcdFx0XHRzZXRJbnB1dFRleHRBbmRTdGF0ZSxcclxuXHRcdFx0XHRcdFx0YDIwMHAwMTBwMHY+dsK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrdnMDFnMDA8XHJcbnbCtyw4Liw4LjI8wrdnwrfCt8K3wrfCt8K3wrc+wrfCt8K3wrc+LMK3MDBnMSswMHBeXHJcbj4wMGcxMGfCt8K3wrdePjozYSoyKy18wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrdcclxuOmdwMDE6KzFnMDFwMDAwMCxhJDzCt8K3wrfCt3wtKzIqYTPCt8K3wrfCt8K3XHJcbsK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt0DCt8K3wrfCt8K3wrfCt8K3wrfCt8K3XHJcbsK3wrfCt8K3wrfCt8K3VGhpc8K3aXPCt2HCt3NpbXBsZcK3cXVpbmXCt8K3wrfCt8K3wrfCt1xyXG7Ct8K3wrfCt8K3KHNlbGYtcmVwcm9kdWNpbmfCt3Byb2dyYW0pwrfCt8K3wrfCt1xyXG7Ct8K3SXTCt2lzwrdxdWl0ZcK3ZWFzecK3dG/Ct3dyaXRlwrdhwrdxdWluZcK3XHJcbmluwrdiZWZ1bmdlLMK3ZHVlwrd0b8K3aXRzwrdpbnRyb3NwZWN0aXZlXHJcbm5hdHVyZS7Ct1RoaXPCt29uZcK3cHJpbnRzwrdpdHNlbGbCt3VudGlsXHJcbml0wrdlbmNvdW50ZXJzwrd3aGl0ZXNwYWNlLMK3aGVuY2XCt3RoZcK3XHJcbmRvdHPCt2V2ZXJ5d2hlcmUuwrdUaGXCt2FsZ29yaXRobcK3aXM6wrfCt1xyXG7Ct8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrdcclxuMC7Ct1dyaXRlwrdvdXTCt3RoZcK3Zmlyc3TCt3R3b8K3bnVtYmVycyzCt1xyXG7Ct8K3wrdzaW5jZcK3dGhlc2XCt2NlbGxzwrdhcmXCt2xhdGVywrd1c2VkwrdcclxuwrfCt8K3YXPCt3N0b3JhZ2XCt2xvY2F0aW9ucy7Ct8K3wrfCt8K3wrfCt8K3wrfCt8K3wrdcclxuMS7Ct0luaXRpYWxpemXCt3g9Mix5PTAuwrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt1xyXG4yLsK3R2V0wrdwb3NpdGlvbsK3KHgseSkuwrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt1xyXG4zLsK3SWbCt2l0wrdpc8K3ZW1wdHk6wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3XHJcbsK3wrfCt8K3YS7Ct1dyaXRlwrdhwrduZXfCt2xpbmUuwrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3XHJcbsK3wrfCt8K3Yi7Ct0luY3JlbWVudMK3ecK3YW5kwrdzZXTCt3g9MC7Ct8K3wrfCt8K3XHJcbsK3wrfCt8K3Yy7Ct0dldMK3KHgseSnCt2FnYWluLsK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3XHJcbsK3wrfCt8K3ZC7Ct0lmwrdpdMK3aXPCt3N0aWxswrdlbXB0eSzCt2hhbHQuwrfCt1xyXG40LsK3V3JpdGXCt2l0wrdvdXQuwrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt1xyXG41LsK3SW5jcmVtZW50wrd4LsK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt1xyXG42LsK3R2/Ct3RvwrdzdGVwwrcyLsK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrdgLFxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KSA6IG51bGx9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYnVpbGRCdXR0b24oXHJcblx0aWQ6IHN0cmluZyxcclxuXHR0ZXh0OiBzdHJpbmcsXHJcblx0c2V0SW5wdXRUZXh0QW5kU3RhdGU6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQsXHJcblx0Y29kZTogc3RyaW5nLFxyXG4pOiBKU1guRWxlbWVudCB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uX2NvbnRhaW5lclwiPlxyXG5cdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0aWQ9e2lkfVxyXG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdHNldElucHV0VGV4dEFuZFN0YXRlKGNvZGUpO1xyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7dGV4dH1cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYWluQnV0dG9uKFxyXG5cdGV4cGFuZGVkOiBib29sZWFuLFxyXG5cdHRvZ2dsZUV4cGFuZGVkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4sXHJcbik6IEpTWC5FbGVtZW50IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGJ1dHRvbiBpZD1cImV4YW1wbGVzQnV0dG9uXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlRXhwYW5kZWQoIWV4cGFuZGVkKX0+XHJcblx0XHRcdDxkaXYgaWQ9XCJjaGV2cm9uQ29udGFpbmVyXCIgY2xhc3NOYW1lPXtcImZsb2F0X2xlZnRcIiArIChleHBhbmRlZCA/IFwiIHVwc2lkZWRvd25cIiA6IFwiXCIpfT5cclxuXHRcdFx0XHQ8cGljdHVyZSBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiIH19PlxyXG5cdFx0XHRcdFx0PHNvdXJjZSB0eXBlPVwiaW1hZ2Uvd2VicFwiIHNyY1NldD17Y2hldnJvbldlYnB9IC8+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17Y2hldnJvblBuZ30gaGVpZ2h0PVwiMTRweFwiIHdpZHRoPVwiMTRweFwiIGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0PC9waWN0dXJlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0Jm5ic3A7RXhhbXBsZXNcclxuXHRcdDwvYnV0dG9uPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlZnVuZ2VFeGFtcGxlcztcclxuXHJcbnR5cGUgRXhhbXBsZXNQcm9wcyA9IENvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcImRpdlwiPiAmIHtcclxuXHRzZXRJbnB1dFRleHRBbmRTdGF0ZTogKHRleHQ6IHN0cmluZykgPT4gdm9pZDtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFByb3BzV2l0aG91dFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2FyZDogUmVhY3QuRkM8Q29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFwiZGl2XCI+PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJfY2FyZFwiPntjaGlsZHJlbn08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBob21lUG5nIGZyb20gXCIuLi9pbWFnZXMvaG9tZS5wbmdcIjtcclxuaW1wb3J0IGhvbWVXZWJwIGZyb20gXCIuLi9pbWFnZXMvaG9tZS53ZWJwXCI7XHJcbmltcG9ydCBjb21wYXNzUG5nIGZyb20gXCIuLi9pbWFnZXMvY29tcGFzcy5wbmdcIjtcclxuaW1wb3J0IGNvbXBhc3NXZWJwIGZyb20gXCIuLi9pbWFnZXMvY29tcGFzcy53ZWJwXCI7XHJcbmltcG9ydCBjaG9jb1BuZyBmcm9tIFwiLi4vaW1hZ2VzL2Nob2NvLnBuZ1wiO1xyXG5pbXBvcnQgY2hvY29XZWJwIGZyb20gXCIuLi9pbWFnZXMvY2hvY28ud2VicFwiO1xyXG5pbXBvcnQgbXVzaHJvb21QbmcgZnJvbSBcIi4uL2ltYWdlcy9tdXNocm9vbS5wbmdcIjtcclxuaW1wb3J0IG11c2hyb29tV2VicCBmcm9tIFwiLi4vaW1hZ2VzL211c2hyb29tLndlYnBcIjtcclxuaW1wb3J0IGhlYXJ0UG5nIGZyb20gXCIuLi9pbWFnZXMvaGVhcnQucG5nXCI7XHJcbmltcG9ydCBoZWFydFdlYnAgZnJvbSBcIi4uL2ltYWdlcy9oZWFydC53ZWJwXCI7XHJcblxyXG5jb25zdCBNZW51OiBSZWFjdC5GQzxNZW51UHJvcHM+ID0gKHsgc3RhcnRFeHBhbmRlZCB9KSA9PiB7XHJcblx0Y29uc3QgW2V4cGFuZGVkLCB0b2dnbGVFeHBhbmRlZF0gPSB1c2VTdGF0ZShzdGFydEV4cGFuZGVkID8/IGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtleHBhbmRlZCA/IFwibWVudV9leHBhbmRlZFwiIDogXCJtZW51X2NvbGxhcHNlZFwifT5cclxuXHRcdFx0e01lbnVCdXR0b24oZXhwYW5kZWQsIHRvZ2dsZUV4cGFuZGVkKX1cclxuXHRcdFx0e2V4cGFuZGVkID8gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWRcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJtZW51X2xpc3QgY2VudGVyZWRcIj5cclxuXHRcdFx0XHRcdFx0e01lbnVJdGVtKFwiL1wiLCBcIkhvbWVcIiwgaG9tZVBuZywgaG9tZVdlYnApfVxyXG5cdFx0XHRcdFx0XHR7TWVudUl0ZW0oXCIvcHJvYmxlbXMuaHRtbFwiLCBcIlByb2JsZW1zXCIsIGNvbXBhc3NQbmcsIGNvbXBhc3NXZWJwKX1cclxuXHRcdFx0XHRcdFx0e01lbnVJdGVtKFwiL2Nob21wLmh0bWxcIiwgXCJDaG9tcFwiLCBjaG9jb1BuZywgY2hvY29XZWJwKX1cclxuXHRcdFx0XHRcdFx0e01lbnVJdGVtKFwiL2JlZnVuZ2UuaHRtbFwiLCBcIkJlZnVuZ2VcIiwgbXVzaHJvb21QbmcsIG11c2hyb29tV2VicCl9XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9taXNjLmh0bWxcIiwgXCJNaXNjZWxsYW5lYVwiLCBoZWFydFBuZywgaGVhcnRXZWJwKX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkgOiBudWxsfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIE1lbnVJdGVtKHJlZmVyZW5jZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHBuZzogYW55LCB3ZWJwOiBhbnkpOiBKU1guRWxlbWVudCB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxsaT5cclxuXHRcdFx0PGEgY2xhc3NOYW1lPVwibWVudV9pdGVtXCIgaHJlZj17cmVmZXJlbmNlfT5cclxuXHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdDxwaWN0dXJlPlxyXG5cdFx0XHRcdFx0XHQ8c291cmNlIHR5cGU9XCJpbWFnZS93ZWJwXCIgc3JjU2V0PXt3ZWJwfSAvPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17cG5nfSBoZWlnaHQ9XCIxNnB4XCIgd2lkdGg9XCIxNnB4XCIgYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdDwvcGljdHVyZT5cclxuXHRcdFx0XHRcdCZuYnNwO1xyXG5cdFx0XHRcdFx0e3RleHR9XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHQ8L2xpPlxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1lbnVCdXR0b24oXHJcblx0ZXhwYW5kZWQ6IGJvb2xlYW4sXHJcblx0dG9nZ2xlRXhwYW5kZWQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PixcclxuKTogSlNYLkVsZW1lbnQge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlRXhwYW5kZWQoIWV4cGFuZGVkKX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudV9idXR0b25faW5uZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uX2xpbmVcIiAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudV9idXR0b25fbGluZVwiIC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51X2J1dHRvbl9saW5lXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG5cclxudHlwZSBNZW51UHJvcHMgPSBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJkaXZcIj4gJlxyXG5cdFBhcnRpYWw8e1xyXG5cdFx0c3RhcnRFeHBhbmRlZDogYm9vbGVhbjtcclxuXHR9PjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
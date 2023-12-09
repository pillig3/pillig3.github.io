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
}`, "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./src/befunge.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"sass:math\";\r\n\r\n$page-margin: 15px;\r\n$border-radius: 10px;\r\n\r\nhtml,\r\nbody {\r\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\",\r\n\t\tsans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n\tmargin: 0;\r\n}\r\n\r\nbody {\r\n\tpadding: 1%;\r\n\tbackground-color: #d3eded;\r\n}\r\n\r\np {\r\n\tmargin-block-start: 1em;\r\n\tmargin-block-end: 1em;\r\n\tmargin-inline-start: 0px;\r\n\tmargin-inline-end: 0px;\r\n}\r\n\r\ndiv.p {\r\n\tmargin-block-start: 1em;\r\n\tmargin-block-end: 1em;\r\n\tmargin-inline-start: 0px;\r\n\tmargin-inline-end: 0px;\r\n}\r\n\r\ndiv.title {\r\n\tfont-size: 32pt;\r\n\ttext-align: center;\r\n\tfont-variant: small-caps;\r\n\tfont-weight: 250;\r\n\tmargin: $page-margin;\r\n\tmargin-top: 0;\r\n\tpadding-top: $page-margin;\r\n\t// Add 1px of padding under the title. Without this, for some reason, Chrome on mobile would squish the topmost Card under the title to the right\r\n\t// (only Chrome, and only on actual mobile device. Desktop Chrome pretending to be a mobile device was fine) \r\n\tpadding-bottom: 1px;\r\n}\r\n\r\n.card {\r\n\tbackground-color: white;\r\n\tmin-height: 20px;\r\n\tborder-radius: $border-radius;\r\n\tmargin: $page-margin;\r\n\tmargin-bottom: 10px;\r\n\toverflow: hidden;\r\n\tfloat: none;\r\n}\r\n\r\n.inner_card {\r\n\twidth: calc(100% - 30px);\r\n\tpadding: 10px 15px;\r\n\toverflow-x: auto;\r\n}\r\n\r\n// KaTeX override to make the font slightly smaller\r\n.katex {\r\n\ttext-rendering: auto;\r\n\tfont: normal 1.1em KaTeX_Main, Times New Roman, serif;\r\n\tline-height: 1.2;\r\n\ttext-indent: 0;\r\n}\r\n\r\n// If the math goes off the screen allow scrolling\r\n.katex-display {\r\n\toverflow-x: auto;\r\n\toverflow-y: hidden;\r\n\t// Need to add some padding so the scrollbar doesn't cover the text\r\n\tpadding-top: 0.5em;\r\n\tpadding-bottom: 0.5em;\r\n\tmargin-top: 0.5em;\r\n\tmargin-bottom: 0.5em;\r\n}\r\n\r\npicture > img {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.centered {\r\n\tdisplay: block;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\ttext-align: center;\r\n}\r\n\r\n.fit_content {\r\n\twidth: fit-content;\r\n}\r\n\r\n.flex {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n/**\r\n * Menu Styling\r\n */\r\n$menu-collapsed-size: 50px;\r\n$menu-inner-side-margin: $menu-collapsed-size * 0.2;\r\n$menu-inner-top-margin: $menu-collapsed-size * 0.1;\r\n$menu-inner-button-height: $menu-collapsed-size - 2 * $menu-inner-top-margin;\r\n\r\n@mixin menu() {\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground-color: #fff;\r\n\tmargin: $page-margin;\r\n\tborder-radius: $border-radius;\r\n\tfloat: left;\r\n\tz-index: 100;\r\n}\r\n\r\n.menu_collapsed {\r\n\t@include menu();\r\n\twidth: $menu-collapsed-size;\r\n\theight: $menu-collapsed-size;\r\n\tcursor: pointer;\r\n}\r\n\r\n.menu_expanded {\r\n\t@include menu();\r\n\twidth: auto;\r\n\theight: auto;\r\n\tmargin-bottom: math.div($page-margin, 2);\r\n\toverflow-x: hidden;\r\n\r\n\t@media only screen and (max-aspect-ratio: 2/3) {\r\n\t\twidth: -webkit-fill-available;\r\n\t\twidth: -moz-available;\r\n\t}\r\n}\r\n\r\n.menu_button {\r\n\t@include menu();\r\n\twidth: $menu-collapsed-size;\r\n\theight: $menu-collapsed-size;\r\n\tmargin: 0;\r\n\tcursor: pointer;\r\n\tfloat: left;\r\n}\r\n\r\n.menu_button_inner {\r\n\tmargin: $menu-inner-side-margin;\r\n\tmargin-top: $menu-inner-top-margin;\r\n\tmargin-bottom: $menu-inner-top-margin;\r\n\twidth: $menu-collapsed-size - 2 * $menu-inner-side-margin;\r\n\tborder-top-color: #fff;\r\n\tborder-top-style: solid;\r\n\tborder-top-width: math.div($menu-inner-button-height, 7);\r\n\theight: math.div($menu-inner-button-height * 6, 7);\r\n}\r\n\r\n.menu_button_line {\r\n\twidth: 100%;\r\n\theight: math.div($menu-inner-button-height, 7);\r\n\tmargin-bottom: math.div($menu-inner-button-height, 7);\r\n\tbackground-color: black;\r\n}\r\n\r\na.menu_item {\r\n\tcolor: black;\r\n\ttext-decoration: none;\r\n\r\n\t&:hover {\r\n\t\tfont-weight: bold;\r\n\t}\r\n}\r\n\r\nul.menu_list {\r\n\tlist-style-type: none;\r\n\tpadding: 0;\r\n\tmargin-bottom: $menu-inner-side-margin;\r\n\ttext-align: center;\r\n\twidth: 8em;\r\n\t@media only screen and (min-aspect-ratio: 2/3) {\r\n\t\tmargin-top: $menu-collapsed-size + math.div($menu-inner-button-height, 7);\r\n\t}\r\n\r\n\t& > li > a > p {\r\n\t\tmargin: 16px 0;\r\n\t}\r\n}\r\n\r\nul.math_list > li {\r\n\tpadding-bottom: 0.5em;\r\n\tlist-style-type: circle;\r\n}\r\n\r\n.inline_code {\r\n\tfont-family: \"Courier New\", monospace;\r\n\tpadding: 1px 1px;\r\n}\r\n\r\ntextarea.codeblock {\r\n\tfont-family: \"Courier New\", monospace;\r\n\twidth: 100%;\r\n\tresize: none;\r\n}\r\n\r\nspan {\r\n\t&.red {\r\n\t\tcolor: red;\r\n\t}\r\n\t&.blue {\r\n\t\tcolor: blue;\r\n\t}\r\n}\r\n\r\n.hidden {\r\n\tvisibility: hidden;\r\n}\r\n\r\n.command_table {\r\n\tborder-collapse: collapse;\r\n\twidth: 100%;\r\n\r\n\tth,\r\n\ttd {\r\n\t\tborder-style: solid;\r\n\t\tborder-width: thin;\r\n\t}\r\n\r\n\tth {\r\n\t\tfont-weight: normal;\r\n\t\tpadding: 10px;\r\n\t\tbackground-color: lightgray;\r\n\t}\r\n\r\n\ttd {\r\n\t\tpadding: 0.5em;\r\n\t}\r\n}\r\n\r\n.subsection {\r\n\tfont-size: 1em;\r\n}\r\n\r\n.nodisp {\r\n\tdisplay: none;\r\n}\r\n\r\n.upsidedown {\r\n\t-webkit-transform: scaleY(-1);\r\n\ttransform: scaleY(-1);\r\n}\r\n\r\n.float_left {\r\n\tfloat: left;\r\n}\r\n\r\ncanvas.full_canvas {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.nopadding {\r\n\tpadding: 0;\r\n}\r\n\r\n.list_no_style {\r\n\tlist-style-type: none;\r\n}\r\n","@import \"./index.scss\";\r\n\r\n$button-padding-vertical: 0.5em;\r\n$button-padding-horizontal: 1em;\r\n\r\nbutton {\r\n\tfont-size: 12pt;\r\n\toutline: none;\r\n\tpadding: $button-padding-vertical $button-padding-horizontal;\r\n\ttext-align: center;\r\n\tborder-radius: 20px;\r\n\tborder: 0;\r\n\r\n\t&:hover {\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t&#run {\r\n\t\tbackground-color: #66e2b3;\r\n\t}\r\n\t&#displayButton {\r\n\t\tbackground-color: #dea3ff;\r\n\t}\r\n\t&#pause {\r\n\t\tbackground-color: #fabdfc;\r\n\t}\r\n\t&#step {\r\n\t\tbackground-color: #ffc268;\r\n\t}\r\n}\r\n\r\ndiv.button_container {\r\n\tpadding: 0.5em;\r\n\tfloat: left;\r\n}\r\n\r\ndiv.options_container {\r\n\tpadding: $button-padding-vertical + 0.5em $button-padding-horizontal;\r\n\tfloat: left;\r\n}\r\n\r\ninput#pauseInterval {\r\n\twidth: 4em;\r\n\toutline: none;\r\n\t// border: none;\r\n\r\n\t&::-webkit-inner-spin-button,\r\n\t&::-webkit-outer-spin-button {\r\n\t\t-webkit-appearance: none;\r\n\t\tmargin: 0;\r\n\t}\r\n}\r\n\r\nspan {\r\n\t&.bordered_char {\r\n\t\tdisplay: inline-block;\r\n\t\toutline: 1px solid black;\r\n\t\toutline-offset: -1px;\r\n\t}\r\n\t&.bordered_char_darkmode {\r\n\t\tdisplay: inline-block;\r\n\t\toutline: 1px solid white;\r\n\t\toutline-offset: -1px;\r\n\t}\r\n\t&.right_aligned {\r\n\t\tfloat: right;\r\n\t\ttext-align: right;\r\n\t}\r\n}\r\n\r\ndiv#befungeCodeWrapper,\r\ndiv#display,\r\ndiv#output {\r\n\twidth: 100%;\r\n}\r\n\r\n@mixin codeFormatting() {\r\n\tfont-size: 12pt;\r\n\tborder: thin solid black;\r\n\toutline: none;\r\n\twidth: -webkit-fill-available;\r\n\twidth: -moz-available;\r\n\twhite-space: pre;\r\n\toverflow: auto;\r\n\tresize: vertical;\r\n\tfont-family: monospace, monospace;\r\n\tfont-kerning: none;\r\n\tmargin-top: 5px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n// Input\r\ntextarea {\r\n\t@include codeFormatting();\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\n// State, stack, and output\r\n.code_output {\r\n\t@include codeFormatting();\r\n\tmargin-left: 0;\r\n\tmargin-right: 0;\r\n\tpadding: 0 0;\r\n\tbackground-color: white;\r\n\t&:hover {\r\n\t\tcursor: default;\r\n\t}\r\n}\r\n\r\n// For wrapping output\r\n.word_wrap {\r\n\twhite-space: pre-wrap; /* CSS3 */\r\n\twhite-space: -moz-pre-wrap; /* Firefox */\r\n\twhite-space: -pre-wrap; /* Opera <7 */\r\n\twhite-space: -o-pre-wrap; /* Opera 7 */\r\n\tword-wrap: break-word; /* IE */\r\n}\r\n\r\n#befungeOutput {\r\n\theight: 400px;\r\n\twidth: 100%;\r\n}\r\n\r\ndiv#display {\r\n\twidth: 100%;\r\n\tpadding: 0;\r\n\r\n\t#befungeState {\r\n\t\theight: 200px;\r\n\t}\r\n\r\n\t#befungeStack {\r\n\t\theight: 60px;\r\n\t\tline-height: 30px;\r\n\t\tborder-top: 0;\r\n\t}\r\n}\r\n\r\ndiv#chevronContainer {\r\n\theight: 18px;\r\n}\r\n\r\nbutton#examplesButton {\r\n\twidth: max-content;\r\n\tcursor: pointer;\r\n\tborder: 1px solid grey;\r\n\tbackground-color: white;\r\n\tpadding: 0.3em 1em;\r\n}\r\n\r\n@mixin examplesSection() {\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tmargin: $page-margin;\r\n\tfloat: left;\r\n\tz-index: 100;\r\n}\r\n\r\n.examples_collapsed {\r\n\t@include examplesSection();\r\n}\r\n\r\n.examples_expanded {\r\n\t@include examplesSection();\r\n\twidth: -webkit-fill-available;\r\n\twidth: -moz-available;\r\n}\r\n\r\n.max_content {\r\n\twidth: max-content;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVmdW5nZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCLDhCQUE4QjtBQUM5QiwwQkFBMEI7QUFDMUIsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlIQUFpSCxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sS0FBSyxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLFlBQVksT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxhQUFhLFdBQVcsVUFBVSxhQUFhLGNBQWMsWUFBWSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksY0FBYyxlQUFlLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsYUFBYSxhQUFhLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sUUFBUSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFB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ZnVuZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NoZXZyb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY2hldnJvbi53ZWJwIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY2hvY28ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY2hvY28ud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NvbXBhc3MucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY29tcGFzcy53ZWJwIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGVhcnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGVhcnQud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hvbWUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaG9tZS53ZWJwIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbXVzaHJvb20ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbXVzaHJvb20ud2VicCIsIndlYnBhY2s6Ly8vLi9zcmMvYmVmdW5nZS5zY3NzPzcyYjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlZnVuZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0JlZnVuZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0JlZnVuZ2VFeGFtcGxlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2VkZWQ7XG59XG5cbnAge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbmRpdi5wIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG5kaXYudGl0bGUge1xuICBmb250LXNpemU6IDMycHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBmb250LXdlaWdodDogMjUwO1xuICBtYXJnaW46IDE1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsb2F0OiBub25lO1xufVxuXG4uaW5uZXJfY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4ua2F0ZXgge1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgZm9udDogbm9ybWFsIDEuMWVtIEthVGVYX01haW4sIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtaW5kZW50OiAwO1xufVxuXG4ua2F0ZXgtZGlzcGxheSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxucGljdHVyZSA+IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNlbnRlcmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpdF9jb250ZW50IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLyoqXG4gKiBNZW51IFN0eWxpbmdcbiAqL1xuLm1lbnVfY29sbGFwc2VkIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnVfZXhwYW5kZWQge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNy41cHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDIvMykge1xuICAubWVudV9leHBhbmRlZCB7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlO1xuICB9XG59XG5cbi5tZW51X2J1dHRvbiB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tZW51X2J1dHRvbl9pbm5lciB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC13aWR0aDogNS43MTQyODU3MTQzcHg7XG4gIGhlaWdodDogMzQuMjg1NzE0Mjg1N3B4O1xufVxuXG4ubWVudV9idXR0b25fbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUuNzE0Mjg1NzE0M3B4O1xuICBtYXJnaW4tYm90dG9tOiA1LjcxNDI4NTcxNDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmEubWVudV9pdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hLm1lbnVfaXRlbTpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG51bC5tZW51X2xpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDhlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDIvMykge1xuICB1bC5tZW51X2xpc3Qge1xuICAgIG1hcmdpbi10b3A6IDU1LjcxNDI4NTcxNDNweDtcbiAgfVxufVxudWwubWVudV9saXN0ID4gbGkgPiBhID4gcCB7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG51bC5tYXRoX2xpc3QgPiBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG59XG5cbi5pbmxpbmVfY29kZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgcGFkZGluZzogMXB4IDFweDtcbn1cblxudGV4dGFyZWEuY29kZWJsb2NrIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICB3aWR0aDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xufVxuXG5zcGFuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5zcGFuLmJsdWUge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNvbW1hbmRfdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb21tYW5kX3RhYmxlIHRoLFxuLmNvbW1hbmRfdGFibGUgdGQge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG59XG4uY29tbWFuZF90YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5jb21tYW5kX3RhYmxlIHRkIHtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5zdWJzZWN0aW9uIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5ub2Rpc3Age1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udXBzaWRlZG93biB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG59XG5cbi5mbG9hdF9sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmNhbnZhcy5mdWxsX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ub3BhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGlzdF9ub19zdHlsZSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAwO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYnV0dG9uI3J1biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NmUyYjM7XG59XG5idXR0b24jZGlzcGxheUJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWEzZmY7XG59XG5idXR0b24jcGF1c2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFiZGZjO1xufVxuYnV0dG9uI3N0ZXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMjY4O1xufVxuXG5kaXYuYnV0dG9uX2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBmbG9hdDogbGVmdDtcbn1cblxuZGl2Lm9wdGlvbnNfY29udGFpbmVyIHtcbiAgcGFkZGluZzogMWVtIDFlbTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlucHV0I3BhdXNlSW50ZXJ2YWwge1xuICB3aWR0aDogNGVtO1xuICBvdXRsaW5lOiBub25lO1xufVxuaW5wdXQjcGF1c2VJbnRlcnZhbDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgaW5wdXQjcGF1c2VJbnRlcnZhbDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5zcGFuLmJvcmRlcmVkX2NoYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcbiAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XG59XG5zcGFuLmJvcmRlcmVkX2NoYXJfZGFya21vZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcbiAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XG59XG5zcGFuLnJpZ2h0X2FsaWduZWQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5kaXYjYmVmdW5nZUNvZGVXcmFwcGVyLFxuZGl2I2Rpc3BsYXksXG5kaXYjb3V0cHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBib3JkZXI6IHRoaW4gc29saWQgYmxhY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB3aWR0aDogLW1vei1hdmFpbGFibGU7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIGZvbnQta2VybmluZzogbm9uZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5jb2RlX291dHB1dCB7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgYm9yZGVyOiB0aGluIHNvbGlkIGJsYWNrO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgd2lkdGg6IC1tb3otYXZhaWxhYmxlO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LWtlcm5pbmc6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nOiAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNvZGVfb3V0cHV0OmhvdmVyIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ud29yZF93cmFwIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyAvKiBDU1MzICovXG4gIHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwOyAvKiBGaXJlZm94ICovXG4gIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7IC8qIE9wZXJhIDw3ICovXG4gIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDsgLyogT3BlcmEgNyAqL1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC8qIElFICovXG59XG5cbiNiZWZ1bmdlT3V0cHV0IHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdiNkaXNwbGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5kaXYjZGlzcGxheSAjYmVmdW5nZVN0YXRlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbmRpdiNkaXNwbGF5ICNiZWZ1bmdlU3RhY2sge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItdG9wOiAwO1xufVxuXG5kaXYjY2hldnJvbkNvbnRhaW5lciB7XG4gIGhlaWdodDogMThweDtcbn1cblxuYnV0dG9uI2V4YW1wbGVzQnV0dG9uIHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjNlbSAxZW07XG59XG5cbi5leGFtcGxlc19jb2xsYXBzZWQge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogMTVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmV4YW1wbGVzX2V4cGFuZGVkIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW46IDE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICB3aWR0aDogLW1vei1hdmFpbGFibGU7XG59XG5cbi5tYXhfY29udGVudCB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYmVmdW5nZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBOztFQUVDLGtNQUFBO0VBRUEsU0FBQTtBQ0xEOztBRFFBO0VBQ0MsV0FBQTtFQUNBLHlCQUFBO0FDTEQ7O0FEUUE7RUFDQyx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQ0xEOztBRFFBO0VBQ0MsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUNMRDs7QURRQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQWxDYTtFQW1DYixhQUFBO0VBQ0EsaUJBcENhO0VBdUNiLG1CQUFBO0FDUEQ7O0FEVUE7RUFDQyx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBNUNlO0VBNkNmLFlBOUNhO0VBK0NiLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDUEQ7O0FEVUE7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNQRDs7QURXQTtFQUNDLG9CQUFBO0VBQ0EscURBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNSRDs7QURZQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1ZEOztBRGFBO0VBQ0MsZUFBQTtBQ1ZEOztBRGFBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1ZEOztBRGFBO0VBQ0Msa0JBQUE7QUNWRDs7QURhQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0FDVkQ7O0FEYUE7O0VBQUE7QUFrQkE7RUFUQyxPQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUE3R2E7RUE4R2IsbUJBN0dlO0VBOEdmLFdBQUE7RUFDQSxZQUFBO0VBS0EsV0FqQnFCO0VBa0JyQixZQWxCcUI7RUFtQnJCLGVBQUE7QUNuQkQ7O0FEc0JBO0VBaEJDLE9BQUE7RUFD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QSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFhQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQTBQRDtBQXpQQztFQUNDLGVBQUE7QUEyUEY7O0FBdFBBO0VBQ0MscUJBQUEsRUFBQSxTQUFBO0VBQ0EsMEJBQUEsRUFBQSxZQUFBO0VBQ0Esc0JBQUEsRUFBQSxhQUFBO0VBQ0Esd0JBQUEsRUFBQSxZQUFBO0VBQ0EscUJBQUEsRUFBQSxPQUFBO0FBeVBEOztBQXRQQTtFQUNDLGFBQUE7RUFDQSxXQUFBO0FBeVBEOztBQXRQQTtFQUNDLFdBQUE7RUFDQSxVQUFBO0FBeVBEO0FBdlBDO0VBQ0MsYUFBQTtBQXlQRjtBQXRQQztFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUF3UEY7O0FBcFBBO0VBQ0MsWUFBQTtBQXVQRDs7QUFwUEE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF1UEQ7O0FBNU9BO0VBUEMsT0FBQTtFQUNBLE1BQUE7RUFDQSxZRHhKYTtFQ3lKYixXQUFBO0VBQ0EsWUFBQTtBQXVQRDs7QUFoUEE7RUFYQyxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlEeEphO0VDeUpiLFdBQUE7RUFDQSxZQUFBO0VBU0EsNkJBQUE7RUFDQSxxQkFBQTtBQXVQRDs7QUFwUEE7RUFDQyxrQkFBQTtBQXVQRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbiRwYWdlLW1hcmdpbjogMTVweDtcXHJcXG4kYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLFxcclxcblxcdFxcdHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRwYWRkaW5nOiAxJTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDNlZGVkO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG5cXHRtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXHJcXG5cXHRtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxyXFxuXFx0bWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcclxcblxcdG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi5wIHtcXHJcXG5cXHRtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcXHJcXG5cXHRtYXJnaW4tYmxvY2stZW5kOiAxZW07XFxyXFxuXFx0bWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xcclxcblxcdG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XFxyXFxufVxcclxcblxcclxcbmRpdi50aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAzMnB0O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDI1MDtcXHJcXG5cXHRtYXJnaW46ICRwYWdlLW1hcmdpbjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAwO1xcclxcblxcdHBhZGRpbmctdG9wOiAkcGFnZS1tYXJnaW47XFxyXFxuXFx0Ly8gQWRkIDFweCBvZiBwYWRkaW5nIHVuZGVyIHRoZSB0aXRsZS4gV2l0aG91dCB0aGlzLCBmb3Igc29tZSByZWFzb24sIENocm9tZSBvbiBtb2JpbGUgd291bGQgc3F1aXNoIHRoZSB0b3Btb3N0IENhcmQgdW5kZXIgdGhlIHRpdGxlIHRvIHRoZSByaWdodFxcclxcblxcdC8vIChvbmx5IENocm9tZSwgYW5kIG9ubHkgb24gYWN0dWFsIG1vYmlsZSBkZXZpY2UuIERlc2t0b3AgQ2hyb21lIHByZXRlbmRpbmcgdG8gYmUgYSBtb2JpbGUgZGV2aWNlIHdhcyBmaW5lKSBcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0bWluLWhlaWdodDogMjBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG5cXHRtYXJnaW46ICRwYWdlLW1hcmdpbjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0ZmxvYXQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbm5lcl9jYXJkIHtcXHJcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XFxyXFxuXFx0cGFkZGluZzogMTBweCAxNXB4O1xcclxcblxcdG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8vIEthVGVYIG92ZXJyaWRlIHRvIG1ha2UgdGhlIGZvbnQgc2xpZ2h0bHkgc21hbGxlclxcclxcbi5rYXRleCB7XFxyXFxuXFx0dGV4dC1yZW5kZXJpbmc6IGF1dG87XFxyXFxuXFx0Zm9udDogbm9ybWFsIDEuMWVtIEthVGVYX01haW4sIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMjtcXHJcXG5cXHR0ZXh0LWluZGVudDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gSWYgdGhlIG1hdGggZ29lcyBvZmYgdGhlIHNjcmVlbiBhbGxvdyBzY3JvbGxpbmdcXHJcXG4ua2F0ZXgtZGlzcGxheSB7XFxyXFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXHJcXG5cXHRvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuXFx0Ly8gTmVlZCB0byBhZGQgc29tZSBwYWRkaW5nIHNvIHRoZSBzY3JvbGxiYXIgZG9lc24ndCBjb3ZlciB0aGUgdGV4dFxcclxcblxcdHBhZGRpbmctdG9wOiAwLjVlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxyXFxuXFx0bWFyZ2luLXRvcDogMC41ZW07XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxyXFxufVxcclxcblxcclxcbnBpY3R1cmUgPiBpbWcge1xcclxcblxcdG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlcmVkIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZml0X2NvbnRlbnQge1xcclxcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBNZW51IFN0eWxpbmdcXHJcXG4gKi9cXHJcXG4kbWVudS1jb2xsYXBzZWQtc2l6ZTogNTBweDtcXHJcXG4kbWVudS1pbm5lci1zaWRlLW1hcmdpbjogJG1lbnUtY29sbGFwc2VkLXNpemUgKiAwLjI7XFxyXFxuJG1lbnUtaW5uZXItdG9wLW1hcmdpbjogJG1lbnUtY29sbGFwc2VkLXNpemUgKiAwLjE7XFxyXFxuJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodDogJG1lbnUtY29sbGFwc2VkLXNpemUgLSAyICogJG1lbnUtaW5uZXItdG9wLW1hcmdpbjtcXHJcXG5cXHJcXG5AbWl4aW4gbWVudSgpIHtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdG1hcmdpbjogJHBhZ2UtbWFyZ2luO1xcclxcblxcdGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcblxcdHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfY29sbGFwc2VkIHtcXHJcXG5cXHRAaW5jbHVkZSBtZW51KCk7XFxyXFxuXFx0d2lkdGg6ICRtZW51LWNvbGxhcHNlZC1zaXplO1xcclxcblxcdGhlaWdodDogJG1lbnUtY29sbGFwc2VkLXNpemU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9leHBhbmRlZCB7XFxyXFxuXFx0QGluY2x1ZGUgbWVudSgpO1xcclxcblxcdHdpZHRoOiBhdXRvO1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiBtYXRoLmRpdigkcGFnZS1tYXJnaW4sIDIpO1xcclxcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG5cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtYXNwZWN0LXJhdGlvOiAyLzMpIHtcXHJcXG5cXHRcXHR3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXHJcXG5cXHRcXHR3aWR0aDogLW1vei1hdmFpbGFibGU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9idXR0b24ge1xcclxcblxcdEBpbmNsdWRlIG1lbnUoKTtcXHJcXG5cXHR3aWR0aDogJG1lbnUtY29sbGFwc2VkLXNpemU7XFxyXFxuXFx0aGVpZ2h0OiAkbWVudS1jb2xsYXBzZWQtc2l6ZTtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9idXR0b25faW5uZXIge1xcclxcblxcdG1hcmdpbjogJG1lbnUtaW5uZXItc2lkZS1tYXJnaW47XFxyXFxuXFx0bWFyZ2luLXRvcDogJG1lbnUtaW5uZXItdG9wLW1hcmdpbjtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAkbWVudS1pbm5lci10b3AtbWFyZ2luO1xcclxcblxcdHdpZHRoOiAkbWVudS1jb2xsYXBzZWQtc2l6ZSAtIDIgKiAkbWVudS1pbm5lci1zaWRlLW1hcmdpbjtcXHJcXG5cXHRib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xcclxcblxcdGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xcclxcblxcdGJvcmRlci10b3Atd2lkdGg6IG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQsIDcpO1xcclxcblxcdGhlaWdodDogbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCAqIDYsIDcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9idXR0b25fbGluZSB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0LCA3KTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0LCA3KTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYS5tZW51X2l0ZW0ge1xcclxcblxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxuXFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG51bC5tZW51X2xpc3Qge1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbi1ib3R0b206ICRtZW51LWlubmVyLXNpZGUtbWFyZ2luO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogOGVtO1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDIvMykge1xcclxcblxcdFxcdG1hcmdpbi10b3A6ICRtZW51LWNvbGxhcHNlZC1zaXplICsgbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCwgNyk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCYgPiBsaSA+IGEgPiBwIHtcXHJcXG5cXHRcXHRtYXJnaW46IDE2cHggMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbnVsLm1hdGhfbGlzdCA+IGxpIHtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxyXFxufVxcclxcblxcclxcbi5pbmxpbmVfY29kZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXHJcXG5cXHRwYWRkaW5nOiAxcHggMXB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYS5jb2RlYmxvY2sge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0cmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG5cXHQmLnJlZCB7XFxyXFxuXFx0XFx0Y29sb3I6IHJlZDtcXHJcXG5cXHR9XFxyXFxuXFx0Ji5ibHVlIHtcXHJcXG5cXHRcXHRjb2xvcjogYmx1ZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1hbmRfdGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuXFx0dGgsXFxyXFxuXFx0dGQge1xcclxcblxcdFxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuXFx0XFx0Ym9yZGVyLXdpZHRoOiB0aGluO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHR0aCB7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0dGQge1xcclxcblxcdFxcdHBhZGRpbmc6IDAuNWVtO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLnN1YnNlY3Rpb24ge1xcclxcblxcdGZvbnQtc2l6ZTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9kaXNwIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udXBzaWRlZG93biB7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgtMSk7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxvYXRfbGVmdCB7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbmNhbnZhcy5mdWxsX2NhbnZhcyB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9wYWRkaW5nIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdF9ub19zdHlsZSB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4vaW5kZXguc2Nzc1xcXCI7XFxyXFxuXFxyXFxuJGJ1dHRvbi1wYWRkaW5nLXZlcnRpY2FsOiAwLjVlbTtcXHJcXG4kYnV0dG9uLXBhZGRpbmctaG9yaXpvbnRhbDogMWVtO1xcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB0O1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzogJGJ1dHRvbi1wYWRkaW5nLXZlcnRpY2FsICRidXR0b24tcGFkZGluZy1ob3Jpem9udGFsO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHJcXG5cXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCYjcnVuIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjZlMmIzO1xcclxcblxcdH1cXHJcXG5cXHQmI2Rpc3BsYXlCdXR0b24ge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNkZWEzZmY7XFxyXFxuXFx0fVxcclxcblxcdCYjcGF1c2Uge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmYWJkZmM7XFxyXFxuXFx0fVxcclxcblxcdCYjc3RlcCB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYzI2ODtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbmRpdi5idXR0b25fY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVlbTtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2Lm9wdGlvbnNfY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAkYnV0dG9uLXBhZGRpbmctdmVydGljYWwgKyAwLjVlbSAkYnV0dG9uLXBhZGRpbmctaG9yaXpvbnRhbDtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQjcGF1c2VJbnRlcnZhbCB7XFxyXFxuXFx0d2lkdGg6IDRlbTtcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdC8vIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG5cXHQmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcblxcdCY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcblxcdFxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG5cXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG5cXHQmLmJvcmRlcmVkX2NoYXIge1xcclxcblxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHRcXHRvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0XFx0b3V0bGluZS1vZmZzZXQ6IC0xcHg7XFxyXFxuXFx0fVxcclxcblxcdCYuYm9yZGVyZWRfY2hhcl9kYXJrbW9kZSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdFxcdG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG5cXHRcXHRvdXRsaW5lLW9mZnNldDogLTFweDtcXHJcXG5cXHR9XFxyXFxuXFx0Ji5yaWdodF9hbGlnbmVkIHtcXHJcXG5cXHRcXHRmbG9hdDogcmlnaHQ7XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5kaXYjYmVmdW5nZUNvZGVXcmFwcGVyLFxcclxcbmRpdiNkaXNwbGF5LFxcclxcbmRpdiNvdXRwdXQge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gY29kZUZvcm1hdHRpbmcoKSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB0O1xcclxcblxcdGJvcmRlcjogdGhpbiBzb2xpZCBibGFjaztcXHJcXG5cXHRvdXRsaW5lOiBub25lO1xcclxcblxcdHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcclxcblxcdHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcXHJcXG5cXHR3aGl0ZS1zcGFjZTogcHJlO1xcclxcblxcdG92ZXJmbG93OiBhdXRvO1xcclxcblxcdHJlc2l6ZTogdmVydGljYWw7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcblxcdGZvbnQta2VybmluZzogbm9uZTtcXHJcXG5cXHRtYXJnaW4tdG9wOiA1cHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBJbnB1dFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRAaW5jbHVkZSBjb2RlRm9ybWF0dGluZygpO1xcclxcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLy8gU3RhdGUsIHN0YWNrLCBhbmQgb3V0cHV0XFxyXFxuLmNvZGVfb3V0cHV0IHtcXHJcXG5cXHRAaW5jbHVkZSBjb2RlRm9ybWF0dGluZygpO1xcclxcblxcdG1hcmdpbi1sZWZ0OiAwO1xcclxcblxcdG1hcmdpbi1yaWdodDogMDtcXHJcXG5cXHRwYWRkaW5nOiAwIDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0Y3Vyc29yOiBkZWZhdWx0O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gRm9yIHdyYXBwaW5nIG91dHB1dFxcclxcbi53b3JkX3dyYXAge1xcclxcblxcdHdoaXRlLXNwYWNlOiBwcmUtd3JhcDsgLyogQ1NTMyAqL1xcclxcblxcdHdoaXRlLXNwYWNlOiAtbW96LXByZS13cmFwOyAvKiBGaXJlZm94ICovXFxyXFxuXFx0d2hpdGUtc3BhY2U6IC1wcmUtd3JhcDsgLyogT3BlcmEgPDcgKi9cXHJcXG5cXHR3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7IC8qIE9wZXJhIDcgKi9cXHJcXG5cXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC8qIElFICovXFxyXFxufVxcclxcblxcclxcbiNiZWZ1bmdlT3V0cHV0IHtcXHJcXG5cXHRoZWlnaHQ6IDQwMHB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYjZGlzcGxheSB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHJcXG5cXHQjYmVmdW5nZVN0YXRlIHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDIwMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQjYmVmdW5nZVN0YWNrIHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDYwcHg7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuXFx0XFx0Ym9yZGVyLXRvcDogMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbmRpdiNjaGV2cm9uQ29udGFpbmVyIHtcXHJcXG5cXHRoZWlnaHQ6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiNleGFtcGxlc0J1dHRvbiB7XFxyXFxuXFx0d2lkdGg6IG1heC1jb250ZW50O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdHBhZGRpbmc6IDAuM2VtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGV4YW1wbGVzU2VjdGlvbigpIHtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRtYXJnaW46ICRwYWdlLW1hcmdpbjtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG5cXHR6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5leGFtcGxlc19jb2xsYXBzZWQge1xcclxcblxcdEBpbmNsdWRlIGV4YW1wbGVzU2VjdGlvbigpO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhhbXBsZXNfZXhwYW5kZWQge1xcclxcblxcdEBpbmNsdWRlIGV4YW1wbGVzU2VjdGlvbigpO1xcclxcblxcdHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcclxcblxcdHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1heF9jb250ZW50IHtcXHJcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvY2hldnJvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvY2hldnJvbi53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2Nob2NvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9jaG9jby53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2NvbXBhc3MucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2NvbXBhc3Mud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9oZWFydC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvaGVhcnQud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9ob21lLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9ob21lLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvbXVzaHJvb20ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL211c2hyb29tLndlYnBcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMl0hLi9iZWZ1bmdlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzJdIS4vYmVmdW5nZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEJlZnVuZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9CZWZ1bmdlXCI7XHJcbmltcG9ydCBcIi4vYmVmdW5nZS5zY3NzXCI7XHJcblxyXG5yZW5kZXIoPEJlZnVuZ2UgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKSBhcyBIVE1MRWxlbWVudCk7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJlZnVuZ2VFeGFtcGxlcyBmcm9tIFwiLi9CZWZ1bmdlRXhhbXBsZXNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XHJcblxyXG5jb25zdCBaRVJPID0gQmlnSW50KDApO1xyXG5jb25zdCBPTkUgPSBCaWdJbnQoMSk7XHJcbi8vIElmIHJ1bm5pbmcgd2l0aG91dCBzaG93aW5nIHN0YXRlLCB0aGlzIGlzIHRoZSBudW1iZXIgb2Ygc3RlcHMgd2Ugc2hvdWxkIHJ1biBiZWZvcmUgc2V0dGluZyBhIHRpbWVvdXRcclxuY29uc3QgU1RFUFNfQlRXTl9DQUxMQkFDS1MgPSAxNTAwO1xyXG4vLyBOdW1iZXIgb2YgdGltZXMgd2Ugc2hvdWxkIHRyeSB0byBtb3ZlIGEgcG9pbnRlciBvdmVyIHdoaXRlc3BhY2UgYmVmb3JlIHNldHRpbmcgYSB0aW1lb3V0XHJcbmNvbnN0IFNURVBTX09WRVJfV0hJVEVTUEFDRSA9IDEwMDAwO1xyXG5cclxudmFyIEhBTFRfRVhFQ1VUSU9OID0gZmFsc2U7XHJcbnZhciBQQVVTRV9FWEVDVVRJT04gPSBmYWxzZTtcclxudmFyIERBUktNT0RFID0gZmFsc2U7XHJcbnZhciBQQVVTRV9TVEFURTogUGF1c2VTdGF0ZSB8IG51bGwgPSBudWxsO1xyXG5cclxudHlwZSBQb2ludCA9IHtcclxuXHR4OiBudW1iZXI7XHJcblx0eTogbnVtYmVyO1xyXG59O1xyXG5cclxuY2xhc3MgUG9pbnRlciB7XHJcblx0cHVibGljIGlwOiBQb2ludDtcclxuXHRwdWJsaWMgZGVsdGE6IFBvaW50O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihpcDogUG9pbnQsIGRlbHRhOiBQb2ludCkge1xyXG5cdFx0dGhpcy5pcCA9IGlwO1xyXG5cdFx0dGhpcy5kZWx0YSA9IGRlbHRhO1xyXG5cdH1cclxufVxyXG5cclxudHlwZSBQb2ludGVySW5kZXggPSB7XHJcblx0W3g6IG51bWJlcl06IHtcclxuXHRcdFt5OiBudW1iZXJdOiBib29sZWFuO1xyXG5cdH07XHJcbn07XHJcblxyXG4vKipcclxuICogTWFpbiBCZWZ1bmdlIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyBCZWZ1bmdlIGNvbXBvbmVudFxyXG4gKi9cclxuY29uc3QgQmVmdW5nZTogUmVhY3QuRkMgPSBmdW5jdGlvbiAoKTogSlNYLkVsZW1lbnQge1xyXG5cdGNvbnN0IFtzdGF0ZVNob3duLCB0b2dnbGVTdGF0ZVNob3duXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cdGNvbnN0IFtwYXVzZUludGVydmFsLCBzZXRQYXVzZUludGVydmFsXSA9IHVzZVN0YXRlKFwiMjBcIik7XHJcblx0Y29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFt3b3JkV3JhcCwgdG9nZ2xlV29yZFdyYXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtjb2RlQXJyYXksIHNldENvZGVBcnJheV0gPSB1c2VTdGF0ZTwoc3RyaW5nIHwgYmlnaW50KVtdW10+KFtdKTtcclxuXHRjb25zdCBbc3RhdGVDb250ZW50LCBzZXRTdGF0ZUNvbnRlbnRdID0gdXNlU3RhdGU8SlNYLkVsZW1lbnQ+KDxSZWFjdC5GcmFnbWVudCAvPik7XHJcblx0Y29uc3QgW3N0YWNrQ29udGVudCwgc2V0U3RhY2tDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cdGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3BhdXNlZCwgc2V0UGF1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgYmVmdW5nZU91dHB1dCA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG5cdGNvbnN0IHNldElucHV0VGV4dEFuZFN0YXRlID0gZnVuY3Rpb24gKHRleHQ6IHN0cmluZykge1xyXG5cdFx0Y29uc3QgYXJ5ID0gdGV4dC5zcGxpdChcIlxcblwiKS5tYXAoKGxpbmUpID0+IGxpbmUuc3BsaXQoXCJcIikpO1xyXG5cdFx0c2V0SW5wdXRUZXh0KHRleHQpO1xyXG5cdFx0c2V0Q29kZUFycmF5KGFyeSk7XHJcblx0XHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0XHRzZXRTdGF0ZUNvbnRlbnQoYnVpbGRTdGF0ZUNvbnRlbnQoYXJ5LCB7fSkpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxNZW51IC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5CZWZ1bmdlIDkzJm5kYXNoOyZpbmZpbjs8L2Rpdj5cclxuXHRcdFx0PENhcmQ+XHJcblx0XHRcdFx0QW4gaW50ZXJwcmV0ZXIgZm9yIDxhIGhyZWY9XCIvYmVmdW5nZS1pbmZvLmh0bWxcIj5CZWZ1bmdlIDkzJm5kYXNoOyZpbmZpbjs8L2E+LiA8YnIgLz5cclxuXHRcdFx0XHQ8QmVmdW5nZUV4YW1wbGVzIHNldElucHV0VGV4dEFuZFN0YXRlPXtzZXRJbnB1dFRleHRBbmRTdGF0ZX0gLz5cclxuXHRcdFx0PC9DYXJkPlxyXG5cdFx0XHQ8Q2FyZD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkIGZpdF9jb250ZW50IGZsZXhcIj5cclxuXHRcdFx0XHRcdHtidWlsZEJ1dHRvbihcInJ1blwiLCBpc1J1bm5pbmcgPyBcIlN0b3BcIiA6IFwiUnVuXCIsICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGlzUnVubmluZykge1xyXG5cdFx0XHRcdFx0XHRcdHNldElzUnVubmluZyhmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0c2V0UGF1c2VkKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRIQUxUX0VYRUNVVElPTiA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0UEFVU0VfRVhFQ1VUSU9OID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHN0YXRlU2hvd24pIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFN0YXRlQ29udGVudChidWlsZFN0YXRlQ29udGVudChjb2RlQXJyYXksIHt9KSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRTdGFja0NvbnRlbnQoXCJcIik7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHNldElzUnVubmluZyh0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRQYXVzZWQoZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdHJ1bkJlZnVuZ2UoXHJcblx0XHRcdFx0XHRcdFx0XHRpbnB1dFRleHQsXHJcblx0XHRcdFx0XHRcdFx0XHRzdGF0ZVNob3duLFxyXG5cdFx0XHRcdFx0XHRcdFx0cGFyc2VJbnQocGF1c2VJbnRlcnZhbCksXHJcblx0XHRcdFx0XHRcdFx0XHRzZXRDb2RlQXJyYXksXHJcblx0XHRcdFx0XHRcdFx0XHRiZWZ1bmdlT3V0cHV0LFxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0U3RhdGVDb250ZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0U3RhY2tDb250ZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0SXNSdW5uaW5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHR7YnVpbGRCdXR0b24oXCJkaXNwbGF5QnV0dG9uXCIsIHN0YXRlU2hvd24gPyBcIkhpZGUgU3RhdGVcIiA6IFwiU2hvdyBTdGF0ZVwiLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghaXNSdW5uaW5nKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZVNob3duKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRDb2xvcnMoXHJcblx0XHRcdFx0XHRcdFx0XHRcdERBUktNT0RFID8gXCIjMzQzNDM0XCIgOiBcIndoaXRlXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdERBUktNT0RFID8gXCJsaWdodGdyYXlcIiA6IFwiYmxhY2tcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRTdGF0ZUNvbnRlbnQoYnVpbGRTdGF0ZUNvbnRlbnQoY29kZUFycmF5LCB7fSkpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0b2dnbGVTdGF0ZVNob3duKCFzdGF0ZVNob3duKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHR7YnVpbGRCdXR0b24oXHJcblx0XHRcdFx0XHRcdFwic3RlcFwiLFxyXG5cdFx0XHRcdFx0XHRcIlN0ZXBcIixcclxuXHRcdFx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICghaXNSdW5uaW5nKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBGaXJzdCBzdGVwXHJcblx0XHRcdFx0XHRcdFx0XHRzZXRJc1J1bm5pbmcodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRQYXVzZWQodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRydW5CZWZ1bmdlKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFRleHQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlU2hvd24sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlSW50KHBhdXNlSW50ZXJ2YWwpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRDb2RlQXJyYXksXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJlZnVuZ2VPdXRwdXQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFN0YXRlQ29udGVudCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0U3RhY2tDb250ZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRJc1J1bm5pbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBTdWJzZXF1ZW50IHN0ZXAgLSB3ZSBzaG91bGQgaGF2ZSBQQVVTRV9TVEFURSBwb3B1bGF0ZWRcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChQQVVTRV9TVEFURSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRQYXVzZWQodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFBBVVNFX0VYRUNVVElPTiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGVwKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBBVVNFX1NUQVRFLmNvZGVBcnJheSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQQVVTRV9TVEFURS5wb2ludGVycyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQQVVTRV9TVEFURS5wb2ludGVySW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UEFVU0VfU1RBVEUuc3RhY2tzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBBVVNFX1NUQVRFLnN0YXRlU2hvd24sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UEFVU0VfU1RBVEUuc3RhdGVXaWR0aCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQQVVTRV9TVEFURS5zdGF0ZUhlaWdodCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJzZUludChwYXVzZUludGVydmFsKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQQVVTRV9TVEFURS5wb2ludGVyc1N0cmluZ21vZGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UEFVU0VfU1RBVEUub3V0cHV0Q29udGVudCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQQVVTRV9TVEFURS5vdXRwdXRFbGVtZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFBBVVNFX1NUQVRFLnNldFN0YXRlQ29udGVudCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRQQVVTRV9TVEFURS5zZXRTdGFja0NvbnRlbnQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UEFVU0VfU1RBVEUuc2V0SXNSdW5uaW5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRzdGF0ZVNob3duLFxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHtidWlsZEJ1dHRvbihcclxuXHRcdFx0XHRcdFx0XCJwYXVzZVwiLFxyXG5cdFx0XHRcdFx0XHRwYXVzZWQgPyBcIlJlc3VtZVwiIDogXCJQYXVzZVwiLFxyXG5cdFx0XHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFpc1J1bm5pbmcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0c2V0UGF1c2VkKCFwYXVzZWQpO1xyXG5cdFx0XHRcdFx0XHRcdG9uUGF1c2VDbGlja2VkKHBhcnNlSW50KHBhdXNlSW50ZXJ2YWwpKTtcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0c3RhdGVTaG93bixcclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17XCJvcHRpb25zX2NvbnRhaW5lclwiICsgKCFzdGF0ZVNob3duID8gXCIgaGlkZGVuXCIgOiBcIlwiKX0+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGlkPVwicGF1c2VPcHRpb25zXCI+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXVzZUludGVydmFsXCI+V2FpdDo8L2xhYmVsPiZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwYXVzZUludGVydmFsXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3BhdXNlSW50ZXJ2YWx9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldFBhdXNlSW50ZXJ2YWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQmbmJzcDttc1xyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7LyogRW5kIGJ1dHRvbiBzZWN0aW9uIC8gQmVnaW4gaW5wdXQgYW5kIG91dHB1dCBhcmVhcyAqL31cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiYmVmdW5nZUNvZGVcIj5JbnB1dDwvbGFiZWw+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0X2FsaWduZWRcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZG1cIj5EYXJrbW9kZTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0aWQ9XCJkbVwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9e0RBUktNT0RFfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlRGFya21vZGUoZXZlbnQudGFyZ2V0LmNoZWNrZWQsIHN0YXRlU2hvd24sIHNldFN0YXRlQ29udGVudCwgY29kZUFycmF5KTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJiZWZ1bmdlQ29kZVdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRyZWFkT25seT17aXNSdW5uaW5nfVxyXG5cdFx0XHRcdFx0XHRpZD1cImJlZnVuZ2VDb2RlXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXcml0ZSBzb21lIGNvZGUgaGVyZSwgb3IgY2hvb3NlIGFuIGV4YW1wbGUgYWJvdmUhXCJcclxuXHRcdFx0XHRcdFx0cm93cz17MTB9XHJcblx0XHRcdFx0XHRcdGF1dG9Gb2N1cz17dHJ1ZX1cclxuXHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuXHRcdFx0XHRcdFx0YXV0b0NvcnJlY3Q9XCJvZmZcIlxyXG5cdFx0XHRcdFx0XHRhdXRvQ2FwaXRhbGl6ZT1cIm9mZlwiXHJcblx0XHRcdFx0XHRcdHNwZWxsQ2hlY2s9e2ZhbHNlfVxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17aW5wdXRUZXh0fVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRzZXRJbnB1dFRleHRBbmRTdGF0ZSh0ZXh0KTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJkaXNwbGF5XCIgY2xhc3NOYW1lPXtzdGF0ZVNob3duID8gXCJcIiA6IFwibm9kaXNwXCJ9PlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJiZWZ1bmdlU3RhdGVcIj5TdGF0ZTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvZGVfb3V0cHV0XCIgaWQ9XCJiZWZ1bmdlU3RhdGVcIj5cclxuXHRcdFx0XHRcdFx0e3N0YXRlQ29udGVudH1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJiZWZ1bmdlU3RhY2tcIj5TdGFjazwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvZGVfb3V0cHV0XCIgaWQ9XCJiZWZ1bmdlU3RhY2tcIj5cclxuXHRcdFx0XHRcdFx0e3N0YWNrQ29udGVudH1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwib3V0cHV0XCI+XHJcblx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJiZWZ1bmdlT3V0cHV0XCI+T3V0cHV0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInJpZ2h0X2FsaWduZWRcIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ3cmFwXCI+V3JhcCBUZXh0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJ3cmFwXCJcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3dvcmRXcmFwfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVXb3JkV3JhcCghd29yZFdyYXApfVxyXG5cdFx0XHRcdFx0XHQ+PC9pbnB1dD5cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtcImNvZGVfb3V0cHV0XCIgKyAod29yZFdyYXAgPyBcIiB3b3JkX3dyYXBcIiA6IFwiXCIpfVxyXG5cdFx0XHRcdFx0XHRpZD1cImJlZnVuZ2VPdXRwdXRcIlxyXG5cdFx0XHRcdFx0XHRyZWY9e2JlZnVuZ2VPdXRwdXR9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0PGJyIC8+XHJcblx0XHRcdDxiciAvPlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlZnVuZ2U7XHJcblxyXG5mdW5jdGlvbiBvblBhdXNlQ2xpY2tlZChwYXVzZUludGVydmFsOiBudW1iZXIpOiB2b2lkIHtcclxuXHRpZiAoUEFVU0VfU1RBVEUgPT09IG51bGwpIHtcclxuXHRcdGlmIChQQVVTRV9FWEVDVVRJT04gPT09IHRydWUpIHtcclxuXHRcdFx0Ly8gV2FpdCBmb3IgUEFVU0VfU1RBVEUgdG8gYmUgcG9wdWxhdGVkXHJcblx0XHRcdHNldFRpbWVvdXQob25QYXVzZUNsaWNrZWQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRQQVVTRV9FWEVDVVRJT04gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBSZXN1bWVcclxuXHRcdFBBVVNFX0VYRUNVVElPTiA9IGZhbHNlO1xyXG5cdFx0c3RlcChcclxuXHRcdFx0UEFVU0VfU1RBVEUuY29kZUFycmF5LFxyXG5cdFx0XHRQQVVTRV9TVEFURS5wb2ludGVycyxcclxuXHRcdFx0UEFVU0VfU1RBVEUucG9pbnRlckluZGV4LFxyXG5cdFx0XHRQQVVTRV9TVEFURS5zdGFja3MsXHJcblx0XHRcdFBBVVNFX1NUQVRFLnN0YXRlU2hvd24sXHJcblx0XHRcdFBBVVNFX1NUQVRFLnN0YXRlV2lkdGgsXHJcblx0XHRcdFBBVVNFX1NUQVRFLnN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRwYXVzZUludGVydmFsLFxyXG5cdFx0XHRQQVVTRV9TVEFURS5wb2ludGVyc1N0cmluZ21vZGUsXHJcblx0XHRcdFBBVVNFX1NUQVRFLm91dHB1dENvbnRlbnQsXHJcblx0XHRcdFBBVVNFX1NUQVRFLm91dHB1dEVsZW1lbnQsXHJcblx0XHRcdFBBVVNFX1NUQVRFLnNldFN0YXRlQ29udGVudCxcclxuXHRcdFx0UEFVU0VfU1RBVEUuc2V0U3RhY2tDb250ZW50LFxyXG5cdFx0XHRQQVVTRV9TVEFURS5zZXRJc1J1bm5pbmcsXHJcblx0XHRcdGZhbHNlLFxyXG5cdFx0KTtcclxuXHRcdFBBVVNFX1NUQVRFID0gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWwgZnVuY3Rpb25zICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKlxyXG4gKiBDaGFuZ2Ugd2hldGhlciBkYXJrbW9kZSBpcyBjdXJyZW50bHkgZW5hYmxlZFxyXG4gKiBAcGFyYW0gbmV3RGFya21vZGUgTmV3IHZhbHVlIG9mIGRhcmttb2RlXHJcbiAqIEBwYXJhbSBzZXREYXJrbW9kZSBGdW5jdGlvbiB0byBzZXQgdGhlIHZhbHVlIG9mIGRhcmttb2RlXHJcbiAqIEBwYXJhbSBzdGF0ZVNob3duIFdoZXRoZXIgdGhlIHN0YXRlIGlzIGN1cnJlbnRseSBzaG93blxyXG4gKiBAcGFyYW0gc2V0U3RhdGVDb250ZW50IEZ1bmN0aW9uIHRvIHNldCB0aGUgc3RhdGUgY29udGVudFxyXG4gKiBAcGFyYW0gY29kZUFycmF5IEN1cnJlbnQgY29kZVxyXG4gKi9cclxuZnVuY3Rpb24gY2hhbmdlRGFya21vZGUoXHJcblx0bmV3RGFya21vZGU6IGJvb2xlYW4sXHJcblx0c3RhdGVTaG93bjogYm9vbGVhbixcclxuXHRzZXRTdGF0ZUNvbnRlbnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEpTWC5FbGVtZW50Pj4sXHJcblx0Y29kZUFycmF5OiAoc3RyaW5nIHwgYmlnaW50KVtdW10sXHJcbik6IHZvaWQge1xyXG5cdERBUktNT0RFID0gbmV3RGFya21vZGU7XHJcblx0ZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBuZXdEYXJrbW9kZSA/IFwiZGFya2dyZXlcIiA6IFwiI2QzZWRlZFwiO1xyXG5cdHNldENvbG9ycyhuZXdEYXJrbW9kZSA/IFwiIzM0MzQzNFwiIDogXCJ3aGl0ZVwiLCBuZXdEYXJrbW9kZSA/IFwibGlnaHRncmF5XCIgOiBcImJsYWNrXCIsIHN0YXRlU2hvd24pO1xyXG5cdGlmIChzdGF0ZVNob3duKSB7XHJcblx0XHRzZXRTdGF0ZUNvbnRlbnQoYnVpbGRTdGF0ZUNvbnRlbnQoY29kZUFycmF5LCB7fSkpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgY29sb3JzIG9mIHRoZSBtYWluIGRpc3BsYXllZCBlbGVtZW50cyB3aGVuIHRvZ2dsaW5nIGRhcmttb2RlXHJcbiAqIEBwYXJhbSBia2dDb2xvciBOZXcgYmFja2dyb3VuZCBjb2xvclxyXG4gKiBAcGFyYW0gdHh0Q29sb3IgTmV3IHRleHQgY29sb3JcclxuICogQHBhcmFtIHN0YXRlU2hvd24gV2hldGhlciB0aGUgc3RhdGUgaXMgY3VycmVudGx5IHNob3duXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXRDb2xvcnMoYmtnQ29sb3I6IHN0cmluZywgdHh0Q29sb3I6IHN0cmluZywgc3RhdGVTaG93bjogYm9vbGVhbik6IHZvaWQge1xyXG5cdGNvbnN0IGlkcyA9IFtcImJlZnVuZ2VPdXRwdXRcIiwgXCJiZWZ1bmdlQ29kZVwiXTtcclxuXHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0aWRzLnB1c2goXCJiZWZ1bmdlU3RhdGVcIiwgXCJiZWZ1bmdlU3RhY2tcIiwgXCJwYXVzZUludGVydmFsXCIpO1xyXG5cdH1cclxuXHRmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xyXG5cdFx0Y29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0XHRpZiAoZWwgIT09IG51bGwpIHtcclxuXHRcdFx0ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmtnQ29sb3I7XHJcblx0XHRcdGVsLnN0eWxlLmNvbG9yID0gdHh0Q29sb3I7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQnVpbGRzIGEgYnV0dG9uIHRvIGRpc3BsYXkgYXQgdGhlIHRvcCBvZiBiZWZ1bmdlXHJcbiAqIEBwYXJhbSBpZCBJRCBmb3IgdGhlIGJ1dHRvblxyXG4gKiBAcGFyYW0gdGV4dCBEaXNwbGF5IHRleHRcclxuICogQHBhcmFtIGNhbGxiYWNrIG9uQ2xpY2sgZnVuY3Rpb24gZm9yIHRoZSBidXR0b25cclxuICogQHJldHVybnMgVGhlIGJ1dHRvbiBlbGVtZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZEJ1dHRvbihcclxuXHRpZDogc3RyaW5nLFxyXG5cdHRleHQ6IHN0cmluZyxcclxuXHRjYWxsYmFjaz86IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50PixcclxuXHRzdGF0ZVNob3duPzogYm9vbGVhbixcclxuKTogSlNYLkVsZW1lbnQge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17XCJidXR0b25fY29udGFpbmVyXCIgKyAoc3RhdGVTaG93biA9PT0gZmFsc2UgPyBcIiBoaWRkZW5cIiA6IFwiXCIpfT5cclxuXHRcdFx0PGJ1dHRvbiBpZD17aWR9IG9uQ2xpY2s9e2NhbGxiYWNrfT5cclxuXHRcdFx0XHR7dGV4dH1cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFN0YWNrQ29udGVudChjdXJTdGFjazogYmlnaW50W11bXSk6IHN0cmluZyB7XHJcblx0bGV0IHN0ciA9IFwiXCI7XHJcblx0Zm9yIChsZXQgaSA9IGN1clN0YWNrLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRjb25zdCBzdGFjayA9IGN1clN0YWNrW2ldO1xyXG5cdFx0c3RyICs9IFwiW1wiO1xyXG5cdFx0Zm9yIChjb25zdCBpdGVtIG9mIHN0YWNrKSB7XHJcblx0XHRcdHN0ciArPSBpdGVtLnRvU3RyaW5nKCkgKyBcIiBcIjtcclxuXHRcdH1cclxuXHRcdHN0ciArPSBcIlxcblwiO1xyXG5cdH1cclxuXHRyZXR1cm4gc3RyO1xyXG59XHJcblxyXG4vKipcclxuICogQnVpbGRzIHRoZSBjb250ZW50IGZvciB0aGUgXCJTdGF0ZVwiIHNlY3Rpb24gZGlzcGxheWluZyB0aGUgY3VycmVudCBwcm9ncmFtIHN0YXRlXHJcbiAqIEBwYXJhbSBjb2RlQXJyYXkgQ3VycmVudCBjb2RlXHJcbiAqIEBwYXJhbSBwb2ludGVySW5kZXggSW5kZXggb2YgdGhlIGV4aXN0aW5nIHBvaW50ZXJzXHJcbiAqIEBwYXJhbSBkYXJrTW9kZSBXaGV0aGVyIHdlJ3JlIGN1cnJlbnRseSBpbiBkYXJrIG1vZGVcclxuICogQHJldHVybnMgVGhlIGNvbnRlbnQgdG8gcHV0IGluIHRoZSBzdGF0ZSBzZWN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZFN0YXRlQ29udGVudChjb2RlQXJyYXk6IChzdHJpbmcgfCBiaWdpbnQpW11bXSwgcG9pbnRlckluZGV4OiBQb2ludGVySW5kZXgpOiBKU1guRWxlbWVudCB7XHJcblx0bGV0IGNoaWxkQXJyYXk6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHRsZXQga2V5ID0gMDtcclxuXHRmb3IgKGNvbnN0IHkgaW4gY29kZUFycmF5KSB7XHJcblx0XHRmb3IgKGNvbnN0IHggaW4gY29kZUFycmF5W3ldKSB7XHJcblx0XHRcdGNvbnN0IGJvcmRlcmVkID0gcG9pbnRlckluZGV4W3hdICE9PSB1bmRlZmluZWQgJiYgcG9pbnRlckluZGV4W3hdW3ldID09PSB0cnVlO1xyXG5cdFx0XHRsZXQgY29sb3IgPSBcIndoaXRlXCI7XHJcblx0XHRcdGxldCB0aXRsZSA9IFwiXCI7XHJcblx0XHRcdGxldCBjb250ZW50ID0gXCJcIjtcclxuXHRcdFx0Y29uc3QgY3VySXRlbSA9IGNvZGVBcnJheVt5XVt4XTtcclxuXHRcdFx0aWYgKHR5cGVvZiBjdXJJdGVtID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0Y29sb3IgPSBpbnN0cnVjdGlvbkNvbG9yVGFibGVbY3VySXRlbV07XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBjb2xvciA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdFx0aWYgKGN1ckl0ZW0gPT09IFwiIFwiKSB7XHJcblx0XHRcdFx0XHRcdHRpdGxlID0gXCIzMlwiO1xyXG5cdFx0XHRcdFx0XHRjb250ZW50ID0gY3VySXRlbTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yID0gREFSS01PREUgPyBcImRhcmtncmV5XCIgOiBcImxpZ2h0Z3JleVwiO1xyXG5cdFx0XHRcdFx0XHR0aXRsZSA9IGN1ckl0ZW0uY2hhckNvZGVBdCgwKS50b1N0cmluZygpO1xyXG5cdFx0XHRcdFx0XHRjb250ZW50ID0gY3VySXRlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKERBUktNT0RFKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjb2xvciA9PT0gXCJibGFja1wiKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3IgPSBcImxpZ2h0Z3JleVwiO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGNvbG9yID09PSBjb2xvck9wKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3IgPSBcIiMwMGFiZmZcIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGl0bGUgPSBjdXJJdGVtLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRcdGNvbnRlbnQgPSBjdXJJdGVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY3VySXRlbSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdHRpdGxlID0gXCIzMlwiO1xyXG5cdFx0XHRcdGNvbnRlbnQgPSBcIiBcIjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb2xvciA9IERBUktNT0RFID8gXCJkYXJrZ3JleVwiIDogXCJsaWdodGdyZXlcIjtcclxuXHRcdFx0XHR0aXRsZSA9IGN1ckl0ZW0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHRjb250ZW50ID0gXCLDmFwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNoaWxkQXJyYXkucHVzaChcclxuXHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtib3JkZXJlZCA/IChEQVJLTU9ERSA/IFwiYm9yZGVyZWRfY2hhcl9kYXJrbW9kZVwiIDogXCJib3JkZXJlZF9jaGFyXCIpIDogXCJcIn1cclxuXHRcdFx0XHRcdHN0eWxlPXt7IGNvbG9yOiBjb2xvciB9fVxyXG5cdFx0XHRcdFx0dGl0bGU9e3RpdGxlfVxyXG5cdFx0XHRcdFx0a2V5PXtrZXkrK31cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7Y29udGVudCA9PT0gXCIgXCIgPyBcIlxcdTAwQTBcIiA6IGNvbnRlbnR9XHJcblx0XHRcdFx0PC9zcGFuPixcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNoaWxkQXJyYXkucHVzaCg8YnIga2V5PXtrZXkrK30gLz4pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIDxSZWFjdC5GcmFnbWVudD57Li4uY2hpbGRBcnJheX08L1JlYWN0LkZyYWdtZW50PjtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRwdXQobmV3U3RyaW5nOiBzdHJpbmcgfCBudWxsLCBjdXJPdXRwdXQ6IHN0cmluZywgb3V0cHV0RWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG5cdGxldCBuZXdPdXRwdXQgPSBcIlwiO1xyXG5cdGlmIChuZXdTdHJpbmcgPT09IG51bGwpIHtcclxuXHRcdC8vIFNpZ25hbCBmb3IgYmFja3NwYWNlIChjaGFyIDgpXHJcblx0XHRuZXdPdXRwdXQgPSBjdXJPdXRwdXQuc3Vic3RyaW5nKDAsIGN1ck91dHB1dC5sZW5ndGggLSAxKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bmV3T3V0cHV0ID0gY3VyT3V0cHV0ICsgbmV3U3RyaW5nO1xyXG5cdH1cclxuXHJcblx0b3V0cHV0RWxlbWVudC5pbm5lckhUTUwgPSBuZXdPdXRwdXQ7XHJcblx0b3V0cHV0RWxlbWVudC5zY3JvbGxUb3AgPSBvdXRwdXRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuXHRyZXR1cm4gbmV3T3V0cHV0O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgRnVuY3Rpb25zIHRvIGFjdHVhbGx5IHJ1biB0aGUgYmVmdW5nZSBjb2RlICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5mdW5jdGlvbiBydW5CZWZ1bmdlKFxyXG5cdGlucHV0VGV4dDogc3RyaW5nLFxyXG5cdHN0YXRlU2hvd246IGJvb2xlYW4sXHJcblx0cGF1c2VJbnRlcnZhbDogbnVtYmVyLFxyXG5cdHNldENvZGVBcnJheTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248KHN0cmluZyB8IGJpZ2ludClbXVtdPj4sXHJcblx0b3V0cHV0UmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+LFxyXG5cdHNldFN0YXRlQ29udGVudDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248SlNYLkVsZW1lbnQ+PixcclxuXHRzZXRTdGFja0NvbnRlbnQ6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZz4+LFxyXG5cdHNldElzUnVubmluZzogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+LFxyXG5cdHN0ZXBPbmNlPzogYm9vbGVhbixcclxuKTogdm9pZCB7XHJcblx0aWYgKGlzTmFOKHBhdXNlSW50ZXJ2YWwpIHx8IHBhdXNlSW50ZXJ2YWwgPCAwKSB7XHJcblx0XHRwYXVzZUludGVydmFsID0gMDtcclxuXHR9XHJcblx0Y29uc3QgY29kZUFycmF5ID0gaW5wdXRUZXh0LnNwbGl0KFwiXFxuXCIpLm1hcCgobGluZSkgPT4gbGluZS5zcGxpdChcIlwiKSk7XHJcblx0c2V0Q29kZUFycmF5KGNvZGVBcnJheSk7XHJcblx0aWYgKG91dHB1dFJlZi5jdXJyZW50KSB7XHJcblx0XHRvdXRwdXRSZWYuY3VycmVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdH1cclxuXHRjb25zdCBvdXRwdXRFbGVtZW50ID0gb3V0cHV0UmVmLmN1cnJlbnQhO1xyXG5cdGNvbnN0IHN0YXRlV2lkdGggPSBjb2RlQXJyYXkucmVkdWNlKCh4LCByb3cpID0+IE1hdGgubWF4KHgsIHJvdy5sZW5ndGgpLCAtOTkpO1xyXG5cdGNvbnN0IHN0YXRlSGVpZ2h0ID0gY29kZUFycmF5Lmxlbmd0aDtcclxuXHRjb25zdCBwb2ludGVyczogUG9pbnRlcltdID0gW3sgaXA6IHsgeDogMCwgeTogMCB9LCBkZWx0YTogeyB4OiAxLCB5OiAwIH0gfV07XHJcblx0Y29uc3QgcG9pbnRlckluZGV4OiBQb2ludGVySW5kZXggPSB7IDA6IHsgMDogdHJ1ZSB9IH07XHJcblx0Y29uc3Qgc3RhY2tzOiBiaWdpbnRbXVtdW10gPSBbW1tdXV07XHJcblx0Y29uc3QgcG9pbnRlcnNTdHJpbmdtb2RlID0gW2ZhbHNlXTtcclxuXHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0c2V0U3RhdGVDb250ZW50KGJ1aWxkU3RhdGVDb250ZW50KGNvZGVBcnJheSwgcG9pbnRlckluZGV4KSk7XHJcblx0fVxyXG5cdEhBTFRfRVhFQ1VUSU9OID0gZmFsc2U7XHJcblx0UEFVU0VfRVhFQ1VUSU9OID0gZmFsc2U7XHJcblx0UEFVU0VfU1RBVEUgPSBudWxsO1xyXG5cclxuXHQvLyBSdW5cclxuXHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHN0ZXAoXHJcblx0XHRcdFx0Y29kZUFycmF5LFxyXG5cdFx0XHRcdHBvaW50ZXJzLFxyXG5cdFx0XHRcdHBvaW50ZXJJbmRleCxcclxuXHRcdFx0XHRzdGFja3MsXHJcblx0XHRcdFx0c3RhdGVTaG93bixcclxuXHRcdFx0XHRzdGF0ZVdpZHRoLFxyXG5cdFx0XHRcdHN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRcdHBhdXNlSW50ZXJ2YWwsXHJcblx0XHRcdFx0cG9pbnRlcnNTdHJpbmdtb2RlLFxyXG5cdFx0XHRcdFwiXCIsXHJcblx0XHRcdFx0b3V0cHV0RWxlbWVudCxcclxuXHRcdFx0XHRzZXRTdGF0ZUNvbnRlbnQsXHJcblx0XHRcdFx0c2V0U3RhY2tDb250ZW50LFxyXG5cdFx0XHRcdHNldElzUnVubmluZyxcclxuXHRcdFx0XHRzdGVwT25jZSxcclxuXHRcdFx0KTtcclxuXHRcdH0sIDApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0c3RlcChcclxuXHRcdFx0XHRjb2RlQXJyYXksXHJcblx0XHRcdFx0cG9pbnRlcnMsXHJcblx0XHRcdFx0cG9pbnRlckluZGV4LFxyXG5cdFx0XHRcdHN0YWNrcyxcclxuXHRcdFx0XHRmYWxzZSxcclxuXHRcdFx0XHRzdGF0ZVdpZHRoLFxyXG5cdFx0XHRcdHN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRcdHBhdXNlSW50ZXJ2YWwsXHJcblx0XHRcdFx0cG9pbnRlcnNTdHJpbmdtb2RlLFxyXG5cdFx0XHRcdFwiXCIsXHJcblx0XHRcdFx0b3V0cHV0RWxlbWVudCxcclxuXHRcdFx0XHRzZXRTdGF0ZUNvbnRlbnQsXHJcblx0XHRcdFx0c2V0U3RhY2tDb250ZW50LFxyXG5cdFx0XHRcdHNldElzUnVubmluZyxcclxuXHRcdFx0XHRmYWxzZSxcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy9UaGlzIHNob3VsZCBiZSB0aGUgc2FtZSBhcyB0aGUgYXJncyB0byBzdGVwXHJcbnR5cGUgUGF1c2VTdGF0ZSA9IHtcclxuXHRjb2RlQXJyYXk6IChzdHJpbmcgfCBiaWdpbnQpW11bXTtcclxuXHRwb2ludGVyczogUG9pbnRlcltdO1xyXG5cdHBvaW50ZXJJbmRleDogUG9pbnRlckluZGV4O1xyXG5cdHN0YWNrczogYmlnaW50W11bXVtdO1xyXG5cdHN0YXRlU2hvd246IGJvb2xlYW47XHJcblx0c3RhdGVXaWR0aDogbnVtYmVyO1xyXG5cdHN0YXRlSGVpZ2h0OiBudW1iZXI7XHJcblx0cGF1c2VJbnRlcnZhbDogbnVtYmVyO1xyXG5cdHBvaW50ZXJzU3RyaW5nbW9kZTogYm9vbGVhbltdO1xyXG5cdG91dHB1dENvbnRlbnQ6IHN0cmluZztcclxuXHRvdXRwdXRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRzZXRTdGF0ZUNvbnRlbnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEpTWC5FbGVtZW50Pj47XHJcblx0c2V0U3RhY2tDb250ZW50OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PjtcclxuXHRzZXRJc1J1bm5pbmc6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHN0ZXAoXHJcblx0Y29kZUFycmF5OiAoc3RyaW5nIHwgYmlnaW50KVtdW10sXHJcblx0cG9pbnRlcnM6IFBvaW50ZXJbXSxcclxuXHRwb2ludGVySW5kZXg6IFBvaW50ZXJJbmRleCxcclxuXHRzdGFja3M6IGJpZ2ludFtdW11bXSxcclxuXHRzdGF0ZVNob3duOiBib29sZWFuLFxyXG5cdHN0YXRlV2lkdGg6IG51bWJlcixcclxuXHRzdGF0ZUhlaWdodDogbnVtYmVyLFxyXG5cdHBhdXNlSW50ZXJ2YWw6IG51bWJlcixcclxuXHRwb2ludGVyc1N0cmluZ21vZGU6IGJvb2xlYW5bXSxcclxuXHRvdXRwdXRDb250ZW50OiBzdHJpbmcsXHJcblx0b3V0cHV0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcblx0c2V0U3RhdGVDb250ZW50OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxKU1guRWxlbWVudD4+LFxyXG5cdHNldFN0YWNrQ29udGVudDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj4sXHJcblx0c2V0SXNSdW5uaW5nOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4sXHJcblx0c3RlcE9uY2U6IGJvb2xlYW4gPSBmYWxzZSxcclxuKTogdm9pZCB7XHJcblx0aWYgKFBBVVNFX0VYRUNVVElPTikge1xyXG5cdFx0UEFVU0VfU1RBVEUgPSB7XHJcblx0XHRcdGNvZGVBcnJheTogY29kZUFycmF5LFxyXG5cdFx0XHRwb2ludGVyczogcG9pbnRlcnMsXHJcblx0XHRcdHBvaW50ZXJJbmRleDogcG9pbnRlckluZGV4LFxyXG5cdFx0XHRzdGFja3M6IHN0YWNrcyxcclxuXHRcdFx0c3RhdGVTaG93bjogc3RhdGVTaG93bixcclxuXHRcdFx0c3RhdGVXaWR0aDogc3RhdGVXaWR0aCxcclxuXHRcdFx0c3RhdGVIZWlnaHQ6IHN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRwYXVzZUludGVydmFsOiBwYXVzZUludGVydmFsLFxyXG5cdFx0XHRwb2ludGVyc1N0cmluZ21vZGU6IHBvaW50ZXJzU3RyaW5nbW9kZSxcclxuXHRcdFx0b3V0cHV0Q29udGVudDogb3V0cHV0Q29udGVudCxcclxuXHRcdFx0b3V0cHV0RWxlbWVudDogb3V0cHV0RWxlbWVudCxcclxuXHRcdFx0c2V0U3RhdGVDb250ZW50OiBzZXRTdGF0ZUNvbnRlbnQsXHJcblx0XHRcdHNldFN0YWNrQ29udGVudDogc2V0U3RhY2tDb250ZW50LFxyXG5cdFx0XHRzZXRJc1J1bm5pbmc6IHNldElzUnVubmluZyxcclxuXHRcdH07XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGlmIChIQUxUX0VYRUNVVElPTikge1xyXG5cdFx0aGFsdEV4ZWN1dGlvbihjb2RlQXJyYXksIHN0YXRlU2hvd24sIHNldFN0YXRlQ29udGVudCwgc2V0U3RhY2tDb250ZW50LCBzZXRJc1J1bm5pbmcpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbnVtSXRlcnMgPSBzdGF0ZVNob3duID8gMSA6IFNURVBTX0JUV05fQ0FMTEJBQ0tTO1xyXG5cdGZvciAobGV0IGN0ciA9IDA7IGN0ciA8IG51bUl0ZXJzICYmICFIQUxUX0VYRUNVVElPTjsgY3RyKyspIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRlcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgaXAgPSBwb2ludGVyc1tpXS5pcDtcclxuXHRcdFx0Y29uc3QgZGVsdGEgPSBwb2ludGVyc1tpXS5kZWx0YTtcclxuXHRcdFx0Y29uc3QgdG9zcyA9IHN0YWNrc1tpXVtzdGFja3NbaV0ubGVuZ3RoIC0gMV07XHJcblx0XHRcdGNvbnN0IGN1ckNvbW1hbmQgPSBjb2RlQXJyYXlbaXAueV1baXAueF07XHJcblx0XHRcdGxldCBmbGFnID0gSW5zdHJ1Y3Rpb25SZXN1bHQuQ29udGludWU7XHJcblx0XHRcdC8vIElmIHdlIGFyZSBjdXJyZW50bHkgaW4gc3RyaW5nIG1vZGVcclxuXHRcdFx0aWYgKHBvaW50ZXJzU3RyaW5nbW9kZVtpXSkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgY3VyQ29tbWFuZCA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0aWYgKGN1ckNvbW1hbmQgPT09ICdcIicpIHtcclxuXHRcdFx0XHRcdFx0cG9pbnRlcnNTdHJpbmdtb2RlW2ldID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0b3NzLnB1c2goQmlnSW50KGN1ckNvbW1hbmQuY2hhckNvZGVBdCgwKSkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoY3VyQ29tbWFuZCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHR0b3NzLnB1c2goQmlnSW50KDMyKSk7IC8vIFNwYWNlXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRvc3MucHVzaChjdXJDb21tYW5kKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gTm90IGN1cnJlbnRseSBpbiBzdHJpbmcgbW9kZVxyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgY3VyQ29tbWFuZCA9PT0gXCJiaWdpbnRcIikge1xyXG5cdFx0XHRcdC8vIERvIG5vdGhpbmcgLSBjaGFyYWN0ZXIgb3V0IG9mIGluc3RydWN0aW9uIHJhbmdlXHJcblx0XHRcdFx0Ly8gKGNoYXJhY3RlcnMgaW4gaW5zdHJ1Y3Rpb24gcmFuZ2UgYWx3YXlzIHNhdmVkIGFzIHN0cmluZ3MpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0W2ZsYWcsIG91dHB1dENvbnRlbnQsIHN0YXRlV2lkdGgsIHN0YXRlSGVpZ2h0XSA9IGRvSW5zdHJ1Y3Rpb24oXHJcblx0XHRcdFx0XHRjb2RlQXJyYXksXHJcblx0XHRcdFx0XHRjdXJDb21tYW5kLFxyXG5cdFx0XHRcdFx0c3RhdGVTaG93bixcclxuXHRcdFx0XHRcdGlwLFxyXG5cdFx0XHRcdFx0ZGVsdGEsXHJcblx0XHRcdFx0XHRwb2ludGVycyxcclxuXHRcdFx0XHRcdHBvaW50ZXJJbmRleCxcclxuXHRcdFx0XHRcdGksXHJcblx0XHRcdFx0XHRwb2ludGVyc1N0cmluZ21vZGUsXHJcblx0XHRcdFx0XHRzdGFja3MsXHJcblx0XHRcdFx0XHRvdXRwdXRDb250ZW50LFxyXG5cdFx0XHRcdFx0c3RhdGVXaWR0aCxcclxuXHRcdFx0XHRcdHN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRcdFx0b3V0cHV0RWxlbWVudCxcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRpZiAoZmxhZyA9PT0gSW5zdHJ1Y3Rpb25SZXN1bHQuRGVsZXRlZFBvaW50ZXIpIHtcclxuXHRcdFx0XHRcdGktLTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGZsYWcgPT09IEluc3RydWN0aW9uUmVzdWx0Lk5ld1BvaW50ZXIpIHtcclxuXHRcdFx0XHRcdFx0Ly8gVXBkYXRlIHBvc2l0aW9uIG9mIG5ldyBwb2ludGVyXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBvc2l0aW9uKFxyXG5cdFx0XHRcdFx0XHRcdHBvaW50ZXJzW2ldLmlwLFxyXG5cdFx0XHRcdFx0XHRcdHBvaW50ZXJzW2ldLmRlbHRhLFxyXG5cdFx0XHRcdFx0XHRcdHN0YXRlV2lkdGgsXHJcblx0XHRcdFx0XHRcdFx0c3RhdGVIZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0c3RhdGVTaG93bixcclxuXHRcdFx0XHRcdFx0XHRjb2RlQXJyYXksXHJcblx0XHRcdFx0XHRcdFx0cG9pbnRlcnNTdHJpbmdtb2RlLFxyXG5cdFx0XHRcdFx0XHRcdGksXHJcblx0XHRcdFx0XHRcdFx0cG9pbnRlckluZGV4LFxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRpKys7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGZsYWcgPT09IEluc3RydWN0aW9uUmVzdWx0LlN0b3BwZWQpIHtcclxuXHRcdFx0XHRcdFx0SEFMVF9FWEVDVVRJT04gPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoSEFMVF9FWEVDVVRJT04pIHtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fSBlbHNlIGlmIChmbGFnICE9PSBJbnN0cnVjdGlvblJlc3VsdC5EZWxldGVkUG9pbnRlcikge1xyXG5cdFx0XHRcdHVwZGF0ZVBvc2l0aW9uKFxyXG5cdFx0XHRcdFx0aXAsXHJcblx0XHRcdFx0XHRkZWx0YSxcclxuXHRcdFx0XHRcdHN0YXRlV2lkdGgsXHJcblx0XHRcdFx0XHRzdGF0ZUhlaWdodCxcclxuXHRcdFx0XHRcdHN0YXRlU2hvd24sXHJcblx0XHRcdFx0XHRjb2RlQXJyYXksXHJcblx0XHRcdFx0XHRwb2ludGVyc1N0cmluZ21vZGUsXHJcblx0XHRcdFx0XHRpLFxyXG5cdFx0XHRcdFx0cG9pbnRlckluZGV4LFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChIQUxUX0VYRUNVVElPTikge1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChzdGF0ZVNob3duKSB7XHJcblx0XHRzZXRTdGF0ZUNvbnRlbnQoYnVpbGRTdGF0ZUNvbnRlbnQoY29kZUFycmF5LCBwb2ludGVySW5kZXgpKTtcclxuXHRcdHNldFN0YWNrQ29udGVudChidWlsZFN0YWNrQ29udGVudChzdGFja3Nbc3RhY2tzLmxlbmd0aCAtIDFdKSk7XHJcblx0fVxyXG5cclxuXHRpZiAoSEFMVF9FWEVDVVRJT04pIHtcclxuXHRcdGhhbHRFeGVjdXRpb24oY29kZUFycmF5LCBzdGF0ZVNob3duLCBzZXRTdGF0ZUNvbnRlbnQsIHNldFN0YWNrQ29udGVudCwgc2V0SXNSdW5uaW5nKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmIChzdGVwT25jZSkge1xyXG5cdFx0UEFVU0VfU1RBVEUgPSB7XHJcblx0XHRcdGNvZGVBcnJheTogY29kZUFycmF5LFxyXG5cdFx0XHRwb2ludGVyczogcG9pbnRlcnMsXHJcblx0XHRcdHBvaW50ZXJJbmRleDogcG9pbnRlckluZGV4LFxyXG5cdFx0XHRzdGFja3M6IHN0YWNrcyxcclxuXHRcdFx0c3RhdGVTaG93bjogc3RhdGVTaG93bixcclxuXHRcdFx0c3RhdGVXaWR0aDogc3RhdGVXaWR0aCxcclxuXHRcdFx0c3RhdGVIZWlnaHQ6IHN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRwYXVzZUludGVydmFsOiBwYXVzZUludGVydmFsLFxyXG5cdFx0XHRwb2ludGVyc1N0cmluZ21vZGU6IHBvaW50ZXJzU3RyaW5nbW9kZSxcclxuXHRcdFx0b3V0cHV0Q29udGVudDogb3V0cHV0Q29udGVudCxcclxuXHRcdFx0b3V0cHV0RWxlbWVudDogb3V0cHV0RWxlbWVudCxcclxuXHRcdFx0c2V0U3RhdGVDb250ZW50OiBzZXRTdGF0ZUNvbnRlbnQsXHJcblx0XHRcdHNldFN0YWNrQ29udGVudDogc2V0U3RhY2tDb250ZW50LFxyXG5cdFx0XHRzZXRJc1J1bm5pbmc6IHNldElzUnVubmluZyxcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRzdGVwKFxyXG5cdFx0XHRcdGNvZGVBcnJheSxcclxuXHRcdFx0XHRwb2ludGVycyxcclxuXHRcdFx0XHRwb2ludGVySW5kZXgsXHJcblx0XHRcdFx0c3RhY2tzLFxyXG5cdFx0XHRcdHN0YXRlU2hvd24sXHJcblx0XHRcdFx0c3RhdGVXaWR0aCxcclxuXHRcdFx0XHRzdGF0ZUhlaWdodCxcclxuXHRcdFx0XHRwYXVzZUludGVydmFsLFxyXG5cdFx0XHRcdHBvaW50ZXJzU3RyaW5nbW9kZSxcclxuXHRcdFx0XHRvdXRwdXRDb250ZW50LFxyXG5cdFx0XHRcdG91dHB1dEVsZW1lbnQsXHJcblx0XHRcdFx0c2V0U3RhdGVDb250ZW50LFxyXG5cdFx0XHRcdHNldFN0YWNrQ29udGVudCxcclxuXHRcdFx0XHRzZXRJc1J1bm5pbmcsXHJcblx0XHRcdFx0c3RlcE9uY2UsXHJcblx0XHRcdCk7XHJcblx0XHR9LCBwYXVzZUludGVydmFsKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbHRFeGVjdXRpb24oXHJcblx0Y29kZUFycmF5OiAoc3RyaW5nIHwgYmlnaW50KVtdW10sXHJcblx0c3RhdGVTaG93bjogYm9vbGVhbixcclxuXHRzZXRTdGF0ZUNvbnRlbnQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEpTWC5FbGVtZW50Pj4sXHJcblx0c2V0U3RhY2tDb250ZW50OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PixcclxuXHRzZXRJc1J1bm5pbmc6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PixcclxuKTogdm9pZCB7XHJcblx0aWYgKHN0YXRlU2hvd24pIHtcclxuXHRcdHNldFN0YXRlQ29udGVudChidWlsZFN0YXRlQ29udGVudChjb2RlQXJyYXksIHt9KSk7XHJcblx0XHRzZXRTdGFja0NvbnRlbnQoXCJcIik7XHJcblx0fVxyXG5cdHNldElzUnVubmluZyhmYWxzZSk7XHJcblx0UEFVU0VfU1RBVEUgPSBudWxsO1xyXG5cdFBBVVNFX0VYRUNVVElPTiA9IGZhbHNlO1xyXG59XHJcblxyXG5jb25zdCBlbnVtIEluc3RydWN0aW9uUmVzdWx0IHtcclxuXHROZXdQb2ludGVyLFxyXG5cdERlbGV0ZWRQb2ludGVyLFxyXG5cdFN0b3BwZWQsXHJcblx0Q29udGludWUsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBvaW50ZXJJbmRleChwb2ludGVySW5kZXg6IFBvaW50ZXJJbmRleCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcblx0aWYgKHBvaW50ZXJJbmRleFt4XSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRwb2ludGVySW5kZXhbeF0gPSB7fTtcclxuXHR9XHJcblx0cG9pbnRlckluZGV4W3hdW3ldID0gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKFxyXG5cdGlwOiBQb2ludCxcclxuXHRkZWx0YTogUG9pbnQsXHJcblx0c3RhdGVXaWR0aDogbnVtYmVyLFxyXG5cdHN0YXRlSGVpZ2h0OiBudW1iZXIsXHJcblx0c3RhdGVTaG93bjogYm9vbGVhbixcclxuXHRjb2RlQXJyYXk6IChzdHJpbmcgfCBiaWdpbnQpW11bXSxcclxuXHRwb2ludGVyc1N0cmluZ21vZGU6IGJvb2xlYW5bXSxcclxuXHRwb2ludGVySWQ6IG51bWJlcixcclxuXHRwb2ludGVySW5kZXg6IFBvaW50ZXJJbmRleCxcclxuKTogdm9pZCB7XHJcblx0aWYgKHN0YXRlU2hvd24pIHtcclxuXHRcdHVwZGF0ZVBvaW50ZXJJbmRleChwb2ludGVySW5kZXgsIGlwLngsIGlwLnksIGZhbHNlKTtcclxuXHR9XHJcblx0dmFyIGN0ciA9IDA7XHJcblx0ZG8ge1xyXG5cdFx0aXAueCA9IChpcC54ICsgZGVsdGEueCkgJSBzdGF0ZVdpZHRoO1xyXG5cdFx0aXAueSA9IChpcC55ICsgZGVsdGEueSkgJSBzdGF0ZUhlaWdodDtcclxuXHRcdGlmIChpcC54IDwgMCkge1xyXG5cdFx0XHRpcC54ID0gc3RhdGVXaWR0aCArIGlwLng7XHJcblx0XHR9XHJcblx0XHRpZiAoaXAueSA8IDApIHtcclxuXHRcdFx0aXAueSA9IHN0YXRlSGVpZ2h0ICsgaXAueTtcclxuXHRcdH1cclxuXHRcdGN0cisrO1xyXG5cdH0gd2hpbGUgKFxyXG5cdFx0KGNvZGVBcnJheVtpcC55XSA9PT0gdW5kZWZpbmVkIHx8XHJcblx0XHRcdGNvZGVBcnJheVtpcC55XVtpcC54XSA9PT0gdW5kZWZpbmVkIHx8XHJcblx0XHRcdGNvZGVBcnJheVtpcC55XVtpcC54XSA9PT0gXCIgXCIpICYmXHJcblx0XHQhcG9pbnRlcnNTdHJpbmdtb2RlW3BvaW50ZXJJZF0gJiZcclxuXHRcdGN0ciA8IFNURVBTX09WRVJfV0hJVEVTUEFDRVxyXG5cdCk7XHJcblx0aWYgKGN0ciA9PT0gU1RFUFNfT1ZFUl9XSElURVNQQUNFKSB7XHJcblx0XHQvLyBMaWtlbHkgaW5maW5pdGUgbG9vcCwgc2V0IHRpbWVvdXQgc28gdXNlciBjYW4gcXVpdFxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHVwZGF0ZVBvc2l0aW9uKFxyXG5cdFx0XHRcdGlwLFxyXG5cdFx0XHRcdGRlbHRhLFxyXG5cdFx0XHRcdHN0YXRlV2lkdGgsXHJcblx0XHRcdFx0c3RhdGVIZWlnaHQsXHJcblx0XHRcdFx0c3RhdGVTaG93bixcclxuXHRcdFx0XHRjb2RlQXJyYXksXHJcblx0XHRcdFx0cG9pbnRlcnNTdHJpbmdtb2RlLFxyXG5cdFx0XHRcdHBvaW50ZXJJZCxcclxuXHRcdFx0XHRwb2ludGVySW5kZXgsXHJcblx0XHRcdCk7XHJcblx0XHR9LCAwKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0aWYgKHN0YXRlU2hvd24pIHtcclxuXHRcdFx0dXBkYXRlUG9pbnRlckluZGV4KHBvaW50ZXJJbmRleCwgaXAueCwgaXAueSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgICAgICAgWU9VIFNIQUxMIE5PVCBQQVNTICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgLC0tLS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgICAgICAgICAgICAvICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgLyAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAtR2FuZGFsZiAgICAgICAgICAgIC8gICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgICAgICAgICAvICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICBfX18sJyAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICA8ICAtJyAgICAgICAgICA6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgICBgLS5fXy4uLS0nYGAtLF9cXF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgICAgICB8by8gYCA6LC4pX2A+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICAgIDovIGAgICAgIHx8LykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICAgICAgKF8uKS5fXywtYCB8XFwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgICAgICAgICAgLyggYC5gYCAgIGB8IDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgICAgICBcXCdgLS4pICBgICA7IDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICAgICAgICAgICB8IGAgICAgICAgLy08ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgICAgICAgICAgICAgICAgIHwgICAgIGAgIC8gICBgLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAsLV8tLi5fX19fICAgICAvfCAgYCAgICA6X18uLi0nXFwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqIC8sJy0uX19cXFxcICBgYC0uLyA6YCAgICAgIDsgICAgICAgXFwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogYFxcIGBcXCAgYFxcXFwgIFxcIDogICggICBgICAvICAsICAgYC4gXFwgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgIFxcYCBcXCAgIFxcXFwgICB8ICB8IGAgICA6ICA6ICAgICAuXFwgXFwgICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgIFxcIGBcXF8gICkpICA6ICA7ICAgICB8ICB8ICAgICAgKTogOiAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKiAgIChgLS4tJ1xcIHx8ICB8XFwgXFwgICBgIDsgIDsgICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgIFxcLV8gICBgOzsuXyAgICggYCAgLyAgL18gICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICBgLS4tLi8vICwnYC0uX1xcX18vXywnICAgICAgICAgOyB8ICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICBcXDo6IDogICAgIC8gICAgIGAgICAgICwgICAvICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAqXHJcbiAqICAgICAgICAgfHwgfCAgICAoICAgICAgICAsJyAvICAgLyAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICpcclxuICogICAgICAgICB8fCAgICAgICAgICAgICAgICAsJyAgIC8gICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gZG9JbnN0cnVjdGlvbihcclxuXHRjb2RlQXJyYXk6IChzdHJpbmcgfCBiaWdpbnQpW11bXSxcclxuXHRjdXJDb21tYW5kOiBzdHJpbmcgfCBiaWdpbnQsXHJcblx0c3RhdGVTaG93bjogYm9vbGVhbixcclxuXHRpcDogUG9pbnQsXHJcblx0ZGVsdGE6IFBvaW50LFxyXG5cdHBvaW50ZXJzOiBQb2ludGVyW10sXHJcblx0cG9pbnRlckluZGV4OiBQb2ludGVySW5kZXgsXHJcblx0cG9pbnRlcklkOiBudW1iZXIsXHJcblx0cG9pbnRlcnNTdHJpbmdtb2RlOiBib29sZWFuW10sXHJcblx0c3RhY2tzOiBiaWdpbnRbXVtdW10sXHJcblx0b3V0cHV0Q29udGVudDogc3RyaW5nLFxyXG5cdHN0YXRlV2lkdGg6IG51bWJlcixcclxuXHRzdGF0ZUhlaWdodDogbnVtYmVyLFxyXG5cdG91dHB1dEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4pOiBbSW5zdHJ1Y3Rpb25SZXN1bHQsIHN0cmluZywgbnVtYmVyLCBudW1iZXJdIHtcclxuXHRjb25zdCB0b3NzID0gc3RhY2tzW3BvaW50ZXJJZF1bc3RhY2tzW3BvaW50ZXJJZF0ubGVuZ3RoIC0gMV07XHJcblx0c3dpdGNoIChjdXJDb21tYW5kKSB7XHJcblx0XHRjYXNlIFwicVwiOlxyXG5cdFx0XHRyZXR1cm4gW0luc3RydWN0aW9uUmVzdWx0LlN0b3BwZWQsIG91dHB1dENvbnRlbnQsIHN0YXRlV2lkdGgsIHN0YXRlSGVpZ2h0XTtcclxuXHRcdGNhc2UgXCIwXCI6XHJcblx0XHRjYXNlIFwiMVwiOlxyXG5cdFx0Y2FzZSBcIjJcIjpcclxuXHRcdGNhc2UgXCIzXCI6XHJcblx0XHRjYXNlIFwiNFwiOlxyXG5cdFx0Y2FzZSBcIjVcIjpcclxuXHRcdGNhc2UgXCI2XCI6XHJcblx0XHRjYXNlIFwiN1wiOlxyXG5cdFx0Y2FzZSBcIjhcIjpcclxuXHRcdGNhc2UgXCI5XCI6XHJcblx0XHRcdC8vIFB1c2ggdGhlIG51bWJlclxyXG5cdFx0XHR0b3NzLnB1c2goQmlnSW50KGN1ckNvbW1hbmQpKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiYVwiOlxyXG5cdFx0Y2FzZSBcImJcIjpcclxuXHRcdGNhc2UgXCJjXCI6XHJcblx0XHRjYXNlIFwiZFwiOlxyXG5cdFx0Y2FzZSBcImVcIjpcclxuXHRcdGNhc2UgXCJmXCI6XHJcblx0XHRcdC8vIFB1c2ggMTAgdGhyb3VnaCAxNVxyXG5cdFx0XHR0b3NzLnB1c2goQmlnSW50KGN1ckNvbW1hbmQuY2hhckNvZGVBdCgwKSAtIDg3KSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnXCInOlxyXG5cdFx0XHQvLyBFbnRlciBzdHJpbmdtb2RlXHJcblx0XHRcdHBvaW50ZXJzU3RyaW5nbW9kZVtwb2ludGVySWRdID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiJFwiOlxyXG5cdFx0XHQvLyBQb3BcclxuXHRcdFx0dG9zcy5wb3AoKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiOlwiOlxyXG5cdFx0XHQvLyBEdXBsaWNhdGVcclxuXHRcdFx0aWYgKHRvc3MubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHRvc3MucHVzaCh0b3NzW3Rvc3MubGVuZ3RoIC0gMV0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIlxcXFxcIjpcclxuXHRcdFx0Ly8gU3dhcFxyXG5cdFx0XHRpZiAodG9zcy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0Y29uc3QgdGVtcCA9IHRvc3NbdG9zcy5sZW5ndGggLSAxXTtcclxuXHRcdFx0XHR0b3NzW3Rvc3MubGVuZ3RoIC0gMV0gPSB0b3NzW3Rvc3MubGVuZ3RoIC0gMl07XHJcblx0XHRcdFx0dG9zc1t0b3NzLmxlbmd0aCAtIDJdID0gdGVtcDtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCIrXCI6XHJcblx0XHRcdC8vIEFkZFxyXG5cdFx0XHRoYW5kbGVBcml0aG1ldGljKHRvc3MsIChhLCBiKSA9PiBhICsgYik7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIipcIjpcclxuXHRcdFx0Ly8gTXVsdGlwbHlcclxuXHRcdFx0aGFuZGxlQXJpdGhtZXRpYyh0b3NzLCAoYSwgYikgPT4gYSAqIGIpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCItXCI6XHJcblx0XHRcdC8vIFN1YnRyYWN0XHJcblx0XHRcdGhhbmRsZUFyaXRobWV0aWModG9zcywgKGEsIGIpID0+IGEgLSBiKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiL1wiOlxyXG5cdFx0XHQvLyBEaXZpZGVcclxuXHRcdFx0aGFuZGxlQXJpdGhtZXRpYyh0b3NzLCAoYSwgYikgPT4gKGIgPT09IFpFUk8gPyBaRVJPIDogYSAvIGIpKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiJVwiOlxyXG5cdFx0XHQvLyBNb2RcclxuXHRcdFx0aGFuZGxlQXJpdGhtZXRpYyh0b3NzLCAoYSwgYikgPT4gKGIgPT09IFpFUk8gPyBaRVJPIDogYSAlIGIpKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiLlwiOlxyXG5cdFx0XHQvLyBPdXRwdXQgbnVtYmVyXHJcblx0XHRcdGlmICh0b3NzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRvdXRwdXRDb250ZW50ID0gcHJpbnRPdXRwdXQodG9zcy5wb3AoKSEudG9TdHJpbmcoKSArIFwiIFwiLCBvdXRwdXRDb250ZW50LCBvdXRwdXRFbGVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCIsXCI6XHJcblx0XHRcdC8vIE91dHB1dCBjaGFyYWN0ZXJcclxuXHRcdFx0aWYgKHRvc3MubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdGNvbnN0IG51bSA9IGJpZ0ludEFzSW50KHRvc3MucG9wKCkhKTtcclxuXHRcdFx0XHRpZiAobnVtID09PSA4KSB7XHJcblx0XHRcdFx0XHRvdXRwdXRDb250ZW50ID0gcHJpbnRPdXRwdXQobnVsbCwgb3V0cHV0Q29udGVudCwgb3V0cHV0RWxlbWVudCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG91dHB1dENvbnRlbnQgPSBwcmludE91dHB1dChTdHJpbmcuZnJvbUNoYXJDb2RlKG51bSksIG91dHB1dENvbnRlbnQsIG91dHB1dEVsZW1lbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCImXCI6XHJcblx0XHRcdC8vIElucHV0IGludGVnZXJcclxuXHRcdFx0Y29uc3QgbnVtID0gcHJvbXB0KFwiRW50ZXIgYW4gaW50ZWdlclwiKTtcclxuXHRcdFx0bGV0IGludHM6IHN0cmluZ1tdID0gW107XHJcblx0XHRcdGlmIChudW0gPT09IG51bGwpIHtcclxuXHRcdFx0XHRpbnRzID0gW1wiMFwiXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpbnRzID0gbnVtLm1hdGNoKC8tP1swLTldKy8pID8/IFtcIjBcIl07XHJcblx0XHRcdH1cclxuXHRcdFx0dG9zcy5wdXNoKEJpZ0ludChpbnRzWzBdKSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIn5cIjpcclxuXHRcdFx0Ly8gSW5wdXQgY2hhcmFjdGVyXHJcblx0XHRcdGNvbnN0IGNoYXIgPSBwcm9tcHQoXCJFbnRlciBhIGNoYXJhY3RlclwiKTtcclxuXHRcdFx0aWYgKGNoYXIgPT09IFwiXCIgfHwgY2hhciA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdHRvc3MucHVzaChCaWdJbnQoMTApKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0b3NzLnB1c2goQmlnSW50KGNoYXIuY2hhckNvZGVBdCgwKSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIiFcIjpcclxuXHRcdFx0Ly8gTm90IC0gY2hhbmdlcyAwIHRvIDEgYW5kIG5vbnplcm8gdG8gMFxyXG5cdFx0XHRpZiAodG9zcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0dG9zc1t0b3NzLmxlbmd0aCAtIDFdID0gdG9zc1t0b3NzLmxlbmd0aCAtIDFdID09PSBaRVJPID8gT05FIDogWkVSTztcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCIjXCI6XHJcblx0XHRcdC8vIFNraXAgb3ZlciBuZXh0IGNvbW1hbmRcclxuXHRcdFx0aWYgKHN0YXRlU2hvd24pIHtcclxuXHRcdFx0XHR1cGRhdGVQb2ludGVySW5kZXgocG9pbnRlckluZGV4LCBpcC54LCBpcC55LCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aXAueCA9IChpcC54ICsgZGVsdGEueCkgJSBzdGF0ZVdpZHRoO1xyXG5cdFx0XHRpcC55ID0gKGlwLnkgKyBkZWx0YS55KSAlIHN0YXRlSGVpZ2h0O1xyXG5cdFx0XHRpZiAoaXAueCA8IDApIHtcclxuXHRcdFx0XHRpcC54ID0gc3RhdGVXaWR0aCArIGlwLng7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGlwLnkgPCAwKSB7XHJcblx0XHRcdFx0aXAueSA9IHN0YXRlSGVpZ2h0ICsgaXAueTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0XHRcdHVwZGF0ZVBvaW50ZXJJbmRleChwb2ludGVySW5kZXgsIGlwLngsIGlwLnksIHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIjxcIjpcclxuXHRcdFx0Ly8gTGVmdFxyXG5cdFx0XHRkZWx0YS54ID0gLTE7XHJcblx0XHRcdGRlbHRhLnkgPSAwO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJeXCI6XHJcblx0XHRcdC8vIFVwXHJcblx0XHRcdGRlbHRhLnggPSAwO1xyXG5cdFx0XHRkZWx0YS55ID0gLTE7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIj5cIjpcclxuXHRcdFx0Ly8gUmlnaHRcclxuXHRcdFx0ZGVsdGEueCA9IDE7XHJcblx0XHRcdGRlbHRhLnkgPSAwO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ2XCI6XHJcblx0XHRcdC8vIERvd25cclxuXHRcdFx0ZGVsdGEueCA9IDA7XHJcblx0XHRcdGRlbHRhLnkgPSAxO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCI/XCI6XHJcblx0XHRcdC8vIEdvIGF3YXkhXHJcblx0XHRcdGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XHJcblx0XHRcdHN3aXRjaCAocmFuZCkge1xyXG5cdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdGRlbHRhLnggPSAtMTtcclxuXHRcdFx0XHRcdGRlbHRhLnkgPSAwO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0ZGVsdGEueCA9IDA7XHJcblx0XHRcdFx0XHRkZWx0YS55ID0gLTE7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRkZWx0YS54ID0gMTtcclxuXHRcdFx0XHRcdGRlbHRhLnkgPSAwO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdC8vIDNcclxuXHRcdFx0XHRcdGRlbHRhLnggPSAwO1xyXG5cdFx0XHRcdFx0ZGVsdGEueSA9IDE7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCLigL1cIjpcclxuXHRcdFx0Ly8gR28gYXdheeKAvVxyXG5cdFx0XHRsZXQgcmFuZDEgPSAwLFxyXG5cdFx0XHRcdHJhbmQyID0gMDtcclxuXHRcdFx0d2hpbGUgKHJhbmQxID09PSAwICYmIHJhbmQyID09PSAwKSB7XHJcblx0XHRcdFx0cmFuZDEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICogY29kZUFycmF5Lmxlbmd0aCArIDEpIC0gY29kZUFycmF5Lmxlbmd0aDtcclxuXHRcdFx0XHRyYW5kMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIgKiBjb2RlQXJyYXlbMF0ubGVuZ3RoICsgMSkgLSBjb2RlQXJyYXlbMF0ubGVuZ3RoO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRlbHRhLnggPSByYW5kMTtcclxuXHRcdFx0ZGVsdGEueSA9IHJhbmQyO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJgXCI6XHJcblx0XHRcdC8vIEdyZWF0ZXIgdGhhblxyXG5cdFx0XHRoYW5kbGVBcml0aG1ldGljKHRvc3MsIChhLCBiKSA9PiAoYSA+IGIgPyBPTkUgOiBaRVJPKSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInxcIjpcclxuXHRcdFx0Ly8gVXAgaWYgbm9uemVyb1xyXG5cdFx0XHRpZiAodG9zcy5sZW5ndGggPiAwICYmIHRvc3MucG9wKCkgIT09IFpFUk8pIHtcclxuXHRcdFx0XHRkZWx0YS54ID0gMDtcclxuXHRcdFx0XHRkZWx0YS55ID0gLTE7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGVsdGEueCA9IDA7XHJcblx0XHRcdFx0ZGVsdGEueSA9IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiX1wiOlxyXG5cdFx0XHQvLyBMZWZ0IGlmIG5vbnplcm9cclxuXHRcdFx0aWYgKHRvc3MubGVuZ3RoID4gMCAmJiB0b3NzLnBvcCgpICE9PSBaRVJPKSB7XHJcblx0XHRcdFx0ZGVsdGEueCA9IC0xO1xyXG5cdFx0XHRcdGRlbHRhLnkgPSAwO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRlbHRhLnggPSAxO1xyXG5cdFx0XHRcdGRlbHRhLnkgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImdcIjpcclxuXHRcdFx0Ly8gR2V0XHJcblx0XHRcdGlmICh0b3NzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRjb25zdCB5ID0gYmlnSW50QXNJbnQodG9zcy5wb3AoKSEpO1xyXG5cdFx0XHRcdGNvbnN0IHggPSBiaWdJbnRBc0ludCh0b3NzLnBvcCgpISk7XHJcblx0XHRcdFx0cHVzaEl0ZW1BdExvY2F0aW9uKHRvc3MsIHgsIHksIGNvZGVBcnJheSk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicFwiOlxyXG5cdFx0XHQvLyBQdXRcclxuXHRcdFx0aWYgKHRvc3MubGVuZ3RoID4gMikge1xyXG5cdFx0XHRcdGNvbnN0IHkgPSBiaWdJbnRBc0ludCh0b3NzLnBvcCgpISk7XHJcblx0XHRcdFx0Y29uc3QgeCA9IGJpZ0ludEFzSW50KHRvc3MucG9wKCkhKTtcclxuXHRcdFx0XHRjb25zdCBpdGVtID0gdG9zcy5wb3AoKSE7XHJcblx0XHRcdFx0aWYgKDMxIDwgaXRlbSAmJiBpdGVtIDwgMTI3KSB7XHJcblx0XHRcdFx0XHQvLyBJZiBpdGVtIGlzIGEgbnVtYmVyIHdpdGggYSBjb3JyZXNwb25kaW5nIEFTQ0lJIGNoYXJhY3RlciwgcHV0IHRoYXQgY2hhcmFjdGVyXHJcblx0XHRcdFx0XHRbc3RhdGVXaWR0aCwgc3RhdGVIZWlnaHRdID0gcHV0SXRlbU9uQm9hcmQoXHJcblx0XHRcdFx0XHRcdFN0cmluZy5mcm9tQ2hhckNvZGUoYmlnSW50QXNJbnQoaXRlbSkpLFxyXG5cdFx0XHRcdFx0XHR4LFxyXG5cdFx0XHRcdFx0XHR5LFxyXG5cdFx0XHRcdFx0XHRjb2RlQXJyYXksXHJcblx0XHRcdFx0XHRcdHN0YXRlV2lkdGgsXHJcblx0XHRcdFx0XHRcdHN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0W3N0YXRlV2lkdGgsIHN0YXRlSGVpZ2h0XSA9IHB1dEl0ZW1PbkJvYXJkKFxyXG5cdFx0XHRcdFx0XHRpdGVtLFxyXG5cdFx0XHRcdFx0XHR4LFxyXG5cdFx0XHRcdFx0XHR5LFxyXG5cdFx0XHRcdFx0XHRjb2RlQXJyYXksXHJcblx0XHRcdFx0XHRcdHN0YXRlV2lkdGgsXHJcblx0XHRcdFx0XHRcdHN0YXRlSGVpZ2h0LFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiQFwiOlxyXG5cdFx0XHQvLyBSZW1vdmUgY3VycmVudCBwb2ludGVyXHJcblx0XHRcdGlmIChwb2ludGVycy5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0XHRyZXR1cm4gW0luc3RydWN0aW9uUmVzdWx0LlN0b3BwZWQsIG91dHB1dENvbnRlbnQsIHN0YXRlV2lkdGgsIHN0YXRlSGVpZ2h0XTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoc3RhdGVTaG93bikge1xyXG5cdFx0XHRcdFx0dXBkYXRlUG9pbnRlckluZGV4KHBvaW50ZXJJbmRleCwgaXAueCwgaXAueSwgZmFsc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwb2ludGVycy5zcGxpY2UocG9pbnRlcklkLCAxKTtcclxuXHRcdFx0XHRwb2ludGVyc1N0cmluZ21vZGUuc3BsaWNlKHBvaW50ZXJJZCwgMSk7XHJcblx0XHRcdFx0c3RhY2tzLnNwbGljZShwb2ludGVySWQsIDEpO1xyXG5cdFx0XHRcdHJldHVybiBbSW5zdHJ1Y3Rpb25SZXN1bHQuRGVsZXRlZFBvaW50ZXIsIG91dHB1dENvbnRlbnQsIHN0YXRlV2lkdGgsIHN0YXRlSGVpZ2h0XTtcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBcIm5cIjpcclxuXHRcdFx0Ly8gQ2xlYXIgVE9TU1xyXG5cdFx0XHR0b3NzLnNwbGljZSgwKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwie1wiOlxyXG5cdFx0XHQvLyBCZWdpbiBibG9ja1xyXG5cdFx0XHRjb25zdCBuZXdUb3NzOiBiaWdpbnRbXSA9IFtdO1xyXG5cdFx0XHRpZiAodG9zcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Y29uc3QgbiA9IGJpZ0ludEFzSW50KHRvc3MucG9wKCkhKTtcclxuXHRcdFx0XHQvLyBNb3ZlIHRoZSB0b3AgbiBpdGVtcyB0byB0aGUgbmV3IFRPU1NcclxuXHRcdFx0XHRpZiAodG9zcy5sZW5ndGggPj0gbikge1xyXG5cdFx0XHRcdFx0bmV3VG9zcy5wdXNoKC4uLnRvc3Muc3BsaWNlKHRvc3MubGVuZ3RoIC0gbikpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRuZXdUb3NzLnB1c2goLi4ubmV3IEFycmF5PGJpZ2ludD4obiAtIHRvc3MubGVuZ3RoKS5maWxsKFpFUk8pLmNvbmNhdCh0b3NzLnNwbGljZSgwKSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRzdGFja3NbcG9pbnRlcklkXS5wdXNoKG5ld1Rvc3MpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ9XCI6XHJcblx0XHRcdC8vIEVuZCBibG9ja1xyXG5cdFx0XHRpZiAoc3RhY2tzW3BvaW50ZXJJZF0ubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdC8vIFRyYW5zZmVyIHRvIFNPU1NcclxuXHRcdFx0XHRpZiAodG9zcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRjb25zdCBzb3NzID0gc3RhY2tzW3BvaW50ZXJJZF1bc3RhY2tzW3BvaW50ZXJJZF0ubGVuZ3RoIC0gMl07XHJcblx0XHRcdFx0XHRjb25zdCBuID0gYmlnSW50QXNJbnQodG9zcy5wb3AoKSEpO1xyXG5cdFx0XHRcdFx0aWYgKHRvc3MubGVuZ3RoID49IG4pIHtcclxuXHRcdFx0XHRcdFx0c29zcy5zcGxpY2UuYXBwbHkoc29zcywgW3Nvc3MubGVuZ3RoLCAwLCAuLi50b3NzLnNwbGljZSh0b3NzLmxlbmd0aCAtIG4pXSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzb3NzLnNwbGljZS5hcHBseShzb3NzLCBbXHJcblx0XHRcdFx0XHRcdFx0c29zcy5sZW5ndGgsXHJcblx0XHRcdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdFx0XHQuLi5uZXcgQXJyYXk8YmlnaW50PihuIC0gdG9zcy5sZW5ndGgpLmZpbGwoWkVSTykuY29uY2F0KHRvc3MpLFxyXG5cdFx0XHRcdFx0XHRdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3RhY2tzW3BvaW50ZXJJZF0ucG9wKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwidVwiOlxyXG5cdFx0XHQvLyBTdGFjayB1bmRlciBzdGFja1xyXG5cdFx0XHRpZiAodG9zcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0bGV0IG4gPSBiaWdJbnRBc0ludCh0b3NzLnBvcCgpISk7XHJcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcclxuXHRcdFx0XHRcdGNvbnN0IGl0ZW0gPSBzdGFja3NbcG9pbnRlcklkXVtzdGFja3NbcG9pbnRlcklkXS5sZW5ndGggLSAyXS5wb3AoKTtcclxuXHRcdFx0XHRcdHRvc3MucHVzaChpdGVtID09PSB1bmRlZmluZWQgPyBaRVJPIDogaXRlbSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInhcIjpcclxuXHRcdFx0aWYgKHRvc3MubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdGRlbHRhLnkgPSBiaWdJbnRBc0ludCh0b3NzLnBvcCgpISk7XHJcblx0XHRcdFx0ZGVsdGEueCA9IGJpZ0ludEFzSW50KHRvc3MucG9wKCkhKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJbXCI6IHtcclxuXHRcdFx0Ly8gVHVybiBsZWZ0XHJcblx0XHRcdGNvbnN0IHggPSBkZWx0YS54O1xyXG5cdFx0XHRjb25zdCB5ID0gZGVsdGEueTtcclxuXHRcdFx0ZGVsdGEueCA9IC15O1xyXG5cdFx0XHRkZWx0YS55ID0geDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRjYXNlIFwiXVwiOiB7XHJcblx0XHRcdC8vIFR1cm4gcmlnaHRcclxuXHRcdFx0Y29uc3QgeCA9IGRlbHRhLng7XHJcblx0XHRcdGNvbnN0IHkgPSBkZWx0YS55O1xyXG5cdFx0XHRkZWx0YS54ID0geTtcclxuXHRcdFx0ZGVsdGEueSA9IC14O1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgXCJ3XCI6XHJcblx0XHRcdC8vIENvbXBhcmUgYW5kIHR1cm5cclxuXHRcdFx0aWYgKHRvc3MubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdGNvbnN0IGIgPSB0b3NzLnBvcCgpITtcclxuXHRcdFx0XHRjb25zdCBhID0gdG9zcy5wb3AoKSE7XHJcblx0XHRcdFx0aWYgKGEgPCBiKSB7XHJcblx0XHRcdFx0XHRjb25zdCB4ID0gZGVsdGEueDtcclxuXHRcdFx0XHRcdGNvbnN0IHkgPSBkZWx0YS55O1xyXG5cdFx0XHRcdFx0ZGVsdGEueCA9IC15O1xyXG5cdFx0XHRcdFx0ZGVsdGEueSA9IHg7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChhID4gYikge1xyXG5cdFx0XHRcdFx0Y29uc3QgeCA9IGRlbHRhLng7XHJcblx0XHRcdFx0XHRjb25zdCB5ID0gZGVsdGEueTtcclxuXHRcdFx0XHRcdGRlbHRhLnggPSB5O1xyXG5cdFx0XHRcdFx0ZGVsdGEueSA9IC14O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBJZiB0aGV5J3JlIHRoZSBzYW1lLCBjb250aW51ZSBzdHJhaWdodFxyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInRcIjpcclxuXHRcdFx0Ly8gTmV3IHBvaW50ZXJcclxuXHRcdFx0Y29uc3QgbmV3U09TUzogYmlnaW50W11bXSA9IFtdO1xyXG5cdFx0XHRmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrc1twb2ludGVySWRdKSB7XHJcblx0XHRcdFx0bmV3U09TUy5wdXNoKHN0YWNrLnNsaWNlKCkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHBvaW50ZXJzLnNwbGljZShwb2ludGVySWQsIDAsIHtcclxuXHRcdFx0XHRpcDogeyB4OiBpcC54LCB5OiBpcC55IH0sXHJcblx0XHRcdFx0ZGVsdGE6IHsgeDogLWRlbHRhLngsIHk6IC1kZWx0YS55IH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRwb2ludGVyc1N0cmluZ21vZGUuc3BsaWNlKHBvaW50ZXJJZCwgMCwgZmFsc2UpO1xyXG5cdFx0XHRzdGFja3Muc3BsaWNlKHBvaW50ZXJJZCwgMCwgbmV3U09TUyk7XHJcblx0XHRcdHJldHVybiBbSW5zdHJ1Y3Rpb25SZXN1bHQuTmV3UG9pbnRlciwgb3V0cHV0Q29udGVudCwgc3RhdGVXaWR0aCwgc3RhdGVIZWlnaHRdO1xyXG5cdFx0Y2FzZSBcIidcIjpcclxuXHRcdFx0Ly8gRmV0Y2ggY2hhcmFjdGVyXHJcblx0XHRcdGlmIChzdGF0ZVNob3duKSB7XHJcblx0XHRcdFx0dXBkYXRlUG9pbnRlckluZGV4KHBvaW50ZXJJbmRleCwgaXAueCwgaXAueSwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlwLnggPSAoaXAueCArIGRlbHRhLngpICUgc3RhdGVXaWR0aDtcclxuXHRcdFx0aXAueSA9IChpcC55ICsgZGVsdGEueSkgJSBzdGF0ZUhlaWdodDtcclxuXHRcdFx0aWYgKGlwLnggPCAwKSB7XHJcblx0XHRcdFx0aXAueCA9IHN0YXRlV2lkdGggKyBpcC54O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpcC55IDwgMCkge1xyXG5cdFx0XHRcdGlwLnkgPSBzdGF0ZUhlaWdodCArIGlwLnk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHN0YXRlU2hvd24pIHtcclxuXHRcdFx0XHR1cGRhdGVQb2ludGVySW5kZXgocG9pbnRlckluZGV4LCBpcC54LCBpcC55LCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRwdXNoSXRlbUF0TG9jYXRpb24odG9zcywgaXAueCwgaXAueSwgY29kZUFycmF5KTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic1wiOlxyXG5cdFx0XHQvLyBTdG9yZSBjaGFyYWN0ZXJcclxuXHRcdFx0aWYgKHN0YXRlU2hvd24pIHtcclxuXHRcdFx0XHR1cGRhdGVQb2ludGVySW5kZXgocG9pbnRlckluZGV4LCBpcC54LCBpcC55LCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aXAueCA9IChpcC54ICsgZGVsdGEueCkgJSBzdGF0ZVdpZHRoO1xyXG5cdFx0XHRpcC55ID0gKGlwLnkgKyBkZWx0YS55KSAlIHN0YXRlSGVpZ2h0O1xyXG5cdFx0XHRpZiAoaXAueCA8IDApIHtcclxuXHRcdFx0XHRpcC54ID0gc3RhdGVXaWR0aCArIGlwLng7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGlwLnkgPCAwKSB7XHJcblx0XHRcdFx0aXAueSA9IHN0YXRlSGVpZ2h0ICsgaXAueTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodG9zcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Y29uc3QgaXRlbSA9IHRvc3MucG9wKCkhO1xyXG5cdFx0XHRcdGlmICgzMSA8IGl0ZW0gJiYgaXRlbSA8IDEyNykge1xyXG5cdFx0XHRcdFx0W3N0YXRlV2lkdGgsIHN0YXRlSGVpZ2h0XSA9IHB1dEl0ZW1PbkJvYXJkKFxyXG5cdFx0XHRcdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKGJpZ0ludEFzSW50KGl0ZW0pKSxcclxuXHRcdFx0XHRcdFx0aXAueCxcclxuXHRcdFx0XHRcdFx0aXAueSxcclxuXHRcdFx0XHRcdFx0Y29kZUFycmF5LFxyXG5cdFx0XHRcdFx0XHRzdGF0ZVdpZHRoLFxyXG5cdFx0XHRcdFx0XHRzdGF0ZUhlaWdodCxcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFtzdGF0ZVdpZHRoLCBzdGF0ZUhlaWdodF0gPSBwdXRJdGVtT25Cb2FyZChcclxuXHRcdFx0XHRcdFx0aXRlbSxcclxuXHRcdFx0XHRcdFx0aXAueCxcclxuXHRcdFx0XHRcdFx0aXAueSxcclxuXHRcdFx0XHRcdFx0Y29kZUFycmF5LFxyXG5cdFx0XHRcdFx0XHRzdGF0ZVdpZHRoLFxyXG5cdFx0XHRcdFx0XHRzdGF0ZUhlaWdodCxcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChzdGF0ZVNob3duKSB7XHJcblx0XHRcdFx0dXBkYXRlUG9pbnRlckluZGV4KHBvaW50ZXJJbmRleCwgaXAueCwgaXAueSwgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiclwiOlxyXG5cdFx0XHQvLyBSZWZsZWN0XHJcblx0XHRcdGRlbHRhLnggKj0gLTE7XHJcblx0XHRcdGRlbHRhLnkgKj0gLTE7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdC8vIEVuZCBvZiB0aGUgbWFpbiBjYXNlc1xyXG5cclxuXHRcdGNhc2UgXCIgXCI6XHJcblx0XHRcdC8vIFNob3VsZCBvbmx5IGhhcHBlbiBhdCB0aGUgdmVyeSBiZWdpbm5pbmcsIG90aGVyd2lzZSB3ZSdkIGhhdmUgc2tpcHBlZCB0aGlzIHBvc2l0aW9uXHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHQvLyBJZiB3ZSBtYWRlIGl0IG91dCBvZiB0aGUgc3dpdGNoIHN0YXRlbWVudCwgY29udGludWVcclxuXHRyZXR1cm4gW0luc3RydWN0aW9uUmVzdWx0LkNvbnRpbnVlLCBvdXRwdXRDb250ZW50LCBzdGF0ZVdpZHRoLCBzdGF0ZUhlaWdodF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hJdGVtQXRMb2NhdGlvbih0b3NzOiBiaWdpbnRbXSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvZGVBcnJheTogKGJpZ2ludCB8IHN0cmluZylbXVtdKTogdm9pZCB7XHJcblx0aWYgKGNvZGVBcnJheVt5XSA9PT0gdW5kZWZpbmVkIHx8IGNvZGVBcnJheVt5XVt4XSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHQvLyBQdXNoIGEgc3BhY2VcclxuXHRcdHRvc3MucHVzaChCaWdJbnQoMzIpKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3QgaXRlbSA9IGNvZGVBcnJheVt5XVt4XTtcclxuXHRcdGlmICh0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHR0b3NzLnB1c2goQmlnSW50KGl0ZW0uY2hhckNvZGVBdCgwKSkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dG9zcy5wdXNoKGl0ZW0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcHV0SXRlbU9uQm9hcmQoXHJcblx0aXRlbTogYmlnaW50IHwgc3RyaW5nLFxyXG5cdHg6IG51bWJlcixcclxuXHR5OiBudW1iZXIsXHJcblx0Y29kZUFycmF5OiAoYmlnaW50IHwgc3RyaW5nKVtdW10sXHJcblx0c3RhdGVXaWR0aDogbnVtYmVyLFxyXG5cdHN0YXRlSGVpZ2h0OiBudW1iZXIsXHJcbik6IFtudW1iZXIsIG51bWJlcl0ge1xyXG5cdGlmICh4IDwgMCB8fCB5IDwgMCkge1xyXG5cdFx0cmV0dXJuIFtzdGF0ZVdpZHRoLCBzdGF0ZUhlaWdodF07XHJcblx0fVxyXG5cdGlmIChjb2RlQXJyYXlbeV0gPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0Ly8gQWRkIG1vcmUgcm93c1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0geSAtIHN0YXRlSGVpZ2h0OyBpKyspIHtcclxuXHRcdFx0Y29kZUFycmF5LnB1c2goW10pO1xyXG5cdFx0fVxyXG5cdFx0c3RhdGVIZWlnaHQgPSBjb2RlQXJyYXkubGVuZ3RoO1xyXG5cdH1cclxuXHRpZiAoY29kZUFycmF5W3ldW3hdID09PSB1bmRlZmluZWQpIHtcclxuXHRcdC8vIEFkZCBtb3JlIGNvbHVtbnMgdG8gY3VycmVudCByb3dcclxuXHRcdGNvZGVBcnJheVt5XS5wdXNoKC4uLm5ldyBBcnJheTxzdHJpbmcgfCBiaWdpbnQ+KHggLSBjb2RlQXJyYXlbeV0ubGVuZ3RoICsgMSkuZmlsbChcIiBcIikpO1xyXG5cdFx0c3RhdGVXaWR0aCA9IE1hdGgubWF4KHN0YXRlV2lkdGgsIGNvZGVBcnJheVt5XS5sZW5ndGgpO1xyXG5cdH1cclxuXHRjb2RlQXJyYXlbeV1beF0gPSBpdGVtO1xyXG5cdHJldHVybiBbc3RhdGVXaWR0aCwgc3RhdGVIZWlnaHRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiaWdJbnRBc0ludChuOiBiaWdpbnQpIHtcclxuXHRpZiAobiA8IC1OdW1iZXIuTUFYX1NBRkVfSU5URUdFUikge1xyXG5cdFx0cmV0dXJuIC1OdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuXHR9IGVsc2UgaWYgKG4gPiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikge1xyXG5cdFx0cmV0dXJuIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gcGFyc2VJbnQobi50b1N0cmluZygxMCkpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQXJpdGhtZXRpYyh0b3NzOiBiaWdpbnRbXSwgb3A6IChhOiBiaWdpbnQsIGI6IGJpZ2ludCkgPT4gYmlnaW50KTogdm9pZCB7XHJcblx0aWYgKHRvc3MubGVuZ3RoID4gMSkge1xyXG5cdFx0Y29uc3QgYiA9IHRvc3MucG9wKCkhO1xyXG5cdFx0Y29uc3QgYSA9IHRvc3MucG9wKCkhO1xyXG5cdFx0dG9zcy5wdXNoKG9wKGEsIGIpKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIENvbG9ycyB0byBkaXNwbGF5IGluc3RydWN0aW9uc1xyXG5jb25zdCBjb2xvckNvbnN0ID0gXCJibGFja1wiO1xyXG5jb25zdCBjb2xvck9wID0gXCJibHVlXCI7XHJcbmNvbnN0IGNvbG9yTW92ZSA9IFwibGltZWdyZWVuXCI7XHJcbmNvbnN0IGNvbG9ySU8gPSBcIiNjYzAwZmZcIjtcclxuY29uc3QgY29sb3JTdGFjayA9IFwib3JhbmdlXCI7XHJcbmNvbnN0IGNvbG9yUXVpdCA9IFwicmVkXCI7XHJcbmNvbnN0IGNvbG9yU3RvcmFnZSA9IFwiY3lhblwiO1xyXG5cclxuY29uc3QgaW5zdHJ1Y3Rpb25Db2xvclRhYmxlOiB7IFtjaGFyOiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuXHQvLyBDb25zdGFudHNcclxuXHRcIjBcIjogY29sb3JDb25zdCxcclxuXHRcIjFcIjogY29sb3JDb25zdCxcclxuXHRcIjJcIjogY29sb3JDb25zdCxcclxuXHRcIjNcIjogY29sb3JDb25zdCxcclxuXHRcIjRcIjogY29sb3JDb25zdCxcclxuXHRcIjVcIjogY29sb3JDb25zdCxcclxuXHRcIjZcIjogY29sb3JDb25zdCxcclxuXHRcIjdcIjogY29sb3JDb25zdCxcclxuXHRcIjhcIjogY29sb3JDb25zdCxcclxuXHRcIjlcIjogY29sb3JDb25zdCxcclxuXHRhOiBjb2xvckNvbnN0LFxyXG5cdGI6IGNvbG9yQ29uc3QsXHJcblx0YzogY29sb3JDb25zdCxcclxuXHRkOiBjb2xvckNvbnN0LFxyXG5cdGU6IGNvbG9yQ29uc3QsXHJcblx0ZjogY29sb3JDb25zdCxcclxuXHQvLyBwb3AgLT4gb3BlcmF0aW9uIC0+IHB1c2hcclxuXHRcIitcIjogY29sb3JPcCxcclxuXHRcIi1cIjogY29sb3JPcCxcclxuXHRcIipcIjogY29sb3JPcCxcclxuXHRcIi9cIjogY29sb3JPcCxcclxuXHRcIiVcIjogY29sb3JPcCxcclxuXHRcIiFcIjogY29sb3JPcCxcclxuXHRcImBcIjogY29sb3JPcCxcclxuXHQvLyBNb3ZlbWVudFxyXG5cdFwiPFwiOiBjb2xvck1vdmUsXHJcblx0XCJeXCI6IGNvbG9yTW92ZSxcclxuXHRcIj5cIjogY29sb3JNb3ZlLFxyXG5cdHY6IGNvbG9yTW92ZSxcclxuXHRcIj9cIjogY29sb3JNb3ZlLFxyXG5cdFwi4oC9XCI6IGNvbG9yTW92ZSxcclxuXHRfOiBjb2xvck1vdmUsXHJcblx0XCJ8XCI6IGNvbG9yTW92ZSxcclxuXHRcIiNcIjogY29sb3JNb3ZlLFxyXG5cdHI6IGNvbG9yTW92ZSxcclxuXHR4OiBjb2xvck1vdmUsXHJcblx0XCJbXCI6IGNvbG9yTW92ZSxcclxuXHRcIl1cIjogY29sb3JNb3ZlLFxyXG5cdHc6IGNvbG9yTW92ZSxcclxuXHQvLyBTdGFjayBpbnN0cnVjdGlvbnNcclxuXHRcIjpcIjogY29sb3JTdGFjayxcclxuXHRcIlxcXFxcIjogY29sb3JTdGFjayxcclxuXHQkOiBjb2xvclN0YWNrLFxyXG5cdG46IGNvbG9yU3RhY2ssXHJcblx0XCJ7XCI6IGNvbG9yU3RhY2ssXHJcblx0XCJ9XCI6IGNvbG9yU3RhY2ssXHJcblx0dTogY29sb3JTdGFjayxcclxuXHQvLyBJL08oLWlzaClcclxuXHRcIi5cIjogY29sb3JJTyxcclxuXHRcIixcIjogY29sb3JJTyxcclxuXHRcIiZcIjogY29sb3JJTyxcclxuXHRcIn5cIjogY29sb3JJTyxcclxuXHQnXCInOiBjb2xvcklPLFxyXG5cdFwiJ1wiOiBjb2xvcklPLFxyXG5cdHM6IGNvbG9ySU8sXHJcblx0Ly8gUXVpdFxyXG5cdHE6IGNvbG9yUXVpdCxcclxuXHRcIkBcIjogY29sb3JRdWl0LFxyXG5cdC8vIFN0b3JhZ2VcclxuXHRnOiBjb2xvclN0b3JhZ2UsXHJcblx0cDogY29sb3JTdG9yYWdlLFxyXG5cdC8vIE1pc2NcclxuXHR0OiBcIm1hZ2VudGFcIixcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFByb3BzV2l0aG91dFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2hldnJvblBuZyBmcm9tIFwiLi4vaW1hZ2VzL2NoZXZyb24ucG5nXCI7XHJcbmltcG9ydCBjaGV2cm9uV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2NoZXZyb24ud2VicFwiO1xyXG5cclxuY29uc3QgQmVmdW5nZUV4YW1wbGVzOiBSZWFjdC5GQzxFeGFtcGxlc1Byb3BzPiA9ICh7IHNldElucHV0VGV4dEFuZFN0YXRlIH0pID0+IHtcclxuXHRjb25zdCBbZXhwYW5kZWQsIHRvZ2dsZUV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtleHBhbmRlZCA/IFwiZXhhbXBsZXNfZXhwYW5kZWRcIiA6IFwiZXhhbXBsZXNfY29sbGFwc2VkXCJ9PlxyXG5cdFx0XHR7TWFpbkJ1dHRvbihleHBhbmRlZCwgdG9nZ2xlRXhwYW5kZWQpfVxyXG5cdFx0XHR7ZXhwYW5kZWQgPyAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZCBmaXRfY29udGVudCBmbGV4XCI+XHJcblx0XHRcdFx0XHR7YnVpbGRCdXR0b24oXHJcblx0XHRcdFx0XHRcdFwiaGVsbG9Xb3JsZFwiLFxyXG5cdFx0XHRcdFx0XHRcIkhlbGxvIFdvcmxkIVwiLFxyXG5cdFx0XHRcdFx0XHRzZXRJbnB1dFRleHRBbmRTdGF0ZSxcclxuXHRcdFx0XHRcdFx0YFwiIWRscm93IG9sbGVIXCJ2LF9AXHJcbiAgICAgICAgICAgICAgPjpeYCxcclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHR7YnVpbGRCdXR0b24oXHJcblx0XHRcdFx0XHRcdFwiZmFjdG9yaWFsXCIsXHJcblx0XHRcdFx0XHRcdFwiRmFjdG9yaWFsXCIsXHJcblx0XHRcdFx0XHRcdHNldElucHV0VGV4dEFuZFN0YXRlLFxyXG5cdFx0XHRcdFx0XHRgJjo+MDBwdlxyXG4gICogICAxXHJcbiAgZyAgIC1cclxuICAwICAgOlxyXG4uQF4wIDpfMDBnYCxcclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHR7YnVpbGRCdXR0b24oXHJcblx0XHRcdFx0XHRcdFwiZmFjdG9yXCIsXHJcblx0XHRcdFx0XHRcdFwiRmFjdG9yXCIsXHJcblx0XHRcdFx0XHRcdHNldElucHV0VGV4dEFuZFN0YXRlLFxyXG5cdFx0XHRcdFx0XHRgJjouXCIgPVwiLCw6diA7IEZhY3RvcnMgYW4gaW50ZWdlclxyXG52ICBfdiNcXGAwOjxfMC5AXHJcbiAtMTA8ICAgIF4qLTEwXFxcXFxyXG4+MDBwPjAwZzEtI3ZfPjojLl9AXHJcbl4vXFxcXGcwMDo8ICAgMlxyXG4gICAgID4gICAxK3ZcclxuICAgICBeX14jJTw6XHJcbiAgICAgICAgICBcXFxcMFxyXG4gICAgICAgICAgZzBcclxuICAgICAgICAgIF48YCxcclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHR7YnVpbGRCdXR0b24oXHJcblx0XHRcdFx0XHRcdFwiYmlub21pYWxcIixcclxuXHRcdFx0XHRcdFx0XCJCaW5vbWlhbFwiLFxyXG5cdFx0XHRcdFx0XHRzZXRJbnB1dFRleHRBbmRTdGF0ZSxcclxuXHRcdFx0XHRcdFx0YD4gICAgICAgICAgICBhICAgICAgICAgNCAgICAgICAgIHZcclxuIGNhbGN1bGF0ZXMgbl4gY2hvb3NlIGteXHJcbnYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgbWFrZXMgaz5uLWtcclxuPjoxYWEqcCBcXFxcIDowYWEqcCBcXFxcIC06IDFhYSpnIFxcXFxcXGAjdl8gMWFhKmcyYXZcclxuIG4tayEgICAgICAgICAgICAgICAgICAgIHZwKmFhMjx2cCphYTFwKmE8XHJcbnY6ZyphYTIgICAgIHR2IyAgICAgdHYjICA8ICAgICAgPFxyXG4+M2FhKnAxLTp2ICAgIHY6ZyphYTA8ICAgICAgICA+MTZhYSpwQFxyXG5eICpnKmFhMzpfdiAgID40YWEqcDoxYWEqZzErLXZcclxuICAgQHAqYWE1MTwgICBeICogZyphYTQgOiAtMSBfXlxyXG48diAtMSAgZyphYTUgPFxyXG4kPjZhYSpnIDEtdlxyXG5eICAgICAgX3YjPFxyXG5eICAgICAgIF80YWEqZzNhYSpnLy5xYCxcclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHR7YnVpbGRCdXR0b24oXHJcblx0XHRcdFx0XHRcdFwicGlcIixcclxuXHRcdFx0XHRcdFx0XCJQaVwiLFxyXG5cdFx0XHRcdFx0XHRzZXRJbnB1dFRleHRBbmRTdGF0ZSxcclxuXHRcdFx0XHRcdFx0YDsgICAgICAgICAgICAgIDUgICAgICAgICAgICAgICAgO3Y+NzQqIDM4MypwID4wOj40NDYqZ1xcXFxcXGAjdl8zODMqZzErMzgzKnAwMDgzKnAxLTp2XHJcbjsgIGNhbGN1bGF0ZXMgbl4gZGlnaXRzIG9mIHBpICAgOyAgICAqLS0tLSogICB2LSAxZyozODM6Ojx2IGcqMzgwZy0xZyozODMgPHAqODMxPFxyXG47ICB3aXRoIHRoZSBzcGlnb3QgYWxnb3JpdGhtICAgIDsgbiAgfCAtPiB8ICAgPmcgYSpcXFxcMzgzKmd2Pis6MTM4KmcyZCpnOjAwdl5fdlxyXG47ICBkZXNjcmliZWQgaW4gWzFdICAgICAgICAgICAgIDsgICAgfGxvb3B8ICAgICBeIDogKzEgcCA8djBwZyozODNnKjM4MSVwPCArblxyXG52IDFwKjY0NjAgcC0xKjU1NDogLzMqYSBwLTEqNTUyOiA8cCAgKi0tLS0qICAgICAgICAgICAgICAgPjBnLzEzOCpnNTUqZyowdiAxMFxyXG4+IDA1NSpwIDEwPiswMHA6MDBnXFxgI3ZfYTBkMipwMjA5MypediAgICAgICAgICAgICAgIHAqNjQ2KzFnKjY0Njx2KjM4MXAqMzg8IDpjXHJcbnYqZDJcXFxcKzEqMnAgKjU1Ojo6OmcwMDwgICAgICAgICB2X3YjIFxcYFxcXFxnKjY0Njo8IDEsOC4rMWcqMmM1PDsxMDsgbj5nMS06MTM4KnAgXjJcclxuPnA6MlxcXFwzOSpwMV4gICAgICAgdnAqNjQ2MXAqNjQ1MD4jPCAgICAwLjgsMSteIHYgICFnKjY0NiBfXiMtYSBfXiMtIDkgOiBnICogIDxcclxuNTQ2KnAxNjQ2KnB2ICAgICAgPCAgICAgICAgICAgICAgICA8ICA+LTJjMipwfD4jdl81NDYqZy44LDE+OjY0NipnXFxcXFxcYCN2XzA4MypnXHJcbiAgICAgICAgICAgPiAzODMqZzErMzgzKnAgICAyMmMqZzowXFxgXFxcXDFeICAgICAgQCAgPiAgICAgICAgIDFeICsxICw4LjkgPFxyXG5cclxuX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcblJlZmVyZW5jZXM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gWzFdIC0gUy4gUmFiaW5vd2l0eiBhbmQgUy4gV2Fnb24sIEEgU3BpZ290IEFsZ29yaXRobSBmb3IgdGhlIERpZ2l0cyBvZiBQaS4gIHxcclxuICAgICAgIFRoZSBBbWVyaWNhbiBNYXRoZW1hdGljYWwgTW9udGhseSwgMTAyOjE5NS0yMDMsIDE5OTUuICAgICAgICAgICAgICAgICB8XHJcbiBbMl0gLSBKLiBHaWJib25zLCBBbiB1bmJvdW5kZWQgc3BpZ290IGFsZ29yaXRobSBmb3IgdGhlIGRpZ2l0cyBvZiBQaS4gICAgICAgfFxyXG4gICAgICAgVGhlIEFtZXJpY2FuIE1hdGhlbWF0aWNhbCBNb250aGx5LCAxMTMoNCk6MzE4LTMyOCwgMjAwNi4gICAgICAgICAgICAgIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19ffGAsXHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0e2J1aWxkQnV0dG9uKFxyXG5cdFx0XHRcdFx0XHRcInF1aW5lXCIsXHJcblx0XHRcdFx0XHRcdFwiUXVpbmVcIixcclxuXHRcdFx0XHRcdFx0c2V0SW5wdXRUZXh0QW5kU3RhdGUsXHJcblx0XHRcdFx0XHRcdGAyMDBwMDEwcDB2PnbCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3ZzAxZzAwPFxyXG52wrcsOC4sOC4yPMK3Z8K3wrfCt8K3wrfCt8K3PsK3wrfCt8K3PizCtzAwZzErMDBwXlxyXG4+MDBnMTBnwrfCt8K3Xj46M2EqMistfMK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3XHJcbjpncDAxOisxZzAxcDAwMDAsYSQ8wrfCt8K3wrd8LSsyKmEzwrfCt8K3wrfCt1xyXG7Ct8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrdAwrfCt8K3wrfCt8K3wrfCt8K3wrfCt1xyXG7Ct8K3wrfCt8K3wrfCt1RoaXPCt2lzwrdhwrdzaW1wbGXCt3F1aW5lwrfCt8K3wrfCt8K3wrdcclxuwrfCt8K3wrfCtyhzZWxmLXJlcHJvZHVjaW5nwrdwcm9ncmFtKcK3wrfCt8K3wrdcclxuwrfCt0l0wrdpc8K3cXVpdGXCt2Vhc3nCt3Rvwrd3cml0ZcK3YcK3cXVpbmXCt1xyXG5pbsK3YmVmdW5nZSzCt2R1ZcK3dG/Ct2l0c8K3aW50cm9zcGVjdGl2ZVxyXG5uYXR1cmUuwrdUaGlzwrdvbmXCt3ByaW50c8K3aXRzZWxmwrd1bnRpbFxyXG5pdMK3ZW5jb3VudGVyc8K3d2hpdGVzcGFjZSzCt2hlbmNlwrd0aGXCt1xyXG5kb3RzwrdldmVyeXdoZXJlLsK3VGhlwrdhbGdvcml0aG3Ct2lzOsK3wrdcclxuwrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3XHJcbjAuwrdXcml0ZcK3b3V0wrd0aGXCt2ZpcnN0wrd0d2/Ct251bWJlcnMswrdcclxuwrfCt8K3c2luY2XCt3RoZXNlwrdjZWxsc8K3YXJlwrdsYXRlcsK3dXNlZMK3XHJcbsK3wrfCt2FzwrdzdG9yYWdlwrdsb2NhdGlvbnMuwrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3XHJcbjEuwrdJbml0aWFsaXplwrd4PTIseT0wLsK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrdcclxuMi7Ct0dldMK3cG9zaXRpb27Ctyh4LHkpLsK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrdcclxuMy7Ct0lmwrdpdMK3aXPCt2VtcHR5OsK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt1xyXG7Ct8K3wrfCt2EuwrdXcml0ZcK3YcK3bmV3wrdsaW5lLsK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt1xyXG7Ct8K3wrfCt2IuwrdJbmNyZW1lbnTCt3nCt2FuZMK3c2V0wrd4PTAuwrfCt8K3wrfCt1xyXG7Ct8K3wrfCt2MuwrdHZXTCtyh4LHkpwrdhZ2Fpbi7Ct8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt1xyXG7Ct8K3wrfCt2QuwrdJZsK3aXTCt2lzwrdzdGlsbMK3ZW1wdHkswrdoYWx0LsK3wrdcclxuNC7Ct1dyaXRlwrdpdMK3b3V0LsK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrdcclxuNS7Ct0luY3JlbWVudMK3eC7Ct8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrdcclxuNi7Ct0dvwrd0b8K3c3RlcMK3Mi7Ct8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3YCxcclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkgOiBudWxsfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGJ1aWxkQnV0dG9uKFxyXG5cdGlkOiBzdHJpbmcsXHJcblx0dGV4dDogc3RyaW5nLFxyXG5cdHNldElucHV0VGV4dEFuZFN0YXRlOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkLFxyXG5cdGNvZGU6IHN0cmluZyxcclxuKTogSlNYLkVsZW1lbnQge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbl9jb250YWluZXJcIj5cclxuXHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdGlkPXtpZH1cclxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRJbnB1dFRleHRBbmRTdGF0ZShjb2RlKTtcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e3RleHR9XHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWFpbkJ1dHRvbihcclxuXHRleHBhbmRlZDogYm9vbGVhbixcclxuXHR0b2dnbGVFeHBhbmRlZDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+LFxyXG4pOiBKU1guRWxlbWVudCB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxidXR0b24gaWQ9XCJleGFtcGxlc0J1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUV4cGFuZGVkKCFleHBhbmRlZCl9PlxyXG5cdFx0XHQ8ZGl2IGlkPVwiY2hldnJvbkNvbnRhaW5lclwiIGNsYXNzTmFtZT17XCJmbG9hdF9sZWZ0XCIgKyAoZXhwYW5kZWQgPyBcIiB1cHNpZGVkb3duXCIgOiBcIlwiKX0+XHJcblx0XHRcdFx0PHBpY3R1cmUgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiB9fT5cclxuXHRcdFx0XHRcdDxzb3VyY2UgdHlwZT1cImltYWdlL3dlYnBcIiBzcmNTZXQ9e2NoZXZyb25XZWJwfSAvPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e2NoZXZyb25Qbmd9IGhlaWdodD1cIjE0cHhcIiB3aWR0aD1cIjE0cHhcIiBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdDwvcGljdHVyZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdCZuYnNwO0V4YW1wbGVzXHJcblx0XHQ8L2J1dHRvbj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZWZ1bmdlRXhhbXBsZXM7XHJcblxyXG50eXBlIEV4YW1wbGVzUHJvcHMgPSBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWY8XCJkaXZcIj4gJiB7XHJcblx0c2V0SW5wdXRUZXh0QW5kU3RhdGU6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENhcmQ6IFJlYWN0LkZDPENvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcImRpdlwiPj4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubmVyX2NhcmRcIj57Y2hpbGRyZW59PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFByb3BzV2l0aG91dFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaG9tZVBuZyBmcm9tIFwiLi4vaW1hZ2VzL2hvbWUucG5nXCI7XHJcbmltcG9ydCBob21lV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2hvbWUud2VicFwiO1xyXG5pbXBvcnQgY29tcGFzc1BuZyBmcm9tIFwiLi4vaW1hZ2VzL2NvbXBhc3MucG5nXCI7XHJcbmltcG9ydCBjb21wYXNzV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2NvbXBhc3Mud2VicFwiO1xyXG5pbXBvcnQgY2hvY29QbmcgZnJvbSBcIi4uL2ltYWdlcy9jaG9jby5wbmdcIjtcclxuaW1wb3J0IGNob2NvV2VicCBmcm9tIFwiLi4vaW1hZ2VzL2Nob2NvLndlYnBcIjtcclxuaW1wb3J0IG11c2hyb29tUG5nIGZyb20gXCIuLi9pbWFnZXMvbXVzaHJvb20ucG5nXCI7XHJcbmltcG9ydCBtdXNocm9vbVdlYnAgZnJvbSBcIi4uL2ltYWdlcy9tdXNocm9vbS53ZWJwXCI7XHJcbmltcG9ydCBoZWFydFBuZyBmcm9tIFwiLi4vaW1hZ2VzL2hlYXJ0LnBuZ1wiO1xyXG5pbXBvcnQgaGVhcnRXZWJwIGZyb20gXCIuLi9pbWFnZXMvaGVhcnQud2VicFwiO1xyXG5cclxuY29uc3QgTWVudTogUmVhY3QuRkM8TWVudVByb3BzPiA9ICh7IHN0YXJ0RXhwYW5kZWQgfSkgPT4ge1xyXG5cdGNvbnN0IFtleHBhbmRlZCwgdG9nZ2xlRXhwYW5kZWRdID0gdXNlU3RhdGUoc3RhcnRFeHBhbmRlZCA/PyBmYWxzZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17ZXhwYW5kZWQgPyBcIm1lbnVfZXhwYW5kZWRcIiA6IFwibWVudV9jb2xsYXBzZWRcIn0+XHJcblx0XHRcdHtNZW51QnV0dG9uKGV4cGFuZGVkLCB0b2dnbGVFeHBhbmRlZCl9XHJcblx0XHRcdHtleHBhbmRlZCA/IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibWVudV9saXN0IGNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9cIiwgXCJIb21lXCIsIGhvbWVQbmcsIGhvbWVXZWJwKX1cclxuXHRcdFx0XHRcdFx0e01lbnVJdGVtKFwiL3Byb2JsZW1zLmh0bWxcIiwgXCJQcm9ibGVtc1wiLCBjb21wYXNzUG5nLCBjb21wYXNzV2VicCl9XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9jaG9tcC5odG1sXCIsIFwiQ2hvbXBcIiwgY2hvY29QbmcsIGNob2NvV2VicCl9XHJcblx0XHRcdFx0XHRcdHtNZW51SXRlbShcIi9iZWZ1bmdlLmh0bWxcIiwgXCJCZWZ1bmdlXCIsIG11c2hyb29tUG5nLCBtdXNocm9vbVdlYnApfVxyXG5cdFx0XHRcdFx0XHR7TWVudUl0ZW0oXCIvbWlzYy5odG1sXCIsIFwiTWlzY2VsbGFuZWFcIiwgaGVhcnRQbmcsIGhlYXJ0V2VicCl9XHJcblx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpIDogbnVsbH1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBNZW51SXRlbShyZWZlcmVuY2U6IHN0cmluZywgdGV4dDogc3RyaW5nLCBwbmc6IGFueSwgd2VicDogYW55KTogSlNYLkVsZW1lbnQge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8bGk+XHJcblx0XHRcdDxhIGNsYXNzTmFtZT1cIm1lbnVfaXRlbVwiIGhyZWY9e3JlZmVyZW5jZX0+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHQ8cGljdHVyZT5cclxuXHRcdFx0XHRcdFx0PHNvdXJjZSB0eXBlPVwiaW1hZ2Uvd2VicFwiIHNyY1NldD17d2VicH0gLz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e3BuZ30gaGVpZ2h0PVwiMTZweFwiIHdpZHRoPVwiMTZweFwiIGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHQ8L3BpY3R1cmU+XHJcblx0XHRcdFx0XHQmbmJzcDtcclxuXHRcdFx0XHRcdHt0ZXh0fVxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9saT5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZW51QnV0dG9uKFxyXG5cdGV4cGFuZGVkOiBib29sZWFuLFxyXG5cdHRvZ2dsZUV4cGFuZGVkOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4sXHJcbik6IEpTWC5FbGVtZW50IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51X2J1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUV4cGFuZGVkKCFleHBhbmRlZCl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uX2lubmVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51X2J1dHRvbl9saW5lXCIgLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfYnV0dG9uX2xpbmVcIiAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudV9idXR0b25fbGluZVwiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuXHJcbnR5cGUgTWVudVByb3BzID0gQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFwiZGl2XCI+ICZcclxuXHRQYXJ0aWFsPHtcclxuXHRcdHN0YXJ0RXhwYW5kZWQ6IGJvb2xlYW47XHJcblx0fT47XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
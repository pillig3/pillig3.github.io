"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pentris"],{

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

/***/ "./src/pentris.tsx":
/*!*************************!*\
  !*** ./src/pentris.tsx ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const react_dom_1 = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
const canvasRef = (0, react_1.createRef)();
(0, react_dom_1.render)(React.createElement("canvas", { id: "canvas", className: "full_canvas", tabIndex: 0, ref: canvasRef }), document.querySelector("#root"));
const NUM_COLUMNS = 14;
const NUM_ROWS = 20;
const TOP_MARGIN = 40;
const BACKGROUND_COLOR = "#D3EDED";
var cellHeight;
var boardWidth;
var boardLeft;
var gameOver = false;
const canvas = canvasRef.current;
const ctx = canvas.getContext("2d");
window.onresize = setCellSizeValues;
const pieces = {
    SmallI: {
        color: "cyan",
        shape: [[true], [true], [true], [true]],
    },
    SmallT: {
        color: "magenta",
        shape: [
            [true, true, true],
            [false, true, false],
        ],
    },
    SmallO: {
        color: "yellow",
        shape: [
            [true, true],
            [true, true],
        ],
    },
    SmallL: {
        color: "blue",
        shape: [
            [true, false],
            [true, false],
            [true, true],
        ],
    },
    SmallS: {
        color: "green",
        shape: [
            [false, true, true],
            [true, true, false],
        ],
    },
    F: {
        color: "red",
        shape: [
            [false, true, true],
            [true, true, false],
            [false, true, false],
        ],
    },
    I: {
        color: "orange",
        shape: [[true], [true], [true], [true], [true]],
    },
    L: {
        color: "lightyellow",
        shape: [
            [true, false],
            [true, false],
            [true, false],
            [true, true],
        ],
    },
    N: {
        color: "lightgreen",
        shape: [
            [false, true],
            [false, true],
            [true, true],
            [true, false],
        ],
    },
    P: {
        color: "lightblue",
        shape: [
            [true, true],
            [true, true],
            [true, false],
        ],
    },
    T: {
        color: "pink",
        shape: [
            [true, true, true],
            [false, true, false],
            [false, true, false],
        ],
    },
    U: {
        color: "#9f1aff",
        shape: [
            [true, false, true],
            [true, true, true],
        ],
    },
    V: {
        color: "#b3003b",
        shape: [
            [true, false, false],
            [true, false, false],
            [true, true, true],
        ],
    },
    W: {
        color: "#cc6600",
        shape: [
            [true, false, false],
            [true, true, false],
            [false, true, true],
        ],
    },
    X: {
        color: "#30b5b5",
        shape: [
            [false, true, false],
            [true, true, true],
            [false, true, false],
        ],
    },
    Y: {
        color: "#0059b3",
        shape: [
            [true, true, true, true],
            [false, true, false, false],
        ],
    },
    Z: {
        color: "#ff667d",
        shape: [
            [true, true, false],
            [false, true, false],
            [false, true, true],
        ],
    },
};
const initialPiece = randomPiece();
const state = {
    board: newMatrix(NUM_COLUMNS, NUM_ROWS, ""),
    fixedBoard: newMatrix(NUM_COLUMNS, NUM_ROWS, ""),
    currentPiece: initialPiece,
    currentPosition: [6, 0],
    currentShapeGrid: pieces[initialPiece].shape,
    nextPiece: randomPiece(),
    keysPressed: [],
    counter: 0,
    waitTime: 100,
    level: 0,
    linesCleared: 0,
    savedPiece: "",
    score: 0,
    cPressed: false,
};
function resetState() {
    const initialPiece = randomPiece();
    state.board = newMatrix(NUM_COLUMNS, NUM_ROWS, "");
    state.fixedBoard = newMatrix(NUM_COLUMNS, NUM_ROWS, "");
    state.currentPiece = initialPiece;
    state.currentPosition = [6, 0];
    state.currentShapeGrid = pieces[initialPiece].shape;
    state.nextPiece = randomPiece();
    state.keysPressed = [];
    state.counter = 0;
    state.waitTime = 100;
    state.level = 0;
    state.linesCleared = 0;
    state.savedPiece = "";
    state.score = 0;
    state.cPressed = false;
}
function transitionToNextState(overrideNextPiece = "") {
    const fullLines = getFullLines();
    if (fullLines.length > 0) {
        state.linesCleared += fullLines.length;
        switch (fullLines.length) {
            case 1:
                state.score += 40 * (state.level + 1);
                break;
            case 2:
                state.score += 100 * (state.level + 1);
                break;
            case 3:
                state.score += 300 * (state.level + 1);
                break;
            case 4:
                state.score += 1200 * (state.level + 1);
                break;
            default:
                state.score += 6000 * (state.level + 1);
                break;
        }
        if (state.linesCleared % 10 === 0) {
            state.level++;
            state.waitTime = Math.ceil(Math.max(100 - state.level * 8, 20));
        }
        removeLines(fullLines);
    }
    state.fixedBoard = copyMatrix(state.board);
    if (overrideNextPiece !== "") {
        state.currentPiece = overrideNextPiece;
    }
    else {
        state.currentPiece = state.nextPiece;
        state.nextPiece = randomPiece();
    }
    state.currentPosition = [6, 0];
    state.currentShapeGrid = copyMatrix(pieces[state.currentPiece].shape);
    state.cPressed = false;
}
function onCanvasKey(e) {
    switch (e.code) {
        case "Tab":
            e.preventDefault();
            break;
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
        case "Space":
        case "KeyX":
        case "KeyZ":
        case "KeyC":
            state.keysPressed.push(e.code);
            break;
        default:
            break;
    }
}
document.addEventListener("keydown", onCanvasKey);
function onGameOverKey(e) {
    if (e.code === "KeyR") {
        gameOver = false;
        document.removeEventListener("keydown", onGameOverKey);
        document.addEventListener("keydown", onCanvasKey);
        resetState();
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        onInitialLoad();
    }
}
function onInitialLoad() {
    setCellSizeValues();
    drawShape(state.currentShapeGrid, state.currentPosition, pieces[state.currentPiece].color);
    drawBoard();
    mainLoop();
}
function setCellSizeValues() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    if (canvas.width / canvas.height < 1.3) {
        canvas.height = canvas.width / 1.3;
    }
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    cellHeight = (canvas.height - 2 * TOP_MARGIN) / NUM_ROWS;
    boardWidth = cellHeight * NUM_COLUMNS;
    boardLeft = (canvas.width - boardWidth) / 2;
    if (gameOver) {
        drawBoard();
        drawGameOver();
    }
}
function drawBoard() {
    const edgeColor = "#737373";
    const blankColor = "black";
    for (let col = 0; col < state.board.length; col++) {
        const colArray = state.board[col];
        for (let row = 0; row < colArray.length; row++) {
            let color;
            if (colArray[row] === "") {
                color = blankColor;
            }
            else {
                color = colArray[row];
            }
            const start = [boardLeft + col * cellHeight, TOP_MARGIN + row * cellHeight];
            drawBorderedRectangle(start[0], start[1], cellHeight - 1, cellHeight - 1, edgeColor, color);
        }
    }
    const upcomingStartPos = [boardLeft + cellHeight * (NUM_COLUMNS + 1), TOP_MARGIN];
    const upcomingColor = pieces[state.nextPiece].color;
    drawSinglePieceToTheSide(upcomingStartPos, state.nextPiece, edgeColor, upcomingColor);
    if (state.savedPiece !== "") {
        const savedStartPos = [boardLeft - cellHeight * 7, TOP_MARGIN];
        const savedColor = pieces[state.savedPiece].color;
        drawSinglePieceToTheSide(savedStartPos, state.savedPiece, edgeColor, savedColor);
    }
    const scoreStartPos = [
        boardLeft + Math.floor(cellHeight * (NUM_COLUMNS + 1)),
        TOP_MARGIN + Math.floor(6 * cellHeight),
    ];
    drawBorderedRectangle(scoreStartPos[0], scoreStartPos[1], 1000, 128, BACKGROUND_COLOR, BACKGROUND_COLOR);
    ctx.font = "24px sans-serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText("Level: " + state.level, scoreStartPos[0], scoreStartPos[1]);
    ctx.fillText("Score: " + state.score, scoreStartPos[0], scoreStartPos[1] + 24 + Math.floor(cellHeight / 2));
    ctx.fillText("High Score: " + getHighScore(), scoreStartPos[0], scoreStartPos[1] + 48 + Math.floor(cellHeight));
}
function drawSinglePieceToTheSide(startPosition, piece, edgeColor, pieceColor) {
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 6; row++) {
            drawBorderedRectangle(startPosition[0] + col * cellHeight, startPosition[1] + row * cellHeight, cellHeight - 1, cellHeight - 1, BACKGROUND_COLOR, BACKGROUND_COLOR);
        }
    }
    forEachElementOfShapeGrid(pieces[piece].shape, (col, row, element) => {
        if (element) {
            drawBorderedRectangle(startPosition[0] + (col + 1) * cellHeight, startPosition[1] + (row + 1) * cellHeight, cellHeight - 1, cellHeight - 1, edgeColor, pieceColor);
        }
    });
}
function drawBorderedRectangle(xStart, yStart, width, height, borderColor, fillColor) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = borderColor;
    ctx.beginPath();
    ctx.rect(xStart, yStart, width, height);
    ctx.stroke();
    ctx.fillStyle = fillColor;
    ctx.fillRect(xStart + 1, yStart + 1, width - 2, height - 2);
}
function eraseShape(shape, position) {
    forEachElementOfShapeGrid(shape, (col, row, element) => {
        if (element) {
            state.board[position[0] + col][position[1] + row] = "";
        }
    });
}
function drawShape(shape, position, color) {
    forEachElementOfShapeGrid(shape, (col, row, element) => {
        if (element) {
            state.board[position[0] + col][position[1] + row] = color;
        }
    });
}
function drawGameOver(isHighScore = false) {
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = "white";
    ctx.fillRect(0, TOP_MARGIN + 4.5 * cellHeight, canvas.width, isHighScore ? 4 * cellHeight : 3 * cellHeight);
    ctx.globalAlpha = 1;
    ctx.font = "48px sans-serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", canvas.width / 2, TOP_MARGIN + 6 * cellHeight);
    ctx.font = "24px sans-serif";
    if (isHighScore) {
        ctx.fillText("Congratulations! You got a new high score!", canvas.width / 2, TOP_MARGIN + 7 * cellHeight);
        ctx.fillText("Press R to play again.", canvas.width / 2, TOP_MARGIN + 8 * cellHeight);
    }
    else {
        ctx.fillText("Press R to play again.", canvas.width / 2, TOP_MARGIN + 7 * cellHeight);
    }
    document.removeEventListener("keydown", onCanvasKey);
    document.addEventListener("keydown", onGameOverKey);
}
function mainLoop() {
    state.counter++;
    gameOver = false;
    let forceDown = false;
    let tryDown = true;
    if (state.keysPressed.length > 0) {
        if (state.keysPressed.indexOf("ArrowDown") >= 0) {
            moveCurrentPiece("D");
        }
        if (state.keysPressed.indexOf("ArrowLeft") >= 0) {
            moveCurrentPiece("L");
        }
        if (state.keysPressed.indexOf("ArrowRight") >= 0) {
            moveCurrentPiece("R");
        }
        if (state.keysPressed.indexOf("ArrowUp") >= 0) {
            transformCurrentPiece(1);
        }
        if (state.keysPressed.indexOf("Space") >= 0) {
            while (moveCurrentPiece("D")) {
            }
            forceDown = true;
        }
        if (state.keysPressed.indexOf("KeyX") >= 0 || state.keysPressed.indexOf("KeyZ") >= 0) {
            transformCurrentPiece(4);
        }
        if (state.keysPressed.indexOf("KeyC") >= 0 && !state.cPressed) {
            eraseShape(state.currentShapeGrid, state.currentPosition);
            const prevSavedPiece = state.savedPiece;
            state.savedPiece = state.currentPiece;
            if (prevSavedPiece !== "") {
                transitionToNextState(prevSavedPiece);
            }
            else {
                transitionToNextState();
            }
            state.cPressed = true;
            drawShape(state.currentShapeGrid, state.currentPosition, pieces[state.currentPiece].color);
            if (!moveCurrentPiece("none", false)) {
                gameOver = true;
            }
            tryDown = false;
        }
        state.keysPressed = [];
    }
    if (tryDown && (forceDown || state.counter % state.waitTime === 0)) {
        const ret = moveCurrentPiece("D");
        if (!ret) {
            transitionToNextState();
            drawShape(state.currentShapeGrid, state.currentPosition, pieces[state.currentPiece].color);
            if (!moveCurrentPiece("none", false)) {
                gameOver = true;
            }
        }
        state.counter = 0;
    }
    drawBoard();
    if (gameOver) {
        if (state.score > getHighScore()) {
            setHighScore(state.score);
            drawGameOver(true);
        }
        else {
            drawGameOver();
        }
    }
    else {
        setTimeout(mainLoop);
    }
}
function transformCurrentPiece(t) {
    const newShapeGrid = applyTransformation(t, state.currentShapeGrid);
    const [offsetX, offsetY] = getOffsetForTransformation(state.currentShapeGrid, state.currentPiece, t === 4);
    const x = state.currentPosition[0] + offsetX;
    const y = state.currentPosition[1] + offsetY;
    let conflict = false;
    forEachElementOfShapeGrid(newShapeGrid, (col, row, element) => {
        if (element) {
            const tempX = x + col;
            const tempY = y + row;
            if (tempX >= state.board.length || tempY >= state.board[0].length || tempX < 0 || tempY < 0) {
                conflict = true;
            }
            else if (state.fixedBoard[tempX][tempY] !== "") {
                conflict = true;
            }
        }
    });
    if (!conflict) {
        eraseShape(state.currentShapeGrid, state.currentPosition);
        state.currentPosition[0] = x;
        state.currentPosition[1] = y;
        state.currentShapeGrid = newShapeGrid;
        drawShape(state.currentShapeGrid, state.currentPosition, pieces[state.currentPiece].color);
    }
    return !conflict;
}
function moveCurrentPiece(direction, tryMove = true) {
    let newPos;
    switch (direction) {
        case "U":
            newPos = [state.currentPosition[0], state.currentPosition[1] - 1];
            break;
        case "D":
            newPos = [state.currentPosition[0], state.currentPosition[1] + 1];
            break;
        case "L":
            newPos = [state.currentPosition[0] - 1, state.currentPosition[1]];
            break;
        case "R":
            newPos = [state.currentPosition[0] + 1, state.currentPosition[1]];
            break;
        default:
            newPos = state.currentPosition;
            break;
    }
    let conflict = false;
    forEachElementOfShapeGrid(state.currentShapeGrid, (col, row, element) => {
        if (element) {
            const boardPos = [newPos[0] + col, newPos[1] + row];
            if (boardPos[0] >= state.board.length ||
                boardPos[1] >= state.board[0].length ||
                boardPos[0] < 0 ||
                boardPos[1] < 0) {
                conflict = true;
            }
            else if (state.fixedBoard[boardPos[0]][boardPos[1]] !== "") {
                conflict = true;
            }
        }
    });
    if (!conflict && tryMove) {
        eraseShape(state.currentShapeGrid, state.currentPosition);
        state.currentPosition = newPos;
        drawShape(state.currentShapeGrid, state.currentPosition, pieces[state.currentPiece].color);
    }
    return !conflict;
}
function applyTransformation(t, shape) {
    let newShape;
    switch (t) {
        case 0:
            return shape;
        case 1:
            newShape = newMatrix(shape[0].length, shape.length, false);
            for (let col = 0; col < shape.length; col++) {
                for (let row = 0; row < shape[0].length; row++) {
                    newShape[newShape.length - 1 - row][col] = shape[col][row];
                }
            }
            return newShape;
        case 2:
            return applyTransformation(1, applyTransformation(1, shape));
        case 3:
            return applyTransformation(1, applyTransformation(2, shape));
        case 4:
            newShape = newMatrix(shape.length, shape[0].length, false);
            for (let col = 0; col < shape.length; col++) {
                for (let row = 0; row < shape[0].length; row++) {
                    newShape[shape.length - 1 - col][row] = shape[col][row];
                }
            }
            return newShape;
        case 5:
            return applyTransformation(4, applyTransformation(1, shape));
        case 6:
            return applyTransformation(4, applyTransformation(2, shape));
        case 7:
            return applyTransformation(4, applyTransformation(3, shape));
        default:
            throw "Non-Transformation entered to applyTransformation";
    }
}
function getOffsetForTransformation(shape, piece, reflection) {
    switch (piece) {
        case "SmallI":
            if (reflection) {
                return [0, 0];
            }
            if (shape.length === 4) {
                return [1, -1];
            }
            else {
                return [-1, 1];
            }
        case "SmallL":
            if (reflection && shape.length === 2) {
                if (shape[0][1]) {
                    return [-1, 0];
                }
                else {
                    return [1, 0];
                }
            }
            else {
                return [0, 0];
            }
        case "SmallO":
            return [0, 0];
        case "SmallS":
            if (shape.length === 3) {
                return [0, 0];
            }
            else {
                return [0, 0];
            }
        case "SmallT":
            if (shape.length === 3) {
                if (reflection) {
                    return [0, 0];
                }
                if (shape[0][0]) {
                    return [0, -1];
                }
                else {
                    return [1, 0];
                }
            }
            else {
                if (shape[0][0]) {
                    if (reflection) {
                        return [-1, 0];
                    }
                    else {
                        return [-1, 1];
                    }
                }
                else {
                    if (reflection) {
                        return [1, 0];
                    }
                    else {
                        return [0, 0];
                    }
                }
            }
        case "F":
            return [0, 0];
        case "L":
            if (shape.length === 4) {
                if (reflection) {
                    return [0, 0];
                }
                return [1, -1];
            }
            else {
                if (reflection) {
                    if (shape[0][0] && shape[1][0]) {
                        if (shape[0][3]) {
                            return [-1, 0];
                        }
                        else {
                            return [1, 0];
                        }
                    }
                    else {
                        if (shape[0][0]) {
                            return [-1, 0];
                        }
                        else {
                            return [1, 0];
                        }
                    }
                }
                return [-1, 1];
            }
        case "I":
            if (reflection) {
                return [0, 0];
            }
            if (shape.length === 5) {
                return [2, -2];
            }
            else {
                return [-2, 2];
            }
        case "P":
            if (shape.length === 3) {
                if (reflection) {
                    if (!shape[0][0] || !shape[0][1]) {
                        return [1, 0];
                    }
                    else {
                        return [-1, 0];
                    }
                }
                if (!shape[0][0] || !shape[0][1]) {
                    return [1, -1];
                }
                else {
                    return [0, 0];
                }
            }
            else {
                if (reflection) {
                    return [0, 0];
                }
                if (!shape[0][0] || !shape[1][0]) {
                    return [0, 1];
                }
                else {
                    return [-1, 0];
                }
            }
        case "N":
            if (reflection) {
                return [0, 0];
            }
            if (shape.length === 4) {
                return [1, -1];
            }
            else {
                return [-1, 1];
            }
        case "U":
            if (reflection && shape.length === 2) {
                if (!shape[0][1]) {
                    return [1, 0];
                }
                else {
                    return [-1, 0];
                }
            }
            return [0, 0];
        case "T":
            return [0, 0];
        case "V":
            return [0, 0];
        case "W":
            return [0, 0];
        case "X":
            return [0, 0];
        case "Y":
            if (shape.length === 4) {
                if (reflection) {
                    return [0, 0];
                }
                return [1, -1];
            }
            else {
                if (reflection) {
                    if (!shape[0][0]) {
                        return [1, 0];
                    }
                    else {
                        return [-1, 0];
                    }
                }
                return [-1, 1];
            }
        case "Z":
            return [0, 0];
        default:
            throw "Non-piece entered to getOffsetForRotation!";
    }
}
function getFullLines() {
    const fullLines = { length: 0 };
    for (let row = 0; row < state.board[0].length; row++) {
        let fullRow = true;
        for (let col = 0; col < state.board.length; col++) {
            if (state.board[col][row] === "") {
                fullRow = false;
                break;
            }
        }
        if (fullRow) {
            fullLines[row] = true;
            fullLines.length++;
        }
    }
    return fullLines;
}
function removeLines(lines) {
    let removedLinesPassed = 0;
    const linesAdded = {};
    for (let row = state.board[0].length - 1; row > lines.length - 1; row--) {
        if (removedLinesPassed === 0 && lines[row] !== true) {
            continue;
        }
        if (lines[row] === true && linesAdded[row] !== true) {
            removedLinesPassed++;
            linesAdded[row] = true;
        }
        while (lines[row - removedLinesPassed] === true) {
            if (linesAdded[row - removedLinesPassed] !== true) {
                linesAdded[row - removedLinesPassed] = true;
            }
            else {
                console.log("!!!The unexpected happened in removeLines()!!!");
            }
            removedLinesPassed++;
        }
        for (let col = 0; col < state.board.length; col++) {
            state.board[col][row] = state.board[col][row - removedLinesPassed];
        }
    }
    for (let row = 0; row < lines.length; row++) {
        for (let col = 0; col < state.board.length; col++) {
            state.board[col][row] = "";
        }
    }
}
function forEachElementOfShapeGrid(shape, callback) {
    for (let col = 0; col < shape.length; col++) {
        for (let row = 0; row < shape[0].length; row++) {
            const element = shape[col][row];
            callback(col, row, element);
        }
    }
}
function newMatrix(columns, rows, initialValue) {
    const ary = [];
    for (let c = 0; c < columns; c++) {
        const innerAry = [];
        for (let r = 0; r < rows; r++) {
            innerAry.push(initialValue);
        }
        ary.push(innerAry);
    }
    return ary;
}
function copyMatrix(ary) {
    const newAry = [];
    for (let c = 0; c < ary.length; c++) {
        const innerAry = [];
        for (let r = 0; r < ary[0].length; r++) {
            innerAry.push(ary[c][r]);
        }
        newAry.push(innerAry);
    }
    return newAry;
}
function randomPiece() {
    const pieceNames = Object.keys(pieces);
    return pieceNames[Math.floor(Math.random() * pieceNames.length)];
}
function getHighScore() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(";");
    for (var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i];
        if (c.indexOf("highScore") == 0) {
            return parseInt(c.substring("highScore".length + 1, c.length));
        }
    }
    return 0;
}
function setHighScore(highScore) {
    var d = new Date();
    d.setTime(d.getTime() + 3650 * 24 * 60 * 60 * 1000);
    document.cookie = "highScore=" + highScore + ";";
}
onInitialLoad();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pentris.tsx"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVudHJpcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxrRkFBa0YsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxNQUFNLEtBQUssV0FBVyxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxZQUFZLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFX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QUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDL0Q7S0FDRDtJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQU1ELFNBQVMsWUFBWSxDQUFDLFNBQWlCO0lBQ3RDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3BELFFBQVEsQ0FBQyxNQUFNLEdBQUcsWUFBWSxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDbEQsQ0FBQztBQUlELGFBQWEsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3M/ZTlkNiIsIndlYnBhY2s6Ly8vLi9zcmMvcGVudHJpcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2VkZWQ7XG59XG5cbnAge1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbmRpdi5wIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG5kaXYudGl0bGUge1xuICBmb250LXNpemU6IDMycHQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBmb250LXdlaWdodDogMjUwO1xuICBtYXJnaW46IDE1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsb2F0OiBub25lO1xufVxuXG4uaW5uZXJfY2FyZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4ua2F0ZXgge1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgZm9udDogbm9ybWFsIDEuMWVtIEthVGVYX01haW4sIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtaW5kZW50OiAwO1xufVxuXG4ua2F0ZXgtZGlzcGxheSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxucGljdHVyZSA+IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNlbnRlcmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpdF9jb250ZW50IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLyoqXG4gKiBNZW51IFN0eWxpbmdcbiAqL1xuLm1lbnVfY29sbGFwc2VkIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnVfZXhwYW5kZWQge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNy41cHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1hc3BlY3QtcmF0aW86IDIvMykge1xuICAubWVudV9leHBhbmRlZCB7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlO1xuICB9XG59XG5cbi5tZW51X2J1dHRvbiB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tZW51X2J1dHRvbl9pbm5lciB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC13aWR0aDogNS43MTQyODU3MTQzcHg7XG4gIGhlaWdodDogMzQuMjg1NzE0Mjg1N3B4O1xufVxuXG4ubWVudV9idXR0b25fbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUuNzE0Mjg1NzE0M3B4O1xuICBtYXJnaW4tYm90dG9tOiA1LjcxNDI4NTcxNDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmEubWVudV9pdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hLm1lbnVfaXRlbTpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG51bC5tZW51X2xpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDhlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1hc3BlY3QtcmF0aW86IDIvMykge1xuICB1bC5tZW51X2xpc3Qge1xuICAgIG1hcmdpbi10b3A6IDU1LjcxNDI4NTcxNDNweDtcbiAgfVxufVxudWwubWVudV9saXN0ID4gbGkgPiBhID4gcCB7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG51bC5tYXRoX2xpc3QgPiBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG59XG5cbi5pbmxpbmVfY29kZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgcGFkZGluZzogMXB4IDFweDtcbn1cblxudGV4dGFyZWEuY29kZWJsb2NrIHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICB3aWR0aDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xufVxuXG5zcGFuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5zcGFuLmJsdWUge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNvbW1hbmRfdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb21tYW5kX3RhYmxlIHRoLFxuLmNvbW1hbmRfdGFibGUgdGQge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG59XG4uY29tbWFuZF90YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5jb21tYW5kX3RhYmxlIHRkIHtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5zdWJzZWN0aW9uIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5ub2Rpc3Age1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udXBzaWRlZG93biB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG59XG5cbi5mbG9hdF9sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmNhbnZhcy5mdWxsX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ub3BhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGlzdF9ub19zdHlsZSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBOztFQUVDLGtNQUFBO0VBRUEsU0FBQTtBQUxEOztBQVFBO0VBQ0MsV0FBQTtFQUNBLHlCQUFBO0FBTEQ7O0FBUUE7RUFDQyx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQUxEOztBQVFBO0VBQ0MsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFMRDs7QUFRQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQWxDYTtFQW1DYixhQUFBO0VBQ0EsaUJBcENhO0VBdUNiLG1CQUFBO0FBUEQ7O0FBVUE7RUFDQyx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBNUNlO0VBNkNmLFlBOUNhO0VBK0NiLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBUEQ7O0FBVUE7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFQRDs7QUFXQTtFQUNDLG9CQUFBO0VBQ0EscURBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFSRDs7QUFZQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVZEOztBQWFBO0VBQ0MsZUFBQTtBQVZEOztBQWFBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVZEOztBQWFBO0VBQ0Msa0JBQUE7QUFWRDs7QUFhQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0FBVkQ7O0FBYUE7O0VBQUE7QUFrQkE7RUFUQyxPQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUE3R2E7RUE4R2IsbUJBN0dlO0VBOEdmLFdBQUE7RUFDQSxZQUFBO0VBS0EsV0FqQnFCO0VBa0JyQixZQWxCcUI7RUFtQnJCLGVBQUE7QUFuQkQ7O0FBc0JBO0VBaEJDLE9BQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQTdHYTtFQThHYixtQkE3R2U7RUE4R2YsV0FBQTtFQUNBLFlBQUE7RUFZQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFiRDtBQWVDO0VBUEQ7SUFRRSw2QkFBQTtJQUNBLHFCQUFBO0VBWkE7QUFDRjs7QUFlQTtFQTdCQyxPQUFBO0VBQ0EsTUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUE3R2E7RUE4R2IsbUJBN0dlO0VBOEdmLFdBQUE7RUFDQSxZQUFBO0VBeUJBLFdBckNxQjtFQXNDckIsWUF0Q3FCO0VBdUNyQixTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFORDs7QUFTQTtFQUNDLFlBNUN3QjtFQTZDeEIsZUE1Q3VCO0VBNkN2QixrQkE3Q3VCO0VBOEN2QixXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7QUFORDs7QUFTQTtFQUNDLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUFORDs7QUFTQTtFQUNDLFlBQUE7RUFDQSxxQkFBQTtBQU5EO0FBUUM7RUFDQyxpQkFBQTtBQU5GOztBQVVBO0VBQ0MscUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBekV3QjtFQTBFeEIsa0JBQUE7RUFDQSxVQUFBO0FBUEQ7QUFRQztFQU5EO0lBT0UsMkJBQUE7RUFMQTtBQUNGO0FBT0M7RUFDQyxjQUFBO0FBTEY7O0FBU0E7RUFDQyxxQkFBQTtFQUNBLHVCQUFBO0FBTkQ7O0FBU0E7RUFDQyxxQ0FBQTtFQUNBLGdCQUFBO0FBTkQ7O0FBU0E7RUFDQyxxQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTkQ7O0FBVUM7RUFDQyxVQUFBO0FBUEY7QUFTQztFQUNDLFdBQUE7QUFQRjs7QUFXQTtFQUNDLGtCQUFBO0FBUkQ7O0FBV0E7RUFDQyx5QkFBQTtFQUNBLFdBQUE7QUFSRDtBQVVDOztFQUVDLG1CQUFBO0VBQ0Esa0JBQUE7QUFSRjtBQVdDO0VBQ0MsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFURjtBQVlDO0VBQ0MsY0FBQTtBQVZGOztBQWNBO0VBQ0MsY0FBQTtBQVhEOztBQWNBO0VBQ0MsYUFBQTtBQVhEOztBQWNBO0VBQ0MsNkJBQUE7RUFDQSxxQkFBQTtBQVhEOztBQWNBO0VBQ0MsV0FBQTtBQVhEOztBQWNBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFYRDs7QUFjQTtFQUNDLFVBQUE7QUFYRDs7QUFjQTtFQUNDLHFCQUFBO0FBWERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXHJcXG5cXHJcXG4kcGFnZS1tYXJnaW46IDE1cHg7XFxyXFxuJGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIixcXHJcXG5cXHRcXHRzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0cGFkZGluZzogMSU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2QzZWRlZDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuXFx0bWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxyXFxuXFx0bWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcclxcblxcdG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXHJcXG5cXHRtYXJnaW4taW5saW5lLWVuZDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYucCB7XFxyXFxuXFx0bWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XFxyXFxuXFx0bWFyZ2luLWJsb2NrLWVuZDogMWVtO1xcclxcblxcdG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXHJcXG5cXHRtYXJnaW4taW5saW5lLWVuZDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYudGl0bGUge1xcclxcblxcdGZvbnQtc2l6ZTogMzJwdDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcclxcblxcdGZvbnQtd2VpZ2h0OiAyNTA7XFxyXFxuXFx0bWFyZ2luOiAkcGFnZS1tYXJnaW47XFxyXFxuXFx0bWFyZ2luLXRvcDogMDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogJHBhZ2UtbWFyZ2luO1xcclxcblxcdC8vIEFkZCAxcHggb2YgcGFkZGluZyB1bmRlciB0aGUgdGl0bGUuIFdpdGhvdXQgdGhpcywgZm9yIHNvbWUgcmVhc29uLCBDaHJvbWUgb24gbW9iaWxlIHdvdWxkIHNxdWlzaCB0aGUgdG9wbW9zdCBDYXJkIHVuZGVyIHRoZSB0aXRsZSB0byB0aGUgcmlnaHRcXHJcXG5cXHQvLyAob25seSBDaHJvbWUsIGFuZCBvbmx5IG9uIGFjdHVhbCBtb2JpbGUgZGV2aWNlLiBEZXNrdG9wIENocm9tZSBwcmV0ZW5kaW5nIHRvIGJlIGEgbW9iaWxlIGRldmljZSB3YXMgZmluZSkgXFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdG1pbi1oZWlnaHQ6IDIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuXFx0bWFyZ2luOiAkcGFnZS1tYXJnaW47XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGZsb2F0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXJfY2FyZCB7XFxyXFxuXFx0d2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xcclxcblxcdHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBLYVRlWCBvdmVycmlkZSB0byBtYWtlIHRoZSBmb250IHNsaWdodGx5IHNtYWxsZXJcXHJcXG4ua2F0ZXgge1xcclxcblxcdHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcclxcblxcdGZvbnQ6IG5vcm1hbCAxLjFlbSBLYVRlWF9NYWluLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuXFx0dGV4dC1pbmRlbnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi8vIElmIHRoZSBtYXRoIGdvZXMgb2ZmIHRoZSBzY3JlZW4gYWxsb3cgc2Nyb2xsaW5nXFxyXFxuLmthdGV4LWRpc3BsYXkge1xcclxcblxcdG92ZXJmbG93LXg6IGF1dG87XFxyXFxuXFx0b3ZlcmZsb3cteTogaGlkZGVuO1xcclxcblxcdC8vIE5lZWQgdG8gYWRkIHNvbWUgcGFkZGluZyBzbyB0aGUgc2Nyb2xsYmFyIGRvZXNuJ3QgY292ZXIgdGhlIHRleHRcXHJcXG5cXHRwYWRkaW5nLXRvcDogMC41ZW07XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDAuNWVtO1xcclxcblxcdG1hcmdpbi10b3A6IDAuNWVtO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5waWN0dXJlID4gaW1nIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jZW50ZXJlZCB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpdF9jb250ZW50IHtcXHJcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5mbGV4IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogTWVudSBTdHlsaW5nXFxyXFxuICovXFxyXFxuJG1lbnUtY29sbGFwc2VkLXNpemU6IDUwcHg7XFxyXFxuJG1lbnUtaW5uZXItc2lkZS1tYXJnaW46ICRtZW51LWNvbGxhcHNlZC1zaXplICogMC4yO1xcclxcbiRtZW51LWlubmVyLXRvcC1tYXJnaW46ICRtZW51LWNvbGxhcHNlZC1zaXplICogMC4xO1xcclxcbiRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQ6ICRtZW51LWNvbGxhcHNlZC1zaXplIC0gMiAqICRtZW51LWlubmVyLXRvcC1tYXJnaW47XFxyXFxuXFxyXFxuQG1peGluIG1lbnUoKSB7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRtYXJnaW46ICRwYWdlLW1hcmdpbjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG5cXHR6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2NvbGxhcHNlZCB7XFxyXFxuXFx0QGluY2x1ZGUgbWVudSgpO1xcclxcblxcdHdpZHRoOiAkbWVudS1jb2xsYXBzZWQtc2l6ZTtcXHJcXG5cXHRoZWlnaHQ6ICRtZW51LWNvbGxhcHNlZC1zaXplO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfZXhwYW5kZWQge1xcclxcblxcdEBpbmNsdWRlIG1lbnUoKTtcXHJcXG5cXHR3aWR0aDogYXV0bztcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogbWF0aC5kaXYoJHBhZ2UtbWFyZ2luLCAyKTtcXHJcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWFzcGVjdC1yYXRpbzogMi8zKSB7XFxyXFxuXFx0XFx0d2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxyXFxuXFx0XFx0d2lkdGg6IC1tb3otYXZhaWxhYmxlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfYnV0dG9uIHtcXHJcXG5cXHRAaW5jbHVkZSBtZW51KCk7XFxyXFxuXFx0d2lkdGg6ICRtZW51LWNvbGxhcHNlZC1zaXplO1xcclxcblxcdGhlaWdodDogJG1lbnUtY29sbGFwc2VkLXNpemU7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfYnV0dG9uX2lubmVyIHtcXHJcXG5cXHRtYXJnaW46ICRtZW51LWlubmVyLXNpZGUtbWFyZ2luO1xcclxcblxcdG1hcmdpbi10b3A6ICRtZW51LWlubmVyLXRvcC1tYXJnaW47XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogJG1lbnUtaW5uZXItdG9wLW1hcmdpbjtcXHJcXG5cXHR3aWR0aDogJG1lbnUtY29sbGFwc2VkLXNpemUgLSAyICogJG1lbnUtaW5uZXItc2lkZS1tYXJnaW47XFxyXFxuXFx0Ym9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcXHJcXG5cXHRib3JkZXItdG9wLXdpZHRoOiBtYXRoLmRpdigkbWVudS1pbm5lci1idXR0b24taGVpZ2h0LCA3KTtcXHJcXG5cXHRoZWlnaHQ6IG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQgKiA2LCA3KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfYnV0dG9uX2xpbmUge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCwgNyk7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogbWF0aC5kaXYoJG1lbnUtaW5uZXItYnV0dG9uLWhlaWdodCwgNyk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmEubWVudV9pdGVtIHtcXHJcXG5cXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcblxcdCY6aG92ZXIge1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxudWwubWVudV9saXN0IHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAkbWVudS1pbm5lci1zaWRlLW1hcmdpbjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0d2lkdGg6IDhlbTtcXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tYXNwZWN0LXJhdGlvOiAyLzMpIHtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAkbWVudS1jb2xsYXBzZWQtc2l6ZSArIG1hdGguZGl2KCRtZW51LWlubmVyLWJ1dHRvbi1oZWlnaHQsIDcpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmID4gbGkgPiBhID4gcCB7XFxyXFxuXFx0XFx0bWFyZ2luOiAxNnB4IDA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG51bC5tYXRoX2xpc3QgPiBsaSB7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDAuNWVtO1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5saW5lX2NvZGUge1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7XFxyXFxuXFx0cGFkZGluZzogMXB4IDFweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEuY29kZWJsb2NrIHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuXFx0Ji5yZWQge1xcclxcblxcdFxcdGNvbG9yOiByZWQ7XFxyXFxuXFx0fVxcclxcblxcdCYuYmx1ZSB7XFxyXFxuXFx0XFx0Y29sb3I6IGJsdWU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5jb21tYW5kX3RhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcclxcblxcdHRoLFxcclxcblxcdHRkIHtcXHJcXG5cXHRcXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcblxcdFxcdGJvcmRlci13aWR0aDogdGhpbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0dGgge1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuXFx0XFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdHRkIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAwLjVlbTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5zdWJzZWN0aW9uIHtcXHJcXG5cXHRmb250LXNpemU6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vZGlzcCB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwc2lkZWRvd24ge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGVZKC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsb2F0X2xlZnQge1xcclxcblxcdGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG5jYW52YXMuZnVsbF9jYW52YXMge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcGFkZGluZyB7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Rfbm9fc3R5bGUge1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsyXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzJdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNvbnN0IGNhbnZhc1JlZiA9IGNyZWF0ZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4oKTtcclxuXHJcbnJlbmRlcihcclxuXHQ8Y2FudmFzIGlkPVwiY2FudmFzXCIgY2xhc3NOYW1lPVwiZnVsbF9jYW52YXNcIiB0YWJJbmRleD17MH0gcmVmPXtjYW52YXNSZWZ9PjwvY2FudmFzPixcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIikgYXMgSFRNTEVsZW1lbnQsXHJcbik7XHJcblxyXG5jb25zdCBOVU1fQ09MVU1OUyA9IDE0O1xyXG5jb25zdCBOVU1fUk9XUyA9IDIwO1xyXG5jb25zdCBUT1BfTUFSR0lOID0gNDA7XHJcbmNvbnN0IEJBQ0tHUk9VTkRfQ09MT1IgPSBcIiNEM0VERURcIjtcclxuXHJcbnZhciBjZWxsSGVpZ2h0OiBudW1iZXI7XHJcbnZhciBib2FyZFdpZHRoOiBudW1iZXI7XHJcbnZhciBib2FyZExlZnQ6IG51bWJlcjtcclxudmFyIGdhbWVPdmVyID0gZmFsc2U7XHJcblxyXG5jb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudCE7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikhO1xyXG5cclxud2luZG93Lm9ucmVzaXplID0gc2V0Q2VsbFNpemVWYWx1ZXM7XHJcblxyXG4vLyNyZWdpb24gRGVmaW5pdGlvbiBvZiBwaWVjZXNcclxuaW50ZXJmYWNlIFBpZWNlIHtcclxuXHRjb2xvcjogc3RyaW5nO1xyXG5cdHNoYXBlOiBib29sZWFuW11bXTtcclxufVxyXG5cclxuY29uc3QgZW51bSBQaWVjZU5hbWVzIHtcclxuXHRTbWFsbEksXHJcblx0U21hbGxMLFxyXG5cdFNtYWxsTyxcclxuXHRTbWFsbFMsXHJcblx0U21hbGxULFxyXG5cdEYsXHJcblx0TCxcclxuXHRJLFxyXG5cdFAsXHJcblx0TixcclxuXHRVLFxyXG5cdFQsXHJcblx0VixcclxuXHRXLFxyXG5cdFgsXHJcblx0WSxcclxuXHRaLFxyXG59XHJcblxyXG50eXBlIFBpZWNlTmFtZSA9IGtleW9mIHR5cGVvZiBQaWVjZU5hbWVzO1xyXG5cclxuY29uc3QgcGllY2VzOiB7IFtwaWVjZU5hbWUgaW4gUGllY2VOYW1lXTogUGllY2UgfSA9IHtcclxuXHQvKipcclxuXHQgKiBUZXRyb21pbm9zXHJcblx0ICovXHJcblx0U21hbGxJOiB7XHJcblx0XHRjb2xvcjogXCJjeWFuXCIsXHJcblx0XHRzaGFwZTogW1t0cnVlXSwgW3RydWVdLCBbdHJ1ZV0sIFt0cnVlXV0sXHJcblx0fSxcclxuXHRTbWFsbFQ6IHtcclxuXHRcdGNvbG9yOiBcIm1hZ2VudGFcIixcclxuXHRcdHNoYXBlOiBbXHJcblx0XHRcdFt0cnVlLCB0cnVlLCB0cnVlXSxcclxuXHRcdFx0W2ZhbHNlLCB0cnVlLCBmYWxzZV0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0U21hbGxPOiB7XHJcblx0XHRjb2xvcjogXCJ5ZWxsb3dcIixcclxuXHRcdHNoYXBlOiBbXHJcblx0XHRcdFt0cnVlLCB0cnVlXSxcclxuXHRcdFx0W3RydWUsIHRydWVdLFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdFNtYWxsTDoge1xyXG5cdFx0Y29sb3I6IFwiYmx1ZVwiLFxyXG5cdFx0c2hhcGU6IFtcclxuXHRcdFx0W3RydWUsIGZhbHNlXSxcclxuXHRcdFx0W3RydWUsIGZhbHNlXSxcclxuXHRcdFx0W3RydWUsIHRydWVdLFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdFNtYWxsUzoge1xyXG5cdFx0Y29sb3I6IFwiZ3JlZW5cIixcclxuXHRcdHNoYXBlOiBbXHJcblx0XHRcdFtmYWxzZSwgdHJ1ZSwgdHJ1ZV0sXHJcblx0XHRcdFt0cnVlLCB0cnVlLCBmYWxzZV0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogUGVudG9taW5vc1xyXG5cdCAqL1xyXG5cdEY6IHtcclxuXHRcdGNvbG9yOiBcInJlZFwiLFxyXG5cdFx0c2hhcGU6IFtcclxuXHRcdFx0W2ZhbHNlLCB0cnVlLCB0cnVlXSxcclxuXHRcdFx0W3RydWUsIHRydWUsIGZhbHNlXSxcclxuXHRcdFx0W2ZhbHNlLCB0cnVlLCBmYWxzZV0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0SToge1xyXG5cdFx0Y29sb3I6IFwib3JhbmdlXCIsXHJcblx0XHRzaGFwZTogW1t0cnVlXSwgW3RydWVdLCBbdHJ1ZV0sIFt0cnVlXSwgW3RydWVdXSxcclxuXHR9LFxyXG5cdEw6IHtcclxuXHRcdGNvbG9yOiBcImxpZ2h0eWVsbG93XCIsXHJcblx0XHRzaGFwZTogW1xyXG5cdFx0XHRbdHJ1ZSwgZmFsc2VdLFxyXG5cdFx0XHRbdHJ1ZSwgZmFsc2VdLFxyXG5cdFx0XHRbdHJ1ZSwgZmFsc2VdLFxyXG5cdFx0XHRbdHJ1ZSwgdHJ1ZV0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0Tjoge1xyXG5cdFx0Y29sb3I6IFwibGlnaHRncmVlblwiLFxyXG5cdFx0c2hhcGU6IFtcclxuXHRcdFx0W2ZhbHNlLCB0cnVlXSxcclxuXHRcdFx0W2ZhbHNlLCB0cnVlXSxcclxuXHRcdFx0W3RydWUsIHRydWVdLFxyXG5cdFx0XHRbdHJ1ZSwgZmFsc2VdLFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdFA6IHtcclxuXHRcdGNvbG9yOiBcImxpZ2h0Ymx1ZVwiLFxyXG5cdFx0c2hhcGU6IFtcclxuXHRcdFx0W3RydWUsIHRydWVdLFxyXG5cdFx0XHRbdHJ1ZSwgdHJ1ZV0sXHJcblx0XHRcdFt0cnVlLCBmYWxzZV0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0VDoge1xyXG5cdFx0Y29sb3I6IFwicGlua1wiLFxyXG5cdFx0c2hhcGU6IFtcclxuXHRcdFx0W3RydWUsIHRydWUsIHRydWVdLFxyXG5cdFx0XHRbZmFsc2UsIHRydWUsIGZhbHNlXSxcclxuXHRcdFx0W2ZhbHNlLCB0cnVlLCBmYWxzZV0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0VToge1xyXG5cdFx0Y29sb3I6IFwiIzlmMWFmZlwiLCAvLyBJbmRpZ29cclxuXHRcdHNoYXBlOiBbXHJcblx0XHRcdFt0cnVlLCBmYWxzZSwgdHJ1ZV0sXHJcblx0XHRcdFt0cnVlLCB0cnVlLCB0cnVlXSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHRWOiB7XHJcblx0XHRjb2xvcjogXCIjYjMwMDNiXCIsIC8vIE1hcm9vblxyXG5cdFx0c2hhcGU6IFtcclxuXHRcdFx0W3RydWUsIGZhbHNlLCBmYWxzZV0sXHJcblx0XHRcdFt0cnVlLCBmYWxzZSwgZmFsc2VdLFxyXG5cdFx0XHRbdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0Vzoge1xyXG5cdFx0Y29sb3I6IFwiI2NjNjYwMFwiLCAvLyBPY2hyZVxyXG5cdFx0c2hhcGU6IFtcclxuXHRcdFx0W3RydWUsIGZhbHNlLCBmYWxzZV0sXHJcblx0XHRcdFt0cnVlLCB0cnVlLCBmYWxzZV0sXHJcblx0XHRcdFtmYWxzZSwgdHJ1ZSwgdHJ1ZV0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0WDoge1xyXG5cdFx0Y29sb3I6IFwiIzMwYjViNVwiLCAvLyBBcXVhbWFyaW5lXHJcblx0XHRzaGFwZTogW1xyXG5cdFx0XHRbZmFsc2UsIHRydWUsIGZhbHNlXSxcclxuXHRcdFx0W3RydWUsIHRydWUsIHRydWVdLFxyXG5cdFx0XHRbZmFsc2UsIHRydWUsIGZhbHNlXSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHRZOiB7XHJcblx0XHRjb2xvcjogXCIjMDA1OWIzXCIsIC8vIERhcmsgYmx1ZVxyXG5cdFx0c2hhcGU6IFtcclxuXHRcdFx0W3RydWUsIHRydWUsIHRydWUsIHRydWVdLFxyXG5cdFx0XHRbZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZV0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0Wjoge1xyXG5cdFx0Y29sb3I6IFwiI2ZmNjY3ZFwiLCAvLyBTYWxtb25cclxuXHRcdHNoYXBlOiBbXHJcblx0XHRcdFt0cnVlLCB0cnVlLCBmYWxzZV0sXHJcblx0XHRcdFtmYWxzZSwgdHJ1ZSwgZmFsc2VdLFxyXG5cdFx0XHRbZmFsc2UsIHRydWUsIHRydWVdLFxyXG5cdFx0XSxcclxuXHR9LFxyXG59O1xyXG4vLyNlbmRyZWdpb25cclxuXHJcbi8vI3JlZ2lvbiBIZWxwZXIgY2xhc3Nlcy9pbnRlcmZhY2VzL2VudW1zXHJcblxyXG4vKipcclxuICogSnVzdCBhbiAoeCx5KSBwYWlyXHJcbiAqL1xyXG50eXBlIFBhaXIgPSBbbnVtYmVyLCBudW1iZXJdO1xyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybWF0aW9ucyB0aGF0IGNhbiBiZSBtYWRlIHRvIHRoZSBwaWVjZXNcclxuICovXHJcbmNvbnN0IGVudW0gVHJhbnNmb3JtYXRpb24ge1xyXG5cdElkLFxyXG5cdFI5MCxcclxuXHRSMTgwLFxyXG5cdFIyNzAsXHJcblx0SCxcclxuXHRIUjkwLFxyXG5cdEhSMTgwLFxyXG5cdEhSMjcwLFxyXG59XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbi8vI3JlZ2lvbiBTdGF0ZSBkZWZpbml0aW9uIGFuZCBoYW5kbGVyc1xyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5zIGFsbCB0aGUgaW5mbyBvbiB0aGUgc3RhdGUgb2YgdGhlIGdhbWVcclxuICovXHJcbmludGVyZmFjZSBJU3RhdGUge1xyXG5cdC8qKiBWaXN1YWwgYm9hcmQgLSBlYWNoIGVsZW1lbnQgaXMgdGhlIGNvbG9yIG9mIHRoYXQgY2VsbCAqL1xyXG5cdGJvYXJkOiBzdHJpbmdbXVtdO1xyXG5cdC8qKiBCb2FyZCBvZiBub24tbW92YWJsZSBwaWVjZXMgKi9cclxuXHRmaXhlZEJvYXJkOiBzdHJpbmdbXVtdOyBcclxuXHQvKiogQ3VycmVudGx5LWRyb3BwaW5nIHBpZWNlICovXHJcblx0Y3VycmVudFBpZWNlOiBQaWVjZU5hbWU7XHJcblx0LyoqIFBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHBpZWNlICh0b3AgbGVmdCkgKi9cclxuXHRjdXJyZW50UG9zaXRpb246IFBhaXI7XHJcblx0LyoqIEdyaWQgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHBpZWNlICh0YWtpbmcgaW50byBhY2NvdW50IHJvdGF0aW9uKSAqL1xyXG5cdGN1cnJlbnRTaGFwZUdyaWQ6IGJvb2xlYW5bXVtdO1xyXG5cdC8qKiBOZXh0IHVwIHBpZWNlICovXHJcblx0bmV4dFBpZWNlOiBQaWVjZU5hbWU7XHJcblx0LyoqIEtleXMgcHJlc3NlZCBzaW5jZSB0aGUgbGFzdCBsb29wICovXHJcblx0a2V5c1ByZXNzZWQ6IHN0cmluZ1tdOyBcclxuXHQvKiogTnVtYmVyIG9mIHRpbWVzIHRoZSBtYWluIGxvb3AgaGFzIGJlZW4gY2FsbGVkIGZvciB0aGUgY3VycmVudCBwaWVjZSAqL1xyXG5cdGNvdW50ZXI6IG51bWJlcjtcclxuXHQvKiogSG93IG1hbnkgc3RlcHMgd2Ugc2hvdWxkIHdhaXQgYmVmb3JlIG1vdmluZyB0aGUgY3VycmVudCBwaWVjZSBkb3duIGF1dG9tYXRpY2FsbHkgKGRlY3JlYXNlcyBhcyBsZXZlbCBpbmNyZWFzZXMgdG8gbWFrZSBzaGFwZXMgZmFsbCBmYXN0ZXIpICovXHJcblx0d2FpdFRpbWU6IG51bWJlcjtcclxuXHQvKiogQ3VycmVudCBsZXZlbCAoaW5jcmVhc2VzIGFzIHVzZXIgY2xlYXJzIG1vcmUgbGluZXMpICovXHJcblx0bGV2ZWw6IG51bWJlcjtcclxuXHQvKiogQ291bnQgb2YgYWxsIGxpbmVzIGNsZWFyZWQgKi9cclxuXHRsaW5lc0NsZWFyZWQ6IG51bWJlcjtcclxuXHQvKiogUGllY2Ugc2F2ZWQgd2l0aCAnYycgKi9cclxuXHRzYXZlZFBpZWNlOiBQaWVjZU5hbWUgfCBcIlwiO1xyXG5cdC8qKiBDdXJyZW50IHNjb3JlICovXHJcblx0c2NvcmU6IG51bWJlcjtcclxuXHQvKiogV2hldGhlciAnYycgaGFzIGJlZW4gdXNlZCB0byBzd2FwIGEgcGllY2Ugc2luY2UgdGhlIGxhc3QgcGllY2UgZmVsbCBpbnRvIHBsYWNlIChkb24ndCBsZXQgdGhlIHVzZXIgc3dhcCBwaWVjZXMgYmFjayBhbmQgZm9ydGggZm9yZXZlciBvbiB0aGUgc2FtZSB0dXJuKSAqL1xyXG5cdGNQcmVzc2VkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsUGllY2UgPSByYW5kb21QaWVjZSgpO1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWwgc3RhdGVcclxuICovXHJcbmNvbnN0IHN0YXRlOiBJU3RhdGUgPSB7XHJcblx0Ym9hcmQ6IG5ld01hdHJpeDxzdHJpbmc+KE5VTV9DT0xVTU5TLCBOVU1fUk9XUywgXCJcIiksXHJcblx0Zml4ZWRCb2FyZDogbmV3TWF0cml4PHN0cmluZz4oTlVNX0NPTFVNTlMsIE5VTV9ST1dTLCBcIlwiKSxcclxuXHRjdXJyZW50UGllY2U6IGluaXRpYWxQaWVjZSxcclxuXHRjdXJyZW50UG9zaXRpb246IFs2LCAwXSxcclxuXHRjdXJyZW50U2hhcGVHcmlkOiBwaWVjZXNbaW5pdGlhbFBpZWNlXS5zaGFwZSxcclxuXHRuZXh0UGllY2U6IHJhbmRvbVBpZWNlKCksXHJcblx0a2V5c1ByZXNzZWQ6IFtdLFxyXG5cdGNvdW50ZXI6IDAsXHJcblx0d2FpdFRpbWU6IDEwMCxcclxuXHRsZXZlbDogMCxcclxuXHRsaW5lc0NsZWFyZWQ6IDAsXHJcblx0c2F2ZWRQaWVjZTogXCJcIixcclxuXHRzY29yZTogMCxcclxuXHRjUHJlc3NlZDogZmFsc2UsXHJcbn07XHJcblxyXG4vKipcclxuICogUmVzZXQgdGhlIHN0YXRlIHRvIGl0cyBpbml0aWFsIHZhbHVlcyBmb3IgYSBuZXcgZ2FtZVxyXG4gKi9cclxuZnVuY3Rpb24gcmVzZXRTdGF0ZSgpOiB2b2lkIHtcclxuXHRjb25zdCBpbml0aWFsUGllY2UgPSByYW5kb21QaWVjZSgpO1xyXG5cdHN0YXRlLmJvYXJkID0gbmV3TWF0cml4PHN0cmluZz4oTlVNX0NPTFVNTlMsIE5VTV9ST1dTLCBcIlwiKTtcclxuXHRzdGF0ZS5maXhlZEJvYXJkID0gbmV3TWF0cml4PHN0cmluZz4oTlVNX0NPTFVNTlMsIE5VTV9ST1dTLCBcIlwiKTtcclxuXHRzdGF0ZS5jdXJyZW50UGllY2UgPSBpbml0aWFsUGllY2U7XHJcblx0c3RhdGUuY3VycmVudFBvc2l0aW9uID0gWzYsIDBdO1xyXG5cdHN0YXRlLmN1cnJlbnRTaGFwZUdyaWQgPSBwaWVjZXNbaW5pdGlhbFBpZWNlXS5zaGFwZTtcclxuXHRzdGF0ZS5uZXh0UGllY2UgPSByYW5kb21QaWVjZSgpO1xyXG5cdHN0YXRlLmtleXNQcmVzc2VkID0gW107XHJcblx0c3RhdGUuY291bnRlciA9IDA7XHJcblx0c3RhdGUud2FpdFRpbWUgPSAxMDA7XHJcblx0c3RhdGUubGV2ZWwgPSAwO1xyXG5cdHN0YXRlLmxpbmVzQ2xlYXJlZCA9IDA7XHJcblx0c3RhdGUuc2F2ZWRQaWVjZSA9IFwiXCI7XHJcblx0c3RhdGUuc2NvcmUgPSAwO1xyXG5cdHN0YXRlLmNQcmVzc2VkID0gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlIGFmdGVyIGEgcGllY2UgaGFzIGZhbGxlbiBpbnRvIHBsYWNlXHJcbiAqIGFuZCBzdGFydCB0aGUgbmV4dCBwaWVjZVxyXG4gKiBAcGFyYW0gb3ZlcnJpZGVOZXh0UGllY2UgSWYgZW50ZXJlZCwgd2lsbCB1c2UgdGhpcyBwaWVjZSBuZXh0IGluc3RlYWQgb2Ygc3RhdGUubmV4dFBpZWNlXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmFuc2l0aW9uVG9OZXh0U3RhdGUob3ZlcnJpZGVOZXh0UGllY2U6IFBpZWNlTmFtZSB8IFwiXCIgPSBcIlwiKTogdm9pZCB7XHJcblx0Ly8gQ2xlYXIgZnVsbCByb3dzXHJcblx0Y29uc3QgZnVsbExpbmVzID0gZ2V0RnVsbExpbmVzKCk7XHJcblx0aWYgKGZ1bGxMaW5lcy5sZW5ndGggPiAwKSB7XHJcblx0XHRzdGF0ZS5saW5lc0NsZWFyZWQgKz0gZnVsbExpbmVzLmxlbmd0aDtcclxuXHRcdC8vIEFkZCBwb2ludHNcclxuXHRcdHN3aXRjaCAoZnVsbExpbmVzLmxlbmd0aCkge1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0c3RhdGUuc2NvcmUgKz0gNDAgKiAoc3RhdGUubGV2ZWwgKyAxKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdHN0YXRlLnNjb3JlICs9IDEwMCAqIChzdGF0ZS5sZXZlbCArIDEpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0c3RhdGUuc2NvcmUgKz0gMzAwICogKHN0YXRlLmxldmVsICsgMSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNDpcclxuXHRcdFx0XHRzdGF0ZS5zY29yZSArPSAxMjAwICogKHN0YXRlLmxldmVsICsgMSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0c3RhdGUuc2NvcmUgKz0gNjAwMCAqIChzdGF0ZS5sZXZlbCArIDEpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHN0YXRlLmxpbmVzQ2xlYXJlZCAlIDEwID09PSAwKSB7XHJcblx0XHRcdC8vIEluY3JlYXNlIGxldmVsXHJcblx0XHRcdHN0YXRlLmxldmVsKys7XHJcblx0XHRcdHN0YXRlLndhaXRUaW1lID0gTWF0aC5jZWlsKE1hdGgubWF4KDEwMCAtIHN0YXRlLmxldmVsICogOCwgMjApKTtcclxuXHRcdH1cclxuXHRcdHJlbW92ZUxpbmVzKGZ1bGxMaW5lcyk7XHJcblx0fVxyXG5cdC8vIFNldCBjdXJyZW50IHN0YXRlIHRvIHRoZSBmaXhlZCBib2FyZFxyXG5cdHN0YXRlLmZpeGVkQm9hcmQgPSBjb3B5TWF0cml4KHN0YXRlLmJvYXJkKTtcclxuXHQvLyBHZXQgdGhlIG5leHQgcGllY2VcclxuXHRpZiAob3ZlcnJpZGVOZXh0UGllY2UgIT09IFwiXCIpIHtcclxuXHRcdHN0YXRlLmN1cnJlbnRQaWVjZSA9IG92ZXJyaWRlTmV4dFBpZWNlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdGF0ZS5jdXJyZW50UGllY2UgPSBzdGF0ZS5uZXh0UGllY2U7XHJcblx0XHRzdGF0ZS5uZXh0UGllY2UgPSByYW5kb21QaWVjZSgpO1xyXG5cdH1cclxuXHRzdGF0ZS5jdXJyZW50UG9zaXRpb24gPSBbNiwgMF07XHJcblx0c3RhdGUuY3VycmVudFNoYXBlR3JpZCA9IGNvcHlNYXRyaXgocGllY2VzW3N0YXRlLmN1cnJlbnRQaWVjZV0uc2hhcGUpO1xyXG5cdHN0YXRlLmNQcmVzc2VkID0gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVyIGZvciBhIGtleSBwcmVzc2VkIG9uIHRoZSBjYW52YXMgd2hpbGUgdGhlIGdhbWUgaXMgaW4gcHJvZ3Jlc3NcclxuICogQHBhcmFtIGUgVGhlIGtleSBwcmVzcyBldmVudFxyXG4gKi9cclxuZnVuY3Rpb24gb25DYW52YXNLZXkoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG5cdHN3aXRjaCAoZS5jb2RlKSB7XHJcblx0XHRjYXNlIFwiVGFiXCI6XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiQXJyb3dVcFwiOlxyXG5cdFx0Y2FzZSBcIkFycm93RG93blwiOlxyXG5cdFx0Y2FzZSBcIkFycm93TGVmdFwiOlxyXG5cdFx0Y2FzZSBcIkFycm93UmlnaHRcIjpcclxuXHRcdGNhc2UgXCJTcGFjZVwiOlxyXG5cdFx0Y2FzZSBcIktleVhcIjpcclxuXHRcdGNhc2UgXCJLZXlaXCI6XHJcblx0XHRjYXNlIFwiS2V5Q1wiOlxyXG5cdFx0XHRzdGF0ZS5rZXlzUHJlc3NlZC5wdXNoKGUuY29kZSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uQ2FudmFzS2V5KTtcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGVyIGZvciBhIGtleSBwcmVzc2VkIHdoZW4gdGhlIGdhbWUgaXMgb3ZlclxyXG4gKiBAcGFyYW0gZSBUaGUga2V5IHByZXNzIGV2ZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBvbkdhbWVPdmVyS2V5KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuXHRpZiAoZS5jb2RlID09PSBcIktleVJcIikge1xyXG5cdFx0Z2FtZU92ZXIgPSBmYWxzZTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uR2FtZU92ZXJLZXkpO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25DYW52YXNLZXkpO1xyXG5cdFx0cmVzZXRTdGF0ZSgpO1xyXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IEJBQ0tHUk9VTkRfQ09MT1I7XHJcblx0XHRjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHRcdG9uSW5pdGlhbExvYWQoKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8jcmVnaW9uIE9uIGxvYWQgLyByZXNpemUgaGFuZGxlcnNcclxuXHJcbi8qKlxyXG4gKiBDYWxsZWQgd2hlbiB0aGUgcGFnZSBpcyBpbml0aWFsbHkgbG9hZGVkIC0gc2V0cyBzaXplIHZhbHVlcyBhbmQgYmVnaW5zIHRoZSBtYWluIGxvb3BcclxuICovXHJcbmZ1bmN0aW9uIG9uSW5pdGlhbExvYWQoKTogdm9pZCB7XHJcblx0c2V0Q2VsbFNpemVWYWx1ZXMoKTtcclxuXHRkcmF3U2hhcGUoc3RhdGUuY3VycmVudFNoYXBlR3JpZCwgc3RhdGUuY3VycmVudFBvc2l0aW9uLCBwaWVjZXNbc3RhdGUuY3VycmVudFBpZWNlXS5jb2xvcik7XHJcblx0ZHJhd0JvYXJkKCk7XHJcblx0bWFpbkxvb3AoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldCB0aGUgc2l6ZXMgb2YgY2VsbHMgYW5kIHdoZXJlIHdlIHNob3VsZCBwb3NpdGlvbiB0aGUgYm9hcmQgb24gdGhlIHBhZ2VcclxuICovXHJcbmZ1bmN0aW9uIHNldENlbGxTaXplVmFsdWVzKCk6IHZvaWQge1xyXG5cdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0aWYgKGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQgPCAxLjMpIHtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSBjYW52YXMud2lkdGggLyAxLjM7XHJcblx0fVxyXG5cdGN0eC5maWxsU3R5bGUgPSBCQUNLR1JPVU5EX0NPTE9SO1xyXG5cdGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cdGNlbGxIZWlnaHQgPSAoY2FudmFzLmhlaWdodCAtIDIgKiBUT1BfTUFSR0lOKSAvIE5VTV9ST1dTO1xyXG5cdGJvYXJkV2lkdGggPSBjZWxsSGVpZ2h0ICogTlVNX0NPTFVNTlM7XHJcblx0Ym9hcmRMZWZ0ID0gKGNhbnZhcy53aWR0aCAtIGJvYXJkV2lkdGgpIC8gMjtcclxuXHRpZiAoZ2FtZU92ZXIpIHtcclxuXHRcdGRyYXdCb2FyZCgpO1xyXG5cdFx0ZHJhd0dhbWVPdmVyKCk7XHJcblx0fVxyXG59XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbi8vI3JlZ2lvbiBEcmF3aW5nIGZ1bmN0aW9uc1xyXG5cclxuLyoqXHJcbiAqIERyYXdzIHRoZSBjdXJyZW50IGJvYXJkXHJcbiAqL1xyXG5mdW5jdGlvbiBkcmF3Qm9hcmQoKTogdm9pZCB7XHJcblx0Y29uc3QgZWRnZUNvbG9yID0gXCIjNzM3MzczXCI7XHJcblx0Y29uc3QgYmxhbmtDb2xvciA9IFwiYmxhY2tcIjsgLy9cIiNjY2NjY2NcIjtcclxuXHQvLyBEcmF3IHRoZSBhY3R1YWwgYm9hcmRcclxuXHRmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBzdGF0ZS5ib2FyZC5sZW5ndGg7IGNvbCsrKSB7XHJcblx0XHRjb25zdCBjb2xBcnJheSA9IHN0YXRlLmJvYXJkW2NvbF07XHJcblx0XHRmb3IgKGxldCByb3cgPSAwOyByb3cgPCBjb2xBcnJheS5sZW5ndGg7IHJvdysrKSB7XHJcblx0XHRcdGxldCBjb2xvcjogc3RyaW5nO1xyXG5cdFx0XHRpZiAoY29sQXJyYXlbcm93XSA9PT0gXCJcIikge1xyXG5cdFx0XHRcdGNvbG9yID0gYmxhbmtDb2xvcjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb2xvciA9IGNvbEFycmF5W3Jvd107XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3Qgc3RhcnQgPSBbYm9hcmRMZWZ0ICsgY29sICogY2VsbEhlaWdodCwgVE9QX01BUkdJTiArIHJvdyAqIGNlbGxIZWlnaHRdO1xyXG5cdFx0XHRkcmF3Qm9yZGVyZWRSZWN0YW5nbGUoc3RhcnRbMF0sIHN0YXJ0WzFdLCBjZWxsSGVpZ2h0IC0gMSwgY2VsbEhlaWdodCAtIDEsIGVkZ2VDb2xvciwgY29sb3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gRHJhdyB0aGUgdXBjb21pbmcgcGllY2UgdG8gdGhlIHJpZ2h0XHJcblx0Y29uc3QgdXBjb21pbmdTdGFydFBvczogUGFpciA9IFtib2FyZExlZnQgKyBjZWxsSGVpZ2h0ICogKE5VTV9DT0xVTU5TICsgMSksIFRPUF9NQVJHSU5dO1xyXG5cdGNvbnN0IHVwY29taW5nQ29sb3IgPSBwaWVjZXNbc3RhdGUubmV4dFBpZWNlXS5jb2xvcjtcclxuXHRkcmF3U2luZ2xlUGllY2VUb1RoZVNpZGUodXBjb21pbmdTdGFydFBvcywgc3RhdGUubmV4dFBpZWNlLCBlZGdlQ29sb3IsIHVwY29taW5nQ29sb3IpO1xyXG5cclxuXHQvLyBBbmQgdGhlIHNhdmVkIHBpZWNlIHRvIHRoZSBsZWZ0XHJcblx0aWYgKHN0YXRlLnNhdmVkUGllY2UgIT09IFwiXCIpIHtcclxuXHRcdGNvbnN0IHNhdmVkU3RhcnRQb3M6IFBhaXIgPSBbYm9hcmRMZWZ0IC0gY2VsbEhlaWdodCAqIDcsIFRPUF9NQVJHSU5dO1xyXG5cdFx0Y29uc3Qgc2F2ZWRDb2xvciA9IHBpZWNlc1tzdGF0ZS5zYXZlZFBpZWNlXS5jb2xvcjtcclxuXHRcdGRyYXdTaW5nbGVQaWVjZVRvVGhlU2lkZShzYXZlZFN0YXJ0UG9zLCBzdGF0ZS5zYXZlZFBpZWNlLCBlZGdlQ29sb3IsIHNhdmVkQ29sb3IpO1xyXG5cdH1cclxuXHJcblx0Ly8gRHJhdyBzY29yZSBhbmQgaGlnaCBzY29yZVxyXG5cdGNvbnN0IHNjb3JlU3RhcnRQb3MgPSBbXHJcblx0XHRib2FyZExlZnQgKyBNYXRoLmZsb29yKGNlbGxIZWlnaHQgKiAoTlVNX0NPTFVNTlMgKyAxKSksXHJcblx0XHRUT1BfTUFSR0lOICsgTWF0aC5mbG9vcig2ICogY2VsbEhlaWdodCksXHJcblx0XTtcclxuXHRkcmF3Qm9yZGVyZWRSZWN0YW5nbGUoc2NvcmVTdGFydFBvc1swXSwgc2NvcmVTdGFydFBvc1sxXSwgMTAwMCwgMTI4LCBCQUNLR1JPVU5EX0NPTE9SLCBCQUNLR1JPVU5EX0NPTE9SKTtcclxuXHRjdHguZm9udCA9IFwiMjRweCBzYW5zLXNlcmlmXCI7XHJcblx0Y3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuXHRjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcblx0Y3R4LmZpbGxUZXh0KFwiTGV2ZWw6IFwiICsgc3RhdGUubGV2ZWwsIHNjb3JlU3RhcnRQb3NbMF0sIHNjb3JlU3RhcnRQb3NbMV0pO1xyXG5cdGN0eC5maWxsVGV4dChcclxuXHRcdFwiU2NvcmU6IFwiICsgc3RhdGUuc2NvcmUsXHJcblx0XHRzY29yZVN0YXJ0UG9zWzBdLFxyXG5cdFx0c2NvcmVTdGFydFBvc1sxXSArIDI0ICsgTWF0aC5mbG9vcihjZWxsSGVpZ2h0IC8gMiksXHJcblx0KTtcclxuXHRjdHguZmlsbFRleHQoXHJcblx0XHRcIkhpZ2ggU2NvcmU6IFwiICsgZ2V0SGlnaFNjb3JlKCksXHJcblx0XHRzY29yZVN0YXJ0UG9zWzBdLFxyXG5cdFx0c2NvcmVTdGFydFBvc1sxXSArIDQ4ICsgTWF0aC5mbG9vcihjZWxsSGVpZ2h0KSxcclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICogRHJhd3MgYSBwaWVjZSBvZmYgdG8gdGhlIHNpZGUgb2YgdGhlIGJvYXJkXHJcbiAqIEBwYXJhbSBzdGFydFBvc2l0aW9uIFRoZSBwb3NpdGlvbiB0byBiZWdpbiBkcmF3aW5nIHRoZSBwaWVjZSAodG9wIGxlZnQsIHdpdGggb25lIGNlbGwgb2YgcGFkZGluZylcclxuICogQHBhcmFtIHBpZWNlIFRoZSBuYW1lIG9mIHRoZSBwaWVjZSB0byBkcmF3XHJcbiAqIEBwYXJhbSBlZGdlQ29sb3IgVGhlIGNvbG9yIHRvIGRyYXcgdGhlIGVkZ2VzIG9mIHRoZSBwaWVjZVxyXG4gKiBAcGFyYW0gcGllY2VDb2xvciBUaGUgY29sb3IgdG8gZHJhdyB0aGUgaW5zaWRlc1xyXG4gKi9cclxuZnVuY3Rpb24gZHJhd1NpbmdsZVBpZWNlVG9UaGVTaWRlKFxyXG5cdHN0YXJ0UG9zaXRpb246IFBhaXIsXHJcblx0cGllY2U6IFBpZWNlTmFtZSxcclxuXHRlZGdlQ29sb3I6IHN0cmluZyxcclxuXHRwaWVjZUNvbG9yOiBzdHJpbmcsXHJcbik6IHZvaWQge1xyXG5cdC8vIEJhY2tncm91bmRcclxuXHRmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA3OyBjb2wrKykge1xyXG5cdFx0Zm9yIChsZXQgcm93ID0gMDsgcm93IDwgNjsgcm93KyspIHtcclxuXHRcdFx0ZHJhd0JvcmRlcmVkUmVjdGFuZ2xlKFxyXG5cdFx0XHRcdHN0YXJ0UG9zaXRpb25bMF0gKyBjb2wgKiBjZWxsSGVpZ2h0LFxyXG5cdFx0XHRcdHN0YXJ0UG9zaXRpb25bMV0gKyByb3cgKiBjZWxsSGVpZ2h0LFxyXG5cdFx0XHRcdGNlbGxIZWlnaHQgLSAxLFxyXG5cdFx0XHRcdGNlbGxIZWlnaHQgLSAxLFxyXG5cdFx0XHRcdEJBQ0tHUk9VTkRfQ09MT1IsXHJcblx0XHRcdFx0QkFDS0dST1VORF9DT0xPUixcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly8gUGllY2VcclxuXHRmb3JFYWNoRWxlbWVudE9mU2hhcGVHcmlkKHBpZWNlc1twaWVjZV0uc2hhcGUsIChjb2wsIHJvdywgZWxlbWVudCkgPT4ge1xyXG5cdFx0aWYgKGVsZW1lbnQpIHtcclxuXHRcdFx0ZHJhd0JvcmRlcmVkUmVjdGFuZ2xlKFxyXG5cdFx0XHRcdHN0YXJ0UG9zaXRpb25bMF0gKyAoY29sICsgMSkgKiBjZWxsSGVpZ2h0LFxyXG5cdFx0XHRcdHN0YXJ0UG9zaXRpb25bMV0gKyAocm93ICsgMSkgKiBjZWxsSGVpZ2h0LFxyXG5cdFx0XHRcdGNlbGxIZWlnaHQgLSAxLFxyXG5cdFx0XHRcdGNlbGxIZWlnaHQgLSAxLFxyXG5cdFx0XHRcdGVkZ2VDb2xvcixcclxuXHRcdFx0XHRwaWVjZUNvbG9yLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRHJhdyBhIHJlY3RhbmdsZSB3aXRoIGEgMS1waXhlbCBib3JkZXJcclxuICogQHBhcmFtIHhTdGFydCBYLWNvb3JkaW5hdGUgb2YgdGhlIHRvcCBsZWZ0IG9mIHRoZSByZWN0YW5nbGVcclxuICogQHBhcmFtIHlTdGFydCBZLWNvb3JkaW5hdGUgb2YgdGhlIHRvcCBsZWZ0IG9mIHRoZSByZWN0YW5nbGVcclxuICogQHBhcmFtIHdpZHRoIFdpZHRoIG9mIHRoZSAoYm9yZGVyIG9mIHRoZSkgcmVjdGFuZ2xlXHJcbiAqIEBwYXJhbSBoZWlnaHQgSGVpZ2h0IG9mIHRoZSAoYm9yZGVyIG9mIHRoZSkgcmVjdGFuZ2xlXHJcbiAqIEBwYXJhbSBib3JkZXJDb2xvciBDb2xvciB0byBwYWludCB0aGUgYm9yZGVyXHJcbiAqIEBwYXJhbSBmaWxsQ29sb3IgQ29sb3IgdG8gcGFpbnQgdGhlIGluc2lkZVxyXG4gKi9cclxuZnVuY3Rpb24gZHJhd0JvcmRlcmVkUmVjdGFuZ2xlKFxyXG5cdHhTdGFydDogbnVtYmVyLFxyXG5cdHlTdGFydDogbnVtYmVyLFxyXG5cdHdpZHRoOiBudW1iZXIsXHJcblx0aGVpZ2h0OiBudW1iZXIsXHJcblx0Ym9yZGVyQ29sb3I6IHN0cmluZyxcclxuXHRmaWxsQ29sb3I6IHN0cmluZyxcclxuKTogdm9pZCB7XHJcblx0Ly8gQm9yZGVyXHJcblx0Y3R4LmxpbmVXaWR0aCA9IDE7XHJcblx0Y3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XHJcblx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdGN0eC5yZWN0KHhTdGFydCwgeVN0YXJ0LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHRjdHguc3Ryb2tlKCk7XHJcblx0Ly8gSW5uZXIgcmVjdGFuZ2xlXHJcblx0Y3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcclxuXHRjdHguZmlsbFJlY3QoeFN0YXJ0ICsgMSwgeVN0YXJ0ICsgMSwgd2lkdGggLSAyLCBoZWlnaHQgLSAyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVyYXNlcyB0aGUgZ2l2ZW4gc2hhcGUgZnJvbSB0aGUgYm9hcmQsIHJlcGxhY2luZyBjb2xvcnMgd2l0aCBudWxsXHJcbiAqIEBwYXJhbSBzaGFwZSBUaGUgc2hhcGUgYXMgYSBib29sZWFuIG1hdHJpeFxyXG4gKiBAcGFyYW0gcG9zaXRpb24gVGhlIHN0YXJ0aW5nIHBvc2l0aW9uIGZyb20gd2hpY2ggdG8gZXJhc2UgdGhlIHNoYXBlXHJcbiAqL1xyXG5mdW5jdGlvbiBlcmFzZVNoYXBlKHNoYXBlOiBib29sZWFuW11bXSwgcG9zaXRpb246IFBhaXIpOiB2b2lkIHtcclxuXHRmb3JFYWNoRWxlbWVudE9mU2hhcGVHcmlkKHNoYXBlLCAoY29sLCByb3csIGVsZW1lbnQpID0+IHtcclxuXHRcdGlmIChlbGVtZW50KSB7XHJcblx0XHRcdHN0YXRlLmJvYXJkW3Bvc2l0aW9uWzBdICsgY29sXVtwb3NpdGlvblsxXSArIHJvd10gPSBcIlwiO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRHJhd3MgdGhlIGdpdmVuIHNoYXBlIG9uIHRoZSBib2FyZFxyXG4gKiBAcGFyYW0gc2hhcGUgVGhlIHNoYXBlIGFzIGEgYm9vbGVhbiBtYXRyaXhcclxuICogQHBhcmFtIHBvc2l0aW9uIFRoZSBzdGFydGluZyBwb3NpdGlvbiBmcm9tIHdoaWNoIHRvIGRyYXcgdGhlIHNoYXBlXHJcbiAqIEBwYXJhbSBjb2xvciBUaGUgY29sb3IgZm9yIHRoZSBpbnNpZGUgb2YgdGhlIHNoYXBlXHJcbiAqL1xyXG5mdW5jdGlvbiBkcmF3U2hhcGUoc2hhcGU6IGJvb2xlYW5bXVtdLCBwb3NpdGlvbjogUGFpciwgY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG5cdGZvckVhY2hFbGVtZW50T2ZTaGFwZUdyaWQoc2hhcGUsIChjb2wsIHJvdywgZWxlbWVudCkgPT4ge1xyXG5cdFx0aWYgKGVsZW1lbnQpIHtcclxuXHRcdFx0c3RhdGUuYm9hcmRbcG9zaXRpb25bMF0gKyBjb2xdW3Bvc2l0aW9uWzFdICsgcm93XSA9IGNvbG9yO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRHJhd3MgdGhlIGJhbm5lciBmb3IgdGhlIGdhbWUgb3ZlciBzdGF0ZVxyXG4gKiBAcGFyYW0gaXNIaWdoU2NvcmUgVHJ1ZSBpZiB0aGlzIGdhbWUgc2V0IGEgbmV3IGhpZ2ggc2NvcmVcclxuICovXHJcbmZ1bmN0aW9uIGRyYXdHYW1lT3Zlcihpc0hpZ2hTY29yZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcblx0Ly8gQmFja2dyb3VuZFxyXG5cdGN0eC5nbG9iYWxBbHBoYSA9IDAuODU7XHJcblx0Y3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuXHRjdHguZmlsbFJlY3QoXHJcblx0XHQwLFxyXG5cdFx0VE9QX01BUkdJTiArIDQuNSAqIGNlbGxIZWlnaHQsXHJcblx0XHRjYW52YXMud2lkdGgsXHJcblx0XHRpc0hpZ2hTY29yZSA/IDQgKiBjZWxsSGVpZ2h0IDogMyAqIGNlbGxIZWlnaHQsXHJcblx0KTtcclxuXHQvLyBUZXh0XHJcblx0Y3R4Lmdsb2JhbEFscGhhID0gMTtcclxuXHRjdHguZm9udCA9IFwiNDhweCBzYW5zLXNlcmlmXCI7XHJcblx0Y3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuXHRjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuXHRjdHguZmlsbFRleHQoXCJHYW1lIE92ZXIhXCIsIGNhbnZhcy53aWR0aCAvIDIsIFRPUF9NQVJHSU4gKyA2ICogY2VsbEhlaWdodCk7XHJcblx0Y3R4LmZvbnQgPSBcIjI0cHggc2Fucy1zZXJpZlwiO1xyXG5cdGlmIChpc0hpZ2hTY29yZSkge1xyXG5cdFx0Y3R4LmZpbGxUZXh0KFxyXG5cdFx0XHRcIkNvbmdyYXR1bGF0aW9ucyEgWW91IGdvdCBhIG5ldyBoaWdoIHNjb3JlIVwiLFxyXG5cdFx0XHRjYW52YXMud2lkdGggLyAyLFxyXG5cdFx0XHRUT1BfTUFSR0lOICsgNyAqIGNlbGxIZWlnaHQsXHJcblx0XHQpO1xyXG5cdFx0Y3R4LmZpbGxUZXh0KFwiUHJlc3MgUiB0byBwbGF5IGFnYWluLlwiLCBjYW52YXMud2lkdGggLyAyLCBUT1BfTUFSR0lOICsgOCAqIGNlbGxIZWlnaHQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjdHguZmlsbFRleHQoXCJQcmVzcyBSIHRvIHBsYXkgYWdhaW4uXCIsIGNhbnZhcy53aWR0aCAvIDIsIFRPUF9NQVJHSU4gKyA3ICogY2VsbEhlaWdodCk7XHJcblx0fVxyXG5cdC8vIENoYW5nZSBsaXN0ZW5lcnNcclxuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbkNhbnZhc0tleSk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25HYW1lT3ZlcktleSk7XHJcbn1cclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8jcmVnaW9uIE1haW4gbG9vcCBhbmQgbW92aW5nIGZ1bmN0aW9uc1xyXG5cclxuLyoqXHJcbiAqIE1haW4gbG9vcCBmb3IgdGhlIGdhbWUgLSBjYWxscyBpdHNlbGYgd2l0aCBhIHRpbWVvdXQgb3ZlciBhbmQgb3ZlciBjaGVja2luZyB0byBzZWUgd2hldGhlciBidXR0b25zXHJcbiAqIGFyZSBwcmVzc2VkIG9yIGlmIGVub3VnaCB0aW1lIGhhcyBlbGFwc2VkIHRvIG1vdmUgYSBwaWVjZSBkb3duIGF1dG9tYXRpY2FsbHlcclxuICovXHJcbmZ1bmN0aW9uIG1haW5Mb29wKCk6IHZvaWQge1xyXG5cdHN0YXRlLmNvdW50ZXIrKztcclxuXHRnYW1lT3ZlciA9IGZhbHNlO1xyXG5cdGxldCBmb3JjZURvd24gPSBmYWxzZTtcclxuXHRsZXQgdHJ5RG93biA9IHRydWU7XHJcblx0aWYgKHN0YXRlLmtleXNQcmVzc2VkLmxlbmd0aCA+IDApIHtcclxuXHRcdGlmIChzdGF0ZS5rZXlzUHJlc3NlZC5pbmRleE9mKFwiQXJyb3dEb3duXCIpID49IDApIHtcclxuXHRcdFx0bW92ZUN1cnJlbnRQaWVjZShcIkRcIik7XHJcblx0XHR9XHJcblx0XHRpZiAoc3RhdGUua2V5c1ByZXNzZWQuaW5kZXhPZihcIkFycm93TGVmdFwiKSA+PSAwKSB7XHJcblx0XHRcdG1vdmVDdXJyZW50UGllY2UoXCJMXCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHN0YXRlLmtleXNQcmVzc2VkLmluZGV4T2YoXCJBcnJvd1JpZ2h0XCIpID49IDApIHtcclxuXHRcdFx0bW92ZUN1cnJlbnRQaWVjZShcIlJcIik7XHJcblx0XHR9XHJcblx0XHRpZiAoc3RhdGUua2V5c1ByZXNzZWQuaW5kZXhPZihcIkFycm93VXBcIikgPj0gMCkge1xyXG5cdFx0XHR0cmFuc2Zvcm1DdXJyZW50UGllY2UoVHJhbnNmb3JtYXRpb24uUjkwKTtcclxuXHRcdH1cclxuXHRcdGlmIChzdGF0ZS5rZXlzUHJlc3NlZC5pbmRleE9mKFwiU3BhY2VcIikgPj0gMCkge1xyXG5cdFx0XHR3aGlsZSAobW92ZUN1cnJlbnRQaWVjZShcIkRcIikpIHtcclxuXHRcdFx0XHQvLyB0aGlzIGxpbmUgaW50ZW50aW9uYWxseSBsZWZ0IGJsYW5rXHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yY2VEb3duID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmIChzdGF0ZS5rZXlzUHJlc3NlZC5pbmRleE9mKFwiS2V5WFwiKSA+PSAwIHx8IHN0YXRlLmtleXNQcmVzc2VkLmluZGV4T2YoXCJLZXlaXCIpID49IDApIHtcclxuXHRcdFx0dHJhbnNmb3JtQ3VycmVudFBpZWNlKFRyYW5zZm9ybWF0aW9uLkgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHN0YXRlLmtleXNQcmVzc2VkLmluZGV4T2YoXCJLZXlDXCIpID49IDAgJiYgIXN0YXRlLmNQcmVzc2VkKSB7XHJcblx0XHRcdGVyYXNlU2hhcGUoc3RhdGUuY3VycmVudFNoYXBlR3JpZCwgc3RhdGUuY3VycmVudFBvc2l0aW9uKTtcclxuXHRcdFx0Y29uc3QgcHJldlNhdmVkUGllY2UgPSBzdGF0ZS5zYXZlZFBpZWNlO1xyXG5cdFx0XHRzdGF0ZS5zYXZlZFBpZWNlID0gc3RhdGUuY3VycmVudFBpZWNlO1xyXG5cdFx0XHRpZiAocHJldlNhdmVkUGllY2UgIT09IFwiXCIpIHtcclxuXHRcdFx0XHR0cmFuc2l0aW9uVG9OZXh0U3RhdGUocHJldlNhdmVkUGllY2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRyYW5zaXRpb25Ub05leHRTdGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0YXRlLmNQcmVzc2VkID0gdHJ1ZTtcclxuXHRcdFx0ZHJhd1NoYXBlKHN0YXRlLmN1cnJlbnRTaGFwZUdyaWQsIHN0YXRlLmN1cnJlbnRQb3NpdGlvbiwgcGllY2VzW3N0YXRlLmN1cnJlbnRQaWVjZV0uY29sb3IpO1xyXG5cdFx0XHRpZiAoIW1vdmVDdXJyZW50UGllY2UoXCJub25lXCIsIGZhbHNlKSkge1xyXG5cdFx0XHRcdGdhbWVPdmVyID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0cnlEb3duID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRzdGF0ZS5rZXlzUHJlc3NlZCA9IFtdO1xyXG5cdH1cclxuXHQvLyBUcnkgdG8gbW92ZSBkb3duIGV2ZXJ5IHdhaXRUaW1lIHN0ZXBzLCBvciBpZiB0aGV5IHByZXNzZWQgc3BhY2VcclxuXHRpZiAodHJ5RG93biAmJiAoZm9yY2VEb3duIHx8IHN0YXRlLmNvdW50ZXIgJSBzdGF0ZS53YWl0VGltZSA9PT0gMCkpIHtcclxuXHRcdGNvbnN0IHJldCA9IG1vdmVDdXJyZW50UGllY2UoXCJEXCIpO1xyXG5cdFx0aWYgKCFyZXQpIHtcclxuXHRcdFx0dHJhbnNpdGlvblRvTmV4dFN0YXRlKCk7XHJcblx0XHRcdGRyYXdTaGFwZShzdGF0ZS5jdXJyZW50U2hhcGVHcmlkLCBzdGF0ZS5jdXJyZW50UG9zaXRpb24sIHBpZWNlc1tzdGF0ZS5jdXJyZW50UGllY2VdLmNvbG9yKTtcclxuXHRcdFx0aWYgKCFtb3ZlQ3VycmVudFBpZWNlKFwibm9uZVwiLCBmYWxzZSkpIHtcclxuXHRcdFx0XHRnYW1lT3ZlciA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHN0YXRlLmNvdW50ZXIgPSAwO1xyXG5cdH1cclxuXHRkcmF3Qm9hcmQoKTtcclxuXHRpZiAoZ2FtZU92ZXIpIHtcclxuXHRcdGlmIChzdGF0ZS5zY29yZSA+IGdldEhpZ2hTY29yZSgpKSB7XHJcblx0XHRcdHNldEhpZ2hTY29yZShzdGF0ZS5zY29yZSk7XHJcblx0XHRcdGRyYXdHYW1lT3Zlcih0cnVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRyYXdHYW1lT3ZlcigpO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRzZXRUaW1lb3V0KG1haW5Mb29wKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSBjdXJyZW50IHBpZWNlLCBpZiBwb3NzaWJsZVxyXG4gKiBAcGFyYW0gdCBUaGUgdHJhbnNmb3JtYXRpb24gdG8gYXBwbHkgdG8gdGhlIGN1cnJlbnQgcGllY2VcclxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgY3VycmVudCBwaWVjZSBjb3VsZCBiZSBtb3ZlZCwgZmFsc2UgaWYgc29tZXRoaW5nIHdhcyBibG9ja2luZyBpdFxyXG4gKi9cclxuZnVuY3Rpb24gdHJhbnNmb3JtQ3VycmVudFBpZWNlKHQ6IFRyYW5zZm9ybWF0aW9uKTogYm9vbGVhbiB7XHJcblx0Y29uc3QgbmV3U2hhcGVHcmlkID0gYXBwbHlUcmFuc2Zvcm1hdGlvbih0LCBzdGF0ZS5jdXJyZW50U2hhcGVHcmlkKTtcclxuXHRjb25zdCBbb2Zmc2V0WCwgb2Zmc2V0WV0gPSBnZXRPZmZzZXRGb3JUcmFuc2Zvcm1hdGlvbihcclxuXHRcdHN0YXRlLmN1cnJlbnRTaGFwZUdyaWQsXHJcblx0XHRzdGF0ZS5jdXJyZW50UGllY2UsXHJcblx0XHR0ID09PSBUcmFuc2Zvcm1hdGlvbi5ILFxyXG5cdCk7XHJcblx0Y29uc3QgeCA9IHN0YXRlLmN1cnJlbnRQb3NpdGlvblswXSArIG9mZnNldFg7XHJcblx0Y29uc3QgeSA9IHN0YXRlLmN1cnJlbnRQb3NpdGlvblsxXSArIG9mZnNldFk7XHJcblx0bGV0IGNvbmZsaWN0ID0gZmFsc2U7XHJcblx0Zm9yRWFjaEVsZW1lbnRPZlNoYXBlR3JpZChuZXdTaGFwZUdyaWQsIChjb2wsIHJvdywgZWxlbWVudCkgPT4ge1xyXG5cdFx0aWYgKGVsZW1lbnQpIHtcclxuXHRcdFx0Y29uc3QgdGVtcFggPSB4ICsgY29sO1xyXG5cdFx0XHRjb25zdCB0ZW1wWSA9IHkgKyByb3c7XHJcblx0XHRcdGlmICh0ZW1wWCA+PSBzdGF0ZS5ib2FyZC5sZW5ndGggfHwgdGVtcFkgPj0gc3RhdGUuYm9hcmRbMF0ubGVuZ3RoIHx8IHRlbXBYIDwgMCB8fCB0ZW1wWSA8IDApIHtcclxuXHRcdFx0XHQvLyBXb3VsZCBnbyBvZmYgdGhlIGJvYXJkXHJcblx0XHRcdFx0Y29uZmxpY3QgPSB0cnVlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHN0YXRlLmZpeGVkQm9hcmRbdGVtcFhdW3RlbXBZXSAhPT0gXCJcIikge1xyXG5cdFx0XHRcdC8vIENvbmZsaWN0cyB3aXRoIGFuIGV4aXN0aW5nIHBpZWNlXHJcblx0XHRcdFx0Y29uZmxpY3QgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Ly8gSWYgbm8gY29uZmxpY3RzLCBtb3ZlIHRoZSBwaWVjZVxyXG5cdGlmICghY29uZmxpY3QpIHtcclxuXHRcdGVyYXNlU2hhcGUoc3RhdGUuY3VycmVudFNoYXBlR3JpZCwgc3RhdGUuY3VycmVudFBvc2l0aW9uKTtcclxuXHRcdHN0YXRlLmN1cnJlbnRQb3NpdGlvblswXSA9IHg7XHJcblx0XHRzdGF0ZS5jdXJyZW50UG9zaXRpb25bMV0gPSB5O1xyXG5cdFx0c3RhdGUuY3VycmVudFNoYXBlR3JpZCA9IG5ld1NoYXBlR3JpZDtcclxuXHRcdGRyYXdTaGFwZShzdGF0ZS5jdXJyZW50U2hhcGVHcmlkLCBzdGF0ZS5jdXJyZW50UG9zaXRpb24sIHBpZWNlc1tzdGF0ZS5jdXJyZW50UGllY2VdLmNvbG9yKTtcclxuXHR9XHJcblx0cmV0dXJuICFjb25mbGljdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNlZXMgd2hldGhlciB0aGUgY3VycmVudCBwaWVjZSBjYW4gYmUgbW92ZWQgaW4gdGhlIHNwZWNpZmllZCBkaXJlY3Rpb24gYW5kIChvcHRpb25hbGx5KSBtb3ZlcyBpdCBpZiBzb1xyXG4gKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gdG8gbW92ZSB0aGUgcGllY2UsIG9yIFwibm9uZVwiIHRvIGNoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgcG9zaXRpb24gaXMgYmxvY2tlZFxyXG4gKiBAcGFyYW0gdHJ5TW92ZSBXaGV0aGVyIHRoaXMgZnVuY3Rpb24gc2hvdWxkIGFjdHVhbGx5IHRyeSB0byBtb3ZlIHRoZSBwaWVjZSBvciBqdXN0IGNoZWNrIHBvc3NpYmlsaXR5XHJcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGN1cnJlbnQgcGllY2UgY291bGQgYmUgbW92ZWQsIGZhbHNlIGlmIHNvbWV0aGluZyB3YXMgYmxvY2tpbmcgaXRcclxuICovXHJcbmZ1bmN0aW9uIG1vdmVDdXJyZW50UGllY2UoZGlyZWN0aW9uOiBcIlVcIiB8IFwiRFwiIHwgXCJMXCIgfCBcIlJcIiB8IFwibm9uZVwiLCB0cnlNb3ZlOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xyXG5cdGxldCBuZXdQb3M6IFBhaXI7XHJcblx0c3dpdGNoIChkaXJlY3Rpb24pIHtcclxuXHRcdGNhc2UgXCJVXCI6XHJcblx0XHRcdG5ld1BvcyA9IFtzdGF0ZS5jdXJyZW50UG9zaXRpb25bMF0sIHN0YXRlLmN1cnJlbnRQb3NpdGlvblsxXSAtIDFdO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJEXCI6XHJcblx0XHRcdG5ld1BvcyA9IFtzdGF0ZS5jdXJyZW50UG9zaXRpb25bMF0sIHN0YXRlLmN1cnJlbnRQb3NpdGlvblsxXSArIDFdO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJMXCI6XHJcblx0XHRcdG5ld1BvcyA9IFtzdGF0ZS5jdXJyZW50UG9zaXRpb25bMF0gLSAxLCBzdGF0ZS5jdXJyZW50UG9zaXRpb25bMV1dO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJSXCI6XHJcblx0XHRcdG5ld1BvcyA9IFtzdGF0ZS5jdXJyZW50UG9zaXRpb25bMF0gKyAxLCBzdGF0ZS5jdXJyZW50UG9zaXRpb25bMV1dO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdG5ld1BvcyA9IHN0YXRlLmN1cnJlbnRQb3NpdGlvbjtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cdGxldCBjb25mbGljdCA9IGZhbHNlO1xyXG5cdGZvckVhY2hFbGVtZW50T2ZTaGFwZUdyaWQoc3RhdGUuY3VycmVudFNoYXBlR3JpZCwgKGNvbCwgcm93LCBlbGVtZW50KSA9PiB7XHJcblx0XHRpZiAoZWxlbWVudCkge1xyXG5cdFx0XHRjb25zdCBib2FyZFBvczogUGFpciA9IFtuZXdQb3NbMF0gKyBjb2wsIG5ld1Bvc1sxXSArIHJvd107XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRib2FyZFBvc1swXSA+PSBzdGF0ZS5ib2FyZC5sZW5ndGggfHxcclxuXHRcdFx0XHRib2FyZFBvc1sxXSA+PSBzdGF0ZS5ib2FyZFswXS5sZW5ndGggfHxcclxuXHRcdFx0XHRib2FyZFBvc1swXSA8IDAgfHxcclxuXHRcdFx0XHRib2FyZFBvc1sxXSA8IDBcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0Ly8gV291bGQgZ28gb2ZmIHRoZSBib2FyZFxyXG5cdFx0XHRcdGNvbmZsaWN0ID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmIChzdGF0ZS5maXhlZEJvYXJkW2JvYXJkUG9zWzBdXVtib2FyZFBvc1sxXV0gIT09IFwiXCIpIHtcclxuXHRcdFx0XHQvLyBDb25mbGljdHMgd2l0aCBhbiBleGlzdGluZyBwaWVjZVxyXG5cdFx0XHRcdGNvbmZsaWN0ID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdC8vIElmIG5vIGNvbmZsaWN0cywgbW92ZSB0aGUgcGllY2VcclxuXHRpZiAoIWNvbmZsaWN0ICYmIHRyeU1vdmUpIHtcclxuXHRcdGVyYXNlU2hhcGUoc3RhdGUuY3VycmVudFNoYXBlR3JpZCwgc3RhdGUuY3VycmVudFBvc2l0aW9uKTtcclxuXHRcdHN0YXRlLmN1cnJlbnRQb3NpdGlvbiA9IG5ld1BvcztcclxuXHRcdGRyYXdTaGFwZShzdGF0ZS5jdXJyZW50U2hhcGVHcmlkLCBzdGF0ZS5jdXJyZW50UG9zaXRpb24sIHBpZWNlc1tzdGF0ZS5jdXJyZW50UGllY2VdLmNvbG9yKTtcclxuXHR9XHJcblx0cmV0dXJuICFjb25mbGljdDtcclxufVxyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG4vLyNyZWdpb24gU2hhcGUgaGVscGVyc1xyXG5cclxuLyoqXHJcbiAqIEFwcGx5IHRoZSB0cmFuc2Zvcm1hdGlvbiBnaXZlbiBieSB0IHRvIHRoZSBnaXZlbiBzaGFwZVxyXG4gKiBAcGFyYW0gdCBUaGUgdHJhbnNmb3JtYXRpb24gdG8gYXBwbHlcclxuICogQHBhcmFtIHNoYXBlIFRoZSBzaGFwZSB0byBhcHBseSB0IHRvXHJcbiAqIEByZXR1cm5zIFRoZSBuZXcgc2hhcGVcclxuICovXHJcbmZ1bmN0aW9uIGFwcGx5VHJhbnNmb3JtYXRpb24odDogVHJhbnNmb3JtYXRpb24sIHNoYXBlOiBib29sZWFuW11bXSk6IGJvb2xlYW5bXVtdIHtcclxuXHRsZXQgbmV3U2hhcGU6IGJvb2xlYW5bXVtdO1xyXG5cdHN3aXRjaCAodCkge1xyXG5cdFx0Y2FzZSBUcmFuc2Zvcm1hdGlvbi5JZDpcclxuXHRcdFx0cmV0dXJuIHNoYXBlO1xyXG5cdFx0Y2FzZSBUcmFuc2Zvcm1hdGlvbi5SOTA6XHJcblx0XHRcdG5ld1NoYXBlID0gbmV3TWF0cml4PGJvb2xlYW4+KHNoYXBlWzBdLmxlbmd0aCwgc2hhcGUubGVuZ3RoLCBmYWxzZSk7XHJcblx0XHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNoYXBlLmxlbmd0aDsgY29sKyspIHtcclxuXHRcdFx0XHRmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaGFwZVswXS5sZW5ndGg7IHJvdysrKSB7XHJcblx0XHRcdFx0XHRuZXdTaGFwZVtuZXdTaGFwZS5sZW5ndGggLSAxIC0gcm93XVtjb2xdID0gc2hhcGVbY29sXVtyb3ddO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbmV3U2hhcGU7XHJcblx0XHRjYXNlIFRyYW5zZm9ybWF0aW9uLlIxODA6XHJcblx0XHRcdHJldHVybiBhcHBseVRyYW5zZm9ybWF0aW9uKFRyYW5zZm9ybWF0aW9uLlI5MCwgYXBwbHlUcmFuc2Zvcm1hdGlvbihUcmFuc2Zvcm1hdGlvbi5SOTAsIHNoYXBlKSk7XHJcblx0XHRjYXNlIFRyYW5zZm9ybWF0aW9uLlIyNzA6XHJcblx0XHRcdHJldHVybiBhcHBseVRyYW5zZm9ybWF0aW9uKFRyYW5zZm9ybWF0aW9uLlI5MCwgYXBwbHlUcmFuc2Zvcm1hdGlvbihUcmFuc2Zvcm1hdGlvbi5SMTgwLCBzaGFwZSkpO1xyXG5cdFx0Y2FzZSBUcmFuc2Zvcm1hdGlvbi5IOlxyXG5cdFx0XHRuZXdTaGFwZSA9IG5ld01hdHJpeDxib29sZWFuPihzaGFwZS5sZW5ndGgsIHNoYXBlWzBdLmxlbmd0aCwgZmFsc2UpO1xyXG5cdFx0XHRmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBzaGFwZS5sZW5ndGg7IGNvbCsrKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2hhcGVbMF0ubGVuZ3RoOyByb3crKykge1xyXG5cdFx0XHRcdFx0bmV3U2hhcGVbc2hhcGUubGVuZ3RoIC0gMSAtIGNvbF1bcm93XSA9IHNoYXBlW2NvbF1bcm93XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG5ld1NoYXBlO1xyXG5cdFx0Y2FzZSBUcmFuc2Zvcm1hdGlvbi5IUjkwOlxyXG5cdFx0XHRyZXR1cm4gYXBwbHlUcmFuc2Zvcm1hdGlvbihUcmFuc2Zvcm1hdGlvbi5ILCBhcHBseVRyYW5zZm9ybWF0aW9uKFRyYW5zZm9ybWF0aW9uLlI5MCwgc2hhcGUpKTtcclxuXHRcdGNhc2UgVHJhbnNmb3JtYXRpb24uSFIxODA6XHJcblx0XHRcdHJldHVybiBhcHBseVRyYW5zZm9ybWF0aW9uKFRyYW5zZm9ybWF0aW9uLkgsIGFwcGx5VHJhbnNmb3JtYXRpb24oVHJhbnNmb3JtYXRpb24uUjE4MCwgc2hhcGUpKTtcclxuXHRcdGNhc2UgVHJhbnNmb3JtYXRpb24uSFIyNzA6XHJcblx0XHRcdHJldHVybiBhcHBseVRyYW5zZm9ybWF0aW9uKFRyYW5zZm9ybWF0aW9uLkgsIGFwcGx5VHJhbnNmb3JtYXRpb24oVHJhbnNmb3JtYXRpb24uUjI3MCwgc2hhcGUpKTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHRocm93IFwiTm9uLVRyYW5zZm9ybWF0aW9uIGVudGVyZWQgdG8gYXBwbHlUcmFuc2Zvcm1hdGlvblwiO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGEgc2hhcGUsIGdldHMgdGhlIHBvc2l0aW9uIG9mZnNldCBhZnRlciB0cmFuc2Zvcm1hdGlvblxyXG4gKiBAcGFyYW0gc2hhcGUgVGhlIGN1cnJlbnQgc2hhcGVcclxuICogQHBhcmFtIHBpZWNlIFRoZSBjdXJyZW50IHBpZWNlIG5hbWVcclxuICogQHBhcmFtIHJlZmxlY3Rpb24gV2hldGhlciB0aGUgdHJhbnNmb3JtYXRpb24gaXMgYSByZWZsZWN0aW9uIChvdGhlcndpc2UsIHJvdGF0aW9uKVxyXG4gKiBAcmV0dXJucyBUaGUgb2Zmc2V0IC1cclxuICogRm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgdGhlIHNoYXBlXHJcbiAqICAgIHh6eFxyXG4gKiAgICAgeFxyXG4gKiBUaGlzIHdvdWxkIHJldHVybiAoMCwtMSkgaW5kaWNhdGluZyB0aGF0IHdlIHNob3VsZCByb3RhdGUgOTAnIGNvdW50ZXJjbG9ja3dpc2UgbGlrZSBzbzpcclxuICogICAgIHhcclxuICogICAgeHpcclxuICogICAgIHhcclxuICogV2hlcmUgdGhlICd6J3MgYXJlIGluIHRoZSBzYW1lIGxvY2F0aW9uIGJlZm9yZSBhbmQgYWZ0ZXIgYmVjYXVzZSB3ZSBoYXZlIHNoaWZ0ZWQgaXQgLTEgaW4gdGhlIHkgZGlyZWN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRPZmZzZXRGb3JUcmFuc2Zvcm1hdGlvbihzaGFwZTogYm9vbGVhbltdW10sIHBpZWNlOiBQaWVjZU5hbWUsIHJlZmxlY3Rpb246IGJvb2xlYW4pOiBQYWlyIHtcclxuXHRzd2l0Y2ggKHBpZWNlKSB7XHJcblx0XHRjYXNlIFwiU21hbGxJXCI6XHJcblx0XHRcdGlmIChyZWZsZWN0aW9uKSB7XHJcblx0XHRcdFx0cmV0dXJuIFswLCAwXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc2hhcGUubGVuZ3RoID09PSA0KSB7XHJcblx0XHRcdFx0Ly8geHh4eFxyXG5cdFx0XHRcdHJldHVybiBbMSwgLTFdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHhcclxuXHRcdFx0XHQvLyB4XHJcblx0XHRcdFx0Ly8geFxyXG5cdFx0XHRcdC8vIHhcclxuXHRcdFx0XHRyZXR1cm4gWy0xLCAxXTtcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBcIlNtYWxsTFwiOlxyXG5cdFx0XHRpZiAocmVmbGVjdGlvbiAmJiBzaGFwZS5sZW5ndGggPT09IDIpIHtcclxuXHRcdFx0XHQvLyB4XHJcblx0XHRcdFx0Ly8geFxyXG5cdFx0XHRcdC8vIHh4XHJcblx0XHRcdFx0aWYgKHNoYXBlWzBdWzFdKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gWy0xLCAwXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFsxLCAwXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIFswLCAwXTtcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBcIlNtYWxsT1wiOlxyXG5cdFx0XHQvLyB4eFxyXG5cdFx0XHQvLyB4eFxyXG5cdFx0XHRyZXR1cm4gWzAsIDBdO1xyXG5cdFx0Y2FzZSBcIlNtYWxsU1wiOlxyXG5cdFx0XHRpZiAoc2hhcGUubGVuZ3RoID09PSAzKSB7XHJcblx0XHRcdFx0Ly8geHhcclxuXHRcdFx0XHQvLyAgeHhcclxuXHRcdFx0XHRyZXR1cm4gWzAsIDBdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHhcclxuXHRcdFx0XHQvLyB4eFxyXG5cdFx0XHRcdC8vICB4XHJcblx0XHRcdFx0cmV0dXJuIFswLCAwXTtcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBcIlNtYWxsVFwiOlxyXG5cdFx0XHRpZiAoc2hhcGUubGVuZ3RoID09PSAzKSB7XHJcblx0XHRcdFx0Ly8geHh4XHJcblx0XHRcdFx0Ly8gIHhcclxuXHRcdFx0XHRpZiAocmVmbGVjdGlvbikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFswLCAwXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHNoYXBlWzBdWzBdKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gWzAsIC0xXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFsxLCAwXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8geFxyXG5cdFx0XHRcdC8vIHh4XHJcblx0XHRcdFx0Ly8geFxyXG5cdFx0XHRcdGlmIChzaGFwZVswXVswXSkge1xyXG5cdFx0XHRcdFx0aWYgKHJlZmxlY3Rpb24pIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFstMSwgMF07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gWy0xLCAxXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHJlZmxlY3Rpb24pIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFsxLCAwXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBbMCwgMF07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRjYXNlIFwiRlwiOlxyXG5cdFx0XHQvLyAgeHhcclxuXHRcdFx0Ly8geHhcclxuXHRcdFx0Ly8gIHhcclxuXHRcdFx0cmV0dXJuIFswLCAwXTtcclxuXHRcdGNhc2UgXCJMXCI6XHJcblx0XHRcdGlmIChzaGFwZS5sZW5ndGggPT09IDQpIHtcclxuXHRcdFx0XHQvLyB4eHh4XHJcblx0XHRcdFx0Ly8geFxyXG5cdFx0XHRcdGlmIChyZWZsZWN0aW9uKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gWzAsIDBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gWzEsIC0xXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyB4XHJcblx0XHRcdFx0Ly8geFxyXG5cdFx0XHRcdC8vIHhcclxuXHRcdFx0XHQvLyB4eFxyXG5cdFx0XHRcdGlmIChyZWZsZWN0aW9uKSB7XHJcblx0XHRcdFx0XHRpZiAoc2hhcGVbMF1bMF0gJiYgc2hhcGVbMV1bMF0pIHtcclxuXHRcdFx0XHRcdFx0aWYgKHNoYXBlWzBdWzNdKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFstMSwgMF07XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFsxLCAwXTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKHNoYXBlWzBdWzBdKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFstMSwgMF07XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFsxLCAwXTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gWy0xLCAxXTtcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBcIklcIjpcclxuXHRcdFx0aWYgKHJlZmxlY3Rpb24pIHtcclxuXHRcdFx0XHRyZXR1cm4gWzAsIDBdO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChzaGFwZS5sZW5ndGggPT09IDUpIHtcclxuXHRcdFx0XHQvLyB4eHh4eFxyXG5cdFx0XHRcdHJldHVybiBbMiwgLTJdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHhcclxuXHRcdFx0XHQvLyB4XHJcblx0XHRcdFx0Ly8geFxyXG5cdFx0XHRcdC8vIHhcclxuXHRcdFx0XHQvLyB4XHJcblx0XHRcdFx0cmV0dXJuIFstMiwgMl07XHJcblx0XHRcdH1cclxuXHRcdGNhc2UgXCJQXCI6XHJcblx0XHRcdGlmIChzaGFwZS5sZW5ndGggPT09IDMpIHtcclxuXHRcdFx0XHQvLyB4eHhcclxuXHRcdFx0XHQvLyAgeHhcclxuXHRcdFx0XHRpZiAocmVmbGVjdGlvbikge1xyXG5cdFx0XHRcdFx0aWYgKCFzaGFwZVswXVswXSB8fCAhc2hhcGVbMF1bMV0pIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFsxLCAwXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBbLTEsIDBdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIXNoYXBlWzBdWzBdIHx8ICFzaGFwZVswXVsxXSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFsxLCAtMV07XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBbMCwgMF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHh4XHJcblx0XHRcdFx0Ly8geHhcclxuXHRcdFx0XHQvLyB4XHJcblx0XHRcdFx0aWYgKHJlZmxlY3Rpb24pIHtcclxuXHRcdFx0XHRcdHJldHVybiBbMCwgMF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghc2hhcGVbMF1bMF0gfHwgIXNoYXBlWzFdWzBdKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gWzAsIDFdO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gWy0xLCAwXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdGNhc2UgXCJOXCI6XHJcblx0XHRcdGlmIChyZWZsZWN0aW9uKSB7XHJcblx0XHRcdFx0cmV0dXJuIFswLCAwXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc2hhcGUubGVuZ3RoID09PSA0KSB7XHJcblx0XHRcdFx0Ly8geHh4XHJcblx0XHRcdFx0Ly8gICB4eFxyXG5cdFx0XHRcdHJldHVybiBbMSwgLTFdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHhcclxuXHRcdFx0XHQvLyB4XHJcblx0XHRcdFx0Ly8geHhcclxuXHRcdFx0XHQvLyAgeFxyXG5cdFx0XHRcdHJldHVybiBbLTEsIDFdO1xyXG5cdFx0XHR9XHJcblx0XHRjYXNlIFwiVVwiOlxyXG5cdFx0XHRpZiAocmVmbGVjdGlvbiAmJiBzaGFwZS5sZW5ndGggPT09IDIpIHtcclxuXHRcdFx0XHRpZiAoIXNoYXBlWzBdWzFdKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gWzEsIDBdO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gWy0xLCAwXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8geCB4XHJcblx0XHRcdC8vIHh4eFxyXG5cdFx0XHRyZXR1cm4gWzAsIDBdO1xyXG5cdFx0Y2FzZSBcIlRcIjpcclxuXHRcdFx0Ly8geHh4XHJcblx0XHRcdC8vICB4XHJcblx0XHRcdC8vICB4XHJcblx0XHRcdHJldHVybiBbMCwgMF07XHJcblx0XHRjYXNlIFwiVlwiOlxyXG5cdFx0XHQvLyB4eHhcclxuXHRcdFx0Ly8geFxyXG5cdFx0XHQvLyB4XHJcblx0XHRcdHJldHVybiBbMCwgMF07XHJcblx0XHRjYXNlIFwiV1wiOlxyXG5cdFx0XHQvLyAgeHhcclxuXHRcdFx0Ly8geHhcclxuXHRcdFx0Ly8geFxyXG5cdFx0XHRyZXR1cm4gWzAsIDBdO1xyXG5cdFx0Y2FzZSBcIlhcIjpcclxuXHRcdFx0Ly8gIHhcclxuXHRcdFx0Ly8geHh4XHJcblx0XHRcdC8vICB4XHJcblx0XHRcdHJldHVybiBbMCwgMF07XHJcblx0XHRjYXNlIFwiWVwiOlxyXG5cdFx0XHRpZiAoc2hhcGUubGVuZ3RoID09PSA0KSB7XHJcblx0XHRcdFx0Ly8geHh4eFxyXG5cdFx0XHRcdC8vICB4XHJcblx0XHRcdFx0aWYgKHJlZmxlY3Rpb24pIHtcclxuXHRcdFx0XHRcdHJldHVybiBbMCwgMF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBbMSwgLTFdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHhcclxuXHRcdFx0XHQvLyB4eFxyXG5cdFx0XHRcdC8vIHhcclxuXHRcdFx0XHQvLyB4XHJcblx0XHRcdFx0aWYgKHJlZmxlY3Rpb24pIHtcclxuXHRcdFx0XHRcdGlmICghc2hhcGVbMF1bMF0pIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFsxLCAwXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBbLTEsIDBdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gWy0xLCAxXTtcclxuXHRcdFx0fVxyXG5cdFx0Y2FzZSBcIlpcIjpcclxuXHRcdFx0Ly8geHhcclxuXHRcdFx0Ly8gIHhcclxuXHRcdFx0Ly8gIHh4XHJcblx0XHRcdHJldHVybiBbMCwgMF07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHR0aHJvdyBcIk5vbi1waWVjZSBlbnRlcmVkIHRvIGdldE9mZnNldEZvclJvdGF0aW9uIVwiO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB3aGljaCByb3dzIGFyZSBmaWxsZWQgdXBcclxuICogQHJldHVybnMgQW4gYXJyYXkgb2YgdGhlIHJvdyBudW1iZXJzIGZvciB3aGljaCBhbGwgc3F1YXJlcyBhcmUgb2NjdXBpZWQgKGluIGFzY2VuZGluZyBvcmRlcilcclxuICovXHJcbmZ1bmN0aW9uIGdldEZ1bGxMaW5lcygpOiBJR2V0RnVsbExpbmVzUmV0dXJuT2JqIHtcclxuXHRjb25zdCBmdWxsTGluZXM6IElHZXRGdWxsTGluZXNSZXR1cm5PYmogPSB7IGxlbmd0aDogMCB9O1xyXG5cdGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHN0YXRlLmJvYXJkWzBdLmxlbmd0aDsgcm93KyspIHtcclxuXHRcdGxldCBmdWxsUm93ID0gdHJ1ZTtcclxuXHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHN0YXRlLmJvYXJkLmxlbmd0aDsgY29sKyspIHtcclxuXHRcdFx0aWYgKHN0YXRlLmJvYXJkW2NvbF1bcm93XSA9PT0gXCJcIikge1xyXG5cdFx0XHRcdGZ1bGxSb3cgPSBmYWxzZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGZ1bGxSb3cpIHtcclxuXHRcdFx0ZnVsbExpbmVzW3Jvd10gPSB0cnVlO1xyXG5cdFx0XHRmdWxsTGluZXMubGVuZ3RoKys7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBmdWxsTGluZXM7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJR2V0RnVsbExpbmVzUmV0dXJuT2JqIHtcclxuXHRsZW5ndGg6IG51bWJlcjtcclxuXHRbcm93OiBudW1iZXJdOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGEgc2VyaWVzIG9mIGxpbmVzXHJcbiAqIEBwYXJhbSBsaW5lcyBMaW5lcyB0byBiZSByZW1vdmVkLCBmcm9tIGdldEZ1bExpbmVzXHJcbiAqL1xyXG5mdW5jdGlvbiByZW1vdmVMaW5lcyhsaW5lczogSUdldEZ1bGxMaW5lc1JldHVybk9iaikge1xyXG5cdC8vIEZpcnN0IGNvcHkgYWxsIGxpbmVzIGRvd24gb3ZlciB0aGUgcmVtb3ZlZCBsaW5lc1xyXG5cdGxldCByZW1vdmVkTGluZXNQYXNzZWQgPSAwO1xyXG5cdGNvbnN0IGxpbmVzQWRkZWQ6IHsgW3JvdzogbnVtYmVyXTogYm9vbGVhbiB9ID0ge307XHJcblx0Zm9yIChsZXQgcm93ID0gc3RhdGUuYm9hcmRbMF0ubGVuZ3RoIC0gMTsgcm93ID4gbGluZXMubGVuZ3RoIC0gMTsgcm93LS0pIHtcclxuXHRcdC8vIElmIHdlIGhhdmVuJ3Qgc2VlbiBhIHJlbW92ZWQgbGluZSB5ZXQgZG9uJ3QgY29weVxyXG5cdFx0aWYgKHJlbW92ZWRMaW5lc1Bhc3NlZCA9PT0gMCAmJiBsaW5lc1tyb3ddICE9PSB0cnVlKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Ly8gSWYgdGhpcyBpcyBhIHJlbW92ZWQgbGluZSB3ZSBoYXZlbid0IGFscmVhZHkgY291bnRlZCwgYWRkIDEgdG8gdGhlIHJlbW92ZWQgbGluZXMgY291bnRlciAoTilcclxuXHRcdGlmIChsaW5lc1tyb3ddID09PSB0cnVlICYmIGxpbmVzQWRkZWRbcm93XSAhPT0gdHJ1ZSkge1xyXG5cdFx0XHRyZW1vdmVkTGluZXNQYXNzZWQrKztcclxuXHRcdFx0bGluZXNBZGRlZFtyb3ddID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdC8vIFdoaWxlIHRoZSBOdGggcHJldmlvdXMgbGluZSBpcyBvbmUgd2UndmUgcmVtb3ZlZCwgYWRkIG9uZSB0byBOXHJcblx0XHR3aGlsZSAobGluZXNbcm93IC0gcmVtb3ZlZExpbmVzUGFzc2VkXSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRpZiAobGluZXNBZGRlZFtyb3cgLSByZW1vdmVkTGluZXNQYXNzZWRdICE9PSB0cnVlKSB7XHJcblx0XHRcdFx0Ly9UaGlzIHNob3VsZCBhbHdheXMgcGFzc1xyXG5cdFx0XHRcdGxpbmVzQWRkZWRbcm93IC0gcmVtb3ZlZExpbmVzUGFzc2VkXSA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCIhISFUaGUgdW5leHBlY3RlZCBoYXBwZW5lZCBpbiByZW1vdmVMaW5lcygpISEhXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlbW92ZWRMaW5lc1Bhc3NlZCsrO1xyXG5cdFx0fVxyXG5cdFx0Ly8gQ29weSBmcm9tIE4gbGluZXMgdXBcclxuXHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHN0YXRlLmJvYXJkLmxlbmd0aDsgY29sKyspIHtcclxuXHRcdFx0c3RhdGUuYm9hcmRbY29sXVtyb3ddID0gc3RhdGUuYm9hcmRbY29sXVtyb3cgLSByZW1vdmVkTGluZXNQYXNzZWRdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gTm93IGNsZWFyIGEgcm93IG9uIHRoZSB0b3AgZm9yIGVhY2ggbGluZSB3ZSByZW1vdmVkXHJcblx0Zm9yIChsZXQgcm93ID0gMDsgcm93IDwgbGluZXMubGVuZ3RoOyByb3crKykge1xyXG5cdFx0Zm9yIChsZXQgY29sID0gMDsgY29sIDwgc3RhdGUuYm9hcmQubGVuZ3RoOyBjb2wrKykge1xyXG5cdFx0XHRzdGF0ZS5ib2FyZFtjb2xdW3Jvd10gPSBcIlwiO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG4vLyNyZWdpb24gR2VuZXJhbCBoZWxwZXJzXHJcblxyXG4vKipcclxuICogQ2FsbHMgYSBmdW5jdGlvbiBmb3IgZWFjaCBlbGVtZW50IG9mIGEgc2hhcGUgbWF0cml4XHJcbiAqIEBwYXJhbSBzaGFwZSBUaGUgc2hhcGUgbWF0cml4XHJcbiAqIEBwYXJhbSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBjZWxsIG9mIHNoYXBlXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JFYWNoRWxlbWVudE9mU2hhcGVHcmlkKFxyXG5cdHNoYXBlOiBib29sZWFuW11bXSxcclxuXHRjYWxsYmFjazogKGNvbDogbnVtYmVyLCByb3c6IG51bWJlciwgZWxlbWVudDogYm9vbGVhbikgPT4gdm9pZCxcclxuKTogdm9pZCB7XHJcblx0Zm9yIChsZXQgY29sID0gMDsgY29sIDwgc2hhcGUubGVuZ3RoOyBjb2wrKykge1xyXG5cdFx0Zm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2hhcGVbMF0ubGVuZ3RoOyByb3crKykge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50ID0gc2hhcGVbY29sXVtyb3ddO1xyXG5cdFx0XHRjYWxsYmFjayhjb2wsIHJvdywgZWxlbWVudCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgMkQgYXJyYXkuIFdlIHVzZSAoY29sdW1ucywgcm93cykgZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIGNhbnZhcyBkcmF3aW5nIGZ1bmN0aW9uc1xyXG4gKiBAcGFyYW0gY29sdW1ucyBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgdG8gbWFrZVxyXG4gKiBAcGFyYW0gcm93cyBUaGUgbnVtYmVyIG9mIHJvd3MgdG8gbWFrZVxyXG4gKiBAcGFyYW0gaW5pdGlhbFZhbHVlIFRoZSB2YWx1ZSB0byBpbml0aWFsbHkgc2V0IHRvIGV2ZXJ5IGNlbGxcclxuICogQHJldHVybnMgVGhlIDJEIGFycmF5IGZpbGxlZCB3aXRoIGluaXRpYWxWYWx1ZVxyXG4gKi9cclxuZnVuY3Rpb24gbmV3TWF0cml4PFQ+KGNvbHVtbnM6IG51bWJlciwgcm93czogbnVtYmVyLCBpbml0aWFsVmFsdWU6IFQpOiBUW11bXSB7XHJcblx0Y29uc3QgYXJ5OiBUW11bXSA9IFtdO1xyXG5cdGZvciAobGV0IGMgPSAwOyBjIDwgY29sdW1uczsgYysrKSB7XHJcblx0XHRjb25zdCBpbm5lckFyeTogVFtdID0gW107XHJcblx0XHRmb3IgKGxldCByID0gMDsgciA8IHJvd3M7IHIrKykge1xyXG5cdFx0XHRpbm5lckFyeS5wdXNoKGluaXRpYWxWYWx1ZSk7XHJcblx0XHR9XHJcblx0XHRhcnkucHVzaChpbm5lckFyeSk7XHJcblx0fVxyXG5cdHJldHVybiBhcnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3BpZXMgb25lIDJEIG1hdHJpeCB0byBjcmVhdGUgYSBuZXcgb25lXHJcbiAqIEBwYXJhbSBhcnkgVGhlIGlucHV0IG1hdHJpeFxyXG4gKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIGlucHV0IG1hdHJpeFxyXG4gKi9cclxuZnVuY3Rpb24gY29weU1hdHJpeDxUPihhcnk6IFRbXVtdKTogVFtdW10ge1xyXG5cdGNvbnN0IG5ld0FyeTogVFtdW10gPSBbXTtcclxuXHRmb3IgKGxldCBjID0gMDsgYyA8IGFyeS5sZW5ndGg7IGMrKykge1xyXG5cdFx0Y29uc3QgaW5uZXJBcnk6IFRbXSA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgciA9IDA7IHIgPCBhcnlbMF0ubGVuZ3RoOyByKyspIHtcclxuXHRcdFx0aW5uZXJBcnkucHVzaChhcnlbY11bcl0pO1xyXG5cdFx0fVxyXG5cdFx0bmV3QXJ5LnB1c2goaW5uZXJBcnkpO1xyXG5cdH1cclxuXHRyZXR1cm4gbmV3QXJ5O1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBuYW1lIG9mIGEgcmFuZG9tIHBpZWNlIC8vIFRPRE8gLSBzaG91bGQgdGhpcyBiZSBhZGp1c3RhYmxlIGZvciBwcm9iYWJpbGl0eSBvZiB0ZXRyb21pbm8gdnMuIHBlbnRvbWlubz9cclxuICovXHJcbmZ1bmN0aW9uIHJhbmRvbVBpZWNlKCk6IFBpZWNlTmFtZSB7XHJcblx0Y29uc3QgcGllY2VOYW1lcyA9IE9iamVjdC5rZXlzKHBpZWNlcyk7XHJcblx0cmV0dXJuIHBpZWNlTmFtZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGllY2VOYW1lcy5sZW5ndGgpXSBhcyBQaWVjZU5hbWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIHN0YW5kaW5nIGhpZ2ggc2NvcmVcclxuICogQHJldHVybnMgVGhlIGhpZ2ggc2NvcmUgZnJvbSBjb29raWVzXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRIaWdoU2NvcmUoKTogbnVtYmVyIHtcclxuXHR2YXIgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xyXG5cdHZhciBjb29raWVBcnJheSA9IGRlY29kZWRDb29raWUuc3BsaXQoXCI7XCIpO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBjID0gY29va2llQXJyYXlbaV07XHJcblx0XHQvLyBJZiB0aGlzIGlzIHRoZSByaWdodCBjb29raWUsIHJldHVybiBpdFxyXG5cdFx0aWYgKGMuaW5kZXhPZihcImhpZ2hTY29yZVwiKSA9PSAwKSB7XHJcblx0XHRcdHJldHVybiBwYXJzZUludChjLnN1YnN0cmluZyhcImhpZ2hTY29yZVwiLmxlbmd0aCArIDEsIGMubGVuZ3RoKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAwO1xyXG59XHJcblxyXG4vKipcclxuICogU2V0IGEgbmV3IGhpZ2ggc2NvcmVcclxuICogQHBhcmFtIGhpZ2hTY29yZSBUaGUgc2NvcmUgdG8gc2F2ZVxyXG4gKi9cclxuZnVuY3Rpb24gc2V0SGlnaFNjb3JlKGhpZ2hTY29yZTogbnVtYmVyKSB7XHJcblx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG5cdGQuc2V0VGltZShkLmdldFRpbWUoKSArIDM2NTAgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuXHRkb2N1bWVudC5jb29raWUgPSBcImhpZ2hTY29yZT1cIiArIGhpZ2hTY29yZSArIFwiO1wiO1xyXG59XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbm9uSW5pdGlhbExvYWQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
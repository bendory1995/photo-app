"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Feed.js":
/*!****************************!*\
  !*** ./components/Feed.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Posts */ \"./components/Posts.js\");\n/* harmony import */ var _MiniProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniProfile */ \"./components/MiniProfile.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction Feed() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n        className: \"grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto\",\n        __source: {\n            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Feed.js\",\n            lineNumber: 6\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                className: \"col-span-2\",\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Feed.js\",\n                    lineNumber: 12\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Posts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Feed.js\",\n                        lineNumber: 15\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Feed.js\",\n                    lineNumber: 19\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Feed.js\",\n                        lineNumber: 20\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MiniProfile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Feed.js\",\n                            lineNumber: 21\n                        },\n                        __self: this\n                    })\n                })\n            })\n        ]\n    }));\n}\n_c = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c;\n$RefreshReg$(_c, \"Feed\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJCO0FBQ1k7QUFDSztTQUNuQ0csSUFBSSxHQUFHLENBQUM7SUFDZixNQUFNLHVFQUNIQyxDQUFJO1FBQ0hDLFNBQVMsRUFBQyxDQUVTOzs7Ozs7O2lGQUdsQkMsQ0FBTztnQkFBQ0QsU0FBUyxFQUFDLENBQVk7Ozs7OzsrRkFHNUJMLDhDQUFLOzs7Ozs7OztpRkFJUE0sQ0FBTzs7Ozs7OytGQUNMQyxDQUFHOzs7Ozs7bUdBQ0ROLG9EQUFXOzs7Ozs7Ozs7OztBQVF0QixDQUFDO0tBekJRRSxJQUFJO0FBMkJiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWVkLmpzPzQ2YTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3RzIGZyb20gXCIuL1Bvc3RzXCI7XG5pbXBvcnQgTWluaVByb2ZpbGUgZnJvbSBcIi4vTWluaVByb2ZpbGVcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5mdW5jdGlvbiBGZWVkKCkge1xuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIFxuICAgIG1kOmdyaWQtY29scy0yIG1kOm1heC13LTN4bCB4bDpncmlkLWNvbHMtMyBcbiAgICB4bDptYXgtdy02eGwgbXgtYXV0b1wiXG4gICAgPlxuICAgICAgey8qIFNlY3Rpb24gKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XG4gICAgICAgIHsvKiBTdG9yaWVzICovfVxuICAgICAgICB7LyogUG9zdHMgICovfVxuICAgICAgICA8UG9zdHMgLz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIFNlY3Rpb24gKi99XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TWluaVByb2ZpbGUgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1pbmkgUHJvZmlsZSAqL31cbiAgICAgICAgey8qIFN1Z2dlc3Rpb25zICAqL31cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWQ7XG4iXSwibmFtZXMiOlsiUG9zdHMiLCJNaW5pUHJvZmlsZSIsInVzZVNlc3Npb24iLCJGZWVkIiwibWFpbiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Feed.js\n");

/***/ })

});
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

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Post(param) {\n    var id = param.id, username = param.username, userImg = param.userImg, img = param.img, caption = param.caption;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n            lineNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                    lineNumber: 14\n                },\n                __self: this,\n                children: \" I am a post\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                    lineNumber: 16\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: userImg,\n                        className: \"rounded-full h-12\",\n                        alt: \"\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                            lineNumber: 17\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                            lineNumber: 18\n                        },\n                        __self: this,\n                        children: username\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.DotsHorizontalIcon, {\n                        className: \"h-5\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                            lineNumber: 19\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT2lDO0FBQ29DO1NBRTVETyxJQUFJLENBQUMsS0FBdUMsRUFBRSxDQUFDO1FBQXhDQyxFQUFFLEdBQUosS0FBdUMsQ0FBckNBLEVBQUUsRUFBRUMsUUFBUSxHQUFkLEtBQXVDLENBQWpDQSxRQUFRLEVBQUVDLE9BQU8sR0FBdkIsS0FBdUMsQ0FBdkJBLE9BQU8sRUFBRUMsR0FBRyxHQUE1QixLQUF1QyxDQUFkQSxHQUFHLEVBQUVDLE9BQU8sR0FBckMsS0FBdUMsQ0FBVEEsT0FBTztJQUNqRCxNQUFNLHVFQUNIQyxDQUFHOzs7Ozs7O2lGQUNEQyxDQUFFOzs7Ozs7MEJBQUMsQ0FBWTs7a0ZBRWZELENBQUc7Ozs7Ozs7eUZBQ0RGLENBQUc7d0JBQUNJLEdBQUcsRUFBRUwsT0FBTzt3QkFBRU0sU0FBUyxFQUFDLENBQW1CO3dCQUFDQyxHQUFHLEVBQUMsQ0FBRTs7Ozs7Ozt5RkFDdERDLENBQUM7Ozs7OztrQ0FBRVQsUUFBUTs7eUZBQ1hQLHdFQUFrQjt3QkFBQ2MsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7Ozs7O0FBUzNDLENBQUM7S0FqQlFULElBQUk7QUFtQmIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3QuanM/MzQ1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb29rbWFya0ljb24sXG4gIENoYXRJY29uLFxuICBEb3RzSG9yaXpvbnRhbEljb24sXG4gIEVtb2ppSGFwcHlJY29uLFxuICBIZWFydEljb24sXG4gIFBhcGVyQWlycGxhbmVJY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgeyBIZWFydEljb24gYXMgSGVhcnRJY29uRmlsbGVkIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcblxuZnVuY3Rpb24gUG9zdCh7IGlkLCB1c2VybmFtZSwgdXNlckltZywgaW1nLCBjYXB0aW9uIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPiBJIGFtIGEgcG9zdDwvaDE+XG4gICAgICB7LypIRUFERVIqL31cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPXt1c2VySW1nfSBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgaC0xMlwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxwPnt1c2VybmFtZX08L3A+XG4gICAgICAgIDxEb3RzSG9yaXpvbnRhbEljb24gY2xhc3NOYW1lPVwiaC01XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qSW1nKi99XG4gICAgICB7LypCdXR0b25zKi99XG4gICAgICB7LypDcGF0aW9uKi99XG4gICAgICB7LypDb21tZW50cyovfVxuICAgICAgey8qSW5wdXQgQm94Ki99XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiQm9va21hcmtJY29uIiwiQ2hhdEljb24iLCJEb3RzSG9yaXpvbnRhbEljb24iLCJFbW9qaUhhcHB5SWNvbiIsIkhlYXJ0SWNvbiIsIlBhcGVyQWlycGxhbmVJY29uIiwiSGVhcnRJY29uRmlsbGVkIiwiUG9zdCIsImlkIiwidXNlcm5hbWUiLCJ1c2VySW1nIiwiaW1nIiwiY2FwdGlvbiIsImRpdiIsImgxIiwic3JjIiwiY2xhc3NOYW1lIiwiYWx0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Post.js\n");

/***/ })

});
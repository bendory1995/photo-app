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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Post(param) {\n    var id = param.id, username = param.username, userImg = param.userImg, img = param.img, caption = param.caption;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"bg-white my-7 border rounded-sm\",\n        __source: {\n            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n            lineNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"flex items-center p-5\",\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                    lineNumber: 15\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: userImg,\n                        className: \"rounded-full h-12 w-12 object-contain border p-1 mr-3\",\n                        alt: \"\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                            lineNumber: 16\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"flex-1 font-bold\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                            lineNumber: 21\n                        },\n                        __self: this,\n                        children: username\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.DotsHorizontalIcon, {\n                        className: \"h-5\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                            lineNumber: 22\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                src: img,\n                className: \"object-cover w-full\",\n                alt: \"\",\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                    lineNumber: 25\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                    lineNumber: 27\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.HeartIcon, {\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                            lineNumber: 28\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ChatIcon, {\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                            lineNumber: 29\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.PaperAirplaneIcon, {\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Post.js\",\n                            lineNumber: 30\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT2lDO0FBQ29DO1NBRTVETyxJQUFJLENBQUMsS0FBdUMsRUFBRSxDQUFDO1FBQXhDQyxFQUFFLEdBQUosS0FBdUMsQ0FBckNBLEVBQUUsRUFBRUMsUUFBUSxHQUFkLEtBQXVDLENBQWpDQSxRQUFRLEVBQUVDLE9BQU8sR0FBdkIsS0FBdUMsQ0FBdkJBLE9BQU8sRUFBRUMsR0FBRyxHQUE1QixLQUF1QyxDQUFkQSxHQUFHLEVBQUVDLE9BQU8sR0FBckMsS0FBdUMsQ0FBVEEsT0FBTztJQUNqRCxNQUFNLHVFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFpQzs7Ozs7OztrRkFFN0NELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUF1Qjs7Ozs7Ozt5RkFDbkNILENBQUc7d0JBQ0ZJLEdBQUcsRUFBRUwsT0FBTzt3QkFDWkksU0FBUyxFQUFDLENBQXVEO3dCQUNqRUUsR0FBRyxFQUFDLENBQUU7Ozs7Ozs7eUZBRVBDLENBQUM7d0JBQUNILFNBQVMsRUFBQyxDQUFrQjs7Ozs7O2tDQUFFTCxRQUFROzt5RkFDeENQLHdFQUFrQjt3QkFBQ1ksU0FBUyxFQUFDLENBQUs7Ozs7Ozs7OztpRkFHcENILENBQUc7Z0JBQUNJLEdBQUcsRUFBRUosR0FBRztnQkFBRUcsU0FBUyxFQUFDLENBQXFCO2dCQUFDRSxHQUFHLEVBQUMsQ0FBRTs7Ozs7OztrRkFFcERILENBQUc7Ozs7Ozs7eUZBQ0RULCtEQUFTOzs7Ozs7O3lGQUNUSCw4REFBUTs7Ozs7Ozt5RkFDUkksdUVBQWlCOzs7Ozs7Ozs7OztBQU8xQixDQUFDO0tBMUJRRSxJQUFJO0FBNEJiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzPzM0NTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm9va21hcmtJY29uLFxuICBDaGF0SWNvbixcbiAgRG90c0hvcml6b250YWxJY29uLFxuICBFbW9qaUhhcHB5SWNvbixcbiAgSGVhcnRJY29uLFxuICBQYXBlckFpcnBsYW5lSWNvbixcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IHsgSGVhcnRJY29uIGFzIEhlYXJ0SWNvbkZpbGxlZCB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5cbmZ1bmN0aW9uIFBvc3QoeyBpZCwgdXNlcm5hbWUsIHVzZXJJbWcsIGltZywgY2FwdGlvbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBteS03IGJvcmRlciByb3VuZGVkLXNtXCI+XG4gICAgICB7LypIRUFERVIqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC01XCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3VzZXJJbWd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGgtMTIgdy0xMiBvYmplY3QtY29udGFpbiBib3JkZXIgcC0xIG1yLTNcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtMSBmb250LWJvbGRcIj57dXNlcm5hbWV9PC9wPlxuICAgICAgICA8RG90c0hvcml6b250YWxJY29uIGNsYXNzTmFtZT1cImgtNVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKkltZyovfVxuICAgICAgPGltZyBzcmM9e2ltZ30gY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbFwiIGFsdD1cIlwiIC8+XG4gICAgICB7LypCdXR0b25zKi99XG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhcnRJY29uIC8+XG4gICAgICAgIDxDaGF0SWNvbiAvPlxuICAgICAgICA8UGFwZXJBaXJwbGFuZUljb24gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qQ3BhdGlvbiovfVxuICAgICAgey8qQ29tbWVudHMqL31cbiAgICAgIHsvKklucHV0IEJveCovfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbIkJvb2ttYXJrSWNvbiIsIkNoYXRJY29uIiwiRG90c0hvcml6b250YWxJY29uIiwiRW1vamlIYXBweUljb24iLCJIZWFydEljb24iLCJQYXBlckFpcnBsYW5lSWNvbiIsIkhlYXJ0SWNvbkZpbGxlZCIsIlBvc3QiLCJpZCIsInVzZXJuYW1lIiwidXNlckltZyIsImltZyIsImNhcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post.js\n");

/***/ })

});
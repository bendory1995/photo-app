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

/***/ "./components/MiniProfile.js":
/*!***********************************!*\
  !*** ./components/MiniProfile.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction MiniProfile() {\n    var session = useSession.data;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"flex items-center justify-between mt-14 ml-10\",\n        __source: {\n            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/MiniProfile.js\",\n            lineNumber: 4\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                className: \"w-16 h-16 rounded-full border p-[2px]\",\n                src: \"/profile.png\",\n                alt: \"\",\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/MiniProfile.js\",\n                    lineNumber: 8\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"flex-1 mx-4\",\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/MiniProfile.js\",\n                    lineNumber: 14\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                        className: \"font-bold\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/MiniProfile.js\",\n                            lineNumber: 15\n                        },\n                        __self: this,\n                        children: \"Alex Oh\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        className: \"text-sm text-gray-400\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/MiniProfile.js\",\n                            lineNumber: 16\n                        },\n                        __self: this,\n                        children: \" Welcome to Photo App\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                className: \"text-blue-400 text-sm font-semibold\",\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/MiniProfile.js\",\n                    lineNumber: 18\n                },\n                __self: this,\n                children: \"Sign out\"\n            })\n        ]\n    }));\n}\n_c = MiniProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiniProfile);\nvar _c;\n$RefreshReg$(_c, \"MiniProfile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01pbmlQcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O1NBQVNBLFdBQVcsR0FBRyxDQUFDO0lBQ3RCLEdBQUssQ0FBU0MsT0FBTyxHQUFLQyxVQUFVLENBQTVCQyxJQUFJO0lBQ1osTUFBTSx1RUFDSEMsQ0FBRztRQUNGQyxTQUFTLEVBQUMsQ0FDQTs7Ozs7OztpRkFFVEMsQ0FBRztnQkFDRkQsU0FBUyxFQUFDLENBQXVDO2dCQUNqREUsR0FBRyxFQUFDLENBQWM7Z0JBQ2xCQyxHQUFHLEVBQUMsQ0FBRTs7Ozs7OztrRkFHUEosQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWE7Ozs7Ozs7eUZBQ3pCSSxDQUFFO3dCQUFDSixTQUFTLEVBQUMsQ0FBVzs7Ozs7O2tDQUFDLENBQU87O3lGQUNoQ0ssQ0FBRTt3QkFBQ0wsU0FBUyxFQUFDLENBQXVCOzs7Ozs7a0NBQUMsQ0FBcUI7Ozs7aUZBRTVETSxDQUFNO2dCQUFDTixTQUFTLEVBQUMsQ0FBcUM7Ozs7OzswQkFBQyxDQUFROzs7O0FBR3RFLENBQUM7S0FwQlFMLFdBQVc7QUFxQnBCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NaW5pUHJvZmlsZS5qcz8xYzZhIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIE1pbmlQcm9maWxlKCkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb247XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXG4gICAgbXQtMTQgbWwtMTBcIlxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBib3JkZXIgcC1bMnB4XVwiXG4gICAgICAgIHNyYz1cIi9wcm9maWxlLnBuZ1wiXG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBteC00XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5BbGV4IE9oPC9oMj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMFwiPiBXZWxjb21lIHRvIFBob3RvIEFwcDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5TaWduIG91dDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgTWluaVByb2ZpbGU7XG4iXSwibmFtZXMiOlsiTWluaVByb2ZpbGUiLCJzZXNzaW9uIiwidXNlU2Vzc2lvbiIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsImgzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MiniProfile.js\n");

/***/ })

});
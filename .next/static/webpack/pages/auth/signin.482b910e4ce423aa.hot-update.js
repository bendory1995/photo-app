"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signin",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data;\n    console.log(session);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"shadow-sm border-b bg-white sticky top-0 z-50\",\n        __source: {\n            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n            lineNumber: 17\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"flex justify-between max-w-6xl mx-5 xl:mx-auto\",\n            __source: {\n                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                lineNumber: 18\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"relative hidden lg:inline-grid w-24 cursor-pointer\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 20\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/photoapp.png\",\n                        layout: \"fill\",\n                        objectFit: \"contain\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                            lineNumber: 21\n                        },\n                        __self: this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"relative w-10 lg:hidden flex-shrink-0 cursor-pointer\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 23\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"https://www.seekpng.com/png/full/131-1310384_png-file-diary-icon-png.png\",\n                        layout: \"fill\",\n                        objectFit: \"contain\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                            lineNumber: 24\n                        },\n                        __self: this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"max-w-xs\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 32\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"relative mt-1 p-3 rounded-md\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                            lineNumber: 33\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"absolute inset-y-0 pl-3 flex items-center pointer-events-none\",\n                                __source: {\n                                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                    lineNumber: 34\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {\n                                    className: \"h-5 w-5\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 35\n                                    },\n                                    __self: this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                className: \"bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md\",\n                                type: \"text\",\n                                placeholder: \"Search\",\n                                __source: {\n                                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                    lineNumber: 37\n                                },\n                                __self: this\n                            })\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"flex items-center justify-end space-x-4\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 46\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.HomeIcon, {\n                            className: \"navBtn\",\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                lineNumber: 47\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MenuIcon, {\n                            className: \"h-6 md:hidden cursor-pointer\",\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                lineNumber: 48\n                            },\n                            __self: this\n                        }),\n                        session ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"relative navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 52\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.PaperAirplaneIcon, {\n                                            className: \"navBtn rotate-45\",\n                                            __source: {\n                                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                                lineNumber: 53\n                                            },\n                                            __self: this\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse\",\n                                            __source: {\n                                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                                lineNumber: 54\n                                            },\n                                            __self: this,\n                                            children: \"3\"\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.PlusCircleIcon, {\n                                    className: \"navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 58\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.UserGroupIcon, {\n                                    className: \"navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 59\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.HeartIcon, {\n                                    className: \"navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 60\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                    src: session === null || session === void 0 ? void 0 : session.user.image,\n                                    alt: \"profile pic\",\n                                    className: \"h-10 rounded-full cursor-pointer\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 61\n                                    },\n                                    __self: this\n                                })\n                            ]\n                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: signIn,\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                lineNumber: 68\n                            },\n                            __self: this,\n                            children: \"Sign In \"\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n}\n_s(Header, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQVFHO0FBQ2dCO0FBQ0w7O1NBQ25DUyxNQUFNLEdBQUcsQ0FBQzs7SUFDakIsR0FBSyxDQUFxQkQsR0FBWSxHQUFaQSwyREFBVSxJQUF0QkUsT0FBTyxHQUFLRixHQUFZLENBQTlCRyxJQUFJO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPO0lBRW5CLE1BQU0sc0VBQ0hJLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQStDOzs7Ozs7d0ZBQzNERCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFnRDs7Ozs7OztxRkFFNURELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFvRDs7Ozs7O21HQUNoRWYsbURBQUs7d0JBQUNnQixHQUFHLEVBQUMsQ0FBZTt3QkFBQ0MsTUFBTSxFQUFDLENBQU07d0JBQUNDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7OztxRkFFN0RKLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFzRDs7Ozs7O21HQUNsRWYsbURBQUs7d0JBQ0pnQixHQUFHLEVBQUMsQ0FBMEU7d0JBQzlFQyxNQUFNLEVBQUMsQ0FBTTt3QkFDYkMsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7O3FGQUt0QkosQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQVU7Ozs7OztvR0FDdEJELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUE4Qjs7Ozs7OztpR0FDMUNELENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUErRDs7Ozs7OytHQUMzRWQsZ0VBQVU7b0NBQUNjLFNBQVMsRUFBQyxDQUFTOzs7Ozs7OztpR0FFaENJLENBQUs7Z0NBQ0pKLFNBQVMsRUFBQyxDQUNvRDtnQ0FDOURLLElBQUksRUFBQyxDQUFNO2dDQUNYQyxXQUFXLEVBQUMsQ0FBUTs7Ozs7Ozs7OztzRkFLekJQLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUF5Qzs7Ozs7Ozs2RkFDckRSLDREQUFROzRCQUFDUSxTQUFTLEVBQUMsQ0FBUTs7Ozs7Ozs2RkFDM0JULDhEQUFROzRCQUFDUyxTQUFTLEVBQUMsQ0FBOEI7Ozs7Ozs7d0JBRWpETCxPQUFPOztzR0FFSEksQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQWlCOzs7Ozs7OzZHQUM3QlYsdUVBQWlCOzRDQUFDVSxTQUFTLEVBQUMsQ0FBa0I7Ozs7Ozs7NkdBQzlDRCxDQUFHOzRDQUFDQyxTQUFTLEVBQUMsQ0FBaUg7Ozs7OztzREFBQyxDQUVqSTs7OztxR0FFRGIsb0VBQWM7b0NBQUNhLFNBQVMsRUFBQyxDQUFROzs7Ozs7O3FHQUNqQ1osbUVBQWE7b0NBQUNZLFNBQVMsRUFBQyxDQUFROzs7Ozs7O3FHQUNoQ1gsK0RBQVM7b0NBQUNXLFNBQVMsRUFBQyxDQUFROzs7Ozs7O3FHQUM1Qk8sQ0FBRztvQ0FDRk4sR0FBRyxFQUFFTixPQUFPLGFBQVBBLE9BQU8sS0FBUEEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxPQUFPLENBQUVhLElBQUksQ0FBQ0MsS0FBSztvQ0FDeEJDLEdBQUcsRUFBQyxDQUFhO29DQUNqQlYsU0FBUyxFQUFDLENBQWtDOzs7Ozs7OztrR0FJL0NXLENBQU07NEJBQUNDLE9BQU8sRUFBRUMsTUFBTTs7Ozs7O3NDQUFFLENBQVE7Ozs7Ozs7QUFNN0MsQ0FBQztHQTlEUW5CLE1BQU07O1FBQ2FELHVEQUFVOzs7S0FEN0JDLE1BQU07QUFnRWYsK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgU2VhcmNoSWNvbixcbiAgUGx1c0NpcmNsZUljb24sXG4gIFVzZXJHcm91cEljb24sXG4gIEhlYXJ0SWNvbixcbiAgUGFwZXJBaXJwbGFuZUljb24sXG4gIE1lbnVJY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgeyBIb21lSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc29sZS5sb2coc2Vzc2lvbik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1zbSBib3JkZXItYiBiZy13aGl0ZSBzdGlja3kgdG9wLTAgei01MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYXgtdy02eGwgbXgtNSB4bDpteC1hdXRvXCI+XG4gICAgICAgIHsvKiBMRUZUICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGhpZGRlbiBsZzppbmxpbmUtZ3JpZCB3LTI0IGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9waG90b2FwcC5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMTAgbGc6aGlkZGVuIGZsZXgtc2hyaW5rLTAgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNlZWtwbmcuY29tL3BuZy9mdWxsLzEzMS0xMzEwMzg0X3BuZy1maWxlLWRpYXJ5LWljb24tcG5nLnBuZ1wiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBNaWRkbGUgLSBTZWFyY2ggaW5wdXQgZmllbGQqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy14c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtMSBwLTMgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgcGwtMyBmbGV4IGl0ZW1zLWNlbnRlciBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG4gICAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBibG9jayB3LWZ1bGwgcGwtMTAgc206dGV4dC1zbVxuICAgICAgICAgICAgIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLWJsYWNrIGZvY3VzOmJvcmRlci1ibGFjayByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIFJJR0hUICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHNwYWNlLXgtNFwiPlxuICAgICAgICAgIDxIb21lSWNvbiBjbGFzc05hbWU9XCJuYXZCdG5cIiAvPlxuICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9XCJoLTYgbWQ6aGlkZGVuIGN1cnNvci1wb2ludGVyXCIgLz5cblxuICAgICAgICAgIHtzZXNzaW9uID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBuYXZCdG5cIj5cbiAgICAgICAgICAgICAgICA8UGFwZXJBaXJwbGFuZUljb24gY2xhc3NOYW1lPVwibmF2QnRuIHJvdGF0ZS00NVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEgLXJpZ2h0LTIgdGV4dC14cyB3LTUgaC01IGJnLXJlZC01MDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGFuaW1hdGUtcHVsc2VcIj5cbiAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxQbHVzQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJuYXZCdG5cIiAvPlxuICAgICAgICAgICAgICA8VXNlckdyb3VwSWNvbiBjbGFzc05hbWU9XCJuYXZCdG5cIiAvPlxuICAgICAgICAgICAgICA8SGVhcnRJY29uIGNsYXNzTmFtZT1cIm5hdkJ0blwiIC8+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3Nlc3Npb24/LnVzZXIuaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZSBwaWNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25Jbn0+U2lnbiBJbiA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJTZWFyY2hJY29uIiwiUGx1c0NpcmNsZUljb24iLCJVc2VyR3JvdXBJY29uIiwiSGVhcnRJY29uIiwiUGFwZXJBaXJwbGFuZUljb24iLCJNZW51SWNvbiIsIkhvbWVJY29uIiwidXNlU2Vzc2lvbiIsIkhlYWRlciIsInNlc3Npb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaW1nIiwidXNlciIsImltYWdlIiwiYWx0IiwiYnV0dG9uIiwib25DbGljayIsInNpZ25JbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});
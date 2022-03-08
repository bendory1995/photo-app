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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"shadow-sm border-b bg-white sticky top-0 z-50\",\n        __source: {\n            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n            lineNumber: 18\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"flex justify-between max-w-6xl mx-5 xl:mx-auto\",\n            __source: {\n                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                lineNumber: 19\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    onClick: function() {\n                        return router.push(\"/\");\n                    },\n                    className: \"relative hidden lg:inline-grid w-24 cursor-pointer\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 21\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/photoapp.png\",\n                        layout: \"fill\",\n                        objectFit: \"contain\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                            lineNumber: 25\n                        },\n                        __self: this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    onClick: function() {\n                        return router.push(\"/\");\n                    },\n                    className: \"relative w-10 lg:hidden flex-shrink-0 cursor-pointer\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 27\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"https://www.seekpng.com/png/full/131-1310384_png-file-diary-icon-png.png\",\n                        layout: \"fill\",\n                        objectFit: \"contain\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                            lineNumber: 31\n                        },\n                        __self: this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"max-w-xs\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 39\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"relative mt-1 p-3 rounded-md\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                            lineNumber: 40\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"absolute inset-y-0 pl-3 flex items-center pointer-events-none\",\n                                __source: {\n                                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                    lineNumber: 41\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, {\n                                    className: \"h-5 w-5\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 42\n                                    },\n                                    __self: this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                className: \"bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md\",\n                                type: \"text\",\n                                placeholder: \"Search\",\n                                __source: {\n                                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                    lineNumber: 44\n                                },\n                                __self: this\n                            })\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"flex items-center justify-end space-x-4\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 53\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.HomeIcon, {\n                            onClick: function() {\n                                return router.push(\"/\");\n                            },\n                            className: \"navBtn\",\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                lineNumber: 54\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.MenuIcon, {\n                            className: \"h-6 md:hidden cursor-pointer\",\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                lineNumber: 55\n                            },\n                            __self: this\n                        }),\n                        session ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"relative navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 59\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.PaperAirplaneIcon, {\n                                            className: \"navBtn rotate-45\",\n                                            __source: {\n                                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                                lineNumber: 60\n                                            },\n                                            __self: this\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse\",\n                                            __source: {\n                                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                                lineNumber: 61\n                                            },\n                                            __self: this,\n                                            children: \"3\"\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.PlusCircleIcon, {\n                                    className: \"navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 65\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.UserGroupIcon, {\n                                    className: \"navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 66\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.HeartIcon, {\n                                    className: \"navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 67\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                    onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut,\n                                    src: session.user.image,\n                                    alt: \"profile pic\",\n                                    className: \"h-10 rounded-full cursor-pointer\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 68\n                                    },\n                                    __self: this\n                                })\n                            ]\n                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn,\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                lineNumber: 76\n                            },\n                            __self: this,\n                            children: \"Sign In \"\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n}\n_s(Header, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThCO0FBUUc7QUFDZ0I7QUFDWTtBQUN0Qjs7U0FFOUJZLE1BQU0sR0FBRyxDQUFDOztJQUNqQixHQUFLLENBQXFCRixHQUFZLEdBQVpBLDJEQUFVLElBQXRCRyxPQUFPLEdBQUtILEdBQVksQ0FBOUJJLElBQUk7SUFDWixHQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFDeEIsTUFBTSxzRUFDSEssQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBK0M7Ozs7Ozt3RkFDM0RELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWdEOzs7Ozs7O3FGQUU1REQsQ0FBRztvQkFDRkUsT0FBTyxFQUFFLFFBQVE7d0JBQUZILE1BQU0sQ0FBTkEsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBRzs7b0JBQzlCRixTQUFTLEVBQUMsQ0FBb0Q7Ozs7OzttR0FFN0RqQixtREFBSzt3QkFBQ29CLEdBQUcsRUFBQyxDQUFlO3dCQUFDQyxNQUFNLEVBQUMsQ0FBTTt3QkFBQ0MsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7O3FGQUU3RE4sQ0FBRztvQkFDRkUsT0FBTyxFQUFFLFFBQVE7d0JBQUZILE1BQU0sQ0FBTkEsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBRzs7b0JBQzlCRixTQUFTLEVBQUMsQ0FBc0Q7Ozs7OzttR0FFL0RqQixtREFBSzt3QkFDSm9CLEdBQUcsRUFBQyxDQUEwRTt3QkFDOUVDLE1BQU0sRUFBQyxDQUFNO3dCQUNiQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7cUZBS3RCTixDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBVTs7Ozs7O29HQUN0QkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQThCOzs7Ozs7O2lHQUMxQ0QsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQStEOzs7Ozs7K0dBQzNFaEIsZ0VBQVU7b0NBQUNnQixTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7aUdBRWhDTSxDQUFLO2dDQUNKTixTQUFTLEVBQUMsQ0FDb0Q7Z0NBQzlETyxJQUFJLEVBQUMsQ0FBTTtnQ0FDWEMsV0FBVyxFQUFDLENBQVE7Ozs7Ozs7Ozs7c0ZBS3pCVCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBeUM7Ozs7Ozs7NkZBQ3JEViw0REFBUTs0QkFBQ1csT0FBTyxFQUFFLFFBQVE7Z0NBQUZILE1BQU0sQ0FBTkEsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBRzs7NEJBQUdGLFNBQVMsRUFBQyxDQUFROzs7Ozs7OzZGQUM1RFgsOERBQVE7NEJBQUNXLFNBQVMsRUFBQyxDQUE4Qjs7Ozs7Ozt3QkFFakRKLE9BQU87O3NHQUVIRyxDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozs7NkdBQzdCWix1RUFBaUI7NENBQUNZLFNBQVMsRUFBQyxDQUFrQjs7Ozs7Ozs2R0FDOUNELENBQUc7NENBQUNDLFNBQVMsRUFBQyxDQUFpSDs7Ozs7O3NEQUFDLENBRWpJOzs7O3FHQUVEZixvRUFBYztvQ0FBQ2UsU0FBUyxFQUFDLENBQVE7Ozs7Ozs7cUdBQ2pDZCxtRUFBYTtvQ0FBQ2MsU0FBUyxFQUFDLENBQVE7Ozs7Ozs7cUdBQ2hDYiwrREFBUztvQ0FBQ2EsU0FBUyxFQUFDLENBQVE7Ozs7Ozs7cUdBQzVCUyxDQUFHO29DQUNGUixPQUFPLEVBQUVULG9EQUFPO29DQUNoQlcsR0FBRyxFQUFFUCxPQUFPLENBQUNjLElBQUksQ0FBQ0MsS0FBSztvQ0FDdkJDLEdBQUcsRUFBQyxDQUFhO29DQUNqQlosU0FBUyxFQUFDLENBQWtDOzs7Ozs7OztrR0FJL0NhLENBQU07NEJBQUNaLE9BQU8sRUFBRVYsbURBQU07Ozs7OztzQ0FBRSxDQUFROzs7Ozs7O0FBTTdDLENBQUM7R0FwRVFJLE1BQU07O1FBQ2FGLHVEQUFVO1FBQ3JCQyxrREFBUzs7O0tBRmpCQyxNQUFNO0FBc0VmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7XG4gIFNlYXJjaEljb24sXG4gIFBsdXNDaXJjbGVJY29uLFxuICBVc2VyR3JvdXBJY29uLFxuICBIZWFydEljb24sXG4gIFBhcGVyQWlycGxhbmVJY29uLFxuICBNZW51SWNvbixcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IHsgSG9tZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXNtIGJvcmRlci1iIGJnLXdoaXRlIHN0aWNreSB0b3AtMCB6LTUwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG1heC13LTZ4bCBteC01IHhsOm14LWF1dG9cIj5cbiAgICAgICAgey8qIExFRlQgKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaGlkZGVuIGxnOmlubGluZS1ncmlkIHctMjQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9waG90b2FwcC5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMTAgbGc6aGlkZGVuIGZsZXgtc2hyaW5rLTAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5zZWVrcG5nLmNvbS9wbmcvZnVsbC8xMzEtMTMxMDM4NF9wbmctZmlsZS1kaWFyeS1pY29uLXBuZy5wbmdcIlxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTWlkZGxlIC0gU2VhcmNoIGlucHV0IGZpZWxkKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXcteHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTEgcC0zIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIHBsLTMgZmxleCBpdGVtcy1jZW50ZXIgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYmxvY2sgdy1mdWxsIHBsLTEwIHNtOnRleHQtc21cbiAgICAgICAgICAgICBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1ibGFjayBmb2N1czpib3JkZXItYmxhY2sgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBSSUdIVCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBzcGFjZS14LTRcIj5cbiAgICAgICAgICA8SG9tZUljb24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfSBjbGFzc05hbWU9XCJuYXZCdG5cIiAvPlxuICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9XCJoLTYgbWQ6aGlkZGVuIGN1cnNvci1wb2ludGVyXCIgLz5cblxuICAgICAgICAgIHtzZXNzaW9uID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBuYXZCdG5cIj5cbiAgICAgICAgICAgICAgICA8UGFwZXJBaXJwbGFuZUljb24gY2xhc3NOYW1lPVwibmF2QnRuIHJvdGF0ZS00NVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEgLXJpZ2h0LTIgdGV4dC14cyB3LTUgaC01IGJnLXJlZC01MDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGFuaW1hdGUtcHVsc2VcIj5cbiAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxQbHVzQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJuYXZCdG5cIiAvPlxuICAgICAgICAgICAgICA8VXNlckdyb3VwSWNvbiBjbGFzc05hbWU9XCJuYXZCdG5cIiAvPlxuICAgICAgICAgICAgICA8SGVhcnRJY29uIGNsYXNzTmFtZT1cIm5hdkJ0blwiIC8+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaWduT3V0fVxuICAgICAgICAgICAgICAgIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbGUgcGljXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduSW59PlNpZ24gSW4gPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiU2VhcmNoSWNvbiIsIlBsdXNDaXJjbGVJY29uIiwiVXNlckdyb3VwSWNvbiIsIkhlYXJ0SWNvbiIsIlBhcGVyQWlycGxhbmVJY29uIiwiTWVudUljb24iLCJIb21lSWNvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiSGVhZGVyIiwic2Vzc2lvbiIsImRhdGEiLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHVzaCIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaW1nIiwidXNlciIsImltYWdlIiwiYWx0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});
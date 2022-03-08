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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Header() {\n    _s1();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data;\n    var ref1 = _slicedToArray(useRecoilState(modalState), 2), open = ref1[0], setOpen = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"shadow-sm border-b bg-white sticky top-0 z-50\",\n        __source: {\n            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n            lineNumber: 19\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"flex justify-between max-w-6xl mx-5 xl:mx-auto\",\n            __source: {\n                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                lineNumber: 20\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    onClick: function() {\n                        return router.push(\"/\");\n                    },\n                    className: \"relative hidden lg:inline-grid w-24 cursor-pointer\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 22\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/photoapp.png\",\n                        layout: \"fill\",\n                        objectFit: \"contain\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                            lineNumber: 26\n                        },\n                        __self: this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    onClick: function() {\n                        return router.push(\"/\");\n                    },\n                    className: \"relative w-10 lg:hidden flex-shrink-0 cursor-pointer\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 28\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"https://www.seekpng.com/png/full/131-1310384_png-file-diary-icon-png.png\",\n                        layout: \"fill\",\n                        objectFit: \"contain\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                            lineNumber: 32\n                        },\n                        __self: this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"max-w-xs\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 40\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"relative mt-1 p-3 rounded-md\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                            lineNumber: 41\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"absolute inset-y-0 pl-3 flex items-center pointer-events-none\",\n                                __source: {\n                                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                    lineNumber: 42\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, {\n                                    className: \"h-5 w-5\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 43\n                                    },\n                                    __self: this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                className: \"bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md\",\n                                type: \"text\",\n                                placeholder: \"Search\",\n                                __source: {\n                                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                    lineNumber: 45\n                                },\n                                __self: this\n                            })\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"flex items-center justify-end space-x-4\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 54\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.HomeIcon, {\n                            onClick: function() {\n                                return router.push(\"/\");\n                            },\n                            className: \"navBtn\",\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                lineNumber: 55\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.MenuIcon, {\n                            className: \"h-6 md:hidden cursor-pointer\",\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                lineNumber: 56\n                            },\n                            __self: this\n                        }),\n                        session ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"relative navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 60\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.PaperAirplaneIcon, {\n                                            className: \"navBtn rotate-45\",\n                                            __source: {\n                                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                                lineNumber: 61\n                                            },\n                                            __self: this\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse\",\n                                            __source: {\n                                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                                lineNumber: 62\n                                            },\n                                            __self: this,\n                                            children: \"3\"\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.PlusCircleIcon, {\n                                    className: \"navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 66\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.UserGroupIcon, {\n                                    className: \"navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 67\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.HeartIcon, {\n                                    className: \"navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 68\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                    onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut,\n                                    src: session.user.image,\n                                    alt: \"profile pic\",\n                                    className: \"h-10 rounded-full cursor-pointer\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 69\n                                    },\n                                    __self: this\n                                })\n                            ]\n                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn,\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                lineNumber: 77\n                            },\n                            __self: this,\n                            children: \"Sign In \"\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n}\n_s1(Header, \"jjZEjxT/2qVu5hk72tnJuReUMLE=\", true, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNOztRQUNhRix1REFBVTtRQUVyQkMsa0RBQVM7OztLQUhqQkMsTUFBTTtBQXVFZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge1xuICBTZWFyY2hJY29uLFxuICBQbHVzQ2lyY2xlSWNvbixcbiAgVXNlckdyb3VwSWNvbixcbiAgSGVhcnRJY29uLFxuICBQYXBlckFpcnBsYW5lSWNvbixcbiAgTWVudUljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCB7IEhvbWVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VSZWNvaWxTdGF0ZShtb2RhbFN0YXRlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctc20gYm9yZGVyLWIgYmctd2hpdGUgc3RpY2t5IHRvcC0wIHotNTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWF4LXctNnhsIG14LTUgeGw6bXgtYXV0b1wiPlxuICAgICAgICB7LyogTEVGVCAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoaWRkZW4gbGc6aW5saW5lLWdyaWQgdy0yNCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Bob3RvYXBwLnBuZ1wiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xMCBsZzpoaWRkZW4gZmxleC1zaHJpbmstMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNlZWtwbmcuY29tL3BuZy9mdWxsLzEzMS0xMzEwMzg0X3BuZy1maWxlLWRpYXJ5LWljb24tcG5nLnBuZ1wiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBNaWRkbGUgLSBTZWFyY2ggaW5wdXQgZmllbGQqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy14c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtMSBwLTMgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC15LTAgcGwtMyBmbGV4IGl0ZW1zLWNlbnRlciBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG4gICAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBibG9jayB3LWZ1bGwgcGwtMTAgc206dGV4dC1zbVxuICAgICAgICAgICAgIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLWJsYWNrIGZvY3VzOmJvcmRlci1ibGFjayByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIFJJR0hUICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHNwYWNlLXgtNFwiPlxuICAgICAgICAgIDxIb21lSWNvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9IGNsYXNzTmFtZT1cIm5hdkJ0blwiIC8+XG4gICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cImgtNiBtZDpoaWRkZW4gY3Vyc29yLXBvaW50ZXJcIiAvPlxuXG4gICAgICAgICAge3Nlc3Npb24gPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG5hdkJ0blwiPlxuICAgICAgICAgICAgICAgIDxQYXBlckFpcnBsYW5lSWNvbiBjbGFzc05hbWU9XCJuYXZCdG4gcm90YXRlLTQ1XCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMSAtcmlnaHQtMiB0ZXh0LXhzIHctNSBoLTUgYmctcmVkLTUwMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFBsdXNDaXJjbGVJY29uIGNsYXNzTmFtZT1cIm5hdkJ0blwiIC8+XG4gICAgICAgICAgICAgIDxVc2VyR3JvdXBJY29uIGNsYXNzTmFtZT1cIm5hdkJ0blwiIC8+XG4gICAgICAgICAgICAgIDxIZWFydEljb24gY2xhc3NOYW1lPVwibmF2QnRuXCIgLz5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25PdXR9XG4gICAgICAgICAgICAgICAgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PVwicHJvZmlsZSBwaWNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NpZ25Jbn0+U2lnbiBJbiA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJTZWFyY2hJY29uIiwiUGx1c0NpcmNsZUljb24iLCJVc2VyR3JvdXBJY29uIiwiSGVhcnRJY29uIiwiUGFwZXJBaXJwbGFuZUljb24iLCJNZW51SWNvbiIsIkhvbWVJY29uIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJzZXNzaW9uIiwiZGF0YSIsInVzZVJlY29pbFN0YXRlIiwibW9kYWxTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwicm91dGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInB1c2giLCJzcmMiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImltZyIsInVzZXIiLCJpbWFnZSIsImFsdCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});
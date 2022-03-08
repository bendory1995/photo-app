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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../atoms/modalAtom */ \"./atoms/modalAtom.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Header() {\n    _s1();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data;\n    var ref1 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_5__.modalState), 2), open = ref1[0], setOpen = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"shadow-sm border-b bg-white sticky top-0 z-50\",\n        __source: {\n            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n            lineNumber: 21\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"flex justify-between max-w-6xl mx-5 xl:mx-auto\",\n            __source: {\n                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                lineNumber: 22\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    onClick: function() {\n                        return router.push(\"/\");\n                    },\n                    className: \"relative hidden lg:inline-grid w-30 cursor-pointer\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 24\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/photoapp.png\",\n                        layout: \"fill\",\n                        objectFit: \"contain\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                            lineNumber: 28\n                        },\n                        __self: this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    onClick: function() {\n                        return router.push(\"/\");\n                    },\n                    className: \"relative w-10 lg:hidden flex-shrink-0 cursor-pointer\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 30\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"https://www.seekpng.com/png/full/131-1310384_png-file-diary-icon-png.png\",\n                        layout: \"fill\",\n                        objectFit: \"contain\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                            lineNumber: 34\n                        },\n                        __self: this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"flex items-center justify-end space-x-4\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                        lineNumber: 42\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.HomeIcon, {\n                            onClick: function() {\n                                return router.push(\"/\");\n                            },\n                            className: \"navBtn\",\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                lineNumber: 43\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.MenuIcon, {\n                            className: \"h-6 md:hidden cursor-pointer\",\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                lineNumber: 44\n                            },\n                            __self: this\n                        }),\n                        session ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.PlusCircleIcon, {\n                                    onClick: function() {\n                                        return setOpen(true);\n                                    },\n                                    className: \"navBtn\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 48\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                    onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut,\n                                    src: session.user.image,\n                                    alt: \"profile pic\",\n                                    className: \" mt-2 mb-2 h-10 rounded-full cursor-pointer\",\n                                    __source: {\n                                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                        lineNumber: 52\n                                    },\n                                    __self: this\n                                })\n                            ]\n                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn,\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Header.js\",\n                                lineNumber: 60\n                            },\n                            __self: this,\n                            children: \"Sign In \"\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n}\n_s1(Header, \"jjZEjxT/2qVu5hk72tnJuReUMLE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFRRztBQUNnQjtBQUNZO0FBQ3RCO0FBQ0E7QUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRXRDYyxNQUFNLEdBQUcsQ0FBQzs7SUFDakIsR0FBSyxDQUFxQkosR0FBWSxHQUFaQSwyREFBVSxJQUF0QkssT0FBTyxHQUFLTCxHQUFZLENBQTlCTSxJQUFJO0lBQ1osR0FBSyxDQUFtQkosSUFBMEIsa0JBQTFCQSxzREFBYyxDQUFDQyx3REFBVSxPQUExQ0ksSUFBSSxHQUFhTCxJQUEwQixLQUFyQ00sT0FBTyxHQUFJTixJQUEwQjtJQUNsRCxHQUFLLENBQUNPLE1BQU0sR0FBR1Isc0RBQVM7SUFDeEIsTUFBTSxzRUFDSFMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBK0M7Ozs7Ozt3RkFDM0RELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWdEOzs7Ozs7O3FGQUU1REQsQ0FBRztvQkFDRkUsT0FBTyxFQUFFLFFBQVE7d0JBQUZILE1BQU0sQ0FBTkEsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBRzs7b0JBQzlCRixTQUFTLEVBQUMsQ0FBb0Q7Ozs7OzttR0FFN0RyQixtREFBSzt3QkFBQ3dCLEdBQUcsRUFBQyxDQUFlO3dCQUFDQyxNQUFNLEVBQUMsQ0FBTTt3QkFBQ0MsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7O3FGQUU3RE4sQ0FBRztvQkFDRkUsT0FBTyxFQUFFLFFBQVE7d0JBQUZILE1BQU0sQ0FBTkEsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBRzs7b0JBQzlCRixTQUFTLEVBQUMsQ0FBc0Q7Ozs7OzttR0FFL0RyQixtREFBSzt3QkFDSndCLEdBQUcsRUFBQyxDQUEwRTt3QkFDOUVDLE1BQU0sRUFBQyxDQUFNO3dCQUNiQyxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7c0ZBS3RCTixDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBeUM7Ozs7Ozs7NkZBQ3JEZCw0REFBUTs0QkFBQ2UsT0FBTyxFQUFFLFFBQVE7Z0NBQUZILE1BQU0sQ0FBTkEsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBRzs7NEJBQUdGLFNBQVMsRUFBQyxDQUFROzs7Ozs7OzZGQUM1RGYsOERBQVE7NEJBQUNlLFNBQVMsRUFBQyxDQUE4Qjs7Ozs7Ozt3QkFFakROLE9BQU87O3FHQUVIYixvRUFBYztvQ0FDYm9CLE9BQU8sRUFBRSxRQUFRO3dDQUFGSixNQUFNLENBQU5BLE9BQU8sQ0FBQyxJQUFJOztvQ0FDM0JHLFNBQVMsRUFBQyxDQUFROzs7Ozs7O3FHQUVuQk0sQ0FBRztvQ0FDRkwsT0FBTyxFQUFFYixvREFBTztvQ0FDaEJlLEdBQUcsRUFBRVQsT0FBTyxDQUFDYSxJQUFJLENBQUNDLEtBQUs7b0NBQ3ZCQyxHQUFHLEVBQUMsQ0FBYTtvQ0FDakJULFNBQVMsRUFBQyxDQUE2Qzs7Ozs7Ozs7a0dBSTFEVSxDQUFNOzRCQUFDVCxPQUFPLEVBQUVkLG1EQUFNOzs7Ozs7c0NBQUUsQ0FBUTs7Ozs7OztBQU03QyxDQUFDO0lBbERRTSxNQUFNOztRQUNhSix1REFBVTtRQUNaRSxrREFBYztRQUN2QkQsa0RBQVM7OztLQUhqQkcsTUFBTTtBQW9EZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge1xuICBTZWFyY2hJY29uLFxuICBQbHVzQ2lyY2xlSWNvbixcbiAgVXNlckdyb3VwSWNvbixcbiAgSGVhcnRJY29uLFxuICBQYXBlckFpcnBsYW5lSWNvbixcbiAgTWVudUljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCB7IEhvbWVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBtb2RhbFN0YXRlIH0gZnJvbSBcIi4uL2F0b21zL21vZGFsQXRvbVwiO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VSZWNvaWxTdGF0ZShtb2RhbFN0YXRlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctc20gYm9yZGVyLWIgYmctd2hpdGUgc3RpY2t5IHRvcC0wIHotNTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWF4LXctNnhsIG14LTUgeGw6bXgtYXV0b1wiPlxuICAgICAgICB7LyogTEVGVCAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoaWRkZW4gbGc6aW5saW5lLWdyaWQgdy0zMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3Bob3RvYXBwLnBuZ1wiIGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xMCBsZzpoaWRkZW4gZmxleC1zaHJpbmstMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnNlZWtwbmcuY29tL3BuZy9mdWxsLzEzMS0xMzEwMzg0X3BuZy1maWxlLWRpYXJ5LWljb24tcG5nLnBuZ1wiXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBSSUdIVCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBzcGFjZS14LTRcIj5cbiAgICAgICAgICA8SG9tZUljb24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfSBjbGFzc05hbWU9XCJuYXZCdG5cIiAvPlxuICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9XCJoLTYgbWQ6aGlkZGVuIGN1cnNvci1wb2ludGVyXCIgLz5cblxuICAgICAgICAgIHtzZXNzaW9uID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFBsdXNDaXJjbGVJY29uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZCdG5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2lnbk91dH1cbiAgICAgICAgICAgICAgICBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlIHBpY1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG10LTIgbWItMiBoLTEwIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduSW59PlNpZ24gSW4gPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiU2VhcmNoSWNvbiIsIlBsdXNDaXJjbGVJY29uIiwiVXNlckdyb3VwSWNvbiIsIkhlYXJ0SWNvbiIsIlBhcGVyQWlycGxhbmVJY29uIiwiTWVudUljb24iLCJIb21lSWNvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwidXNlUmVjb2lsU3RhdGUiLCJtb2RhbFN0YXRlIiwiSGVhZGVyIiwic2Vzc2lvbiIsImRhdGEiLCJvcGVuIiwic2V0T3BlbiIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwdXNoIiwic3JjIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaW1nIiwidXNlciIsImltYWdlIiwiYWx0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});
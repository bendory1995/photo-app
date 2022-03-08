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

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/modalAtom */ \"./atoms/modalAtom.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Modal() {\n    _s1();\n    var ref = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_2__.modalState), 2), open = ref[0], setOpen = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Root, {\n        show: open,\n        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,\n        __source: {\n            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n            lineNumber: 8\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {\n            as: \"div\",\n            className: \"fixed z-10 inset-0 overflow-y-auto\",\n            onClose: setOpen,\n            __source: {\n                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n                lineNumber: 9\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 \",\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n                    lineNumber: 14\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {\n                        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,\n                        enter: \"ease-out duration-300\",\n                        enterFrom: \"opacity-0\",\n                        enterTo: \"opacity-100\",\n                        leave: \"ease-in duration-200\",\n                        leaveFrom: \"opacity-100\",\n                        leaveTo: \"opacity-0\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n                            lineNumber: 15\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Overlay, {\n                            className: \"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity\",\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n                                lineNumber: 24\n                            },\n                            __self: this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"hidden sm:inline-block sm:align-middle sm:h-screen\",\n                        \"aria-hidden\": \"true\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n                            lineNumber: 27\n                        },\n                        __self: this,\n                        children: \"​\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {\n                        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,\n                        enter: \"ease-out duration-300\",\n                        enterFrom: \"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95\",\n                        enterTo: \"opacity-100 translate-y-0 sm:scale-100\",\n                        leave: \"ease-in duration-200\",\n                        leaveFrom: \"opacity-100 translate-y-0 sm:scale-100\",\n                        leaveTo: \"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95\",\n                        __source: {\n                            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n                            lineNumber: 33\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6\",\n                            __source: {\n                                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n                                lineNumber: 42\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n                                    lineNumber: 43\n                                },\n                                __self: this\n                            })\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n}\n_s1(Modal, \"ZymDfSK4bifFQw46JYzLQD0I7eM=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState\n    ];\n});\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDUTtBQUNPO0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FDdkJLLEtBQUssR0FBRyxDQUFDOztJQUNoQixHQUFLLENBQW1CTCxHQUEwQixrQkFBMUJBLHNEQUFjLENBQUNDLHdEQUFVLE9BQTFDSyxJQUFJLEdBQWFOLEdBQTBCLEtBQXJDTyxPQUFPLEdBQUlQLEdBQTBCO0lBQ2xELE1BQU0sc0VBQ0hHLDhEQUFlO1FBQUNNLElBQUksRUFBRUgsSUFBSTtRQUFFSSxFQUFFLEVBQUVOLDJDQUFROzs7Ozs7dUZBQ3RDRixxREFBTTtZQUNMUSxFQUFFLEVBQUMsQ0FBSztZQUNSQyxTQUFTLEVBQUMsQ0FBb0M7WUFDOUNDLE9BQU8sRUFBRUwsT0FBTzs7Ozs7OzRGQUVmTSxDQUFHO2dCQUFDRixTQUFTLEVBQUMsQ0FBMEc7Ozs7Ozs7eUZBQ3RIUiwrREFBZ0I7d0JBQ2ZPLEVBQUUsRUFBRU4sMkNBQVE7d0JBQ1pXLEtBQUssRUFBQyxDQUF1Qjt3QkFDN0JDLFNBQVMsRUFBQyxDQUFXO3dCQUNyQkMsT0FBTyxFQUFDLENBQWE7d0JBQ3JCQyxLQUFLLEVBQUMsQ0FBc0I7d0JBQzVCQyxTQUFTLEVBQUMsQ0FBYTt3QkFDdkJDLE9BQU8sRUFBQyxDQUFXOzs7Ozs7dUdBRWxCbEIsNkRBQWM7NEJBQUNTLFNBQVMsRUFBQyxDQUE0RDs7Ozs7Ozs7eUZBR3ZGVyxDQUFJO3dCQUNIWCxTQUFTLEVBQUMsQ0FBb0Q7d0JBQzlEWSxDQUFXLGNBQUMsQ0FBTTs7Ozs7O2tDQUNuQixDQUVEOzt5RkFDQ3BCLCtEQUFnQjt3QkFDZk8sRUFBRSxFQUFFTiwyQ0FBUTt3QkFDWlcsS0FBSyxFQUFDLENBQXVCO3dCQUM3QkMsU0FBUyxFQUFDLENBQXNEO3dCQUNoRUMsT0FBTyxFQUFDLENBQXdDO3dCQUNoREMsS0FBSyxFQUFDLENBQXNCO3dCQUM1QkMsU0FBUyxFQUFDLENBQXdDO3dCQUNsREMsT0FBTyxFQUFDLENBQXNEOzs7Ozs7dUdBRTdEUCxDQUFHOzRCQUFDRixTQUFTLEVBQUMsQ0FBZ0w7Ozs7OzsyR0FDNUxFLENBQUc7Ozs7Ozs7Ozs7Ozs7QUFPbEIsQ0FBQztJQTdDUVIsS0FBSzs7UUFDWUwsa0RBQWM7OztLQUQvQkssS0FBSztBQThDZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9kYWwuanM/MDI4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IG1vZGFsU3RhdGUgfSBmcm9tIFwiLi4vYXRvbXMvbW9kYWxBdG9tXCI7XG5pbXBvcnQgeyBEaWFsb2csIFRyYW5zaXRpb24gfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiBNb2RhbCgpIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlUmVjb2lsU3RhdGUobW9kYWxTdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPFRyYW5zaXRpb24uUm9vdCBzaG93PXtvcGVufSBhcz17RnJhZ21lbnR9PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBhcz1cImRpdlwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHotMTAgaW5zZXQtMCBvdmVyZmxvdy15LWF1dG9cIlxuICAgICAgICBvbkNsb3NlPXtzZXRPcGVufVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIG1pbi1oLVs4MDBweF0gc206bWluLWgtc2NyZWVuIHB0LTQgcHgtNCBwYi0yMCB0ZXh0LWNlbnRlciBzbTpibG9jayBzbTpwLTAgXCI+XG4gICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcbiAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXG4gICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ncmF5LTUwMCBiZy1vcGFjaXR5LTc1IHRyYW5zaXRpb24tb3BhY2l0eVwiIC8+XG4gICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmUtYmxvY2sgc206YWxpZ24tbWlkZGxlIHNtOmgtc2NyZWVuXCJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgJiM4MjAzO1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxuICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTQgc206dHJhbnNsYXRlLXktMCBzbTpzY2FsZS05NVwiXG4gICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCBzbTpzY2FsZS0xMDBcIlxuICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wIHNtOnNjYWxlLTEwMFwiXG4gICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTQgc206dHJhbnNsYXRlLXktMCBzbTpzY2FsZS05NVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYWxpZ24tYm90dG9tIGJnLXdoaXRlIHJvdW5kZWQtbGcgcHgtNCBwdC01IHBiLTQgdGV4dC1sZWZ0IG92ZXJmbG93LWhpZGRlbiBzaGFkb3cteGwgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIHNtOm15LTggc206YWxpZ24tbWlkZGxlIHNtOm1heC13LXNtIHNtOnctZnVsbCBzbTpwLTZcIj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L1RyYW5zaXRpb24uUm9vdD5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl0sIm5hbWVzIjpbInVzZVJlY29pbFN0YXRlIiwibW9kYWxTdGF0ZSIsIkRpYWxvZyIsIlRyYW5zaXRpb24iLCJGcmFnbWVudCIsIk1vZGFsIiwib3BlbiIsInNldE9wZW4iLCJSb290Iiwic2hvdyIsImFzIiwiY2xhc3NOYW1lIiwib25DbG9zZSIsImRpdiIsIkNoaWxkIiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiT3ZlcmxheSIsInNwYW4iLCJhcmlhLWhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Modal.js\n");

/***/ })

});
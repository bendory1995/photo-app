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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_modalAtom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/modalAtom */ \"./atoms/modalAtom.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Modal() {\n    _s1();\n    var ref = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_atoms_modalAtom__WEBPACK_IMPORTED_MODULE_2__.modalState), 2), open = ref[0], setOpen = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Root, {\n        show: open,\n        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,\n        __source: {\n            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n            lineNumber: 8\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {\n            as: \"div\",\n            className: \"fixed z-10 inset-0 overflow-y-auto\",\n            onClose: setOpen,\n            __source: {\n                fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n                lineNumber: 9\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 \",\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n                    lineNumber: 14\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Childas, {\n                    as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,\n                    enter: \"ease-out duration-300\",\n                    enterFrom: \"opacity-0\",\n                    enterTo: \"opacity-100\",\n                    leave: \"ease-in duration-200\",\n                    leaveFrom: \"opacity-100\",\n                    leaveTo: \"opacity-0\",\n                    __source: {\n                        fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Modal.js\",\n                        lineNumber: 15\n                    },\n                    __self: this\n                })\n            })\n        })\n    }));\n}\n_s1(Modal, \"ZymDfSK4bifFQw46JYzLQD0I7eM=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState\n    ];\n});\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDUTtBQUNPO0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FDdkJLLEtBQUssR0FBRyxDQUFDOztJQUNoQixHQUFLLENBQW1CTCxHQUEwQixrQkFBMUJBLHNEQUFjLENBQUNDLHdEQUFVLE9BQTFDSyxJQUFJLEdBQWFOLEdBQTBCLEtBQXJDTyxPQUFPLEdBQUlQLEdBQTBCO0lBQ2xELE1BQU0sc0VBQ0hHLDhEQUFlO1FBQUNNLElBQUksRUFBRUgsSUFBSTtRQUFFSSxFQUFFLEVBQUVOLDJDQUFROzs7Ozs7dUZBQ3RDRixxREFBTTtZQUNMUSxFQUFFLEVBQUMsQ0FBSztZQUNSQyxTQUFTLEVBQUMsQ0FBb0M7WUFDOUNDLE9BQU8sRUFBRUwsT0FBTzs7Ozs7OzJGQUVmTSxDQUFHO2dCQUFDRixTQUFTLEVBQUMsQ0FBMEc7Ozs7OzsrRkFDdEhSLGlFQUFrQjtvQkFDakJPLEVBQUUsRUFBRU4sMkNBQVE7b0JBQ1pXLEtBQUssRUFBQyxDQUF1QjtvQkFDN0JDLFNBQVMsRUFBQyxDQUFXO29CQUNyQkMsT0FBTyxFQUFDLENBQWE7b0JBQ3JCQyxLQUFLLEVBQUMsQ0FBc0I7b0JBQzVCQyxTQUFTLEVBQUMsQ0FBYTtvQkFDdkJDLE9BQU8sRUFBQyxDQUFXOzs7Ozs7Ozs7O0FBTS9CLENBQUM7SUF2QlFmLEtBQUs7O1FBQ1lMLGtEQUFjOzs7S0FEL0JLLEtBQUs7QUF3QmQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vZGFsLmpzPzAyODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBtb2RhbFN0YXRlIH0gZnJvbSBcIi4uL2F0b21zL21vZGFsQXRvbVwiO1xuaW1wb3J0IHsgRGlhbG9nLCBUcmFuc2l0aW9uIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gTW9kYWwoKSB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVJlY29pbFN0YXRlKG1vZGFsU3RhdGUpO1xuICByZXR1cm4gKFxuICAgIDxUcmFuc2l0aW9uLlJvb3Qgc2hvdz17b3Blbn0gYXM9e0ZyYWdtZW50fT5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgYXM9XCJkaXZcIlxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB6LTEwIGluc2V0LTAgb3ZlcmZsb3cteS1hdXRvXCJcbiAgICAgICAgb25DbG9zZT17c2V0T3Blbn1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBtaW4taC1bODAwcHhdIHNtOm1pbi1oLXNjcmVlbiBwdC00IHB4LTQgcGItMjAgdGV4dC1jZW50ZXIgc206YmxvY2sgc206cC0wIFwiPlxuICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkYXNcbiAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXG4gICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICAgICAgICA+PC9UcmFuc2l0aW9uLkNoaWxkYXM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9UcmFuc2l0aW9uLlJvb3Q+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdLCJuYW1lcyI6WyJ1c2VSZWNvaWxTdGF0ZSIsIm1vZGFsU3RhdGUiLCJEaWFsb2ciLCJUcmFuc2l0aW9uIiwiRnJhZ21lbnQiLCJNb2RhbCIsIm9wZW4iLCJzZXRPcGVuIiwiUm9vdCIsInNob3ciLCJhcyIsImNsYXNzTmFtZSIsIm9uQ2xvc2UiLCJkaXYiLCJDaGlsZGFzIiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Modal.js\n");

/***/ })

});
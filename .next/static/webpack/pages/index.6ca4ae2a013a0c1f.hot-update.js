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

/***/ "./components/Posts.js":
/*!*****************************!*\
  !*** ./components/Posts.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ \"./components/Post.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Posts() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), posts = ref[0], setPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"posts\"), (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)(\"timestamp\", \"desc\")), function(snapshot) {\n            setPosts(snapshot.docs);\n        });\n    }, [\n        _firebase__WEBPACK_IMPORTED_MODULE_5__.db\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Posts.js\",\n            lineNumber: 21\n        },\n        __self: this,\n        children: posts.map(function(post) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: post.id,\n                username: post.data().username,\n                userImg: post.data().profileImg,\n                img: post.img,\n                caption: post.caption,\n                __source: {\n                    fileName: \"/Users/alexoh/Documents/Projects/photo-app/components/Posts.js\",\n                    lineNumber: 24\n                },\n                __self: _this\n            }, post.id);\n        })\n    }));\n}\n_s(Posts, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNLO0FBQ2E7QUFDaUM7QUFDNUM7O1NBRXZCUyxLQUFLLEdBQUcsQ0FBQzs7O0lBQ2hCLEdBQUssQ0FBcUJQLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBOUJRLEtBQUssR0FBY1IsR0FBWSxLQUF4QlMsUUFBUSxHQUFJVCxHQUFZO0lBRXRDQyxnREFBUyxDQUNQLFFBQ0Y7UUFBSUUsTUFBTSxDQUFOQSwrREFBVSxDQUNSRSwwREFBSyxDQUFDSCwrREFBVSxDQUFDSSx5Q0FBRSxFQUFFLENBQU8sU0FBR0YsNERBQU8sQ0FBQyxDQUFXLFlBQUUsQ0FBTSxTQUMxRCxRQUFRLENBQVBNLFFBQVEsRUFBSyxDQUFDO1lBQ2JELFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJO1FBQ3hCLENBQUM7T0FFTCxDQUFDTDtRQUFBQSx5Q0FBRTtJQUFBLENBQUM7SUFFTixNQUFNLHNFQUNITSxDQUFHOzs7Ozs7a0JBRURKLEtBQUssQ0FBQ0ssR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSTswQkFDZCxNQUNSLENBQUMsdURBRFFoQiw2Q0FBSTtnQkFFSGlCLEVBQUUsRUFBRUQsSUFBSSxDQUFDQyxFQUFFO2dCQUNYQyxRQUFRLEVBQUVGLElBQUksQ0FBQ0csSUFBSSxHQUFHRCxRQUFRO2dCQUM5QkUsT0FBTyxFQUFFSixJQUFJLENBQUNHLElBQUksR0FBR0UsVUFBVTtnQkFDL0JDLEdBQUcsRUFBRU4sSUFBSSxDQUFDTSxHQUFHO2dCQUNiQyxPQUFPLEVBQUVQLElBQUksQ0FBQ08sT0FBTzs7Ozs7O2VBTGhCUCxJQUFJLENBQUNDLEVBQUU7OztBQVV0QixDQUFDO0dBNUJRUixLQUFLO0tBQUxBLEtBQUs7QUE2QmQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RzLmpzPzc1ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3QgZnJvbSBcIi4vUG9zdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBvblNuYXBzaG90LCBvcmRlckJ5LCBxdWVyeSB9IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xuXG5mdW5jdGlvbiBQb3N0cygpIHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+XG4gICAgICBvblNuYXBzaG90KFxuICAgICAgICBxdWVyeShjb2xsZWN0aW9uKGRiLCBcInBvc3RzXCIpLCBvcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiZGVzY1wiKSksXG4gICAgICAgIChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgIHNldFBvc3RzKHNuYXBzaG90LmRvY3MpO1xuICAgICAgICB9XG4gICAgICApLFxuICAgIFtkYl1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgey8qUE9TVCovfVxuICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8UG9zdFxuICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICBpZD17cG9zdC5pZH1cbiAgICAgICAgICB1c2VybmFtZT17cG9zdC5kYXRhKCkudXNlcm5hbWV9XG4gICAgICAgICAgdXNlckltZz17cG9zdC5kYXRhKCkucHJvZmlsZUltZ31cbiAgICAgICAgICBpbWc9e3Bvc3QuaW1nfVxuICAgICAgICAgIGNhcHRpb249e3Bvc3QuY2FwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XG4iXSwibmFtZXMiOlsiUG9zdCIsIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb2xsZWN0aW9uIiwib25TbmFwc2hvdCIsIm9yZGVyQnkiLCJxdWVyeSIsImRiIiwiUG9zdHMiLCJwb3N0cyIsInNldFBvc3RzIiwic25hcHNob3QiLCJkb2NzIiwiZGl2IiwibWFwIiwicG9zdCIsImlkIiwidXNlcm5hbWUiLCJkYXRhIiwidXNlckltZyIsInByb2ZpbGVJbWciLCJpbWciLCJjYXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Posts.js\n");

/***/ })

});
webpackHotUpdate_N_E("pages/auth",{

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/client.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_auth_auth_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/auth/auth-form */ \"./components/auth/auth-form.js\");\n\n\nvar _jsxFileName = \"/Users/user/Downloads/nextjs-course-code-12-auth-extra-files/starting-project/pages/auth.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AuthPage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      isLoading = _useState[0],\n      setIsLoading = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"getSession\"])().then(function (session) {\n      if (session) {\n        router.replace(\"/\");\n      } else {\n        setIsLoading(false);\n      }\n    });\n  }, [router]);\n\n  if (isLoading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading ...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_auth_auth_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 10\n  }, this);\n}\n\n_s(AuthPage, \"l9mOnJ2XXArxG69ajpcNCw8SPqI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = AuthPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC5qcz9jYTRlIl0sIm5hbWVzIjpbIkF1dGhQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJnZXRTZXNzaW9uIiwidGhlbiIsInNlc3Npb24iLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGtCLGtCQUdnQkMsc0RBQVEsQ0FBQyxJQUFELENBSHhCO0FBQUEsTUFHWEMsU0FIVztBQUFBLE1BR0FDLFlBSEE7O0FBS2xCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsdUVBQVUsR0FBR0MsSUFBYixDQUFrQixVQUFDQyxPQUFELEVBQWE7QUFDN0IsVUFBSUEsT0FBSixFQUFhO0FBQ1hSLGNBQU0sQ0FBQ1MsT0FBUCxDQUFlLEdBQWY7QUFDRCxPQUZELE1BRU87QUFDTEwsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQVJRLEVBUU4sQ0FBQ0osTUFBRCxDQVJNLENBQVQ7O0FBVUEsTUFBSUcsU0FBSixFQUFlO0FBQ2Isd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVELHNCQUFPLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQXBCUUosUTtVQUNRRSxxRDs7O0tBRFJGLFE7QUFzQk1BLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24sIHNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXV0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aC9hdXRoLWZvcm1cIjtcblxuZnVuY3Rpb24gQXV0aFBhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFNlc3Npb24oKS50aGVuKChzZXNzaW9uKSA9PiB7XG4gICAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIDxBdXRoRm9ybSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth.js\n");

/***/ })

})
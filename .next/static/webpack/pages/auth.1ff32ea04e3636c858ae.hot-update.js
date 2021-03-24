webpackHotUpdate_N_E("pages/auth",{

/***/ "./components/auth/auth-form.js":
/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_user_Downloads_nextjs_course_code_12_auth_extra_files_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_user_Downloads_nextjs_course_code_12_auth_extra_files_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Downloads_nextjs_course_code_12_auth_extra_files_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_user_Downloads_nextjs_course_code_12_auth_extra_files_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-form.module.css */ \"./components/auth/auth-form.module.css\");\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/client.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/user/Downloads/nextjs-course-code-12-auth-extra-files/starting-project/components/auth/auth-form.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar createUser = /*#__PURE__*/function () {\n  var _ref = Object(_Users_user_Downloads_nextjs_course_code_12_auth_extra_files_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_user_Downloads_nextjs_course_code_12_auth_extra_files_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(email, password) {\n    var response, data;\n    return _Users_user_Downloads_nextjs_course_code_12_auth_extra_files_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"/api/auth/signup\", {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                email: email,\n                password: password\n              })\n            });\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context.sent;\n\n            if (response.ok) {\n              _context.next = 8;\n              break;\n            }\n\n            throw new Error(data.message || \"Something went wrong\");\n\n          case 8:\n            return _context.abrupt(\"return\", data);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function createUser(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction AuthForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      isLogin = _useState[0],\n      setIsLogin = _useState[1];\n\n  var emailInput = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n  var passwordInput = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  function switchAuthModeHandler() {\n    setIsLogin(function (prevState) {\n      return !prevState;\n    });\n  }\n\n  var submitHandler = /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_user_Downloads_nextjs_course_code_12_auth_extra_files_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_user_Downloads_nextjs_course_code_12_auth_extra_files_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(event) {\n      var emailValue, passwordValue, result, _result;\n\n      return _Users_user_Downloads_nextjs_course_code_12_auth_extra_files_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              //Values of inputs\n              emailValue = emailInput.current.value;\n              passwordValue = passwordInput.current.value; //\n\n              event.preventDefault(); //\n\n              if (!isLogin) {\n                _context2.next = 11;\n                break;\n              }\n\n              console.log(emailValue);\n              _context2.next = 7;\n              return Object(next_auth_client__WEBPACK_IMPORTED_MODULE_5__[\"signIn\"])(\"credentials\", {\n                redirect: false,\n                email: emailValue,\n                password: passwordValue\n              });\n\n            case 7:\n              result = _context2.sent;\n              console.log(result);\n              _context2.next = 21;\n              break;\n\n            case 11:\n              _context2.prev = 11;\n              _context2.next = 14;\n              return createUser(emailValue, passwordValue);\n\n            case 14:\n              _result = _context2.sent;\n              console.log(_result);\n              _context2.next = 21;\n              break;\n\n            case 18:\n              _context2.prev = 18;\n              _context2.t0 = _context2[\"catch\"](11);\n              console.log(_context2.t0);\n\n            case 21:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[11, 18]]);\n    }));\n\n    return function submitHandler(_x3) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.auth,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: isLogin ? \"Login\" : \"Sign Up\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"email\",\n          children: \"Your Email\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          required: true,\n          ref: emailInput\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"password\",\n          children: \"Your Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          id: \"password\",\n          ref: passwordInput,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actions,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: isLogin ? \"Login\" : \"Create Account\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.toggle,\n          onClick: switchAuthModeHandler,\n          children: isLogin ? \"Create new account\" : \"Login with existing account\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AuthForm, \"RZTE3LWh5eF13c5rVcUkTX+LqyM=\");\n\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGgtZm9ybS5qcz9lZTk4Il0sIm5hbWVzIjpbImNyZWF0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib2siLCJFcnJvciIsIm1lc3NhZ2UiLCJBdXRoRm9ybSIsInVzZVN0YXRlIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJlbWFpbElucHV0IiwidXNlUmVmIiwicGFzc3dvcmRJbnB1dCIsInN3aXRjaEF1dGhNb2RlSGFuZGxlciIsInByZXZTdGF0ZSIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsImVtYWlsVmFsdWUiLCJjdXJyZW50IiwidmFsdWUiLCJwYXNzd29yZFZhbHVlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic2lnbkluIiwicmVkaXJlY3QiLCJyZXN1bHQiLCJjbGFzc2VzIiwiYXV0aCIsImNvbnRyb2wiLCJhY3Rpb25zIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVU7QUFBQSxrWEFBRyxpQkFBT0MsS0FBUCxFQUFjQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ01DLEtBQUssQ0FBQyxrQkFBRCxFQUFxQjtBQUMvQ0Msb0JBQU0sRUFBRSxNQUR1QztBQUUvQ0MscUJBQU8sRUFBRTtBQUNQLGdDQUFnQjtBQURULGVBRnNDO0FBSy9DQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQlAscUJBQUssRUFBRUEsS0FEWTtBQUVuQkMsd0JBQVEsRUFBRUE7QUFGUyxlQUFmO0FBTHlDLGFBQXJCLENBRFg7O0FBQUE7QUFDWE8sb0JBRFc7QUFBQTtBQUFBLG1CQVlFQSxRQUFRLENBQUNDLElBQVQsRUFaRjs7QUFBQTtBQVlYQyxnQkFaVzs7QUFBQSxnQkFjWkYsUUFBUSxDQUFDRyxFQWRHO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQWVULElBQUlDLEtBQUosQ0FBVUYsSUFBSSxDQUFDRyxPQUFMLElBQWdCLHNCQUExQixDQWZTOztBQUFBO0FBQUEsNkNBa0JWSCxJQWxCVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWWCxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCOztBQXFCQSxTQUFTZSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsSUFBRCxDQURwQjtBQUFBLE1BQ1hDLE9BRFc7QUFBQSxNQUNGQyxVQURFOztBQUdsQixNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRCxvREFBTSxFQUE1Qjs7QUFFQSxXQUFTRSxxQkFBVCxHQUFpQztBQUMvQkosY0FBVSxDQUFDLFVBQUNLLFNBQUQ7QUFBQSxhQUFlLENBQUNBLFNBQWhCO0FBQUEsS0FBRCxDQUFWO0FBQ0Q7O0FBRUQsTUFBTUMsYUFBYTtBQUFBLHFYQUFHLGtCQUFPQyxLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEI7QUFDTUMsd0JBRmMsR0FFRFAsVUFBVSxDQUFDUSxPQUFYLENBQW1CQyxLQUZsQjtBQUdkQywyQkFIYyxHQUdFUixhQUFhLENBQUNNLE9BQWQsQ0FBc0JDLEtBSHhCLEVBS3BCOztBQUNBSCxtQkFBSyxDQUFDSyxjQUFOLEdBTm9CLENBUXBCOztBQVJvQixtQkFTaEJiLE9BVGdCO0FBQUE7QUFBQTtBQUFBOztBQVVsQmMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTixVQUFaO0FBVmtCO0FBQUEscUJBV0dPLCtEQUFNLENBQUMsYUFBRCxFQUFnQjtBQUN6Q0Msd0JBQVEsRUFBRSxLQUQrQjtBQUV6Q2pDLHFCQUFLLEVBQUV5QixVQUZrQztBQUd6Q3hCLHdCQUFRLEVBQUUyQjtBQUgrQixlQUFoQixDQVhUOztBQUFBO0FBV1pNLG9CQVhZO0FBaUJsQkoscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxNQUFaO0FBakJrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW9CS25DLFVBQVUsQ0FBQzBCLFVBQUQsRUFBYUcsYUFBYixDQXBCZjs7QUFBQTtBQW9CVk0scUJBcEJVO0FBcUJoQkoscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxPQUFaO0FBckJnQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXVCaEJKLHFCQUFPLENBQUNDLEdBQVI7O0FBdkJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiUixhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQTRCQSxzQkFDRTtBQUFTLGFBQVMsRUFBRVksNERBQU8sQ0FBQ0MsSUFBNUI7QUFBQSw0QkFDRTtBQUFBLGdCQUFLcEIsT0FBTyxHQUFHLE9BQUgsR0FBYTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFNLGNBQVEsRUFBRU8sYUFBaEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVZLDREQUFPLENBQUNFLE9BQXhCO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQW9CLFlBQUUsRUFBQyxPQUF2QjtBQUErQixrQkFBUSxNQUF2QztBQUF3QyxhQUFHLEVBQUVuQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBSyxpQkFBUyxFQUFFaUIsNERBQU8sQ0FBQ0UsT0FBeEI7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU8sY0FBSSxFQUFDLFVBQVo7QUFBdUIsWUFBRSxFQUFDLFVBQTFCO0FBQXFDLGFBQUcsRUFBRWpCLGFBQTFDO0FBQXlELGtCQUFRO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFTRTtBQUFLLGlCQUFTLEVBQUVlLDREQUFPLENBQUNHLE9BQXhCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBU3RCLE9BQU8sR0FBRyxPQUFILEdBQWE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBUyxFQUFFbUIsNERBQU8sQ0FBQ0ksTUFGckI7QUFHRSxpQkFBTyxFQUFFbEIscUJBSFg7QUFBQSxvQkFLR0wsT0FBTyxHQUFHLG9CQUFILEdBQTBCO0FBTHBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBL0RRRixROztLQUFBQSxRO0FBaUVNQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcblxuY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYXV0aC9zaWdudXBcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgfSksXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZnVuY3Rpb24gQXV0aEZvcm0oKSB7XG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSB1c2VSZWYoKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IHVzZVJlZigpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIC8vVmFsdWVzIG9mIGlucHV0c1xuICAgIGNvbnN0IGVtYWlsVmFsdWUgPSBlbWFpbElucHV0LmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgcGFzc3dvcmRWYWx1ZSA9IHBhc3N3b3JkSW5wdXQuY3VycmVudC52YWx1ZTtcblxuICAgIC8vXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vXG4gICAgaWYgKGlzTG9naW4pIHtcbiAgICAgIGNvbnNvbGUubG9nKGVtYWlsVmFsdWUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwge1xuICAgICAgICByZWRpcmVjdDogZmFsc2UsXG4gICAgICAgIGVtYWlsOiBlbWFpbFZhbHVlLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRWYWx1ZSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVVc2VyKGVtYWlsVmFsdWUsIHBhc3N3b3JkVmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRofT5cbiAgICAgIDxoMT57aXNMb2dpbiA/IFwiTG9naW5cIiA6IFwiU2lnbiBVcFwifTwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkIHJlZj17ZW1haWxJbnB1dH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5Zb3VyIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHJlZj17cGFzc3dvcmRJbnB1dH0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIkNyZWF0ZSBBY2NvdW50XCJ9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudG9nZ2xlfVxuICAgICAgICAgICAgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0xvZ2luID8gXCJDcmVhdGUgbmV3IGFjY291bnRcIiA6IFwiTG9naW4gd2l0aCBleGlzdGluZyBhY2NvdW50XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/auth-form.js\n");

/***/ })

})
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/auth/auth-form.js":
/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-form.module.css */ \"./components/auth/auth-form.module.css\");\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/user/Downloads/nextjs-course-code-12-auth-extra-files/starting-project/components/auth/auth-form.js\";\n\n\n\n\nconst createUser = async (email, password) => {\n  const response = await fetch(\"/api/auth/signup\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      email: email,\n      password: password\n    })\n  });\n  const data = await response.json();\n\n  if (!response.ok) {\n    throw new Error(data.message || \"Something went wrong\");\n  }\n\n  return data;\n};\n\nfunction AuthForm() {\n  const {\n    0: isLogin,\n    1: setIsLogin\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const emailInput = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  const passwordInput = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  function switchAuthModeHandler() {\n    setIsLogin(prevState => !prevState);\n  }\n\n  const submitHandler = async event => {\n    //Values of inputs\n    const emailValue = emailInput.current.value;\n    const passwordValue = passwordInput.current.value; //\n\n    event.preventDefault(); //\n\n    if (isLogin) {\n      const result = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"signIn\"])(\"credentials\", {\n        redirect: false,\n        email: emailValue,\n        password: passwordValue\n      }); //console.log(result);\n    } else {\n      try {\n        const result = await createUser(emailValue, passwordValue);\n        console.log(result);\n      } catch (error) {\n        console.log(error);\n      }\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.auth,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: isLogin ? \"Login\" : \"Sign Up\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"email\",\n          children: \"Your Email\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          required: true,\n          ref: emailInput\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"password\",\n          children: \"Your Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          id: \"password\",\n          ref: passwordInput,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.actions,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: isLogin ? \"Login\" : \"Create Account\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _auth_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.toggle,\n          onClick: switchAuthModeHandler,\n          children: isLogin ? \"Create new account\" : \"Login with existing account\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLmpzP2VlOTgiXSwibmFtZXMiOlsiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIkF1dGhGb3JtIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJ1c2VTdGF0ZSIsImVtYWlsSW5wdXQiLCJ1c2VSZWYiLCJwYXNzd29yZElucHV0Iiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwiZW1haWxWYWx1ZSIsImN1cnJlbnQiLCJ2YWx1ZSIsInBhc3N3b3JkVmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3VsdCIsInNpZ25JbiIsInJlZGlyZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY2xhc3NlcyIsImF1dGgiLCJjb250cm9sIiwiYWN0aW9ucyIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE9BQU9DLEtBQVAsRUFBY0MsUUFBZCxLQUEyQjtBQUM1QyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGtCQUFELEVBQXFCO0FBQy9DQyxVQUFNLEVBQUUsTUFEdUM7QUFFL0NDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRnNDO0FBSy9DQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CUixXQUFLLEVBQUVBLEtBRFk7QUFFbkJDLGNBQVEsRUFBRUE7QUFGUyxLQUFmO0FBTHlDLEdBQXJCLENBQTVCO0FBV0EsUUFBTVEsSUFBSSxHQUFHLE1BQU1QLFFBQVEsQ0FBQ1EsSUFBVCxFQUFuQjs7QUFFQSxNQUFJLENBQUNSLFFB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QU8sR0FBRyxvQkFBSCxHQUEwQjtBQUxwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEOztBQUVjRCx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hdXRoLWZvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcblxuY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvYXV0aC9zaWdudXBcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgfSksXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZnVuY3Rpb24gQXV0aEZvcm0oKSB7XG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSB1c2VSZWYoKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IHVzZVJlZigpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIC8vVmFsdWVzIG9mIGlucHV0c1xuICAgIGNvbnN0IGVtYWlsVmFsdWUgPSBlbWFpbElucHV0LmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgcGFzc3dvcmRWYWx1ZSA9IHBhc3N3b3JkSW5wdXQuY3VycmVudC52YWx1ZTtcblxuICAgIC8vXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vXG4gICAgaWYgKGlzTG9naW4pIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbihcImNyZWRlbnRpYWxzXCIsIHtcbiAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxuICAgICAgICBlbWFpbDogZW1haWxWYWx1ZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkVmFsdWUsXG4gICAgICB9KTtcblxuICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVVc2VyKGVtYWlsVmFsdWUsIHBhc3N3b3JkVmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRofT5cbiAgICAgIDxoMT57aXNMb2dpbiA/IFwiTG9naW5cIiA6IFwiU2lnbiBVcFwifTwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHJlcXVpcmVkIHJlZj17ZW1haWxJbnB1dH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5Zb3VyIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHJlZj17cGFzc3dvcmRJbnB1dH0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIkNyZWF0ZSBBY2NvdW50XCJ9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudG9nZ2xlfVxuICAgICAgICAgICAgb25DbGljaz17c3dpdGNoQXV0aE1vZGVIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0xvZ2luID8gXCJDcmVhdGUgbmV3IGFjY291bnRcIiA6IFwiTG9naW4gd2l0aCBleGlzdGluZyBhY2NvdW50XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/auth-form.js\n");

/***/ }),

/***/ "./components/auth/auth-form.module.css":
/*!**********************************************!*\
  !*** ./components/auth/auth-form.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"auth\": \"auth-form_auth__3FfGf\",\n\t\"control\": \"auth-form_control__2m7EA\",\n\t\"actions\": \"auth-form_actions__2JT2z\",\n\t\"toggle\": \"auth-form_toggle__2PHeb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLm1vZHVsZS5jc3M/NWI5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWZvcm0ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImF1dGhcIjogXCJhdXRoLWZvcm1fYXV0aF9fM0ZmR2ZcIixcblx0XCJjb250cm9sXCI6IFwiYXV0aC1mb3JtX2NvbnRyb2xfXzJtN0VBXCIsXG5cdFwiYWN0aW9uc1wiOiBcImF1dGgtZm9ybV9hY3Rpb25zX18ySlQyelwiLFxuXHRcInRvZ2dsZVwiOiBcImF1dGgtZm9ybV90b2dnbGVfXzJQSGViXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/auth-form.module.css\n");

/***/ }),

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_auth_auth_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/auth/auth-form */ \"./components/auth/auth-form.js\");\n\nvar _jsxFileName = \"/Users/user/Downloads/nextjs-course-code-12-auth-extra-files/starting-project/pages/auth.js\";\n\n\nfunction AuthPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_auth_auth_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoLmpzP2NhNGUiXSwibmFtZXMiOlsiQXV0aFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsc0JBQU8scUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRWNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtJztcblxuZnVuY3Rpb24gQXV0aFBhZ2UoKSB7XG4gIHJldHVybiA8QXV0aEZvcm0gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth.js\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
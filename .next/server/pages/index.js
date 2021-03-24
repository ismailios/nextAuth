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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/starting-page/starting-page.js":
/*!***************************************************!*\
  !*** ./components/starting-page/starting-page.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _starting_page_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./starting-page.module.css */ \"./components/starting-page/starting-page.module.css\");\n/* harmony import */ var _starting_page_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_starting_page_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/user/Downloads/nextjs-course-code-12-auth-extra-files/starting-project/components/starting-page/starting-page.js\";\n\n\nfunction StartingPageContent() {\n  // Show Link to Login page if NOT auth\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _starting_page_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.starting,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Welcome on Board!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartingPageContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YXJ0aW5nLXBhZ2Uvc3RhcnRpbmctcGFnZS5qcz9iNWI0Il0sIm5hbWVzIjpbIlN0YXJ0aW5nUGFnZUNvbnRlbnQiLCJjbGFzc2VzIiwic3RhcnRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxtQkFBVCxHQUErQjtBQUM3QjtBQUVBLHNCQUNFO0FBQVMsYUFBUyxFQUFFQyxnRUFBTyxDQUFDQyxRQUE1QjtBQUFBLDJCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNGLGtGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zdGFydGluZy1wYWdlL3N0YXJ0aW5nLXBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL3N0YXJ0aW5nLXBhZ2UubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIFN0YXJ0aW5nUGFnZUNvbnRlbnQoKSB7XG4gIC8vIFNob3cgTGluayB0byBMb2dpbiBwYWdlIGlmIE5PVCBhdXRoXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc3RhcnRpbmd9PlxuICAgICAgPGgxPldlbGNvbWUgb24gQm9hcmQhPC9oMT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0aW5nUGFnZUNvbnRlbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/starting-page/starting-page.js\n");

/***/ }),

/***/ "./components/starting-page/starting-page.module.css":
/*!***********************************************************!*\
  !*** ./components/starting-page/starting-page.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"starting\": \"starting-page_starting__3y2Ju\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YXJ0aW5nLXBhZ2Uvc3RhcnRpbmctcGFnZS5tb2R1bGUuY3NzPzQ3YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0YXJ0aW5nLXBhZ2Uvc3RhcnRpbmctcGFnZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3RhcnRpbmdcIjogXCJzdGFydGluZy1wYWdlX3N0YXJ0aW5nX18zeTJKdVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/starting-page/starting-page.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_starting_page_starting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/starting-page/starting-page */ \"./components/starting-page/starting-page.js\");\n\nvar _jsxFileName = \"/Users/user/Downloads/nextjs-course-code-12-auth-extra-files/starting-project/pages/index.js\";\n\n\nfunction HomePage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_starting_page_starting_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLHNCQUFPLHFFQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVjQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YXJ0aW5nUGFnZUNvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9zdGFydGluZy1wYWdlL3N0YXJ0aW5nLXBhZ2UnO1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgcmV0dXJuIDxTdGFydGluZ1BhZ2VDb250ZW50IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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
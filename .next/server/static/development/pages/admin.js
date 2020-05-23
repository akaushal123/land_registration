module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout/LayoutAdmin.js":
/*!******************************************!*\
  !*** ./components/Layout/LayoutAdmin.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _LayoutSuperAdmin_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LayoutSuperAdmin.module.css */ \"./components/Layout/LayoutSuperAdmin.module.css\");\n/* harmony import */ var _LayoutSuperAdmin_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LayoutSuperAdmin_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nclass LayoutSuperAdmin extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(\"link\", {\n      rel: \"stylesheet\",\n      href: \"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css\"\n    })), __jsx(\"div\", {\n      className: _LayoutSuperAdmin_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Container\n    }, __jsx(\"div\", {\n      className: _LayoutSuperAdmin_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Header\n    }, __jsx(\"div\", {\n      className: _LayoutSuperAdmin_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.LogoBox\n    }, __jsx(\"img\", {\n      src: \"/static/tiranga_national_emblem.png\",\n      alt: \"logo\"\n    })), __jsx(\"div\", {\n      className: _LayoutSuperAdmin_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.NavBox\n    }, __jsx(\"ul\", null, __jsx(\"li\", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      route: \"/admin\"\n    }, __jsx(\"a\", {\n      href: \"#\"\n    }, \"Home\"))), __jsx(\"li\", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      route: \"/admin/explore\"\n    }, __jsx(\"a\", {\n      href: \"#\"\n    }, \"Explore\"))), __jsx(\"li\", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      route: \"/admin/registerLand\"\n    }, __jsx(\"a\", {\n      href: \"#\"\n    }, \"Register Land\")))))), __jsx(\"div\", {\n      className: _LayoutSuperAdmin_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.clearfix\n    }), __jsx(\"div\", {\n      className: _LayoutSuperAdmin_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Children\n    }, this.props.children)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LayoutSuperAdmin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRBZG1pbi5qcz82ODBlIl0sIm5hbWVzIjpbIkxheW91dFN1cGVyQWRtaW4iLCJDb21wb25lbnQiLCJyZW5kZXIiLCJzdHlsZXMiLCJDb250YWluZXIiLCJIZWFkZXIiLCJMb2dvQm94IiwiTmF2Qm94IiwiY2xlYXJmaXgiLCJDaGlsZHJlbiIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZ0JBQU4sU0FBK0JDLCtDQUEvQixDQUF5QztBQUNyQ0MsUUFBTSxHQUFHO0FBQ0wsV0FDSSxNQUFDLDJEQUFELFFBQ0ksTUFBQyxnREFBRCxRQUNJO0FBQU0sU0FBRyxFQUFDLFlBQVY7QUFBdUIsVUFBSSxFQUFDO0FBQTVCLE1BREosQ0FESixFQUlJO0FBQUssZUFBUyxFQUFFQyxtRUFBTSxDQUFDQztBQUF2QixPQUNJO0FBQUssZUFBUyxFQUFFRCxtRUFBTSxDQUFDRTtBQUF2QixPQUNJO0FBQUssZUFBUyxFQUFFRixtRUFBTSxDQUFDRztBQUF2QixPQUNJO0FBQUssU0FBRyxFQUFDLHFDQUFUO0FBQStDLFNBQUcsRUFBQztBQUFuRCxNQURKLENBREosRUFJSTtBQUFLLGVBQVMsRUFBRUgsbUVBQU0sQ0FBQ0k7QUFBdkIsT0FDSSxrQkFDSSxrQkFDSSxNQUFDLDRDQUFEO0FBQU0sV0FBSyxFQUFDO0FBQVosT0FBcUI7QUFBRyxVQUFJLEVBQUM7QUFBUixjQUFyQixDQURKLENBREosRUFJSSxrQkFDSSxNQUFDLDRDQUFEO0FBQU0sV0FBSyxFQUFDO0FBQVosT0FBNkI7QUFBRyxVQUFJLEVBQUM7QUFBUixpQkFBN0IsQ0FESixDQUpKLEVBT0ksa0JBQ0ksTUFBQyw0Q0FBRDtBQUFNLFdBQUssRUFBQztBQUFaLE9BQWtDO0FBQUcsVUFBSSxFQUFDO0FBQVIsdUJBQWxDLENBREosQ0FQSixDQURKLENBSkosQ0FESixFQW1CSTtBQUFLLGVBQVMsRUFBRUosbUVBQU0sQ0FBQ0s7QUFBdkIsTUFuQkosRUFxQkk7QUFBSyxlQUFTLEVBQUVMLG1FQUFNLENBQUNNO0FBQXZCLE9BQ0MsS0FBS0MsS0FBTCxDQUFXQyxRQURaLENBckJKLENBSkosQ0FESjtBQWlDSDs7QUFuQ29DOztBQXNDMUJYLCtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0QWRtaW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dFN1cGVyQWRtaW4ubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBDb250YWluZXIsIFN0ZXBUaXRsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY2xhc3MgTGF5b3V0U3VwZXJBZG1pbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMTIvc2VtYW50aWMubWluLmNzc1wiLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxvZ29Cb3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy90aXJhbmdhX25hdGlvbmFsX2VtYmxlbS5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZCb3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvYWRtaW5cIj48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9hZG1pbi9leHBsb3JlXCI+PGEgaHJlZj1cIiNcIj5FeHBsb3JlPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvYWRtaW4vcmVnaXN0ZXJMYW5kXCI+PGEgaHJlZj1cIiNcIj5SZWdpc3RlciBMYW5kPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyZml4fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2hpbGRyZW59PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRTdXBlckFkbWluOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/LayoutAdmin.js\n");

/***/ }),

/***/ "./components/Layout/LayoutSuperAdmin.module.css":
/*!*******************************************************!*\
  !*** ./components/Layout/LayoutSuperAdmin.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Container\": \"LayoutSuperAdmin_Container__1BAHo\",\n\t\"clearfix\": \"LayoutSuperAdmin_clearfix__SRfKD\",\n\t\"LogoBox\": \"LayoutSuperAdmin_LogoBox__2GV2K\",\n\t\"NavBox\": \"LayoutSuperAdmin_NavBox__2ZzIx\",\n\t\"Main\": \"LayoutSuperAdmin_Main__3Gg1F\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRTdXBlckFkbWluLm1vZHVsZS5jc3M/NmYwYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0U3VwZXJBZG1pbi5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ29udGFpbmVyXCI6IFwiTGF5b3V0U3VwZXJBZG1pbl9Db250YWluZXJfXzFCQUhvXCIsXG5cdFwiY2xlYXJmaXhcIjogXCJMYXlvdXRTdXBlckFkbWluX2NsZWFyZml4X19TUmZLRFwiLFxuXHRcIkxvZ29Cb3hcIjogXCJMYXlvdXRTdXBlckFkbWluX0xvZ29Cb3hfXzJHVjJLXCIsXG5cdFwiTmF2Qm94XCI6IFwiTGF5b3V0U3VwZXJBZG1pbl9OYXZCb3hfXzJaekl4XCIsXG5cdFwiTWFpblwiOiBcIkxheW91dFN1cGVyQWRtaW5fTWFpbl9fM0dnMUZcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/LayoutSuperAdmin.module.css\n");

/***/ }),

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/Layout/LayoutAdmin */ \"./components/Layout/LayoutAdmin.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./pages/admin/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"connectEthereum\", () => {\n      ethereum.enable();\n    });\n  }\n\n  render() {\n    return __jsx(_components_Layout_LayoutAdmin__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, __jsx(\"section\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Main\n    }, __jsx(\"div\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.HeaderText\n    }, __jsx(\"h1\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.HeroText\n    }, __jsx(\"span\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.HeroText__sub1\n    }, \" Welcome to Online Land Registration \"), __jsx(\"span\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.HeroText__sub2\n    }, \" and Transfer of entitlement\"), __jsx(\"span\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.HeroText__sub3\n    }, \" Admin \"), __jsx(\"span\", {\n      className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.HeroText__sub4,\n      onClick: this.connectEthereum\n    }, \" Connect To Etherum\")))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9pbmRleC5qcz84YThhIl0sIm5hbWVzIjpbIkluZGV4IiwiQ29tcG9uZW50IiwiZXRoZXJldW0iLCJlbmFibGUiLCJyZW5kZXIiLCJzdHlsZXMiLCJNYWluIiwiSGVhZGVyVGV4dCIsIkhlcm9UZXh0IiwiSGVyb1RleHRfX3N1YjEiLCJIZXJvVGV4dF9fc3ViMiIsIkhlcm9UZXh0X19zdWIzIiwiSGVyb1RleHRfX3N1YjQiLCJjb25uZWN0RXRoZXJldW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBTixTQUFvQkMsK0NBQXBCLENBQThCO0FBQUE7QUFBQTs7QUFBQSw2Q0FFUixNQUFNO0FBQ3BCQyxjQUFRLENBQUNDLE1BQVQ7QUFDSCxLQUp5QjtBQUFBOztBQU0xQkMsUUFBTSxHQUFHO0FBQ0wsV0FDSSxNQUFDLHNFQUFELFFBQ0k7QUFBUyxlQUFTLEVBQUVDLHdEQUFNLENBQUNDO0FBQTNCLE9BQ0k7QUFBSyxlQUFTLEVBQUVELHdEQUFNLENBQUNFO0FBQXZCLE9BQ0k7QUFBSSxlQUFTLEVBQUVGLHdEQUFNLENBQUNHO0FBQXRCLE9BQ0k7QUFBTSxlQUFTLEVBQUVILHdEQUFNLENBQUNJO0FBQXhCLCtDQURKLEVBRUk7QUFBTSxlQUFTLEVBQUVKLHdEQUFNLENBQUNLO0FBQXhCLHNDQUZKLEVBR0k7QUFBTSxlQUFTLEVBQUVMLHdEQUFNLENBQUNNO0FBQXhCLGlCQUhKLEVBSUk7QUFBTSxlQUFTLEVBQUVOLHdEQUFNLENBQUNPLGNBQXhCO0FBQXdDLGFBQU8sRUFBRSxLQUFLQztBQUF0RCw2QkFKSixDQURKLENBREosQ0FESixDQURKO0FBY0g7O0FBckJ5Qjs7QUF3QmZiLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWRtaW4vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dEFkbWluJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIGNvbm5lY3RFdGhlcmV1bSA9ICgpID0+IHtcbiAgICAgICAgZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5NYWlufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5IZXJvVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuSGVyb1RleHRfX3N1YjF9PiBXZWxjb21lIHRvIE9ubGluZSBMYW5kIFJlZ2lzdHJhdGlvbiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuSGVyb1RleHRfX3N1YjJ9PiBhbmQgVHJhbnNmZXIgb2YgZW50aXRsZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuSGVyb1RleHRfX3N1YjN9PiBBZG1pbiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuSGVyb1RleHRfX3N1YjR9IG9uQ2xpY2s9e3RoaXMuY29ubmVjdEV0aGVyZXVtfT4gQ29ubmVjdCBUbyBFdGhlcnVtPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n");

/***/ }),

/***/ "./pages/admin/index.module.css":
/*!**************************************!*\
  !*** ./pages/admin/index.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Main\": \"admin_Main__1LupL\",\n\t\"HeaderText\": \"admin_HeaderText__tnT2Z\",\n\t\"HeroText\": \"admin_HeroText__FYZvQ\",\n\t\"HeroText__sub1\": \"admin_HeroText__sub1__3Hluw\",\n\t\"HeroText__sub2\": \"admin_HeroText__sub2__8DVHv\",\n\t\"HeroText__sub3\": \"admin_HeroText__sub3__1ROSN\",\n\t\"HeroText__sub4\": \"admin_HeroText__sub4__2OgOf\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbi9pbmRleC5tb2R1bGUuY3NzPzZhMjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTWFpblwiOiBcImFkbWluX01haW5fXzFMdXBMXCIsXG5cdFwiSGVhZGVyVGV4dFwiOiBcImFkbWluX0hlYWRlclRleHRfX3RuVDJaXCIsXG5cdFwiSGVyb1RleHRcIjogXCJhZG1pbl9IZXJvVGV4dF9fRlladlFcIixcblx0XCJIZXJvVGV4dF9fc3ViMVwiOiBcImFkbWluX0hlcm9UZXh0X19zdWIxX18zSGx1d1wiLFxuXHRcIkhlcm9UZXh0X19zdWIyXCI6IFwiYWRtaW5fSGVyb1RleHRfX3N1YjJfXzhEVkh2XCIsXG5cdFwiSGVyb1RleHRfX3N1YjNcIjogXCJhZG1pbl9IZXJvVGV4dF9fc3ViM19fMVJPU05cIixcblx0XCJIZXJvVGV4dF9fc3ViNFwiOiBcImFkbWluX0hlcm9UZXh0X19zdWI0X18yT2dPZlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/index.module.css\n");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const routes = __webpack_require__(/*! next-routes */ \"next-routes\")();\n\nmodule.exports = routes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanM/ZjFjMSJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFJQyxtQkFBTyxDQUFDLGdDQUFELENBQVAsRUFBaEI7O0FBR0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsTUFBakIiLCJmaWxlIjoiLi9yb3V0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSAgcmVxdWlyZShcIm5leHQtcm91dGVzXCIpKCk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./routes.js\n");

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/admin/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kaustubh/Documents/blockchain/fyp/proj_dev/c/pages/admin/index.js */"./pages/admin/index.js");


/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-routes\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiPzBkNGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-routes\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

/***/ })

/******/ });
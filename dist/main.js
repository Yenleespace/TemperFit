/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("window.getWeather = function () {\n  fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&timezone=America%2FNew_York').then(response => response.json()).then(data => {\n    document.getElementById(\"temperature\").innerHTML = data['current_weather']['temperature'];\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJ3aW5kb3ciLCJnZXRXZWF0aGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBlcmZpdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5nZXRXZWF0aGVyPSBmdW5jdGlvbigpIHtcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkub3Blbi1tZXRlby5jb20vdjEvZm9yZWNhc3Q/bGF0aXR1ZGU9NTIuNTImbG9uZ2l0dWRlPTEzLjQxJmhvdXJseT10ZW1wZXJhdHVyZV8ybSZjdXJyZW50X3dlYXRoZXI9dHJ1ZSZ0ZW1wZXJhdHVyZV91bml0PWZhaHJlbmhlaXQmdGltZXpvbmU9QW1lcmljYSUyRk5ld19Zb3JrJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBlcmF0dXJlXCIpLmlubmVySFRNTCA9IGRhdGFbJ2N1cnJlbnRfd2VhdGhlciddWyd0ZW1wZXJhdHVyZSddfSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLFVBQVUsR0FBRSxZQUFXO0VBQzFCQyxLQUFLLENBQUMsMEtBQTBLLENBQUMsQ0FDNUtDLElBQUksQ0FBRUMsUUFBUSxJQUFLQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDLENBQ25DRixJQUFJLENBQUVHLElBQUksSUFBSztJQUNaQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ0MsU0FBUyxHQUFHSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxhQUFhLENBQUM7RUFBQSxDQUFDLENBQUM7QUFDdkcsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wZXJmaXQvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
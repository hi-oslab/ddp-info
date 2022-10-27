"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_layout_canvas_jsx";
exports.ids = ["src_components_layout_canvas_jsx"];
exports.modules = {

/***/ "./src/components/layout/canvas.jsx":
/*!******************************************!*\
  !*** ./src/components/layout/canvas.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ \"@react-three/fiber\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei */ \"@react-three/drei\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/store */ \"./src/helpers/store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_store__WEBPACK_IMPORTED_MODULE_3__]);\n_helpers_store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst LControl = ()=>{\n    const dom = (0,_helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((state)=>state.dom);\n    const control = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (control.current) {\n            const domElement = dom.current;\n            const originalTouchAction = domElement.style[\"touch-action\"];\n            domElement.style[\"touch-action\"] = \"none\";\n            return ()=>{\n                domElement.style[\"touch-action\"] = originalTouchAction;\n            };\n        }\n    }, [\n        dom,\n        control\n    ]);\n    // @ts-ignore\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.OrbitControls, {\n        ref: control,\n        domElement: dom.current\n    }, void 0, false, {\n        fileName: \"/Users/sejinoh/Desktop/Open Source Lab 2022/DDP/ddp-info/src/components/layout/canvas.jsx\",\n        lineNumber: 22,\n        columnNumber: 10\n    }, undefined);\n};\nconst LCanvas = ({ children  })=>{\n    const dom = (0,_helpers_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((state)=>state.dom);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.Canvas, {\n        mode: \"concurrent\",\n        style: {\n            position: \"absolute\",\n            top: 0,\n            zIndex: 10\n        },\n        onCreated: (state)=>state.events.connect(dom.current),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LControl, {}, void 0, false, {\n                fileName: \"/Users/sejinoh/Desktop/Open Source Lab 2022/DDP/ddp-info/src/components/layout/canvas.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.Preload, {\n                all: true\n            }, void 0, false, {\n                fileName: \"/Users/sejinoh/Desktop/Open Source Lab 2022/DDP/ddp-info/src/components/layout/canvas.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sejinoh/Desktop/Open Source Lab 2022/DDP/ddp-info/src/components/layout/canvas.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LCanvas);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvY2FudmFzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDZTtBQUNwQjtBQUNHO0FBRTFDLE1BQU1NLFFBQVEsR0FBRyxJQUFNO0lBQ3JCLE1BQU1DLEdBQUcsR0FBR0osMERBQVEsQ0FBQyxDQUFDSyxLQUFLLEdBQUtBLEtBQUssQ0FBQ0QsR0FBRyxDQUFDO0lBQzFDLE1BQU1FLE9BQU8sR0FBR0osNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFNUJELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUlLLE9BQU8sQ0FBQ0MsT0FBTyxFQUFFO1lBQ25CLE1BQU1DLFVBQVUsR0FBR0osR0FBRyxDQUFDRyxPQUFPO1lBQzlCLE1BQU1FLG1CQUFtQixHQUFHRCxVQUFVLENBQUNFLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDNURGLFVBQVUsQ0FBQ0UsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUUxQyxPQUFPLElBQU07Z0JBQ1hGLFVBQVUsQ0FBQ0UsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHRCxtQkFBbUIsQ0FBQztZQUN6RCxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQyxFQUFFO1FBQUNMLEdBQUc7UUFBRUUsT0FBTztLQUFDLENBQUMsQ0FBQztJQUNuQixhQUFhO0lBQ2IscUJBQU8sOERBQUNSLDREQUFhO1FBQUNhLEdBQUcsRUFBRUwsT0FBTztRQUFFRSxVQUFVLEVBQUVKLEdBQUcsQ0FBQ0csT0FBTzs7Ozs7aUJBQUksQ0FBQztBQUNsRSxDQUFDO0FBQ0QsTUFBTUssT0FBTyxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDaEMsTUFBTVQsR0FBRyxHQUFHSiwwREFBUSxDQUFDLENBQUNLLEtBQUssR0FBS0EsS0FBSyxDQUFDRCxHQUFHLENBQUM7SUFFMUMscUJBQ0UsOERBQUNQLHNEQUFNO1FBQ0xpQixJQUFJLEVBQUMsWUFBWTtRQUNqQkosS0FBSyxFQUFFO1lBQ0xLLFFBQVEsRUFBRSxVQUFVO1lBQ3BCQyxHQUFHLEVBQUUsQ0FBQztZQUNOQyxNQUFNLEVBQUUsRUFBRTtTQUNYO1FBQ0RDLFNBQVMsRUFBRSxDQUFDYixLQUFLLEdBQUtBLEtBQUssQ0FBQ2MsTUFBTSxDQUFDQyxPQUFPLENBQUNoQixHQUFHLENBQUNHLE9BQU8sQ0FBQzs7MEJBRXZELDhEQUFDSixRQUFROzs7O3lCQUFHOzBCQUNaLDhEQUFDSixzREFBTztnQkFBQ3NCLEdBQUc7Ozs7O3lCQUFHO1lBQ2RSLFFBQVE7Ozs7OztpQkFDRixDQUNUO0FBQ0osQ0FBQztBQUVELGlFQUFlRCxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC10aHJlZS1uZXh0Ly4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L2NhbnZhcy5qc3g/NGI1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzLCBQcmVsb2FkIH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgdXNlU3RvcmUgZnJvbSBcIkAvaGVscGVycy9zdG9yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTENvbnRyb2wgPSAoKSA9PiB7XG4gIGNvbnN0IGRvbSA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUuZG9tKTtcbiAgY29uc3QgY29udHJvbCA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb250cm9sLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb20uY3VycmVudDtcbiAgICAgIGNvbnN0IG9yaWdpbmFsVG91Y2hBY3Rpb24gPSBkb21FbGVtZW50LnN0eWxlW1widG91Y2gtYWN0aW9uXCJdO1xuICAgICAgZG9tRWxlbWVudC5zdHlsZVtcInRvdWNoLWFjdGlvblwiXSA9IFwibm9uZVwiO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkb21FbGVtZW50LnN0eWxlW1widG91Y2gtYWN0aW9uXCJdID0gb3JpZ2luYWxUb3VjaEFjdGlvbjtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbZG9tLCBjb250cm9sXSk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIDxPcmJpdENvbnRyb2xzIHJlZj17Y29udHJvbH0gZG9tRWxlbWVudD17ZG9tLmN1cnJlbnR9IC8+O1xufTtcbmNvbnN0IExDYW52YXMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGRvbSA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUuZG9tKTtcblxuICByZXR1cm4gKFxuICAgIDxDYW52YXNcbiAgICAgIG1vZGU9XCJjb25jdXJyZW50XCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgekluZGV4OiAxMCxcbiAgICAgIH19XG4gICAgICBvbkNyZWF0ZWQ9eyhzdGF0ZSkgPT4gc3RhdGUuZXZlbnRzLmNvbm5lY3QoZG9tLmN1cnJlbnQpfVxuICAgID5cbiAgICAgIDxMQ29udHJvbCAvPlxuICAgICAgPFByZWxvYWQgYWxsIC8+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DYW52YXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMQ2FudmFzO1xuIl0sIm5hbWVzIjpbIkNhbnZhcyIsIk9yYml0Q29udHJvbHMiLCJQcmVsb2FkIiwidXNlU3RvcmUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMQ29udHJvbCIsImRvbSIsInN0YXRlIiwiY29udHJvbCIsImN1cnJlbnQiLCJkb21FbGVtZW50Iiwib3JpZ2luYWxUb3VjaEFjdGlvbiIsInN0eWxlIiwicmVmIiwiTENhbnZhcyIsImNoaWxkcmVuIiwibW9kZSIsInBvc2l0aW9uIiwidG9wIiwiekluZGV4Iiwib25DcmVhdGVkIiwiZXZlbnRzIiwiY29ubmVjdCIsImFsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/canvas.jsx\n");

/***/ })

};
;
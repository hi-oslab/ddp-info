"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 17:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_store__WEBPACK_IMPORTED_MODULE_1__]);
_helpers_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Dom = ({ children  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_helpers_store__WEBPACK_IMPORTED_MODULE_1__/* .setState */ .IW)({
            dom: ref
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom",
        ref: ref,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ config)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/config.jsx


const titleDefault = "React Three Next Starter";
const url = "https://react-three-next.vercel.app/";
const description = "The easiest and fastest way to create a 3D website using React Three Fiber and NextJS";
const author = "Author";
const Header = ({ title =titleDefault  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    charSet: "utf-8"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "language",
                    content: "english"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    httpEquiv: "content-type",
                    content: "text/html"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "author",
                    content: author
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "designer",
                    content: author
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "publisher",
                    content: author
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "description",
                    content: description
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "keywords",
                    content: "Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "robots",
                    content: "index,follow"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "distribution",
                    content: "web"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "og:title",
                    content: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "og:type",
                    content: "site"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "og:url",
                    content: url
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "og:image",
                    content: "/icons/share.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "og:site_name",
                    content: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "og:description",
                    content: description
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "apple-touch-icon",
                    href: "/icons/apple-touch-icon.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "apple-touch-icon",
                    sizes: "16x16",
                    href: "/icons/favicon-16x16.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "apple-touch-icon",
                    sizes: "32x32",
                    href: "/icons/favicon-32x32.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/icons/apple-touch-icon.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "manifest",
                    href: "/manifest.json"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "mask-icon",
                    color: "#000000",
                    href: "/icons/safari-pinned-tab.svg"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "apple-touch-startup-image",
                    href: "/startup.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, minimum-scale=1, initial-scale=1.0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "theme-color",
                    content: "#000"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "shortcut icon",
                    href: "/icons/favicon.ico"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "twitter:card",
                    content: "summary"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "twitter:site",
                    content: "@onirenaud"
                })
            ]
        })
    });
};
/* harmony default export */ const config = (Header);


/***/ }),

/***/ 539:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IW": () => (/* binding */ setState),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getState */
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(912);
/* harmony import */ var zustand_shallow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(561);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_shallow__WEBPACK_IMPORTED_MODULE_1__]);
([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_shallow__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useStoreImpl = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])(()=>{
    return {
        dom: null
    };
});
const useStore = (sel)=>useStoreImpl(sel, zustand_shallow__WEBPACK_IMPORTED_MODULE_1__["default"]);
Object.assign(useStore, useStoreImpl);
const { getState , setState  } = useStoreImpl;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174);
/* harmony import */ var _components_layout_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_dom__WEBPACK_IMPORTED_MODULE_2__]);
_components_layout_dom__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const LCanvas = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 222).then(__webpack_require__.bind(__webpack_require__, 222)), {
    loadableGenerated: {
        modules: [
            "_app.jsx -> " + "@/components/layout/canvas"
        ]
    },
    ssr: true
});
function App({ Component , pageProps ={
    title: "index"
}  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: pageProps.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_dom__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            }),
            Component?.r3f && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LCanvas, {
                children: Component.r3f(pageProps)
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 165:
/***/ ((module) => {

module.exports = require("@react-three/drei");

/***/ }),

/***/ 784:
/***/ ((module) => {

module.exports = require("@react-three/fiber");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ }),

/***/ 561:
/***/ ((module) => {

module.exports = import("zustand/shallow");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(149)));
module.exports = __webpack_exports__;

})();
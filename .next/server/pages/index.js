"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 10:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
// EXTERNAL MODULE: external "@react-three/fiber"
var fiber_ = __webpack_require__(784);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@react-three/drei"
var drei_ = __webpack_require__(165);
;// CONCATENATED MODULE: ./src/components/canvas/Box.jsx





const BoxComponent = ({ route  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    // This reference will give us direct access to the THREE.Mesh object
    const mesh = (0,external_react_.useRef)(null);
    // Set up state for the hovered and active state
    const { 0: hovered , 1: setHover  } = (0,external_react_.useState)(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    (0,fiber_.useFrame)((state, delta)=>mesh.current ? mesh.current.rotation.y = mesh.current.rotation.x += 0.01 : null);
    // Return the view, these are regular Threejs elements expressed in JSX
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(drei_.Center, {
                rotation: [
                    -0.5,
                    -0.25,
                    0
                ],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(drei_.Text3D, {
                    onPointerOver: ()=>setHover(true),
                    onPointerOut: ()=>setHover(false),
                    curveSegments: 32,
                    bevelEnabled: true,
                    bevelSize: 0.04,
                    bevelThickness: 0.1,
                    height: 0.5,
                    lineHeight: 0.5,
                    letterSpacing: -0.06,
                    size: 1.5,
                    font: "/KoddiUD OnGothic Bold_Regular.json",
                    children: [
                        `끌:력 \n 서로가 서로를 이끄는 힘`,
                        /*#__PURE__*/ jsx_runtime_.jsx("meshNormalMaterial", {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("directionalLight", {
                position: [
                    5,
                    5,
                    5
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ambientLight", {})
        ]
    });
};
/* harmony default export */ const Box = (BoxComponent);

;// CONCATENATED MODULE: ./src/components/dom/header.jsx

function Header({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "border-b-2 border-black fixed items-center top-0 w-full h-20",
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./src/components/dom/footer.jsx
//make footer component and export it

function Footer({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: " fixed bottom-0 w-full h-20 flex items-center ",
            children: children
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./src/components/dom/footer-logo.jsx


function FooterLogo() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex absolute self-center right-2 w-36 h-14"
        })
    });
};

;// CONCATENATED MODULE: ./src/pages/index.jsx







// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// dom components goes here
const Page = (props)=>{
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    onClick: ()=>router.reload(),
                    className: "flex h-full text-center text-black text-3xl hover:underline decoration-wavy",
                    children: "끌:력 서로가 서로를 이끄는 힘"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(FooterLogo, {})
            })
        ]
    });
};
// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Box, {})
    });
/* harmony default export */ const pages = (Page);
async function getStaticProps() {
    return {
        props: {
            title: "끌:력 서로가 서로를 이끄는 힘"
        }
    };
}


/***/ }),

/***/ 165:
/***/ ((module) => {

module.exports = require("@react-three/drei");

/***/ }),

/***/ 784:
/***/ ((module) => {

module.exports = require("@react-three/fiber");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,675], () => (__webpack_exec__(10)));
module.exports = __webpack_exports__;

})();
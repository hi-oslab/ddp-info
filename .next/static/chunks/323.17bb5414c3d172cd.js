(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[323],{968:function(e,t,n){"use strict";n.d(t,{z:function(){return u}});var o=n(7462),r=n(2742),a=n(7294),i=n(4942),s=n(9477);const c=(e,t)=>(e%t+t)%t;class l extends s.EventDispatcher{constructor(e,t){super(),(0,i.Z)(this,"object",void 0),(0,i.Z)(this,"domElement",void 0),(0,i.Z)(this,"enabled",!0),(0,i.Z)(this,"target",new s.Vector3),(0,i.Z)(this,"minDistance",0),(0,i.Z)(this,"maxDistance",1/0),(0,i.Z)(this,"minZoom",0),(0,i.Z)(this,"maxZoom",1/0),(0,i.Z)(this,"minPolarAngle",0),(0,i.Z)(this,"maxPolarAngle",Math.PI),(0,i.Z)(this,"minAzimuthAngle",-1/0),(0,i.Z)(this,"maxAzimuthAngle",1/0),(0,i.Z)(this,"enableDamping",!1),(0,i.Z)(this,"dampingFactor",.05),(0,i.Z)(this,"enableZoom",!0),(0,i.Z)(this,"zoomSpeed",1),(0,i.Z)(this,"enableRotate",!0),(0,i.Z)(this,"rotateSpeed",1),(0,i.Z)(this,"enablePan",!0),(0,i.Z)(this,"panSpeed",1),(0,i.Z)(this,"screenSpacePanning",!0),(0,i.Z)(this,"keyPanSpeed",7),(0,i.Z)(this,"autoRotate",!1),(0,i.Z)(this,"autoRotateSpeed",2),(0,i.Z)(this,"reverseOrbit",!1),(0,i.Z)(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),(0,i.Z)(this,"mouseButtons",{LEFT:s.MOUSE.ROTATE,MIDDLE:s.MOUSE.DOLLY,RIGHT:s.MOUSE.PAN}),(0,i.Z)(this,"touches",{ONE:s.TOUCH.ROTATE,TWO:s.TOUCH.DOLLY_PAN}),(0,i.Z)(this,"target0",void 0),(0,i.Z)(this,"position0",void 0),(0,i.Z)(this,"zoom0",void 0),(0,i.Z)(this,"_domElementKeyEvents",null),(0,i.Z)(this,"getPolarAngle",void 0),(0,i.Z)(this,"getAzimuthalAngle",void 0),(0,i.Z)(this,"setPolarAngle",void 0),(0,i.Z)(this,"setAzimuthalAngle",void 0),(0,i.Z)(this,"getDistance",void 0),(0,i.Z)(this,"listenToKeyEvents",void 0),(0,i.Z)(this,"saveState",void 0),(0,i.Z)(this,"reset",void 0),(0,i.Z)(this,"update",void 0),(0,i.Z)(this,"connect",void 0),(0,i.Z)(this,"dispose",void 0),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object instanceof s.PerspectiveCamera?this.object.zoom:1,this.getPolarAngle=()=>m.phi,this.getAzimuthalAngle=()=>m.theta,this.setPolarAngle=e=>{let t=c(e,2*Math.PI),o=m.phi;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let r=Math.abs(t-o);2*Math.PI-r<r&&(t<o?t+=2*Math.PI:o+=2*Math.PI),p.phi=t-o,n.update()},this.setAzimuthalAngle=e=>{let t=c(e,2*Math.PI),o=m.theta;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let r=Math.abs(t-o);2*Math.PI-r<r&&(t<o?t+=2*Math.PI:o+=2*Math.PI),p.theta=t-o,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",G),this._domElementKeyEvents=e},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object instanceof s.PerspectiveCamera?n.object.zoom:1},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object instanceof s.PerspectiveCamera&&(n.object.zoom=n.zoom0,n.object.updateProjectionMatrix()),n.dispatchEvent(o),n.update(),u=l.NONE},this.update=(()=>{const t=new s.Vector3,r=(new s.Quaternion).setFromUnitVectors(e.up,new s.Vector3(0,1,0)),a=r.clone().invert(),i=new s.Vector3,c=new s.Quaternion,v=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(r),m.setFromVector3(t),n.autoRotate&&u===l.NONE&&Z(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(m.theta+=p.theta*n.dampingFactor,m.phi+=p.phi*n.dampingFactor):(m.theta+=p.theta,m.phi+=p.phi);let s=n.minAzimuthAngle,E=n.maxAzimuthAngle;return isFinite(s)&&isFinite(E)&&(s<-Math.PI?s+=v:s>Math.PI&&(s-=v),E<-Math.PI?E+=v:E>Math.PI&&(E-=v),m.theta=s<=E?Math.max(s,Math.min(E,m.theta)):m.theta>(s+E)/2?Math.max(s,m.theta):Math.min(E,m.theta)),m.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,m.phi)),m.makeSafe(),m.radius*=h,m.radius=Math.max(n.minDistance,Math.min(n.maxDistance,m.radius)),!0===n.enableDamping?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),t.setFromSpherical(m),t.applyQuaternion(a),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),f.set(0,0,0)),h=1,!!(b||i.distanceToSquared(n.object.position)>d||8*(1-c.dot(n.object.quaternion))>d)&&(n.dispatchEvent(o),i.copy(n.object.position),c.copy(n.object.quaternion),b=!1,!0)}})(),this.connect=e=>{e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),n.domElement=e,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",F),n.domElement.addEventListener("pointercancel",K),n.domElement.addEventListener("wheel",W)},this.dispose=()=>{var e,t,o,r,a,i;null===(e=n.domElement)||void 0===e||e.removeEventListener("contextmenu",q),null===(t=n.domElement)||void 0===t||t.removeEventListener("pointerdown",F),null===(o=n.domElement)||void 0===o||o.removeEventListener("pointercancel",K),null===(r=n.domElement)||void 0===r||r.removeEventListener("wheel",W),null===(a=n.domElement)||void 0===a||a.ownerDocument.removeEventListener("pointermove",X),null===(i=n.domElement)||void 0===i||i.ownerDocument.removeEventListener("pointerup",B),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",G)};const n=this,o={type:"change"},r={type:"start"},a={type:"end"},l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const d=1e-6,m=new s.Spherical,p=new s.Spherical;let h=1;const f=new s.Vector3;let b=!1;const v=new s.Vector2,E=new s.Vector2,g=new s.Vector2,y=new s.Vector2,O=new s.Vector2,w=new s.Vector2,P=new s.Vector2,T=new s.Vector2,L=new s.Vector2,C=[],M={};function j(){return Math.pow(.95,n.zoomSpeed)}function Z(e){n.reverseOrbit?p.theta+=e:p.theta-=e}function A(e){n.reverseOrbit?p.phi+=e:p.phi-=e}const R=(()=>{const e=new s.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),f.add(e)}})(),S=(()=>{const e=new s.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),f.add(e)}})(),N=(()=>{const e=new s.Vector3;return function(t,o){const r=n.domElement;if(r&&n.object instanceof s.PerspectiveCamera&&n.object.isPerspectiveCamera){const a=n.object.position;e.copy(a).sub(n.target);let i=e.length();i*=Math.tan(n.object.fov/2*Math.PI/180),R(2*t*i/r.clientHeight,n.object.matrix),S(2*o*i/r.clientHeight,n.object.matrix)}else r&&n.object instanceof s.OrthographicCamera&&n.object.isOrthographicCamera?(R(t*(n.object.right-n.object.left)/n.object.zoom/r.clientWidth,n.object.matrix),S(o*(n.object.top-n.object.bottom)/n.object.zoom/r.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function z(e){n.object instanceof s.PerspectiveCamera&&n.object.isPerspectiveCamera?h/=e:n.object instanceof s.OrthographicCamera&&n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),b=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(e){n.object instanceof s.PerspectiveCamera&&n.object.isPerspectiveCamera?h*=e:n.object instanceof s.OrthographicCamera&&n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),b=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function x(e){v.set(e.clientX,e.clientY)}function D(e){y.set(e.clientX,e.clientY)}function I(){if(1==C.length)v.set(C[0].pageX,C[0].pageY);else{const e=.5*(C[0].pageX+C[1].pageX),t=.5*(C[0].pageY+C[1].pageY);v.set(e,t)}}function _(){if(1==C.length)y.set(C[0].pageX,C[0].pageY);else{const e=.5*(C[0].pageX+C[1].pageX),t=.5*(C[0].pageY+C[1].pageY);y.set(e,t)}}function Y(){const e=C[0].pageX-C[1].pageX,t=C[0].pageY-C[1].pageY,n=Math.sqrt(e*e+t*t);P.set(0,n)}function H(e){if(1==C.length)E.set(e.pageX,e.pageY);else{const t=$(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);E.set(n,o)}g.subVectors(E,v).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(Z(2*Math.PI*g.x/t.clientHeight),A(2*Math.PI*g.y/t.clientHeight)),v.copy(E)}function U(e){if(1==C.length)O.set(e.pageX,e.pageY);else{const t=$(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);O.set(n,o)}w.subVectors(O,y).multiplyScalar(n.panSpeed),N(w.x,w.y),y.copy(O)}function V(e){const t=$(e),o=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(o*o+r*r);T.set(0,a),L.set(0,Math.pow(T.y/P.y,n.zoomSpeed)),z(L.y),P.copy(T)}function F(e){if(!1!==n.enabled){var t,o;if(0===C.length)null===(t=n.domElement)||void 0===t||t.ownerDocument.addEventListener("pointermove",X),null===(o=n.domElement)||void 0===o||o.ownerDocument.addEventListener("pointerup",B);!function(e){C.push(e)}(e),"touch"===e.pointerType?function(e){switch(J(e),C.length){case 1:switch(n.touches.ONE){case s.TOUCH.ROTATE:if(!1===n.enableRotate)return;I(),u=l.TOUCH_ROTATE;break;case s.TOUCH.PAN:if(!1===n.enablePan)return;_(),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(n.touches.TWO){case s.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&Y(),n.enablePan&&_(),u=l.TOUCH_DOLLY_PAN;break;case s.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&Y(),n.enableRotate&&I(),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&n.dispatchEvent(r)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case s.MOUSE.DOLLY:if(!1===n.enableZoom)return;!function(e){P.set(e.clientX,e.clientY)}(e),u=l.DOLLY;break;case s.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;D(e),u=l.PAN}else{if(!1===n.enableRotate)return;x(e),u=l.ROTATE}break;case s.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;x(e),u=l.ROTATE}else{if(!1===n.enablePan)return;D(e),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&n.dispatchEvent(r)}(e)}}function X(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(J(e),u){case l.TOUCH_ROTATE:if(!1===n.enableRotate)return;H(e),n.update();break;case l.TOUCH_PAN:if(!1===n.enablePan)return;U(e),n.update();break;case l.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&V(e),n.enablePan&&U(e)}(e),n.update();break;case l.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&V(e),n.enableRotate&&H(e)}(e),n.update();break;default:u=l.NONE}}(e):function(e){if(!1===n.enabled)return;switch(u){case l.ROTATE:if(!1===n.enableRotate)return;!function(e){E.set(e.clientX,e.clientY),g.subVectors(E,v).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(Z(2*Math.PI*g.x/t.clientHeight),A(2*Math.PI*g.y/t.clientHeight)),v.copy(E),n.update()}(e);break;case l.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY),L.subVectors(T,P),L.y>0?z(j()):L.y<0&&k(j()),P.copy(T),n.update()}(e);break;case l.PAN:if(!1===n.enablePan)return;!function(e){O.set(e.clientX,e.clientY),w.subVectors(O,y).multiplyScalar(n.panSpeed),N(w.x,w.y),y.copy(O),n.update()}(e)}}(e))}function B(e){var t,o,r;(Q(e),0===C.length)&&(null===(t=n.domElement)||void 0===t||t.releasePointerCapture(e.pointerId),null===(o=n.domElement)||void 0===o||o.ownerDocument.removeEventListener("pointermove",X),null===(r=n.domElement)||void 0===r||r.ownerDocument.removeEventListener("pointerup",B));n.dispatchEvent(a),u=l.NONE}function K(e){Q(e)}function W(e){!1===n.enabled||!1===n.enableZoom||u!==l.NONE&&u!==l.ROTATE||(e.preventDefault(),n.dispatchEvent(r),function(e){e.deltaY<0?k(j()):e.deltaY>0&&z(j()),n.update()}(e),n.dispatchEvent(a))}function G(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:N(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:N(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:N(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:N(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function q(e){!1!==n.enabled&&e.preventDefault()}function Q(e){delete M[e.pointerId];for(let t=0;t<C.length;t++)if(C[t].pointerId==e.pointerId)return void C.splice(t,1)}function J(e){let t=M[e.pointerId];void 0===t&&(t=new s.Vector2,M[e.pointerId]=t),t.set(e.pageX,e.pageY)}function $(e){const t=e.pointerId===C[0].pointerId?C[1]:C[0];return M[t.pointerId]}void 0!==t&&this.connect(t),this.update()}}const u=a.forwardRef((({makeDefault:e,camera:t,regress:n,domElement:i,enableDamping:s=!0,onChange:c,onStart:u,onEnd:d,...m},p)=>{const h=(0,r.y)((e=>e.invalidate)),f=(0,r.y)((e=>e.camera)),b=(0,r.y)((e=>e.gl)),v=(0,r.y)((e=>e.events)),E=(0,r.y)((e=>e.set)),g=(0,r.y)((e=>e.get)),y=(0,r.y)((e=>e.performance)),O=t||f,w=i||v.connected||b.domElement,P=a.useMemo((()=>new l(O)),[O]);return(0,r.z)((()=>{P.enabled&&P.update()}),-1),a.useEffect((()=>(P.connect(w),()=>{P.dispose()})),[w,n,P,h]),a.useEffect((()=>{const e=e=>{h(),n&&y.regress(),c&&c(e)};return P.addEventListener("change",e),u&&P.addEventListener("start",u),d&&P.addEventListener("end",d),()=>{u&&P.removeEventListener("start",u),d&&P.removeEventListener("end",d),P.removeEventListener("change",e)}}),[c,u,d,P,h]),a.useEffect((()=>{if(e){const e=g().controls;return E({controls:P}),()=>E({controls:e})}}),[e,P]),a.createElement("primitive",(0,o.Z)({ref:p,object:P,enableDamping:s},m))}))},587:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var o=n(9477),r=n(7294),a=n(2742);function i({all:e,scene:t,camera:n}){const i=(0,a.y)((({gl:e})=>e)),s=(0,a.y)((({camera:e})=>e)),c=(0,a.y)((({scene:e})=>e));return r.useLayoutEffect((()=>{const r=[];e&&(t||c).traverse((e=>{!1===e.visible&&(r.push(e),e.visible=!0)})),i.compile(t||c,n||s);const a=new o.WebGLCubeRenderTarget(128);new o.CubeCamera(.01,1e5,a).update(i,t||c),a.dispose(),r.forEach((e=>e.visible=!1))}),[]),null}},5029:function(e,t,n){"use strict";n.d(t,{Xz:function(){return z}});var o=n(2742),r=n(7462),a=n(7294),i=n(9477),s=n(296),c=n.n(s);function l(e){let{debounce:t,scroll:n,polyfill:o,offsetSize:r}=void 0===e?{debounce:0,scroll:!1,offsetSize:!1}:e;const i=o||("undefined"===typeof window?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,l]=(0,a.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),d=(0,a.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s}),p=t?"number"===typeof t?t:t.scroll:null,h=t?"number"===typeof t?t:t.resize:null,f=(0,a.useRef)(!1);(0,a.useEffect)((()=>(f.current=!0,()=>{f.current=!1})));const[b,v,E]=(0,a.useMemo)((()=>{const e=()=>{if(!d.current.element)return;const{left:e,top:t,width:n,height:o,bottom:a,right:i,x:s,y:c}=d.current.element.getBoundingClientRect(),u={left:e,top:t,width:n,height:o,bottom:a,right:i,x:s,y:c};d.current.element instanceof HTMLElement&&r&&(u.height=d.current.element.offsetHeight,u.width=d.current.element.offsetWidth),Object.freeze(u),f.current&&!m(d.current.lastBounds,u)&&l(d.current.lastBounds=u)};return[e,h?c()(e,h):e,p?c()(e,p):e]}),[l,r,p,h]);function g(){d.current.scrollContainers&&(d.current.scrollContainers.forEach((e=>e.removeEventListener("scroll",E,!0))),d.current.scrollContainers=null),d.current.resizeObserver&&(d.current.resizeObserver.disconnect(),d.current.resizeObserver=null)}function y(){d.current.element&&(d.current.resizeObserver=new i(E),d.current.resizeObserver.observe(d.current.element),n&&d.current.scrollContainers&&d.current.scrollContainers.forEach((e=>e.addEventListener("scroll",E,{capture:!0,passive:!0}))))}var O,w,P;return O=E,w=Boolean(n),(0,a.useEffect)((()=>{if(w){const e=O;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",e,!0)}}}),[O,w]),P=v,(0,a.useEffect)((()=>{const e=P;return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[P]),(0,a.useEffect)((()=>{g(),y()}),[n,E,v]),(0,a.useEffect)((()=>g),[]),[e=>{e&&e!==d.current.element&&(g(),d.current.element=e,d.current.scrollContainers=u(e),y())},s,b]}function u(e){const t=[];if(!e||e===document.body)return t;const{overflow:n,overflowX:o,overflowY:r}=window.getComputedStyle(e);return[n,o,r].some((e=>"auto"===e||"scroll"===e))&&t.push(e),[...t,...u(e.parentElement)]}const d=["x","y","top","bottom","left","right","width","height"],m=(e,t)=>d.every((n=>e[n]===t[n]));var p=Object.defineProperty,h=Object.defineProperties,f=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&g(e,n,t[n]);if(b)for(var n of b(t))E.call(t,n)&&g(e,n,t[n]);return e};function O(e,t,n){if(!e)return;if(!0===n(e))return e;let o=t?e.return:e.child;for(;o;){const e=O(o,t,n);if(e)return e;o=o.sibling}}function w(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}const P=w(a.createContext(null));class T extends a.Component{render(){return a.createElement(P.Provider,{value:this._reactInternals},this.props.children)}}const{ReactCurrentOwner:L,ReactCurrentDispatcher:C}=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function M(){const e=a.useContext(P);if(!e)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const t=a.useId();return a.useMemo((()=>{var n;return null!=(n=L.current)?n:O(e,!1,(e=>{let n=e.memoizedState;for(;n;){if(n.memoizedState===t)return!0;n=n.next}}))}),[e,t])}const j=[],Z=new WeakMap;function A(){var e;const t=M();j.splice(0,j.length),O(t,!0,(e=>{var t;const n=null==(t=e.type)?void 0:t._context;n&&n!==P&&j.push(w(n))}));for(const n of j){const t=null==(e=C.current)?void 0:e.readContext(n);Z.set(n,t)}return a.useMemo((()=>j.reduce(((e,t)=>n=>{return a.createElement(e,null,a.createElement(t.Provider,(o=y({},n),r={value:Z.get(t)},h(o,f(r)))));var o,r}),(e=>a.createElement(T,y({},e))))),[])}n(2576),n(6525),n(3840);const R={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function S(e){const{handlePointer:t}=(0,o.c)(e);return{priority:1,enabled:!0,compute(e,t,n){t.pointer.set(e.offsetX/t.size.width*2-1,-e.offsetY/t.size.height*2+1),t.raycaster.setFromCamera(t.pointer,t.camera)},connected:void 0,handlers:Object.keys(R).reduce(((e,n)=>({...e,[n]:t(n)})),{}),connect:t=>{var n;const{set:o,events:r}=e.getState();null==r.disconnect||r.disconnect(),o((e=>({events:{...e.events,connected:t}}))),Object.entries(null!=(n=r.handlers)?n:[]).forEach((([e,n])=>{const[o,r]=R[e];t.addEventListener(o,n,{passive:r})}))},disconnect:()=>{const{set:t,events:n}=e.getState();var o;n.connected&&(Object.entries(null!=(o=n.handlers)?o:[]).forEach((([e,t])=>{if(n&&n.connected instanceof HTMLElement){const[o]=R[e];n.connected.removeEventListener(o,t)}})),t((e=>({events:{...e.events,connected:void 0}}))))}}}const N=a.forwardRef((function({children:e,fallback:t,resize:n,style:s,gl:c,events:u=S,eventSource:d,eventPrefix:m,shadows:p,linear:h,flat:f,legacy:b,orthographic:v,frameloop:E,dpr:g,performance:y,raycaster:O,camera:w,onPointerMissed:P,onCreated:T,...L},C){a.useMemo((()=>(0,o.e)(i)),[]);const M=A(),[j,Z]=l({scroll:!0,debounce:{scroll:50,resize:0},...n}),R=a.useRef(null),N=a.useRef(null),[z,k]=a.useState(null);a.useImperativeHandle(C,(()=>R.current));const x=(0,o.u)(P),[D,I]=a.useState(!1),[_,Y]=a.useState(!1);if(D)throw D;if(_)throw _;const H=a.useRef(null);Z.width>0&&Z.height>0&&z&&(H.current||(H.current=(0,o.a)(z)),H.current.configure({gl:c,events:u,shadows:p,linear:h,flat:f,legacy:b,orthographic:v,frameloop:E,dpr:g,performance:y,raycaster:O,camera:w,size:Z,onPointerMissed:(...e)=>null==x.current?void 0:x.current(...e),onCreated:e=>{null==e.events.connect||e.events.connect(d?(0,o.i)(d)?d.current:d:N.current),m&&e.setEvents({compute:(e,t)=>{const n=e[m+"X"],o=e[m+"Y"];t.pointer.set(n/t.size.width*2-1,-o/t.size.height*2+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==T||T(e)}}),H.current.render(a.createElement(M,null,a.createElement(o.E,{set:Y},a.createElement(a.Suspense,{fallback:a.createElement(o.B,{set:I})},e))))),(0,o.b)((()=>{k(R.current)}),[]),a.useEffect((()=>{if(z)return()=>(0,o.d)(z)}),[z]);const U=d?"none":"auto";return a.createElement("div",(0,r.Z)({ref:N,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:U,...s}},L),a.createElement("div",{ref:j,style:{width:"100%",height:"100%"}},a.createElement("canvas",{ref:R,style:{display:"block"}},t)))})),z=a.forwardRef((function(e,t){return a.createElement(T,null,a.createElement(N,(0,r.Z)({},e,{ref:t})))}))},296:function(e){function t(e,t,n){var o,r,a,i,s;function c(){var l=Date.now()-i;l<t&&l>=0?o=setTimeout(c,t-l):(o=null,n||(s=e.apply(a,r),a=r=null))}null==t&&(t=100);var l=function(){a=this,r=arguments,i=Date.now();var l=n&&!o;return o||(o=setTimeout(c,t)),l&&(s=e.apply(a,r),a=r=null),s};return l.clear=function(){o&&(clearTimeout(o),o=null)},l.flush=function(){o&&(s=e.apply(a,r),a=r=null,clearTimeout(o),o=null)},l}t.debounce=t,e.exports=t}}]);
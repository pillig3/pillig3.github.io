/*! For license information please see complex.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["complex"],{"./src/images/chevron.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"./images/chevron.png"},"./src/images/chevron.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"./images/chevron.webp"},"./src/images/i.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"./images/i.png"},"./src/images/i.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"./images/i.webp"},"./src/images/link.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"./images/link.png"},"./src/images/link.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"./images/link.webp"},"./src/images/lockAspectRatio.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"./images/lockAspectRatio.png"},"./src/images/lockAspectRatio.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"./images/lockAspectRatio.webp"},"./src/images/magnifier.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"./images/magnifier.png"},"./src/images/magnifier.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"./images/magnifier.webp"},"./src/images/mathcalO.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"./images/mathcalO.png"},"./src/images/mathcalO.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"./images/mathcalO.webp"},"./src/complex.scss":(e,t,n)=>{n.r(t)},"./src/complex.tsx":function(e,t,n){var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=i(n("./node_modules/react/index.js")),o=n("./node_modules/@hot-loader/react-dom/index.js");n("./src/complex.scss");const s=r(n("./src/components/ComplexPlotter.tsx"));o.render(a.createElement(s.default,null),document.querySelector("#root"))},"./src/components/ComplexPlotter.tsx":function(e,t,n){var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=i(n("./node_modules/react/index.js")),o=n("./src/scripts/complex/complexNumbers.ts"),s=n("./src/scripts/complex/parse.ts"),c=r(n("./src/images/mathcalO.webp")),l=r(n("./src/images/mathcalO.png")),u=r(n("./src/images/chevron.webp")),h=r(n("./src/images/chevron.png")),d=r(n("./src/images/i.webp")),p=r(n("./src/images/i.png")),f=r(n("./src/images/link.webp")),m=r(n("./src/images/link.png")),g=r(n("./src/images/lockAspectRatio.webp")),w=r(n("./src/images/lockAspectRatio.png")),v=r(n("./src/images/magnifier.webp")),x=r(n("./src/images/magnifier.png"));t.default=()=>a.createElement(a.Fragment,null,a.createElement("canvas",{id:"myCanvas",width:1440,height:900,tabIndex:0}),a.createElement("div",{id:"allInputDiv"},a.createElement("div",{className:"input",id:"inputDiv"},a.createElement("textarea",{id:"mainInput",contentEditable:!0,suppressContentEditableWarning:!0,autoFocus:!0,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1}),a.createElement("label",{htmlFor:"mainInput"},a.createElement("span",{className:"hoverText"},"function"))),a.createElement("div",{className:"input",id:"widthDiv"},a.createElement("textarea",{id:"widthInput",contentEditable:!0,suppressContentEditableWarning:!0,autoFocus:!0,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1}),a.createElement("label",{htmlFor:"widthInput"},a.createElement("span",{className:"hoverText"},"width"))),a.createElement("div",{className:"input",id:"heightDiv",hidden:!0},a.createElement("textarea",{id:"heightInput",contentEditable:!0,suppressContentEditableWarning:!0,autoFocus:!0,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1}),a.createElement("label",{htmlFor:"heightInput"},a.createElement("span",{className:"hoverText"},"height"))),a.createElement("div",{className:"input",id:"centerDiv"},a.createElement("textarea",{id:"centerInput",contentEditable:!0,suppressContentEditableWarning:!0,autoFocus:!0,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1}),a.createElement("label",{htmlFor:"centerInput"},a.createElement("span",{className:"hoverText"},"center"))),a.createElement("div",{id:"plusMinusDiv"},a.createElement("div",{className:"input",id:"minusDiv",tabIndex:0},a.createElement("div",{className:"horiz"})),a.createElement("div",{className:"input",id:"plusDiv",tabIndex:0},a.createElement("div",{className:"horiz"}),a.createElement("div",{className:"vert"})),a.createElement("div",{className:"input",id:"chevronDiv",tabIndex:0},a.createElement("picture",{style:{verticalAlign:"middle"}},a.createElement("source",{type:"image/webp",srcSet:u.default}),a.createElement("img",{src:h.default,height:"100%",width:"100%",alt:""}))),a.createElement("br",null),a.createElement("div",{id:"menuBox",hidden:!0},a.createElement("div",{className:"input",id:"originDiv",tabIndex:0},a.createElement("picture",{style:{verticalAlign:"middle"}},a.createElement("source",{type:"image/webp",srcSet:c.default}),a.createElement("img",{src:l.default,height:"100%",width:"100%",alt:""}))),a.createElement("div",{className:"input",id:"ARButton",tabIndex:0},a.createElement("picture",{style:{verticalAlign:"middle"}},a.createElement("source",{type:"image/webp",srcSet:g.default}),a.createElement("img",{src:w.default,height:"100%",width:"100%",alt:""}))),a.createElement("div",{className:"input",id:"rslnButt",tabIndex:0},a.createElement("picture",{style:{verticalAlign:"middle"}},a.createElement("source",{type:"image/webp",srcSet:v.default}),a.createElement("img",{src:x.default,height:"100%",width:"100%",alt:""}))),a.createElement("br",null),a.createElement("div",{className:"input",id:"copyButt",tabIndex:0},a.createElement("picture",{style:{verticalAlign:"middle"}},a.createElement("source",{type:"image/webp",srcSet:f.default}),a.createElement("img",{src:m.default,height:"100%",width:"100%",alt:""}))),a.createElement("div",{className:"input",id:"infoButt",tabIndex:0},a.createElement("picture",{style:{verticalAlign:"middle"}},a.createElement("source",{type:"image/webp",srcSet:d.default}),a.createElement("img",{src:p.default,height:"100%",width:"100%",alt:""}))),a.createElement("br",null)))),a.createElement("div",{id:"errorDiv"}));const b=20;function y(e){return document.getElementById(e)}const M=Math.floor;var E,k,I,T,C,N,S,D,F,A=["mainInput","widthInput","heightInput","centerInput"];window.onresize=()=>{O.hasChanged=!0},window.addEventListener("load",(function(){k=y("mainInput"),I=y("widthInput"),T=y("heightInput"),C=y("centerInput"),A=["mainInput","widthInput","heightInput","centerInput"],N=y("myCanvas"),S=N.getContext("2d"),D=new ImageData(N.width,N.height),F=D.data,y("allInputDiv").addEventListener("keydown",V),y("plusMinusDiv").addEventListener("click",U),N.addEventListener("keydown",W);for(let e of["inputDiv","widthDiv","heightDiv"])y(e).addEventListener("click",H);N.height=window.innerHeight,N.width=window.innerWidth;let e=window.location.hash;""!==e&&"#"!==e?setTimeout(Z,0,e.replace(/%20/g," ")):_(0,0),O.hasChanged=!0,N.onmousedown=function(e){2!==e.buttons&&(N.onmousemove=q,N.addEventListener("keydown",R),B=[e.pageX,e.pageY])},N.onmouseup=function(e){if(N.onmousemove=null,N.removeEventListener("keydown",R),void 0===B)return;if(Math.abs(e.pageX-B[0])<5&&Math.abs(e.pageY-B[1])<5)return S.putImageData(D,0,0),void 0===E&&G(O.lastFunc),void(B=void 0);let t=D.width/window.innerWidth,n=(e.pageX-B[0])/N.width*O.width*t,i=-(e.pageY-B[1])/N.height*O.height*t;O.center=[O.center[0]-n,O.center[1]-i],_(O.center[0],O.center[1]),D=S.getImageData(0,0,N.width,N.height),F=D.data,G(O.lastFunc),B=void 0}}),!1);const O={center:[0,0],width:10,height:window.innerHeight/window.innerWidth*10,setHeight:function(e){this.height=window.innerHeight/window.innerWidth*e},setWidth:function(e){this.width=window.innerWidth/window.innerHeight*e},manuallySet:!1,hasChanged:!1,lastFunc:null,lastFuncStr:null,fixAspectRatio:!0};function _(e,t){O.center=[e,t],C.value=e+"+"+t+"i",C.lastValue=C.value}function P(){O.fixAspectRatio?(y("heightDiv").hidden=!1,O.fixAspectRatio=!1):(y("heightDiv").hidden=!0,O.fixAspectRatio=!0)}var B;function q(e){if(void 0===B)return;const t=D.width/window.innerWidth,[n,i]=[(e.pageX-B[0])*t,(e.pageY-B[1])*t];void 0!==E&&(clearTimeout(E),E=void 0),S.fillRect(0,0,N.width,N.height),S.putImageData(D,n,i)}function R(e){"Escape"===e.code&&(N.onmousemove=null,B=void 0,N.removeEventListener("keydown",R),S.putImageData(D,0,0),void 0===E&&G(O.lastFunc))}function L(){const[e,t]=[N.width,N.height];D=S.getImageData(Math.ceil(e/4),Math.ceil(t/4),M(3*e/4),M(3*t/4)),F=D.data;const n=new Uint8ClampedArray(e*t*4);let i=0;for(let r=0;r<t;r++){let t=M(r/2)*D.width*4;for(let r=0;r<e;r++)n[i]=F[t],n[i+1]=F[t+1],n[i+2]=F[t+2],n[i+3]=F[t+3],i+=4,r%2==1&&(t+=4)}D=new ImageData(n,e),F=D.data,S.putImageData(D,0,0),O.width/=2,O.height/=2,G(O.lastFunc)}function z(){const[e,t]=[N.width,N.height];D=S.getImageData(0,0,e,t),F=D.data;const n=new Uint8ClampedArray(M(e/2)*M(t/2)*4);let i=0,r=0;for(let a=0;a<M(t/2);a++){i=2*e*a*4;for(let t=0;t<M(e/2);t++)n[r]=F[i],n[r+1]=F[i+1],n[r+2]=F[i+2],n[r+3]=F[i+3],r+=4,i+=8}S.fillRect(0,0,e,t),S.putImageData(new ImageData(n,M(e/2)),M(e/4),M(t/4)),D=S.getImageData(0,0,e,t),F=D.data,O.width*=2,O.height*=2,G(O.lastFunc)}function W(e){if(!e.isComposing)switch(e.code){case"Tab":e.preventDefault(),k.focus();break;case"Equal":j(e)||L();break;case"Minus":j(e)||z()}}function j(e){return e.ctrlKey||e.metaKey||e.altKey}function H(e){e.target.children.length>0&&e.target.children[0].focus()}function V(e){if(e.isComposing)return;let t=e.target.id;A.indexOf(t)>=0?"Enter"===e.code&&(e.preventDefault(),function(){let e,t=k.value,n=I.value,i=T.value,r=C.value;if(r!==C.lastValue)try{O.center=s.strToNum(r),C.lastValue=r,O.hasChanged=!0}catch(e){K(e,!0)}if(n!==I.lastValue&&(Y("width",I.value),O.manuallySet=!0),i!==T.lastValue&&(Y("height",T.value),O.manuallySet=!0),"string"==typeof t&&""!=t){try{e=s.strToFunc(t)}catch(e){return void K(e)}G(e,O.lastFuncStr!==t),O.lastFuncStr=t}}()):"Enter"!==e.code&&"Space"!==e.code||("horiz"!==t&&"vert"!==t||(t=e.target.parentNode.id),X(t))}function U(e){let t=e.target;for(["horiz","vert"].indexOf(e.target.classList[0])>=0&&(t=e.target.parentNode);!["plusDiv","minusDiv","originDiv","chevronDiv","copyButt","infoButt","ARButton","rslnButt"].includes(t.id);){if(null===t.parentNode)return;t=t.parentNode}X(t.id)}function X(e){switch(e){case"plusDiv":L();break;case"minusDiv":z();break;case"originDiv":O.center!=[0,0]&&(O.center=[0,0],O.width=10,O.setHeight(O.width),_(0,0),O.hasChanged=!0,O.manuallySet=!1,G(O.lastFunc));break;case"chevronDiv":!function(){let e=y("menuBox"),t=y("chevronDiv");t.classList.contains("upsidedown")?(t.classList.remove("upsidedown"),e.hidden=!0):(t.classList.add("upsidedown"),e.hidden=!1)}();break;case"copyButt":!function(){if(null===O.lastFuncStr)return void K("Link could not be copied: no function.");let e="https://pillig3.github.io/complex.html#";e+=O.lastFuncStr.replace(/ /g,"%20")+"&",e+=O.center[0]+","+O.center[1]+"&",e+=O.width,O.fixAspectRatio||(e+=","+O.height),navigator.clipboard.writeText(e)}();break;case"infoButt":window.open("/complex-info.html");break;case"ARButton":P();break;case"rslnButt":!function(){const e=prompt("Change resolution:\nEnter a width for the image in pixels",N.width.toString());if(null===e||""===e)return;let t=parseInt(e);isNaN(t)&&(t=N.width),t=Math.max(t,b);let n=O.height/O.width*t;N.width=t,N.height=n,O.hasChanged=!0,G(O.lastFunc,!1)}()}}function Y(e,t){if(""===t)return!1;let n=parseFloat(t);if("number"!=typeof n||n<=0||isNaN(n)||n===1/0)K(e[0].toUpperCase()+e.slice(1)+" should be a positive number");else if(n!==O[e])return O[e]=n,O.hasChanged=!0,!0;return!1}function K(e,t=!1){let n="",i=y("errorDiv");t?(i.innerHTML="❗&nbsp;"+e+"&nbsp;❗",n="notAnError"):(i.innerHTML="❗&nbsp;&nbsp;&nbsp;&nbsp;"+e+"&nbsp;&nbsp;&nbsp;&nbsp;❗",n="anError"),i.classList.add("visible"),i.classList.add(n),setTimeout((e=>{e.classList.remove("visible"),e.classList.remove(n)}),4e3,i)}function G(e,t=!1,n){if(null===e)return;O.lastFunc=e;let i=N.width,r=N.height;O.hasChanged&&(!O.fixAspectRatio&&O.manuallySet||O.setHeight(O.width),D=new ImageData(i,r),F=D.data,t=!0,O.hasChanged=!1),I.value=O.width.toString(),T.value=O.height.toString(),I.lastValue=I.value,T.lastValue=T.value,void 0!==E&&clearTimeout(E);let a=function(e,t){const n=O.width,i=O.height;return function(r,a){return[O.center[0]-n/2+r/e*n,O.center[1]+i/2-a/t*i]}}(i,r),s=function(e,t,n,i){let r=[];for(let a=0;a<n;a+=M(n/6))for(let n=0;n<i;n+=M(i/6)){const i=o.Mod(e(t(a,n)))[0];isNaN(i)||i===1/0||void 0===i||r.push(i)}if(0===r.length)return e=>0;let a=((u=r).sort(((e,t)=>t-e)),u.length%2==0?(u[M(u.length/2)]+u[M(u.length/2)+1])/2:u[M(u.length/2)]),s=Math.max(...r),c=0,l=Math.sqrt(r.map((e=>Math.pow(e-a,2))).reduce(((e,t)=>t===1/0?e:(c++,e+t)),0));var u;return 0!==c&&(l/=c),function(e){return isNaN(e)||e===1/0?1:e>=a?1/(1+Math.pow(Math.E,-(e-a)/Math.pow(2,s))):Math.sqrt(Math.pow(a,2)-Math.pow(Math.pow(Math.max(e,0)*a,.5)-a,2))/(2*a)}}(e,a,i,r);t&&function(e,t,n,i,r){let a;for(let s=0;s<Math.ceil(r/b);s++)for(let r=0;r<Math.ceil(i/b);r++){let c=r*b,l=s*b,u=e(t(c+10,l+10)),[h,d,p]=Q(o.Arg(u)[0],n(o.Mod(u)[0])),f=a=4*i*l+4*c;for(l=0;l<b;l++)for(a=f+4*i*l,c=0;c<b;c++)F[a]=h,F[a+1]=d,F[a+2]=p,F[a+3]=255,a+=4}S.putImageData(D,0,0)}(e,a,s,i,r),E=setTimeout((()=>{J(e,0,a,s,i,r,n)}))}function J(e,t,n,i,r,a,s){if(t>=r)void 0!==s&&s();else{for(let s=0;s<5&&t<r;s++){for(let s=0;s<a;s++){const a=4*r*s+4*t,c=e(n(t,s)),[l,u,h]=Q(o.Arg(c)[0],i(o.Mod(c)[0]));F[a]=l,F[a+1]=u,F[a+2]=h,F[a+3]=255}t++}S.putImageData(D,0,0),E=setTimeout((()=>{J(e,t,n,i,r,a,s)}))}}function Q(e,t){isNaN(e)&&(e=0);let n,i,r,a=(e=function(e,t){return e<0?Math.abs(t)+e%t:e%t}(e,2*Math.PI))/(Math.PI/3),o=1-Math.abs(2*t-1),s=o*(1-Math.abs(a%2-1));[n,i,r]=0===o?[0,0,0]:a<=1?[o,s,0]:a<=2?[s,o,0]:a<=3?[0,o,s]:a<=4?[0,s,o]:a<=5?[s,0,o]:[o,0,s];let c=t-o/2;return[n,i,r].map((e=>M(255*(e+c))))}function Z(e){let t,[n,i,r]=e.slice(1).split("&");if(void 0!==i&&""!==i){const e=i.split(",").map((e=>parseFloat(e)));2===e.length&&(O.center=e)}if(_(O.center[0],O.center[1]),void 0!==r&&""!==r){let[e,t]=r.split(",").map((e=>parseFloat(e)));O.width=e,void 0!==t?(O.height=t,O.manuallySet=!0,P()):O.setHeight(e),O.hasChanged=!0}k.value=n,O.lastFuncStr=n;try{t=s.strToFunc(n)}catch(e){return void K(e)}G(t,!0)}},"./src/scripts/complex/complexNumbers.ts":(e,t)=>{function n(e){return[e,0]}function i(e,t){return[e[0]+t[0],e[1]+t[1]]}function r(e,t){return[e[0]-t[0],e[1]-t[1]]}function a([e,t],[n,i]){return[e*n-t*i,e*i+t*n]}function o(e,t){let n=h(e[0],e[1]),i=h(t[0],t[1]);return d(n[0]*(1/i[0]),n[1]-i[1])}function s([e,t]){return e===1/0||t===1/0?[1/0,1/0]:[Math.pow(Math.E,e)*Math.cos(t),Math.pow(Math.E,e)*Math.sin(t)]}function c(e,t){if(0===e[0]&&0===e[1])return e;let n=h(e[0],e[1]),i=h(Math.log(n[0]),n[1]),r=h(t[0],t[1]);return s(d(r[0]*i[0],r[1]+i[1]))}function l(e){return o(r(s(a([0,1],e)),s(a([0,-1],e))),[0,2])}function u(e){return o(i(s(a([0,1],e)),s(a([0,-1],e))),[2,0])}function h(e,t){let n;return n=Math.abs(e)===1/0||Math.abs(t)===1/0||0===e&&0===t?0:e>=0?Math.atan(t/e):t>=0?Math.PI-Math.atan(t/-e):-Math.PI-Math.atan(t/-e),[Math.sqrt(Math.pow(e,2)+Math.pow(t,2)),n]}function d(e,t){return e===1/0?[1/0,1/0]:[e*Math.cos(t),e*Math.sin(t)]}Object.defineProperty(t,"__esModule",{value:!0}),t.real=n,t.imag=function(e){return[0,e]},t.Re=function(e){return[e[0],0]},t.Im=function(e){return[e[1],0]},t.Mod=function(e){return[Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)),0]},t.Arg=function(e){return[h(e[0],e[1])[1],0]},t.add=i,t.subtract=r,t.mult=a,t.divide=o,t.exp=s,t.log=function(e){let t=h(e[0],e[1]);return[Math.log(t[0]),t[1]]},t.raise=c,t.sqrt=function(e){return c(e,n(.5))},t.sine=l,t.cosine=u,t.tangent=function(e){return o(l(e),u(e))},t.sinh=function(e){return l(a([0,-1],e))},t.cosh=function(e){return u(a([0,-1],e))},t.tetrate=function([e,t],n){if("number"!=typeof n){if(0===n.length)return[0,1];n=n[0]}if((n=Math.floor(n))<0)return[NaN,NaN];if(0===n)return[1,0];if(1===n)return[e,t];let i=Math.log(Math.sqrt(Math.pow(e,2)+Math.pow(t,2))),r=h(e,t)[1],a=e,o=t;for(let e=1;e<n;e++){const e=a*i-o*r,t=a*r+o*i;a=Math.pow(Math.E,e)*Math.cos(t),o=Math.pow(Math.E,e)*Math.sin(t)}return isNaN(a)||a===1/0||a===-1/0||isNaN(o)||o===1/0||o===-1/0?[1/0,1/0]:[a,o]},t.normalizeTheta=function(e){return e===1/0||e===-1/0?0:e>Math.PI?e-2*Math.floor((e+Math.PI)/(2*Math.PI))*Math.PI:e<=-Math.PI?e+2*Math.floor((-e+Math.PI)/(2*Math.PI))*Math.PI:e},t.iterate=function(e,t){return t<=0?e=>0:1===t?e:(n,...i)=>{let r=n;for(let n=0;n<t;n++)r=e(r,...i);return r}}},"./src/scripts/complex/parse.ts":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n("./src/scripts/complex/complexNumbers.ts"),r=n("./src/scripts/complex/tokenize.ts");function a(e){if(void 0===e.children||0===e.children.length)return e.f;const t=[];for(let n=0;n<e.children.length;n++)t.push(o(e.children[n]));return function(...n){return e.f(...t.map((e=>e(...n))))}}function o(e){if(e instanceof c)return a(e);if(e instanceof Array)return()=>e;if("object"==typeof e){const n=e.position;if(1===n)return e=>e;{let e="n1,";for(var t=2;t<n;t++)e+="n"+t+",";return e+="n"+n,new Function(e,"return n"+n+";")}}return"number"==typeof e?(console.log("This shouldn't happen - child in childToFunc is type number"),()=>i.real(e)):e}t.strToFunc=function(e){return a(l(r.tokenize(e)))},t.strToNum=function(e){const t=[];try{return a(l(r.tokenize(e),t))()}catch(e){throw"Input must be a complex number"}},t.functify=a;const s={exp:i.exp,ln:i.log,log:i.log,cos:i.cosine,sin:i.sine,tan:i.tangent,sinh:i.sinh,cosh:i.cosh,tet:i.tetrate,sqrt:i.sqrt,Re:i.Re,Im:i.Im,Arg:i.Arg,Mod:i.Mod,iterate:i.iterate};class c{constructor(e,t){this.f=e,this.children=t}}function l(e,t){void 0===t&&(t=[null]);let n=u(e,t);return n instanceof Array?new c((e=>e),[n]):n instanceof c?n:new c((e=>e),[n])}function u(e,t){if(0===e.length)throw"Syntax error (I don't know what to do with this input)";const n=[],o=e[0];let{funcName:s,index:w}=function(e){let t="",n=-1;for(var i=0;i<e.length;i++){let a=e[i];if(a.type===r.TokenType.Function)(""===t||["+","-"].indexOf(a.text)>=0||["*","/"].indexOf(a.text)>=0&&!(["+","-"].indexOf(t)>=0))&&(t=a.text,n=i);else{if(i>0){let o=e[i-1];o.type!==r.TokenType.Function&&(["+","-"].indexOf(t)>=0||!([r.TokenType.Number,r.TokenType.String].indexOf(o.type)>=0||")"===o.text)||!([r.TokenType.Number,r.TokenType.String].indexOf(a.type)>=0||"("===a.text)||h(o.text)||(t="implicit_mult",n=i))}if([r.TokenType.Parenthesis,r.TokenType.SquareBracket].indexOf(a.type)>=0){if(!(["(","["].indexOf(a.text)>=0))throw console.log(e),"Error: unbalanced paremtheses";i=f(e,i,a.type)}}}return{funcName:t,index:n}}(e);if(""!==s)return"-"===s&&0===w?n.push(i.real(0)):n.push(u(e.slice(0,w),t)),"implicit_mult"===s&&(w-=1),n.push(u(e.slice(w+1),t)),new c(function(e){switch(e){case"+":return i.add;case"-":return i.subtract;case"*":return i.mult;case"/":return i.divide;case"^":return i.raise;case"implicit_mult":return i.mult;default:throw"getFuncFromArithFuncString called incorrectly. Shame on the developer!"}}(s),n);if(1===e.length){const e=g(o,t);if("function"==typeof e)throw o.text+" called without arguments";return e}if("("===o.text||"["===o.text){const r=f(e,0,o.type);return r===e.length-1?u(e.slice(1,e.length-1),t):(n.push(u(e.slice(1,r),t)),n.push(u(e.slice(r+1),t)),new c(i.mult,n))}if(h(o.text)){const s=d(o.text);if("("===e[1].text){if(p(o.text))throw o.text+" should be called with square brackets";const a=f(e,1,r.TokenType.Parenthesis),l=m(e.slice(2,a));if(l.length!==s.length)throw"Wrong number of parameters passed to "+o.text;return a===e.length-1?new c(s,l.map((e=>u(e,t)))):(n.push(new c(s,l.map((e=>u(e,t))))),n.push(u(e.slice(a+1),t)),new c(i.mult,n))}if("["===e[1].text){if(!p(o.text))throw o.text+" should not be called with square brackets";const s=f(e,1,r.TokenType.SquareBracket),{complexFunc:h,numArgs:d}=function(e,t){const n=m(t);if("iterate"===e){if(3!==n.length)throw"wrong number of square-bracket parameters for iterate";if(1!==n[2].length||n[2][0].type!==r.TokenType.String)throw"third parameter for iterate should be a single variable";const e=n[2][0].text,t=function(e,t){const n=[];for(let e=0;e<200;e++)n.push(null);return n}();t[0]=e;const o=a(l(n[0],t)),s=a(l(n[1],[]))()[0];if(s<=0)throw"second parameter for iterate should be > 0";return{complexFunc:i.iterate(o,Math.floor(s)),numArgs:t.indexOf(null)}}throw"getComplexFuncFromFuncWithSquareBrackets called incorrectly. Shame on the developer!"}(o.text,e.slice(2,s));if(0===(e=e.slice(s+1)).length||"("!==e[0].text)throw"No parameters passed to "+o.text;const g=f(e,0,r.TokenType.Parenthesis),w=m(e.slice(1,g));if(w.length<d)throw"Not enough parameters passed to "+o.text;return g===e.length-1?new c(h,w.map((e=>u(e,t)))):(n.push(new c(h,w.map((e=>u(e,t))))),n.push(u(e.slice(g+1),t)),new c(i.mult,n))}if(s.length>1)throw"Missing parentheses for "+o.text;return new c(s,[u(e.slice(1),t)])}const v=g(o,t);if("function"==typeof v)throw o.text+" called without arguments";return n.push(v),n.push(u(e.slice(1),t)),new c(i.mult,n)}function h(e){return void 0!==s[e]}function d(e){return s[e]}function p(e){return"iterate"===e}function f(e,t,n){let i,a,o,s=1;if(n===r.TokenType.Parenthesis)i="(",a=")";else{if(n!==r.TokenType.SquareBracket)throw"getNextCloseParen called incorrectly. Shame on the developer!";i="[",a="]"}for(o=t+1;o<e.length;o++){switch(e[o].text){case i:s++;break;case a:s--}if(0===s)break}if(o>e.length-1)throw"Error: unbalanced paremtheses";return o}function m(e){let t=[],n=[],i=0;for(var a=0;a<e.length;a++){let o=e[a];switch(o.type){case r.TokenType.Comma:0===i?(t.push(n),n=[]):n.push(o);break;case r.TokenType.Parenthesis:case r.TokenType.SquareBracket:"("===o.text||"["===o.text?i++:i--;default:n.push(o)}}return t.push(n),t}function g(e,t){switch(e.type){case r.TokenType.String:if("i"===e.text)return i.imag(1);if("e"===e.text)return i.real(Math.E);if("pi"===e.text)return i.real(Math.PI);if(h(e.text)){const t=d(e.text);if("iterate"===e.text)throw"iterate cannot be used like this (I'm not sure what you entered, but it's wrong)";return t}{if(!function(e,t){if(t.indexOf(e)>=0)return!0;let n=t.indexOf(null);return!(n<0||(t[n]=e,0))}(e.text,t))throw function(e,t){let n="Too many variables: ";if(0===t.length)return n+e;if(1===t.length)n+=t[0]+" ";else for(let e of t)null!==e&&(n+=e+", ");return n+="and "+e,n}(e.text,t);const n=t.indexOf(e.text);return{name:e.text,position:n+1}}case r.TokenType.Number:return i.real(parseFloat(e.text));case r.TokenType.Comma:throw"Rogue comma detected";default:throw'Something went wrong; encountered "'+e.text+'" where I did not expect it. Shame on the developer!'}}t.Node=c,t.parse=l},"./src/scripts/complex/tokenize.ts":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=(()=>{const e=[];for(var t=65;t<=90;t++)e.push(String.fromCharCode(t));for(t=97;t<=122;t++)e.push(String.fromCharCode(t));return e})(),i="0123456789".split(""),r=n.concat(i),a="+-*/^".split("");var o;!function(e){e[e.Function=0]="Function",e[e.Parenthesis=1]="Parenthesis",e[e.String=2]="String",e[e.Number=3]="Number",e[e.Comma=4]="Comma",e[e.SquareBracket=5]="SquareBracket"}(o||(o={})),t.TokenType=o;class s{constructor(e){this.ind=0,this.ary=e.split("")}nextChar(){return this.ary[this.ind++]}backup(){this.ind-=1}}class c{constructor(e,t){this.text=e,this.type=t}}t.Token=c,t.tokenize=function(e){const t=new s(e),l=[];for(let e=t.nextChar();void 0!==e;e=t.nextChar()){let s,u=e;if(a.indexOf(e)>=0)s=o.Function;else if("("===e||")"===e)s=o.Parenthesis;else if("["===e||"]"===e)s=o.SquareBracket;else if(","===e)s=o.Comma;else if(n.indexOf(e)>=0){for(;r.indexOf(e=t.nextChar())>=0;)u+=e;t.backup(),s=o.String}else{if(!(i.indexOf(e)>=0||"."===e)){if(" "===e)continue;throw"Unrecognized character: "+e}{let n="."===e;for(;i.indexOf(e=t.nextChar())>=0||"."===e;){if("."===e){if(n)throw"Too many dots in a number: "+u+".";n=!0}u+=e}t.backup(),s=o.Number}}l.push(new c(u,s))}return l}}},e=>{e(e.s="./src/complex.tsx")}]);
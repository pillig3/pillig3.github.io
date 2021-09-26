/*! For license information please see index.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["index"],{"./src/images/choco.png":(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"./images/choco.png"},"./src/images/choco.webp":(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"./images/choco.webp"},"./src/images/compass.png":(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"./images/compass.png"},"./src/images/compass.webp":(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"./images/compass.webp"},"./src/images/home.png":(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"./images/home.png"},"./src/images/home.webp":(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"./images/home.webp"},"./src/images/mushroom.png":(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"./images/mushroom.png"},"./src/images/mushroom.webp":(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"./images/mushroom.webp"},"./src/images/tetinv52.png":(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"./images/tetinv52.png"},"./src/images/tetinv52.webp":(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"./images/tetinv52.webp"},"./src/index.scss":(e,t,r)=>{r.r(t)},"./src/components/Card.tsx":function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(r("./node_modules/react/index.js"));t.default=({children:e})=>s.default.createElement("div",{className:"card"},s.default.createElement("div",{className:"inner_card"},e))},"./src/components/Home.tsx":function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(r("./node_modules/react/index.js")),l=s(r("./src/components/Card.tsx")),o=s(r("./src/components/TeX.tsx")),c=s(r("./src/images/tetinv52.png")),u=s(r("./src/images/tetinv52.webp")),m=s(r("./src/components/Menu.tsx"));t.default=()=>a.createElement(a.Fragment,null,a.createElement(m.default,null),a.createElement("div",{className:"title"},"Hello!"),a.createElement(l.default,null,"Welcome to my website! Here you'll find a collection of things I made and/or thought were neat. For instance, here is a graph of the complex function",a.createElement(o.default,{math:"f(z) = \\left. (1/z)^{(1/z)^{...^{(1/z)}}} \\right\\} 52\\textrm{ times}",block:!0}),a.createElement("picture",{className:"centered"},a.createElement("source",{type:"image/webp",srcSet:u.default}),a.createElement("img",{className:"centered",src:c.default,width:"500em",alt:"graph of tetration"}))))},"./src/components/Menu.tsx":function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=n(r("./node_modules/react/index.js")),a=r("./node_modules/react/index.js"),l=n(r("./src/images/home.png")),o=n(r("./src/images/home.webp")),c=n(r("./src/images/compass.png")),u=n(r("./src/images/compass.webp")),m=n(r("./src/images/choco.png")),i=n(r("./src/images/choco.webp")),d=n(r("./src/images/mushroom.png")),f=n(r("./src/images/mushroom.webp"));function p(e,t,r,n){return s.default.createElement("li",null,s.default.createElement("a",{className:"menu_item",href:e},s.default.createElement("p",null,s.default.createElement("picture",null,s.default.createElement("source",{type:"image/webp",srcSet:n}),s.default.createElement("img",{src:r,height:"16px",width:"16px",alt:""}))," ",t)))}t.default=({startExpanded:e})=>{const[t,r]=a.useState(null!=e&&e);return s.default.createElement("div",{className:t?"menu_expanded":"menu_collapsed"},function(e,t){return s.default.createElement("div",{className:"menu_button",onClick:()=>t(!e)},s.default.createElement("div",{className:"menu_button_inner"},s.default.createElement("div",{className:"menu_button_line"}),s.default.createElement("div",{className:"menu_button_line"}),s.default.createElement("div",{className:"menu_button_line"})))}(t,r),t?s.default.createElement("div",{className:"centered"},s.default.createElement("ul",{className:"menu_list centered"},p("/","Home",l.default,o.default),p("/problems.html","Problems",c.default,u.default),p("/chomp.html","Chomp",m.default,i.default),p("/befunge.html","Befunge",d.default,f.default))):null)}},"./src/components/TeX.tsx":function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r},s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=s(r("./node_modules/react/index.js")),o=a(r("./node_modules/katex/dist/katex.js"));t.default=l.memo((e=>{var{children:t,math:r,block:s,errorColor:a,renderError:c,settings:u,as:m}=e,i=n(e,["children","math","block","errorColor","renderError","settings","as"]);const d=m||(s?"div":"span"),f=null!=t?t:r,[p,h]=l.useState({innerHtml:""});return l.useEffect((()=>{try{const e=o.default.renderToString(f,Object.assign({displayMode:!!s,errorColor:a,throwOnError:!!c},u));h({innerHtml:e})}catch(e){if(!(e instanceof o.default.ParseError||e instanceof TypeError))throw e;h(c?{errorElement:c(e)}:{innerHtml:e.message})}}),[s,f,a,c,u]),"errorElement"in p?p.errorElement:l.default.createElement(d,Object.assign({},i,{dangerouslySetInnerHTML:{__html:p.innerHtml}}))}))},"./src/index.tsx":function(e,t,r){var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(r("./node_modules/react/index.js")),l=r("./node_modules/@hot-loader/react-dom/index.js"),o=s(r("./src/components/Home.tsx"));r("./src/index.scss"),l.render(a.createElement(o.default,null),document.querySelector("#root"))}},e=>{e(e.s="./src/index.tsx")}]);
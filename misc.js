/*! For license information please see misc.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["misc"],{"./src/images/choco.png":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"./images/choco.png"},"./src/images/choco.webp":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"./images/choco.webp"},"./src/images/compass.png":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"./images/compass.png"},"./src/images/compass.webp":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"./images/compass.webp"},"./src/images/heart.png":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"./images/heart.png"},"./src/images/heart.webp":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"./images/heart.webp"},"./src/images/home.png":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"./images/home.png"},"./src/images/home.webp":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"./images/home.webp"},"./src/images/mushroom.png":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"./images/mushroom.png"},"./src/images/mushroom.webp":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"./images/mushroom.webp"},"./src/index.scss":(e,t,s)=>{s.r(t)},"./src/components/Card.tsx":function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=a(s("./node_modules/react/index.js"));t.default=({children:e})=>l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"inner_card"},e))},"./src/components/Menu.tsx":function(e,t,s){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=a(s("./node_modules/react/index.js")),n=s("./node_modules/react/index.js"),c=a(s("./src/images/home.png")),r=a(s("./src/images/home.webp")),m=a(s("./src/images/compass.png")),o=a(s("./src/images/compass.webp")),u=a(s("./src/images/choco.png")),i=a(s("./src/images/choco.webp")),d=a(s("./src/images/mushroom.png")),p=a(s("./src/images/mushroom.webp")),f=a(s("./src/images/heart.png")),h=a(s("./src/images/heart.webp"));function g(e,t,s,a){return l.default.createElement("li",null,l.default.createElement("a",{className:"menu_item",href:e},l.default.createElement("p",null,l.default.createElement("picture",null,l.default.createElement("source",{type:"image/webp",srcSet:a}),l.default.createElement("img",{src:s,height:"16px",width:"16px",alt:""}))," ",t)))}t.default=({startExpanded:e})=>{const[t,s]=n.useState(null!=e&&e);return l.default.createElement("div",{className:t?"menu_expanded":"menu_collapsed"},function(e,t){return l.default.createElement("div",{className:"menu_button",onClick:()=>t(!e)},l.default.createElement("div",{className:"menu_button_inner"},l.default.createElement("div",{className:"menu_button_line"}),l.default.createElement("div",{className:"menu_button_line"}),l.default.createElement("div",{className:"menu_button_line"})))}(t,s),t?l.default.createElement("div",{className:"centered"},l.default.createElement("ul",{className:"menu_list centered"},g("/","Home",c.default,r.default),g("/problems.html","Problems",m.default,o.default),g("/chomp.html","Chomp",u.default,i.default),g("/befunge.html","Befunge",d.default,p.default),g("/misc.html","Miscellanea",f.default,h.default))):null)}},"./src/misc.tsx":function(e,t,s){var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)Object.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(s("./node_modules/react/index.js")),c=s("./node_modules/@hot-loader/react-dom/index.js"),r=l(s("./src/components/Card.tsx")),m=l(s("./src/components/Menu.tsx"));s("./src/index.scss"),c.render(n.createElement(n.Fragment,null,n.createElement(m.default,null),n.createElement("div",{className:"title"},"Miscellanea"),n.createElement(r.default,null,n.createElement("a",{href:"/comps.html"},"Comps")," – An overview of some cool research I did on newly reducible polynomials."),n.createElement(r.default,null,n.createElement("a",{href:"/pentris.html"},"Pentris")," – It's like tetris, but with pentominos and reflection!",n.createElement("ul",{className:"list_no_style"},n.createElement("li",null,"Left / Right – Move piece sideways"),n.createElement("li",null,"Up – Rotate piece"),n.createElement("li",null,"X – Reflect piece"),n.createElement("li",null,"C – Store piece for later"),n.createElement("li",null,"Down – Soft drop"),n.createElement("li",null,"Space – Hard drop")))),document.querySelector("#root"))}},e=>{e(e.s="./src/misc.tsx")}]);
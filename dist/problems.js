/*! For license information please see problems.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["problems"],{"./src/images/choco.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"./images/choco.png"},"./src/images/choco.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"./images/choco.webp"},"./src/images/compass.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"./images/compass.png"},"./src/images/compass.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"./images/compass.webp"},"./src/images/firstThreeCircles.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"./images/firstThreeCircles.png"},"./src/images/firstThreeCircles.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"./images/firstThreeCircles.webp"},"./src/images/home.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"./images/home.png"},"./src/images/home.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"./images/home.webp"},"./src/index.scss":(e,t,n)=>{n.r(t)},"./src/components/Card.tsx":function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=a(n("./node_modules/react/index.js"));t.default=({children:e})=>l.default.createElement("div",{className:"card"},l.default.createElement("div",{className:"inner_card"},e))},"./src/components/Menu.tsx":function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=a(n("./node_modules/react/index.js")),r=n("./node_modules/react/index.js"),s=a(n("./src/images/home.png")),c=a(n("./src/images/home.webp")),o=a(n("./src/images/compass.png")),i=a(n("./src/images/compass.webp")),u=a(n("./src/images/choco.png")),m=a(n("./src/images/choco.webp"));function d(e,t,n,a){return l.default.createElement("li",null,l.default.createElement("a",{className:"menu_item",href:e},l.default.createElement("p",null,l.default.createElement("picture",null,l.default.createElement("source",{type:"image/webp",srcSet:a}),l.default.createElement("img",{src:n,height:"16px",width:"16px",alt:""})),t)))}t.default=({startExpanded:e})=>{const[t,n]=r.useState(null!=e&&e);return l.default.createElement("div",{className:t?"menu_expanded":"menu_collapsed"},function(e,t){return l.default.createElement("div",{className:"menu_button",onClick:()=>t(!e)},l.default.createElement("div",{className:"menu_button_inner"},l.default.createElement("div",{className:"menu_button_line"}),l.default.createElement("div",{className:"menu_button_line"}),l.default.createElement("div",{className:"menu_button_line"})))}(t,n),t?l.default.createElement("div",null,l.default.createElement("ul",{className:"menu_list"},d("/","Home",s.default,c.default),d("/problems.html","Problems",o.default,i.default),d("/chomp.html","Chomp",u.default,m.default))):null)}},"./src/components/Problems.tsx":function(e,t,n){var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n("./node_modules/react/index.js")),s=l(n("./src/components/Card.tsx")),c=l(n("./src/components/Menu.tsx")),o=l(n("./src/components/TeX.tsx")),i=l(n("./src/images/firstThreeCircles.png")),u=l(n("./src/images/firstThreeCircles.webp"));function m(e){return r.createElement("span",{className:"inline_code"},e)}const d=({children:e,num:t})=>r.createElement(s.default,null,t,". ",e);t.default=()=>{let e=1;return r.createElement(r.Fragment,null,r.createElement(c.default,null),r.createElement("div",{className:"title reset_counter"},"Problems"),r.createElement(s.default,null,"A collection of some fun math puzzles and problems! Be warned, a few of them may be unsolved."),r.createElement(d,{num:e++},"You have a ",r.createElement(o.default,null,"100 \\times 100")," grid of computers, and a ",m("hacker")," would like to infect all of them with a virus. The computers are connected in a way such that if"," ",r.createElement(o.default,null,"3")," computers in any ",r.createElement(o.default,null,"2 \\times 2")," sub-grid are infected, the fourth also becomes infected one second later (you should probably talk to IT about that). The"," ",m("hacker")," has one chance to simultaneously infect whichever computers they want, but they have only ",r.createElement(o.default,null,"N")," copies of the virus. What is the smallest value of"," ",r.createElement(o.default,null,"N")," such that the ",m("hacker")," is able to infect all of the computers? For instance, if it were a ",r.createElement(o.default,null,"2 \\times 2")," grid, the ",m("hacker")," would have to infect at least ",r.createElement(o.default,null,"3")," of them."),r.createElement(d,{num:e++},"Let 2018 points in the plane be given, of which 1009 are colored"," ",r.createElement("span",{className:"red"},"red"),", and the rest are colored ",r.createElement("span",{className:"blue"},"blue"),". Assume that no three points are colinear. How many line segments can be placed such that:",r.createElement("ol",{type:"a"},r.createElement("li",null,"Each segment connects a ",r.createElement("span",{className:"red"},"red")," point with a"," ",r.createElement("span",{className:"blue"},"blue")," point, and"),r.createElement("li",null,"Any two segments do not intersect, except possibly at a shared endpoint?"))),r.createElement(d,{num:e++},"Alice is in a prison with ",r.createElement(o.default,null,"N")," (possibly 0) other prisoners. Alice does not know"," ",r.createElement(o.default,null,"N")," and wishes to determine this value.",r.createElement("p",null,"Each day, every prisoner (including Alice) will be presented with a white card and a black card. The prisoner will select one of these. The warden will look at all the selected cards and choose an ",r.createElement(o.default,null,"N+1"),"-cycle. Then, he will permute the cards according to that cycle and redistribute the cards as such. So each prisoner will give one bit of information each day and receive one bit of information each day. The warden may choose a different cycle each day, and he may base his choice on which cards his prisoners select."),r.createElement("p",null,"Before this game is to begin, Alice may write down instructions, which will be copied and distributed to the other prisoners. The warden will be able to see these instructions."),r.createElement("p",null,"Devise a strategy so that"),r.createElement("ol",{type:"a"},r.createElement("li",null,"(Easy) Alice can determine if she is the only prisoner."),r.createElement("li",null,"(a little less easy) Alice can determine whether there is exactly one other prisoner."),r.createElement("li",null,"(Medium) Alice can determine an upper bound for the number of prisoners."),r.createElement("li",null,"(Hard) All prisoners, including Alice, can determine ",r.createElement(o.default,null,"N")," exactly."))),r.createElement(d,{num:e++},"Place a circle of radius 1 inside the parabola ",r.createElement(o.default,null,"y = x^2")," so that it is tangent to both arms of the parabola. Then place a second circle so that it is tangent to the first circle and both arms. Continue adding circles this way to get an infinite stack of circles (see image below). What portion of the area above the parabola is covered by the circles?",r.createElement("div",null,r.createElement("picture",{className:"centered"},r.createElement("source",{type:"image/webp",srcSet:u.default}),r.createElement("img",{className:"centered",src:i.default,alt:"circles inside y=x^2"})))),r.createElement(d,{num:e++},"Let ",r.createElement(o.default,null,"f(x)")," be a polynomial with integer coefficients, and let ",r.createElement(o.default,null,"\\sigma_0(n)")," ","be the number of divisors of ",r.createElement(o.default,null,"n")," (e.g. ",r.createElement(o.default,null,"\\sigma_0(10)=4"),"). Consider the sequence",r.createElement(o.default,{math:"\n\t\t\t\t\t\t\\{ n, \\sigma_0(f(n)), \\sigma_0(f(\\sigma_0(f(n)))), ..., (\\sigma_0\\circ f)^i(n), ... \\}\n\t\t\t\t\t",block:!0}),"Is this sequence eventually periodic for all integer ",r.createElement(o.default,null,"n"),"?"),r.createElement(d,{num:e++},"Do there exist uncountably many subsets of ",r.createElement(o.default,{math:"\\mathbb{R}"})," such that no two of the subsets have an element in common, each of the subsets is uncountable, and each of the subsets is dense in ",r.createElement(o.default,{math:"\\mathbb{R}"}),"?"),r.createElement(d,{num:e++},"Define the functions ",r.createElement(o.default,{math:"n,d:\\mathbb{Q}^+\\rightarrow\\mathbb{Q}^+"})," as",r.createElement(o.default,{math:"\n\t\t\t\t\t\\begin{align*}\n\t\t\t\t\tn(q) = n\\left(\\frac{a}{b}\\right) &= \\frac{a+1}{b} \\\\\n\t\t\t\t\td(q) = d\\left(\\frac{a}{b}\\right) &= \\frac{a}{b+1}\n\t\t\t\t\t\\end{align*}\n\t\t\t\t\t",block:!0}),"Where ",r.createElement(o.default,null,"q = a/b")," is in lowest terms, i.e. the greatest common denominator of"," ",r.createElement(o.default,null,"a")," and ",r.createElement(o.default,null,"b")," is 1. Is it always possible, given"," ",r.createElement(o.default,{math:"q_1,q_2\\in\\mathbb{Q}^+"}),", to get from ",r.createElement(o.default,null,"q_1")," to ",r.createElement(o.default,null,"q_2")," by applying some sequence of ",r.createElement(o.default,null,"n"),"s and ",r.createElement(o.default,null,"d"),"s? For example, we can get from"," ",r.createElement(o.default,null,"8/3")," to ",r.createElement(o.default,null,"3/2")," as:",r.createElement(o.default,{block:!0},"d(n(8/3)) = d(3) = 3/2.")),r.createElement(d,{num:e++},"Construct the sequence ",r.createElement(o.default,null,"(a_n)")," as follows: Let ",r.createElement(o.default,null,"a_0 = 0, a_1 = 1"),", and for"," ",r.createElement(o.default,null,"n\\geq 2")," let ",r.createElement(o.default,null,"a_n")," be the number of times ",r.createElement(o.default,{math:"a_{n-1}"})," has appeared so far plus the number of times ",r.createElement(o.default,{math:"a_{n-2}"})," has appeared so far. In other words, if we let",r.createElement(o.default,{math:"\n\t\t\t\t\tfreq(i,j) = \\left\\lvert\\{ k\\ |\\ a_k = i \\text{ and } k < j \\}\\right\\rvert\n\t\t\t\t\t",block:!0}),"Then",r.createElement(o.default,{math:"\n\t\t\t\t\ta_n = freq(a_{n-2}, n) + freq(a_{n-1}, n).\n\t\t\t\t\t",block:!0}),"This sequence begins:",r.createElement(o.default,{block:!0},"0, 1, 2, 2, 4, 3, 2, 4, 5, 3, 3, 6, 4, 4, 8, 5, 3, 6, 6, 6, 8, 6, 7, 6, 7, 8, 5, 6, 10, 8, 5, 8, 9, 6, 9, 10, 4, 7, 8, 9, 9, 8, 11, 8, 9, 13, 6, 10, 12, 4, 7, 10, 8, 13, 11, 4, 9, 13, 9, 10, 12, 7, 7, 12, 9, 11, 11, 8, 14, 11, 6, 15, 11, 7, 13, 11, 11, 16, 9, 10, ..."),"And is sometimes referred to as \"The Devil's Sequence\" (by me), due to the early presence of three consecutive 6s (and my inability to understand it). The next time a number occurs three times in a row isn't until ",r.createElement(o.default,{math:"a_{355677}"})," (!).",r.createElement("p",null,"Some problems:"),r.createElement("ol",{type:"a"},r.createElement("li",null,"For any ",r.createElement(o.default,{math:"n\\in\\mathbb{N}"}),", does ",r.createElement(o.default,null,"n")," appear at least once in this sequence?"),r.createElement("li",null,"For any ",r.createElement(o.default,{math:"n\\in\\mathbb{N}"}),", does ",r.createElement(o.default,null,"n")," appear only finitely many times in this sequence?")),"Other intriguing questions include:",r.createElement("ol",{type:"a",start:3},r.createElement("li",null,"If each ",r.createElement(o.default,null,"n")," does appear only finitely many times, approximately how many times does it appear? (It seems to be close to ",r.createElement(o.default,null,"2n"),")!"),r.createElement("li",null,"What are the best possible upper/lower bounds on ",r.createElement(o.default,null,"a_n"),"?"),r.createElement("li",null,"Let ",r.createElement(o.default,null,"r(k)")," be the smallest ",r.createElement(o.default,null,"n")," such that"," ",r.createElement(o.default,{math:"\\{0,1,2,...,k\\}\\subseteq\\{a_0,...,a_n\\}"}),". What is the asymptotic behavior of ",r.createElement(o.default,null,"r"),"? (It seems to be close to ",r.createElement(o.default,null,"x^2 / 2"),")!")),"Really, proving anything about this sequence would be awesome. This problem comes from"," ",r.createElement("a",{href:"//www.reddit.com/r/mathriddles/comments/318rzm/properties_of_a_strange_rather_meta_sequence_not"},"an old reddit post"),"."))}},"./src/components/TeX.tsx":function(e,t,n){var a=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=l(n("./node_modules/react/index.js")),c=r(n("./node_modules/katex/dist/katex.js"));t.default=s.memo((e=>{var{children:t,math:n,block:l,errorColor:r,renderError:o,settings:i,as:u}=e,m=a(e,["children","math","block","errorColor","renderError","settings","as"]);const d=u||(l?"div":"span"),f=null!=t?t:n,[h,p]=s.useState({innerHtml:""});return s.useEffect((()=>{try{const e=c.default.renderToString(f,Object.assign({displayMode:!!l,errorColor:r,throwOnError:!!o},i));p({innerHtml:e})}catch(e){if(!(e instanceof c.default.ParseError||e instanceof TypeError))throw e;p(o?{errorElement:o(e)}:{innerHtml:e.message})}}),[l,f,r,o,i]),"errorElement"in h?h.errorElement:s.default.createElement(d,Object.assign({},m,{dangerouslySetInnerHTML:{__html:h.innerHtml}}))}))},"./src/problems.tsx":function(e,t,n){var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n("./node_modules/react/index.js")),s=n("./node_modules/@hot-loader/react-dom/index.js"),c=l(n("./src/components/Problems.tsx"));n("./src/index.scss"),s.render(r.createElement(c.default,null),document.querySelector("#root"))}},e=>{e(e.s="./src/problems.tsx")}]);
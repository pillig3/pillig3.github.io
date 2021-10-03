/*! For license information please see comps.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["comps"],{"./src/images/choco.png":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l=a.p+"./images/choco.png"},"./src/images/choco.webp":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l=a.p+"./images/choco.webp"},"./src/images/compass.png":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l=a.p+"./images/compass.png"},"./src/images/compass.webp":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l=a.p+"./images/compass.webp"},"./src/images/heart.png":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l=a.p+"./images/heart.png"},"./src/images/heart.webp":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l=a.p+"./images/heart.webp"},"./src/images/home.png":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l=a.p+"./images/home.png"},"./src/images/home.webp":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l=a.p+"./images/home.webp"},"./src/images/mushroom.png":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l=a.p+"./images/mushroom.png"},"./src/images/mushroom.webp":(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l=a.p+"./images/mushroom.webp"},"./src/index.scss":(e,t,a)=>{a.r(t)},"./src/components/Card.tsx":function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a("./node_modules/react/index.js"));t.default=({children:e})=>n.default.createElement("div",{className:"card"},n.default.createElement("div",{className:"inner_card"},e))},"./src/components/Menu.tsx":function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a("./node_modules/react/index.js")),r=a("./node_modules/react/index.js"),i=l(a("./src/images/home.png")),m=l(a("./src/images/home.webp")),o=l(a("./src/images/compass.png")),u=l(a("./src/images/compass.webp")),s=l(a("./src/images/choco.png")),c=l(a("./src/images/choco.webp")),d=l(a("./src/images/mushroom.png")),f=l(a("./src/images/mushroom.webp")),h=l(a("./src/images/heart.png")),p=l(a("./src/images/heart.webp"));function b(e,t,a,l){return n.default.createElement("li",null,n.default.createElement("a",{className:"menu_item",href:e},n.default.createElement("p",null,n.default.createElement("picture",null,n.default.createElement("source",{type:"image/webp",srcSet:l}),n.default.createElement("img",{src:a,height:"16px",width:"16px",alt:""}))," ",t)))}t.default=({startExpanded:e})=>{const[t,a]=r.useState(null!=e&&e);return n.default.createElement("div",{className:t?"menu_expanded":"menu_collapsed"},function(e,t){return n.default.createElement("div",{className:"menu_button",onClick:()=>t(!e)},n.default.createElement("div",{className:"menu_button_inner"},n.default.createElement("div",{className:"menu_button_line"}),n.default.createElement("div",{className:"menu_button_line"}),n.default.createElement("div",{className:"menu_button_line"})))}(t,a),t?n.default.createElement("div",{className:"centered"},n.default.createElement("ul",{className:"menu_list centered"},b("/","Home",i.default,m.default),b("/problems.html","Problems",o.default,u.default),b("/chomp.html","Chomp",s.default,c.default),b("/befunge.html","Befunge",d.default,f.default),b("/misc.html","Miscellanea",h.default,p.default))):null)}},"./src/components/TeX.tsx":function(e,t,a){var l=this&&this.__rest||function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(a[l[n]]=e[l[n]])}return a},n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(a("./node_modules/react/index.js")),m=r(a("./node_modules/katex/dist/katex.js"));t.default=i.memo((e=>{var{children:t,math:a,block:n,errorColor:r,renderError:o,settings:u,as:s}=e,c=l(e,["children","math","block","errorColor","renderError","settings","as"]);const d=s||(n?"div":"span"),f=null!=t?t:a,[h,p]=i.useState({innerHtml:""});return i.useEffect((()=>{try{const e=m.default.renderToString(f,Object.assign({displayMode:!!n,errorColor:r,throwOnError:!!o},u));p({innerHtml:e})}catch(e){if(!(e instanceof m.default.ParseError||e instanceof TypeError))throw e;p(o?{errorElement:o(e)}:{innerHtml:e.message})}}),[n,f,r,o,u]),"errorElement"in h?h.errorElement:i.default.createElement(d,Object.assign({},c,{dangerouslySetInnerHTML:{__html:h.innerHtml}}))}))},"./src/comps.tsx":function(e,t,a){var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(a("./node_modules/react/index.js")),i=a("./node_modules/@hot-loader/react-dom/index.js"),m=n(a("./src/components/Card.tsx")),o=n(a("./src/components/Menu.tsx")),u=n(a("./src/components/TeX.tsx"));a("./src/index.scss"),i.render(r.createElement(r.Fragment,null,r.createElement(o.default,null),r.createElement("div",{className:"title"},"Comps"),r.createElement(m.default,null,'This page gives a brief introduction to my "comps" (',r.createElement("i",null,"comp"),"rehensive senior project at Carleton). If you're interested, there is much more detail in the"," ",r.createElement("a",{href:"https://arxiv.org/abs/2008.01222"},"paper"),"!"),r.createElement(m.default,null,r.createElement("h3",null,"Introduction"),r.createElement("p",null,"For this project we focused on the"," ",r.createElement("a",{href:"//en.wikipedia.org/wiki/Irreducible_polynomial"},"reducibility")," of polynomial iterates. What do we mean by iterates? If ",r.createElement(u.default,null,"f(x)")," is an arbitrary polynomial, define the ",r.createElement(u.default,null,"n"),"th iterate of ",r.createElement(u.default,null,"f")," to be"),r.createElement(u.default,{block:!0,math:"f^n(x) = \\underbrace{f(f(...f(x)))}_{n\\ f\\text{'s}}."}),r.createElement("p",null,"We say that ",r.createElement(u.default,null,"f^n(x)")," is ",r.createElement("i",null,"newly reducible")," when each of"," ",r.createElement(u.default,{math:"f(x), f^2(x), ..., f^{n-1}(x)"})," is irreducible, but ",r.createElement(u.default,null,"f^n(x)")," is reducible. Note that once some iterate ",r.createElement(u.default,null,"f^n")," is reducible, all further iterates are also reducible. This is why we're interested in the ",r.createElement("i",null,"first")," time an iterate of"," ",r.createElement(u.default,null,"f")," is reducible."),r.createElement("p",null,"We can study newly reducible polynomial iterates over any field, but on this page we'll keep things limited to the rational numbers ",r.createElement(u.default,{math:"\\mathbb{Q}"}),"."),r.createElement("p",null,"Let's look at an example: the polynomial ",r.createElement(u.default,null,"f(x) = x^2 - x - 1")," is a famous one, being the minimal polynomial of the golden ratio ",r.createElement(u.default,null,"\\varphi"),". It is irreducible over"," ",r.createElement(u.default,{math:"\\mathbb{Q}"})," because ",r.createElement(u.default,null,"\\varphi")," is irrational. Now let's look at its iterates:"),r.createElement(u.default,{block:!0,math:"\\begin{aligned}\n\t\t\t\tf^2(x) &= x^4 - 2x^3 - 2x^2 + 3x + 1 &&\\text{is irreducible.} \\\\\n\t\t\t\tf^3(x) &= (x^4 - 3x^3 + 4x - 1) (x^4 - x^3 - 3x^2 + x + 1) &&\\text{is reducible!}\n\t\t\t\t\\end{aligned}"}),r.createElement("p",null,"So this polynomial has a newly reducible third iterate. This makes it very rare; there are only ",r.createElement("i",null,"eight")," other monic quadratic integer polynomials ",r.createElement(u.default,null,"x^2 + ax + b")," with"," ",r.createElement(u.default,{math:"|a| \\le 10^5, |b| \\le 10^9"}),' that have newly reducible third iterates. Such rarity naturally inspires us to wonder: "What makes these polynomials special?" "How many are there total?" "Are there infinitely many?" So our preliminary questions were:'),r.createElement("ol",{type:"1"},r.createElement("li",null,"How many polynomials of the above form have newly reducible third iterates (over"," ",r.createElement(u.default,{math:"\\mathbb{Q}"}),")?"),r.createElement("li",null,"Why is the minimal polynomial of ",r.createElement(u.default,null,"\\varphi")," one of them?")),r.createElement("p",null,"We were able to find answers to these questions, as well as some equivelant questions for other iterates and other fields."),r.createElement("p",null,"We also tackled some additional questions, though they're not completely solved:"),r.createElement("ol",{type:"1",start:3},r.createElement("li",null,"Given a degree ",r.createElement(u.default,null,"d"),", how many rational monic degree-",r.createElement(u.default,null,"d")," polynomials have newly reducible ",r.createElement("i",null,"second")," iterates?"),r.createElement("li",null,"Are there any rational polynomials with a newly reducible ",r.createElement("i",null,"fourth")," iterate?"),r.createElement("li",null,"Given ",r.createElement(u.default,{math:"n\\geq 4"}),", are there any rational polynomials with a newly reducible"," ",r.createElement("i",null,r.createElement(u.default,null,"n"),"th")," ","iterate?")),r.createElement("p",null,"We made some progress on question 3 — it turns out that if ",r.createElement(u.default,null,"d = 3"),","," ",r.createElement(u.default,null,"d = 4"),", or ",r.createElement(u.default,{math:"d\\equiv 2\\ (\\text{mod}\\ 4)"}),", then there are infinitely many rational monic degree-",r.createElement(u.default,null,"d")," polynomials with a newly reducible second iterate! And this result still holds if we require the polynomials to have integer coefficients. For other"," ",r.createElement(u.default,{math:"d > 1"}),", this remains an open question.")),r.createElement(m.default,null,r.createElement("h3",null,"Quadratic Polynomials with Newly Reducible Second Iterate"),r.createElement("p",null,"Earlier we asked whether there were infinitely many monic quadratic integer polynomials with a newly reducible ",r.createElement("i",null,"third")," iterate — A somewhat easier question is whether there are infinitely many with a newly reducible ",r.createElement("i",null,"second")," iterate. In this section, we'll prove that there are!"),r.createElement("p",null,"First, let ",r.createElement(u.default,null,"f(x) = (x-\\gamma)^2 + m + \\gamma"),", for rational ",r.createElement(u.default,null,"m")," and"," ",r.createElement(u.default,null,"\\gamma"),". This form is equivalent to the form ",r.createElement(u.default,null,"f(x)=x^2 + ax + b"),", but makes iterates nicer to work with. Then ",r.createElement(u.default,null,"f")," factors uniquely over the complex numbers as"," ",r.createElement(u.default,{math:"f(x) = ((x-\\gamma)+\\sqrt{-m-\\gamma})((x-\\gamma)-\\sqrt{-m-\\gamma})"}),", so it's reducible over the rational numbers if and only if ",r.createElement(u.default,null,"-m-\\gamma")," is the square of a rational number. So if we want a newly reducible ",r.createElement("i",null,"second")," iterate, we need"," ",r.createElement(u.default,null,"-m-\\gamma")," to not be a square."),r.createElement("p",null,"Now let's suppose ",r.createElement(u.default,null,"f^2(x)")," is newly reducible. What does this tell us about"," ",r.createElement(u.default,null,"m")," and ",r.createElement(u.default,null,"\\gamma"),"? If ",r.createElement(u.default,null,"f^2(x)")," is reducible, we can write it as"),r.createElement(u.default,{block:!0,math:"f^2(x) = \\left((x-\\gamma)^2 + b_1(x-\\gamma) + a_1\\right)\\left((x-\\gamma)^2 - b_2(x-\\gamma) + a_2\\right)"}),r.createElement("p",null,"For some rational ",r.createElement(u.default,null,"a_1,a_2,b_1,b_2"),". Note that here we assume that the degree-4 polynomial factors into two quadratic polynomials, rather than a linear and a cubic. It turns out this is always the case when ",r.createElement(u.default,null,"f")," is irreducible - this is Lemma 2.3 in the paper."),r.createElement("p",null,"On the other hand, we can also write ",r.createElement(u.default,null,"f^2(x)")," as"),r.createElement(u.default,{block:!0,math:"\\begin{align*}\n\t\t\t\tf^2(x) &= f(f(x)) \\\\\n\t\t\t\t&= \\left( (x-\\gamma)^2 + m + \\gamma - \\gamma \\right)^2 + m + \\gamma \\\\\n\t\t\t\t&= (x-\\gamma)^4 + 2m(x-\\gamma) + m^2 + m + \\gamma.\n\t\t\t\t\\end{align*}"}),r.createElement("p",null,"Then we can equate the coefficients of powers of ",r.createElement(u.default,null,"(x-\\gamma)")," in these two expressions to get the following system of equations:"),r.createElement(u.default,{block:!0,math:"\\begin{align*}\n\t\t\t\tm^2+m+\\gamma &= a_1a_2 \\\\\n\t\t\t\t0 &= a_1b_2 + a_2b_1 \\\\\n\t\t\t\t2m &= a_1 + a_2 + b_1b_2 \\\\\n\t\t\t\t0 &= b_1 + b_2\n\t\t\t\t\\end{align*}"}),r.createElement("p",null,"The last equation shows that ",r.createElement(u.default,null,"b_2 = -b_1"),". Putting this into the other equations gives"),r.createElement(u.default,{block:!0,math:"\\begin{align*}\n\t\t\t\tm^2+m+\\gamma &= a_1a_2 \\\\\n\t\t\t\t0 &= -a_1b_1 + a_2b_1 \\\\\n\t\t\t\t2m &= a_1 + a_2 - b_1^2\n\t\t\t\t\\end{align*}"}),r.createElement("p",null,"Next we would like to use the second equation to say that ",r.createElement(u.default,null,"a_1 = a_2"),", but"," ",r.createElement(u.default,null,"b_1")," may be zero. Well, if it is zero, then solving the other equations for"," ",r.createElement(u.default,null,"m")," and ",r.createElement(u.default,null,"\\gamma")," and putting those values into our expression for"," ",r.createElement(u.default,null,"f(x)")," shows that"),r.createElement(u.default,{block:!0,math:"f(x+\\gamma) = \\frac{1}{4}(2x - a_1 + a_2)(2x + a_1 - a_2)."}),r.createElement("p",null,"However, we were assuming that ",r.createElement(u.default,null,"f^2(x)")," is ",r.createElement("i",null,"newly")," reducible, so this is a contradiction. Therefore, we know that ",r.createElement(u.default,null,"b_1\\neq 0"),", so in fact ",r.createElement(u.default,null,"a_1 = a_2"),". Now solving the remaining equations gives"),r.createElement(u.default,{block:!0,math:"\\begin{align*}\n\t\t\t\t\tm &= \\frac{1}{2} \\left(2 a_1-b_1^2\\right) \\\\\n\t\t\t\t\t\\gamma &= \\frac{1}{4} \\left(4 a_1 b_1^2-4 a_1-b_1^4+2 b_1^2\\right)\n\t\t\t\t\t\\end{align*}\\tag{$\\ast$}"}),r.createElement("p",null,"To summarize, we now know that if ",r.createElement(u.default,null,"f(x)")," has a newly reducible second iterate, then there exist rational numbers ",r.createElement(u.default,null,"a_1")," and ",r.createElement(u.default,null,"b_1")," such that equations"," ",r.createElement(u.default,null,"(\\ast)")," are true."),r.createElement("p",null,"What about the opposite direction? Suppose we do have rational numbers ",r.createElement(u.default,null,"a_1")," and"," ",r.createElement(u.default,null,"b_1"),", and set ",r.createElement(u.default,null,"m")," and ",r.createElement(u.default,null,"\\gamma")," as in equations ",r.createElement(u.default,null,"(\\ast)"),". Then ",r.createElement(u.default,null,"f^2")," is reducible, because"),r.createElement(u.default,{block:!0,math:"f^2(x+\\gamma) = \\left(x^2+b_1 x+a_1\\right) \\left(x^2-b_1 x+a_1\\right)."}),r.createElement("p",null,"For ",r.createElement(u.default,null,"f^2")," to be ",r.createElement("i",null,"newly")," reducible, we also need ",r.createElement(u.default,null,"f")," to be irreducible. We said that this is the case whenever ",r.createElement(u.default,null,"-m-\\gamma")," is not the square of a rational number. Here we have"),r.createElement(u.default,{block:!0,math:"-m-\\gamma = - a_1 b_1^2 + \\frac{1}{4} b_1^4"}),r.createElement("p",null,"So we just need this number to not be a rational square. In other words, to prove that there are infinitely many ",r.createElement(u.default,null,"f(x)")," with newly reducible second iterate, we just need infinitely many ",r.createElement(u.default,null,"a_1, b_1")," pairs such that this number is not a square (and such that"," ",r.createElement(u.default,null,"m")," and ",r.createElement(u.default,null,"\\gamma")," are integers)."),r.createElement("p",null,"To find these, we rely on the facts that"),r.createElement("ul",null,r.createElement("li",null,"For any integer ",r.createElement(u.default,null,"n"),", ",r.createElement(u.default,null,"n^2")," is equivalent to 0 or 1 mod 3."),r.createElement("li",null,"For any integer ",r.createElement(u.default,null,"n"),", ",r.createElement(u.default,null,"n")," is a square if and only if ",r.createElement(u.default,null,"4n")," is a square."),r.createElement("li",null,"For any integer ",r.createElement(u.default,null,"n"),", if ",r.createElement(u.default,null,"n")," is not the square of an integer, then it is also not the square of a rational number.")),r.createElement("p",null,"Let ",r.createElement(u.default,null,"a_1")," and ",r.createElement(u.default,null,"b_1")," be integers equivalent to 2 mod 3. Then we have"),r.createElement(u.default,{block:!0,math:"\\begin{align*}\n\t\t\t\t4(-m-\\gamma) &= - 4 a_1 b_1^2 + b_1^4 \\\\\n\t\t\t\t&\\equiv - 1 * 2 * 1 + 1 \\ (\\text{mod}\\ 3) \\\\\n\t\t\t\t&\\equiv 2 \\ (\\text{mod}\\ 3) \n\t\t\t\t\\end{align*}"}),r.createElement("p",null,"Therefore ",r.createElement(u.default,null,"-m-\\gamma")," is not a square. Since there are infinitely many pairs of integers ",r.createElement(u.default,null,"(a_1,b_1)")," equivalent to 2 mod 3, we now know there are infinitely many rational polynomials ",r.createElement(u.default,null,"f(x)")," with a newly reducible second iterate! To complete the proof, we just need to find that infinitely many of these pairs also result in ",r.createElement(u.default,null,"f(x)")," ","with integer coefficients. Looking at equations ",r.createElement(u.default,null,"(\\ast)"),", we see that this is satisfied whenever ",r.createElement(u.default,null,"b_1")," is divisible by 2. Since there are infinitely many"," ",r.createElement(u.default,null,"b_1")," that are both divisible by 2 and equivalent to 2 mod 3 (all integers of the form ",r.createElement(u.default,null,"6n + 2"),"), we have completed our proof!"),r.createElement("p",null,"Here's some Mathematica code for experimental validation:"),r.createElement("textarea",{className:"codeblock",readOnly:!0,rows:13,value:'Do[\n Do[\n  a1 = 3*i + 2;\n  b1 = 2*j*3 + 2;\n  m = (2 a1 - b1^2)/2;\n  gamma = (4 a1*b1^2 - 4 a1 - b1^4 + 2 b1^2)/4;\n  f[x_] := (x - gamma)^2 + m + gamma;\n  If[Not[IntegerQ[m] && IntegerQ[gamma] && \n     IrreduciblePolynomialQ[f[x]] && \n     Not[IrreduciblePolynomialQ[f[f[x]]]]],\n   Print["Counterexample!"]];\n  , {j, 0, i}]\n , {i, 0, 100}]'}))),document.querySelector("#root"))}},e=>{e(e.s="./src/comps.tsx")}]);
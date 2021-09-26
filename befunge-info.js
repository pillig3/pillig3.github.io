/*! For license information please see befunge-info.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["befunge-info"],{"./src/images/choco.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/choco.png"},"./src/images/choco.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/choco.webp"},"./src/images/compass.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/compass.png"},"./src/images/compass.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/compass.webp"},"./src/images/home.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/home.png"},"./src/images/home.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/home.webp"},"./src/images/mushroom.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/mushroom.png"},"./src/images/mushroom.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/mushroom.webp"},"./src/index.scss":(e,t,n)=>{n.r(t)},"./src/befunge-info.tsx":function(e,t,n){var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(n("./node_modules/react/index.js")),o=n("./node_modules/@hot-loader/react-dom/index.js"),s=a(n("./src/components/BefungeInfo.tsx"));n("./src/index.scss"),o.render(r.createElement(s.default,null),document.querySelector("#root"))},"./src/components/BefungeInfo.tsx":function(e,t,n){var l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=l(n("./node_modules/react/index.js")),o=a(n("./src/components/Card.tsx")),s=a(n("./src/components/Menu.tsx")),i=a(n("./src/components/TeX.tsx"));t.default=()=>r.createElement(r.Fragment,null,r.createElement(s.default,null),r.createElement("div",{className:"title"},"About Befunge 93–∞"),r.createElement(o.default,null,r.createElement("h3",{id:"introduction"},"Introduction"),r.createElement("p",null,"Befunge is a two-dimensional, toroidal, self-modifying programming language; it was created in 1993 in an attempt to create a language as difficult to compile as possible. Instead of having a program counter that just counts lines, Befunge features a program counter with both x and y coordinates (now called an ",r.createElement("em",null,"instruction pointer")," [IP]). Furthermore, the IP will wrap around the top, bottom, or sides of the program, making your code a torus! Oh, and it's self-modifying."),r.createElement("p",null,"The original Befunge language, officially called"," ",r.createElement("a",{href:"//github.com/catseye/Befunge-93/blob/master/doc/Befunge-93.markdown"},"Befunge 93"),", has an ",r.createElement(i.default,null,"80\\times 25"),"-character area for input, an IP, and a stack. The second iteration, ",r.createElement("a",{href:"//quadium.net/funge/spec98.html"},"Befunge 98"),', introduced a lot of fun new features; it has an unbounded input area, supports multithreading with multiple instruction pointers, and gives each IP a modifiable velocity vector and a stack of stacks. It also supports libraries via "fingerprints," and the specification describes variants of Befunge in three dimensions or higher.'),r.createElement("p",null,"Befunge 93–∞ is the result of me taking the parts of each that I like and putting them together. It's basically like Befunge 93 with unbounded size and unbounded integers (hence the name), multithreading, arbitrary IP velocities, and stacks of stacks.")),r.createElement(o.default,null,r.createElement("h3",{id:"Notes"}," Notes "),r.createElement("p",null,"Back at ",r.createElement("a",{href:"/befunge.html"},"befunge.html"),', you can run code with or without the "state," which shows the code, pointers, and stack of stacks after each step. If the state is displayed, the "wait" time is how long to pause between steps. Even with a wait time of 0 it\'s pretty slow; running with the state hidden is much faster.'),r.createElement("p",null,'Also, even though each pointer has its own stack of stacks, the only one displayed is the one belonging to the "top" pointer (when a new pointer is created, it is placed onto the list of pointers one spot "below" the current pointer).'),r.createElement("p",null,"For more sophisticated example programs, see"," ",r.createElement("a",{href:"//github.com/catseye/Befunge-93/blob/master/eg/README.markdown"},"here")," –"," ",r.createElement("a",{href:"https://raw.githubusercontent.com/catseye/Befunge-93/master/eg/aturley.bf"},"aturley.bf"),","," ",r.createElement("a",{href:"https://raw.githubusercontent.com/catseye/Befunge-93/master/eg/befbef2.bf"},"befbef2.bf"),", and"," ",r.createElement("a",{href:"https://raw.githubusercontent.com/catseye/Befunge-93/master/eg/life.bf"},"life.bf")," ","are especially cool. Also check out ",r.createElement("a",{href:"//www.bedroomlan.org/coding/soup/"},"this")," ","beautiful quine.")),r.createElement(o.default,null,r.createElement("h3",{id:"details"},"Details"),r.createElement("p",null,"Some ways in which Befunge 93–∞ differs from Befunge 93; many of the bonus features are borrowed from Befunge 98."),r.createElement("ol",{type:"a"},r.createElement("li",null,'Code is treated as a resizeable torus, with a size that is determined at runtime and may be changed. More specifically: viewing each character as a 1-by-1 square with integer vertices (a "cell"), we take the smallest bounding box of the cells, and identify the edges to create a torus. If, at some point during program execution, we write to a cell that is not in this bounding box, we take the new smallest bounding box containing all cells including the new one, and identify these edges to create a larger torus.'),r.createElement("li",null,"We can still only write to cells with non-negative integer coordinates, so the grid is unbounded to the East and South."),r.createElement("li",null,"Arbitrarily large integers are supported, and program size is theoretically unbounded (in practice limited to the maximum size of a JavaScript array)."),r.createElement("li",null,'The IP initially moves right at a speed of one cell per step, and will remain at that speed if only Befunge 93 commands are used. However, it can also be set to any velocity using "x".'),r.createElement("li",null,"Instead of a single stack there is a stack of stacks, which initially contains one stack. All stack operations from Befunge 93 operate on the stack that is at the top of the stack of stacks (called the Top-Of-Stack Stack, or the TOSS)."),r.createElement("li",null,'Multithreading is supported with the "t" instruction, which splits the current pointer in two.')),r.createElement("p",null,"Despite the differences, this implementation should be able to run most Befunge 93 programs, with the exception of those that depend on edge case behavior like not being able to write out of bounds.")),r.createElement(o.default,null,r.createElement("h3",{id:"refTable"},"Reference Tables"),r.createElement("p",null,'The available instructions. Many of the advanced instructions come from Befunge 98, but some of them work differently. In general, when the program can\'t do what an instruction specifies (e.g. there are not enough things on the stack, or it tries to write to a negative position), it simply does nothing. Here "IP" stands for "instruction pointer," "delta" is the velocity vector of the IP in question, the "TOSS" is the "Top Of Stack Stack," and the "SOSS" is the "Second Of Stack Stack" (the one that becomes the TOSS if the TOSS is popped off).'),r.createElement("h3",{className:"subsection"},"Basic Instructions"),r.createElement("table",{className:"command_table"},r.createElement("colgroup",null,r.createElement("col",{style:{width:"15%"}}),r.createElement("col",{style:{width:"15%"}}),r.createElement("col",{style:{width:"70%"}})),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null," Instruction "),r.createElement("th",null," Name "),r.createElement("th",null," Explanation ")),r.createElement("tr",null,r.createElement("td",null,"0,1,..., or 9"),r.createElement("td",null,"Push number"),r.createElement("td",null,"Pushes 0,1,..., or 9 to the top-of-stack stack (TOSS)")),r.createElement("tr",null,r.createElement("td",null,"a,b,c,d,e, or f"),r.createElement("td",null,"Push number"),r.createElement("td",null,"Pushes 10,11,12,13,14, or 15 to the TOSS")),r.createElement("tr",null,r.createElement("td",null,"^"),r.createElement("td",null,"Go North"),r.createElement("td",null,"Sets delta to be a unit vector pointing North. IP will begin traveling up at a speed of 1 instruction per step.")),r.createElement("tr",null,r.createElement("td",null,"v"),r.createElement("td",null,"Go South"),r.createElement("td",null,"Sets delta to be a unit vector pointing South. IP will begin traveling down at a speed of 1 instruction per step.")),r.createElement("tr",null,r.createElement("td",null,">"),r.createElement("td",null,"Go East"),r.createElement("td",null,"Sets delta to be a unit vector pointing East. IP will begin traveling right at a speed of 1 instruction per step.")),r.createElement("tr",null,r.createElement("td",null," < "),r.createElement("td",null,"Go West"),r.createElement("td",null,"Sets delta to be a unit vector pointing West. IP will begin traveling left at a speed of 1 instruction per step.")),r.createElement("tr",null,r.createElement("td",null,"?"),r.createElement("td",null,"Go away!"),r.createElement("td",null,"Randomly acts like one of ^, v, >, or <. ")),r.createElement("tr",null,r.createElement("td",null,"+, -, *, /, %"),r.createElement("td",null,"Add, subtract, multiply, divide, modulo"),r.createElement("td",null,"Pops the top two values off the TOSS, performs the operation in question, and pushes the result onto the TOSS. The first value popped will be on the right hand side of the operator. For instance, 5 3 - becomes 2. Division is integer division, with the result rounded down to the nearest integer. Modulo behaves as it does in JavaScript, C, etc. – it will be ",r.createElement(i.default,null,"\\leq"),"0 iff the left hand side is negative. Anything mod 0 is 0 by convention (and the Befungian philosophy of never throwing errors).")),r.createElement("tr",null,r.createElement("td",null,". (period)"),r.createElement("td",null,"Output integer"),r.createElement("td",null,"Pops a value off the TOSS and writes it to output as an integer in base ten, followed by a space. (if you don't want the space, print a backspace character after (character code 8)"," ")),r.createElement("tr",null,r.createElement("td",null,", (comma)"),r.createElement("td",null,"Output character"),r.createElement("td",null,"Pops a value off the TOSS and writes the corresponding unicode character to output. (pro tip: a newline is character 10)")),r.createElement("tr",null,r.createElement("td",null,'"'),r.createElement("td",null,"Enter/Exit stringmode"),r.createElement("td",null,'When in stringmode, each character under the pointer is pushed to the stack instead of being executed. For instance, if the IP travels over "Hello world!", the TOSS will have the character codes for H,e,...,d,! on top. Note that if there are multiple pointers each will have its own stringmode toggle.')),r.createElement("tr",null,r.createElement("td",null,"!"),r.createElement("td",null,"Negate!"),r.createElement("td",null,"Pops the top value off the TOSS, and pushes its negation: 1 if the value is 0, and 0 if the value is nonzero.")),r.createElement("tr",null,r.createElement("td",null,"` (backtick)"),r.createElement("td",null,"Greater than"),r.createElement("td",null,"Pops b, then a, off the TOSS and compares them. Pushes 1 if a>b, otherwise pushes 0.")),r.createElement("tr",null,r.createElement("td",null,":"),r.createElement("td",null,"Duplicate"),r.createElement("td",null,"Pops a value off the TOSS, then pushes two copies of that value back onto the TOSS.")),r.createElement("tr",null,r.createElement("td",null,"$"),r.createElement("td",null,"Discard"),r.createElement("td",null,"Pops a value off the TOSS and discards it.")),r.createElement("tr",null,r.createElement("td",null,"\\"),r.createElement("td",null,"Swap"),r.createElement("td",null,"Swaps the top two elements on the TOSS. In other words: pops a, pops b, pushes a, pushes b.")),r.createElement("tr",null,r.createElement("td",null,"#"),r.createElement("td",null,"Bridge"),r.createElement("td",null,"Skips over the next cell, so on the next step the IP moves twice as far as it otherwise would (before skipping over spaces, if applicable).")),r.createElement("tr",null,r.createElement("td",null,"&"),r.createElement("td",null,"Input integer"),r.createElement("td",null,"Prompts the user for an integer, then pushes it onto the TOSS. Pushes 0 if no input is entered.")),r.createElement("tr",null,r.createElement("td",null,"~"),r.createElement("td",null,"Input character"),r.createElement("td",null,"Prompts the user for a character, then pushes its unicode value onto the TOSS. Pushes 10 if no input is entered.")),r.createElement("tr",null,r.createElement("td",null,"_"),r.createElement("td",null,"Horizontal if"),r.createElement("td",null,"Pops a value off the TOSS. If it is nonzero makes delta a unit vector pointing left, otherwise makes delta a unit vector pointing right.")),r.createElement("tr",null,r.createElement("td",null,"|"),r.createElement("td",null,"Vertical if"),r.createElement("td",null,"Pops a value off the TOSS. If it is nonzero makes delta a unit vector pointing up, otherwise makes delta a unit vector pointing down.")),r.createElement("tr",null,r.createElement("td",null,"g"),r.createElement("td",null,"Get"),r.createElement("td",null,"Pops values y, then x off the TOSS. Gets the value currently at position (x,y) in the program grid, and pushes it onto the stack. (top left is (0,0), x increases to the right, and y increases going down).")),r.createElement("tr",null,r.createElement("td",null,"p"),r.createElement("td",null,"Put"),r.createElement("td",null,'Pops values y, then x, then v off the TOSS. Puts v at position (x,y) in the program grid. Note that if this value v is the unicode number of an instruction, the program will treat it just like any other instruction. (if v is not the unicode number of a character it is still placed at that position, and "g" will still get it, but it\'s displayed as "Ø" in the "State" section)')),r.createElement("tr",null,r.createElement("td",null,"q"),r.createElement("td",null,"Quit"),r.createElement("td",null,"Quits the program.")),r.createElement("tr",null,r.createElement("td",null,"@"),r.createElement("td",null,"Stop"),r.createElement("td",null,"Stops a pointer that lands on it. If that was the only pointer, quits the program.")),r.createElement("tr",null,r.createElement("td",null,r.createElement("span",{style:{backgroundColor:"lightblue"}}," ")," (space)"),r.createElement("td",null,"No op"),r.createElement("td",null,"Does nothing. Whenever the IP lands on a space outside of stringmode it immediately moves again, jumping over all spaces until it reaches a non-space character.")),r.createElement("tr",null,r.createElement("td",null,"Anything not defined"),r.createElement("td",null,"No op II"),r.createElement("td",null,"Does nothing, but the IP doesn't jump over it.")))),r.createElement("br",null),r.createElement("h3",{className:"subsection"},"Advanced Instructions (not in Befunge 93)"),r.createElement("table",{className:"command_table"},r.createElement("colgroup",null,r.createElement("col",{style:{width:"15%"}}),r.createElement("col",{style:{width:"15%"}}),r.createElement("col",{style:{width:"70%"}})),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null," Instruction "),r.createElement("th",null," Name "),r.createElement("th",null," Explanation ")),r.createElement("tr",null,r.createElement("td",null,"n"),r.createElement("td",null,"Clear stack"),r.createElement("td",null,"Pops items from the TOSS until it's empty.")),r.createElement("tr",null,r.createElement("td",null,"{"),r.createElement("td",null,"Begin block"),r.createElement("td",null,"Pops a value (",r.createElement(i.default,null,"n"),") from the TOSS, then creates a new stack and pushes it to the stack of stacks. Then the top ",r.createElement(i.default,null,"n")," values from the SOSS (which used to be the TOSS) are transferred to the new TOSS. The order of the values is preserved. If the SOSS has ",r.createElement(i.default,null,"k")," elements where ",r.createElement(i.default,{math:"k < n"}),", then all elements are copied but with ",r.createElement(i.default,null,"n-k")," zeros below them. The new TOSS will be empty if ",r.createElement(i.default,null,"n = 0")," or if the initial TOSS is empty.")),r.createElement("tr",null,r.createElement("td",null,"}"),r.createElement("td",null,"End block"),r.createElement("td",null,"Pops a value (",r.createElement(i.default,null,"n"),") from the TOSS, then transfers the top ",r.createElement(i.default,null,"n")," ","values from the TOSS to the SOSS, then pops the TOSS from the stack of stacks. As before, if the TOSS has ",r.createElement(i.default,{math:"k < n"})," elements, ",r.createElement(i.default,null,"n-k")," zeros will be pushed to the SOSS before the elements are transferred. Does nothing if there is only one stack left.")),r.createElement("tr",null,r.createElement("td",null,"u"),r.createElement("td",null,"Stack under stack"),r.createElement("td",null,"Pops a value (",r.createElement(i.default,null,"n"),") from the TOSS, then transfers the top ",r.createElement(i.default,null,"n")," ","values from the SOSS to the TOSS in a pop-push loop (order is reversed). If the SOSS has ",r.createElement(i.default,{math:"k < n"})," elements, ",r.createElement(i.default,null,"n-k")," zeros will be pushed to the TOSS after the SOSS is empty. Does nothing if there is only one stack left.")),r.createElement("tr",null,r.createElement("td",null,"r"),r.createElement("td",null,"Reflect"),r.createElement("td",null,"Reflects the IP, multiplying its velocity vector by ",r.createElement(i.default,null,"-1"),".")),r.createElement("tr",null,r.createElement("td",null,"x"),r.createElement("td",null,"Set velocity"),r.createElement("td",null,"Pops ",r.createElement(i.default,null,"y")," then ",r.createElement(i.default,null,"x")," from the TOSS, and sets delta to"," ",r.createElement(i.default,null,"(x, y)"),". If there are fewer than 2 values on the TOSS, does nothing.")),r.createElement("tr",null,r.createElement("td",null,"‽ (interrobang)"),r.createElement("td",null,"Go away‽"),r.createElement("td",null,"Randomly chooses a new velocity vector ",r.createElement(i.default,null,"(x,y)")," where ",r.createElement(i.default,null,"x")," and"," ",r.createElement(i.default,null,"y")," are not both 0.")),r.createElement("tr",null,r.createElement("td",null,"["),r.createElement("td",null,"Turn left"),r.createElement("td",null,"Rotate delta left by 90 degrees.")),r.createElement("tr",null,r.createElement("td",null,"]"),r.createElement("td",null,"Turn right"),r.createElement("td",null,'Rotate delta right by 90 degrees. To quote the Funge-98 specification, "to remember which [of "[" and "]"] is which, visualize yourself on the seat of a bicycle, looking down at the handlebars."')),r.createElement("tr",null,r.createElement("td",null,"w"),r.createElement("td",null,"Compare and turn"),r.createElement("td",null,'Pops b, then a, from the TOSS and compares them. If a<b, acts like "["; if a>b, acts like "]"; if a=b, does nothing.')),r.createElement("tr",null,r.createElement("td",null,"t"),r.createElement("td",null,"Split"),r.createElement("td",null,"Creates a new pointer (",r.createElement(i.default,null,"p^\\prime"),") from the current pointer (",r.createElement(i.default,null,"p"),"). The position of ",r.createElement(i.default,null,"p^\\prime")," equals ",r.createElement(i.default,null,"p"),"'s, the stack of"," ",r.createElement(i.default,null,"p^\\prime")," is a copy of ",r.createElement(i.default,null,"p"),"'s, and the delta of"," ",r.createElement(i.default,null,"p^\\prime")," equals the delta of ",r.createElement(i.default,null,"p")," times ",r.createElement(i.default,null,"-1"),"."," ",r.createElement(i.default,null,"p^\\prime")," is placed in the pointer list just before ",r.createElement(i.default,null,"p"),"; so in a given step, first ",r.createElement(i.default,null,"p^\\prime")," is executed, and then ",r.createElement(i.default,null,"p"),".")),r.createElement("tr",null,r.createElement("td",null,"' (single quote)"),r.createElement("td",null,"Fetch character"),r.createElement("td",null,"Looks ahead to the cell that would be encountered next (position+delta), and pushes its value onto the TOSS. Then skips over that cell when updating its position. So, for instance, the program 'a,@ would only take three steps.")),r.createElement("tr",null,r.createElement("td",null,"s"),r.createElement("td",null,"Store character"),r.createElement("td",null,"The opposite of '. Pops a value from the TOSS and places it in cell (position+delta), then skips over that cell when updating its position. If there is nothing on the TOSS, skips over the cell without changing it."))))))},"./src/components/Card.tsx":function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(n("./node_modules/react/index.js"));t.default=({children:e})=>a.default.createElement("div",{className:"card"},a.default.createElement("div",{className:"inner_card"},e))},"./src/components/Menu.tsx":function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(n("./node_modules/react/index.js")),r=n("./node_modules/react/index.js"),o=l(n("./src/images/home.png")),s=l(n("./src/images/home.webp")),i=l(n("./src/images/compass.png")),c=l(n("./src/images/compass.webp")),u=l(n("./src/images/choco.png")),m=l(n("./src/images/choco.webp")),d=l(n("./src/images/mushroom.png")),h=l(n("./src/images/mushroom.webp"));function f(e,t,n,l){return a.default.createElement("li",null,a.default.createElement("a",{className:"menu_item",href:e},a.default.createElement("p",null,a.default.createElement("picture",null,a.default.createElement("source",{type:"image/webp",srcSet:l}),a.default.createElement("img",{src:n,height:"16px",width:"16px",alt:""}))," ",t)))}t.default=({startExpanded:e})=>{const[t,n]=r.useState(null!=e&&e);return a.default.createElement("div",{className:t?"menu_expanded":"menu_collapsed"},function(e,t){return a.default.createElement("div",{className:"menu_button",onClick:()=>t(!e)},a.default.createElement("div",{className:"menu_button_inner"},a.default.createElement("div",{className:"menu_button_line"}),a.default.createElement("div",{className:"menu_button_line"}),a.default.createElement("div",{className:"menu_button_line"})))}(t,n),t?a.default.createElement("div",{className:"centered"},a.default.createElement("ul",{className:"menu_list centered"},f("/","Home",o.default,s.default),f("/problems.html","Problems",i.default,c.default),f("/chomp.html","Chomp",u.default,m.default),f("/befunge.html","Befunge",d.default,h.default))):null)}},"./src/components/TeX.tsx":function(e,t,n){var l=this&&this.__rest||function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(n("./node_modules/react/index.js")),s=r(n("./node_modules/katex/dist/katex.js"));t.default=o.memo((e=>{var{children:t,math:n,block:a,errorColor:r,renderError:i,settings:c,as:u}=e,m=l(e,["children","math","block","errorColor","renderError","settings","as"]);const d=u||(a?"div":"span"),h=null!=t?t:n,[f,p]=o.useState({innerHtml:""});return o.useEffect((()=>{try{const e=s.default.renderToString(h,Object.assign({displayMode:!!a,errorColor:r,throwOnError:!!i},c));p({innerHtml:e})}catch(e){if(!(e instanceof s.default.ParseError||e instanceof TypeError))throw e;p(i?{errorElement:i(e)}:{innerHtml:e.message})}}),[a,h,r,i,c]),"errorElement"in f?f.errorElement:o.default.createElement(d,Object.assign({},m,{dangerouslySetInnerHTML:{__html:f.innerHtml}}))}))}},e=>{e(e.s="./src/befunge-info.tsx")}]);
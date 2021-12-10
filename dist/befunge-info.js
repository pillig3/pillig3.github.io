/*! For license information please see befunge-info.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["befunge-info"],{"./src/images/choco.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/choco.png"},"./src/images/choco.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/choco.webp"},"./src/images/compass.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/compass.png"},"./src/images/compass.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/compass.webp"},"./src/images/heart.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/heart.png"},"./src/images/heart.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/heart.webp"},"./src/images/home.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/home.png"},"./src/images/home.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/home.webp"},"./src/images/mushroom.png":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/mushroom.png"},"./src/images/mushroom.webp":(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l=n.p+"./images/mushroom.webp"},"./src/index.scss":(e,t,n)=>{n.r(t)},"./src/befunge-info.tsx":function(e,t,n){var l=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return a(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n("./node_modules/react/index.js")),i=n("./node_modules/@hot-loader/react-dom/index.js"),c=o(n("./src/components/BefungeInfo.tsx"));n("./src/index.scss"),(0,i.render)(s.createElement(c.default,null),document.querySelector("#root"))},"./src/components/BefungeInfo.tsx":function(e,t,n){var l=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return a(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n("./node_modules/react/index.js")),i=o(n("./src/components/Card.tsx")),c=o(n("./src/components/Menu.tsx")),u=o(n("./src/components/TeX.tsx"));t.default=()=>s.createElement(s.Fragment,null,s.createElement(c.default,null),s.createElement("div",{className:"title"},"About Befunge 93–∞"),s.createElement(i.default,null,s.createElement("h3",{id:"introduction"},"Introduction"),s.createElement("p",null,"Befunge is a two-dimensional, toroidal, self-modifying programming language; it was created in 1993 in an attempt to create a language as difficult to compile as possible. Instead of having a program counter that just counts lines, Befunge features a program counter with both x and y coordinates (now called an ",s.createElement("em",null,"instruction pointer")," [IP]). Furthermore, the IP will wrap around the top, bottom, or sides of the program, making your code a torus! Oh, and it's self-modifying."),s.createElement("p",null,"The original Befunge language, officially called"," ",s.createElement("a",{href:"//github.com/catseye/Befunge-93/blob/master/doc/Befunge-93.markdown"},"Befunge 93"),", has an ",s.createElement(u.default,null,"80\\times 25"),"-character area for input, an IP, and a stack. The second iteration, ",s.createElement("a",{href:"//quadium.net/funge/spec98.html"},"Befunge 98"),', introduced a lot of fun new features; it has an unbounded input area, supports multithreading with multiple instruction pointers, and gives each IP a modifiable velocity vector and a stack of stacks. It also supports libraries via "fingerprints," and the specification describes variants of Befunge in three dimensions or higher.'),s.createElement("p",null,"Befunge 93–∞ is the result of me taking the parts of each that I like and putting them together. It's basically like Befunge 93 with unbounded size and unbounded integers (hence the name), multithreading, arbitrary IP velocities, and stacks of stacks.")),s.createElement(i.default,null,s.createElement("h3",{id:"Notes"}," Notes "),s.createElement("p",null,"Back at ",s.createElement("a",{href:"/befunge.html"},"befunge.html"),', you can run code with or without the "state," which shows the code, pointers, and stack of stacks after each step. If the state is displayed, the "wait" time is how long to pause between steps. Even with a wait time of 0 it\'s pretty slow; running with the state hidden is much faster.'),s.createElement("p",null,'Also, even though each pointer has its own stack of stacks, the only one displayed is the one belonging to the "top" pointer (when a new pointer is created, it is placed onto the list of pointers one spot "below" the current pointer).'),s.createElement("p",null,"For more sophisticated example programs, see"," ",s.createElement("a",{href:"//github.com/catseye/Befunge-93/blob/master/eg/README.markdown"},"here")," –"," ",s.createElement("a",{href:"https://raw.githubusercontent.com/catseye/Befunge-93/master/eg/aturley.bf"},"aturley.bf"),","," ",s.createElement("a",{href:"https://raw.githubusercontent.com/catseye/Befunge-93/master/eg/befbef2.bf"},"befbef2.bf"),", and"," ",s.createElement("a",{href:"https://raw.githubusercontent.com/catseye/Befunge-93/master/eg/life.bf"},"life.bf")," ","are especially cool. Also check out ",s.createElement("a",{href:"//www.bedroomlan.org/coding/soup/"},"this")," ","beautiful quine.")),s.createElement(i.default,null,s.createElement("h3",{id:"details"},"Details"),s.createElement("p",null,"Some ways in which Befunge 93–∞ differs from Befunge 93; many of the bonus features are borrowed from Befunge 98."),s.createElement("ol",{type:"a"},s.createElement("li",null,'Code is treated as a resizeable torus, with a size that is determined at runtime and may be changed. More specifically: viewing each character as a 1-by-1 square with integer vertices (a "cell"), we take the smallest bounding box of the cells, and identify the edges to create a torus. If, at some point during program execution, we write to a cell that is not in this bounding box, we take the new smallest bounding box containing all cells including the new one, and identify these edges to create a larger torus.'),s.createElement("li",null,"We can still only write to cells with non-negative integer coordinates, so the grid is unbounded to the East and South."),s.createElement("li",null,"Arbitrarily large integers are supported, and program size is theoretically unbounded (in practice limited to the maximum size of a JavaScript array)."),s.createElement("li",null,'The IP initially moves right at a speed of one cell per step, and will remain at that speed if only Befunge 93 commands are used. However, it can also be set to any velocity using "x".'),s.createElement("li",null,"Instead of a single stack there is a stack of stacks, which initially contains one stack. All stack operations from Befunge 93 operate on the stack that is at the top of the stack of stacks (called the Top-Of-Stack Stack, or the TOSS)."),s.createElement("li",null,'Multithreading is supported with the "t" instruction, which splits the current pointer in two.')),s.createElement("p",null,"Despite the differences, this implementation should be able to run most Befunge 93 programs, with the exception of those that depend on edge case behavior like not being able to write out of bounds.")),s.createElement(i.default,null,s.createElement("h3",{id:"refTable"},"Reference Tables"),s.createElement("p",null,'The available instructions. Many of the advanced instructions come from Befunge 98, but some of them work differently. In general, when the program can\'t do what an instruction specifies (e.g. there are not enough things on the stack, or it tries to write to a negative position), it simply does nothing. Here "IP" stands for "instruction pointer," "delta" is the velocity vector of the IP in question, the "TOSS" is the "Top Of Stack Stack," and the "SOSS" is the "Second Of Stack Stack" (the one that becomes the TOSS if the TOSS is popped off).'),s.createElement("h3",{className:"subsection"},"Basic Instructions"),s.createElement("table",{className:"command_table"},s.createElement("colgroup",null,s.createElement("col",{style:{width:"15%"}}),s.createElement("col",{style:{width:"15%"}}),s.createElement("col",{style:{width:"70%"}})),s.createElement("tbody",null,s.createElement("tr",null,s.createElement("th",null," Instruction "),s.createElement("th",null," Name "),s.createElement("th",null," Explanation ")),s.createElement("tr",null,s.createElement("td",null,"0,1,..., or 9"),s.createElement("td",null,"Push number"),s.createElement("td",null,"Pushes 0,1,..., or 9 to the top-of-stack stack (TOSS)")),s.createElement("tr",null,s.createElement("td",null,"a,b,c,d,e, or f"),s.createElement("td",null,"Push number"),s.createElement("td",null,"Pushes 10,11,12,13,14, or 15 to the TOSS")),s.createElement("tr",null,s.createElement("td",null,"^"),s.createElement("td",null,"Go North"),s.createElement("td",null,"Sets delta to be a unit vector pointing North. IP will begin traveling up at a speed of 1 instruction per step.")),s.createElement("tr",null,s.createElement("td",null,"v"),s.createElement("td",null,"Go South"),s.createElement("td",null,"Sets delta to be a unit vector pointing South. IP will begin traveling down at a speed of 1 instruction per step.")),s.createElement("tr",null,s.createElement("td",null,">"),s.createElement("td",null,"Go East"),s.createElement("td",null,"Sets delta to be a unit vector pointing East. IP will begin traveling right at a speed of 1 instruction per step.")),s.createElement("tr",null,s.createElement("td",null," < "),s.createElement("td",null,"Go West"),s.createElement("td",null,"Sets delta to be a unit vector pointing West. IP will begin traveling left at a speed of 1 instruction per step.")),s.createElement("tr",null,s.createElement("td",null,"?"),s.createElement("td",null,"Go away!"),s.createElement("td",null,"Randomly acts like one of ^, v, >, or <. ")),s.createElement("tr",null,s.createElement("td",null,"+, -, *, /, %"),s.createElement("td",null,"Add, subtract, multiply, divide, modulo"),s.createElement("td",null,"Pops the top two values off the TOSS, performs the operation in question, and pushes the result onto the TOSS. The first value popped will be on the right hand side of the operator. For instance, 5 3 - becomes 2. Division is integer division, with the result rounded down to the nearest integer. Modulo behaves as it does in JavaScript, C, etc. – it will be ",s.createElement(u.default,null,"\\leq"),"0 iff the left hand side is negative. Anything mod 0 is 0 by convention (and the Befungian philosophy of never throwing errors).")),s.createElement("tr",null,s.createElement("td",null,". (period)"),s.createElement("td",null,"Output integer"),s.createElement("td",null,"Pops a value off the TOSS and writes it to output as an integer in base ten, followed by a space. (if you don't want the space, print a backspace character after (character code 8)"," ")),s.createElement("tr",null,s.createElement("td",null,", (comma)"),s.createElement("td",null,"Output character"),s.createElement("td",null,"Pops a value off the TOSS and writes the corresponding unicode character to output. (pro tip: a newline is character 10)")),s.createElement("tr",null,s.createElement("td",null,'"'),s.createElement("td",null,"Enter/Exit stringmode"),s.createElement("td",null,'When in stringmode, each character under the pointer is pushed to the stack instead of being executed. For instance, if the IP travels over "Hello world!", the TOSS will have the character codes for H,e,...,d,! on top. Note that if there are multiple pointers each will have its own stringmode toggle.')),s.createElement("tr",null,s.createElement("td",null,"!"),s.createElement("td",null,"Negate!"),s.createElement("td",null,"Pops the top value off the TOSS, and pushes its negation: 1 if the value is 0, and 0 if the value is nonzero.")),s.createElement("tr",null,s.createElement("td",null,"` (backtick)"),s.createElement("td",null,"Greater than"),s.createElement("td",null,"Pops b, then a, off the TOSS and compares them. Pushes 1 if a>b, otherwise pushes 0.")),s.createElement("tr",null,s.createElement("td",null,":"),s.createElement("td",null,"Duplicate"),s.createElement("td",null,"Pops a value off the TOSS, then pushes two copies of that value back onto the TOSS.")),s.createElement("tr",null,s.createElement("td",null,"$"),s.createElement("td",null,"Discard"),s.createElement("td",null,"Pops a value off the TOSS and discards it.")),s.createElement("tr",null,s.createElement("td",null,"\\"),s.createElement("td",null,"Swap"),s.createElement("td",null,"Swaps the top two elements on the TOSS. In other words: pops a, pops b, pushes a, pushes b.")),s.createElement("tr",null,s.createElement("td",null,"#"),s.createElement("td",null,"Bridge"),s.createElement("td",null,"Skips over the next cell, so on the next step the IP moves twice as far as it otherwise would (before skipping over spaces, if applicable).")),s.createElement("tr",null,s.createElement("td",null,"&"),s.createElement("td",null,"Input integer"),s.createElement("td",null,"Prompts the user for an integer, then pushes it onto the TOSS. Pushes 0 if no input is entered.")),s.createElement("tr",null,s.createElement("td",null,"~"),s.createElement("td",null,"Input character"),s.createElement("td",null,"Prompts the user for a character, then pushes its unicode value onto the TOSS. Pushes 10 if no input is entered.")),s.createElement("tr",null,s.createElement("td",null,"_"),s.createElement("td",null,"Horizontal if"),s.createElement("td",null,"Pops a value off the TOSS. If it is nonzero makes delta a unit vector pointing left, otherwise makes delta a unit vector pointing right.")),s.createElement("tr",null,s.createElement("td",null,"|"),s.createElement("td",null,"Vertical if"),s.createElement("td",null,"Pops a value off the TOSS. If it is nonzero makes delta a unit vector pointing up, otherwise makes delta a unit vector pointing down.")),s.createElement("tr",null,s.createElement("td",null,"g"),s.createElement("td",null,"Get"),s.createElement("td",null,"Pops values y, then x off the TOSS. Gets the value currently at position (x,y) in the program grid, and pushes it onto the stack. (top left is (0,0), x increases to the right, and y increases going down).")),s.createElement("tr",null,s.createElement("td",null,"p"),s.createElement("td",null,"Put"),s.createElement("td",null,'Pops values y, then x, then v off the TOSS. Puts v at position (x,y) in the program grid. Note that if this value v is the unicode number of an instruction, the program will treat it just like any other instruction. (if v is not the unicode number of a character it is still placed at that position, and "g" will still get it, but it\'s displayed as "Ø" in the "State" section)')),s.createElement("tr",null,s.createElement("td",null,"q"),s.createElement("td",null,"Quit"),s.createElement("td",null,"Quits the program.")),s.createElement("tr",null,s.createElement("td",null,"@"),s.createElement("td",null,"Stop"),s.createElement("td",null,"Stops a pointer that lands on it. If that was the only pointer, quits the program.")),s.createElement("tr",null,s.createElement("td",null,s.createElement("span",{style:{backgroundColor:"lightblue"}}," ")," (space)"),s.createElement("td",null,"No op"),s.createElement("td",null,"Does nothing. Whenever the IP lands on a space outside of stringmode it immediately moves again, jumping over all spaces until it reaches a non-space character.")),s.createElement("tr",null,s.createElement("td",null,"Anything not defined"),s.createElement("td",null,"No op II"),s.createElement("td",null,"Does nothing, but the IP doesn't jump over it.")))),s.createElement("br",null),s.createElement("h3",{className:"subsection"},"Advanced Instructions (not in Befunge 93)"),s.createElement("table",{className:"command_table"},s.createElement("colgroup",null,s.createElement("col",{style:{width:"15%"}}),s.createElement("col",{style:{width:"15%"}}),s.createElement("col",{style:{width:"70%"}})),s.createElement("tbody",null,s.createElement("tr",null,s.createElement("th",null," Instruction "),s.createElement("th",null," Name "),s.createElement("th",null," Explanation ")),s.createElement("tr",null,s.createElement("td",null,"n"),s.createElement("td",null,"Clear stack"),s.createElement("td",null,"Pops items from the TOSS until it's empty.")),s.createElement("tr",null,s.createElement("td",null,"{"),s.createElement("td",null,"Begin block"),s.createElement("td",null,"Pops a value (",s.createElement(u.default,null,"n"),") from the TOSS, then creates a new stack and pushes it to the stack of stacks. Then the top ",s.createElement(u.default,null,"n")," values from the SOSS (which used to be the TOSS) are transferred to the new TOSS. The order of the values is preserved. If the SOSS has ",s.createElement(u.default,null,"k")," elements where ",s.createElement(u.default,{math:"k < n"}),", then all elements are copied but with ",s.createElement(u.default,null,"n-k")," zeros below them. The new TOSS will be empty if ",s.createElement(u.default,null,"n = 0")," or if the initial TOSS is empty.")),s.createElement("tr",null,s.createElement("td",null,"}"),s.createElement("td",null,"End block"),s.createElement("td",null,"Pops a value (",s.createElement(u.default,null,"n"),") from the TOSS, then transfers the top ",s.createElement(u.default,null,"n")," ","values from the TOSS to the SOSS, then pops the TOSS from the stack of stacks. As before, if the TOSS has ",s.createElement(u.default,{math:"k < n"})," elements, ",s.createElement(u.default,null,"n-k")," zeros will be pushed to the SOSS before the elements are transferred. Does nothing if there is only one stack left.")),s.createElement("tr",null,s.createElement("td",null,"u"),s.createElement("td",null,"Stack under stack"),s.createElement("td",null,"Pops a value (",s.createElement(u.default,null,"n"),") from the TOSS, then transfers the top ",s.createElement(u.default,null,"n")," ","values from the SOSS to the TOSS in a pop-push loop (order is reversed). If the SOSS has ",s.createElement(u.default,{math:"k < n"})," elements, ",s.createElement(u.default,null,"n-k")," zeros will be pushed to the TOSS after the SOSS is empty. Does nothing if there is only one stack left.")),s.createElement("tr",null,s.createElement("td",null,"r"),s.createElement("td",null,"Reflect"),s.createElement("td",null,"Reflects the IP, multiplying its velocity vector by ",s.createElement(u.default,null,"-1"),".")),s.createElement("tr",null,s.createElement("td",null,"x"),s.createElement("td",null,"Set velocity"),s.createElement("td",null,"Pops ",s.createElement(u.default,null,"y")," then ",s.createElement(u.default,null,"x")," from the TOSS, and sets delta to"," ",s.createElement(u.default,null,"(x, y)"),". If there are fewer than 2 values on the TOSS, does nothing.")),s.createElement("tr",null,s.createElement("td",null,"‽ (interrobang)"),s.createElement("td",null,"Go away‽"),s.createElement("td",null,"Randomly chooses a new velocity vector ",s.createElement(u.default,null,"(x,y)")," where ",s.createElement(u.default,null,"x")," and"," ",s.createElement(u.default,null,"y")," are not both 0.")),s.createElement("tr",null,s.createElement("td",null,"["),s.createElement("td",null,"Turn left"),s.createElement("td",null,"Rotate delta left by 90 degrees.")),s.createElement("tr",null,s.createElement("td",null,"]"),s.createElement("td",null,"Turn right"),s.createElement("td",null,'Rotate delta right by 90 degrees. To quote the Funge-98 specification, "to remember which [of "[" and "]"] is which, visualize yourself on the seat of a bicycle, looking down at the handlebars."')),s.createElement("tr",null,s.createElement("td",null,"w"),s.createElement("td",null,"Compare and turn"),s.createElement("td",null,'Pops b, then a, from the TOSS and compares them. If a<b, acts like "["; if a>b, acts like "]"; if a=b, does nothing.')),s.createElement("tr",null,s.createElement("td",null,"t"),s.createElement("td",null,"Split"),s.createElement("td",null,"Creates a new pointer (",s.createElement(u.default,null,"p^\\prime"),") from the current pointer (",s.createElement(u.default,null,"p"),"). The position of ",s.createElement(u.default,null,"p^\\prime")," equals ",s.createElement(u.default,null,"p"),"'s, the stack of"," ",s.createElement(u.default,null,"p^\\prime")," is a copy of ",s.createElement(u.default,null,"p"),"'s, and the delta of"," ",s.createElement(u.default,null,"p^\\prime")," equals the delta of ",s.createElement(u.default,null,"p")," times ",s.createElement(u.default,null,"-1"),"."," ",s.createElement(u.default,null,"p^\\prime")," is placed in the pointer list just before ",s.createElement(u.default,null,"p"),"; so in a given step, first ",s.createElement(u.default,null,"p^\\prime")," is executed, and then ",s.createElement(u.default,null,"p"),".")),s.createElement("tr",null,s.createElement("td",null,"' (single quote)"),s.createElement("td",null,"Fetch character"),s.createElement("td",null,"Looks ahead to the cell that would be encountered next (position+delta), and pushes its value onto the TOSS. Then skips over that cell when updating its position. So, for instance, the program 'a,@ would only take three steps.")),s.createElement("tr",null,s.createElement("td",null,"s"),s.createElement("td",null,"Store character"),s.createElement("td",null,"The opposite of '. Pops a value from the TOSS and places it in cell (position+delta), then skips over that cell when updating its position. If there is nothing on the TOSS, skips over the cell without changing it."))))))},"./src/components/Card.tsx":function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(n("./node_modules/react/index.js"));t.default=({children:e})=>a.default.createElement("div",{className:"card"},a.default.createElement("div",{className:"inner_card"},e))},"./src/components/Menu.tsx":function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(n("./node_modules/react/index.js")),r=n("./node_modules/react/index.js"),o=l(n("./src/images/home.png")),s=l(n("./src/images/home.webp")),i=l(n("./src/images/compass.png")),c=l(n("./src/images/compass.webp")),u=l(n("./src/images/choco.png")),d=l(n("./src/images/choco.webp")),m=l(n("./src/images/mushroom.png")),h=l(n("./src/images/mushroom.webp")),f=l(n("./src/images/heart.png")),p=l(n("./src/images/heart.webp"));function E(e,t,n,l){return a.default.createElement("li",null,a.default.createElement("a",{className:"menu_item",href:e},a.default.createElement("p",null,a.default.createElement("picture",null,a.default.createElement("source",{type:"image/webp",srcSet:l}),a.default.createElement("img",{src:n,height:"16px",width:"16px",alt:""}))," ",t)))}t.default=({startExpanded:e})=>{const[t,n]=(0,r.useState)(null!=e&&e);return a.default.createElement("div",{className:t?"menu_expanded":"menu_collapsed"},function(e,t){return a.default.createElement("div",{className:"menu_button",onClick:()=>t(!e)},a.default.createElement("div",{className:"menu_button_inner"},a.default.createElement("div",{className:"menu_button_line"}),a.default.createElement("div",{className:"menu_button_line"}),a.default.createElement("div",{className:"menu_button_line"})))}(t,n),t?a.default.createElement("div",{className:"centered"},a.default.createElement("ul",{className:"menu_list centered"},E("/","Home",o.default,s.default),E("/problems.html","Problems",i.default,c.default),E("/chomp.html","Chomp",u.default,d.default),E("/befunge.html","Befunge",m.default,h.default),E("/misc.html","Miscellanea",f.default,p.default))):null)}},"./src/components/TeX.tsx":function(e,t,n){var l=this&&this.__createBinding||(Object.create?function(e,t,n,l){void 0===l&&(l=n),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,l){void 0===l&&(l=n),e[l]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&l(t,e,n);return a(t,e),t},o=this&&this.__rest||function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n("./node_modules/react/index.js")),c=s(n("./node_modules/katex/dist/katex.js"));t.default=(0,i.memo)((e=>{var{children:t,math:n,block:l,errorColor:a,renderError:r,settings:s,as:u}=e,d=o(e,["children","math","block","errorColor","renderError","settings","as"]);const m=u||(l?"div":"span"),h=null!=t?t:n,[f,p]=(0,i.useState)({innerHtml:""});return(0,i.useEffect)((()=>{try{const e=c.default.renderToString(h,Object.assign({displayMode:!!l,errorColor:a,throwOnError:!!r},s));p({innerHtml:e})}catch(e){if(!(e instanceof c.default.ParseError||e instanceof TypeError))throw e;p(r?{errorElement:r(e)}:{innerHtml:e.message})}}),[l,h,a,r,s]),"errorElement"in f?f.errorElement:i.default.createElement(m,Object.assign({},d,{dangerouslySetInnerHTML:{__html:f.innerHtml}}))}))}},e=>{e(e.s="./src/befunge-info.tsx")}]);
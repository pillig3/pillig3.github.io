import * as React from "react";
import Card from "./Card";
import Menu from "./Menu";
import TeX from "./TeX";

const BefungeInfo: React.FC = (): JSX.Element => (
	<React.Fragment>
		<Menu />
		<div className="title">About Befunge 93&ndash;&infin;</div>
		<Card>
			<h3 id="introduction">Introduction</h3>
			<p>
				Befunge is a two-dimensional, toroidal, self-modifying programming language; it was created in
				1993 in an attempt to create a language as difficult to compile as possible. Instead of having
				a program counter that just counts lines, Befunge features a program counter with both x and y
				coordinates (now called an <em>instruction pointer</em> [IP]). Furthermore, the IP will wrap
				around the top, bottom, or sides of the program, making your code a torus! Oh, and it's
				self-modifying.
			</p>
			<p>
				The original Befunge language, officially called{" "}
				<a href="//github.com/catseye/Befunge-93/blob/master/doc/Befunge-93.markdown">Befunge 93</a>,
				has an <TeX>80\times 25</TeX>-character area for input, an IP, and a stack. The second
				iteration, <a href="//quadium.net/funge/spec98.html">Befunge 98</a>, introduced a lot of fun
				new features; it has an unbounded input area, supports multithreading with multiple
				instruction pointers, and gives each IP a modifiable velocity vector and a stack of stacks. It
				also supports libraries via "fingerprints," and the specification describes variants of
				Befunge in three dimensions or higher.
			</p>
			<p>
				Befunge 93&ndash;&infin; is the result of me taking the parts of each that I like and putting
				them together. It's basically like Befunge 93 with unbounded size and unbounded integers
				(hence the name), multithreading, arbitrary IP velocities, and stacks of stacks.
			</p>
		</Card>
		<Card>
			<h3 id="Notes"> Notes </h3>
			<p>
				Back at <a href="/befunge.html">befunge.html</a>, you can run code with or without the
				"state," which shows the code, pointers, and stack of stacks after each step. If the state is
				displayed, the "wait" time is how long to pause between steps. Even with a wait time of 0 it's
				pretty slow; running with the state hidden is much faster.
			</p>
			<p>
				Also, even though each pointer has its own stack of stacks, the only one displayed is the one
				belonging to the "top" pointer (when a new pointer is created, it is placed onto the list of
				pointers one spot "below" the current pointer).
			</p>
			<p>
				For more sophisticated example programs, see{" "}
				<a href="//github.com/catseye/Befunge-93/blob/master/eg/README.markdown">here</a> &ndash;{" "}
				<a href="https://raw.githubusercontent.com/catseye/Befunge-93/master/eg/aturley.bf">
					aturley.bf
				</a>
				,{" "}
				<a href="https://raw.githubusercontent.com/catseye/Befunge-93/master/eg/befbef2.bf">
					befbef2.bf
				</a>
				, and{" "}
				<a href="https://raw.githubusercontent.com/catseye/Befunge-93/master/eg/life.bf">life.bf</a>{" "}
				are especially cool. Also check out <a href="//www.bedroomlan.org/coding/soup/">this</a>{" "}
				beautiful quine.
			</p>
		</Card>
		<Card>
			<h3 id="details">Details</h3>
			<p>
				Some ways in which Befunge 93&ndash;&infin; differs from Befunge 93; many of the bonus
				features are borrowed from Befunge 98.
			</p>
			<ol type="a">
				<li>
					Code is treated as a resizeable torus, with a size that is determined at runtime and may
					be changed. More specifically: viewing each character as a 1-by-1 square with integer
					vertices (a "cell"), we take the smallest bounding box of the cells, and identify the
					edges to create a torus. If, at some point during program execution, we write to a cell
					that is not in this bounding box, we take the new smallest bounding box containing all
					cells including the new one, and identify these edges to create a larger torus.
				</li>
				<li>
					We can still only write to cells with non-negative integer coordinates, so the grid is
					unbounded to the East and South.
				</li>
				<li>
					Arbitrarily large integers are supported, and program size is theoretically unbounded (in
					practice limited to the maximum size of a JavaScript array).
				</li>
				<li>
					The IP initially moves right at a speed of one cell per step, and will remain at that
					speed if only Befunge 93 commands are used. However, it can also be set to any velocity
					using "x".
				</li>
				<li>
					Instead of a single stack there is a stack of stacks, which initially contains one stack.
					All stack operations from Befunge 93 operate on the stack that is at the top of the stack
					of stacks (called the Top-Of-Stack Stack, or the TOSS).
				</li>
				<li>
					Multithreading is supported with the "t" instruction, which splits the current pointer in
					two.
				</li>
			</ol>
			<p>
				Despite the differences, this implementation should be able to run most Befunge 93 programs,
				with the exception of those that depend on edge case behavior like not being able to write out
				of bounds.
			</p>
		</Card>
		<Card>
			<h3 id="refTable">Reference Tables</h3>
			<p>
				The available instructions. Many of the advanced instructions come from Befunge 98, but some
				of them work differently. In general, when the program can't do what an instruction specifies
				(e.g. there are not enough things on the stack, or it tries to write to a negative position),
				it simply does nothing. Here "IP" stands for "instruction pointer," "delta" is the velocity
				vector of the IP in question, the "TOSS" is the "Top Of Stack Stack," and the "SOSS" is the
				"Second Of Stack Stack" (the one that becomes the TOSS if the TOSS is popped off).
			</p>
			<h3 className="subsection">Basic Instructions</h3>
			<table className="command_table">
				<colgroup>
					<col style={{ width: "15%" }} />
					<col style={{ width: "15%" }} />
					<col style={{ width: "70%" }} />
				</colgroup>
				<tbody>
					<tr>
						<th> Instruction </th>
						<th> Name </th>
						<th> Explanation </th>
					</tr>
					<tr>
						<td>0,1,..., or 9</td>
						<td>Push number</td>
						<td>Pushes 0,1,..., or 9 to the top-of-stack stack (TOSS)</td>
					</tr>
					<tr>
						<td>a,b,c,d,e, or f</td>
						<td>Push number</td>
						<td>Pushes 10,11,12,13,14, or 15 to the TOSS</td>
					</tr>
					<tr>
						<td>^</td>
						<td>Go North</td>
						<td>
							Sets delta to be a unit vector pointing North. IP will begin traveling up at a
							speed of 1 instruction per step.
						</td>
					</tr>
					<tr>
						<td>v</td>
						<td>Go South</td>
						<td>
							Sets delta to be a unit vector pointing South. IP will begin traveling down at a
							speed of 1 instruction per step.
						</td>
					</tr>
					<tr>
						<td>&gt;</td>
						<td>Go East</td>
						<td>
							Sets delta to be a unit vector pointing East. IP will begin traveling right at a
							speed of 1 instruction per step.
						</td>
					</tr>
					<tr>
						<td> &lt; </td>
						<td>Go West</td>
						<td>
							Sets delta to be a unit vector pointing West. IP will begin traveling left at a
							speed of 1 instruction per step.
						</td>
					</tr>
					<tr>
						<td>?</td>
						<td>Go away!</td>
						<td>Randomly acts like one of ^, v, &gt;, or &lt;. </td>
					</tr>
					<tr>
						<td>+, -, *, /, %</td>
						<td>Add, subtract, multiply, divide, modulo</td>
						<td>
							Pops the top two values off the TOSS, performs the operation in question, and
							pushes the result onto the TOSS. The first value popped will be on the right hand
							side of the operator. For instance, 5 3 - becomes 2. Division is integer division,
							with the result rounded down to the nearest integer. Modulo behaves as it does in
							JavaScript, C, etc. &ndash; it will be <TeX>\leq</TeX>0 iff the left hand side is
							negative. Anything mod 0 is 0 by convention (and the Befungian philosophy of never
							throwing errors).
						</td>
					</tr>
					<tr>
						<td>. (period)</td>
						<td>Output integer</td>
						<td>
							Pops a value off the TOSS and writes it to output as an integer in base ten,
							followed by a space. (if you don't want the space, print a backspace character
							after (character code 8){" "}
						</td>
					</tr>
					<tr>
						<td>, (comma)</td>
						<td>Output character</td>
						<td>
							Pops a value off the TOSS and writes the corresponding unicode character to
							output. (pro tip: a newline is character 10)
						</td>
					</tr>
					<tr>
						<td>"</td>
						<td>Enter/Exit stringmode</td>
						<td>
							When in stringmode, each character under the pointer is pushed to the stack
							instead of being executed. For instance, if the IP travels over "Hello world!",
							the TOSS will have the character codes for H,e,...,d,! on top. Note that if there
							are multiple pointers each will have its own stringmode toggle.
						</td>
					</tr>
					<tr>
						<td>!</td>
						<td>Negate!</td>
						<td>
							Pops the top value off the TOSS, and pushes its negation: 1 if the value is 0, and
							0 if the value is nonzero.
						</td>
					</tr>
					<tr>
						<td>` (backtick)</td>
						<td>Greater than</td>
						<td>
							Pops b, then a, off the TOSS and compares them. Pushes 1 if a&gt;b, otherwise
							pushes 0.
						</td>
					</tr>
					<tr>
						<td>:</td>
						<td>Duplicate</td>
						<td>
							Pops a value off the TOSS, then pushes two copies of that value back onto the
							TOSS.
						</td>
					</tr>
					<tr>
						<td>$</td>
						<td>Discard</td>
						<td>Pops a value off the TOSS and discards it.</td>
					</tr>
					<tr>
						<td>\</td>
						<td>Swap</td>
						<td>
							Swaps the top two elements on the TOSS. In other words: pops a, pops b, pushes a,
							pushes b.
						</td>
					</tr>
					<tr>
						<td>#</td>
						<td>Bridge</td>
						<td>
							Skips over the next cell, so on the next step the IP moves twice as far as it
							otherwise would (before skipping over spaces, if applicable).
						</td>
					</tr>
					<tr>
						<td>&amp;</td>
						<td>Input integer</td>
						<td>
							Prompts the user for an integer, then pushes it onto the TOSS. Pushes 0 if no
							input is entered.
						</td>
					</tr>
					<tr>
						<td>~</td>
						<td>Input character</td>
						<td>
							Prompts the user for a character, then pushes its unicode value onto the TOSS.
							Pushes 10 if no input is entered.
						</td>
					</tr>
					<tr>
						<td>_</td>
						<td>Horizontal if</td>
						<td>
							Pops a value off the TOSS. If it is nonzero makes delta a unit vector pointing
							left, otherwise makes delta a unit vector pointing right.
						</td>
					</tr>
					<tr>
						<td>|</td>
						<td>Vertical if</td>
						<td>
							Pops a value off the TOSS. If it is nonzero makes delta a unit vector pointing up,
							otherwise makes delta a unit vector pointing down.
						</td>
					</tr>
					<tr>
						<td>g</td>
						<td>Get</td>
						<td>
							Pops values y, then x off the TOSS. Gets the value currently at position (x,y) in
							the program grid, and pushes it onto the stack. (top left is (0,0), x increases to
							the right, and y increases going down).
						</td>
					</tr>
					<tr>
						<td>p</td>
						<td>Put</td>
						<td>
							Pops values y, then x, then v off the TOSS. Puts v at position (x,y) in the
							program grid. Note that if this value v is the unicode number of an instruction,
							the program will treat it just like any other instruction. (if v is not the
							unicode number of a character it is still placed at that position, and "g" will
							still get it, but it's displayed as "Ø" in the "State" section)
						</td>
					</tr>
					<tr>
						<td>q</td>
						<td>Quit</td>
						<td>Quits the program.</td>
					</tr>
					<tr>
						<td>@</td>
						<td>Stop</td>
						<td>
							Stops a pointer that lands on it. If that was the only pointer, quits the program.
						</td>
					</tr>
					<tr>
						<td>
							<span style={{ backgroundColor: "lightblue" }}>&nbsp;</span> (space)
						</td>
						<td>No op</td>
						<td>
							Does nothing. Whenever the IP lands on a space outside of stringmode it
							immediately moves again, jumping over all spaces until it reaches a non-space
							character.
						</td>
					</tr>
					<tr>
						<td>Anything not defined</td>
						<td>No op II</td>
						<td>Does nothing, but the IP doesn't jump over it.</td>
					</tr>
				</tbody>
			</table>

			<br />
			<h3 className="subsection">Advanced Instructions (not in Befunge 93)</h3>

			<table className="command_table">
				<colgroup>
					<col style={{ width: "15%" }} />
					<col style={{ width: "15%" }} />
					<col style={{ width: "70%" }} />
				</colgroup>
				<tbody>
					<tr>
						<th> Instruction </th>
						<th> Name </th>
						<th> Explanation </th>
					</tr>
					<tr>
						<td>n</td>
						<td>Clear stack</td>
						<td>Pops items from the TOSS until it's empty.</td>
					</tr>
					<tr>
						<td>{"{"}</td>
						<td>Begin block</td>
						<td>
							Pops a value (<TeX>n</TeX>) from the TOSS, then creates a new stack and pushes it
							to the stack of stacks. Then the top <TeX>n</TeX> values from the SOSS (which used
							to be the TOSS) are transferred to the new TOSS. The order of the values is
							preserved. If the SOSS has <TeX>k</TeX> elements where <TeX math="k < n" />, then
							all elements are copied but with <TeX>n-k</TeX> zeros below them. The new TOSS
							will be empty if <TeX>n = 0</TeX> or if the initial TOSS is empty.
						</td>
					</tr>
					<tr>
						<td>{"}"}</td>
						<td>End block</td>
						<td>
							Pops a value (<TeX>n</TeX>) from the TOSS, then transfers the top <TeX>n</TeX>{" "}
							values from the TOSS to the SOSS, then pops the TOSS from the stack of stacks. As
							before, if the TOSS has <TeX math="k < n" /> elements, <TeX>n-k</TeX> zeros will
							be pushed to the SOSS before the elements are transferred. Does nothing if there
							is only one stack left.
						</td>
					</tr>
					<tr>
						<td>u</td>
						<td>Stack under stack</td>
						<td>
							Pops a value (<TeX>n</TeX>) from the TOSS, then transfers the top <TeX>n</TeX>{" "}
							values from the SOSS to the TOSS in a pop-push loop (order is reversed). If the
							SOSS has <TeX math="k < n" /> elements, <TeX>n-k</TeX> zeros will be pushed to the
							TOSS after the SOSS is empty. Does nothing if there is only one stack left.
						</td>
					</tr>
					<tr>
						<td>r</td>
						<td>Reflect</td>
						<td>
							Reflects the IP, multiplying its velocity vector by <TeX>-1</TeX>.
						</td>
					</tr>
					<tr>
						<td>x</td>
						<td>Set velocity</td>
						<td>
							Pops <TeX>y</TeX> then <TeX>x</TeX> from the TOSS, and sets delta to{" "}
							<TeX>(x, y)</TeX>. If there are fewer than 2 values on the TOSS, does nothing.
						</td>
					</tr>
					<tr>
						<td>‽ (interrobang)</td>
						<td>Go away‽</td>
						<td>
							Randomly chooses a new velocity vector <TeX>(x,y)</TeX> where <TeX>x</TeX> and{" "}
							<TeX>y</TeX> are not both 0.
						</td>
					</tr>
					<tr>
						<td>[</td>
						<td>Turn left</td>
						<td>Rotate delta left by 90 degrees.</td>
					</tr>
					<tr>
						<td>]</td>
						<td>Turn right</td>
						<td>
							Rotate delta right by 90 degrees. To quote the Funge-98 specification, "to
							remember which [of "[" and "]"] is which, visualize yourself on the seat of a
							bicycle, looking down at the handlebars."
						</td>
					</tr>
					<tr>
						<td>w</td>
						<td>Compare and turn</td>
						<td>
							Pops b, then a, from the TOSS and compares them. If a&lt;b, acts like "["; if
							a&gt;b, acts like "]"; if a=b, does nothing.
						</td>
					</tr>
					<tr>
						<td>t</td>
						<td>Split</td>
						<td>
							Creates a new pointer (<TeX>p^\prime</TeX>) from the current pointer (<TeX>p</TeX>
							). The position of <TeX>p^\prime</TeX> equals <TeX>p</TeX>'s, the stack of{" "}
							<TeX>p^\prime</TeX> is a copy of <TeX>p</TeX>'s, and the delta of{" "}
							<TeX>p^\prime</TeX> equals the delta of <TeX>p</TeX> times <TeX>-1</TeX>.{" "}
							<TeX>p^\prime</TeX> is placed in the pointer list just before <TeX>p</TeX>; so in
							a given step, first <TeX>p^\prime</TeX> is executed, and then <TeX>p</TeX>.
						</td>
					</tr>
					<tr>
						<td>' (single quote)</td>
						<td>Fetch character</td>
						<td>
							Looks ahead to the cell that would be encountered next (position+delta), and
							pushes its value onto the TOSS. Then skips over that cell when updating its
							position. So, for instance, the program 'a,@ would only take three steps.
						</td>
					</tr>
					<tr>
						<td>s</td>
						<td>Store character</td>
						<td>
							The opposite of '. Pops a value from the TOSS and places it in cell
							(position+delta), then skips over that cell when updating its position. If there
							is nothing on the TOSS, skips over the cell without changing it.
						</td>
					</tr>
				</tbody>
			</table>
		</Card>
	</React.Fragment>
);

export default BefungeInfo;

import * as React from "react";
import { render } from "react-dom";
import Card from "./components/Card";
import Menu from "./components/Menu";
import TeX from "./components/TeX";
import "./index.scss";

render(
	<React.Fragment>
		<Menu />
		<div className="title">Miscellanea</div>
		<Card>
			<a href="/complex.html">Complex function plotter</a> &ndash; A place to graph functions on the
			complex plane! Click and drag to move around, and press the - and + keys to zoom. Here are some
			examples:
			<ul className="math_list">
				<li>
					<a href="/complex.html#1/x%20ln(x-1)^2&&12">
						<TeX math="\displaystyle \frac{1}{x}\ln(x-1)^2" />
					</a>
				</li>
				<li>
					<a href="/complex.html#(1/x^5-i) (1/(x/2)^5+1) (1/(x/3)^5+i) (1/(x/4)^5-1)&&15">
						<TeX math="\displaystyle \prod_{n=1}^4\left( (x/n)^{-5} - i^n \right)" />
					</a>
				</li>
				<li>
					<a href="/complex.html#sin(ln(exp(x^2)))sin(ln(exp(x^3-pi/2)))&&8">
						<TeX math="\displaystyle \sin\left(\ln\left( e^{x^2} \right)\right) \sin\left(\ln\left( e^{x^3-\pi/2} \right)\right)" />
					</a>
				</li>
				<li>
					<a href="/complex.html#x^2/((x-1)(x-(-1/2+3^(1/2)i/2))(x-(-1/2-3^(1/2)i/2)))&&5">
						<TeX math="\displaystyle \frac{x^2}{(x-\zeta_1)(x-\zeta_2)(x-\zeta_3)}" />
					</a>
					, where the <TeX>\zeta_i</TeX> are the third roots of unity
				</li>
				<li>
					<a href="/complex.html#tet(x,52)&-0.5,0&8">
						<TeX math="\displaystyle \mathrm{tet}(x, 52)" />
					</a>
					, where <TeX math="\mathrm{tet}" /> is is{" "}
					<a href="https://en.wikipedia.org/wiki/Tetration">tetration</a> &mdash;{" "}
					<TeX math="\mathrm{tet}(x, n) = \left. x^{x^{...^{x}}}\right\} n\text{ times}" />.
				</li>
			</ul>
		</Card>
		<Card>
			<a href="/comps.html">Comps</a> &ndash; An overview of some cool research I did on newly reducible
			polynomials.
		</Card>
		<Card>
			<a href="/pentris.html">Pentris</a> &ndash; It's like tetris, but with pentominos and reflection!
			<ul className="list_no_style">
				<li>Left / Right &ndash; Move piece sideways</li>
				<li>Up &ndash; Rotate piece</li>
				<li>X &ndash; Reflect piece</li>
				<li>C &ndash; Store piece for later</li>
				<li>Down &ndash; Soft drop</li>
				<li>Space &ndash; Hard drop</li>
			</ul>
		</Card>
	</React.Fragment>,
	document.querySelector("#root") as HTMLElement,
);

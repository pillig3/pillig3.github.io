import * as React from "react";
import { render } from "react-dom";
import Card from "./components/Card";
import Menu from "./components/Menu";
import "./index.scss";

render(
	<React.Fragment>
		<Menu />
		<div className="title">Miscellanea</div>
		<Card>
			<a href="/comps.html">Comps</a> – An overview of some cool research I did on newly reducible
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

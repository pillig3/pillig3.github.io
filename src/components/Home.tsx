import * as React from "react";
import Card from "./Card";
import TeX from "./TeX";
import tetPng from "../images/tetinv52.png";
import tetWebp from "../images/tetinv52.webp";

const Home: React.FC = (): JSX.Element => (
	<div>
		<h1 className="title">Hello!</h1>
		<Card>
			Welcome to my website! Here you'll find a collection of things I made and/or thought were neat.
			For instance, here is a graph of the complex function
			<TeX math="f(z) = \left. (1/z)^{(1/z)^{...^{(1/z)}}} \right\} 52\textrm{ times}" block />
			<picture className="centered">
				<source type="image/webp" srcSet={tetWebp} />
				<img className="centered" src={tetPng} width="75%" alt="graph of tetration" />
			</picture>
		</Card>
	</div>
);

export default Home;

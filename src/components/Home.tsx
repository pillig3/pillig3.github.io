import React, { ComponentPropsWithoutRef } from "react";
import Card from "./Card";
import TeX from "./TeX";
import tetPng from "../images/tetinv52.png";
import tetWebp from "../images/tetinv52.webp";
import Menu from "./Menu";


const Home: React.FC = (): JSX.Element => (
	<React.Fragment>
		<Menu />
		<div className="title">Welcome</div>
		<Card>
			<CardTitle>About Me</CardTitle>
			<LabelValue label="Name" value="Peter Illig" />
			<br />
			<LabelValue label="Occupation" value="Software Developer" />
			<br />
			<LabelValue label="Hometown" value="Madison, Wisconsin" />
		</Card>
		<Card>
			<CardTitle>About This Website</CardTitle>
			This website is simply a collection of things I made or thought were neat — enjoyable math problems, for-fun programs, or research I've done.
			<br />
			For instance, here's a graph I wanted to put on the front page because it's super cool. 
			This is a plot (using <a href="https://en.wikipedia.org/wiki/Domain_coloring">domain coloring</a>) of the complex function
			<TeX math="f(z) = \left. (1/z)^{(1/z)^{...^{(1/z)}}} \right\} 52\textrm{ times}" block />
			<picture className="centered">
				<source type="image/webp" srcSet={tetWebp} />
				<img className="centered" src={tetPng} width="500em" alt="graph of tetration" />
			</picture>
		</Card>
	</React.Fragment>
);

type LabelValueProps = {
	label: string;
	value: string;
};

const LabelValue: React.FC<LabelValueProps> = ({ label, value }) => {
	return <>
		<span style={{color: "grey"}}>{label}</span>
		:&nbsp;&nbsp;
		<span>{value}</span>
	</>;
};

const CardTitle: React.FC<ComponentPropsWithoutRef<"div">> = ({ children }) => {
	return <div style={{fontSize: "x-large", paddingBottom: "5px"}}>{children}</div>;
}

export default Home;

import * as React from "react";
import Card from "./Card";
// import TeX from "./TeX";
import Menu from "./Menu";

const Problems: React.FC = (): JSX.Element => (
	<div>
		<Menu />
		<div className="title">Problems</div>
		<Card>Test problem</Card>
	</div>
);

export default Problems;

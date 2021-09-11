import React, { ComponentPropsWithoutRef } from "react";
import { useState } from "react";
import homePng from "../images/home.png";
import homeWebp from "../images/home.webp";
import compassPng from "../images/compass.png";
import compassWebp from "../images/compass.webp";
import chocoPng from "../images/choco.png";
import chocoWebp from "../images/choco.webp";

const Menu: React.FC<MenuProps> = ({ startExpanded }) => {
	const [expanded, toggleExpanded] = useState(startExpanded ?? false);

	return (
		<div className={expanded ? "menu_expanded" : "menu_collapsed"}>
			{MenuButton(expanded, toggleExpanded)}
			{expanded ? (
				<div>
					<ul className="menu_list">
						{MenuItem("/", "Home", homePng, homeWebp)}
						{MenuItem("/problems.html", "Problems", compassPng, compassWebp)}
						{MenuItem("/chomp.html", "Chomp", chocoPng, chocoWebp)}
					</ul>
				</div>
			) : null}
		</div>
	);
};

function MenuItem(reference: string, text: string, png: any, webp: any): JSX.Element {
	return (
		<li>
			<a className="menu_item" href={reference}>
				<p>
					<picture>
						<source type="image/webp" srcSet={webp} />
						<img src={png} height="16px" width="16px" alt="" />
					</picture>
					{text}
				</p>
			</a>
		</li>
	);
}

function MenuButton(
	expanded: boolean,
	toggleExpanded: React.Dispatch<React.SetStateAction<boolean>>,
): JSX.Element {
	return (
		<div className="menu_button" onClick={() => toggleExpanded(!expanded)}>
			<div className="menu_button_inner">
				<div className="menu_button_line" />
				<div className="menu_button_line" />
				<div className="menu_button_line" />
			</div>
		</div>
	);
}

export default Menu;

type MenuProps = ComponentPropsWithoutRef<"div"> &
	Partial<{
		startExpanded: boolean;
	}>;

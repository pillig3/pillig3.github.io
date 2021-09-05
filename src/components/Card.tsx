import React, { ComponentPropsWithoutRef } from "react";

const Card: React.FC<ComponentPropsWithoutRef<"div">> = ({ children }) => {
	return (
		<div className="card">
			<div className="inner_card">{children}</div>
		</div>
	);
};

export default Card;

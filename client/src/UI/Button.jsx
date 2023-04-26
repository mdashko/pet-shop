import React, { useState } from "react";
import { colors } from "../helpers";

export const Button = ({ color, padding, margin, onClick, children }) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};

	const hoverItem = {
		backgroundColor: colors[color],
		padding: "1em 2.5em",
		margin: margin,
		border: "none",
		borderRadius: "3em",
		transition: "all 0.5s ease-out",
		opacity: "0.9",
	};
	return (
		<button
			onClick={onClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={
				isHover
					? hoverItem
					: {
							backgroundColor: colors[color],
							padding: "1em 2.5em",
							margin: margin,
							border: "none",
							borderRadius: "3em",
					  }
			}
		>
			{children}
		</button>
	);
};

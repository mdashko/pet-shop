import React, { useState } from "react";
import { colors, fonts } from "../helpers";

export const Text = ({
	color,
	family,
	size,
	weight,
	margin,
	hover = false,
	children,
	underlined = false,
}) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};
	const handleMouseLeave = () => {
		setIsHover(false);
	};

	const hoverText = {
		color: colors["hoverColor"],
		fontFamily: fonts[family],
		fontSize: size,
		fontWeight: weight,
		margin: margin,
		transition: "all 0.5s ease-out",
	};
	return (
		<span
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={
				isHover && hover
					? hoverText
					: {
							color: colors[color],
							fontFamily: fonts[family],
							fontSize: size,
							fontWeight: weight,
							margin: margin,
							textDecoration: underlined && "underline",
					  }
			}
		>
			{children}
		</span>
	);
};

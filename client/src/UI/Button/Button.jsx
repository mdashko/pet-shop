import React, { useState } from "react";
import { colors } from "../../helpers";

export const Button = ({ color, margin, onClick, children }) => {
	return (
		<button
			className="button"
			onClick={onClick}
			style={{
				backgroundColor: colors[color],
				margin: margin,
			}}
		>
			{children}
		</button>
	);
};

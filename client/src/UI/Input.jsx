import React from "react";
import { colors } from "../helpers";

export const Input = ({
	placeholder,
	type = "text",
	required = false,
	onChange,
}) => {
	return (
		<input
			required={required}
			placeholder={placeholder}
			type={type}
			style={{
				width: "15em",
				height: "2.5em",
				borderRadius: "1em",
				border: `0.05em solid  ${colors["orangeColor"]}`,
				padding: "0 1em",
				margin: "0.5em 0",
			}}
			onChange={onChange}
		/>
	);
};

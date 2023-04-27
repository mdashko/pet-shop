import React from "react";
import { colors } from "../../helpers";

export const Input = ({
	placeholder,
	type = "text",
	required = false,
	onChange,
}) => {
	return (
		<input
			className="input"
			required={required}
			placeholder={placeholder}
			type={type}
			onChange={onChange}
		/>
	);
};

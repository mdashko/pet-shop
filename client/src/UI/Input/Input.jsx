import React from "react";
import { colors } from "../../helpers";

export const Input = ({
	placeholder,
	type = "text",
	required = true,
	value,
	onChange,
}) => {
	return (
		<input
			className="input"
			required={required}
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={onChange}
		/>
	);
};

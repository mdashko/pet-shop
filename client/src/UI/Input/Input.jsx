import React from "react";
import { colors } from "../../helpers";

export const Input = ({
	placeholder,
	type = "text",
	required = true,
	value,
	name,
	onChange,
}) => {
	return (
		<input
			className="input"
			required={required}
			placeholder={placeholder}
			type={type}
			value={value}
			name={name}
			onChange={onChange}
		/>
	);
};

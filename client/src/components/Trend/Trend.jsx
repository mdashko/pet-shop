import React from "react";
import { Text } from "../../UI/Text/Text";

export const Trend = ({ image, heading, preHeading }) => {
	return (
		<div className="trend">
			<img src={image} alt="trend" />
			<div className="trend__text">
				<Text
					color="mainColor"
					family="mainFonts"
					weight="500"
					margin="0.5em 0"
					size="1.4em"
				>
					{heading}
				</Text>
				<Text
					color="grayColor"
					family="mainFonts"
					weight="500"
					margin="0.2em 0"
					size="0.8em"
				>
					{preHeading}
				</Text>
			</div>
		</div>
	);
};

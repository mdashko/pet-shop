import React from "react";
import { images } from "../../images";

export const Heart = ({ isClicked, onClick }) => {
	return (
		<button className="heart" onClick={onClick}>
			<img
				src={isClicked ? images.heartFilled : images.heart}
				alt={isClicked ? "unlike" : "like"}
			/>
		</button>
	);
};

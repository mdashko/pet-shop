import React from "react";
import { images } from "../../images";

export const Heart = () => {
	const [isClicked, setIsClicked] = React.useState(false);

	const handleClick = () => setIsClicked(!isClicked);
	return (
		<button className="heart" onClick={handleClick}>
			<img
				src={isClicked ? images.heartFilled : images.heart}
				alt={isClicked ? "unlike" : "like"}
			/>
		</button>
	);
};

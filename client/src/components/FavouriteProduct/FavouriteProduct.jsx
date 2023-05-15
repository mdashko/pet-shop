import React from "react";
import { Heart } from "../../components/Heart/Heart";
import { images } from "../../images";
import { Text } from "../../UI/Text/Text";

export const FavouriteProduct = () => {
	return (
		<div className="favouriteProduct">
			<div className="favouriteProduct__img-container">
				<img src={images.testProduct} alt="" />
			</div>
			<div className="favouriteProduct__descr-container">
				<Text
					color="mainColor"
					family="mainFonts"
					weight="500"
					margin="0 0.5em"
					size="1.4em"
				>
					Product 1
				</Text>
				<Heart />
			</div>
		</div>
	);
};

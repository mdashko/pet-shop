import React from "react";
import { Heart } from "../../components/Heart/Heart";
import { images } from "../../images";
import { Text } from "../../UI/Text/Text";

export const Product = () => {
	return (
		<div className="product">
			<div className="product__img-container">
				<img src={images.testProduct} alt="" />
			</div>
			<div className="product__descr-container">
				<Text
					color="mainColor"
					family="mainFonts"
					weight="500"
					margin="0.5em 0"
					size="1.4em"
				>
					Product 1
				</Text>
				<Heart />
			</div>
		</div>
	);
};

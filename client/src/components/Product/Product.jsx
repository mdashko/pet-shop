import React from "react";
import { Heart } from "../../components/Heart/Heart";
import { Text } from "../../UI/Text/Text";
import { FavouriteContext } from "../../contexts/FavouriteContext";

export const Product = ({ id, name, image }) => {
	const [isClicked, setIsClicked] = React.useState(false);

	const { updateFavouriteProducts } = React.useContext(FavouriteContext);

	const addToFavourites = () => {
		setIsClicked(true);
		const newProduct = { id: id, name: name };
		updateFavouriteProducts(newProduct);
	};

	return (
		<div className="product">
			<div className="product__img-container">
				<img src={image} alt={name} />
			</div>
			<div className="product__descr-container">
				<Text
					color="mainColor"
					family="mainFonts"
					weight="500"
					margin="0.5em 0"
					size="1.4em"
				>
					{name}
				</Text>
				<Heart isClicked={isClicked} onClick={addToFavourites} />
			</div>
		</div>
	);
};

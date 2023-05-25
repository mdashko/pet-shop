import React, { useContext } from "react";
import { Heart } from "../../components/Heart/Heart";
import { Text } from "../../UI/Text/Text";
import { images } from "../../images";
import { FavouriteContext } from "../../contexts/FavouriteContext";

export const FavouriteProduct = ({ id, name, image }) => {
	const [isClicked, setIsClicked] = React.useState(true);
	const { removeFromFavouriteProducts } = React.useContext(FavouriteContext);

	const removeFromFavourites = () => {
		setIsClicked(false);
		removeFromFavouriteProducts(id);
	};

	return (
		<div className="favouriteProduct">
			<div className="favouriteProduct__img-container">
				<img src={images.testProduct2} alt={name} />
			</div>
			<div className="favouriteProduct__descr-container">
				<Text
					color="mainColor"
					family="mainFonts"
					weight="500"
					margin="0 0.5em"
					size="1.4em"
				>
					{name}
				</Text>
				<Heart isClicked={isClicked} onClick={removeFromFavourites} />
			</div>
		</div>
	);
};

import React from "react";
import { Header } from "../../components/Header/Header";
import { FavouriteProduct } from "../../components/FavouriteProduct/FavouriteProduct";
import { FavouriteContext } from "../../contexts/FavouriteContext";
import { Text } from "../../UI/Text/Text";

export const Favourites = () => {
	const { favouriteProducts} =
		React.useContext(FavouriteContext);


	return (
		<>
			<Header />
			<section className="favourites">
				<section className="favourites__list">
					{favouriteProducts.length ? (
						favouriteProducts.map((product) => {
							return (
								<FavouriteProduct
									id={product.id}
									name={product.name}
									image={product.image}
								/>
							);
						})
					) : (
						<div className="favourites__list__empty">
							<Text
								color="grayColor"
								family="mainFonts"
								weight="300"
								size="0.9em"
								margin="0 0.2em"
							>
								You don't have favourite products
							</Text>
						</div>
					)}
				</section>
			</section>
		</>
	);
};

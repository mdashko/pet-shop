import React from "react";
import { Header } from "../../components/Header/Header";
import { FavouriteProduct } from "../../components/FavouriteProduct/FavouriteProduct";

export const Favourites = () => {
	return (
		<>
			<Header />
			<section className="favourites">
				<section className="favourites__list">
					<FavouriteProduct />
				</section>
			</section>
		</>
	);
};

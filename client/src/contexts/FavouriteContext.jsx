import React, { createContext, useState, useEffect } from "react";

export const FavouriteContext = createContext(null);
export const FavouriteProvider = ({ children }) => {
	const [favouriteProducts, setFavouriteProducts] = useState([]);

	const updateFavouriteProducts = (newProduct) => {
		const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
		favourites.push(newProduct);
		setFavouriteProducts(favourites);
		localStorage.setItem("favourites", JSON.stringify(favourites));
	};

	const removeFromFavouriteProducts = React.useCallback((id) => {
		const favourites = favouriteProducts.filter((product) => product.id != id);
		localStorage.setItem("favourites", JSON.stringify(favourites));
	});

	useEffect(() => {
		const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
		setFavouriteProducts(favourites);
	}, []);

	return (
		<FavouriteContext.Provider
			value={{
				updateFavouriteProducts,
				favouriteProducts,
				removeFromFavouriteProducts,
			}}
		>
			{children}
		</FavouriteContext.Provider>
	);
};

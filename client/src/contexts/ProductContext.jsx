import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext(null);
export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const findProduct = (userInput) => {
		const sortProducts = products.sort((product) =>
			product.name.startswith(userInput)
		);
		setProducts(sortProducts);
	};

	return (
		<ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
	);
};

import React from "react";
import { Header } from "../../components/Header/Header";
import { Product } from "../../components/Product/Product";
import { images } from "../../images";
import { FavouriteContext } from "../../contexts/FavouriteContext";

export const Shop = () => {
	return (
		<>
			<Header />
			<section className="shop">
				<section className="shop__catalog">
					<Product id="1" name="Product 1" image={images.testProduct} />
					<Product id="2" name="Product 2" image={images.testProduct2} />
				</section>
			</section>
		</>
	);
};

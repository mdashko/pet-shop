import React from "react";
import { Header } from "../../components/Header/Header";
import { Product } from "../../components/Product/Product";

export const Shop = () => {
	return (
		<>
			<Header />
			<section className="shop">
				<section className="shop__catalog">
					<Product />
				</section>
			</section>
			;
		</>
	);
};

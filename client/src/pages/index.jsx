import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routes } from "../helpers";
import { FavouriteProvider } from "../contexts/FavouriteContext";
import { ProductContext } from "../contexts/ProductContext";
export const Pages = () => {
	return (
		<>
			<ProductContext>
				<FavouriteProvider>
					<BrowserRouter>
						<Routes>
							{routes.map((route) => {
								return (
									<Route path={route.path} exact element={route.element} />
								);
							})}
						</Routes>
					</BrowserRouter>
				</FavouriteProvider>
				<ToastContainer />
			</ProductContext>
		</>
	);
};

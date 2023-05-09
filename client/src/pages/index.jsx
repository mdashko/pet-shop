import React from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routes } from "../helpers";

export const Pages = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{routes.map((route) => {
						return <Route path={route.path} exact element={route.element} />;
					})}
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
};

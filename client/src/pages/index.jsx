import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Explore } from "./Explore";
import { LogIn } from "./LogIn";
import { SignUp } from "./SignUp";
import { Profile } from "./Profile";


export const Pages = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/LogIn" exact element={<LogIn />} />
					<Route path="/SignUp" exact element={<SignUp />} />
					<Route path="/Explore" exact element={<Explore />} />
					<Route path="/Profile" exact element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

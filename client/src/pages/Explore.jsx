import React from "react";
import { Header } from "../components/Header";
import { SearchBar } from "../UI/SearchBar";

export const Explore = () => {
	return (
		<>
			<Header />
			<div className="explore">
				<section className="explore__search-bar">
					<SearchBar />
				</section>
				<section>
					
				</section>
			</div>
		</>
	);
};

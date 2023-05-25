import React, { useState } from "react";
import { images } from "../../images";
import { colors, fonts } from "../../helpers";

export const SearchBar = () => {
	return (
		<div className="searchBar">
			<input onChange={}
				style={{
					backgroundImage: `url(${images.glass})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "0.5em center",
				}}
				className="searchBar_input"
				type="text"
				placeholder="Search Product or Brand"
			/>
		</div>
	);
};

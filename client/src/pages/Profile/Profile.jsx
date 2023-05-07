import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "../../UI/Text/Text";
import { Button } from "../../UI/Button/Button";
import { images } from "../../images";

export const Profile = () => {
	const navigate = useNavigate();
	const handleLogout = (e) => {
		e.preventDefault();
		localStorage.removeItem("userInfo");
		navigate("/");
	};
	return (
		<>
			<div className="profile">
				<section className="profile__user-info">
					<img
						className="profile__user-info_img"
						src={images.userIcon}
						alt="user"
					/>
					<Text
						color="mainColor"
						family="mainFonts"
						weight="600"
						margin="0.5em 0 "
						size="2.5em"
					>
					marta dashko
					</Text>
					<Text
						color="grayColor"
						family="mainFonts"
						weight="300"
						size="0.9em"
						margin="0 0.2em"
					>
					nghghgh
					</Text>
					<Button
						color="barkBlueColor"
						margin="1em 0.5em"
						onClick={handleLogout}
					>
						<Text color="whiteColor" family="mainFonts" weight="600" margin="0">
							Log out
						</Text>
					</Button>
				</section>
			</div>
		</>
	);
};

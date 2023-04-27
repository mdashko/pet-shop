import React, { useState, useEffect } from "react";
import { Text } from "../../UI/Text/Text";
import { Button } from "../../UI/Button/Button";
import { images } from "../../images";

export const Profile = ({}) => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
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
						Marta Dashko
					</Text>
					<Text
						color="grayColor"
						family="mainFonts"
						weight="300"
						size="0.9em"
						margin="0 0.2em"
					>
						martadashko@mail.com
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

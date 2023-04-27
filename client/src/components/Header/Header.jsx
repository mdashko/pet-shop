import React from "react";
import { images } from "../../images";
import { Text } from "../../UI/Text/Text";
import { Button } from "../../UI/Button/Button";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<div className="header__logo-container">
					<img src={images.dogIcon} alt="icon" />
					<Text
						color="mainColor"
						family="mainFonts"
						weight="700"
						margin="0 1em"
					>
						PetShop
					</Text>
				</div>
			</Link>
			<div className="header__navbar">
				<Link to="/Profile">
					<a href="">
						<Text
							color="mainColor"
							family="mainFonts"
							weight="600"
							margin="0 1em"
							hover="true"
						>
							Shop
						</Text>
					</a>
				</Link>
				<Link to="/Explore">
					<a href="">
						<Text
							color="mainColor"
							family="mainFonts"
							weight="600"
							margin="0 1em"
							hover="true"
						>
							Explore
						</Text>
					</a>
				</Link>
				<a href="">
					<Text
						color="mainColor"
						family="mainFonts"
						weight="600"
						margin="0 1em"
						hover="true"
					>
						Favourite
					</Text>
				</a>
			</div>
			<div className="header__buttons">
				<Link to="/LogIn">
					<Button color="orangeColor" margin="0 0.5em">
						<Text color="whiteColor" family="mainFonts" weight="600" margin="0">
							Log in
						</Text>
					</Button>
				</Link>
				<Link to="/SignUp">
					<Button color="orangeColor" margin="0 0.5em">
						<Text color="whiteColor" family="mainFonts" weight="600" margin="0">
							Sign up
						</Text>
					</Button>
				</Link>
			</div>
		</div>
	);
};

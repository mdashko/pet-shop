import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { images } from "../../images";
import { Text } from "../../UI/Text/Text";
import { Button } from "../../UI/Button/Button";
import { Link } from "react-router-dom";

export const Header = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	// React.useEffect(() => {
	// 	if (!user) {

	// 	}
	// }, [user, navigate, dispatch]);
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
			{user ? (
				<div className="header__user-button">
					<Link to="/Profile">
						<Button color="barkBlueColor" margin="auto">
							<Text
								color="whiteColor"
								family="mainFonts"
								weight="600"
								margin="0"
							>
								{user.fullName}
							</Text>
						</Button>
					</Link>
				</div>
			) : (
				<div className="header__buttons">
					<Link to="/LogIn">
						<Button color="orangeColor" margin="0 0.5em">
							<Text
								color="whiteColor"
								family="mainFonts"
								weight="600"
								margin="0"
							>
								Log in
							</Text>
						</Button>
					</Link>
					<Link to="/SignUp">
						<Button color="orangeColor" margin="0 0.5em">
							<Text
								color="whiteColor"
								family="mainFonts"
								weight="600"
								margin="0"
							>
								Sign up
							</Text>
						</Button>
					</Link>
				</div>
			)}
		</div>
	);
};

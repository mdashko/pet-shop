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
				<a href="/Shop">
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
				<Link to="/Favourites">
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
				</Link>
			</div>
			{user ? (
				<div className="header__user-buttons">
					<Link to="/Profile">
						<Button color="whiteColor" margin="0">
							<div className="header__user-buttons__content">
								<img src={images.userIcon} alt= {user.fullName} />
								<Text
									color="mainColor"
									family="mainFonts"
									size="2em"
									weight="600"
									margin="0"
								>
									{user.fullName}
								</Text>
							</div>
						</Button>
					</Link>
					<Link to="/Cart">
						<Button color="barkBlueColor" margin="auto">
							<Text
								color="whiteColor"
								family="mainFonts"
								size="1.5em"
								weight="600"
								margin="0"
							>
								Cart()
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
								size="1.5em"
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
								size="1.5em"
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

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Text } from "../../UI/Text/Text";
import { Button } from "../../UI/Button/Button";
import { images } from "../../images";
import { logout } from "../../store/auth/authSlice";

export const Profile = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user, navigate, dispatch]);

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		navigate("/");
	};
	return (
		<>
			<Header />
			<div className="profile">
				<section className="profile__user-info">
					<img
						className="profile__user-info_img"
						src={images.userPic}
						alt="user"
					/>
					<Text
						color="mainColor"
						family="mainFonts"
						weight="600"
						margin="0.5em 0 "
						size="2.5em"
					>
						{user && user.fullName}
					</Text>
					<Text
						color="grayColor"
						family="mainFonts"
						weight="300"
						size="0.9em"
						margin="0 0.2em"
					>
						{user && user.email}
					</Text>
					<Button
						color="barkBlueColor"
						margin="1em 0.5em"
						onClick={handleLogout}
					>
						<Text
							color="whiteColor"
							family="mainFonts"
							size="1.5em"
							weight="600"
							margin="0"
						>
							Log out
						</Text>
					</Button>
				</section>
			</div>
		</>
	);
};

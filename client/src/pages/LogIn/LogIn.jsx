import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Text } from "../../UI/Text/Text";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";

export const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	// const [user, setUser] = useState({});

	// function getToken() {
	// 	const tokenString = localStorage.getItem("token");
	// 	const userToken = JSON.parse(tokenString);
	// 	return userToken?.token;
	// }

	const navigate = useNavigate();

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5001/api/auth";
			const { data: res } = await axios.post(url, {
				email: email,
				password: password,
			});
			localStorage.setItem("token", res.data);
			// setUser(getToken());
			navigate("/");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<>
			<Header />
			<div className="logIn">
				<Text
					color="mainColor"
					family="mainFonts"
					weight="600"
					margin="1em"
					size="2.5em"
				>
					Log in
				</Text>
				<div className="logIn__input-container">
					<Text color="mainColor" family="mainFonts" weight="300" size="1em">
						Email:
					</Text>
					<Input
						placeholder="Enter email..."
						required="true"
						onChange={handleEmail}
					/>
				</div>
				<div className="logIn__input-container">
					<Text color="mainColor" family="mainFonts" weight="300" size="1em">
						Password:
					</Text>
					<Input
						placeholder="Enter password..."
						required="true"
						type="password"
						onChange={handlePassword}
					/>
				</div>
				{error && (
					<Text
						color="errorColor"
						family="mainFonts"
						weight="300"
						size="0.9em"
						margin="0 0.2em"
					>
						{error}
					</Text>
				)}
				<Button color="orangeColor" margin="1em 0.5em" onClick={handleSubmit}>
					<Text color="whiteColor" family="mainFonts" weight="600" margin="0">
						Submit
					</Text>
				</Button>
				<div className="logIn__sign-up-link">
					<Text
						color="grayColor"
						family="mainFonts"
						weight="300"
						size="0.9em"
						margin="0 0.2em"
					>
						Don't have account?
					</Text>
					<Link to="/SignUp">
						<Text
							color="grayColor"
							family="mainFonts"
							weight="300"
							size="0.9em"
							margin="0 0.2em"
							underlined="true"
						>
							Sign Up
						</Text>
					</Link>
				</div>
			</div>
		</>
	);
};

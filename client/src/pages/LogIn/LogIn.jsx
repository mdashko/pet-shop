import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Text } from "../../UI/Text/Text";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";

export const LogIn = ({ history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	// useEffect(() => {
	// 	const userInfo = localStorage.getItem("userInfo", JSON.stringify(data));

	// 	if (userInfo) {

	// 	}
	// }, [history]);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};

			const { data } = await axios.post(
				"/api/users/login",
				{ email, password },
				config
			);
			console.log(data);
			localStorage.setItem("userInfo", JSON.stringify(data));
			navigate("/");
		} catch (error) {
			setError(error.response.data.message);
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
						value={email}
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
						value={password}
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
						Don't have an account?
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

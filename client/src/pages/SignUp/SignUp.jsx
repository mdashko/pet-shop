import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Text } from "../../UI/Text/Text";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";

export const SignUp = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const handleFullName = (e) => setFullName(e.target.value);
	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);
	const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setMessage("Passwords do not match");
		} else {
			setMessage("");
			try {
				const config = {
					headers: {
						"Content-type": "application/json",
					},
				};

				const { data } = await axios.post(
					"/api/users",
					{ fullName, email, password },
					config
				);
				localStorage.setItem("userInfo", JSON.stringify(data));
			} catch (error) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<>
			<Header />
			<div className="signUp">
				<Text
					color="mainColor"
					family="mainFonts"
					weight="600"
					margin="1em"
					size="2.5em"
				>
					Sign up
				</Text>
				<div className="signUp__input-container">
					<Text color="mainColor" family="mainFonts" weight="300" size="1em">
						Full Name:
					</Text>
					<Input
						placeholder="Enter name..."
						required="true"
						onChange={handleFullName}
					/>
				</div>
				<div className="signUp__input-container">
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
				<div className="signUp__input-container">
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
				<div className="signUp__input-container">
					<Text color="mainColor" family="mainFonts" weight="300" size="1em">
						Confirm Password:
					</Text>
					<Input
						placeholder="Confirm password..."
						required="true"
						type="password"
						value={confirmPassword}
						onChange={handleConfirmPassword}
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
				{message && (
					<Text
						color="errorColor"
						family="mainFonts"
						weight="300"
						size="0.9em"
						margin="0 0.2em"
					>
						{message}
					</Text>
				)}
				<Button color="orangeColor" margin="1em 0.5em" onClick={handleSubmit}>
					<Text color="whiteColor" family="mainFonts" weight="600" margin="0">
						Submit
					</Text>
				</Button>
				<Text
					color="grayColor"
					family="mainFonts"
					weight="300"
					size="0.9em"
					margin="0 0.2em"
				>
					Already have an account?
				</Text>
				<Link to="/LogIn">
					<Text
						color="grayColor"
						family="mainFonts"
						weight="300"
						size="0.9em"
						margin="0 0.2em"
						underlined="true"
					>
						Log in
					</Text>
				</Link>
			</div>
		</>
	);
};

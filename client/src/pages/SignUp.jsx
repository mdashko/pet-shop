import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Text } from "../UI/Text";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

export const SignUp = () => {
	const [data, setData] = useState({
		fullName: "",
		email: "",
		password: "",
	});
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleFullName = (e) => setFullName(e.target.value);
	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);

	useEffect(() => {
		setData({ ...data, fullName: fullName, email: email, password: password });
	}, [fullName, email, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5001/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/LogIn");
			console.log(res.message);
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
			</div>
		</>
	);
};

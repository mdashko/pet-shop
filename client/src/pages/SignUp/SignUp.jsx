import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Text } from "../../UI/Text/Text";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";

export const SignUp = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
		password2: "",
	});

	const { fullName, email, password, password2 } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate("/");
		}

		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error("Passwords do not match");
		} else {
			const userData = {
				fullName,
				email,
				password,
			};

			dispatch(register(userData));
		}
	};

	// if (isLoading) {
	// 	return <Spinner />;
	// }

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
						name="fullName"
						value={fullName}
						required={true}
						onChange={onChange}
					/>
				</div>
				<div className="signUp__input-container">
					<Text color="mainColor" family="mainFonts" weight="300" size="1em">
						Email:
					</Text>
					<Input
						placeholder="Enter email..."
						name="email"
						required={true}
						value={email}
						onChange={onChange}
					/>
				</div>
				<div className="signUp__input-container">
					<Text color="mainColor" family="mainFonts" weight="300" size="1em">
						Password:
					</Text>
					<Input
						placeholder="Enter password..."
						name="password"
						required={true}
						type="password"
						value={password}
						onChange={onChange}
					/>
				</div>
				<div className="signUp__input-container">
					<Text color="mainColor" family="mainFonts" weight="300" size="1em">
						Confirm Password:
					</Text>
					<Input
						placeholder="Confirm password..."
						name="password2"
						required={true}
						type="password"
						value={password2}
						onChange={onChange}
					/>
				</div>
				<Button color="orangeColor" margin="1em 0.5em" onClick={onSubmit}>
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
						underlined={true}
					>
						Log in
					</Text>
				</Link>
			</div>
		</>
	);
};

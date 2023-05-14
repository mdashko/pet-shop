import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../store/auth/authSlice";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Text } from "../../UI/Text/Text";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";

export const LogIn = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

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

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	// if (isLoading) {
	// 	return <Spinner />;
	// }

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
						name="email"
						required={true}
						value={email}
						onChange={onChange}
					/>
				</div>
				<div className="logIn__input-container">
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
				<Button color="orangeColor" margin="1em 0.5em" onClick={onSubmit}>
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
							underlined={true}
						>
							Sign Up
						</Text>
					</Link>
				</div>
			</div>
		</>
	);
};

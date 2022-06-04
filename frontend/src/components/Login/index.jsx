import { useState } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	//login interface modification
	const loginAvatarStyle = { backgroundColor: '#3bb19b' }

	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:6005/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			localStorage.setItem("username", res.username);
			localStorage.setItem("usertype", res.usertype);
			
			//handle dashboard navigation according to the user role
			if (res.usertype === 'student'){
				window.location = "/studentDashboard";
			} else if (res.usertype === 'staff')  {
				window.location = "/staffDashboard";
			} 
			else if (res.usertype === 'panelmember')  {
				window.location = "/panelmember";
			}
			else if (res.usertype === 'supervisor')  {
				window.location = "/supervisorDashboard";
			}
			else {
				window.location = "/";
			}

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
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							SIGN IN
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<Avatar
						style={loginAvatarStyle}
						sx={{ width: 125, height: 125 }}>
					</Avatar>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							SIGN UP
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import styles from "./styles.module.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "../../styles/student/studentResearchTopic.css";

const Signup = () => {
	//signup interface modification
	const signupAvatarStyle = { backgroundColor: '#3bb19b' }

	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		mobile:"",
		password: "",
		userType: "student",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	// handle change for radio button
	const handleChangeForRadio = (event) => {
		setData({ ...data, userType: event.target.value });
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:6005/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
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

	const handleHomeSignup = () => {
		localStorage.removeItem("token");
		window.location = "/signup";
	};
	
	const handleHomeSignin = () => {
		localStorage.removeItem("token");
		window.location = "/login";
	};

	const handleHome = () => {
		localStorage.removeItem("token");
		window.location = "/home";
	};
	

	return (
		<div className="studentResearchTopic">
		<nav className="studentResearchTopic-nav-bar">
                <h1></h1>
				<button
                    className={styles.signupHome_btn}
                    onClick={handleHome}
                    variant="text">
                    HOME
                </button>
                <button
                    className={styles.homeSigninButton_btn}
                    onClick={handleHomeSignin}
                    variant="text">
                    SIGN IN
                </button>
                <button
                    className={styles.homeSignupButton_btn}
                    onClick={handleHomeSignup}
                    variant="text">
                   SIGN UP
                </button>
            </nav>
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<Avatar
						style={signupAvatarStyle}
						sx={{ width: 125, height: 125 }}>
					</Avatar>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							SIGN IN
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
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
							type="tel"
							placeholder="Contact Number"
							name="mobile"
							onChange={handleChange}
							value={data.mobile}
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
						<FormControl>
							<FormLabel id="demo-radio-buttons-group-label">User Type</FormLabel>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue="student"
								name="radio-buttons-group"
								value={data.userType}
								onChange={handleChangeForRadio}
								style={{ display: 'initial' }}
							>
								<FormControlLabel value="student" control={<Radio />} label="Student" />
								<FormControlLabel value="supervisor" control={<Radio />} label="Supervisor" />
								<FormControlLabel value="coSupervisor" control={<Radio />} label="Co-Supervisor" />
								<FormControlLabel value="panelmember" control={<Radio />} label="Panel Member" />
							</RadioGroup>
						</FormControl>

						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							SIGN UP
						</button>
					</form>
				</div>
			</div>
		</div>
		</div>
	);
};

export default Signup;
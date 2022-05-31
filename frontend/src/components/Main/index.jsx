import styles from "./styles.module.css";
import Button from '@mui/material/Button';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Welcome {localStorage.getItem("username")}</h1>
				<Button 
					className={styles.white_btn} 
					onClick={handleLogout}
					variant="text">
					Logout
				</Button>
			</nav>
			<h1>User Name</h1>
			<h2>{localStorage.getItem("username")}</h2>
			<h1>User Type</h1>
			<h2>{localStorage.getItem("usertype")}</h2>
		</div>
	);
};

export default Main;

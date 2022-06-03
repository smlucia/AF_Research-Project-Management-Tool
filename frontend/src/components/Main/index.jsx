import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<h1>User Name</h1>
			<h2>{localStorage.getItem("username")}</h2>
			<h1>User Type</h1>
			<h2>{localStorage.getItem("usertype")}</h2>
		</div>
	);
};

export default Main;

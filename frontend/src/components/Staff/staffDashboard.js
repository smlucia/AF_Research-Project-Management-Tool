import React from 'react';
import styles from "../Main/styles.module.css";
//import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const staffDashboard = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location="/";
    };

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Welcome {localStorage.getItem("username")}</h1>
                <button
                    variant="text"
                    className={styles.white_btn}
                    onClick={handleLogout}>
                    LOGOUT
                </button>
            </nav>
            <h1>User Name</h1>
            <h2>{localStorage.getItem("username")}</h2>
            <h1>User Type</h1>
            <h2>{localStorage.getItem("usertype")}</h2>
        </div>
    );
    
    }
export default staffDashboard;
import React from 'react';
import NavBar from './NavBar';
import '../styles/HomePage.css'
import "../styles/student/studentResearchTopic.css";
import styles from "./Main/styles.module.css";

const handleHome = () => {
    localStorage.removeItem("token");
    window.location = "/home";
};

const handleHomeSignin = () => {
    localStorage.removeItem("token");
    window.location = "/login";
};

const handleHomeSignup = () => {
    localStorage.removeItem("token");
    window.location = "/signup";
};

const handleGetStartBtn = () => {
    localStorage.removeItem("token");
    window.location = "/login";
};


const HomePage = () => {
    return (
        <>
            <div className='backImg'>

                {/* <NavBar /> */}
                <nav className="studentResearchTopic-nav-bar">
                <h1></h1>
                <button
                    className={styles.homeSignin_btn}
                    onClick={handleHomeSignin}
                    variant="text">
                    SIGN IN
                </button>
                <button
                    className={styles.homeSignup_btn}
                    onClick={handleHomeSignup}
                    variant="text">
                   SIGN UP
                </button>
            </nav>

            </div>

            <div className='container'>
                <button onClick={handleGetStartBtn}>LET'S GET STARTED</button>
            </div>
        </>
    );
}

export default HomePage;
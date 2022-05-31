<<<<<<< HEAD
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
=======
import React from 'react';

import  './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import HomePage from './components/HomePage.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//admin route imports
import AdminHome from './components/admin/AdminHome';
import NavBar from './components/admin/AdminNavBar';
import Marking from './components/admin/MarkingSchemePage'
import Template from './components/admin/TemplatePage'



import  './App.css'
//import HomePage from './components/HomePage.js'
//import LoginAndSignup from './container/loginAndSignup';


const App = () => {
    return(
        <>

       
        <Router>
            {/* <HomePage /> */}

            <Routes>
            {/* <Route path="/" element={ <Home/> } />
            <Route path="about" element={ <About/> } /> */}

            {/* admin routes */}
            <Route path="adhome" element={ <AdminHome/> } />
            <Route path="nav" element={ <NavBar/> } />
            <Route path="mark" element={ <Marking/> } />
            <Route path="temp" element={ <Template/> } />
            
            </Routes>

        </Router>
        

        {/* <div className='app'></div> */}
        {/* <LoginAndSignup /> */}

        </>
    )
>>>>>>> c387a0ec7cbb02a516e570efae8ccd1844105892
}

export default App;

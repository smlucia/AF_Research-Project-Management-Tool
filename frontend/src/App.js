
import {  Routes, Route ,Navigate} from "react-router-dom";
import React from 'react';
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
//import HomePage from './components/HomePage.js';
import  './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//admin route imports
import AdminHome from './components/admin/AdminHome';
import NavBar from './components/admin/AdminNavBar';
import Marking from './components/admin/MarkingSchemePage'
import Template from './components/admin/TemplatePage';
import StudentList from './components/users/StudentList';
import EditStudent from './components/users/StudentEdit';
import StaffList from './components/users/StaffList';
import EditStaff from './components/users/StaffEdit';
import ViewUser from './components/users/ViewUser';
import AddSub from './components/admin/AddSubmission';
import SubList from './components/admin/SubmissionList';
import EditSub from './components/admin/EditSubmission';


const App = () => {
    const user = localStorage.getItem("token");
    return(
        <>

       
       
            {/* <HomePage /> */}

            <Routes>
            {/* <Route path="/" element={ <Home/> } />
            <Route path="about" element={ <About/> } /> */}

            {user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />

            {/* admin routes */}
            <Route path="adhome" element={ <AdminHome/> } />
            <Route path="nav" element={ <NavBar/> } />
            <Route path="mark" element={ <Marking/> } />
            <Route path="temp" element={ <Template/> } />
            <Route path="stulist" element={ <StudentList/> } />
            <Route path="stuedit/:id" element={ <EditStudent/> } />
            <Route path="stafflist" element={ <StaffList/> } />
            <Route path="staffedit/:id" element={ <EditStaff/> } />
            <Route path="userview/:id" element={ <ViewUser/> } />
            <Route path="addsub" element={ <AddSub/> } />
            <Route path="sublist" element={ <SubList/> } />
            <Route path="subedit/:id" element={ <EditSub/> } />
            </Routes>

        
        

        {/* <div className='app'></div> */}
        {/* <LoginAndSignup /> */}

        </>
    )

}

export default App;

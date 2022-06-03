
import React from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//login and signup route imports
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";

import HomePage from './components/HomePage.js';


//student route imports
import StudentDashboard from "./components/Student/studentDashboard";
import StaffDashboard from "./components/Staff/staffDashboard";
import StudentGroup from "./components/Student/studentGroup";
import StudentResearchTopics from "./components/Student/studentResearchTopics";
import StudentRequestSupervisor from "./components/Student/studentRequestSupervisor";
import StudentDownloadTemplate from "./components/Student/studentDownloadTemplate";
import StudentSubmitDocument from "./components/Student/studentSubmitDocument";

//admin route imports
import AdminHome from './components/admin/AdminHome';
import NavBar from './components/admin/AdminNavBar';

import Marking from './components/admin/MarkingSchemePage'
import Template from './components/admin/TemplatePage'
import Supervisor from './components/supervisor';



import Marking from './components/admin/MarkingSchemePage';
import Template from './components/admin/TemplatePage';
import PanelMember from './components/panelMember/panelMember';
import ApproveResearch from './components/panelMember/approveResearch';
import Grade from './components/panelMember/grade';


// function App() {
//     const user = localStorage.getItem("token");

//     return (
//         <Routes>
//             {user && <Route path="/" exact element={<Main />} />}
//             <Route path="/signup" exact element={<Signup />} />
//             <Route path="/login" exact element={<Login />} />
//             <Route path="/staffDashboard" exact element={<StaffDashboard />} />

//             {/* student handling */}
//             <Route path="/studentDashboard" exact element={<StudentDashboard />} />
//             <Route path="/studentSubmitDocument" exact element={<StudentSubmitDocument />} />
//             <Route path="/studentResearchTopics" exact element={<StudentResearchTopics />} />
//             <Route path="/studentRequestSupervisor" exact element={<StudentRequestSupervisor />} />
//             <Route path="/studentDownloadTemplate" exact element={<StudentDownloadTemplate />} />
//             <Route path="/studentGroup" exact element={<StudentGroup />} />

//             <Route path="/" element={<Navigate replace to="/login" />} />
//         </Routes>
//     );


//import LoginAndSignup from './container/loginAndSignup';


const App = () => {
    const user = localStorage.getItem("token");

    return (
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
            <Route path="evaluate" element={ <Supervisor/> } />
            
            </Routes>

                    {user && <Route path="/" exact element={<Main />} />}
                    <Route path="/signup" exact element={<Signup />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/staffDashboard" exact element={<StaffDashboard />} />

                    {/* student handling */}
                    <Route path="/studentDashboard" exact element={<StudentDashboard />} />
                    <Route path="/studentSubmitDocument" exact element={<StudentSubmitDocument />} />
                    <Route path="/studentResearchTopics" exact element={<StudentResearchTopics />} />
                    <Route path="/studentRequestSupervisor" exact element={<StudentRequestSupervisor />} />
                    <Route path="/studentDownloadTemplate" exact element={<StudentDownloadTemplate />} />
                    <Route path="/studentGroup" exact element={<StudentGroup />} />

                    <Route path="/" element={<Navigate replace to="/login" />} />

                    {/* admin routes */}
                    <Route path="adhome" element={<AdminHome />} />
                    <Route path="nav" element={<NavBar />} />
                    <Route path="mark" element={<Marking />} />
                    <Route path="temp" element={<Template />} />
                    <Route path="panelmember" element={<PanelMember />} />
                    <Route path="panelmember/approve-research" element={<ApproveResearch />} />
                    <Route path="panelmember/grade" element={<Grade />} />
                </Routes>

            </Router>



            {/* <div className='app'></div> */}
            {/* <LoginAndSignup /> */}

        </>
    )
}

export default App;

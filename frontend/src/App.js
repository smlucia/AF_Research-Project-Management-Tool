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
import StudentHandleResearchTopic from "./components/Student/studentHandleResearchTopic";
import StudentDocSubmissionPage from './components/Student/studentDocSubmissionPage';
import StudentResearchTopicEdit from './components/Student/studentResearchTopicEdit';
import StudentResearchNavBar from './components/Student/studentResearchNavBar';
import StudentHomePage from './components/Student/studentHomePage';

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

//panel member route imports
import PanelMember from './components/panelMember/panelMember';
import ApproveResearch from './components/panelMember/approveResearch';
import Grade from './components/panelMember/grade';


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

                    {user && <Route path="/" exact element={<Main />} />}
                    <Route path="/signup" exact element={<Signup />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/staffDashboard" exact element={<StaffDashboard />} />
                    <Route path="/home" exact element={<HomePage />} />

                    {/* student routes */}
                    <Route path="/studentDashboard" exact element={<StudentDashboard />} />
                    <Route path="/studentSubmitDocument" exact element={<StudentSubmitDocument />} />
                    <Route path="/studentResearchTopics" exact element={<StudentResearchTopics />} />
                    <Route path="/studentRequestSupervisor" exact element={<StudentRequestSupervisor />} />
                    <Route path="/studentDownloadTemplate" exact element={<StudentDownloadTemplate />} />
                    <Route path="/studentHandleResearchTopic" exact element={<StudentHandleResearchTopic />} />
                    <Route path="/studentDocSubmissionPage" exact element={<StudentDocSubmissionPage />} />
                    <Route path="/studentResearchTopicEdit/:id" exact element={<StudentResearchTopicEdit />} />
                    <Route path="/studentResearchNavBar" exact element={<StudentResearchNavBar />} />
                    <Route path="/studentHomePage" exact element={<StudentHomePage />} />
                    <Route path="/studentGroup" exact element={<StudentGroup />} />

                    <Route path="/" element={<Navigate replace to="/login" />} />

                    {/* admin routes */}
                    <Route path="adhome" element={<AdminHome />} />
                    <Route path="nav" element={<NavBar />} />
                    <Route path="mark" element={<Marking />} />
                    <Route path="temp" element={<Template />} />
                    <Route path="stulist" element={<StudentList />} />
                    <Route path="stuedit/:id" element={<EditStudent />} />
                    <Route path="stafflist" element={<StaffList />} />
                    <Route path="staffedit/:id" element={<EditStaff />} />
                    <Route path="userview/:id" element={<ViewUser />} />
                    <Route path="addsub" element={<AddSub />} />
                    <Route path="sublist" element={<SubList />} />
                    <Route path="subedit/:id" element={<EditSub />} />

                    {/* panel member routes */}
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

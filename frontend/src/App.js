import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import StudentDashboard from "./components/Student/studentDashboard";
import StaffDashboard from "./components/Staff/staffDashboard";
import StudentGroup from "./components/Student/studentGroup";
import StudentResearchTopics from "./components/Student/studentResearchTopics";
import StudentRequestSupervisor from "./components/Student/studentRequestSupervisor";
import StudentDownloadTemplate from "./components/Student/studentDownloadTemplate";
import StudentSubmitDocument from "./components/Student/studentSubmitDocument";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
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
		</Routes>
	);
}

export default App;

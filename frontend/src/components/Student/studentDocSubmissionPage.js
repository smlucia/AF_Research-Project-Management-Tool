import React, { useState, useEffect } from 'react';
import { getstudentDocSubmission } from '../../data/student/studentApi';
import "../../styles/student/studentReqSupervisor.css";
import StudentDocSubmissionUpload from './studentDocSubmissionUpload';
import Navbar from '../admin/PageNavBar';
import styles from "../Main/styles.module.css";


const StudentDocSubmissionPage = () => {

    const [multiplefiles, setmultiplefiles] = useState([]);

    const getMultipleFilesList = async () => {
        try {
            const filelist = await getstudentDocSubmission();
            setmultiplefiles(filelist);
        } catch (error) {
            console.log(error);
        }
    }

    const restInputs = () => {
        setmultiplefiles([]);
    }

    useEffect(() => {
        getMultipleFilesList();
    }, []);

    const handleStudentDashboard = () => {
        localStorage.removeItem("token");
        window.location = "/studentHomePage";
    };

    const handleHome = () => {
        localStorage.removeItem("token");
        window.location = "/home";
    };
    
    return (
        <>
        <div className="requestSupervisor">
            {/* <Navbar /> */}
            <nav className="studentResearchTopic-nav-bar">
                <h1></h1>
                <button
                    className={styles.home_btn}
                    onClick={handleHome}
                    variant="text">
                    HOME
                </button>
                <button
                    className={styles.white_btn}
                    onClick={handleStudentDashboard}
                    variant="text">
                    DASHBOARD
                </button>
            </nav>
                <div className='main'
                    style={{
                        marginLeft: "130px", /* Same as the width of the sidebar */
                        padding: "20px 10px",

                    }}>
                    <StudentDocSubmissionUpload getMultiple={() => getMultipleFilesList()} reset={() => restInputs()} />

                    <div className='container-fluid mt-5'>
                        <div className='row'>
                            <div className='col-10'>
                                <h4 style={{textAlign: 'center', fontSize: 50}} className='text-success font-weight-bold'>YOUR SUBMITTED DOCUMENTS</h4>
                                {multiplefiles.map((element, index) =>
                                    <div key={element._id}>
                                        <h5 className='text-danger font-weight-bold'>{element.topic}</h5>

                                        <div className='row'>
                                            {element.files.map((file, index) =>
                                                <div className='col-3'>
                                                    <div style={{borderColor: 'gray', width: 206}} className='card mb-3 border-2'>

                                                        {/* <div class="embed-responsive ">
                                                <iframe class="embed-responsive-item" src={`http://localhost:5005/${file.filePath }`} width="200"  height="200"></iframe>
                                            </div> */}

                                                        <iframe class="embed-responsive-item" src={`http://localhost:6005/${file.filePath}`} width="200" height="200"></iframe>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentDocSubmissionPage;
import React from 'react';
import styles from "../Singup/styles.module.css";
import "../../styles/student/studentResearchTopic.css";

const handleHomeSignup = () => {
    localStorage.removeItem("token");
    window.location = "/signup";
};

const handleHomeSignin = () => {
    localStorage.removeItem("token");
    window.location = "/login";
};

const handleHome = () => {
    localStorage.removeItem("token");
    window.location = "/home";
};

const StudentHomePage = () => {
    return (
        <>
            <div className="studentResearchTopic">
		<nav className="studentResearchTopic-nav-bar">
                <h1></h1>
				<button
                    className={styles.signupHome_btn}
                    onClick={handleHome}
                    variant="text">
                    HOME
                </button>
                <button
                    className={styles.homeSigninButton_btn}
                    onClick={handleHomeSignin}
                    variant="text">
                    SIGN IN
                </button>
                <button
                    className={styles.homeSignupButton_btn}
                    onClick={handleHomeSignup}
                    variant="text">
                   SIGN UP
                </button>
            </nav>
            <div style={{margin: "100px 150px"}}>
                <div class="row gy-3 row-cols-3">
                    <div class="col">
                        <div className="card" style={{width: "18rem", height: "23rem", alignItems: "center"}}>
                        <img src="https://previews.123rf.com/images/blueringmedia/blueringmedia1510/blueringmedia151001518/47018563-ni%C3%B1os-leyendo-y-trabajando-en-la-ilustraci%C3%B3n-de-grupo.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">STUDENT GROUPS</h5>
                            <p className="card-text"> Create Student Groups</p>
                            <a href="/studentGroup" class="btn btn-primary" style={{marginLeft:30, backgroundColor:'black',color:'white',border:0}}>GET STARTED</a>
                        </div>
                    </div>
                    </div>

                    <div class="col">
                        <div className="card" style={{width: "18rem" , height: "23rem", alignItems: "center"}}>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/831/797/small_2x/little-school-children-studying-geography-vector.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">RESEARCH TOPICS</h5>
                            <p className="card-text">Handle Research Topic Submissions</p>
                            <a href="/studentResearchTopics" class="btn btn-primary" style={{marginLeft:60, backgroundColor:'black',color:'white',border:0}}>GET STARTED</a>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                        <div className="card" style={{width: "18rem", height: "23rem", alignItems: "center"}}>
                        <img src="https://st2.depositphotos.com/1763191/12379/v/950/depositphotos_123793510-stock-illustration-lots-of-children-reading-and.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">SUBMIT DOCUMENTS</h5>
                            <p className="card-text">Handle Document Submissions</p>
                            <a href="/studentDocSubmissionPage" class="btn btn-primary" style={{marginLeft:60, backgroundColor:'black',color:'white',border:0}}>GET STARTED</a>
                        </div>
                        </div>
                    </div>
                    <div class="col" style={{marginLeft:160, marginTop:30}}>
                        <div className="card" style={{width: "18rem", height: "23rem", alignItems: "center"}}>
                        <img src="https://st.depositphotos.com/1037238/2532/v/950/depositphotos_25326539-stock-illustration-teacher-and-students-in-classroom.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{marginLeft:15}}>REQUEST SUPERVISORS</h5>
                            <p className="card-text" style={{marginLeft:25}}>Handle Supervisor and <br/> Co-Supervisor Requests</p>
                            <a href="/studentRequestSupervisor" class="btn btn-primary" style={{marginLeft:60, backgroundColor:'black',color:'white',border:0}}>GET STARTED</a>
                            
                        </div>
                        </div>
                    </div>
                    <div class="col" style={{marginTop:30}}>
                        <div className="card" style={{width: "18rem", height: "23rem", alignItems: "center"}}>
                        <img src="https://previews.123rf.com/images/blueringmedia/blueringmedia1510/blueringmedia151001210/46911405-children-working-in-group-in-the-classroom-illustration.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">DOWNLOAD TEMPLATES</h5>
                            <p className="card-text">Handle Template Downloading</p>
                            <a href="/studentDownloadTemplate" class="btn btn-primary" style={{marginLeft:60, backgroundColor:'black',color:'white',border:0}}>GET STARTED</a>
        
                        </div>
                        </div>
                    </div>
                </div>
                </div>  
</div>
        </>
      );
}

export default StudentHomePage;
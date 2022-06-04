import React from 'react';
import AdminNavBar from './AdminNavBar';



const AdminHome = () => {
    return (
        <>
         <div style={{
                backgroundImage: 
            "url('https://t3.ftcdn.net/jpg/05/00/34/58/360_F_500345899_4OqmtspFst6SRnNQvLj7h7TfKOrBwTer.jpg')",
                height: "auto",
                position: "absolute",
                left: "0",
                width: "100%",
                overflow: "hidden"
                
    }}>
            

            <AdminNavBar />

            <div style={{margin: "100px 150px"}}>
                <div class="row gy-3 row-cols-3">
                    <div class="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src="https://img.freepik.com/free-vector/color-background-with-boy-student-with-book-learning-with-elements-school_18591-9871.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Student</h5>
                            <p className="card-text">Manage Students    </p>
                            <a href="/stulist" class="btn btn-primary">View Students</a>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src="https://img.freepik.com/free-vector/color-background-with-boy-student-with-book-learning-with-elements-school_18591-9871.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Staff</h5>
                            <p className="card-text">Manage Supervisors , Co-supervisors and Panelmembers</p>
                            <a href="/stafflist" class="btn btn-primary">View Staff</a>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src="https://img.freepik.com/free-vector/color-background-with-boy-student-with-book-learning-with-elements-school_18591-9871.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Panels</h5>
                            <p className="card-text">Add Panel members to the panels<br/>Allocate panels to the student groups</p>
                            <a href="/allpanel" class="btn btn-primary">Create Panel</a>
                            &nbsp;&nbsp;
                            <a href="/allocatepanel" class="btn btn-primary">Allocate Panel</a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src="https://img.freepik.com/free-vector/color-background-with-boy-student-with-book-learning-with-elements-school_18591-9871.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Marking Schemes</h5>
                            <p className="card-text">Create Marking schemes</p>
                            <a href="/mark" class="btn btn-primary">Create Markingschemes</a>
                            
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src="https://img.freepik.com/free-vector/color-background-with-boy-student-with-book-learning-with-elements-school_18591-9871.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Templates</h5>
                            <p className="card-text">Upload Templates</p>
                            <a href="/temp" class="btn btn-primary">Upload Templates</a>
        
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src="https://img.freepik.com/free-vector/color-background-with-boy-student-with-book-learning-with-elements-school_18591-9871.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Submissions</h5>
                            <p className="card-text">Manage Submiision types</p>
                            <a href="/sublist" class="btn btn-primary">View Submissions</a>
                            
                        </div>
                        </div>
                    </div>
                </div>
                </div>  
                </div>  

        </>
      );
}

export default AdminHome;
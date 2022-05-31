import React , {useState} from 'react';
import '../../styles/admin/AdminNavBar.css';


const AdminNavBar = () => {


    return (
        <>
            <div>
                <nav>
                    <div className="logo">Admin Dashboard</div>
                    <ul className="nav-links">
                        <li><a href="/mark">Marking Schemes</a></li>
                        <li><a>Templates</a></li>
                        <li><a>Submissions</a></li>
                        {/* <li><a>SignUp</a></li> */}
                    </ul>
                
                </nav>
            
            </div>

            <div className='sidenav'>
             
                <a href="#">Home</a>
                <a href="#">Student</a>
                <a href="#">Groups</a>
                <a href="#">Staff</a>
                <a href="#">LogOut</a>

            </div>
        </>
      );
}

export default AdminNavBar;

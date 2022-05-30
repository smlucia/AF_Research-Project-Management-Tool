import React , {useState} from 'react';
import '../../styles/admin/PageNavBar.css';


const PageNavBar = () => {


    return (
        <>
            <div>
                <nav>
                    <div className="logo">Admin Dashboard</div>
                    <ul className="nav-links">
                        <li><a href="/mark">Marking Schemes</a></li>
                        <li><a href="/temp">Templates</a></li>
                        <li><a href="/">Submissions</a></li>
                        {/* <li><a>SignUp</a></li> */}
                    </ul>
                
                </nav>
            
            </div>

            <div className='sidenav'>
             
                <a href="/adhome">Home</a>
                <a href="#">Student</a>
                <a href="#">Groups</a>
                <a href="#">Staff</a>
                <a href="#">LogOut</a>

            </div>
        </>
      );
}

export default PageNavBar;
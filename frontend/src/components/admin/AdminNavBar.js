import React , {useState} from 'react';
import '../../styles/admin/AdminNavBar.css';




const AdminNavBar = () => {

    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/homepage";
	};


    return (
        <>
            <div>
                <nav>
                    <div className="logo">Welcome {localStorage.getItem("username")}</div>
                    {/* <h1>Welcome </h1> */}
                    <button
                        style={{color: "white",fontSize: "20px",
                        padding: "3px 20px",backgroundColor: "black",borderRadius: "30px"}} 
                        onClick={handleLogout}
                        >
                        Logout
                    </button>
                 
                </nav>
            
            </div>

           
        </>
      );
}

export default AdminNavBar;

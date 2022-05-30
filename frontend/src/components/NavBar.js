import React , {useState} from 'react';
import '../styles/NavBar.css';

const NavBar = () => {

    const [open, setOpen] = useState(false);
    return (
        <div  style={{ }}>
            <nav>
                <div className="logo">OurTool</div>
                <ul className="nav-links" style={{
                    transform: open ? "translateX(0px)" : ""
                }}>
                    <li><a>Home</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>SignIn</a></li>
                    <li><a>SignUp</a></li>
                </ul>
                <i onClick={() => setOpen(!open)} className="fa-solid fa-bars menu"></i>
            </nav>
          
        </div>
      );
}

export default NavBar;
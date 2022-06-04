import React , {useState} from 'react';
import '../styles/NavBar.css';

const NavBar = () => {

    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav>
                <div className="logo">OurTool</div>
                <ul className="nav-links" style={{
                    transform: open ? "translateX(0px)" : ""
                }}>
                    <li><a href='/home'>HOME</a></li>
                    <li><a href='/login'>SIGN IN</a></li>
                    <li><a href='/signup'>SIGN UP</a></li>
                </ul>
                <i onClick={() => setOpen(!open)} className="fa-solid fa-bars menu"></i>
            </nav>
          
        </div>
      );
}

export default NavBar;
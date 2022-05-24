import React from 'react';
import NavBar from './NavBar';
import '../styles/HomePage.css'


const HomePage = () => {
    return (
        <>
            <div  className='backImg'>

            <NavBar />

            <p className='para'>Research Project Management Tool</p>

            </div>

            <div className='para1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.</p>
                
            </div>

            <div className='container'>     
                <button>Get Started</button>      
            </div>

            <div className='para2'>
                <h4>Contact us form</h4>
            </div>
        </>
      );
}

export default HomePage;
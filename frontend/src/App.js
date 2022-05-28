import React from 'react';
import  './App.css'
import HomePage from './components/HomePage.js'
import LoginAndSignup from './container/loginAndSignup';

const App = () => {
    return(
        <>
        {/* <div className='app'></div> */}
        <LoginAndSignup />
        </>
    )
}

export default App;
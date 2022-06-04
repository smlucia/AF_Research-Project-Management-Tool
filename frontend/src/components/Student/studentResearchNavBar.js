import React, { useState } from 'react';
import '../../styles/student/researchPageNavBar.css';


const PageNavBar = () => {

    return (
        <>
            <div>
                <nav>
                    <ul className="researchNavigation">
                        <li><a href="/studentResearchTopics">Register Research Topic</a></li>
                        <li><a href="/studentHandleResearchTopic">Manage Research Topic</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default PageNavBar;
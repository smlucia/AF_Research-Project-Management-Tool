import React from 'react';
import '../../styles/admin/AdminNavBar.css';

// create data function
let id = 0;
function createData(title, deadline, type) {
    id += 1;
    return { id, title, deadline, type };
}

const rows = [
    createData('title 1', '10-6-2022', 'type 1'),
    createData('title 2', '10-6-2022', 'type 2'),
    createData('title 3', '10-6-2022', 'type 3')
];

const Grade = () => {
    
        return (
            <>
                <div>
                    <nav>
                        <div className="logo">Grade Submissions</div>
                    </nav>
                
                </div>
                
                {/* create a card for each row in rows */}
                <div className="card-container">
                    {rows.map(row => (
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">{row.title}</div>
                                <div className="card-deadline">{row.deadline}</div>
                            </div>
                            <div className="card-body">
                                <div className="card-type">{row.type}</div>
                                <div className="card-grade">
                                    <div className="card-grade-title">Grade</div>
                                    <div className="card-grade-input">
                                        <input type="text" placeholder="Grade" />
                                    </div>
                                </div>
                                <div className="card-comment">
                                    <div className="card-comment-title">Comment</div>
                                    <div className="card-comment-input">
                                        <textarea placeholder="Comment" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="card-footer-button">
                                    <button className="button-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>

        );
}

export default Grade;
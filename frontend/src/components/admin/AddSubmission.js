import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   title: "",
   deadline: "",
   type: "",
   submitTo: "",
   submitFrom: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newSubmission = { ...form };
 
   await fetch("http://localhost:6005/sub/addSub", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newSubmission),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
   window.alert(`Added Successfully`);
   setForm({ title: "",
            deadline: "",
            type: "",
            submitTo: "",
            submitFrom: "", });
   navigate("/sublist");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
    <div style={{
        backgroundImage: 
    "url('https://t3.ftcdn.net/jpg/05/00/34/58/360_F_500345899_4OqmtspFst6SRnNQvLj7h7TfKOrBwTer.jpg')",
        height: "auto",
        position: "absolute",
        left: "0",
        width: "100%",
        overflow: "hidden"
        
    }}>
        <h2 style={{textAlign: "center", margin:"40px auto",}}>Create New submission</h2>
            <div style={{
                width: "700px",
                margin:"30px auto",
                
            }}>
                
               
                <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name" style={{fontSize: "20px", color:"black",fontWeight:"bold" }}>Title: </label>
                    <br/>
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    
                    id="title"
                    value={form.title}
                    onChange={(e) => updateForm({ title: e.target.value })}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="dealdine" style={{fontSize: "20px", color:"black",fontWeight:"bold" }}>Deadline: </label>
                    <input
                    type="date"
                    className="form-control form-control-lg "
                    id="deadline"
                    value={form.deadline}
                    onChange={(e) => updateForm({ deadline: e.target.value })}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="type" style={{fontSize: "20px", color:"black",fontWeight:"bold" }}>Type: </label>
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    id="type"
                    value={form.type}
                    onChange={(e) => updateForm({ type: e.target.value })}
                    />
                </div>
          
                <br />
                <div className="form-group">
                    <label htmlFor="type" style={{fontSize: "20px", color:"black",fontWeight:"bold" }}>Submit To: </label>
                    <select onChange={(e) => updateForm({ submitTo: e.target.value })} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">  
                      <option hidden >Select user type</option>          
                      <option value="student">Student</option>
                      <option value="supervisor">Supervisor</option>
                      <option value="coSupervisor">Co-Supervisor</option>
                      <option value="panelmember">panelmember</option>
                      
                  </select>
                    {/* <input
                    type="text"
                    className="form-control form-control-lg"
                    id="submitTo"
                    value={form.submitTo}
                    onChange={(e) => updateForm({ submitTo: e.target.value })}
                    /> */}
                </div>
          
                <br />
                <div className="form-group">
                    <label htmlFor="type" style={{fontSize: "20px", color:"black",fontWeight:"bold" }}>Submit From: </label>
                    <select onChange={(e) => updateForm({ submitFrom: e.target.value })} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"> 
                    <option hidden >Select user type</option>            
                      <option value="student">Student</option>
                      <option value="supervisor">Supervisor</option>
                      <option value="coSupervisor">Co-Supervisor</option>
                      <option value="panelmember">panelmember</option>
                      
                  </select>
                    {/* <input
                    type="text"
                    className="form-control form-control-lg"
                    id="submitFrom"
                    value={form.submitFrom}
                    onChange={(e) => updateForm({ submitFrom: e.target.value })}
                    /> */}
                </div>
          
                <br />
            
                <div className="form-group">
                    <input
                    type="submit"
                    value="Add New Submission"
                    className="btn btn-primary"
                    style={{
                        color:"white",
                        fontSize: "20px",
                        padding: "6px 10px",
                        //backgroundColor: "#0074B7",
                        
                    }}
                    />
                </div>
                </form>
            </div>
       </div>   
 );
}
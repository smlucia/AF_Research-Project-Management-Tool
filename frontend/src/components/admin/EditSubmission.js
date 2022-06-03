import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
    title: "",
    deadline: "",
    type: "",
    submitTo: "",
    submitFrom: "",
    records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:6005/sub/getOneSub/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     title: form.title,
     deadline: form.deadline,
     type: form.type,
     submitTo: form.submitTo,
     submitFrom: form.submitFrom,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:6005/sub/updateSub/${params.id}`, {
     method: "PUT",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
   window.alert(`Updated Successfully`);
   navigate("/sublist");
 }
 
 // This following section will display the form that takes input from the user to update the data.
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
    <h2 style={{textAlign: "center", margin:"50px auto",}}>Update submission</h2>
        <div style={{
            width: "700px",
            margin:"50px auto",
            
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
                    <select value={form.submitTo} onChange={(e) => updateForm({ submitTo: e.target.value })} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">            
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
                    <select value={form.submitFrom} onChange={(e) => updateForm({ submitFrom: e.target.value })} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">            
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
                    value="Update Submission"
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
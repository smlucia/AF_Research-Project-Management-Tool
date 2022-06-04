import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   firstName: "",
   lastName: "",
   email: "",
   mobile: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:6005/users/getOneUser/${params.id.toString()}`);
 
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
     firstName: form.firstName,
     lastName: form.lastName,
     email: form.email,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:6005/users/updateOneUser/${params.id}`, {
     method: "PUT",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
   
   window.alert(`Updated Successfully`);
   navigate("/stulist");
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
    <h2 style={{textAlign: "center", margin:"50px auto",}}>Update Record</h2>
        <div style={{
            width: "700px",
            margin:"50px auto",
            
        }}>
            
           
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name" style={{fontSize: "20px", color:"black",fontWeight:"bold" }}>FirstName: </label>
                <br/>
                <input
                type="text"
                className="form-control form-control-lg"
                
                id="firstName"
                value={form.firstName}
                onChange={(e) => updateForm({ firstName: e.target.value })}
                />
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="name" style={{fontSize: "20px", color:"black",fontWeight:"bold" }}>LastName: </label>
                <input
                type="text"
                className="form-control form-control-lg "
                id="lastName"
                value={form.lastName}
                onChange={(e) => updateForm({ lastName: e.target.value })}
                />
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="email" style={{fontSize: "20px", color:"black",fontWeight:"bold" }}>Email: </label>
                <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                value={form.email}
                onChange={(e) => updateForm({ email: e.target.value })}
                />
            </div>
      
            <br />
            <div className="form-group">
                <label htmlFor="mobile" style={{fontSize: "20px", color:"black",fontWeight:"bold" }}>Contact No: </label>
                <input
                type="tel"
                className="form-control form-control-lg"
                id="mobile"
                value={form.mobile}
                onChange={(e) => updateForm({ email: e.target.value })}
                />
            </div>
      
            <br />
        
            <div className="form-group">
                <input
                type="submit"
                value="Update Record"
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
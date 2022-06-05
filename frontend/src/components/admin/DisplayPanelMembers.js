import React, { useEffect, useState } from "react";
import Add from './AddPanel';
import { Link,useNavigate } from "react-router-dom";
 
 
export default function RecordList() {
 const [records, setRecords] = useState([]);

 
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:6005/users/getUsers?userType=panelmember`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);

//  // Add/Remove checked item from list
// const handleCheck = (event) => {
//     var updatedList = [...checked];
//     if (event.target.checked) {
//       updatedList = [...checked, event.target.value];
//     } else {
//       updatedList.splice(checked.indexOf(event.target.value), 1);
//     }
//     setChecked(updatedList);
//   };

//   const isChecked = (item) =>
//    checked.includes(item) ? "checked-item" : "not-checked-item";

//    var checkedItems = checked.length
//     ? checked.reduce((total, item) => {
//         return total + ", " + item;
//       })
//     : "";
 
//     const parentToChild = () => {
//         setData(checkedItems);
//         console.log(checkedItems);
//       }


 
 // This following section will display the table with the records of individuals.

 const navigate = useNavigate();


  const navigateToHome = () => {
  // 👇️ navigate to /home
    navigate('/adhome');
  };
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
 <button  className="btn btn-primary"
        style={{
            color:"white",
            fontSize: "20px",
            padding: "6px 10px",
            margin:"50px 50px",
            //backgroundColor: "#0074B7",
            
        }}
        onClick={navigateToHome}> Back to Home</button>
        <div style={{
            width: "50%",
            margin:"50px auto",
            
            
        }}> 
        
                        <h2 style={{textAlign: "center",margin:"30px auto"}}>Panel Members List</h2>
                       

                        <table className="table table-striped" style={{ marginTop: 20,
                          borderWidth:"1px",
                          borderColor:"black",
                          borderStyle:'solid',
                          backgroundColor: "white"}}>
                          <tr style={{backgroundColor: "#BFD7ED"}}>
                              <th style={{fontSize: "20px"}}>Name</th>
                              <th style={{fontSize: "20px"}}>Email</th>
                              
                              
                          </tr>
                          {records.map((item, index) => (
                           <tr key={index}>
                              <td style={{fontSize: "17px"}}>{item.firstName}</td>
                              <td style={{fontSize: "17px"}}>{item.email}</td>
                              
                           </tr>
                        ))}
                          
                        </table>
                       
                    
                <Add/>

                
            </div>

           
        </div>
  
 );
}
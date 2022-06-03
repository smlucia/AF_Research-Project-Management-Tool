import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td style={{fontSize: "17px"}}>{props.record.title}</td>
   <td style={{fontSize: "17px"}}>{props.record.deadline}</td>
   <td style={{fontSize: "17px"}}>{props.record.type}</td>
   <td style={{fontSize: "17px"}}>{props.record.submitTo}</td>
   <td style={{fontSize: "17px"}}>{props.record.submitFrom}</td>
   
   <td>
     <Link className="btn btn-primary" style={{padding: "6px 25px",fontSize: "17px"}} to={`/subedit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-primary"
     style={{padding: "6px 25px",fontSize: "17px"}}
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button> |
     <Link className="btn btn-primary" style={{padding: "6px 25px",fontSize: "17px"}} to={`/userview/${props.record._id}`}>View</Link>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:6005/sub/getAllSub`);
 
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
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:6005/sub/deleteSub/${id}`, {
     method: "DELETE"
   });
   window.alert(`Deleted Successfully`);
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }

 const navigate = useNavigate();

 const navigateToAddSub = () => {
    // 👇️ navigate to /contacts
    navigate('/addsub');
  };
 
 // This following section will display the table with the records of individuals.
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
        <div style={{
            width: "80%",
            margin:"80px auto",
            
            
        }}>
            <h2 style={{textAlign: "center",margin:"30px auto"}}>Submissions List</h2>
            <button  className="btn btn-primary"
                    style={{
                        color:"white",
                        fontSize: "20px",
                        padding: "6px 10px",
                        //backgroundColor: "#0074B7",
                        
                    }}
                    onClick={navigateToAddSub}> Add New Submission</button>
            <table className="table table-striped" style={{ marginTop: 20,
            borderWidth:"1px",
            borderColor:"black",
            borderStyle:'solid',
            backgroundColor: "white"}}>
            <thead>
                <tr style={{backgroundColor: "#BFD7ED"}}>
                <th style={{fontSize: "20px"}}>Title</th>
                <th style={{fontSize: "20px"}}>Deadline</th>
                <th style={{fontSize: "20px"}}>Type</th>
                <th style={{fontSize: "20px"}}>Submit To</th>
                <th style={{fontSize: "20px"}}>Submit From</th>
                <th style={{fontSize: "20px"}}>Action</th>
                </tr>
            </thead>
            <tbody>{recordList()}</tbody>
            </table>
        </div>
   </div> 
 );
}
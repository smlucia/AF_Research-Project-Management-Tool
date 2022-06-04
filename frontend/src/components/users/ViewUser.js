import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (


  <div class="card-body">
    <h5 class="card-title">{props.record.firstName} {props.record.lastName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{props.record.email}</h6>
    {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> */}
  </div>

//  <tr>
//    <td style={{fontSize: "17px"}}>{props.record.firstName}</td>
//    <td style={{fontSize: "17px"}}>{props.record.lastName}</td>
//    <td style={{fontSize: "17px"}}>{props.record.email}</td>
   
//    <td>
//      <Link className="btn btn-primary" style={{padding: "6px 25px",fontSize: "17px"}} to={`/stuedit/${props.record._id}`}>Edit</Link> |
//      <button className="btn btn-primary"
//      style={{padding: "6px 25px",fontSize: "17px"}}
//        onClick={() => {
//          props.deleteRecord(props.record._id);
//        }}
//      >
//        Delete
//      </button> |
//      <Link className="btn btn-primary" style={{padding: "6px 25px",fontSize: "17px"}} to={`/stuedit/${props.record._id}`}>View</Link>
//    </td>
//  </tr>
);
 
export default function RecordList() {
 const [record, setRecord] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecord(id) {
     const response = await fetch(`http://localhost:6005/users/getOneUser/${id}`, {
      method: "GET"
    });
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     setRecord(record);
    }
 
   getRecord();
 
   return;
 }, [record.length]);
 
//  // This method will delete a record
//  async function deleteRecord(id) {
//    await fetch(`http://localhost:5005/users/deleteOneUser/${id}`, {
//      method: "DELETE"
//    });
 
  //  const newRecords = record.filter((el) => el._id !== id);
  //  setRecord(newRecords);
 
 
 // This method will map out the records on the table
 function recordList() {
   return record.map((record) => {
     return (
       <Record
         record={record}
        
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
  <div class="card" style="width: 18rem;">
  <div class="card-body">
   {recordList}
  </div>
</div>
 );
}
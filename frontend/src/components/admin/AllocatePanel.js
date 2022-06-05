import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import DisplayAllPanel from './DisplayPanel';


export default function RecordList() {
 const [records, setRecords] = useState([]);
 const [panelId, setPanelId] = useState("");

 
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:6005/studentGroup/getAllStudentGroups`);
 
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


 async function onSubmit(e) {
    e.preventDefault();
    
    await fetch(`http://localhost:6005/studentGroup//updateStudentGroups/${item.groupId}`,{
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    window.alert(`Updated Successfully`);
    navigate.push("/");
    //   window.location.reload();
  }

  const navigate = useNavigate();

 const navigateToAddSub = () => {
    // 👇️ navigate to /contacts
    navigate('/adhome');
  };

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
 return (
   <div style={{
    backgroundImage: 
"url('https://t3.ftcdn.net/jpg/05/00/34/58/360_F_500345899_4OqmtspFst6SRnNQvLj7h7TfKOrBwTer.jpg')",
    height: "130vh",
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
                            margin: "60px 50px"
                            //backgroundColor: "#0074B7",
                            
                        }}
                        onClick={navigateToAddSub}> Back to Home</button>

                    <DisplayAllPanel />
              <div style={{
                  width: "70%",
                  margin:"300px auto",
                  
                  
              }}>
          
                        <h2 style={{textAlign: "center",margin:"30px auto"}}>Student Groups List</h2>
                       
                    <form onSubmit={onSubmit}>
                        <table className="table table-striped" style={{ marginTop: 20,
                          borderWidth:"1px",
                          borderColor:"black",
                          borderStyle:'solid',
                          backgroundColor: "white"}}>
                          <tr style={{backgroundColor: "#BFD7ED"}}>
                              <th style={{fontSize: "20px"}}>Group ID</th>
                              <th style={{fontSize: "20px"}}>Name</th>
                              <th style={{fontSize: "20px"}}>Leader's Name</th>
                              <th style={{fontSize: "20px"}}>Leader's Email</th>
                              <th style={{fontSize: "20px"}}>Add Panrl ID</th>
                              <th style={{fontSize: "20px"}}>Submit</th>
                          </tr>
                          {records.map((item, index) => (
                           <tr key={index}>
                              <td style={{fontSize: "17px"}}>{item.groupId}</td>
                              <td style={{fontSize: "17px"}}>{item.groupName}</td>
                              <td style={{fontSize: "17px"}}>{item.leaderName}</td>
                              <td style={{fontSize: "17px"}}>{item.leaderEmail}</td>
                              <td style={{fontSize: "17px"}}><input type="text"
                                    onChange={e => setPanelId(e.target.value)}
                                    className="form-control"
                                    placeholder="panel ID"/></td>
                            <td style={{fontSize: "17px"}}> <input
                                    type="submit"
                                    value="Update"
                                    className="btn btn-primary"
                                    style={{
                                        color:"white",
                                        fontSize: "20px",
                                        padding: "6px 10px",
                                        backgroundColor: "#0074B7",
                        
                    }}
                    /></td>     
                           </tr>
                        ))}
                          
                        </table>
                        </form>      
                       
                     
            </div>

           
        </div>
  
 );
}
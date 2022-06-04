import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import AllPanels from './DisplayPanel';

export default function addPanel() {
  const [panelId, setPanelId] = useState("");
  const [panelName, setPanelName] = useState("");
  const [panelMembers, setPanelMembers] = useState([]);
  

  const navigate = useNavigate();

  async function addPanel() {
    let item = {
        panelId,
        panelName,
        panelMembers
    };

    await fetch("http://localhost:6005/panel/addPanel", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    window.alert(`New panel added successfully`);
    navigate.push("/");
    //   window.location.reload();
  }

  return (
    <div>
      <h2 style={{textAlign: "center", margin:"40px auto",}}>Create New submission</h2>
          <div style={{
              width: "700px",
              margin:"30px auto",
              
          }}>
          <label htmlFor="panelID" style={{fontSize: "20px", color:"black" }}>Panel ID: </label>
          <input
            type="text"
            onChange={e => setPanelId(e.target.value)}
            className="form-control"
            placeholder="panel ID"
          />
          <br />
          
          <label htmlFor="panelName" style={{fontSize: "20px", color:"black" }}>Panel Name: </label>
          <input
            type="text"
            onChange={e => setPanelName(e.target.value)}
            className="form-control"
            placeholder="panel Name"
          />
          <br />
          
          <label htmlFor="panelMembers" style={{fontSize: "20px", color:"black" }}>Panel Members: </label>
          <input
            type="text"
            //parse the string input
            onChange={e => setPanelMembers(JSON.parse(e.target.value))}
            className="form-control"
            //notice the array bracket '[' and ']'
            placeholder='[{"name": "", "email": ""}, {"name": "", "email": ""}]'
          />

          <br />

          <button onClick={addPanel} className="btn btn-primary">
            Add New Panel
          </button>
    </div>

    {/* <AllPanels/> */}
   </div> 
  );
}

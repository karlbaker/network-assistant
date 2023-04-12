import React, {useState} from 'react'
import AssignVlan from '../components/AssignVlan';
import './HomePage.css'
import {FcViewDetails} from 'react-icons/fc'

const HomePage = () => {
  
  const [selectedRows, setSelectedRows] = useState([]);
  const [vlanName, setVlanName] = useState("")
  const [selectedPorts, setSelectedPorts] = useState(['A01-03', 'A01-04'])

  const handleRowClick = (index) => {
    const selectedIndex = selectedRows.indexOf(index);
    let newSelectedRows = [];
  
    if (selectedIndex === -1) {
      newSelectedRows = newSelectedRows.concat(selectedRows, index);
    } else if (selectedIndex === 0) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedRows = newSelectedRows.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1),
        index
      );
    }
  
    setSelectedRows(newSelectedRows);
  };
  

  const vlan =[
    "Customer A PXE",
    "Customer B PXE",
    "Internet",
    "Deployment Orchestrator",
  ]
  
  const port = [
    {
      key: 1,
      type: "access",
      po: "N/A",
      wallPort: "A01-03",
      vlan: "CustomerA PXE (534)",
      speed: "auto",
      duplex: "auto",
      connection: "connected",
      location: "Tiel Integration"
    },
    {
      key: 2,
      type: "access",
      po: "N/A",
      wallPort: "A01-04",
      vlan: "Internet (222)",
      speed: "auto",
      duplex: "auto",
      connection: "connected",
      location: "Tiel Integration"
    },
    {
      key: 3,
      type: "access",
      po: "N/A",
      wallPort: "A01-05",
      vlan: "CustomerC PXE (535)",
      speed: "auto",
      duplex: "auto",
      connection: "connected",
      location: "Tiel Integration"
    },
    {
      key: 4,
      type: "access",
      po: "N/A",
      wallPort: "A01-06",
      vlan: "Internet (222)",
      speed: "auto",
      duplex: "auto",
      connection: "connected",
      location: "Tiel Integration"
    },
  ]

  return (
    <>
    <div className="dropdown">
            <input name="vlanList" id="vlan-dropdown" list="data" placeholder="Choose a VLAN" onChange={(e) => {setVlanName(e.target.value)}}/>
            <datalist id="data">
                {vlan.map((vlan)=><option key={vlan}>{vlan}</option>)}
            </datalist>
            <AssignVlan vlanName={vlanName} selectedPorts={selectedPorts}/>
            <button>Change VLAN</button>
        </div>
    <div className="portListing table">
      <table className="portListingTable">
        <thead>
        <tr>
          <th>Wall Port Name</th>
          <th>Port Type</th>
          <th>Port Channel #</th>
          <th>Assigned VLAN</th>
          <th>Port Speed</th>
          <th>Port Duplex</th>
          <th>Port Connection</th>
          <th>Port Location</th>
        </tr>
        </thead>
        <tbody>
        {port.map((row, index) => {
            return (
              <tr
                className={
                  selectedRows.includes(index) 
                  ? 'rowSelected'
                  : ''
                }
                key={row.key}
                onClick={() => handleRowClick(index)}
                >
                  <td>{row.wallPort}<FcViewDetails /></td>
                  <td>{row.type}</td>
                  <td>{row.po}</td>
                  <td>{row.vlan}</td>
                  <td>{row.speed}</td>
                  <td>{row.duplex}</td>
                  <td>{row.connection}</td>
                  <td>{row.location}</td>
              </tr>
            )
          })}
       
        </tbody>
      </table>
    </div>
    </>
  )
}

export default HomePage
import React from "react";
// import "../App.css";
import "./style.css";
import { useNavigate} from "react-router-dom";
//import './bootstrape-icons/font/bootstrape-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Navbar from "./Navbar";
import Dashboard from "./Dashboard";


const Home = ()=> {
 

  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  
  const handleLogout = ()=> {
    localStorage.removeItem("Loggedin");
    navigate("/Login");
  };
    return (
      <div>
        
        <p className="text-center">wecome -  {userName.name}</p>
        {/* <Navbar /> */}
        <Dashboard/>
       
       {/* <div style={{color: "white", maxWidth: "300px",maxHeight:"9000px",cursor:"pointer"}} className=" sidebar d-flex justify-content-between flex-column bg-dark  p-1 ps-3 pe-5 " >
        <div>
          <a  style={{color: "white"}} href="" className="p-3">
          <i className="bi bi-code-slash fs-4 me-4"></i>
          <span  className="fs-3">
            Sidebar
          </span>
          </a>
          <hr  className="text-White mt-2"/>
          <ul style={{color: "red"}} className="nav nav-pills flex-column mt-2">

            <li className={active ===1 ? ' active nav-item p-2' : ""} 
            onClick={e => setActive(1)} >
              <span style={{color: "white"}}  className="p-3">
                <i className="bi bi-speedometer2 me-3 fs-4"></i>
                <span  className="fs-4"><strong>Dashboard</strong></span>
              </span>
            </li>
            <li style={{color: "white"}} className={active ===2 ? ' active nav-item p-2' : ""} 
            onClick={e => setActive(2)}>
              <span style={{color: "white"}}  className="p-3">
                <i className="bi bi-people me-3 fs-4"></i>
                <span className="fs-4"><strong>User</strong></span>
              </span>
            </li>
            <li className={active ===3 ? ' active nav-item p-2' : ""} 
            onClick={e => setActive(3)}>
              <span  style={{color: "white"}} className="p-1">
                <i className="bi bi-table me-3 fs-4"></i>
                <span className="fs-4"><strong>orders</strong></span>
              </span>
            </li>
            <li className={active ===4 ? ' active nav-item p-2' : ""} 
            onClick={e => setActive(4)}>
              <span  style={{color: "white"}} className="p-1">
                <i className="bi bi-grid me-3 fs-4"></i>
                <span className="fs-4"><strong>Report</strong></span>
              </span>
            </li>

          </ul>
        </div>

       <br/><br/><br/><br/><br/><br/><br/>
       <hr className="text-white"/>
       <div className="nav-item p-2">
        <a style={{color: "white"}} href="" className="p-1">
          <a  style={{color: "white"}}href="" className="p-1">
            <i className="bi bi-person-circle me-3 fs-4"></i>
            <span className="fs-4"><strong>Yourself</strong></span>
          </a>
        </a>
       </div>
        </div>
    
        */}
        <button onClick={handleLogout} type="button" className="btn-btn-success btn-lg gradient-custom-4 text-body center">
           Logout</button>
      </div>
     
      
      
    );
  }
  
  export default Home;
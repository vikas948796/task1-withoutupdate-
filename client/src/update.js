import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import  { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faUserEdit,faKey,faMobile,faEnvelope} from '@fortawesome/free-solid-svg-icons'
const api = axios.create({
  baseURL : "http://localhost:5000/"
});
function Update() {
    let history = useHistory();
      return (
      <div className="App">
    
        <center>
      
     
      <table id="bod">
        <tr>
        <h1>Sign Up <FontAwesomeIcon icon={faUserEdit} /></h1>
        </tr>
      <tr><td><label id="lab">Name </label></td> <td><div className="tb"><i><FontAwesomeIcon icon={faUser} /></i><input id="tbox" placeholder="Name" ></input></div></td></tr>
      <tr><td><label id="lab">Email Id </label></td> <td><div className="tb"><i><FontAwesomeIcon icon={faEnvelope} /></i><input id="tbox"  placeholder="Enter Email id" type="text"></input></div></td></tr>
      <tr><td><label id="lab">Mobile No </label></td> <td><div className="tb"><i><FontAwesomeIcon icon={faMobile} /></i><input id="tbox"   placeholder="Enter Mobile no." type="number"></input></div></td></tr>
      <tr><td><label id="lab">Password </label></td> <td><div className="tb"><i><FontAwesomeIcon icon={faKey} /></i><input id="tbox"    placeholder="Enter Password" type="password"></input></div></td></tr>
      <tr></tr></table>
      <button className="button"><span>Update</span></button><button className="button"><span>Cancel</span></button>
      
       </center>
      </div>
    );
  }
 export default Update;
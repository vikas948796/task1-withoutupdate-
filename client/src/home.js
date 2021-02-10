import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import  { useHistory } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faUserEdit,faKey,faMobile,faEnvelope,faEraser,faPen} from '@fortawesome/free-solid-svg-icons'
const api = axios.create({
  baseURL : "http://localhost:5000/"
});
function Home() {
    let history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [list,setList] = useState([]);
  
    const fetchData = async ()=>{
      try{
          const response = await api.get("/");
          console.log(response.data.data.list);
          setList(response.data.data.list);
      }catch(err){}
  };
    const handleSubmit = async (e)=>{
      e.preventDefault();
      try{
        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(password);
        const response =  await api.post("/create", {
          name,email,phone,password
        }
        );  
        console.log(response);
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        fetchData();
      }catch(err){}
    };
    
    const handleDelete = async (e,email)=>{
      e.stopPropagation();
      try {
        const response = await api.post('/delete',{
          email
        });
        console.log(response);
        fetchData();
        }catch(err){
          console.log(err);
        }
      }
      const handleUpdate = async (e,name,completed)=>{
        e.stopPropagation();
        history.push("/update");
      }
  
    useEffect(() => {
      fetchData();
    }, [])
  
    return (
      <div className="App">
  
  
  
  <center>
      
     
      <table id="bod">
        <tr>
        <h1>Sign Up <FontAwesomeIcon icon={faUserEdit} /></h1>
        </tr>
      <tr><td><label id="lab">Name </label></td> <td><div className="tb"><i><FontAwesomeIcon icon={faUser} /></i><input id="tbox" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Enter Name" type="text"></input></div></td></tr>
      <tr><td><label id="lab">Email Id </label></td> <td><div className="tb"><i><FontAwesomeIcon icon={faEnvelope} /></i><input id="tbox" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email id" type="text"></input></div></td></tr>
      <tr><td><label id="lab">Mobile No </label></td> <td><div className="tb"><i><FontAwesomeIcon icon={faMobile} /></i><input id="tbox" value={phone} onChange={(e)=>setPhone(e.target.value)}  placeholder="Enter Mobile no." type="number"></input></div></td></tr>
      <tr><td><label id="lab">Password </label></td> <td><div className="tb"><i><FontAwesomeIcon icon={faKey} /></i><input id="tbox"  value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter Password" type="password"></input></div></td></tr>
      <tr></tr></table>
      <button className="button"  onClick = {handleSubmit}><span>Submit </span></button>
      
        
      <table id="tbl1">
                       <tr><th id="th1">Name</th><th id="th1">Email</th><th id="th1">Phone No.</th><th id="th1">Password</th><th id="th1">Edit</th><th id="th1">Delete</th></tr>       
          {list &&
             
              list.map((l) => {
                return(                             
                       <tr key={ list.id }><td id="td1"><h3>{ l.name }</h3></td>
                                           <td id="td1"> <h3>{ l.email }</h3></td>
                                           <td id="td1" ><h3>{ l.phone }</h3></td>
                                           <td id="td1"> <h3>{ l.password }</h3></td>
                                           <td id="td1"><button id="btn22" onClick ={ (e) => handleUpdate(e,l.name,l.completed)}><h1 id="icn1"><FontAwesomeIcon icon={faPen} /></h1></button></td>
                                           <td id="td1"><button id="btn22"  onClick = { (e) =>  handleDelete(e,l.email)}><h1 id="icn2"><FontAwesomeIcon icon={faEraser} /></h1></button></td>
                                           </tr>
                )
              })
          }</table>
          </center>           
      </div>
    );
        }
        export default Home;
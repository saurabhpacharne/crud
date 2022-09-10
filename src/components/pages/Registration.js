import React, {useState} from "react";
import axios from "axios";

const Registration = () => {
const [user, setUser]= useState({
  fName : "",
  lName : "",
  email : "",
  mobNo : ""
});
const {fName,lName,email,mobNo}= user;

const onInputChange = e => {
  setUser({...user,[e.target.name]: e.target.value});
};

const onSubmit = async e =>{
    alert("you have successfully registered");
    e.preventDefault();
    await axios.post("http://localhost:3002/users",user);  
   
}

return (
  <>
  <h1 className="text-center mt-2 text-primary">Registration form</h1>
  <br/>
  <div className="container">
    <form onSubmit={e=> onSubmit(e)}>
  <div className=" form-group">
    <label for="user"/>First Name <label/>
    <input type="text" name="fName" id="user" value={fName} className="form-control "  onChange={e=>onInputChange(e)}  />
  </div>
  <div className="  form-group">
    <label for="user"/>last Name <label/>
    <input type="text" name="lName" id="user" value={lName} className="form-control"  onChange={e=>onInputChange(e)}  />
  </div>
  <div className=" form-group">
    <label for="email"/>Email <label/>
    <input type="text" name="email" id="user" value={email} className="form-control" onChange={e=>onInputChange(e)} />
  </div>
  <div className="  form-group">
    <label for="user"/>Mob. No. <label/>
    <input type="number" name="mobNo" id="user" value={mobNo} className="form-control" onChange={e=>onInputChange(e)}  />
  </div>
  <button to ="/"className="btn btn-primary mt-2">Register</button>
  </form>
  </div> 
  
  </>
)
}
export default Registration

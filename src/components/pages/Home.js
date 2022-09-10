import React,{useState,useEffect} from "react";

import axios from "axios";

const Home = () => {

const [user, getUser] = useState([]);

useEffect(()=>{
getAllUser();
},[])

const getAllUser= async ()=>{
const result =  await axios.get("http://localhost:3002/users");
getUser(result.data); 

}

const userDelete = async id =>{ 
await axios.delete(`http://localhost:3002/users/${id}`);
getAllUser();   
}   

return (
<>
<table className="table table-striped table-hover mt-3">
<thead>
<tr>
<th scope="col">id</th>
<th scope="col">First Name</th>
<th scope="col">Last Name</th>
<th scope="col">Email</th>
<th scope="col">Mobile no</th>
<th scope="col">Action</th>
</tr>
</thead>
<tbody>
{user.map((val,index)=>(
<tr>
<td> {index + 1}</td>
<td> {val.fName}</td>
<td> {val.lName}</td>
<td> {val.email}</td>
<td> {val.mobNo}</td> 
<td>
<span type ="button" onClick={()=>userDelete(val.id)} className="material-symbols-outlined ">delete</span> 
</td> 
</tr> 

) )}

</tbody>
</table> 
</>
)
}
export default Home

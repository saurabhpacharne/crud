import {NavLink} from "react-router-dom";


import React, {useState} from "react"; 


function Navbar() {
const [searchTerm, setSearchTerm] = useState("");
return (
  <>
  <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src="https://unifiedaccess.mphasis.com/images/mp1.png" alt=""  width="90px" height="60px"></img></a>
      <ul className="navbar-nav me-auto  ">
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page"to="/">Home</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page"to="/registration">Registration</NavLink>
      </li>  
      </ul>
      <form className="d-flex" role="search">
      
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"onChange={(event) => {
          setSearchTerm(event.target.value);
        }} />
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  All App
</button>
 <div class="collapse" id="collapseExample">
<div class="card card-body">
<div className="dataContainer"> 
      <div className="row row-cols-3 row-cols-md-6 g-2"> 
          
        </div>
    </div>
    
</div>
</div>
          
      </form>
      
      
    </div>
    
    
  </nav> 
  
    
  </>
)
}

export default Navbar;

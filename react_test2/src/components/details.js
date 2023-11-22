import axios from 'axios';
import { useState } from "react"
import AuthUsers from './AuthUsers';
import react, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

export default function Details(){

  

  const {http,setToken} = AuthUsers();
  const [todo,setbusiness_data] = useState([]);
  useEffect(()=>{
    fatchAlldata();
  },[]);
  const fatchAlldata = () =>{
    http.get('view-business').then((res)=>{
      setbusiness_data(res.data);
    //console.log(res);

    })
}



  
    return(
     
  
      <div>
       
        <div className="row justify-content-center ">
      <div className="col-sm-12">
          <div className="card p-4">
              <h1 className="text-center mb-3">
                  Business Details  <button type="button" class="btn btn-primary"><Link className="nav-link" to="/business">Add Business</Link></button></h1>
             
              <table class="table">
<thead class="thead-dark">
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Address</th>
    <th scope="col">Email</th>
    <th scope="col">Website</th>
    
    <th scope="col">person name</th>
    <th scope="col">Phone number</th>
    
  </tr>
</thead>
<tbody>
{todo.map((item)=>{
return <tr key={item.name}>
<td>{item.name}</td>
<td>{item.address}</td>
<td>{item.email}</td>
<td>{item.website}</td>
<td>{item.personname}</td>
<td>{item.phone_number}</td>

</tr>
        })}
</tbody>

</table>


              
          </div>
      </div>
  </div></div>
  )
 

   
}
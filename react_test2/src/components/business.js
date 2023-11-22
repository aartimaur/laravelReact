import { useState } from "react"
import AuthUsers from './AuthUsers';

import swal from 'sweetalert';


export default function Business() {
    const {http,setToken} = AuthUsers();
    const [name,setName] = useState();
    const [errorname,setNameerror] = useState();
    const [address,setAddress] = useState();
    const [erroraddress,setNameaddress] = useState();
    const [email,setEmail] = useState();
    const [erroremail,setEmailerror] = useState();
    const [website,setWebsite] = useState();
    const [errorwebsite,setWebsiteerror] = useState();
    const [personname,setPersonname] = useState();
    const [errorpersonname,setPersonnameerror] = useState();
    const [phone_number,setPhoneNumber] = useState();
    
   
    
   

    const submitForm = () =>{
       
        http.post('/addBusiness',{email:email,name:name,address:address,website:website,personname:personname,phone_number:phone_number}).then((res)=>{
          // console.log(res.data);
           if(res.data.status==422)
           {
          
            setNameerror(res.data.error.name);
            setNameaddress(res.data.error.address);
            setEmailerror(res.data.error.email);
            setWebsiteerror(res.data.error.website);
            setPersonnameerror(res.data.error.personname);
             }
             else{
                swal({
                    title: "Success",
                    text: res.data.msg,
                    icon: "success",
                    button: "OK!",
                  });
             }
           
          
        
       
        })
    }
    

    return(
        <div>
            <div className="row justify-content-center pt-5">
        <div className="col-sm-6">
            <div className="card p-4">
                <h1 className="text-center mb-3">Business</h1>
                <div className="form-group">
                    <label>Name :</label>
                    <input type="text" className="form-control" placeholder="Enter Name"
                       onChange={e=>setName(e.target.value)}
                    id="name" name="name" />
                   <span className="text-danger">{errorname}</span>
                </div>
                <div className="form-group mt-3">
                    <label>Address:</label>
                    <input type="text" className="form-control" placeholder="Enter Address"
                       onChange={e=>setAddress(e.target.value)} id="address" name="address" />
                        <span className="text-danger">{erroraddress}</span>

                </div>
                <div className="form-group mt-3">
                    <label>Email:</label>
                    <input type="text" className="form-control" placeholder="Enter Email"
                     onChange={e=>setEmail(e.target.value)} id="email" name="email"/>
                     <span className="text-danger">{erroremail}</span>

                </div>
                <div className="form-group mt-3">
                    <label>Website:</label>
                    <input type="text" className="form-control" placeholder="Enter Website"
                       onChange={e=>setWebsite(e.target.value)}
                    id="website"  name="website"/>
                                      <span className="text-danger">{errorwebsite}</span>

                </div>
                <div className="form-group mt-3">
                    <label>person name:</label>
                    <input type="text" className="form-control" placeholder="Enter person name"
                       
                       onChange={e=>setPersonname(e.target.value)}
                    id="Personname" name="Personname" />
                  <span className="text-danger">{errorpersonname}</span>

                </div>
                <div className="form-group mt-3">
                    <label>Phone number:</label>
                    <input type="text" className="form-control" placeholder="Enter Phone number"
                       onChange={e=>setPhoneNumber(e.target.value)}
                    id="phone_number" name="phone_number" />
                </div>
                <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Save</button>
            </div>
        </div>
    </div>
    
    </div>

    )
}
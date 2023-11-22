import { useState } from "react"
import AuthUsers from './AuthUsers';
import swal from "sweetalert";

import {useNavigate} from 'react-router-dom'



export default function Login() {
    const navigate=useNavigate();
    const {http,setToken} = AuthUsers();
    const [email,setEmail] = useState();
    const [erroremail,setEmailerror] = useState();
    const [password,setPassword] = useState();
    const [errorpassword,errorsetPassword] = useState();
   
       const loginSubmit=(e)=>{
            e.preventDefault();
            


            http.post('/login',{email:email,password:password}).then((res)=>{
              
               if(res.data.status==300)
               {
                    setEmailerror(res.data.error.email);
                    setPassword(res.data.error.password);
               
                 }
                 else if(res.data.status == 401)
                 {
                 alert("Invalid Credentials");
                 swal("warning",res.data.massage,"warning")

                 }
                 else{
                    
                    setToken(res.data.user,res.data.access_token);
                 }
             
            })
        }
    
    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <form onSubmit={loginSubmit}>
                <div className="card p-4">
                    
                    <h1 className="text-center mb-3">Login </h1>
                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" />
                          <span className="text-danger">{erroremail}</span>
                    </div>
                    
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="password"
                            onChange={e => setPassword(e.target.value)}
                        id="password" />
                         <span className="text-danger">{errorpassword}</span>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Login </button>
                </div>
                </form>
            </div>
            
        </div>
    )
}
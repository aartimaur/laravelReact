import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from 'react-router-dom';

import Home from '../components/home';
import Details from '../components/details';
import Dashboard from '../components/dashboard';

import AuthUsers from '../components/AuthUsers';
// Business
import Business from '../components/business';
//import BusinessDetails from '../components/businessDetails';

function Auth() {
  const {token,logout} = AuthUsers();
  const logoutUser = () => {
      if(token != undefined){
          logout();
      }
  }
  return (
   <div>   <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
   <div className="container-fluid">
   <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
     
     
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">dashboard</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/details"> Business Details</Link>
      </li>
      
      
     
      <li className="nav-item">
      <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
        
      </li>
    </ul>
   </div>
 </nav>
 <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/business" element={<Business/>}/>
       
        
       </Routes>
      </div>
    </div>
  );
}

export default Auth;

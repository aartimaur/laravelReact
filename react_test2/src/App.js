import "bootstrap/dist/css/bootstrap.min.css";
import AuthUsers from './components/AuthUsers';
import Auth from './navbar/auth';
import LoginNavbar from './navbar/loginNavbar';


function App() {
  const {getToken} = AuthUsers();
  if(!getToken()){
    return <LoginNavbar />
  }
  return (
      <Auth />
  );
}

export default App;

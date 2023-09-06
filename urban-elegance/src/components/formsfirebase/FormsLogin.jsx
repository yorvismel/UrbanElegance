import  { useState } from "react";
import "./FormsFirebase.css";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'; 

const FormsLogin = () => {
  const auth = useAuth();
  const navigate = useNavigate(); 
  const { displayName } = auth.user;
  console.log(displayName);

  // const [emailRegister, setEmailRegister] = useState("");
  // const [passwordRegister, setPasswordRegister] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   auth.register(emailRegister, passwordRegister);
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    await auth.login(email, password);
    navigate("/store"); 
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    await auth.loginWithGoogle();
    navigate("/store"); 
  };

  const handleLogout = () => {
    auth.logout();
    navigate('/')
  };

  const handleFacebook = async (e) => {
    e.preventDefault();
    await auth.loginWithFacebook();
    navigate("/store"); 
  };

  return (
    <div className="forms-firebase">
      {displayName && <h5>Bienvenido {displayName}</h5>}
      {/* <form className="form" action="">
        <h3 className="title">Register</h3>
        <input
          onChange={(e) => setEmailRegister(e.target.value)}
          className="input"
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => setPasswordRegister(e.target.value)}
          className="input"
          type="password"
          placeholder="password"
        />
        <button onClick={(e) => handleRegister(e)} className="button">Submit</button>
      </form> */}

      <form className="form">
        <h3 className="title">Login</h3>
        <input onChange={(e) => setEmail(e.target.value)} className="input" type="email" placeholder="email" />
        <input onChange={(e) => setPassword(e.target.value)} className="input" type="password" placeholder="password" />
        <button onClick={(e) => handleLogin(e)} className="button">Submit</button>
        <button onClick={(e) => handleGoogle(e)} className="button">Google</button>
        <button onClick={(e) => handleFacebook(e)} className="button">
          Facebook
        </button>
      </form>
      <button onClick={() => handleLogout()} className="button">Logout</button>
    </div>
  );
};
export default FormsLogin;

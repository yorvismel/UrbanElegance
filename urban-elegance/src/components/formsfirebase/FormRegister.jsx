import { useState } from "react";
import "./FormsFirebase.css";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'; 

const FormRegister = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { displayName } = auth.user;
  console.log(displayName);

  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
//   const [fullName, setFullName] = useState(""); // Agregado: Nombre completo
//   const [birthdate, setBirthdate] = useState(""); // Agregado: Fecha de nacimiento

  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      // Crear un objeto con los datos del usuario
      const userData = {
        email: emailRegister,
        password: passwordRegister,
       
      };
  
      // Llamar a la función de registro de autenticación con el objeto de datos del usuario
      await auth.register(userData);
  
      // Redirigir o realizar otras acciones después del registro exitoso
      navigate('/');
    } catch (error) {
      console.error("Error al registrar al usuario:", error);
      // Manejo de errores, muestra un mensaje de error al usuario si es necesario
    }
  };
  
  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };

  return (
    <div className="forms-firebase">
      {displayName && <h5>Bienvenido {displayName}</h5>}
      <form className="form" action="">
        <h3 className="title">Register</h3>

        <input
          onChange={(e) => setEmailRegister(e.target.value)}
          className="input"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPasswordRegister(e.target.value)}
          className="input"
          type="password"
          placeholder="Password"
        />
        {/* <input
          onChange={(e) => setFullName(e.target.value)} // Agregado: Nombre completo
          className="input"
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={(e) => setBirthdate(e.target.value)} // Agregado: Fecha de nacimiento
          className="input"
          type="date"
          placeholder="Date of Birth"
        /> */}
        <button onClick={(e) => handleRegister(e)} className="button">Submit</button>
      </form>
      <button onClick={() => handleLogout()} className="button">Logout</button>
    </div>
  );
}

export default FormRegister;

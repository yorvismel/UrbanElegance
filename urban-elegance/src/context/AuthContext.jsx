/* eslint-disable react-refresh/only-export-components */
import { auth } from "../../config.firebase";
import { useContext, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

export const useAuth = () => {
  
  const context = useContext(authContext);
  if (!context) {
    console.log("Error creating auth context");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser ] = useState("");
  useEffect(() => {
    const suscribed = onAuthStateChanged(auth, (currentUser)=>{
      if(!currentUser) {
        console.log("No hay usuarios suscritos");
        setUser('');
      } else {
        setUser(currentUser);
      }
    })
    return () => suscribed()
  }, [])
  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("register", response);
  };
  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log("login", response);
  };

  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };
  
  const loginWithFacebook = async () => {
    
    const provider = new FacebookAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      console.log("loginWithFacebook", response);
      // Redirige al usuario a la ruta "/store" después del inicio de sesión con Facebook
    } catch (error) {
      console.error("Error signing in with Facebook:", error);
    }
  };

  const logout = async () => {
    const response = await signOut(auth);
    console.log('logout',response)
  }

  return (
    <authContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        logout,
        user,
        loginWithFacebook
      }}
    >
      {children}
    </authContext.Provider>
  );
}

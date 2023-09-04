import React, { createContext, useState } from "react";
import axios from "axios";

export const MyContext = createContext();

const Auth = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({})

  const [token, setToken] = useState("");

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/auth/logout", {
        token
      });
      setLoggedIn(false);
      setToken("");
      setUserInfo({});
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      const { access_token } = response.data;
      setUserInfo(response.data)
      
      setToken(access_token);
      setLoggedIn(true);
    } catch (error) {
      // Manejar el error de autenticación
      console.error(error);
      setLoggedIn(false);
    }
  };
  
  console.log(userInfo);
  console.log(token);

  return (
    <MyContext.Provider
      value={{
        handleSubmit,
        handleChange,
        setEmail,
        setPassword,
        handleLogout,
        email,
        isLoggedIn,
        password,
        userInfo
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Auth;

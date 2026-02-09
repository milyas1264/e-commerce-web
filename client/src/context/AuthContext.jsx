import {createContext, useState} from 'react';

 const AuthContext = createContext();

 const AuthProvider = ({children}) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  const login = (t, r) => {
    localStorage.setItem("token", t);
    localStorage.setItem("role", r);
    setToken(t);
    setRole(r);
  };

  return (
    <AuthContext.Provider value={{token, role, login}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
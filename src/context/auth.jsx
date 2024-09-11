import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // Update axios defaults whenever auth.token changes
  useEffect(() => {
    if (auth?.token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"]; // Remove token if logged out
    }

    axios.defaults.headers.common["Muntasirul"] = "Developer"; // Custom header

    // Load auth data from localStorage
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({
        user: parsedData.user,
        token: parsedData.token,
      });
    }
  }, [auth?.token]); // Dependency on auth.token

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier access
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

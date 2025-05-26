import { createContext, useState, useEffect } from "react";

export const appContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  // check if user is login already
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (accessToken, user) => {
    setToken(accessToken);
    setUser(user);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };
  const updateUser=(updateUser)=>{
    setUser(updateUser)
    localStorage.setItem("user", JSON.stringify(updateUser))
  }
  // login= email, password, role
  // setToken() setUser()
  return (
    <appContext.Provider value={{ login, logout, user, token, loading, updateUser }}>
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;

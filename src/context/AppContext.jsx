import { createContext } from "react";

export const appContext = createContext();

const AppProvider = ({ children }) => {
  return <appContext.Provider value={{}}>{children}</appContext.Provider>;
};

export default AppProvider;

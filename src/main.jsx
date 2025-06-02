import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppProvider from "./context/AppContext.jsx";
import TenantProvider from "./context/TenantContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <TenantProvider>
        <App />
        <ToastContainer position="top-center" />
      </TenantProvider>
    </AppProvider>
  </StrictMode>
);

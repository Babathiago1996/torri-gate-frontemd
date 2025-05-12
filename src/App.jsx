import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import SuspenseLoader from "./components/SuspenseLoader";

// Lazy-loaded pages
const DashboardLayout = lazy(() =>
  import("./components/layout/DashboardLayout")
);
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const AdminProperty = lazy(() => import("./pages/AdminProperty"));
const CreateProperty = lazy(() => import("./pages/CreateProperty"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Home = lazy(() => import("./pages/Home"));
const HomeLoggedIn = lazy(() => import("./pages/HomeLoggedIn"));
const PropertyDetail = lazy(() => import("./pages/PropertyDetail"));
const Error404 = lazy(() => import("./pages/Error404"));

function App() {
  return (
    <Router>
      <Suspense fallback={<SuspenseLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomeLoggedIn />} />
          <Route path="/property/:propertyId" element={<PropertyDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="property" element={<AdminProperty />} />
            <Route path="profile" element={<Profile />} />
            <Route path="create" element={<CreateProperty />} />
          </Route>

          {/* 404 route last */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  // Check screen size and toggle sidebar accordingly
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Navigation Bar - Mobile Menu Toggle */}
      <nav className="md:hidden bg-black text-white py-3 px-4 flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="text-gray-600 focus:outline-none"
        >
          <FaBars color="#ffffff" size={20} />
        </button>
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" />
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`bg-[#0c0c0c] text-white transition-all duration-300 ease-in-out 
            ${isSidebarOpen ? "w-64" : "w-0"} 
            ${isMobile ? "fixed inset-y-0 z-50" : "relative"}`}
        >
          <div
            className={`h-full overflow-y-auto ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex lg:hidden items-center justify-end pt-2.5">
              <button
                onClick={toggleSidebar}
                className="mr-4 text-white focus:outline-none"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-4">
              <div className="flex gap-2 items-center">
                <img src={logo} alt="logo" />
                <div>
                  <h2 className="font-medium text-lg ">Torii Gate</h2>
                  <p className="italic font-normal text-[12px]">
                    Homing made easy to home
                  </p>
                </div>
              </div>
              <nav className="mt-6">
                <ul className="flex flex-col gap-3 text-[16px]">
                  <li className="mb-2">
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? " flex items-center gap-3 bg-[#363636] px-4 py-2 rounded-md"
                          : "px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-3"
                      }
                      end
                    >
                      <RxDashboard size={22} />
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink
                      to="property"
                      className={({ isActive }) =>
                        isActive
                          ? " flex items-center gap-3 bg-[#363636] px-4 py-2 rounded-md"
                          : "px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-3"
                      }
                    >
                      <HiOutlineHomeModern size={22} />
                      Property
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink
                      to="profile"
                      className={({ isActive }) =>
                        isActive
                          ? " flex items-center gap-3 bg-[#363636] px-4 py-2 rounded-md"
                          : "px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-3"
                      }
                    >
                      <IoPersonOutline size={22} />
                      Profile
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-100">
          {/* Top Navigation Bar - Desktop */}
          <nav className="flex bg-white py-3 px-4 items-center justify-between sticky top-0 z-10">
            <div>
              <h1 className="font-light text-xl">
                Welcome Back, <span className="font-medium">Farid</span>
              </h1>
            </div>
            <div className="flex items-center space-x-4 relative">
              <div className="  flex items-center justify-center gap-2.5">
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"
                  alt="pic"
                  className="rounded-full object-cover h-9 w-9"
                />
                <div>
                  <h2 className="hidden md:block font-bold text-[14px] ">
                    Ahmed Farid
                  </h2>
                  <p className="hidden md:block text-[#666666] font-light">
                    Olafarid12@gmail.com
                  </p>
                </div>
                <button
                  onClick={() => setShowLogout(!showLogout)}
                  className="cursor-pointer"
                >
                  {showLogout ? (
                    <IoIosArrowUp size={20} />
                  ) : (
                    <IoIosArrowDown size={20} />
                  )}
                </button>
              </div>
              {showLogout && (
                <button className="absolute btn bg-red-500 text-white top-16 right-4 z-10">
                  Logout
                </button>
              )}
            </div>
          </nav>
          <div className="px-4 bg-[#f6f6f6]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

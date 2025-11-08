// ===========================================
// ✅ CEPS Frontend — App.jsx (With Landing Page)
// ===========================================

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage.jsx";  // ✅ NEW
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Events from "./pages/Events.jsx";
import Analytics from "./pages/Analytics.jsx";
import Feedback from "./pages/Feedback.jsx";
import Attendance from "./pages/Attendance.jsx";
import TrainerAllocation from "./pages/TrainerAllocation.jsx";
import Notifications from "./pages/Notifications.jsx";
import EventRegistration from "./pages/EventRegistration.jsx";
import Profile from "./pages/Profile.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import MyRegisteredEvents from "./pages/MyRegisteredEvents.jsx";
import AddEvent from "./pages/AddEvent.jsx";

// Layout
import Sidebar from "./components/layout/Sidebar.jsx";
import Header from "./components/layout/Header.jsx";

// ✅ Protected Route
const ProtectedRoute = ({ children, requireRole }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  if (!token) return <Navigate to="/login" replace />;

  if (requireRole) {
    const roles = Array.isArray(requireRole) ? requireRole : [requireRole];
    if (!roles.includes(userRole)) return <Navigate to="/dashboard" replace />;
  }

  return children;
};

// ✅ Main Layout
const PageLayout = ({ isOpen, toggleSidebar, title, children }) => (
  <div className="flex flex-col md:flex-row bg-gradient-to-br from-[#0a0f1f] via-[#111b3d] to-[#1c2b6c] min-h-screen text-white">
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    <div
      className={`flex flex-col flex-1 transition-all duration-300 ${
        isOpen ? "md:ml-[240px]" : "md:ml-[70px]"
      }`}
    >
      <Header title={title} toggleSidebar={toggleSidebar} />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  </div>
);

// ✅ Routes Wrapper
function MainRoutesWrapper() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const handleResize = () => setIsOpen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");
    const logged = localStorage.getItem("isLoggedIn") === "true";
    if (token && role && logged) {
      setIsLoggedIn(true);
      setUserRole(role);
    } else setIsLoggedIn(false);
  }, [location.pathname]);

  const toggleSidebar = () => setIsOpen((p) => !p);

  // ✅ Handle root "/"
  const handleRoot = () => {
    if (!isLoggedIn) return <LandingPage />; // ✅ Show Landing Page if not logged in
    if (userRole === "student") return <Navigate to="/events" replace />;
    return <Navigate to="/dashboard" replace />;
  };

  return (
    <Routes>

      {/* ✅ Landing Page */}
      <Route path="/" element={handleRoot()} />

      {/* ✅ Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ✅ Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <PageLayout isOpen={isOpen} toggleSidebar={toggleSidebar} title="Dashboard Overview">
              <Dashboard />
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* ✅ Events */}
      <Route
        path="/events"
        element={
          <ProtectedRoute>
            <PageLayout isOpen={isOpen} toggleSidebar={toggleSidebar} title="Events & Programs">
              <Events />
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* ✅ Add Event */}
      <Route
        path="/add-event"
        element={
          <ProtectedRoute requireRole={["faculty", "admin"]}>
            <PageLayout isOpen={isOpen} toggleSidebar={toggleSidebar} title="Add Event">
              <AddEvent />
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* ✅ My Events (Student) */}
      <Route
        path="/my-events"
        element={
          <ProtectedRoute requireRole="student">
            <PageLayout isOpen={isOpen} toggleSidebar={toggleSidebar} title="My Registered Events">
              <MyRegisteredEvents />
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* ✅ Event Registration (Faculty/Admin) */}
      <Route
        path="/event-registration"
        element={
          <ProtectedRoute requireRole={["faculty", "admin"]}>
            <PageLayout isOpen={isOpen} toggleSidebar={toggleSidebar} title="Event Registration & Approval">
              <EventRegistration />
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* ✅ Attendance */}
      <Route
        path="/attendance"
        element={
          <ProtectedRoute>
            <PageLayout isOpen={isOpen} toggleSidebar={toggleSidebar} title="Attendance Management">
              <Attendance />
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* ✅ Trainer */}
      <Route
        path="/trainer-allocation"
        element={
          <ProtectedRoute>
            <PageLayout isOpen={isOpen} toggleSidebar={toggleSidebar} title="Trainer Allocation">
              <TrainerAllocation />
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* ✅ Notifications */}
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <PageLayout isOpen={isOpen} toggleSidebar={toggleSidebar} title="Notifications">
              <Notifications />
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* ✅ Analytics */}
      <Route
        path="/analytics"
        element={
          <ProtectedRoute requireRole={["faculty", "admin"]}>
            <PageLayout isOpen={isOpen} toggleSidebar={toggleSidebar} title="Analytics Dashboard">
              <Analytics />
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* ✅ Feedback */}
      <Route
        path="/feedback"
        element={
          <ProtectedRoute>
            <PageLayout isOpen={isOpen} toggleSidebar={toggleSidebar} title="Feedback Management">
              <Feedback />
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* ✅ Profile */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <PageLayout isOpen={isOpen} toggleSidebar={toggleSidebar} title="User Profile">
              <Profile />
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* ✅ Change Password */}
      <Route
        path="/change-password"
        element={
          <ProtectedRoute>
            <PageLayout isOpen={isOpen} toggleSidebar={toggleSidebar} title="Change Password">
              <ChangePassword />
            </PageLayout>
          </ProtectedRoute>
        }
      />

      {/* ✅ 404 */}
      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center text-white text-2xl">
            404 — Page Not Found
          </div>
        }
      />

    </Routes>
  );
}

// ✅ Root
export default function App() {
  return (
    <Router>
      <MainRoutesWrapper />
    </Router>
  );
}

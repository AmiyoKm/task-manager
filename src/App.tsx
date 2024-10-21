import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import { LoginForm } from "./components/login-form";
import MyTask from "./Pages/MyTask";
import Project from "./Pages/Project";
import Calender from "./Pages/Calender";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";

import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <SidebarProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div className="h-screen flex items-center justify-center">
                <LoginForm />
              </div>
            }
          />
          <Route
            path="/Home"
            element={
              <>
              <div>Home</div>
                <AppSidebar />
              </>
            }
          />
          <Route
            path="/my-tasks"
            element={
              <>
                <AppSidebar /> <MyTask />
                <Toaster />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <AppSidebar />
                <Project />
              </>
            }
          />
          <Route
            path="/Calender"
            element={
              <>
                <AppSidebar />
                <Calender />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <AppSidebar />
                <Profile />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <AppSidebar />
                <Settings />
              </>
            }
          />
        </Routes>
      </SidebarProvider>
    </>
  );
}

export default App;

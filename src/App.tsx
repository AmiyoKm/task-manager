import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { LoginForm } from "./components/login-form";
import MyTask from "./Pages/MyTask";
import Project from "./Pages/Project";
import Calender from "./Pages/Calender";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import GlobalStateContext from "./context/GlobalContext";
import { Toaster } from "./components/ui/toaster";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
   
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
            <SidebarProvider>
              <AppSidebar />
              <main>
                <SidebarTrigger />
                {children}
              </main>
              <Toaster />
            </SidebarProvider>
          }
        />
        <Route
          path="/my-tasks"
          element={
            <SidebarProvider>
              <AppSidebar />
              <MyTask />
              <main>
                <SidebarTrigger />
                {children}
              </main>
              
              <Toaster />
            </SidebarProvider>
          }
        />
        <Route
          path="/projects"
          element={
            <SidebarProvider>
              <AppSidebar />
              <main>
                <SidebarTrigger />
                {children}
              </main>
              <Toaster />
              <Project />
            </SidebarProvider>
          }
        />
        <Route
          path="/Calender"
          element={
            <SidebarProvider>
              <AppSidebar />
              <main>
                <SidebarTrigger />
                {children}
              </main>
              <Calender />
              <Toaster />
            </SidebarProvider>
          }
        />
        <Route
          path="/profile"
          element={
            <SidebarProvider>
              <AppSidebar />
              <main>
                <SidebarTrigger />
                {children}
              </main>
              <Profile />
            </SidebarProvider>
          }
        />
        <Route
          path="/settings"
          element={
            <SidebarProvider>
              <AppSidebar />
              <main>
                <SidebarTrigger />
                {children}
              </main>
              <Settings />
            </SidebarProvider>
          }
        />
      </Routes>
     
    </>
  );
}

export default App;

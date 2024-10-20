import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { LoginForm } from "./components/login-form";


function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<div className="h-screen flex items-center justify-center"><LoginForm /></div>} />
        <Route
          path="/Home"
          element={
            <SidebarProvider>
              <AppSidebar />
              <main>
                <SidebarTrigger />
                {children}
              </main>
            </SidebarProvider>
          }
        />
      </Routes>
    </>
  );
}

export default App;

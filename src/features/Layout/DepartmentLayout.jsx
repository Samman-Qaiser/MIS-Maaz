import Header from "../NavigationMenu/components/Header";
import DynamicSidebar from "../NavigationMenu/components/Sidebar";
import { Outlet } from "react-router-dom";
import {

  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
const DepartmentLayout = () => {
  return (
    <>
        <Header />
  <SidebarProvider>
      <DynamicSidebar />
      <main className="flex-1 mt-17">
        <SidebarTrigger />
        {/* Your main content here */}
       <Outlet />
      </main>
    </SidebarProvider>
 
    </>
 
  );
};

export default DepartmentLayout;

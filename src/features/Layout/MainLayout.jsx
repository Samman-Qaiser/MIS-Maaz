import { Outlet } from "react-router-dom";
import Header from "../NavigationMenu/components/Header";
import {

  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DynamicSidebar from "../NavigationMenu/components/Sidebar";
const DashboardLayout = () => {
  return (
    <>
        <Header />
  {/* <SidebarProvider>
      <DynamicSidebar /> */}
      <main className="flex-1 mt-17">
        {/* <SidebarTrigger /> */}
        {/* Your main content here */}
                  <Outlet />
      </main>
    {/* </SidebarProvider> */}

    </>
  );
};

export default DashboardLayout;

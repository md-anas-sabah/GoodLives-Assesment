import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function AppLayout() {
  return (
    <div className="flex flex-row font-lato h-screen">
      <div className="w-[288px]">
        <Sidebar />
      </div>
      <main className="flex-1 h-screen overflow-y-auto bg-[#F2F5FA]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

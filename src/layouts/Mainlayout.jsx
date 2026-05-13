import "../assets/tailwind.css";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#F5F6FA] flex">
      

      {/* CONTENT */}
      <div className="flex-1 flex flex-col">
        
        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
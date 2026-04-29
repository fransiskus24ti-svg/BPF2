import "./assets/tailwind.css";
import Sidebar from "./layouts/sidebar";
import Header from "./layouts/header";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/Order";
import Customers from "./pages/Customer";
import { Route,Routes } from "react-router-dom";
import NotFound from "./pages/Notfound";

function App() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

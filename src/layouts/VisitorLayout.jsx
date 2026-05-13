import React from "react";
import Navbar from "../components/visitor/Navbar";
import Footer from "../components/visitor/Footer";

const VisitorLayout = ({ children }) => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default VisitorLayout;
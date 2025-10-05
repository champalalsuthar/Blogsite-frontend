import { Outlet } from "react-router-dom";
import "./App.css"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[60vh] " id="detail">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

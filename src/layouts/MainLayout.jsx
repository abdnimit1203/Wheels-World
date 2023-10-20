import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
        <Toaster
          toastOptions={{
            success: {
              duration: 4000,
              style: {
                background: "#40D861",
                color: "white",
              },
            },
            error: {
              style: {
                background: "#ff4f38",
                color: "white",
              },
            },
          }}
        />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;

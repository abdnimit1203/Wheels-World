import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
        <div>
            <Navbar></Navbar>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
        <div>
            <Footer></Footer>
        </div>
        </>
    );
};

export default MainLayout;
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
        <div>
            navbar
        </div>
        <div>
            <Outlet></Outlet>
        </div>
        <div>
            footer
        </div>
        </>
    );
};

export default MainLayout;
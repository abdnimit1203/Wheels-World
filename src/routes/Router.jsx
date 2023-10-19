import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../pages/AddProducts";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Accessories from "../pages/Accessories";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=>fetch("http://localhost:3000/brands")
         
        },
        {
          path: "/add-products",
          element:<PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
        },
        {
          path: "/accessories",
          element:<Accessories></Accessories>
        },
        {
          path: "/my-cart",
          element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        },
        {
          path: "/login",
          element: <Login></Login>
  
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
  
        }
      ],
    },
  ]);
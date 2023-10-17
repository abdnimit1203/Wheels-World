import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../pages/AddProducts";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
         
        },
        {
          path: "/add-product",
          element:<AddProducts></AddProducts>
        },
        {
          path: "/my-cart",
          element: <MyCart></MyCart>,
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
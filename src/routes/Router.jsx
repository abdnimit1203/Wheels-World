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
import About from "../pages/About";
import SingleBrand from './../pages/SingleBrand';
import UpdateProduct from "../pages/UpdateProduct";
import Details from "../pages/Details";

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
          path: "/brands/:brandName",
          element:<PrivateRoutes><SingleBrand></SingleBrand></PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:3000/products/${params.brandName}`)

        },
        {
          path: "/models/:modelName",
          element:<PrivateRoutes><SingleBrand></SingleBrand></PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:3000/models/${params.modelName}`)

        },
        {
          path: "/update-product/:id",
          element:<PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:3000/products/single/${params.id}`)

        },
        {
          path: "/details/:id",
          element:<PrivateRoutes><Details></Details></PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:3000/products/single/${params.id}`)

        },
        {
          path: "/accessories",
          element:<Accessories></Accessories>
        },
        {
          path: "/about",
          element:<About></About>
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
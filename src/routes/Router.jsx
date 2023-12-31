import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../pages/AddProducts";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoutes";
import SingleBrand from './../pages/SingleBrand';
import UpdateProduct from "../pages/UpdateProduct";
import Details from "../pages/Details";
import Services from "../pages/Services";
import UserProfile from "../pages/UserProfile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=>fetch("https://abds-wheels-world-server.vercel.app/brands")
         
        },
        {
          path: "/add-products",
          element:<PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
        },
        {
          path: "/brands/:brandName",
          element:<PrivateRoutes><SingleBrand></SingleBrand></PrivateRoutes>,
          loader: ({params})=> fetch(`https://abds-wheels-world-server.vercel.app/products/${params.brandName}`)

        },
        {
          path: "/models/:modelName",
          element:<PrivateRoutes><SingleBrand></SingleBrand></PrivateRoutes>,
          loader: ({params})=> fetch(`https://abds-wheels-world-server.vercel.app/models/${params.modelName}`)

        },
        {
          path: "/update-product/:id",
          element:<PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
          loader: ({params})=> fetch(`https://abds-wheels-world-server.vercel.app/products/single/${params.id}`)

        },
        {
          path: "/details/:id",
          element:<PrivateRoutes><Details></Details></PrivateRoutes>,
          loader: ({params})=> fetch(`https://abds-wheels-world-server.vercel.app/products/single/${params.id}`)

        },
        {
          path: "/services",
          element:<Services></Services>
        },
        {
          path: "/user-profile",
          element:<PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
        },
        
        {
          path: "/my-cart",
          element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
          loader: ()=> fetch('https://abds-wheels-world-server.vercel.app/products/')
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
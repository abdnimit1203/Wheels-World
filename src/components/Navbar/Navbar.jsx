import { Link, useNavigate } from "react-router-dom";
import { setTheme } from "../../../public";
import { useContext, useState } from "react";
import { AuthContext } from "../../hooks/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [logo, setlogo] = useState("/images/logo.png");

  const toggleTheme = (theme) => {
    setTheme(theme);
    console.log(logo);
  };

  //signout
  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        alert("Sign Out Success")
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navlinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>{" "}
      </li>
      <li>
        <Link to={"/add-products"}>Add Products</Link>{" "}
      </li>
      <li>
        <Link to={"/accessories"}>Accessories</Link>{" "}
      </li>

      <li>
        <Link to={"/"}>About</Link>{" "}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 bg-base-100 p-2 shadow  text-base rounded-box w-52 font-semibold"
          >
            {navlinks}
          </ul>
        </div>
        <img src={logo} alt="logo" className="w-24" />
        <h2 className="uppercase text-xl font-black">Wheels World</h2>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1 font-bold uppercase ">{navlinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        <Link to={"/my-cart"}>
          <button className="btn rounded-ee-none rounded-ss-none btn-primary">
            My Cart
          </button>
        </Link>
        {user ? (
          <div>
            {" "}
            <p>user.email</p>
            <button
              className="btn btn-xs rounded-xl btn-error"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="btn rounded-ee-none rounded-ss-none btn-secondary">
              Login
            </button>
          </Link>
        )}
        {/* theme */}
        <div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <svg
              onClick={() => {
                toggleTheme("dark");
                setlogo("/images/logoDark.png");
              }}
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              onClick={() => {
                toggleTheme("");
                setlogo("/images/logo.png");
              }}
              className="swap-off fill-current w-10 h-10 text-amber-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

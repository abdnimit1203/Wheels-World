import { Link } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>{" "}
      </li>
      <li>
        <Link to={"/add-products"}>Add Products</Link>{" "}
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end gap-2">
      <Link to={"/my-cart"}>
        <button className="btn rounded-ee-none rounded-ss-none btn-primary">My Cart</button>
        </Link>
      <Link to={"/login"}>
        <button className="btn rounded-ee-none rounded-ss-none btn-secondary">Login</button>
        </Link>
       
      </div>
    </div>
  );
};

export default Navbar;

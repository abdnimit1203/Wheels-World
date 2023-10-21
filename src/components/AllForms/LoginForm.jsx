import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthProvider";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import toast from "react-hot-toast";

const LoginForm = () => {
  const location = useLocation();
  console.log(location);
  const { user, emailLogin, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const notifyLoginSuccess = () => toast.success("Login Successfull!");
  const notifyLoginError = (err) => toast.error(`${err}`);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {
      email,
      password,
    };
    console.log(userData);

    if (!user) {
      emailLogin(email, password)
        .then((result) => {
          console.log(result.user);
          notifyLoginSuccess();
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          const errMessage = error.message;
          notifyLoginError(errMessage);
        });
    } else {
      console.log("Already Logged in");
    }
  };
  const handleGoogleLogIn = () => {
    if (!user) {
      googleLogin()
        .then((res) => {
          console.log(res.user);
          notifyLoginSuccess();
          navigate(location?.state ? location.state : "/");
        })
        .catch();
    } else {
      toast.error("Sign out of other account first!");
    }
  };

  return (
    <>
      <div className="bg-[url('https://i.ibb.co/ZcWL28v/register-bg.jpg')] min-h-screen bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center p-10 text-white min-h-screen bg-[#0a055759] ">
          <form
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-mirror="true"
            data-aos-once="false"
            onSubmit={handleLogin}
            className="glass py-12 px-10 md:px-20 rounded-xl flex flex-col gap-4 w-fit md:mx-auto "
          >
            <h2 className="text-white text-4xl pt-10 text-center">Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-transparent border-b-2 p-2 mx-auto w-72 my-10 text-white outline-none placeholder-pink-100"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                className="bg-transparent border-b-2 p-2 mx-auto w-72 my-4 text-white outline-none placeholder-pink-100"
                placeholder="Enter password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 end-0 grid place-content-center px-4 text-red-400 text-xl cursor-pointer"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            <button
              type="submit"
              className="btn w-full rounded-sm btn-secondary mt-8"
            >
              Login
            </button>

            <p className="text-center">
              Dont have an account?{" "}
              <Link to={"/signup"} className="font-bold px-2 text-lg text-primary">
                Sign Up
              </Link>
            </p>
            <p className="text-center w-full pb-4">or</p>
            <button
              onClick={handleGoogleLogIn}
              type="button"
              className="flex justify-center items-center gap-4 bg-white text-black w-full px-4 py-1 rounded-sm"
            >
              <span>
                <img
                  src="https://i.ibb.co/syGPgLz/google-Logo.png"
                  alt="g logo"
                  className="w-10"
                />
              </span>
              Sign in with Google
            </button>
            <img src="" alt="" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

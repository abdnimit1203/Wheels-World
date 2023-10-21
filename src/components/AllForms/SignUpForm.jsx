import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthProvider";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import auth from "../../hooks/firebase.config";
import { updateProfile } from "firebase/auth";

const SignUpForm = () => {
  const { user, emailSignUp,googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [passError, setPassError] = useState(null);

  const notifyError = (err) =>
    toast.error(`${err}`, {
      style: {
        minWidth: "250px",
      },
    });
  const notifySignUpSuccess = () =>
    toast.success("Successfully created an account!");

  console.log(user);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    let photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {
      username,
      photo,
      email,
      password,
    };
    console.log(userData);

    if (password.length < 6) {
      setPassError("*password must be more than 6 characters");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPassError("*must have one capital letter");
    } else if (!/(?=.*[@$!%*?&])/.test(password)) {
      setPassError("*must contain a special character");
    } else {
      setPassError(null);
      if (photo == "") {
        photo = "images/userDef.jpg";
      }
      emailSignUp(email, password)
        .then((res) => {
          console.log(res.user);
          updateProfile(auth.currentUser, {
            displayName: username,
            photoURL: photo,
          })
            .then(() => {
              console.log("Profile updated!!");
              notifySignUpSuccess();
              navigate("/");
            })
            .catch((err) => {
              console.log(err.message);
            });
        })
        .catch((err) => {
          console.log(err.message);
          notifyError(err.message)
        });
    }
    
    
  };
  const handleGoogleLogIn = () => {
    if (!user) {
      googleLogin()
        .then((res) => {
          console.log(res.user);
          notifySignUpSuccess();
          navigate(location?.state ? location.state : "/")
        })
        .catch(error=>{
          // const errorCode = error.code;
          const errorMessage = error.message;
          notifyError(errorMessage)

    })
    } else {
      toast.error("Sign out of other account first!");
    }
  };

  return (
    <div className="bg-[url('https://i.ibb.co/fn9QB24/loginBG.jpg')] min-h-screen bg-center bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center p-10 text-white min-h-screen bg-[#02020a62] backdrop-blur-lg">
        <form
          onSubmit={handleSignUp}
          className="glass py-12 px-10 md:px-20 rounded-xl flex flex-col gap-4 w-fit md:mx-auto "
        >
          <h2 className="text-white text-4xl pt-10 text-center">Sign Up</h2>
          <input
            type="username"
            name="username"
            placeholder="Username"
            className="bg-transparent border-b-2 p-2 mx-auto w-72 my-4 text-white outline-none"
          />
          <input
            type="photo"
            name="photo"
            placeholder="Photo URL"
            className="bg-transparent border-b-2 p-2 mx-auto w-72 my-4 text-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-transparent border-b-2 p-2 mx-auto w-72 my-4 text-white outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="bg-transparent border-b-2 p-2 mx-auto w-72 my-4 text-white outline-none"
              placeholder="Enter password*"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 end-0 grid place-content-center px-4 text-red-400 text-xl cursor-pointer "
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <p>
            {passError ? (
              <p className="bg-red-600 rounded p-2 block ">{passError}</p>
            ) : (
              ""
            )}
          </p>
          <button type="submit" className="btn w-full rounded-sm btn-secondary">
            Sign Up
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="font-bold text-red-400">
              Login
            </Link>
          </p>
          <p className="text-center w-full pb-4">or</p>
          <button onClick={handleGoogleLogIn} type="button" className="flex justify-center items-center gap-4 bg-white text-black w-full px-4 py-1 rounded-sm">
            <span><img src="https://i.ibb.co/syGPgLz/google-Logo.png" alt="g logo" className="w-10"/></span>Sign in with Google</button>
        </form>
        
      </div>
    </div>
  );
};

export default SignUpForm;

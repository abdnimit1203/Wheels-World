import { Link } from "react-router-dom";

const SignUpForm = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {
      username,
      photo,
      email,
      password,
    };
    console.log(userData);
  };

  return (
    <div className="bg-[url('images/loginBG.jpg')] min-h-screen bg-center bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center p-10 text-white min-h-screen bg-[#02020a62] backdrop-blur-lg">
        <form
          onSubmit={handleSignUp}
          className="glass py-12 px-20 rounded-xl flex flex-col gap-4 w-fit mx-auto "
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
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-transparent border-b-2 p-2 mx-auto w-72 my-4 text-white outline-none"
          />
          <button type="submit" className="btn w-full rounded-sm btn-secondary">
            Sign Up
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="font-bold text-red-400">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

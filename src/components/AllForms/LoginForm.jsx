import { Link } from "react-router-dom";

const LoginForm = () => {
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
  };

  return (
    <div className="bg-[url('images/loginBG.jpg')] min-h-screen bg-center bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center p-10 text-white min-h-screen bg-[#0a055759] backdrop-blur-lg">
        <form
          onSubmit={handleLogin}
          className="glass py-12 px-20 rounded-xl flex flex-col gap-4 w-fit mx-auto "
        >
          <h2 className="text-white text-4xl pt-10 text-center">Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-transparent border-b-2 p-2 mx-auto w-72 my-10 text-white outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-transparent border-b-2 p-2  w-72 mx-auto mb-10 text-white outline-none"
          />
          <button type="submit" className="btn w-full rounded-sm btn-secondary">
            Login
          </button>
          <p className="text-center">
            Dont have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-primary flex-col">
      <Link>
        <button className="btn btn-secondary rounded-ee-none rounded-ss-none">Back to Home</button>
      </Link>
      <img src="/images/404.jpg" alt="404" className="max-w-xl" />
    </div>
  );
};

export default ErrorPage;

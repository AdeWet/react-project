import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero bg-base-200 h-svh -mt-16">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Whoopsie Daisy</h1>
          <p className="py-6">
            Sorry! The page you were looking for could not be found.
          </p>
          <Link className="btn btn-primary" to="">
            Go Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

import { Link } from "react-router-dom";
import { GenericError } from "../../interfaces/interfaces";

const GenericErrorPage = ({ error }: { error: GenericError }) => {
  return (
    <div className="hero bg-base-200 h-svh -mt-16">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{error.title}</h1>
          <p className="py-6">{error.message}</p>
          {error.buttonText && (
            <Link className="btn btn-primary" to="/">
              {error.buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenericErrorPage;

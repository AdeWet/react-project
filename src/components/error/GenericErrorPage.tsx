import { Link } from "react-router-dom";

export interface GenericError {
  title: string;
  message: string;
  buttonText: string;
}

const GenericErrorPage = ({ error }: { error: GenericError }) => {
  return (
    <div className="hero bg-base-200 h-svh -mt-16">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{error.title}</h1>
          <p className="py-6">{error.message}</p>
          <Link className="btn btn-primary" to="/">
            {error.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GenericErrorPage;

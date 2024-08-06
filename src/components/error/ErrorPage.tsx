import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h2>Whoopsie daisy</h2>
      <Link to="/">Go Back to Home Page</Link>
    </>
  );
};

export default ErrorPage;

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Woopsie daisy.</h1>
      <Link to="/">Go To Home Page</Link>
    </>
  );
};

export default ErrorPage;

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="browse">Browse</Link>
      <Link to="cart">Cart</Link>
      <Outlet />
    </>
  );
}

export default App;

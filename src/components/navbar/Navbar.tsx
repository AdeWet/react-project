import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 navbar bg-secondary text-secondary-content">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <Link
          aria-label="Go to home page"
          className="text-secondary-content text-xl"
          to={"browse"}
        >
          spendalot
        </Link>
      </div>
      <div className="navbar-end">
        <Link aria-label="Go to cart" to={"cart"}>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaShoppingCart className="size-6" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

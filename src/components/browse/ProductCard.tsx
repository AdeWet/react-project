import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { priceInRands } from "../../utils";

const ProductCard = ({
  id,
  image,
  title,
  price,
  handleAddToCart,
}: {
  id: number;
  image: string;
  title: string;
  price: number;
  handleAddToCart: () => void;
}) => {
  const handleAddtoCartHere = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleAddToCart();
  };

  return (
    <Link key={id} to={`browse/${id}`}>
      <div className="card card-compact bg-base-100 shadow-xl border hover:border-primary">
        <figure className="bg-white">
          <img
            className="h-52 p-4 self-end object-scale-down"
            src={image}
            alt="Product"
          />
        </figure>
        <div className="card-body">
          <p className="text-base font-medium truncate">{title}</p>
          <div className="card-actions justify-end">
            <p className="text-2xl font-bold self-center">
              {priceInRands(price)}
            </p>
            <button className="btn btn-primary" onClick={handleAddtoCartHere}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

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
    <Link key={id} to={`${id}`}>
      <div className="card card-compact bg-base-100 w-96 h-96 shadow-xl">
        <figure>
          <img src={image} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-end">
            <p>{priceInRands(price)}</p>
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

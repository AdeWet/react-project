import { priceInRands } from "../../utils";

const ProductCard = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: number;
}) => {
  const handleAddToCart = () => {};

  return (
    <div className="card card-compact bg-base-100 w-96 h-96 shadow-xl">
      <figure>
        <img src={image} alt="Product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <p>{priceInRands(price)}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

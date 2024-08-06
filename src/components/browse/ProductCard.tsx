const ProductCard = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: number;
}) => {
  return (
    <div className="card card-compact bg-base-100 w-96 h-96 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <p>R{price}</p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

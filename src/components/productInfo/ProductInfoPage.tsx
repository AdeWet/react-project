import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductInformation } from "../../api/fakestoreApi";

const ProductInfoPage = () => {
  const { productId } = useParams();
  const query = useQuery({
    queryKey: [productId],
    queryFn: () => getProductInformation(productId),
  });

  return (
    <div>
      <div className="card bg-base-100">{query.data?.description}</div>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
};

export default ProductInfoPage;

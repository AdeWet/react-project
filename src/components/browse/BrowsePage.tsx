import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/productsApi";

const BrowsePage = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <>
      <div>
        {query.data?.map((product) => (
          <button>{product.title}</button>
        ))}
      </div>
    </>
  );
};

export default BrowsePage;

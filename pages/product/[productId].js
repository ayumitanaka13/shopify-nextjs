import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  return <div>product page : {productId}</div>;
};
export default ProductPage;

// ("http://localhost:3000/product/123");

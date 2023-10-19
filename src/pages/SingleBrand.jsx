import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/Cards/ProductCard";

const SingleBrand = () => {
  const brandData = useLoaderData();
  console.log(brandData);

  return (
    <div className="glass">
      {brandData.length ===0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1>OPSS NO DATA</h1>
        </div>
      ) : (
        <div>
          <div>
          <h1>{brandData.length}</h1>
          <h2>This is a single Brand Page</h2>
          <h3>Banner will be here</h3>
          </div>
          <div>

          </div>
          <div className="grid grid-cols-1 w-[80%] mx-auto py-16 gap-6">
            {
                brandData?.map(product=> <ProductCard key={product._id} product={product}></ProductCard>)
            }
           
          </div>
        </div>

      )}
    </div>
  );
};

export default SingleBrand;

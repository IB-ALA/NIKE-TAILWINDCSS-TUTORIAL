import { useEffect } from "react";
import { useProduct } from "../../../hooks/useProduct";
import { ProductControls, ProductImages } from "./sections";

function ProductDetailsPage() {
  const { productDetails, setProductDetails } = useProduct();

  // useEffect(() => {
  //   console.log(productDetails);
  // }, []);

  return (
    <main className="pt-32 dark:bg-[hsl(0,0%,5%)] text-dark-2 min-h-screen relative">
      {productDetails && (
        <article className="padding-x border">
          <div className="border border-blue-600 max-w-lg">
            <section className="">
              <ProductImages
                defaultImage={productDetails?.image}
                varieties={productDetails?.productDetails?.colors}
              />
            </section>

            <section className="">
              <ProductControls
                productId={productDetails?.id}
                productSizes={productDetails?.sizes}
              />
            </section>
          </div>
        </article>
      )}
    </main>
  );
}

export default ProductDetailsPage;

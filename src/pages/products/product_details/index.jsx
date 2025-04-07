import { useEffect } from "react";
import { useProduct } from "../../../hooks/useProduct";
import { ProductControls, ProductImages, ProductInfo } from "./sections";
import CopyrightFooter from "../../../components/copyrightFooter";

function ProductDetailsPage() {
  const { productDetails } = useProduct();

  // useEffect(() => {
  //   console.log(productDetails);
  // }, []);

  return (
    <main className="pt-32 padding-x dark:bg-[hsl(0,0%,5%)] text-dark-2 min-h-screen relative">
      {productDetails && (
        <article className="flex justify-between gap-5 p-9 rounded-2xl shadow-3xl">
          <div className="w-full max-w-lg">
            <section>
              <ProductImages
                defaultImage={productDetails?.image}
                varieties={productDetails?.productDetails?.colors}
              />
            </section>

            <section>
              <ProductControls
                productId={productDetails?.id}
                productSizes={productDetails?.sizes}
              />
            </section>
          </div>

          <div className="w-full max-w-2xl">
            <ProductInfo
              productName={productDetails?.name}
              productPrice={productDetails?.price}
              productDescription={productDetails?.productDetails?.description}
            />
          </div>
        </article>
      )}

      <article className="mt-10 padding-x">
        <CopyrightFooter />
      </article>
    </main>
  );
}

export default ProductDetailsPage;

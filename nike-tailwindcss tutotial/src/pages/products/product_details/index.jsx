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
    <main className="sm:pt-32 pt-16 padding-x dark:bg-[hsl(0,0%,5%)] text-dark-2 min-h-screen relative">
      {productDetails && (
        <article className="flex justify-between gap-5 sm:p-9 p-6 rounded-2xl shadow-3xl bg-dark-1 lg:flex-row lg:items-start flex-col-reverse items-center">
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

          <div className="w-full max-w-2xl mb-5">
            <ProductInfo
              productName={productDetails?.name}
              productPrice={productDetails?.price}
              productDescription={productDetails?.productDetails?.description}
            />
          </div>
        </article>
      )}

      <article className="mt-10 ">
        <CopyrightFooter />
      </article>
    </main>
  );
}

export default ProductDetailsPage;

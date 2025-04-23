import { useEffect } from "react";
import { useProduct } from "../../../hooks/useProduct";
import { ProductControls, ProductImages, ProductInfo } from "./sections";
import CopyrightFooter from "../../../components/copyrightFooter";
import Spinner from "../../../components/spinner";

function ProductDetailsPage() {
  const { productDetails } = useProduct();

  const { products, error, isLoading, fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
    // console.log(productDetails);
  }, []);

  // useEffect(() => {
  //   console.log({ productDetails });
  // }, [productDetails]);

  return (
    <main className="sm:pt-32 pt-16 padding-x dark:bg-[hsl(0,0%,5%)] text-dark-2 min-h-screen relative">
      {products?.length > 0 && productDetails && (
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

      {isLoading && (
        <div className="w-full flex justify-center">
          <Spinner />
        </div>
      )}

      {products.length < 1 && !isLoading && (
        <div className="w-full flex items-center justify-center">
          <p className="text-coral-red text-xl font-montserrat">
            Couldn't get product details. Try again later.
          </p>
        </div>
      )}

      <article className="mt-10 ">
        <CopyrightFooter />
      </article>
    </main>
  );
}

export default ProductDetailsPage;

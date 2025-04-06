import { useProduct } from "../../../hooks/useProduct";
import { ProductImages } from "./sections";

function ProductDetailsPage() {
  const { productDetails, setProductDetails } = useProduct();

  return (
    <main className="pt-32 dark:bg-[hsl(0,0%,5%)] text-dark-2 min-h-screen relative">
      {productDetails && (
        <article className="padding-x">
          <section className="">
            <ProductImages
              defaultImage={productDetails?.image}
              varieties={productDetails?.productDetails?.colors}
            />
          </section>
        </article>
      )}
    </main>
  );
}

export default ProductDetailsPage;

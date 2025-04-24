import { useProduct } from "../../../hooks/useProduct";
import { Footer, ProductList } from "./sections";
import Spinner from "../../../components/spinner";
import { useEffect } from "react";

function ProductListPage() {
  const { products, isLoading, fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="sm:pt-32 pt-16 dark:bg-[hsl(0,0%,5%)] text-dark-2 min-h-screen relative">
      <section className="padding-x">
        <h2 className="sm:text-4xl text-3xl font-palanquin font-bold mb-4">
          <span className="text-coral-red">Available</span> Products
        </h2>
      </section>

      <section className="padding-x pt-7 pb-40">
        {isLoading && (
          <div className="w-full flex justify-center">
            <Spinner />
          </div>
        )}

        {products.length > 0 && <ProductList products={products} />}

        {products.length < 1 && !isLoading && (
          <div className="w-full flex items-center justify-center">
            <p className="text-coral-red text-xl font-montserrat">
              No products available. Try again later.
            </p>
          </div>
        )}
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}

export default ProductListPage;

import { Footer, ProductList } from "./sections";

function ProductListPage() {
  return (
    <main className="pt-32 dark:bg-[hsl(0,0%,5%)] text-dark-2 min-h-screen relative">
      <section className="padding-x">
        <h2 className="text-4xl font-palanquin font-bold mb-4">
          <span className="text-coral-red">Available</span> Products
        </h2>
      </section>

      <section className="padding-x pt-7 pb-40">
        {/* we will need the loading feature here */}
        <ProductList />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
}

export default ProductListPage;

import { ProductList } from "./sections";

function ProductListPage() {
  return (
    <main className="pt-32 dark:bg-[hsl(0,0%,5%)] text-dark-2">
      <section className="padding-x">
        <h2 className="text-4xl font-palanquin font-bold mb-4">
          <span className="text-coral-red">Available</span> Products
        </h2>
      </section>

      <section className="padding-x py-7">
        <ProductList />
      </section>
    </main>
  );
}

export default ProductListPage;

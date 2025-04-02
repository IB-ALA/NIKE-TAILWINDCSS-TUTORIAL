import { ProductList } from "./sections";

function ProductListPage() {
  return (
    <main className="pt-32">
      <section className="padding-x">
        <h2 className="text-4xl font-palanquin font-bold border border-slate-600">
          <span className="text-coral-red">Available</span> Products
        </h2>
      </section>

      <section className="padding-x py-5 border border-slate-700">
        <ProductList />
      </section>
    </main>
  );
}

export default ProductListPage;

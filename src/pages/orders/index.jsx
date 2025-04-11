import { Orders } from "./sections";

function OrdersPage() {
  // allow access for registed users only

  return (
    <main className="pt-32 dark:bg-[hsl(0,0%,5%)] text-dark-2 min-h-screen relative">
      <section className="padding-x">
        <h2 className="text-4xl font-palanquin font-bold mb-4 text-center">
          <span className="text-coral-red">Order</span> History
        </h2>
      </section>

      <section className="padding">
        <Orders />
      </section>
    </main>
  );
}

export default OrdersPage;

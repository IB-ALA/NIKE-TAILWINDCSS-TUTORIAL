import { Orders } from "./sections";
import CopyrightFooter from "./../../components/copyrightFooter";

function OrdersPage() {
  // allow access for registed users only

  return (
    <main className="sm:pt-32 pt-16 dark:bg-[hsl(0,0%,5%)] text-dark-2 min-h-screen relative font-montserrat">
      <section className="padding-x">
        <h2 className="sm:text-4xl text-2xl font-palanquin font-bold mb-4 sm:text-center">
          <span className="text-coral-red">Order</span> History
        </h2>
      </section>

      <section className="sm:padding padding-x pt-4">
        <Orders />
      </section>

      <section className="padding-x absolute bottom-0 w-full">
        <CopyrightFooter />
      </section>
    </main>
  );
}

export default OrdersPage;

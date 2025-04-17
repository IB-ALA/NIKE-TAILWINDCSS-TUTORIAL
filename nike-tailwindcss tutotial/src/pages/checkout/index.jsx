import React from "react";

import { CheckoutForm } from "./sections";
import CopyrightFooter from "../../components/copyrightFooter";

function CheckoutPage() {
  return (
    <main className="sm:pt-32 pt-16 min-h-screen relative dark:bg-[hsl(0,0%,5%)] text-dark-2  font-montserrat bg-white padding-x text-gray-800">
      <section>
        <h2 className="lg:text-4xl sm:text-3xl text-2xl font-palanquin font-bold mb-4 text-coral-red">
          Checkout
        </h2>
      </section>

      <article>
        <CheckoutForm />
      </article>

      <section className="mt-10">
        <CopyrightFooter />
      </section>
    </main>
  );
}

export default CheckoutPage;

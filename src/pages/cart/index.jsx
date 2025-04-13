import React from "react";
import { CartItems, CartSummary } from "./sections";
import CopyrightFooter from "../../components/copyrightFooter";

function CartPage() {
  return (
    <main className="sm:pt-32 pt-16 pb-6 padding-x dark:bg-[hsl(0,0%,5%)] text-dark-2 relative min-h-screen font-montserrat">
      <h1 className="text-4xl font-bold text-coral-red mb-6">Shopping Cart</h1>

      <section>
        <CartItems />
      </section>

      <section>
        <CartSummary />
      </section>

      <section className="pt-14">
        <CopyrightFooter />
      </section>
    </main>
  );
}

export default CartPage;

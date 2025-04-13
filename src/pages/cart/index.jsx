import React from "react";
import { CartItems, CartSummary } from "./sections";

function CartPage() {
  return (
    <main className="sm:pt-32 pt-16 dark:bg-[hsl(0,0%,5%)] text-dark-2 relative   px-6 pb-6 md:px-10 bg-white min-h-screen font-montserrat">
      <h1 className="text-4xl font-bold text-coral-red mb-6">Shopping Cart</h1>

      <section>
        <CartItems />
      </section>

      <section>
        <CartSummary />
      </section>
    </main>
  );
}

export default CartPage;

import React from "react";
import { CartItems, CartSummary } from "./sections";
import CopyrightFooter from "../../components/copyrightFooter";
import { useCart } from "../../hooks/useCart";

function CartPage() {
  const { findCartTotalItems } = useCart();
  return (
    <main className="sm:pt-32 pt-16 pb-28 max-sm:pb-16 padding-x dark:bg-[hsl(0,0%,5%)] text-dark-2 relative min-h-screen font-montserrat">
      <section>
        <h2 className="sm:text-4xl text-2xl font-palanquin font-bold mb-4">
          Shopping <span className="text-coral-red">Cart</span>
        </h2>
      </section>

      <section className={findCartTotalItems() < 1 ? "max-sm:mt-32" : ""}>
        <CartItems />
      </section>

      {findCartTotalItems() > 0 && (
        <section>
          <CartSummary />
        </section>
      )}

      <section className="absolute bottom-0 sm:left-10 sm:right-10 left-2 right-2">
        <CopyrightFooter />
      </section>
    </main>
  );
}

export default CartPage;

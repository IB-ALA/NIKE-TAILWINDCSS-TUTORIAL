import { Link } from "react-router-dom";
import CartItemCard from "../../../components/cartItemCard";
import { useCart } from "../../../hooks/useCart";

function CartItems() {
  const { cartItems } = useCart();

  return (
    <section className="pt-10 pb-3">
      {cartItems && cartItems?.length > 0 ? (
        cartItems?.map((item) => <CartItemCard key={item?.id} item={item} />)
      ) : (
        <p className="text-center text-coral-red sm:text-[20px] text-[15px] padding-y">
          No Orders Placed.
          <Link
            to={"/products"}
            className="ml-1 hover:underline hover:underline-offset-1 max-sm:underline max-sm:underline-offset-1 transition-all hover:text-red-500"
          >
            Visit Our Store To Shop.
          </Link>
        </p>
      )}
    </section>
  );
}

export default CartItems;

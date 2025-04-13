import { Link } from "react-router-dom";
import CartItemCard from "../../../components/cartItemCard";
import { useCart } from "../../../hooks/useCart";

function CartItems() {
  const { cartItems } = useCart();

  return (
    <section className="py-10">
      {cartItems && cartItems?.length > 0 ? (
        cartItems?.map((item) => <CartItemCard key={item?.id} item={item} />)
      ) : (
        <p className="text-center text-coral-red text-[20px] padding-y">
          No Orders Placed.
          <Link
            to={"/products"}
            className="ml-1 hover:underline hover:underline-offset-1 transition-all hover:text-red-500"
          >
            Visit Our Store To Shop.
          </Link>
        </p>
      )}
    </section>
  );
}

export default CartItems;

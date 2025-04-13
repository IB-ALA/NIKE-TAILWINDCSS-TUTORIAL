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
        <p className="ml-3 my-2 p-2 shadow-2xl rounded-md text-center text-coral-red text-[16px] dark:bg-slate-950">
          No Orders Placed.
          <Link to={"/products"}>Visit Our Store To Shop.</Link>
        </p>
      )}
    </section>
  );
}

export default CartItems;

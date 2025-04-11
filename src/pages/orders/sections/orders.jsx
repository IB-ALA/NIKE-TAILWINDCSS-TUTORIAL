import { Link } from "react-router-dom";
import OrderCard from "../../../components/orderCard";
import { useOrders } from "../../../hooks/useOrders";

function Orders() {
  const { orders } = useOrders();

  return (
    <section>
      {orders && orders.length > 0 ? (
        <div className="pb-32">
          {orders?.map((order) => (
            <OrderCard order={order} key={order?.orderID} />
          ))}
        </div>
      ) : (
        <p className="ml-3 my-2 p-2 sm:shadow-2xl sm:rounded-md text-center text-coral-red sm:text-[16px] text-[14px] sm:dark:bg-slate-950">
          No Orders Placed.
          <Link to={"/products"} className="ml-1 text-coral-full">
            Visit Our Store To Shop.
          </Link>
        </p>
      )}
    </section>
  );
}

export default Orders;

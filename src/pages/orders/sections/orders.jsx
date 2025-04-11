import OrderCard from "../../../components/orderCard";
import { useOrders } from "../../../hooks/useOrders";

function Orders() {
  const { orders } = useOrders();

  return (
    <section className=" bg-dark-1">
      {orders && orders.length > 0 ? (
        <div className="">
          {orders?.map((order) => (
            <OrderCard order={order} key={order?.orderID} />
          ))}
        </div>
      ) : (
        <div className="">No orders available</div>
      )}
    </section>
  );
}

export default Orders;

import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import OrderItemCard from "../orderItemCard";

function Orders({ showList, setShowList }) {
  const { orders } = useUser();
  return (
    <div
      // if you want the release animation you have to sacrifice the shadow
      // ${ showList === "orders" ? "animate-release" : "overflow-hidden"}
      className={`border-b last:mb-0 mb-1 border-b-slate-100 dark:border-slate-800`}
    >
      <p
        className={`cursor-pointer p-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-950 info-text ${
          showList === "orders" ? "bg-slate-100 dark:bg-slate-900" : ""
        }`}
        onClick={() => {
          showList === "orders" ? setShowList(null) : setShowList("orders");
        }}
      >
        Orders
      </p>

      {showList === "orders" ? (
        orders?.length > 0 ? (
          <div className="ml-3 dark:border dark:border-slate-900 my-2 p-2 shadow-3xl rounded-md flex flex-col gap-3 bg-dark-1 dark:shadow-[#58565664]">
            {orders?.map((order) => (
              <OrderItemCard key={order?.orderID} order={order} />
            ))}
          </div>
        ) : (
          <p className="ml-3 my-2 p-2 shadow-2xl rounded-md text-center text-coral-red text-[16px] dark:bg-slate-950">
            No Orders Placed.
            <Link to={"/products"}>Visit Our Store To Shop.</Link>
          </p>
        )
      ) : null}
    </div>
  );
}

export default Orders;

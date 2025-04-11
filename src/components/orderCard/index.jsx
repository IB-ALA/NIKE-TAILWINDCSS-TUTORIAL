import { formatCurrency } from "../../shared";
import OrderItemCard from "../orderItemCard";

function OrderCard({ order }) {
  const { orderID, orderDate, status, total, orderItems } = order;
  return (
    <div className="flex flex-col justify-between sm:p-9 p-3 sm:gap-2 gap-1 rounded-2xl shadow-3xl sm:mb-10 mb-5 last:mb-0 max-w-3xl mx-auto bg-dark-1 dark:shadow-[#31313164]">
      <div
        className={`flex justify-between sm:p-4 p-3 ${
          status === "delivered"
            ? "bg-green-100 dark:bg-green-300"
            : status === "canceled"
            ? "bg-red-200 dark:bg-red-300"
            : "bg-[#ebebeb] dark:bg-[hsl(0,0%,75%)]"
        } rounded-xl sm:mb-4 mb-3`}
      >
        <div>
          <p className="uppercase font-bold text-[0.7rem] text-[#595959] mb-2">
            id:{" "}
            <span className="text-[#737373] capitalize text-[0.85rem] font-normal">
              {orderID}
            </span>
          </p>

          <p className="uppercase font-bold text-[0.7rem] text-[#595959]">
            date:{" "}
            <span className="text-[#737373] capitalize text-[0.85rem] font-normal">
              {orderDate.slice(0, 10)}
            </span>
          </p>
        </div>

        <div>
          <p className="uppercase font-bold text-[0.7rem] text-[#595959] mb-2">
            total:{" "}
            <span className="text-[#737373] capitalize text-[0.85rem] font-normal">
              ₵{formatCurrency(total)}
            </span>
          </p>
          <p className="uppercase font-bold text-[0.7rem] text-[#595959]">
            status:{" "}
            <span className="text-[#737373] capitalize text-[0.85rem] font-normal">
              {status}
            </span>
          </p>
        </div>
      </div>

      {/* {orderItems ? (
        <div className="text-lg text-coral-red">
          {orderItems?.length > 1 ? "Items" : "Item"}
        </div>
      ) : null} */}

      <div className="border dark:border-slate-800  bottom-[#f2f2f2] p-3 rounded-md">
        {orderItems?.map((orderItem) => (
          <OrderItemCard key={orderItem?.id} orderItem={orderItem} />
        ))}
      </div>
    </div>
  );
}

export default OrderCard;

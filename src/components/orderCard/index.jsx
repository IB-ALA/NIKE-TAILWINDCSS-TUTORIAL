import { formatCurrency } from "../../shared";
import OrderItemCard from "../orderItemCard";

function OrderCard({ order }) {
  const { orderID, orderDate, status, total, orderItems } = order;
  // ${orderDate.slice(0, 10)}
  return (
    <div className="flex flex-col justify-between p-9 rounded-2xl shadow-3xl mb-10 last:mb-0 max-w-3xl mx-auto">
      <div className="flex justify-between py-3 px-2 bg-[#ebebeb]">
        <div>
          <p className="uppercase font-bold text-[0.7rem] text-[#595959]">
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
          <p className="uppercase font-bold text-[0.7rem] text-[#595959]">
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

      <div className="border border-t-0 bottom-[#f2f2f2] p-2 rounded-b-md">
        {orderItems?.map((orderItem) => (
          <OrderItemCard key={orderItem?.id} orderItem={orderItem} />
        ))}
      </div>
    </div>
  );
}

export default OrderCard;

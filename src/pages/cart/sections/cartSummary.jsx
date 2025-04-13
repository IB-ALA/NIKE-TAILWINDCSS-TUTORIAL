import { useNavigate } from "react-router-dom";
import CommonButton from "../../../components/commonButton";
import { useCart } from "../../../hooks/useCart";
import { formatCurrency } from "../../../shared";

function CartSummary() {
  const { findCartTotalAmount, findCartTotalItems } = useCart();
  const navigate = useNavigate();

  return (
    <section className="flex justify-between items-center mt-5 text-lg font-medium border-t dark:border-t-slate-800  pt-5 px-2">
      <p>
        {findCartTotalItems()} item{findCartTotalItems() > 1 && "s"}
      </p>

      <div className="flex gap-6 items-center">
        <p>Total: ₵{formatCurrency(findCartTotalAmount())}</p>

        <CommonButton
          btnText={"Checkout"}
          btnTitle={"Checkout"}
          className={
            "bg-coral-red transition-colors text-white px-5 py-2 rounded-lg hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-70"
          }
          handleOnClick={() => navigate("/checkout")}
          disabled={findCartTotalItems() === 0}
        />
      </div>
      {/* </div> */}
    </section>
  );
}

export default CartSummary;

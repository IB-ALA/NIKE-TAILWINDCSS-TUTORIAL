import { useNavigate } from "react-router-dom";
import CommonButton from "../../../components/commonButton";
import { useCart } from "../../../hooks/useCart";
import { formatCurrency } from "../../../shared";

function CartSummary() {
  const { findCartTotalAmount, findCartTotalItems } = useCart();
  const navigate = useNavigate();

  return (
    <section className="flex max-sm:flex-col justify-between items-center mt-5 text-lg font-medium border-t dark:border-t-slate-800 sm:pt-5 pt-1 sm:px-2">
      <div className="flex info-text justify-between gap-6 items-center w-full sm:pr-4 max-sm:mb-2 max-sm:px-2">
        <p>
          {findCartTotalItems()} item{findCartTotalItems() > 1 ? "s" : ""}
        </p>

        <p>Total: ₵{formatCurrency(findCartTotalAmount())}</p>
      </div>

      <CommonButton
        btnText={"Checkout"}
        btnTitle={"Checkout"}
        className={
          "bg-coral-red transition-colors text-white px-5 py-2 rounded-lg hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-70 max-sm:w-full"
        }
        handleOnClick={() => navigate("/checkout")}
        disabled={findCartTotalItems() === 0}
      />
    </section>
  );
}

export default CartSummary;

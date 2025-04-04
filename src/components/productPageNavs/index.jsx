import { useNavigate } from "react-router-dom";
import CommonButton from "../commonButton";
import { useContext } from "react";
import { GlobalContext } from "../../context";

function ProductPageNavs() {
  const { registeredUser } = useContext(GlobalContext);

  const navigate = useNavigate();
  return (
    <div className="flex">
      <div
        className="relative cursor-pointer"
        onClick={() => navigate("/cart")}
      >
        <CommonButton
          btnText={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="33px"
              height="33px"
              className="fill-coral-red"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"></path>
            </svg>
          }
          className={"border-none"}
        />
        <p className="bg-coral-red px-[5px] py-[3px] rounded-full flex justify-center items-center text-[12px] font-bold text-white absolute bottom-[5px] left-5 leading-none max-w-8">
          0
        </p>
      </div>

      {registeredUser && (
        <div className="ml-3">
          <CommonButton
            btnText={"B"}
            className={
              "bg-coral-red w-9 h-9 rounded-full flex justify-center items-center font-bold text-white"
            }
          />
        </div>
      )}
    </div>
  );
}

export default ProductPageNavs;

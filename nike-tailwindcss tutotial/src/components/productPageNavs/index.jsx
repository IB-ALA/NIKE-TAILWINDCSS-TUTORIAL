import { useLocation, useNavigate } from "react-router-dom";
import CommonButton from "../commonButton";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context";
import SideBar from "../sideBar";
import { useCart } from "../../hooks/useCart";

function ProductPageNavs() {
  const [showSideBar, setShowSideBar] = useState(false);
  const { registeredUser } = useContext(GlobalContext);
  const { findCartTotalItems } = useCart();

  const location = useLocation();
  useEffect(() => {
    setShowSideBar(false);
  }, [location]);

  const navigate = useNavigate();
  return (
    <div className="flex">
      <div
        className="relative cursor-pointer flex"
        onClick={() => navigate("/cart")}
      >
        <CommonButton
          btnText={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="33px"
              height="33px"
              className="sm:w-[33px] w-[25px] sm:h-[33px] h-[25px] fill-coral-red"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"></path>
            </svg>
          }
          className={"border-none"}
        />
        <p className="bg-coral-red px-[5px] py-[3px] rounded-full flex justify-center items-center text-[12px] sm:font-bold text-white absolute sm:bottom-[1px] sm:left-4 -bottom-[2px] left-3 leading-none max-w-8">
          {findCartTotalItems()}
        </p>
      </div>

      {registeredUser && (
        <div className="ml-3">
          <CommonButton
            btnText={"B"}
            className={
              "bg-coral-red sm:w-9 sm:h-9 w-6 h-6 rounded-full flex justify-center items-center sm:font-bold text-white sm:text-base text-xs"
            }
            handleOnClick={() => setShowSideBar(!showSideBar)}
          />

          <div className="">
            <SideBar
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPageNavs;

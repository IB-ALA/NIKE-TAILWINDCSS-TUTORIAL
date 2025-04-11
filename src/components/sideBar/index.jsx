import { useState } from "react";
import useUser from "../../hooks/useUser";
import CommonButton from "../commonButton";
import WishList from "../wishList";
import DeliveryDetails from "../deliveryDetails";
import BillingDetails from "../billingDetails";
import Orders from "../orders";
import { useNavigate } from "react-router-dom";

function SideBar({ showSideBar, setShowSideBar }) {
  const [showList, setShowList] = useState(null);
  const { registeredUser } = useUser();
  const navigate = useNavigate();

  return (
    <div
      className={`fixed ${
        showSideBar === true
          ? "sm:w-[90%] w-[88%] max-w-lg transition-400 sm:top-20 top-10 bottom-0 right-8 sm:right-16"
          : "w-0 h-0"
      } overflow-hidden border border-slate-50 shadow-2xl bg-white rounded-l-2xl dark:border-slate-800 dark:bg-[hsl(0,0%,5%)]`}
    >
      <div className="relative w-full h-full font-montserrat rounded-l-2xl">
        <div className="rounded-t-2xl absolute top-0 left-0 right-0 p-2 flex justify-between shadow-md  dark:border-b dark:border-b-slate-900">
          <p className="sm:text-lg text-md font-bold text-coral-red">
            {registeredUser?.name}
          </p>
          <p className="sm:text-base text-sm text-slate-gray">
            {registeredUser?.email}
          </p>
        </div>

        <div className="absolute top-10 bottom-14 p-2 overflow-y-scroll w-full">
          <WishList showList={showList} setShowList={setShowList} />

          <DeliveryDetails
            showList={showList}
            setShowList={setShowList}
            deliveryDetails={registeredUser?.deliveryDetails}
          />

          <BillingDetails
            showList={showList}
            setShowList={setShowList}
            billingDetails={registeredUser?.billingDetails}
          />

          <div className="border-b last:mb-0 mb-1 border-b-slate-100 dark:border-slate-800">
            <CommonButton
              btnText={"Orders"}
              btnTitle={"See order history"}
              className={
                "cursor-pointer p-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-950 sm:info-text text-md text-slate-gray active:bg-slate-100 dark:active:bg-slate-900 w-full text-start hover:underline transition-all"
              }
              handleOnClick={() => navigate("/orders")}
            />
          </div>
        </div>

        <div className="absolute rounded-b-2xl border-t border-slate-100 dark:border-t-slate-900 bottom-0 left-0 right-0 flex justify-between p-2">
          <CommonButton
            btnText={"Edit"}
            className={
              "bg-coral-red rounded-md text-white px-10 py-2 text-[16px] uppercase"
            }
            btnTitle={"Edit profile"}
            // handleOnClick={() => {}}
          />
          <CommonButton
            btnText={"Logout"}
            className={
              "bg-coral-red rounded-md text-white px-10 py-2 text-[16px] uppercase"
            }
            btnTitle={"Logout"}
            // handleOnClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;

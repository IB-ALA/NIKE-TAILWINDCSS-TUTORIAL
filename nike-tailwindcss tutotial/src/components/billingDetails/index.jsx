import { Link } from "react-router-dom";
import CommonButton from "../commonButton";
import FormDetailInfoCard from "../FormDetailInfoCard";
import useUser from "../../hooks/useUser";
import { useEffect, useState } from "react";
import { isFormValid } from "../../shared";
import Spinner from "../spinner";
import { toast } from "react-toastify";

function BillingDetails({ showList, setShowList }) {
  const [errors, setErrors] = useState({});
  const { editUserInfo, userBillingDetails, getBillingDetails, isLoading } =
    useUser();
  const [editedDetails, setEditedDetails] = useState({ ...userBillingDetails });

  useEffect(() => {
    if (showList === "payment-details") {
      getBillingDetails();
    }
  }, [showList]);

  useEffect(() => {
    setEditedDetails({ ...userBillingDetails });
  }, [userBillingDetails]);

  useEffect(() => {
    if (
      Object.keys(editedDetails).length > 0 &&
      !isFormValid(editedDetails)?.valid
    ) {
      console.log(Object.keys(editedDetails).length);

      toast.error("An error occured. Try again later.");
      setShowList(null);
    }
  }, [editedDetails]);

  return (
    <div
      // if you want the release animation you have to sacrifice the shadow
      // ${ showList === "delivery-details" ? "animate-release" : "overflow-hidden"}
      className={`border-b border-b-slate-100 last:mb-0 mb-1 dark:border-slate-800`}
    >
      <div className="relative">
        <p
          className={`cursor-pointer p-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-950 sm:info-text text-md text-slate-gray ${
            showList === "payment-details"
              ? "bg-slate-100 dark:bg-slate-900"
              : ""
          }`}
          onClick={() => {
            showList === "payment-details"
              ? setShowList(null)
              : setShowList("payment-details");
          }}
        >
          Billing Details
        </p>
        {JSON.stringify(userBillingDetails) !==
          JSON.stringify(editedDetails) && (
          <div className="absolute right-2 top-2 flex  gap-2">
            <CommonButton
              className=" underline underline-offset-1 text-coral-full"
              btnText={"Save"}
              btnTitle={"Save changes"}
              handleOnClick={() => {
                const { newErrors, valid } = isFormValid(editedDetails);
                setErrors({ ...newErrors });
                if (valid) {
                  editUserInfo({ billingDetails: { ...editedDetails } });
                }
              }}
            />

            <CommonButton
              className="underline underline-offset-1 text-coral-full"
              btnText={"Undo"}
              btnTitle={"Undo changes"}
              handleOnClick={() => {
                setEditedDetails({ ...userBillingDetails });
              }}
            />
          </div>
        )}
      </div>

      {showList === "payment-details" ? (
        isLoading === true ? (
          <div className="sm:ml-3 ml-1 border dark:border-slate-900 my-2 p-4 shadow-2xl rounded-md flex justify-center">
            <Spinner />
          </div>
        ) : Object.keys(userBillingDetails)?.length < 1 ? (
          <p className="ml-3 my-2 p-2 shadow-3xl rounded-md text-center text-coral-red text-[16px] dark:bg-slate-950">
            No Billing Details Available.
            <Link
              to={"/products"}
              className="underline underline-offset-2 ml-1 text-coral-full"
            >
              Place an Order.
            </Link>
          </p>
        ) : isFormValid(editedDetails)?.valid ? (
          <div className="ml-3 dark:border dark:border-slate-900 my-2 p-2 shadow-3xl rounded-md flex flex-col gap-3 bg-dark-1 dark:shadow-[#58565664]">
            {Object.keys(editedDetails).map((key) => {
              if (Object.prototype.hasOwnProperty.call(editedDetails, key)) {
                return (
                  <FormDetailInfoCard
                    key={key}
                    formData={editedDetails}
                    setFormData={setEditedDetails}
                    id={key}
                    errors={errors}
                  />
                );
              }
              return null;
            })}
          </div>
        ) : null
      ) : null}
    </div>
  );
}

export default BillingDetails;

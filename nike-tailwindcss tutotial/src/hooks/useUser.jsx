import { useContext } from "react";
import { GlobalContext } from "../context";
import { toast } from "react-toastify";
import useFetch from "./useFetch";

function useUser() {
  const {
    registeredUser,
    setRegisteredUser,
    orders,
    setOrders,
    userBillingDetails,
    setUserBillingDetails,
    userDeliveryDetails,
    setUserDeliveryDetails,
  } = useContext(GlobalContext);

  const { run: apiCall, data, isLoading, error } = useFetch();

  async function editUserInfo(data) {
    const dataType = Object.keys(data)[0];
    const pathToUse =
      dataType === "deliveryDetails" ? "delivery-details" : "billing-details";

    const payload = {
      ...data,
    };

    console.log(payload);

    try {
      const result = await apiCall(
        `http://localhost:5000/${pathToUse}/${registeredUser?.id}`,
        { method: "PATCH", body: JSON.stringify(payload) }
      );

      const newDetails = { ...result?.details };
      if (dataType === "deliveryDetails") {
        setUserDeliveryDetails({ ...newDetails });
        sessionStorage.setItem(
          "savedDeliveryDetails",
          JSON.stringify({ ...newDetails })
        );
      } else {
        setUserBillingDetails({ ...newDetails });
        sessionStorage.setItem(
          "savedBillingDetails",
          JSON.stringify({ ...newDetails })
        );
      }

      result?.message &&
        toast.success(result?.message, { hideProgressBar: true });
    } catch (err) {
      // toast.error(err?.message, { hideProgressBar: true });
      console.log(err);
    } finally {
      if (error && error?.message !== "Failed to fetch") {
        toast.error(error?.message, { hideProgressBar: true });
      }
    }
  }

  async function getDeliveryDetails() {
    try {
      let savedDeliveryDetails = JSON.parse(
        sessionStorage.getItem("savedDeliveryDetails")
      );

      if (!savedDeliveryDetails) {
        const dbDeliveryDetails = await apiCall(
          `http://localhost:5000/delivery-details/${registeredUser?.id}`
        );

        // console.log({ dbDeliveryDetails });

        sessionStorage.setItem(
          "savedDeliveryDetails",
          JSON.stringify({ ...dbDeliveryDetails?.deliveryDetails })
        );

        setUserDeliveryDetails({ ...dbDeliveryDetails?.deliveryDetails });
        // sessionStorage.removeItem("savedDeliveryDetails");
      } else setUserDeliveryDetails({ ...savedDeliveryDetails });
    } catch (err) {
      // toast.error(err?.message, { hideProgressBar: true });
      console.log(err);
    } finally {
      if (error && error?.message !== "Failed to fetch") {
        toast.error(error?.message, { hideProgressBar: true });
      }
    }
  }

  async function getBillingDetails() {
    try {
      const savedBillingDetails = JSON.parse(
        sessionStorage.getItem("savedBillingDetails")
      );

      if (!savedBillingDetails) {
        const dbBillingDetails = await apiCall(
          `http://localhost:5000/billing-details/${registeredUser?.id}`
        );

        sessionStorage.setItem(
          "savedBillingDetails",
          JSON.stringify({ ...dbBillingDetails?.billingDetails })
        );

        setUserBillingDetails({ ...dbBillingDetails?.billingDetails });
        // sessionStorage.removeItem("savedBillingDetails");
      } else setUserBillingDetails({ ...savedBillingDetails });
    } catch (err) {
      // toast.error(err?.message, { hideProgressBar: true });
      console.log(err);
    } finally {
      if (error && error?.message !== "Failed to fetch") {
        toast.error(error?.message, { hideProgressBar: true });
      }
    }
  }

  return {
    registeredUser,
    editUserInfo,
    orders,
    isLoading,
    data,
    userBillingDetails,
    userDeliveryDetails,
    getBillingDetails,
    getDeliveryDetails,
  };
}

export default useUser;

import { useState } from "react";
import CommonButton from "../../../components/commonButton";
import CommonInput from "../../../components/commonInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ResetPasswordForm({ setNotification, token, email }) {
  const [resetPasswordForm, setResetPasswordForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleReset(e) {
    e.preventDefault();
    // console.log("here");

    if (
      !resetPasswordForm?.newPassword ||
      !resetPasswordForm?.confirmPassword
    ) {
      setNotification("Please fill in all fields.");
      return;
    }
    // console.log("here 2");

    if (resetPasswordForm.newPassword?.length < 6) {
      setNotification("Password must be at least 6 characters.");
      return;
    }

    if (resetPasswordForm.newPassword !== resetPasswordForm.confirmPassword) {
      setNotification("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      // Replace this with your actual API call
      console.log("Resetting password for:", {
        email,
        token,
        resetPasswordForm,
      });
      // await axios.post("/api/reset-password", { email, token, newPassword });

      toast.success("Password reset successful!");
      setResetPasswordForm({
        newPassword: "",
        confirmPassword: "",
      });

      setTimeout(() => navigate("/signin"), 2000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleInputOnChange(e) {
    setResetPasswordForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setNotification("");
  }

  return (
    <form onSubmit={handleReset}>
      <CommonInput
        type={"password"}
        placeholder={"New password"}
        name={"newPassword"}
        id={"newPassword"}
        className="border border-slate-400 dark:border-slate-800 px-3 py-2 w-full outline-blue-400 mb-4 rounded-md bg-transparent placeholder-gray-500"
        value={resetPasswordForm?.newPassword}
        handleOnChange={handleInputOnChange}
      />

      <CommonInput
        type={"password"}
        name={"confirmPassword"}
        id={"confirmPassword"}
        placeholder={"Confirm password"}
        className="border border-slate-400 dark:border-slate-800 px-3 py-2 w-full outline-blue-400 mb-6 rounded-md bg-transparent placeholder-gray-500"
        value={resetPasswordForm.confirmPassword}
        handleOnChange={handleInputOnChange}
      />

      <CommonButton
        disabled={loading}
        type={"submit"}
        className={`w-full py-3 rounded-full text-white font-semibold  transition ${
          loading
            ? "bg-[#ff6352e2] cursor-not-allowed"
            : "hover:bg-coral-red bg-[#ff6352e2]"
        } flex items-center justify-center`}
        btnText={
          <>
            {loading && (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            )}
            Reset Password
          </>
        }
      />
    </form>
  );
}

export default ResetPasswordForm;

import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import { isFormValid } from "../../shared";
import CommonButton from "../commonButton";
import Spinner from "../spinner";

function EditDetailsControlOptions({
  setErrors,
  editedDetails,
  setEditedDetails,
  userDetails,
  dataTpye,
}) {
  const { isLoading, editUserInfo } = useUser();
  const [validity, setValidity] = useState(true);
  const [errors, setNewErrors] = useState({});

  useEffect(() => {
    const { newErrors, valid } = isFormValid(editedDetails);
    setValidity(valid);
    setNewErrors(newErrors);
  }, [editedDetails]);

  return isLoading ? (
    <Spinner
      height={"w-[20px]"}
      width={"w-6"}
      extraClasses={"w-6 h-6 absolute right-3 top-3"}
    />
  ) : (
    <div className="absolute right-2 top-2 flex gap-2">
      <CommonButton
        className=" underline underline-offset-1 text-coral-full"
        btnText={"Save"}
        btnTitle={"Save changes"}
        handleOnClick={() => {
          setErrors({ ...errors });
          if (validity) {
            editUserInfo({ [dataTpye]: { ...editedDetails } });
          }
        }}
      />

      <CommonButton
        className="underline underline-offset-1 text-coral-full"
        btnText={"Undo"}
        btnTitle={"Undo changes"}
        handleOnClick={() => {
          setEditedDetails({ ...userDetails });
        }}
      />
    </div>
  );
}

export default EditDetailsControlOptions;

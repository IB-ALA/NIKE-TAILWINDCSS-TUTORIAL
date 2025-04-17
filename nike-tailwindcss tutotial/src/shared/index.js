export function isFormValid(formData) {
  let valid = false;
  const newErrors = {};

  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+\.)([a-z]{2,3})?$/;
  const phoneRegex = /^\d{10}$/;
  const cardNumberRegex = /^(\d{4} ){3}\d{4}$/;
  const cardExpiryRegex = /^\d{2}\/\d{2}$/;
  const cardCvcRegex = /^\d{3}$/;

  for (const [key, value] of Object?.entries(formData)) {
    if (value === "") {
      switch (key) {
        case "name":
          newErrors[key] = "Name is required";
          break;
        case "password":
          newErrors[key] = "Password is required";
          break;
        case "reEnteredPassword":
          newErrors[key] = "Reenter password";
          break;

        case "address":
          newErrors[key] = "Address is required";
          break;

        case "id":
          newErrors[key] = "Id is required";
          break;

        case "city":
          newErrors[key] = "City is required";
          break;

        default:
          break;
      }
    }

    switch (key) {
      case "email":
        value.match(emailRegex) ||
          (newErrors[key] = "Valid email address required");
        break;

      case "phoneNumber":
        value.match(phoneRegex) ||
          (newErrors[key] = "Valid phone number required");
        break;

      case "phone":
        value.match(phoneRegex) ||
          (newErrors[key] = "Valid phone number required");
        break;

      case "momoNumber":
        value.match(phoneRegex) ||
          (newErrors[key] = "Valid mobile momey number required");
        break;

      case "cardNumber":
        value.match(cardNumberRegex) ||
          (newErrors[key] = "Enter full 16-digit card number");
        break;

      case "cardExpiry":
        value.match(cardExpiryRegex) || (newErrors[key] = "Use MM/YY format");
        break;

      case "cardCvc":
        value.match(cardCvcRegex) || (newErrors[key] = "CVC must be 3 digits");
        break;

      case "password":
        value.length >= 6 ||
          (newErrors[key] = "Password must be at least 6 letters");
        break;
      case "reEnteredPassword":
        value === formData.password ||
          (newErrors[key] = "Passwords donot match");
        break;

      default:
        break;
    }
  }

  if (Object?.keys(newErrors).length === 0) {
    valid = true;
  }
  return { valid, newErrors };
}

export function formatCurrency(pricePesewas) {
  return (Math.round(pricePesewas) / 100).toFixed(2);
}

export function getItemVarietyImg(item, color) {
  let img;
  item?.productDetails?.colors?.forEach((variety) => {
    if (variety?.name === color) {
      img = variety?.image;
    }
  });
  if (img) {
    return img;
  }
}

// const validateForm = () => {
//   const newErrors = {};
//   if (!form.name) newErrors.name = "Name is required";
//   if (!form.address) newErrors.address = "Address is required";
//   if (!form.phone.match(/^\d{10}$/))
//     newErrors.phone = "Valid phone number required";
//   if (paymentMethod === "card") {
//     if (!form.cardNumber.match(/^(\d{4} ){3}\d{4}$/))
//       newErrors.cardNumber = "Enter full 16-digit card number";
//     if (!form.cardExpiry.match(/^\d{2}\/\d{2}$/))
//       newErrors.cardExpiry = "Use MM/YY format";
//     if (!form.cardCvc.match(/^\d{3}$/))
//       newErrors.cardCvc = "CVC must be 3 digits";
//   }
//   setErrors(newErrors);
//   return Object.keys(newErrors).length === 0;
// };

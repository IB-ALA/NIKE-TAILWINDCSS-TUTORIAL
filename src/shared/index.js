export function isFormValid(formData) {
  let valid = false;
  // let errorMessage;
  let props = [];
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+\.)([a-z]{2,3})?$/;

  for (const [key, value] of Object?.entries(formData)) {
    if (value === "") {
      props?.push(key);
    } else if (key === "email") {
      if (!value?.match(emailRegex)) {
        // errorMessage = "Please enter a valid email address";
        props?.push(key);
      }
    }
  }

  if (props?.length === 0) {
    valid = true;
  }
  return { valid, props };
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

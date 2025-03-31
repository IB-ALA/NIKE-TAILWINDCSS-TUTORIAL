export function isFormValid(formData) {
  let valid = false;
  // let errorMessage;
  let props = [];
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+\.)([a-z]{2,3})?$/;

  for (const [key, value] of Object.entries(formData)) {
    if (value === "") {
      props.push(key);
    } else if (key === "email") {
      if (!value.match(emailRegex)) {
        // errorMessage = "Please enter a valid email address";
        props.push(key);
      }
    }
  }

  if (props.length === 0) {
    valid = true;
  }
  return { valid, props };
}

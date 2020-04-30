export const checkValidation = (id, value, validation) => {
  const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const intPattern = /^\d+$/;
  if (!validation) {
    return false;
  }
  if (validation.isRequired && value.trim() === "") {
    return `${id} Field Is Required`;
  }
  if (validation.minLength && value.length < validation.minLength) {
    return `${id} Require Min ${validation.minLength}`;
  }
  if (validation.maxLength && value.length > validation.maxLength) {
    return `${id} Required Max Length ${validation.maxLength}`;
  }
  if (validation.isEmail && !emailPattern.test(value)) {
    return `${id} Field Is Incorrect Please Enter Valid ${id}`;
  }
  if (validation.isNumeric && intPattern.test(value)) {
    return `${id} Field Is Not A Number`;
  }
  return false;
};
export const removeErrorFromObjects = (array) => {
  if (Array.isArray(array)) {
    const newArray = array.map((obj) => {
      const newObject = {};
      // when user skip inputs fields array get filled with null since typeof null === obj becouse of old javascript bug
      // i check to make sure that the obj isnt null
      if (obj !== null && obj !== undefined) {
        Object.entries(obj).map(([key, value]) => {
          if (typeof value === "object" && !Array.isArray(value)) {
            return (newObject[key] = value.value); // if value is object get only value leave error field out
          } else {
            return (newObject[key] = value); // if value is no object just return value
          }
        });
      }
      return newObject;
    });
    return newArray;
  } else if (typeof array === "object") {
    // check if function argoument is singel object
    const newObject = {};
    Object.entries(array).map(([key, value]) => {
      if (typeof value === "object" && !Array.isArray(value)) {
        return (newObject[key] = value.value);
      } else {
        return (newObject[key] = value);
      }
    });
    return newObject;
  } else {
    throw new Error("argoument type must be array or object");
  }
};
export const checkFormValidation = (form, validation) => {
  const errors = {};
  form.forEach((item) => {
    let error =
      item && checkValidation(item.name, item.value.value, validation);
    if (error) {
      errors[item.name] = error;
    }
  });
  return errors;
};
export const checkFormBuildValidation = (form, validation) => {
  const errors = {
    label: {},
    name: {},
  };
  form.forEach((item) => {
    let labelError =
      item && checkValidation("label", item.label.value, validation);
    let nameError =
      item && checkValidation("name", item.name.value, validation);
    if (labelError) {
      errors.label[item.id] = labelError;
    }
    if (nameError) {
      errors.name[item.id] = nameError;
    }
  });

  return errors;
};

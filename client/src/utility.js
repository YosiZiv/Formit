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
    return array.map((obj) => {
      const newObject = {};
      Object.entries(obj).map(([key, value]) => {
        if (typeof value === "object") {
          newObject[key] = value.value;
        } else {
          newObject[key] = value;
        }
      });
      return newObject;
    });
  } else if (typeof array === "object") {
    const newObject = {};
    Object.entries(array).map(([key, value]) => {
      if (typeof value === "object") {
        newObject[key] = value.value;
      } else {
        newObject[key] = value;
      }
    });
    return newObject;
  } else {
    throw new Error("argoument type must be array or object");
  }
};

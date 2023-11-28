export const checkValidData = (email, password, name) => {
  const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail) return "Email Id is not valid";

  if (!isValidPassword)
    return "Password should have minimum 8 character, atleast one Capital letter and one special character";

  if (name !== undefined) {
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if (!isNameValid)
      return "Name is not valid, first character of first and last name should be capital";
  }

  return null;
};

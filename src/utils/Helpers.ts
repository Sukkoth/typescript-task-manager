export default class Helpers {
  static isValidFormData(
    //replace this with yup
    formData: { email: string; password: string },
    setError: (value: string) => void | null
  ) {
    let isValidEmail = true;
    let isValidPassword = true;
    const { email, password } = formData;
    //check email
    if (email.length < 5 || !email.includes("@") || !email.includes(".")) {
      isValidEmail = false;
    }

    //check password
    if (password.length <= 5) {
      isValidPassword = false;
    }

    const validResult = isValidEmail && isValidPassword;

    if (setError !== null && !validResult) {
      setError("Form data is incorrect");
    }

    return validResult;
  }

  static GenerateToken() {
    return new Date().toISOString();
  }
}

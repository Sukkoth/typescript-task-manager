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

  static getMaxDays(
    month: number,
    year: number
  ): { number: number; date: string; fullDate: Date }[] {
    // Create a Date object for the first day of the month
    const date = new Date(year, month);

    // Create the array of date objects
    const datesArray: { number: number; date: string; fullDate: Date }[] = [];

    // Get the maximum number of days in the month
    while (date.getMonth() === month) {
      const dayNumber = date.getDate();
      const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
      datesArray.push({ number: dayNumber, date: dayName, fullDate: date });

      date.setDate(dayNumber + 1);
    }

    return datesArray;
  }

  static isSameDate(date1?: Date, date2?: Date): boolean {
    if (!date1 || !date2) {
      return false;
    }

    const result =
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();

    return result;
  }

  static getCurrentMonthYear = () => {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = today.getFullYear();
    return `${year}-${month}`;
  };
}

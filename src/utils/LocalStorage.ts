import { User } from "../components/shared/types";

export default class LocalStorage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key: string) {
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data);
  }

  static getLocalAuth() {
    const authData = this.getItem("auth") as {
      user: User | null;
      token: string | null;
    };
    return authData;
  }
}

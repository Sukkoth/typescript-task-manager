import { User } from "../../components/shared/types";

export type AuthInitialType = {
  isLoading: boolean;
  user: null | User;
  token: null | string;
  errors: {
    message?: string;
    code?: string;
  };
};

export type LoginThunkReturn = {
  id: string;
  email: string;
};

import { IconType } from "react-icons";

export interface IUserType {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  setId: (_id: string) => void;
  setUserName: (username: string) => void;
  setEmail: (email: string) => void;
  setIsAdmin: (isAdmin: boolean) => void;
}
export interface IUserListType {
  "ID": string;
  "نام": string;
  "ایمیل": string;
  "ادمین": IconType;
  "عملیات": IconType;
}

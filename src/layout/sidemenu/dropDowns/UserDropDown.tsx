import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDropDownStore } from "../../../stores/dropDownStore";
import { useLogout } from "../../../hook/useLogout";

interface IMenu {
  label: string;
  linkTo: string;
  onClick: () => void;
}

const UserDropDown = ({ isAdmin }) => {
  const { setDropDown } = useDropDownStore();
  const { mutate: logout } = useLogout();

  const [adminMenu] = useState<IMenu[]>([
    {
      label: "داشبورد",
      linkTo: "/adminDashboard",
      onClick: () => setDropDown(),
    },
    {
      label: "محصول جدید",
      linkTo: "/create-product",
      onClick: () => setDropDown(),
    },
    { label: "مدیریت کاربران", linkTo: "/users", onClick: () => setDropDown() },
    { label: "سفارشات", linkTo: "/orders", onClick: () => setDropDown() },
    { label: "پروفایل", linkTo: "/profile", onClick: () => setDropDown() },
    { label: "خروج از حساب", linkTo: "", onClick: () => logout() },
  ]);
  const [userMenu] = useState<IMenu[]>([
    { label: "پروفایل", linkTo: "/profile", onClick: () => setDropDown() },
    { label: "خروج از حساب", linkTo: "", onClick: () => logout() },
  ]);
  return (
    <div className=" absolute transition  duration-700 ease-in-out rounded-xl  bottom-[4rem] px-3 py-6 h-fit w-[17rem] text-nowrap gap-6 bg-base-side text-2xl leading-8 font-normal text-text-primary border-base-text-field-stroke flex flex-col justify-center">
      {isAdmin
        ? adminMenu.map((item, index) => (
            <NavLink key={index} to={item.linkTo} onClick={item.onClick}>
              {item.label}
            </NavLink>
          ))
        : userMenu.map((item, index) => (
            <NavLink key={index} to={item.linkTo} onClick={item.onClick}>
              {item.label}
            </NavLink>
          ))}
    </div>
  );
};

export default UserDropDown;

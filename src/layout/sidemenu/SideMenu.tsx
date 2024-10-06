import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoEnterOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import {
  AiOutlineShopping,
  AiOutlineHome,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import Sidebar from "./slidebar/Sidebar";
interface SlideListProps {
  icon: JSX.Element;
  name: string;
  linkTo: string;
}
import { useSidebarStore } from "../../stores/sidebarStore";
import { NavLink } from "react-router-dom";
import { useAuthStatus } from "../../stores/authStore";
import { adminStore } from "../../stores/adminStore";
import { useDropDownStore } from "../../stores/dropDownStore";
import UserDropDown from "./dropDowns/UserDropDown";

const SideMenu = () => {
  const { expanded, setExpanded } = useSidebarStore();
  const { dropDown, setDropDown } = useDropDownStore();
  const { isAuth } = useAuthStatus();
  const { isAdmin } = adminStore();
  const [countOfProduct] = useState<number>(2);
  const sideMenuitems: SlideListProps[] = [
    { icon: <AiOutlineHome size={20} />, name: "خانه", linkTo: "/dashboard" },
    { icon: <AiOutlineShopping size={20} />, name: "فروشگاه", linkTo: "/shop" },
    {
      icon: <AiOutlineShoppingCart size={20} />,
      name: "سبد خرید",
      linkTo: "/cart",
    },
    {
      icon: <MdFavorite size={20} />,
      name: "علاقه مندی ها",
      linkTo: "/favorites",
    },
  ];

  useEffect(() => {
    if (!expanded && dropDown) setDropDown();
  }, [expanded, dropDown, setDropDown]);

  return (
    <aside
      className={`h-screen  font-Iran-Yekan fixed flex justify-between bg-base-menu text-text-primary flex-col overflow-hidden transition-width duration-700 ease-in-out ${
        expanded ? "w-[22rem]" : "w-[8rem]"
      }`}
      onClick={() => setExpanded()}
    >
      <nav
        className={`overflow-hidden justify-between items-center   top-8   text-right  transition-width duration-700 ease-in-out flex  flex-col ${
          expanded ? "w-[22rem]" : "w-[8rem]"
        }`}
      >
        <ul
          className={`flex flex-col  gap-16 pt-6 items-center justify-center overflow-hidden transition-width duration-700 ease-in-out   ${
            expanded ? "w-[16rem]" : "w-[8rem]"
          }`}
        >
          {sideMenuitems.map((item: SlideListProps, index) => (
            <Sidebar
              key={index}
              i={index}
              name={item.name}
              icon={item.icon}
              expanded={expanded}
              countOfProduct={countOfProduct}
              linkTo={item.linkTo}
            />
          ))}
        </ul>
      </nav>
      <div>
        {isAuth ? (
          <div className="flex relative flex-col justify-center items-center pb-4">
            {dropDown && <UserDropDown isAdmin={isAdmin} />}
            <div className="flex flex-row justify-start items-center px-3 w-full h-10  pb-4">
              <p className="text-[1.6rem] ">{isAdmin ? "ادمین" : "کاربر"}</p>
              <button onClick={() => setDropDown()}>
                {dropDown ? (
                  <RiArrowDropUpLine size={20} />
                ) : (
                  <RiArrowDropDownLine size={20} />
                )}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <NavLink
              to="/login"
              className={`flex  justify-center  pb-4 active:text-[#DB2777] flex-row transition-width duration-700 ease-in-out overflow-hidden gap-4 cursor-pointer h-11 items-center ${
                expanded ? "w-[16rem] pr-14" : "w-[8rem]"
              } `}
            >
              <span>
                <IoEnterOutline size={20} />
              </span>
              <span
                className={`overflow-hidden text-[1.6rem]  transition-width duration-700 ease-in-out ${
                  expanded ? "w-[16rem]" : "w-0"
                }`}
              >
                ورود
              </span>
            </NavLink>
            <NavLink
              to="/register"
              className={`flex  justify-center  pb-4 active:text-[#DB2777] flex-row transition-width duration-700 ease-in-out overflow-hidden gap-4 cursor-pointer h-11 items-center ${
                expanded ? "w-[16rem] pr-14" : "w-[8rem]"
              } `}
            >
              <span>
                <MdOutlinePersonAddAlt size={20} />
              </span>
              <span
                className={`overflow-hidden text-[1.6rem]  transition-width duration-700 ease-in-out ${
                  expanded ? "w-[16rem]" : "w-0"
                }`}
              >
                ثبت نام
              </span>
            </NavLink>
          </div>
        )}
      </div>
    </aside>
  );
};
export default SideMenu;

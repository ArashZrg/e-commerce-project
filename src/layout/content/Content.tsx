import { ReactNode } from "react";
import { useSidebarStore } from "../../stores/sidebarStore";
import AdminMenu from "../../components/adminComponents/adminMenu/AdminMenu";
import { adminStore } from "../../stores/adminStore";
interface IContent {
  children: ReactNode;
}

const Content = ({ children }: IContent) => {
  const { expanded } = useSidebarStore();
  const { isAdmin } = adminStore();

  return (
    <section
      className={`rel w-full bg-base-backgrond dark:bg-dark-base-background min-h-screen transition-width duration-700 ease-in-out ${
        !expanded ? "mr-32" : "mr-[22rem]"
      }`}
    >
      {isAdmin ? <AdminMenu /> : null}
      {children}
    </section>
  );
};

export default Content;

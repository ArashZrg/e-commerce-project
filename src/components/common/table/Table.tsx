import Badge from "../badge/Badge";
import Button from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { IUserListType, IUserType } from "../../../types/userType";
import { Toaster, toast } from "react-hot-toast";
import { useDeleteUser } from "../../../hook/useDeleteUser";
import EditField from "../editField/EditField";

interface ITableItem {
  [index: string]: string | number | boolean | JSX.Element;
}

interface ITableProps {
  items?: ITableItem[] | IUserType[] | IUserListType[];
  headers: string[];
  optionalWidth?: string;
  optionalHeight?: string;
  tdOptionalStyle?: string;
  delAction?: boolean;
}

const Table = ({
  items,
  optionalWidth,
  optionalHeight,
  headers,
  tdOptionalStyle: optionalStyle,
  delAction,
}: ITableProps) => {
  const navigate = useNavigate();
  const delUser = useDeleteUser();
  const deleteUser = async (id: string) => {
    return delUser.mutate(id, {

      onSuccess: () => {
        toast.success("حدف با موفقیت انجام شد");

        setTimeout(() => {
          navigate(0);
        }, 1000);
      },
      onError: (error) => {
        console.error("Registration failed", error);
      },
    });
  };
  return (
    <>
      <Toaster />
      <table className={`${optionalWidth} ${optionalHeight} w-full`}>
        <thead className="border-b-2 font-normal text-[1.6rem] text-text-primary font-Iran-Yekan">
          <tr>
            {headers.map((head, index) => (
              <th
                className={`p-4 ${
                  index === 1 ? " text-right" : " text-center"
                }`}
                key={index}
              >
                {head === "عکس" ? (
                  <img
                    src={String(item[head])}
                    alt="picture"
                    className="w-full h-16 object-contain"
                  ></img>
                ) : head === "عملیات" ? (
                  <Link to={`/detail/${item?.orderId}`}>
                    <Button className="bg-primary-main px-[1.2rem] py-[0.8rem] rounded-[0.8rem] text-[1.4rem] text-text-button font-normal">
                      {item[head]}
                    </Button>
                  </Link>
                ) : head === "ارسال" ? (
                  <Badge
                    padding="px-2"
                    fontSize="text-[1.4rem]"
                    status={
                      item[head] === "در حال ارسال"
                        ? "pending-badge"
                        : item[head] === "ارسال شده"
                        ? "success-badge"
                        : "error-badge" // if item[head] === "ارسال نشده"
                    }
                  >
                    {item[head]}
                  </Badge>
                ) : head === "پرداخت" ? (
                  <Badge
                    padding="px-2"
                    fontSize="text-[1.4rem]"
                    status={
                      item[head] === "پرداخت شده"
                        ? "success-badge"
                        : "error-badge"
                    }
                  >
                    {item[head]}
                  </Badge>
                ) : (
                  item[head]
                )}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => (
            <tr
              key={index}
              className="font-Iran-Yekan font-normal text-[1.6rem] text-text-primary"
            >
              {headers.map((head, headIndex) => (
                <td
                  className={`p-4 ${
                    headIndex === 1 ? " text-right" : "text-center"
                  } ${optionalStyle}`}
                  key={headIndex}
                >
                  {head === "عکس" ? (
                    <img
                      src={String(item[head])}
                      alt="picture"
                      className="w-16 h-16"
                    ></img>
                  ) : head === "عملیات" && !delAction ? (
                    <Link to={"/detail"}>
                      <Button className="bg-primary-main px-[1.2rem] py-[0.8rem] rounded-[0.8rem] text-[1.4rem] text-text-button font-normal">
                        {item[head]}
                      </Button>
                    </Link>
                  ) : head === "ارسال" ? (
                    <Badge
                      padding="px-2"
                      fontSize="text-[1.4rem]"
                      status={
                        item[head] === "در حال ارسال"
                          ? "pending-badge"
                          : item[head] === "ارسال شده"
                          ? "success-badge"
                          : "error-badge" // if item[head] === "ارسال نشده"
                      }
                    >
                      {item[head]}
                    </Badge>
                  ) : head === "پرداخت" ? (
                    <Badge
                      padding="px-2"
                      fontSize="text-[1.4rem]"
                      status={
                        item[head] === "پرداخت شده"
                          ? "success-badge"
                          : "error-badge"
                      }
                    >
                      {item[head]}
                    </Badge>
                  ) : head === "نام" ? (
                    <EditField title={item[head]} type="username" userid={item["ID"]}/>
                  ) : head === "ایمیل" ? (
                    <EditField title={item[head]}  type="email" userid={item["ID"]} />
                  ) : 
                  head === "عملیات" && delAction ? (
                    <Button
                      onClick={() => deleteUser(item["ID"])}
                      className="bg-primary-main px-[1.2rem] py-[0.8rem] rounded-[0.8rem] text-[1.4rem] text-text-button font-normal"
                    >
                      {item[head]}
                    </Button>
                  ) : (
                    item[head]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

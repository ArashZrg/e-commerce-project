import { adminStore } from "../../../stores/adminStore";
import Badge from "../badge/Badge";
import Button from "../button/Button";
import { Link } from "react-router-dom";

interface ITableItem {
  [index: string]: string | number | boolean | JSX.Element;
}

interface ITableProps {
  items?: ITableItem[];
  headers: string[];
  optionalWidth?: string;
  optionalHeight?: string;
  tdOptionalStyle?: string;
}

const Table = ({
  items,
  optionalWidth,
  optionalHeight,
  headers,
  tdOptionalStyle: optionalStyle,
}: ITableProps) => {
  const { isAdmin } = adminStore();

  return (
    <table className={`${optionalWidth} ${optionalHeight} w-full`}>
      <thead className="border-b-2 dark:border-dark-base-text-field-stroke font-normal text-[1.6rem] text-text-primary dark:text-dark-text-primary font-Iran-Yekan">
        <tr>
          {headers.map((head, index) => (
            <th
              className={`p-4 ${index === 1 ? " text-right" : " text-center"}`}
              key={index}
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <tr
            key={index}
            className="font-Iran-Yekan font-normal text-[1.6rem] text-text-primary dark:text-dark-text-primary"
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
                    className="w-full h-16 object-contain"
                  ></img>
                ) : head === "عملیات" ? (
                  <Link
                    to={
                      isAdmin
                        ? `/detail/deliverd/${item?.orderId}`
                        : `/detail/${item?.orderId}`
                    }
                  >
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
        ))}
      </tbody>
    </table>
  );
};

export default Table;

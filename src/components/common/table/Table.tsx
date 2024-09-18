import Badge from "../badge/Badge";
import Button from "../button/Button";

interface ITableItem {
  [index: string]: string | number;
}

interface ITableProps {
  items?: ITableItem[];
  headers: string[];
  optionalWidth?: string;
  optionalHeight?: string;
}

const Table = ({
  items,
  optionalWidth,
  optionalHeight,
  headers,
}: ITableProps) => {
  return (
    <table className={`${optionalWidth} ${optionalHeight} w-full`}>
      <thead className="border-b-2 font-normal text-[1.6rem] text-text-primary font-Iran-Yekan">
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
            className="font-Iran-Yekan font-normal text-[1.6rem] text-text-primary"
          >
            {headers.map((head, headIndex) => (
              <td
                className={`p-4 ${
                  headIndex === 1 ? " text-right" : "text-center"
                }`}
                key={headIndex}
              >
                {head === "عکس" ? (
                  <img
                    src={String(item[head])}
                    alt="picture"
                    className="w-16 h-16"
                  ></img>
                ) : head === "عملیات" ? (
                  <Button className="bg-primary-main px-[1.2rem] py-[0.8rem] rounded-[0.8rem] text-[1.4rem] text-text-button font-normal">
                    {item[head]}
                  </Button>
                ) : head === "ارسال" ? (
                  <Badge 
                    padding="px-2"
                    fontSize="text-[1.4rem]"
                    status={
                      item[head] === "در حال ارسال" ? "pending-badge"
                      : item[head] === "ارسال شده" ? "success-badge"
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
                      item[head] === "پرداخت شده" ? "success-badge" : "error-badge"
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
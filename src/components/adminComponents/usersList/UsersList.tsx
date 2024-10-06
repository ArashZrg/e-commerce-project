import { useState } from "react";
import Table from "../../common/table/Table";
import { MdDeleteForever } from "react-icons/md";
import {
  BiEditAlt,
  BiCheck,
} from "react-icons/bi";

const UsersList = () => {
  const headers = ["ID", "نام", "ایمیل", "ادمین", "عملیات"];

  const users = [
    {
      ID: "272649864013658836",
      نام: "ali mousavi",
      ایمیل: "roberto@gmail.com",
      ادمین: true,
      عملیات: <MdDeleteForever />,
    },
    {
      ID: "272649864013658836",
      نام: "ali ",
      ایمیل: "roberto@gmail.com",
      ادمین: false,
      عملیات: <MdDeleteForever />,
    },
  ];
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };
  return (
    <div className="flex flex-col  justify-center items-center">
      <div className=" text-base-side top-12 w-16 h-[3.8rem] mr-[95%] bg-pink-500 py-5 px-3 ">
        Admin menu
      </div>
      <div className="bg-pink-200 dark:bg-dark-base-background w-5/6 h-96 ">
        <Table headers={headers} items={users} optionalWidth="w-full" />
        <div className="flex flex-row border  ">
          {isEditing ? (
            <div>
              <div className="w-10 h-10 bg-info-main rounded-xl text-text-button">
                <BiCheck
                  onClick={handleEditClick}
                  style={{ cursor: "pointer" }}
                  size={24}
                />
              </div>
              <input
                type="text"
                className="dark:bg-dark-base-text-field dark:border-dark-base-text-field-stroke"
                value={text}
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
              />
            </div>
          ) : (
            <div className="flex flex-row gap-2">
              <BiEditAlt
                onClick={handleEditClick}
                style={{ cursor: "pointer" }}
                size={24}
              />
              <p className="dark:text-dark-text-primary">{text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersList;

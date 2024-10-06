import { useState } from "react";
import { BiCheck, BiEditAlt } from "react-icons/bi";
import { Toaster, toast } from "react-hot-toast";
import Input from "../input/Input";
import { useUpdateUser } from "../../../hook/useUpdateUser";

interface IEditField {
  title: string;
  type: string;
  userid: string;
}

const EditField: React.FC<IEditField> = ({ title, type, userid }) => {
  const [text, setText] = useState(title);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const updateMutation = useUpdateUser();

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const validateInput = (value: string) => {
    if (type === "username") {
      if (!value) return "نام الزامیست";
      if (value.length < 3) return "نام باید حداقل دارای 3 کارکتر باشد";
      if (value.length > 20) return "نام میتواند حداکثر 20 کارکتر داشته باشد";
      if (/\s/.test(value)) return "نام نباید شامل فاصله باشد";
    } else if (type === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) return "ایمیل الزامیست";
      if (!emailPattern.test(value)) return "لطفاً یک ایمیل معتبر وارد کنید";
    }
    return null; // No error
  };

  const handleBlur = () => {
    const validationError = validateInput(text);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setIsEditing(false);
    if (text !== title) {
      updateMutation.mutate(
        type === "username"
          ? { id: userid, updateparam: { username: text } }
          : { id: userid, updateparam: { email: text } },
        {
          onSuccess: () => {
            toast.success("ثبت شد");
          },
          onError: (error) => {
            toast.error("فیلتر شکن خود را خاموش کنید");
            console.log("Register Failed :", error);
          },
        }
      );
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col border">
        {isEditing ? (
          <div className="flex flex-row gap-2">
            <div className="w-10 h-10 bg-info-main rounded-xl text-text-button">
              <BiCheck
                onClick={handleBlur}
                style={{ cursor: "pointer" }}
                size={24}
              />
            </div>
            <Input
              value={text}
              inputStyle="w-[20rem] h-[2.4rem] text-2xl text-text-primary leading-10 font-normal"
              labelStyle={""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        ) : (
          <div className="flex flex-row gap-2">
            <BiEditAlt
              onClick={handleEditClick}
              style={{ cursor: "pointer" }}
              size={24}
            />
            <p className="text-2xl text-text-primary leading-10 font-normal">
              {text}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default EditField;

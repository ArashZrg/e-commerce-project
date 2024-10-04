import Button from "../../../common/button/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../../../../services/productService";

const CommentForm = () => {
  const { id } = useParams();
  const [selectedScore, setSelectedScore] = useState("");
  const [comment, setComment] = useState("");

  const createRev = async () => {
    return await productService.createReview(
      Number(selectedScore),
      comment,
      String(id)
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedScore && comment) {
      createRev();
      setSelectedScore("");
      setComment("");
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-start gap-5">
        <label
          htmlFor="score"
          className="text-text-primary text-[1.6rem] font-normal"
        >
          امتیاز
        </label>
        <select
          id="score"
          className="w-full h-14 rounded-xl px-5 outline-none border-slate-200 border-2 text-[1.6rem] font-normal"
          value={selectedScore}
          onChange={(e) => setSelectedScore(e.target.value)}
        >
          <option disabled value="">
            انتخاب امتیاز
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="flex flex-col justify-center items-start gap-5">
        <label
          htmlFor="comment-area"
          className="text-text-primary text-[1.6rem] font-normal"
        >
          نظر
        </label>
        <textarea
          id="comment-area"
          className="w-full h-52 rounded-xl p-5 outline-none border-slate-200 border-2 text-[1.6rem] font-normal"
          placeholder="نظر خود را وارد نمایید"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <Button className="bg-primary-main text-text-button flex justify-center items-center px-[1.2rem] py-[0.8rem] rounded-[0.8rem] text-[1.4rem] font-normal w-[7.3rem] h-[4rem]">
        ثبت نظر
      </Button>
    </form>
  );
};

export default CommentForm;

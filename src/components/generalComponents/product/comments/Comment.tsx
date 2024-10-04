import { useParams } from "react-router-dom";
import productService from "../../../../services/productService";
import { useEffect, useState } from "react";

interface Review {
  comment: string;
  createdAt: string;
  name: string;
  rating: number;
  updateAt: string;
  user: string;
  _id: string;
}

const Comment = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { id } = useParams();

  const fetchProduct = async () => {
    const res = await productService.getProduct(String(id));
    setReviews(res.reviews);
  };

  useEffect(() => {
    fetchProduct();
    reviews.map((rev) => console.log(rev));
  }, [id]);

  return (
    <>
      {reviews.map((review) => (
        <div
          className="bg-base-side w-full rounded-[0.8rem] p-6 flex flex-col gap-5"
          key={review._id}
        >
          <div className="flex justify-between items-center text-text-secondary text-[1.4rem] font-normal">
            <p>{review.name}</p>
            <p>{review.createdAt}</p>
          </div>
          <div className="text-text-primary font-normal text-[1.4rem]">
            {review.comment}
          </div>
          <div>{review.rating}</div>
        </div>
      ))}
    </>
  );
};

export default Comment;

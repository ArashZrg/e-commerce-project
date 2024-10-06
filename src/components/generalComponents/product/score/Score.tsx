import { FaStar } from "react-icons/fa";

interface IScoreProps {
  count: number;
}

const Score: React.FC<IScoreProps> = ({ count }) => {
  return (
    <div className="flex flex-row-reverse">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} color={count > index ? "black" : "gray"} />
      ))}
    </div>
  );
};

export default Score;

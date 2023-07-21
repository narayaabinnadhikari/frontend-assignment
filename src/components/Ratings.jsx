import { FaStar } from "react-icons/fa";

const Ratings =() => {
    let value = Math.random()*5;
    const stars =Array.from({length:5},(_,index)=>index+1);
    return (
      <div className="flex">
        {stars.map((star) => (
          <FaStar
            key={star}
            className={star <= value ? "text-yellow-500" : "text-gray-300"}
          />
        ))}
      </div>
    );
}
export default Ratings;

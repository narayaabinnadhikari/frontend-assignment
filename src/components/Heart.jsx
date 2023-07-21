
import {useState} from 'react'
import {FaHeart} from 'react-icons/fa'

function Heart() {
    const [isLiked, setIsLiked] = useState("false");
  return (
    <div>
      <FaHeart
        className={`absolute top-3 left-3 text-2xl cursor-pointer ${
          isLiked ? "text-red-500" : "text-white"
        }`}
        onClick={() => setIsLiked(!isLiked)}
      />
    </div>
  );
}

export default Heart;
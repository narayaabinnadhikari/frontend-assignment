import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Heart from "./Heart";
import Ratings from "./Ratings";

export default function Product({ item }) {
  return (
    <div
      key={item.id}
      className=" relative bg-white p-6 shasow rounded-lg flex flex-col justify-center"
    >
      <Link key={item.id} to={`/details/${item.id}`}>
        <img
          src={item.image}
          alt={item.title}
          className="w-80 h-80 object-contain"
        />
        <div className="items-start">
          <h3 className="text-lg font-bold mt-5 mb-3">{item.title}</h3>
          <p className="text-red-500 font-bold mb-3">${item.price}</p>
        </div>
      </Link>
      <Heart />
      <Ratings />
    </div>
  );
}

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
  }),
};

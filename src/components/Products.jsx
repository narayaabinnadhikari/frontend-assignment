import PropTypes from "prop-types";

import Product from "./Product";

export default function Products({ data, isLoading }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-200 p-4">
      {!isLoading ? (
        data.map((item) => <Product key={item.id} item={item} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

Products.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

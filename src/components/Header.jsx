import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

import Shoppingcart from "./Shoppingcart";

export default function Header({ hideSearch = false }) {
  const navigate = useNavigate();
  return (
    <header className="flex flex-row justify-between p-4 bg-white border-b-4">
      <div className="flex items-center">
        <Link to={"/"}>
          <div className="font-bold text-4xl text-blue-700 uppercase">
            Online Store
          </div>
        </Link>
      </div>
      <div className="flex mr-10 items-center">
        {!hideSearch && (
          <div className="mr-5">
            <button
              onClick={() => navigate("/search")}
              className="h-12 w-48 overflow-hidden rounded-lg bg-blue-500 text-lg shadow text-white"
            >
              Search here ...
            </button>
          </div>
        )}
        <Shoppingcart />
      </div>
    </header>
  );
}

Header.propTypes = {
  hideSearch: PropTypes.bool,
};

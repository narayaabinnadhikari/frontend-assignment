import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Searchpage() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/results?query=${searchQuery}");
  };
  const data = ["price", "item", "size"];

  return (
    <>
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.nodeValue)}
          className=" py-2 px-4 border border-gray-300 rounded-l mr-2 "
        ></input>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search{" "}
        </button>
      </form>
      <div>
        <h1 className="text-2xl font-bold">LIST OF RESULTS</h1>
        <ul className="space-y-4">
          {data.map((item) => (
            <li key={item.id} className="bg-gray-100 p-4 rounded">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-green-500">${item.price}</p>
              </div>
              <Link to={"/details/${item.id}"}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Searchpage;

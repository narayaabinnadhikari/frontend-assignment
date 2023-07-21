import { useState } from "react";
import { useQuery } from "react-query";

import Header from "./components/Header";
import Products from "./components/Products";

function SearchPage() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(`https://fakestoreapi.com/products?query`).then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occured: " + error.message;
  function handleSubmit(e) {
    e.preventDefault();
    setSearchQuery(searchInput);
  }

  const getItems = () => {
    if (!searchQuery) return [];

    return data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  console.log(searchQuery);
  return (
    <>
      <Header hideSearch />
      <div className="px-10">
        <div className="w-full pt-4 justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center  mt-5"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              className="px-4 w-1/2 border border-gray-300 rounded-md mr-3 py-4 text-2xl font-bold"
            ></input>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded text-2xl font-bold"
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <h1 className="text-2xl font-bold mt-10">LIST OF RESULTS</h1>
          <Products data={getItems()} />
        </div>
      </div>
    </>
  );
}

export default SearchPage;

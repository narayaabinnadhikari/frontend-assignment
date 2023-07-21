import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Heart from "./components/Heart";
import Header from "./components/Header";
import Ratings from "./components/Ratings";

function Details() {
  const { id } = useParams();

  const { data: item, isLoading } = useQuery(["item", id], () =>
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
  );
  if (isLoading) return "Loading...";
  // if (error) return "An error has occured: " + error.message;
  return (
    <div>
      <Header />
      <div className="bg-gray-200 p-6 h-full">
        <div className="bg-white rounded p-6 border-solid border-2 border-silver-200">
          <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
          <div className="flex flex-col md:flex-row justify-around">
            <div className=" relative max-w-md grow-1">
              <img
                src={item.image}
                alt={item.title}
                className="w-4/6 mb-4 object-contain rounded mx-8"
              />
              <Heart />
            </div>
            <div className=" relative max-w-md grow-0">
              <p className="text-red-500 text-lg m-1 font-bold">
                Category: {item.category}{" "}
              </p>
              <p className="text-black font-bold text-lg mb-4">
                Price: ${item.price}
              </p>

              <p className="text-justify">{item.description}</p>
              <Ratings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;

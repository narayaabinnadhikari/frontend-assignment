import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import logo from "./assets/onlinestore-logo.png";

function Landingpage() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(`https://fakestoreapi.com/products`).then((res) => res.json())
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occured: " + error.message;
  return (
    <div>
      <div>
        <header className="flex flex-row justify-around p-4 bg-emerald-200">
          <img src={logo} alt="OnlineStore logo" className="h-14 p-0" />
        </header>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-200 p-4">
        {data ? (
          data.map((item) => (
            <div key={item.id} className="bg-white p-4 shasow">
              <Link key={item.id} to={`/details/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain"
                />
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-700">${item.price}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Landingpage;

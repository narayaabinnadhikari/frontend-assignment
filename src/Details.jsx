import { useQuery } from "react-query";
import { useParams } from "react-router-dom";



 function Details() {
  const {id} =useParams();

  const { data: item, isLoading} = useQuery(["item",id], () =>
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
  );
  if (isLoading) return "Loading...";
  // if (error) return "An error has occured: " + error.message;
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded p-6">
      <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
      <img src={item.image} alt={item.title} className="w-4/6 mb-4 rounded" />
      <p className="text-gray-500 mb-4 bg-lime-200">Price: ${item.price}</p>
      <p>{item.description}</p>
      <p className="text-green-500 text-lg mb-4">Category: {item.category} </p>
    </div>
  );
}
export default Details;
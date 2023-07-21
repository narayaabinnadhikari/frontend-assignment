import { useQuery } from "react-query";

import Header from "./components/Header";
import Products from "./components/Products";

function LandingPage() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(`https://fakestoreapi.com/products`).then((res) => res.json())
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occured: " + error.message;
  return (
    <div>
      <Header />
      <Products data={data} isLoading={isLoading} />
    </div>
  );
}

export default LandingPage;

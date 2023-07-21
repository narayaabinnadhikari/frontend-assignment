import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Details from "./Details";
import Searchpage from "./SearchPage";
import Landingpage from "./LandingPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" Component={Landingpage} />
          <Route path="/search" Component={Searchpage} />
          <Route path="/details/:id" Component={Details} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

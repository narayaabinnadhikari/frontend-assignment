import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searchpage from "./Searchpage";
import Details from "./Details";
import Landingpage from "./Landingpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Landingpage} />
        <Route path="/Searchpage" Component={Searchpage} />
        <Route path="/details/:id" Component={Details} />
      </Routes>
    </Router>
  );
}

export default App;

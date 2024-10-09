import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ViewToken from "./pages/ViewToken";

function App() {
  return (
    <Router>
      <div className="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/token/:id" element={<ViewToken />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

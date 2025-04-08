import { Routes, Route, Link } from "react-router-dom";
import { Blue } from "./components/Blue";
import { Red } from "./components/Red";
import { Home } from "./components/Home";
import "./App.css";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link>blue</Link>
        <Link>red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

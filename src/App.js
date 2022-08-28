import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation/Navigation";
import Home from "./components/HomePage/Home/Home";

function App() {
  return (
    <div className="container-fluid p-0">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" />
      </Routes>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Users from "./pages/Users";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" exact element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

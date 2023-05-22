import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import Pokedex from "./Pages/Pokedex"
import Berries from "./Pages/Berries";
import Items from "./Pages/Items"

function App() {
  return ( 
    <div>
      <Navbar/>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pokedex" element={<Pokedex />} />
          <Route path="/Berries" element={<Berries />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;

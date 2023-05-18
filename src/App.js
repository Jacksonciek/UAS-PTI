import "./index.css"
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import About from "./Pages/About";
// import FAQ from "./Pages/FAQ";
import { Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <div>
      <Navbar/>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import About from "./Pages/About";
// import FAQ from "./Pages/FAQ";
import { Route, Routes } from "react-router-dom";
import TopHeadline from "./Pages/TopHeadline";

function App() {
  return ( 
    <div>
      <Navbar/>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/TopHeadline" element={<TopHeadline />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;

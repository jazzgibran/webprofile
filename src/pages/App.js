import {
  BrowserRouter as Router, Route, NavLink, BrowserRouter, Routes,
} from "react-router-dom";

import AnimatedRoutes from "../components/AnimatedRoutes";
import Navbar from "../components/Navbar";

function App() {

  return (
    <div className=""> 
        <BrowserRouter>
          <AnimatedRoutes/>
        </BrowserRouter>
    </div>
  );
}

export default App;

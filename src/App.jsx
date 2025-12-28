import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#C5A992]/10 h-full w-full">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

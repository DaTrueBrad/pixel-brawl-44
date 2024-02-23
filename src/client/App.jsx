import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-gray-700">
      <Header />
      <Outlet />
    </main>
  );
}

export default App;

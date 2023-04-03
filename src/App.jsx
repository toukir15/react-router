import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>this is div</div>,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <div className="App"></div>;
}

export default App;

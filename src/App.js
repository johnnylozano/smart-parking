import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  // Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Home } from "src/pages/home";
import { Search } from "src/pages/search";
import { Parking } from "src/pages/parking";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const Root = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <>
        {/* 
          !Todo: Create a new navbar
        */}
        <Navbar toggle={toggleMenu} />
        <div>
          <Outlet />
        </div>
      </>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/parking" element={<Parking />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

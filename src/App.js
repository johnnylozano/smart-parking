import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  // Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Home } from "src/pages/home/home";
import { Search } from "src/pages/search";
import { Parking } from "src/pages/parking";
import Navbar from "./components/Navbar";
import { SignIn } from "./pages/signin";
import Footer from "./components/Footer";

function App() {
  const Root = () => {
    return (
      <>
        {/* 
          !Todo: Create a new navbar
        */}
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/parking" exact element={<Parking />} />
        <Route path="signin" exact element={<SignIn />} />
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

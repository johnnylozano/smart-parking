import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Home } from "src/pages/home";
import { Search } from "src/pages/search";
import { Parking } from "src/pages/parking";

function App() {
  const Root = () => {
    return (
      <>
        {/* temp navbar */}
        <div className="">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/parking">Parking</Link>
        </div>
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

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
import { AuthProvider, AuthContext } from "./context/AuthProvider";
// AWS Auth
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useContext } from "react";
Amplify.configure(awsconfig);

function PrivateRoute({ element, ...rest }) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    element
  ) : (
    <Authenticator
      signUpConfig={{
        signUpFields: [
          {
            label: "KSU ID",
            type: "custom:ksuId",
            required: true,
            placeholder: "Enter your KSU ID",
          },
          {
            label: "Car Make",
            type: "custom:CarMake",
            required: true,
            placeholder: "Enter your car make",
          },
          {
            label: "Car Model",
            type: "custom:CarModel",
            required: true,
            placeholder: "Enter your car model",
          },
          {
            label: "Car Year",
            type: "custom:CarYear",
            required: true,
            placeholder: "Enter your car year",
          },
          {
            label: "Color",
            type: "custom:color",
            required: true,
            placeholder: "Enter your car color",
          },
        ],
      }}
    />
  );
}

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
        <Route path="/search" element={<Search />} />
        <Route path="/parking" exact element={<Parking />} />
        <Route path="/signin" exact element={<SignIn />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;

// routing
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//components
import MyFooter from "./components/MyFooter/MyFooter";
import MyNavbar from "./components/MyNavbar/MyNavbar";

//pages
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Kwalifikacje from "./pages/Kwalifikacje/Kwalifikacje";
import Kontakt from "./pages/Kontakt/Kontakt";
import Cart from "./pages/Cart/Cart";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// layout of the app
const Layout = () => {
  return (
    <div className="app">
      <MyNavbar />
      <Outlet />
      <MyFooter />
    </div>
  );
};

// routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/kontakt",
        element: <Kontakt />,
      },
      {
        path: "/kwalifikacje",
        element: <Kwalifikacje />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
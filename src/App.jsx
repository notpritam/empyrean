import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Root } from "postcss";
import Collections from "./pages/Collections";
import CollectionProducts from "./pages/CollectionProducts";
import Product from "./pages/Product";
import Sidebar from "./components/Sidebar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/collections",
      element: <Collections />,
    },
    {
      path: "/collections/:id",
      element: <CollectionProducts />,
    },
    {
      path: "/products/:id",
      element: <Product />,
    },
    {
      path: "/sidebar",
      element: <Sidebar />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

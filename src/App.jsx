import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Root } from "postcss";
import Collections from "./pages/Collections";
import CollectionProducts from "./pages/CollectionProducts";

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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

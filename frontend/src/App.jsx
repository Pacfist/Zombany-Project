import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop"; // Import the Shop component
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> }, // Add Shop route here
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

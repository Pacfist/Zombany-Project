import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

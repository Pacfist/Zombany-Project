import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import ScannerPage from "./pages/ScannerPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "/", element: <Home /> },
    { path: "/screen", element: <ScannerPage /> }],
  },
  

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

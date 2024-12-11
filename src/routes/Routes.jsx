import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AllServices from "../pages/AllServices";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <AllServices /> },
    ]
  }
]);

export default router;
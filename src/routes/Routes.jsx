import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AllServices from "../pages/AllServices";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import AddService from "../pages/AddService";
import ManageServices from "../pages/ManageServices";
import ServicesToDo from "../pages/ServicesToDo";
import BookedService from "../pages/BookedService";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DashBoard from "../pages/DashBoard";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <AllServices /> },
      { path: '/add-service', element: <AddService /> },
      { path: '/manage-services', element: <ManageServices /> },
      { path: '/services-to-do', element: <ServicesToDo /> },
      { path: '/booked-services', element: <BookedService /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
    ]
  },
  { path: 'signup', element: <Registration /> },
  { path: 'signin', element: <Login /> },
  { path: 'dashboard', element: <DashBoard /> }
]);

export default router;
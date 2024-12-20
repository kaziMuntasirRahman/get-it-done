import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import Root from "../Root";
import About from "../pages/About";
import AddService from "../pages/AddService";
import AllServices from "../pages/AllServices";
import BookedService from "../pages/BookedService";
import ChangePassword from "../pages/ChangePassword";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ManageServices from "../pages/ManageServices";
import Notifications from "../pages/Notifications";
import Registration from "../pages/Registration";
import ServicesToDo from "../pages/ServicesToDo";
import UpdateProfile from "../pages/UpdateProfile";
import UserSettings from "../pages/UserSettings";
import ViewProfile from "../pages/ViewProfile";
import DashBoardContainer from "../pages/DashBoardContainer";
import DashBoard from "../pages/DashBoard";
import Resources from "../pages/Resources";
import WhatsNew from "../pages/WhatsNew";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // { path: '/', element: <Home /> },
      { index: true, element: <Home /> },
      { path: '/services', element: <AllServices /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoardContainer /></PrivateRoute>,
    children: [
      // { path: '', element: <DashBoard /> },
      { index: true, element: <DashBoard /> },
      { path: 'add-service', element: <AddService /> },
      { path: 'manage-services', element: <ManageServices /> },
      { path: 'services-to-do', element: <ServicesToDo /> },
      { path: 'booked-services', element: <BookedService /> },
      { path: 'view-profile', element: <ViewProfile /> },
      { path: 'update-profile', element: <UpdateProfile /> },
      { path: 'change-password', element: <ChangePassword /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'user-settings', element: <UserSettings /> },
    ]
  },
  { path: 'whats-new', element: <WhatsNew /> },
  { path: 'resources', element: <Resources /> },
  { path: 'signup', element: <Registration /> },
  { path: 'signin', element: <Login /> },
]);

export default router;
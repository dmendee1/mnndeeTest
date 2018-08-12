// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import Login from "../views/Dashboard/Login.jsx";
import Register from "../views/Dashboard/Register.jsx";
import OrderList from "../views/OrderList/OrderList.jsx";
import WorkerList from "../views/Worker/WorkerList.jsx";
import TableList from "../views/TableList/TableList.jsx";
import Typography from "../views/Typography/Typography.jsx";
import Maps from "../views/Maps/Maps.jsx";
import NotificationsPage from "../views/Notifications/Notifications.jsx";
import UpgradeToPro from "../views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Нүүр",
    navbarName: "Нүүр",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Ажилчид",
    navbarName: "Ажилчид",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/order",
    sidebarName: "Захиалгын жагсаалт",
    navbarName: "Захиалгын жагсаалт",
    icon: "content_paste",
    component: OrderList
  },
  {
    path: "/worker",
    sidebarName: "Ажилчидын жагсаалт",
    navbarName: "Ажилчидын жагсаалт",
    icon: "content_paste",
    component: WorkerList
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/login",
    sidebarName: "Login",
    navbarName: "Login",
    icon: LocationOn,
    component: Login
  },
  {
    path: "/register",
    sidebarName: "Register",
    navbarName: "Register",
    icon: LocationOn,
    component: Register
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro
  },
  { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
];

export default dashboardRoutes;

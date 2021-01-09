import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Books from "views/Books.js";
import UserLists from "views/UserLists.js";
import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-lists",
    name: "User Lists",
    icon: "files_paper",
    component: UserLists,
    layout: "/admin",
  },
  {
    path: "/books",
    name: "Books",
    icon: "design_image",
    component: Books,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
];
export default dashRoutes;

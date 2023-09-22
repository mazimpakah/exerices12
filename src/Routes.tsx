import Dashboard from "./pages/dashboard";
import CustomerList from "./pages/customer";
import UserList from "./pages/user";

const routes:any = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "fas fa-dashboard",
      component: <Dashboard />,
      layout: "/admin"
    },
    {
      path: "/customer",
      name: "Customer",
      icon: "fas fa-person",
      component: <CustomerList />,
      layout: "/customer",
    },
    {
      path: "/user",
      name: "User",
      icon: "fas fa-user",
      component: <UserList />,
      layout: "/user",
    },
  ];
  export default routes;
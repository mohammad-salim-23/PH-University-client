import App from "../App";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin/>,
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty/>,
      },
      {
        name: "Dashboard",
        path: "/admin/create-student",
        element: <CreateStudent />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Offered Course",
        path: "/admin/offered-course",
        element: <CreateAdmin/>,
      },
    ],
  },
];
export const adminPaths = [
  {
    path: "/admin",
    element: <App />,
    children: [
      //relative paths

      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
];

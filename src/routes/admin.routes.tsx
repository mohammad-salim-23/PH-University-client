
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
   {
       name: 'Academic Management',
       children:[
        {
          name: 'Academic Semester',
          path:'academic-semester',
          element:<AcademicSemester/>
        }
       ]
   },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin/>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty/>,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
  
];

  //   (acc: TSidebarItem[], item)=>{
  //       if(item.path && item.name){
  //           acc.push({
  //               key:item.name,
  //               label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
  //           });
  //       }
  //   if(item.children){
  //       acc.push({
  //           key:item.name,
  //           label:item.name,
  //           children: item.children.map((child)=>({
  //               key:child.name,
  //               label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
  //           }))
  //       });
  //   }
  //   console.log(acc);
  //   return acc;
  //   },
  //   []
  // )
   //programatical way

    // export const adminRoutes = adminPaths.reduce((acc:TRoute[],item)=>{
    //     if(item.path && item.element)
    //     {
    //         acc.push({
    //             path: item.path,
    //             element: item.element
    //         });
    //     }

    //     if(item.children){
    //         item.children.forEach((child)=>{
    //             acc.push({
    //                 path:child.path,
    //                 element:child.element
    //             });
    //         });
    //     }
    //     console.log(acc);
    //     return acc;
    // }, [])

//Hard coded way
// export const adminPaths = [
//   {
//     path: "/admin",
//     element: <App />,
//     children: [
//       //relative paths

//       {
//         path: "dashboard",
//         element: <AdminDashboard />,
//       },
//       {
//         path: "create-student",
//         element: <CreateStudent />,
//       },
//       {
//         path: "create-admin",
//         element: <CreateAdmin />,
//       },
//       {
//         path: "create-faculty",
//         element: <CreateFaculty />,
//       },
//     ],
//   },
// ];

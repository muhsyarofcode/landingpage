import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./errorroute";
import Landing from "../pages/landingpage/landing";
import P1 from "../pages/projectspage/project1";
import P2 from "../pages/projectspage/project2";
import P3 from "../pages/projectspage/project3";
import P4 from "../pages/projectspage/project4";
import P5 from "../pages/projectspage/project5";
import P6 from "../pages/projectspage/project6";
import Dashboard from "../components/dashboard/dashboard";
import CreatePass from "../components/createpass/createpass";
import Portal from "../components/login/login";



function Route (){
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Landing/>,
          errorElement: <ErrorPage/>
        },
        {
          path: "/name_project_1",
          element: <P1/>,
        },
        {
          path: "/name_project_2",
          element: <P2/>,
        }, 
        {
          path: "/name_project_3",
          element: <P3/>,
        },
        {
          path: "/name_project_4",
          element: <P4/>,
        },
        {
          path: "/name_project_5",
          element: <P5/>,
        },
        {
          path: "/name_project_6",
          element: <P6/>,
        },
        {
          path: "/Connect",
          element: <Portal/>
        },
        {
          path: "/Connect/dashboard",
          element: <Dashboard/>
        },
        {
          path: "/Connect/createpassword",
          element: <CreatePass/>
        }

      ]);
    
    return(

            <React.StrictMode>
              <RouterProvider router={router} />
            </React.StrictMode>
          
    )
}

export default Route;
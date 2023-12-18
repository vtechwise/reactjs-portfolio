// import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Contact, Projects, SingleProject } from "./pages";

import {loader as projectsLoader} from './pages/Projects'
import {loader as singleProjectLoader} from './pages/SingleProject'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
        loader: projectsLoader,
      },
      {
        path: "project/:id",
        element: <SingleProject />,
        loader:singleProjectLoader
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

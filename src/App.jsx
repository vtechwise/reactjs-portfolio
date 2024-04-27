// import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Contact, Projects, SingleProject,Error,About } from "./pages";

import {loader as projectsLoader} from './pages/Projects'
import {loader as singleProjectLoader} from './pages/SingleProject'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
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
        loader: singleProjectLoader,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />;
    </>
  ); 
}

export default App;

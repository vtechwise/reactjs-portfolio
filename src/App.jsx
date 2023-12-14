// import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Contact, Projects } from "./pages";
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
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

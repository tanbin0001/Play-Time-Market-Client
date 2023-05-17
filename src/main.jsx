
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Main from "./layout/Main";
import Home from "./Pages/HomePage/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div  >

    <RouterProvider router={router} />
  </div>

);
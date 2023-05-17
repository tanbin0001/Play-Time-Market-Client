
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


import { router } from "./routes/Routes";
import AuthProviders from "./AuthProvider/AuthProviders";



ReactDOM.createRoot(document.getElementById("root")).render(
  <div  >

    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </div>

);
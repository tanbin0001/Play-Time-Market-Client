import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../components/Login/Login";
import Main from "../layout/Main";
import Register from "../components/Register/Register";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import PrivateRouter from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allToys/toyDetails/:id',
                element: <PrivateRouter><ToyDetails></ToyDetails></PrivateRouter>

            }
            ,
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);
;
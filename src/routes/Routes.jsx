import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../components/Login/Login";
import Main from "../layout/Main";
import Register from "../components/Register/Register";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import PrivateRouter from "../PrivateRoute/PrivateRoute";
import AddToy from "../components/AddToy/AddToy";
import AllToys from "../components/AllToys/AllToys";

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

            },
            {
                path: '/addToy',
                element: <PrivateRouter><AddToy></AddToy></PrivateRouter>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>
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
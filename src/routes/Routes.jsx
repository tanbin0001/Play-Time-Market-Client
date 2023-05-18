import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../components/Login/Login";
import Main from "../layout/Main";
import Register from "../components/Register/Register";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import PrivateRouter from "../PrivateRoute/PrivateRoute";
import AddToy from "../components/AddToy/AddToy";
import AllToys from "../components/AllToys/AllToys";
import SingleToyDetails from "../components/SingleToyDetails/SingleToyDetails";
import MyToys from "../components/MyToys/MyToys";
import UpdateToy from "../components/UpdateToy/UpdateToy";

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
                path: '/toyDetails/:id',
                element: <PrivateRouter><ToyDetails></ToyDetails></PrivateRouter>

            },
            {
                path: '/addToy',
                element: <PrivateRouter><AddToy></AddToy></PrivateRouter>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>
            },
            {
                path: '/allToys/toysDetails/:id',
                element: <SingleToyDetails></SingleToyDetails>
            },
            {
                path: '/myToys',
                element: <MyToys></MyToys>
            },
            {
                path: '/updateToy/:id',
                element: <UpdateToy></UpdateToy>
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
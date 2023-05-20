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
import ErrorPage from "../ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRouter><SingleToyDetails></SingleToyDetails></PrivateRouter>
            },
            {
                path: '/myToys',
                element: <PrivateRouter><MyToys></MyToys></PrivateRouter>
            },
            {
                path: '/updateToy/:id',
                element: <PrivateRouter><UpdateToy></UpdateToy></PrivateRouter>
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
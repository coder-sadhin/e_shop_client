import { createBrowserRouter } from "react-router-dom";
import { serverApi } from "../../Api/MainApi";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import AddProduct from "../../Pages/DashBoard/Seller/AddProduct/AddProduct";
import MyProduct from "../../Pages/DashBoard/Seller/MyProduct/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DetailsPage from "../../Pages/ProductPage/DetailsPage";
import Products from "../../Pages/ProductPage/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:route',
                element: <PrivateRoute><Products /></PrivateRoute>,
                loader: ({ params }) => fetch(`${serverApi}/category/${params.route}`)
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`${serverApi}/details/${params.id}`),
                element: <PrivateRoute><DetailsPage /></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders />
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders />
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct />
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProduct />
            }
        ]
    }
])
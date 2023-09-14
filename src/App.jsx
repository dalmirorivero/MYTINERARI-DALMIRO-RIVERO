import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Index/Home";
import Cities from "./pages/Index/Cities";
import { CityDetail } from "./components/CityDetail/CityDetail";
import { Login } from "./components/Login/SignIn";
import { Register } from "./components/Register/SignUp";
import { useDispatch } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import { auth } from "./store/actions/authA";
import { ProtectedRoute } from "./layouts/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", 
      element: <Home /> 
      },
      {
        path: "/cities",
        element: <Cities />
      },
      {
        path: "/city/:_id",
        element: <CityDetail />
      },
      {
        path: "/login",
        element: <ProtectedRoute><Login /></ProtectedRoute> 
      },
      {
        path: "/register",
        element: <ProtectedRoute><Register /></ProtectedRoute>
      }
    ]
  }
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <GoogleOAuthProvider clientId="203716809086-s4grf0kmnudfk2ctheg05mfarf4j02q9.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;
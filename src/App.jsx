import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign_up/SignUp";
import Blogs from "./pages/blogs/Blogs";
import Dashboard from "./pages/dashboard/Dashboard";
import ErrorPage from "./pages/error/Error";
import ProtectedRoutes from "./components/ProtectedRoute";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddBlog from "./pages/blogs/AddBlog";
import { useSelector } from "react-redux";

function App() {
  const queryClient = new QueryClient();
  const isLogin = useSelector((state) => state.Auth.auth)
  console.log(isLogin,"isLogin")
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h1>
            Hello, you need to <Link to="/login">login</Link> or{" "}
            <Link to="signup">signup</Link> first{" "}
          </h1>
        </>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          element:<ProtectedRoutes/>,
          children:[
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
            {
              path: "/blogs",
              element: <Blogs />,
              children: [{ path: "/blogs/add-blog", element: <AddBlog /> }],
            },
      
          ]
        }
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

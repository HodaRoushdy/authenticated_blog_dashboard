import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoute";
import AddBlog from "./pages/blogs/addBlog/AddBlog";
import Blogs from "./pages/blogs/Blogs";
import Dashboard from "./pages/dashboard/Dashboard";
import ErrorPage from "./pages/error/Error";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign_up/SignUp";
import Navbar from "./components/Navbar/Navbar";
import { useSelector } from "react-redux";
import Logout from "./pages/logout/logout";


function App() {
  const queryClient = new QueryClient();
    const { auth } = useSelector((state) => state.Auth);
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <h1>
              Hello,
			  {auth ? <span>You can explore blogs in blogs page</span> : <span>you need to <Link to="/login">login</Link> or
				<Link to="/signup"> signup</Link> first</span>}
			   
            </h1>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          element: <ProtectedRoutes />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
            {
              path: "/blogs",
              children: [
                {
                  index: true,
                  element: <Blogs />,
                },
                {
                  path: "add-blog", // relative path
                  element: <AddBlog />,
                },
              ],
            },
			{
				path: "/logout",
				element: <Logout />,
			  },
          ],
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;

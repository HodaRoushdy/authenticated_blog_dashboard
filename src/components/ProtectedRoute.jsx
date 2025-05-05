import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = ()=>{
    console.log("entered protected route")
    const isLogin = useSelector((state) => state.Auth.auth)
    return isLogin ? <Outlet/> : <Navigate to={'/login'} replace/>
}

export default ProtectedRoutes
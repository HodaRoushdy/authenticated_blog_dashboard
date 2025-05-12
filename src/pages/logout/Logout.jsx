import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/AuthSlice"

const Logout = ()=>{
    const dispatch = useDispatch()
    const {auth} = useSelector(state=> state.Auth)
    const handleLogout = ()=>{
        dispatch(logout())
    }
    return(
        <>
        <h2>Do You Sure You Want To Logout</h2>
        <Button onClick={handleLogout} variant="outlined">
            Submit
        </Button>
        </>
    )
}

export default Logout
import { useAuth } from "../utils/auth"
import { useNavigate } from "react-router-dom"



export const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    return (
        <div>
            <h1>Welcome {auth.user}</h1>
            <button onClick={handleLogout}>Logout</button>

        </div>

    )
}

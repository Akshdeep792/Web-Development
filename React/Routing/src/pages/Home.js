import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Welcome to Home Page</h1>
            <button onClick={() => { navigate('order-confirmed', { replace: true }) }}>Place Order</button>
        </>
    )
}


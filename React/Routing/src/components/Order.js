import { useNavigate } from "react-router-dom"
export const Order = () => {

    const navigate = useNavigate()
    return <>

        <h1>Order confirmed</h1>
        <button onClick={() => { navigate(-1) }}>Go Back</button>
    </>
}
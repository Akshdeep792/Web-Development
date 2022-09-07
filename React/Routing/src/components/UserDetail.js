import { useParams } from "react-router-dom"

export const UserDetail = () => {
    const { userId } = useParams()

    return (
        <h1>Detail about user {userId}</h1>
    )
}
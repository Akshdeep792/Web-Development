
import { Outlet, useSearchParams } from "react-router-dom"
export const User = () => {
    const [searchParams, setParams] = useSearchParams()
    const getActiveUsers = searchParams.get('filter') === 'active'
    return (
        <>
            <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ul>
            <div>
                <button onClick={() => { setParams({ filter: 'active' }) }}>Active Users</button>
                <button onClick={() => { setParams({}) }}>Reset</button>

            </div>
            {getActiveUsers ? <h1>Showing Active Users</h1> : <h1>Showing All Users</h1>}
            <Outlet />
        </>
    )
} 
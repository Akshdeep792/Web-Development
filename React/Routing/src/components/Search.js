import { Link, Outlet } from "react-router-dom"

export const Search = () => {
    return (
        <>
            <input type='search' placeholder="Search Products" />
            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>

            </nav>
            <Outlet />
        </>
    )
}
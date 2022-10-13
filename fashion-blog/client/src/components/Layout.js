import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="layout">
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Alice's Fashion Blog</Link>
                    </li>

                    <li>
                        <Link to={"/posts"}>Posts</Link>
                    </li>

                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <main>
            <Outlet />
            </main>
            <footer>
                <p>All rights reserved @2022</p>
            </footer>
        </div>
    )
}

export default Layout;
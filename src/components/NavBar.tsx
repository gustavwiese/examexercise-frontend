import { Link } from 'react-router-dom'
import '../styling/navbar.css'

export default function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <nav className="navbar">
                    <ul className="ul-navbar">
                        <li>
                            <Link className="navbar-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="navbar-link" to="/deliveries">
                                Deliveries
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

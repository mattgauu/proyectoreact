import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="Brand">
                <h2>Compra Cursos</h2>
            </div>

            <ul>
                <li>1°año</li>
                <li>3°año</li>
                <li>2°año</li>
                <li>4°año</li>
                <li>5°año</li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
export default NavBar
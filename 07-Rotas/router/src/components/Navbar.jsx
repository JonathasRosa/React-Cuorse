import "./Navbar.css";
//2 - Links com React-Router
// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
return (
    <nav>
        {/*<Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> */}
        <NavLink 
        to="/"
        className={({isActive}) => (isActive ? "esta-ativo" : "não-ativo")}
        >Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
)
}

export default Navbar
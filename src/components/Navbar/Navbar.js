import "./Navbar.css"
import Button from "../Button/Button"
import CarWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = ()  => {
    return(

        <nav className="Navbar">

            <Link to='/' className="Logo">Global Tech</Link>

            <div className="AllBtn">

                <Link to='/category/Celulares' className="Botones Subrayado">Celulares</Link>
                <Link to='/category/Tablets' className="Botones Subrayado">Tablets</Link>
                <Link to='/category/Laptops' className="Botones Subrayado">Laptops</Link>
                <Link to='/category/Monitores' className="Botones Subrayado">Monitores</Link>

            </div>

            <div>
                <CarWidget/>
            </div>

        </nav>

    )
}

export default Navbar
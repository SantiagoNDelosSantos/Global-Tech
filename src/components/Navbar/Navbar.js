import "./Navbar.css"
import ButtonS from "../Button/Button"

import { Link } from "react-router-dom"

import OffcanvasS from "../OffCanvasMenu/OffCanvasMenu"
import Buscador from "../Buscador/Buscador"
import CarWidget from "../CartWidget/CartWidget"



const Navbar = ()  => {

    return(

        <nav className="Navbar">

            <div className="GridNavbar">

                <div className="GridOffCanvas"> 
                    <OffcanvasS/>
                </div>
                
                <div className="GridLogo Logo">
                    <Link to='/' className="Logo">Global Tech</Link>
                </div>
                
                <div className="GridBusqueda">
                    <Buscador/>
                </div>

                <div className="GridCarrito">
                    <CarWidget/>
                </div>

            </div>

        </nav>

    )

}

export default Navbar
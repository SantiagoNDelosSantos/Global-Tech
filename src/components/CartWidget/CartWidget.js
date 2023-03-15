import Carrito from "./assets/Carrito.png"
import "./CartWidget.css"

const CarWidget = () => {
    return (
        <div className="DivCarrito">
            <img src={Carrito} alt="Carrito-Widget" className="LogoCarrito LogoCarritoZoom"/>
            0
        </div>
    )
}

export default CarWidget
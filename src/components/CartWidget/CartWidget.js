import "./CartWidget.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";
import { useNavigate } from 'react-router-dom'

const CarWidget = () => {

    const navigate = useNavigate()
    const {totalQuantity} = useCart()

    return (

        <div onClick={() => navigate("/cart")} className="Cart">

            <FontAwesomeIcon icon={faCartShopping} className="CarritoIcon"/>
            
            <h2 className="UndCarrito">{totalQuantity}</h2>

        </div>

    )

}

export default CarWidget
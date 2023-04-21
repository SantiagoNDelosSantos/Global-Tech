import "./CartWidget.css"

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";

const CarWidget = () => {

    const {totalQuantity} = useCart()

    return (
        <div className="Cart">
            <FontAwesomeIcon icon={faCartShopping} className="CarritoIcon"/>
            <h2 className="UndCarrito">{totalQuantity}</h2>
        </div>
    )

}

export default CarWidget
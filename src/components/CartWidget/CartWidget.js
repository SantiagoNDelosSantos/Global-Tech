import "./CartWidget.css"

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";


const CarWidget = () => {
    return (
        <div className="Cart">
            <FontAwesomeIcon icon={faCartShopping} className="CarritoIcon"/>
            <h2 className="UndCarrito">0</h2>
        </div>
    )
}

export default CarWidget
import "./Item.css"
import {Link} from "react-router-dom"

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";

const Item = ({id, marca, modelo, img, precio}) => {
    return(

        <div className="Card">

            <img src={img} alt={modelo} className="ImgCards"/>

            <div className="MMPrecio">
    
                <div className="ModeloMarca">
                    <h1 className="MarcModels"> {modelo}</h1>
                    <h2 className="MarcModels">{marca}</h2>
                </div>    

                <h2 className="Precio">$ {precio}</h2>
    
            </div>

            <div className="InfoCarrito">

                <Link to={`/item/${id}`} className="Info"> Info+</Link>

                <FontAwesomeIcon icon={faCartShopping} className="CarritoIconItem"/>
            
            </div>

        </div>

    )
}

export default Item
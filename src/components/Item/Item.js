import "./Item.css"
import Button from "../Button/Button"
import {Link} from "react-router-dom"

const Item = ({id, marca, modelo, img, precio}) => {
    return(
        <div className="Card">
            <h1 className="MarcModels">{marca}</h1>
            <h1 className="MarcModels">{modelo}</h1>
            <img src={img} alt={modelo} className="ImgCards"/>
            <h2 className="Precio">Precio: ${precio}</h2>
            <Link to={`/item/${id}`} className="Info">+ Info</Link>
        </div>
    )
}

export default Item
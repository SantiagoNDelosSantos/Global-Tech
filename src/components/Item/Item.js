import "./Item.css"
import {Link} from "react-router-dom"

const Item = ({id, marca, modelo, img, precio}) => { 

    return(

        <div className="Card">

            <img src={img} alt={modelo} className="ImgCards"/>

            <h1 className="MarcModels Modelo"> {modelo}</h1>
            
            <h2 className="MarcModels Marca">{marca}</h2>
               
            <h2 className="Precio">$ {precio}</h2>
    
            <div className="InfoCarrito">

                <Link to={`/item/${id}`} className="Info"> + Info 
                </Link>

            </div>

        </div>

    )
}

export default Item
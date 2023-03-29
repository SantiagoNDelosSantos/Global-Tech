import "./Item.css"

const Item = ({marca, modelo, img, precio}) => {
    return(
        <div className="Card">
            <h1 className="MarcModels">{marca}</h1>
            <h1 className="MarcModels">{modelo}</h1>
            <img src={img} className="ImgCards"/>
            <h2 className="Precio">Precio: ${precio}</h2>
            
        </div>
    )
}

export default Item
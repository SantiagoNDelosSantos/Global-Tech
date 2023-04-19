import './ItemDetail.css'

const ItemDetail = ({img, marca, modelo, description, color, precio, stock}) => {

    return(

        <div className='ItemDetail'>

            <div className='ImgDetalles'>
                <img className='ImgDetallesImg' src={img} alt={modelo}></img>
            </div>    

            <h1 className='DetaMarca'>{marca}</h1>

            <h2 className='DetaModelo'>{modelo}</h2>

            <p className='Description'><strong>Especificaciones:</strong> {description}</p>

            <div className='Detalles'>
                    
                <p><strong>Color:</strong> {color}.</p>

                <p><strong>Stock:</strong> {stock} Und.</p>

                <p><strong>Precio:</strong> $ {precio}.</p>

            </div>
                    
            <div className='Carrito'>
               <button className='CarritoBTN'>Agregar al Carrito</button>
            </div>
 
        </div>

    )
    
}

export default ItemDetail
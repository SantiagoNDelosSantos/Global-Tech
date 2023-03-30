import { Button } from 'bootstrap'
import './ItemDetail.css'

const ItemDetail = ({img, marca, modelo, description, color, precio, stock}) => {

    return(

            <div className='ItemDetail'>

                <div className='Centrar'>
                    <img src={img} className='ImgDetails'/>
                </div>

                <div className='DetDerch'> 
                    
                    <h1 className='Prest'>{marca} - {modelo} </h1>

                    <p className='Especific'><strong>Especificaciones:</strong> {description}</p>

                    <p className='Detalles'><strong>Color:</strong>  {color}.</p>

                    <p className='Detalles'><strong>Stock:</strong> {stock} Und.</p>

                    <p className='Detalles'><strong>Precio:</strong> ${precio}.</p>

                    <button className='Carrito'>Agregar al Carrito</button>

                </div>

            </div>

    )
    
}

export default ItemDetail

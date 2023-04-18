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

                    <div className='Detalles'>
                    
                        <p><strong>Color:</strong>  {color}.</p>

                        <p><strong>Stock:</strong> {stock} Und.</p>

                        <p><strong>Precio:</strong> ${precio}.</p>

                    </div>
                    
                    <button className='Carrito'>Agregar al Carrito</button>

                </div>


            </div>

    )
    
}

export default ItemDetail

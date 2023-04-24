import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../notification/NotificationService';

const ItemDetail = ({id, img, img2, marca, modelo, description, color, precio, stock}) => {

    const {addItem, getProductQuantity} = useCart()
    const {setNotification} = useNotification()

    const handleOnAdd = (quantity) => {

        const productToAdd ={
            id, marca, modelo, precio, quantity, stock, 
        }
        addItem(productToAdd)
        setNotification('success', `Se agrego correctamente ${quantity} Und. de ${marca} ${modelo}`)
    }

    const productQuantity = getProductQuantity(id)

    return(

        <div className='ItemDetail'>  

            <div className='ImgDetalles'>

                <div>
                    <img className="ImgDetallesImg IMG1" src={img} alt={modelo}/>
                </div>
                
                <div>
                    <img className="ImgDetallesImg IMG2" src={img2} alt={modelo}/>
                </div>

            </div>    

            <h1 className='DetaMarca'>{marca}</h1>

            <h2 className='DetaModelo'>{modelo}</h2>

            <div className='Description'>
                <p><strong>Especificaciones: </strong>  {description}</p>
            </div>

            <div className='Detalles'>
                    
                <p><strong>Color:</strong> {color}.</p>

                <p><strong>Stock:</strong> {stock} Und.</p>

                <p><strong>Precio:</strong> USD {precio}.</p>

            </div>

            <div className='Carrito'>

                <ItemCount stock={stock} initial={productQuantity || 1} onAdd={handleOnAdd}/>

            </div>

        </div>

    )
}

export default ItemDetail
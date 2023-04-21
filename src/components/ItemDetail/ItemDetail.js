import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const ItemDetail = ({id, img, marca, modelo, description, color, precio, stock}) => {

    const {addItem, isInCart} = useCart()

    const handleOnAdd = (quantity) => {
        const productToAdd ={
            id, marca, modelo, precio, quantity 
        }
        addItem(productToAdd)
    }

    return(

        <div className='ItemDetail'>  

            <div className='ImgDetalles'>

                <img className="ImgDetallesImg" src={img} alt={modelo}/>

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

                { 
                    isInCart(id) ? (
                        <Link to='/cart' className='FinCompraBTN'>Terminar compra</Link>
                    ) :(
                        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                    )
                }

                
            </div>

        </div>

    )
}

export default ItemDetail
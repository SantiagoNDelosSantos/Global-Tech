import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import "./Cart.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {

    const {cart, total, incrementQuantity, disminQuantity, removeItem, clearCart} = useCart()

    return(

        <div className="CartView">
            
            <h1 className="TitleCart">Carrito:</h1>
            
            {cart.length === 0 ? (
                <h2 className="TitleCart">Tu carrito está vacío...</h2>
            ) : (
                <div > 

                {cart.map(prod => {

                    return(

                        <div key={prod.id} className="InfoProductsCart">

                            <div onClick={() => removeItem(prod.id)} className="Contenedor Item">

                                <FontAwesomeIcon icon={faTrash} className="EliminarItemCarritoIcon"/>

                            </div>

                            <h2 className="Info1">{prod.marca} - {prod.modelo}</h2>
                                        
                            <h2 className="Info2">USD {prod.precio} x Und.</h2>

                            <h2 className="Info3">Stock: {prod.stock}.</h2>

                            <div className="CountEnCarrito">                              
                                    
                                <button onClick={() => disminQuantity(prod.id)} className="InfoMenos Count1Cart">-</button>
                                                
                                <h2 className="Info4 ContadorCart">{prod.quantity}</h2>

                                <button onClick={() => incrementQuantity(prod.id, prod.stock)} className="InfoMas Count2Cart">+</button>

                            </div>
            
                        </div>
                    )

                })}

                </div>
            )}

            {cart.length > 0 && (
                <div className="FoCart">

                    <button onClick={() => clearCart()} className="VaciarCart">Vaciar Cart</button>

                    <h1 className="TotalCart">Total: USD {total}</h1>

                    <Link to='/checkout' className="Option GenerarOrden1">Checkout</Link>

                </div>
            )}

        </div>
        
    )
}

export default Cart

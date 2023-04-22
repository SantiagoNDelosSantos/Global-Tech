import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import "./Cart.css"

const Cart = () => {

    const {cart, total, incrementQuantity, disminQuantity} = useCart()

    return(

        <div>
            <h1>Cart Vew</h1>
            <div>
                {
                    cart.map(prod => {
                        return(
                            <div key={prod.id} className="CarritoView">

                            
                                <h2>{prod.marca} - {prod.modelo}</h2>
                                <h2>Cantidad: {prod.quantity}</h2>
                                <h2>$ {prod.precio} x Und.</h2>
                                <h2>{prod.stock}</h2>
                                <button onClick={() => disminQuantity(prod.id)}>-</button>
                                <button onClick={() => incrementQuantity(prod.id, prod.stock)}>+</button>

                            </div>
                        )
                    })
                }
            </div>
            <h1>Total de la compra: ${total}</h1>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
        
    )
}

export default Cart
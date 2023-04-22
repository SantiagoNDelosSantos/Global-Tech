import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)  

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
    
        <div className="CountCarrito">
            
            <button onClick={decrement} className="Count1">-</button>
            
            <h1 className="Contador">{quantity} </h1>

            <button onClick={increment} 
            className="Count2">+</button>

            <button onClick={() => onAdd(quantity)}className="CarritoBTN">Agregar al Carrito</button>

        </div>
    )

}

export default ItemCount
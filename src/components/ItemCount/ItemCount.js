import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) setCount(prev => prev + 1)
    }

    const decrement = () => {
        if(count > 1) setCount(prev => prev - 1)
    }

    return(
        <div className="CountCarrito">
            
            <button onClick={decrement} className="Count1">-</button>
            
            <h1 className="Contador" >{count} </h1>

            <button onClick={increment} 
            className="Count2">+</button>

            <button onClick={() => onAdd(count)}className="CarritoBTN">Agregar al Carrito</button>

        </div>
    )

}

export default ItemCount
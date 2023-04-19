import { useState } from "react"
import Button from "../Button/Button"
import './Counter.css';

const Counter = ({title, min, max}) => {

    const [count, setCount] = useState(min)

    const [message, setMessage] = useState(``)

    {/*
    
    const increment = () => {
        setCount(count + 1)
    }

    const dismin = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    console.log(count)

    */}

    const dismin = () => {
        setMessage(``)
        if(count > min) { 
            setCount(count => count - 1)
        } else {
            setMessage(`Mínimo de compra ${min} Und.`)
        }
    }

    const increment = () => { 
        setMessage(``)
        if(count < max) {
            setCount(count => count + 1)
        } else {
            setMessage(`Maximo de compra ${max} Und.`)
        }
    }

    return(
            <div className="Contador ModalCounter">
                <h1>{title}</h1>
                <h2>{count}</h2>
                <div className="Contador">
                    <Button callback={dismin} label={"Disminuir"}/>
                    <Button callback={increment} label={"Incrementar"}/> 
                </div>
                {message !== `` && <p>{message}</p>}
                
            </div>
    )

}

export default Counter
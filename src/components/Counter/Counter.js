import { useState } from "react"
import Button from "../Button/Button"
import './Counter.css';

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)

    }

    const dismin = () => {
        if (count > 0) {
            setCount(count - 1)
        }

    }

    console.log(count)

    return(
        <div className="Contador ModalCounter">
            <h1>{count}</h1>
            <div className="Contador">
                <Button callback={dismin} label={"Disminuir"}/>
                <Button callback={increment} label={"Incrementar"}/> 
            </div>
        </div>
    )

}

export default Counter
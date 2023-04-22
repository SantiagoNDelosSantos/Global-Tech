import { useState } from "react"

const ContacForm = ({onConfirm}) => {

    const[name, setName] = useState('')
    const[phone, setPhone] = useState('')
    const[gmail, setGmail] = useState('')
    const[provincia, setProvincia] = useState('')
    const[domicilio, setDomicilio] = useState('')
    
    const handleSubmit = () => {
        const userData = {
            name, phone, gmail, provincia, domicilio
        }

        onConfirm(userData)
    }

    return (
        <form onSubmit={handleSubmit}>

            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <input value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            <input value={gmail} onChange={(e) => setGmail(e.target.value)}></input>
            <input value={provincia} onChange={(e) => setProvincia(e.target.value)}></input>
            <input value={domicilio} onChange={(e) => setDomicilio(e.target.value)}></input>

            <button>Generar orden</button>

        </form>
    )

}

export default ContacForm
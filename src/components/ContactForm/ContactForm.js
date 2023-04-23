import { useState } from "react"
import './ContactForm.css'

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
            
            <div className="ContenedorForm">

                <h1 className="TitleOrder">Orden de Compra:</h1>

                <h2 className="TextOrder">Para generar tu Orden completa el siguiente formulario.</h2>

                <div className="InputsForm">

                    <input value={name} onChange={(e) => setName(e.target.value)}  placeholder="Nombre" required className="Formu Formu1" pattern="[A-Za-z ]+" />

                    <input value={phone} onChange={(e) => setPhone(e.target.value)}  placeholder="Celular" required className="Formu Formu2" pattern="[0-9]+"/>
                        
                    <input value={gmail} onChange={(e) => setGmail(e.target.value)}  placeholder="Correo" required className="Formu Formu3" type="email"/>

                    
                    <input value={provincia} onChange={(e) => setProvincia(e.target.value)} placeholder="Provincia" required className="Formu Formu4"></input>
                    
                    <input value={domicilio} onChange={(e) => setDomicilio(e.target.value)} placeholder="Domicilio" required className="Formu Formu5"></input>

                </div>
                
                <button className="GenerarOrden2">Generar orden</button>
            
            </div>

        </form>
    )

}

export default ContacForm
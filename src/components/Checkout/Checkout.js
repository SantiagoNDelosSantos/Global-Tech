import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc} from "firebase/firestore"
import { useState } from "react"
import { useNotification } from "../../notification/NotificationService"
import Spinner from 'react-bootstrap/Spinner';
import './Checkout.css';
import ContacForm from "../ContactForm/ContactForm"

export function BorderExample() {
    return <Spinner animation="border" />;
}

const Checkout = () => {

    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false) 
    const {cart, total, clearCart} = useCart()
    const {setNotification} = useNotification()

    const createOrder = async (userData) => {

        try {

            setLoading(true)

            const objOrder = {
                buyer: userData,
                items: cart,
                total
            }
    
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const {docs} = await getDocs(productsRef)
            const bacth = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {

                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const productQuantity = productAddedToCart?.quantity
    
                if(stockDb >= productQuantity){
                    bacth.update(doc.ref, {stock: stockDb - productQuantity})
                } 
                else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0){
                bacth.commit()
                
                const ordersRef = collection(db, 'orders')
                const orderAdded = await addDoc(ordersRef, objOrder)

                clearCart()
    
                setOrderId(orderAdded.id)
    
            }
            else{
                setNotification('error', 'Verifique el Stock de los productos que tiene en su carrito.')
            }
            
        } catch (error) {
            setNotification('error', 'Hubo un error generando su orden.')
        } finally {
            setLoading(false)
        }

    }

    if(loading){
        return(
            
            <div className='Carga'>
                
                <h1 className='Cargando'>Se esta generando su orden...</h1>
                <BorderExample/>
            
            </div>
        )
    }

    if(orderId) {
        return (
            <div className='Carga'>
                <h1 className='Cargando'>
                    El id de su compra es: {orderId}
                </h1>
            </div>
        )
    }

    return(
        <div>
            <ContacForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout
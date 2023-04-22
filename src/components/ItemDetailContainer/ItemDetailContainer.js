import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'

import Spinner from 'react-bootstrap/Spinner';

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

export function BorderExample() {
    return <Spinner animation="border" />;
}

const ItemDetailContainer = () => {

    const [ product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {productId} = useParams();

    useEffect(()=>{

        setLoading(true)
        
        const productRef = doc(db, 'products', productId)

        getDoc(productRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = {id: snapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })

    }, [productId])

    if(loading){
        return(
            <div className='CargaD'>
                <h1 className='CargandoD'>Cargando...</h1>
                <BorderExample/>
            </div>
        )
    }
    
    return(
        <div className="ItDetailContainer">
            <ItemDetail {...product} />
        </div>
    )

}
export default ItemDetailContainer
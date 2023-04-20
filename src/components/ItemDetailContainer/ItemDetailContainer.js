import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'

import Spinner from 'react-bootstrap/Spinner';

export function BorderExample() {
    return <Spinner animation="border" />;
}

const ItemDetailContainer = () => {

    const [ product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams();

    useEffect(()=>{
        getProductsById(productId)
        .then(response => {
            setProduct(response)
        })
        .catch(err => {
            console.log(err)
        })  
        .finally(()=>{
            setLoading(false)
        })
    },[productId])

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
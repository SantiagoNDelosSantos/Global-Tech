import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [ product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams();
    console.log(productId)
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
        return <h2 className="Carga">Cargando...</h2>
    }
    
    return(
        <div className="ItDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer
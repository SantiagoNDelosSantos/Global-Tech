import './ItemListContainer.css';

import { useEffect, useState } from 'react';

import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner';

import { getDocs, collection, query, where} from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

export function BorderExample() {
    return <Spinner animation="border" />;
}

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        
        setLoading(true)

        const productsRef = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products') 

        getDocs(productsRef)
            .then(snapshot =>{
                console.log(snapshot)
                const productsAdapted = snapshot.docs.map(doc =>{
                const data = doc.data()
                    return{id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })


    }, [categoryId])

    if(loading) {
        return(
            <div className='Carga'>
                <h1 className='Cargando'>Cargando...</h1>
                <BorderExample/>
            </div>
        )
    }

    return(
        <div className='ILContainer'>
            <h1 className='Bienvenidos'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )    
}

export default ItemListContainer
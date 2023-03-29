import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
 
    useEffect(() => {
        getProducts() 
            .then(products => {
                setProducts(products)
            })
    }, [])

    return(
        <div className='ILContainer'>
            <h1 className='Bienvenidos'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )    
}

export default ItemListContainer
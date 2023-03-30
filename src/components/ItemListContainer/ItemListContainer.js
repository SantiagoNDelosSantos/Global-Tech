import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
 
    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId) 
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return(
        <div className='ILContainer'>
            <h1 className='Bienvenidos'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )    
}

export default ItemListContainer
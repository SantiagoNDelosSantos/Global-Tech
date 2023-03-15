import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h1 className='Bienvenidos'>
                {greeting}
            </h1>
        </div>
    )    
}

export default ItemListContainer
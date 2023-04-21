import './ItemDetail.css';

import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({img, marca, modelo, description, color, precio, stock}) => {

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} ${marca} ${modelo}`)
    }

    return(

        <div className='ItemDetail'>  

            <div className='ImgDetalles'>

                <img className="ImgDetallesImg" src={img} alt={modelo}/>

            </div>    

            <h1 className='DetaMarca'>{marca}</h1>

            <h2 className='DetaModelo'>{modelo}</h2>

            <p className='Description'><strong>Especificaciones:</strong> {description}</p>

            <div className='Detalles'>
                    
                <p><strong>Color:</strong> {color}.</p>

                <p><strong>Stock:</strong> {stock} Und.</p>

                <p><strong>Precio:</strong> $ {precio}.</p>

            </div>

            <div className='Carrito'>
                <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
            </div>

        </div>

    )
}

export default ItemDetail
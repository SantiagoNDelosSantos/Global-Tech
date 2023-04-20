import Carousel from 'react-bootstrap/Carousel';
import './CarruselItemDetail.css';

function Carrusel({ products }) {

  return (
    <Carousel slide={false}>
      {products.map((product) => (
        <Carousel.Item key={product.id}>
          <img
            className="d-block w-100 ImgDetails"
            src={product.image}
            alt={product.name}
          />
          <Carousel.Caption>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;
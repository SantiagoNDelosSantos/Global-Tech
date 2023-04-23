import "./Buscador.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


const Buscador = () => {

    return(

        <Form className="d-flex">
                        
            <Form.Control
                type="search"
                placeholder="Buscar en Inventario"
                className="me-2"
                aria-label="Buscar en Global Tech"
            />
                        
            <Button className="BotonLupa">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="Lupa"/>
            </Button>

        </Form>

    )

}

export default Buscador


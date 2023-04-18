import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars} from "@fortawesome/free-solid-svg-icons";

import "./OffCanvasMenu.css"

function OffcanvasS() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
        
            <FontAwesomeIcon icon={faBars} className="OffCanvasBurgerIcon" onClick={handleShow}/>

            <Offcanvas show={show} onHide={handleClose}>

                <Offcanvas.Header closeButton>

                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                
                </Offcanvas.Header>

                <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>

            </Offcanvas>

        </>

    );

}

export default OffcanvasS
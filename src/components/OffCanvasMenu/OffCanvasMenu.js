import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

import { Link } from "react-router-dom"


import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faMobile,} from "@fortawesome/free-solid-svg-icons";

import "./OffCanvasMenu.css"

function OffcanvasS() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
        
            <FontAwesomeIcon icon={faBars} className="OffCanvasBurgerIcon" onClick={handleShow}/>

            <Offcanvas show={show} onHide={handleClose}>

                <Offcanvas.Header closeButton className="OffcanvasHeader">

                    <Link to='/' className="OffCanvasLogo">Global Tech</Link>
                
                </Offcanvas.Header>

                <Offcanvas.Body className="AllBtn">

                        <Link to='/category/Celulares' className="Botones Subrayado">Celulares</Link>

                        <Link to='/category/Tablets' className="Botones Subrayado">Tablets</Link>

                        <Link to='/category/Laptops' className="Botones Subrayado">Laptops</Link>

                        <Link to='/category/Monitores' className="Botones Subrayado">Monitores</Link>

                </Offcanvas.Body>

            </Offcanvas>

        </>

    );

}

export default OffcanvasS
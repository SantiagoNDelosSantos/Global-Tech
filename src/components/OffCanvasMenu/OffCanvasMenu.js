import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy} from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./OffCanvasMenu.css"

function OffcanvasS() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [categories, setCategories] = useState([])

    useEffect(() =>{

        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))

        getDocs(categoriesRef)
            .then(snapshot =>{
                const categoriesAdapted = snapshot.docs.map(doc =>{
                    const data = doc.data()
                    return{id: doc.id,...data}
                })
                setCategories(categoriesAdapted)
            })
    }, [])

    console.log(categories)

    return (

        <>
        
            <FontAwesomeIcon icon={faBars} className="OffCanvasBurgerIcon" onClick={handleShow}/>

            <Offcanvas show={show} onHide={handleClose}>

                <Offcanvas.Header closeButton className="OffcanvasHeader">

                    <Link to='/' className="OffCanvasLogo">Global Tech</Link>
                
                </Offcanvas.Header>

                <Offcanvas.Body className="AllBtn">
                
                    {categories.map(cat => {
                            return(
                                <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({isActive}) => isActive ? 'ActiveOption Subrayado' : 'Botones Subrayado'}>{cat.label}</NavLink>
                            )
                        })
                    }
                    
                </Offcanvas.Body>

            </Offcanvas>

        </>

    );

}

export default OffcanvasS
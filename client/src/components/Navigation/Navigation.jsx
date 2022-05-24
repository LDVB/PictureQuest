import "./Navigation.css"
import {  Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAlignJustify, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const Navigation = () => {

    const [click, setClick]= useState (false)

    const handleClick = () => setClick(!click)

    return (
     <nav className="navBar">
         <div className="nav-container">

            <Link to="/">
                <Nav.Link  as="span" className="home" onClick={handleClick}> Picture Quest </Nav.Link>
            </Link>
         
             <ul className={click ? 'Nav-menu active' : 'Nav-menu'}>
               
                <nav className={click ? 'Nav-menu active' : 'Nav-menu'}>

                    

                    <Link to="/NuevaImagen" className="nav-item">
                        <Nav.Link  as="span" active className="NavLink" onClick={handleClick}> Añadir Imagen </Nav.Link>
                    </Link>
                    
                </nav>
             </ul>
            <div className="Nav-Icon" onClick={handleClick}>
                <FontAwesomeIcon icon={ click? faXmark : faAlignJustify} />
            </div>
         </div>
     </nav>

    )

}

export default Navigation
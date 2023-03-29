import "./Navbar.css"
import Button from "../Button/Button"
import CarWidget from "../CartWidget/CartWidget"

const Navbar = ()  => {
    return(

        <nav className="Navbar">

            <h1 className="Logo"> 
                Global Tech
            </h1>

            <div className="AllBtn">

                <Button label="Home" callback={() =>console.log("Cel")}/>
                <Button label="Celulares" callback={() =>console.log("Cel")}/>
                <Button label="Tables" callback={() =>console.log("Tab")}/>
                <Button label="Laptops" callback={() =>console.log("Lap")}/>
                <Button label="Monitores" callback={() =>console.log("Mon")}/>
                
            </div>

            <div>
                <CarWidget/>
            </div>

        </nav>

    )
}

export default Navbar
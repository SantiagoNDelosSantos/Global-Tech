import "./Navbar.css"

const Navbar = ()  => {
    return(
        <nav className="Navbar">
            <h1>
                Global Tech
            </h1>
            <div>
                <button>Celulares</button>
                <button>Tables</button>
                <button>Laptops</button>
                <button>Monitores</button>
                <button>Periféricos</button>
            </div>
        </nav>
    )
}

export default Navbar
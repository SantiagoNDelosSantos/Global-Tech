import {useState, useEffect} from "react"

const MercadoLibre = () => {
    
    const [products, setProducts] = useState([])
    const [input, setInput] =useState(``)

    useEffect(() => {
        
        {/* 
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=celular`)
        */}

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
    
            .then(response => {
                return response.json()
            })
            .then(json => {
                setProducts(json.results)
            })

    }, [input])


     {/* 
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=` + input)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setProducts(json.results)
            })
    }
    */}


    return (
        <div>

            <h1>API Mercado Libre</h1>

            {/*
            <form onSubmit={handleSubmit}> 
            */}
                <input value={input} onChange={(e) => setInput(e.target.value)}/>

            {/* 
                <button>Buscar</button>
            </form>
            */}

            <div>
                {
                    products.map(prod => {
                        return(
                            <div key={prod.id}>
                                <h3>{prod.title}</h3>
                                <img src={prod.thumbnail} alt={prod.title}/>
                                <p>${prod.price}</p> 
                            </div>
                        )
                    })
                }    
            </div>        

        </div>
    )

}

export default MercadoLibre
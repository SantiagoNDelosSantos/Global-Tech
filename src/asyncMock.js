const products = [{
        id: `1`,
        marca: `Apple`,
        modelo: `iPhone14`,
        color: `Morado`,
        description:` 
        Memoria Interna: 128GB -
        Memoria Ram: 6GB -
        Cámara: 48MPX.`,
        precio: `484.141`,
        category: `celular`,
        img: `https://i.ibb.co/1ZpJYSd/iPhone14.png`,
        stock: `5`
    },
    {
        id: `2`,
        marca: `Samsung`,
        modelo: `GalaxyA13`,
        color: `Celeste`,
        description:` 
        Memoria Interna: 64GB -
        Memoria Ram: 4GB -
        Cámara: 50MPX.`,
        precio: `74.999`,
        category: `celular`,
        img: `https://i.ibb.co/wSRYCjr/Galaxy-A13.png`,
        stock: `6`
    },
    {
        id: `3`,
        marca: `Motorola`,
        modelo: `MotoE20`,
        color: `Aqua`,
        description:` 
        Memoria Interna: 32GB -
        Memoria Ram: 4GB -
        Cámara: 13MPX.`,
        precio: `37.999`,
        category: `celular`,
        img: `https://i.ibb.co/KLfHyJ3/MotoE20.png`,
        stock: `3`
    },
    {
        id: `4`,
        marca: `Apple`,
        modelo: `iPad 10 - A2696`,
        color: `Azul`,
        description:` 
        Pantalla: 10.9” -
        Resolución: 2360PX x 1640PX -
        Memoria Interna: 64GB -
        Memoria Ram: 4GB -
        Cámara: 12MPX.`,
        precio: `234.499`,
        category: `tablet`,
        img: `https://i.ibb.co/4Mf9PCv/i-Pad-10th.png`,
        stock: `3`
    },
    {
        id: `5`,
        marca: `Xiaomi`,
        modelo: `Pad 5`,
        color: `Cosmic gray`,
        description:` 
        Pantalla: 11” -
        Resolución: 2560PX x 1600PX -
        Memoria Interna: 128GB -
        Memoria Ram: 6GB -
        Cámara: 13MPX.`,
        precio: `243.999`,
        category: `tablet`,
        img: `https://i.ibb.co/4ZvzZGv/Xiaomi-Pad5.png`,
        stock: `4`
    },
    {
        id: `6`,
        marca: `Apple`,
        modelo: `iPad 10 - A2696`,
        color: `Rosa`,
        description:` 
        Pantalla: 10.9” -
        Resolución: 2360PX x 1640PX -
        Memoria Interna: 256GB -
        Memoria Ram: 4GB -
        Cámara: 12MPX.`,
        precio: `317.499`,
        category: `tablet`,
        img: `https://i.ibb.co/PWG6swT/i-Pad-10th-RS.png`,
        stock: `2`
    },
    {
        id: `7`,
        marca: `Asus`,
        modelo: `G513RM`,
        color: `Eclipse gray`,
        description:`
        Pantalla: 15.6” -
        Resolución: 2560PX x 1440PX -
        Procesador: Ryzen 7 -
        Grafica: NVIDIA RTX 3060 -
        Almacenamiento: 512GB -
        Memoria Ram: 16GB.`,
        precio: `715.999`,
        category: `laptop`,
        img: `https://i.ibb.co/R7zjyyx/Asus-Rog-Strix-G15-G513-RM.png`,
        stock: `3`
    },
    {
        id: `8`,
        marca: `Asus`,
        modelo: `FX506LHB`,
        color: `Bonfire black`,
        description:`
        Pantalla: 15.6” -
        Resolución: 1920PX x 1080PX -
        Procesador: Intel Core i5 -
        Grafica: NVIDIA GeForce GTX 1650 -
        Almacenamiento: 512GB -
        Memoria Ram: 16GB.`,
        precio: `378.099`,
        category: `laptop`,
        img: `https://i.ibb.co/VNdRQj5/Asus-TUF-FX506-LHB.png`,
        stock: `6`
    },
    {
        id: `9`,
        marca: `MSI`,
        modelo: `GL66`,
        color: `Negro`,
        description:`
        Pantalla: 16” -
        Resolución: 1920PX x 1080PX -
        Procesador: Intel Core i7 -
        Grafica: NVIDIA GeForce RTX 3070 -
        Almacenamiento: 512GB -
        Memoria Ram: 16GB.`,
        precio: `905.000`,
        category: `laptop`,
        img: `https://i.ibb.co/Y0DDpzJ/Msi-Gl66-11-ugk-001.png`,
        stock: `4`
    },
    {
        id: `10`,
        marca: `Samsung`,
        modelo: `C27RG50FQ`,
        color: `Negro`,
        description:`
        Pantalla: 27" -
        Resolución: 1920PX x 1080PX -
        Tipo de Pantalla: LED -
        Frecuencia: 240HZ -
        Tiempo de respuesta: 4MS.`,
        precio: `131.599`,
        category: `monitor`,
        img: `https://i.ibb.co/v14tbj5/Samsung-CRG5.png`,
        stock: `9`
    },
    {
        id: `11`,
        marca: `Redragon`,
        modelo: `GM270F165`,
        color: `Negro`,
        description:`
        Pantalla: 27" -
        Resolución: 1920PX x 1080PX -
        Tipo de Pantalla: LED -
        Frecuencia: 165HZ -
        Tiempo de respuesta: 4MS.`,
        precio: `110.999`,
        category: `monitor`,
        img: `https://i.ibb.co/6Pd4v8T/Redragon-Emerald-GM270-F165.png`,
        stock: `7`
    },    
    {
        id: `12`,
        marca: `Samsung`,
        modelo: `F27T350FHL`,
        color: `Negro`,
        description: `
        Pantalla: 27" -
        Resolución: 1920PX x 1080PX -
        Tipo de Pantalla: LED -
        Frecuencia: 75HZ -
        Tiempo de respuesta: 5MS.`,
        precio: `68.909`,
        category: `monitor`,
        img: `https://i.ibb.co/mRQQgtn/Samsung-F27-T350-FHL.png`,
        stock: `4`
    }
]

const categories =[
    {id:'1', description:'Celulares', slug:'celular'},
    {id:'2', description:'Tablets', slug:'tablet'},
    {id:'3', description:'Laptops', slug:'laptop'},
    {id:'4', description:'Monitores', slug:'monitor'}
]

export const  getCategories = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 2000)
    })
}

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
         }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
         }, 1000)
    })
}
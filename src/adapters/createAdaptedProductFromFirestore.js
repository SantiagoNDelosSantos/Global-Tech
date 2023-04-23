export const createAdaptedProductFromFirestore = (doc) => {

    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        category: data.category,
        modelo: data.modelo,
        marca: data.marca,
        description: data.description,
        img: data.img,
        img2: data.img2,
        color: data.color,
        stock: data.stock,
        precio: data.precio
    }

    return productAdapted
}
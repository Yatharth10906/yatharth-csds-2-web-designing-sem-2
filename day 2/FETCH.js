/*fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => console.log(products))
    .catch((error) => console.log(error));*/

const getData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}
getData()


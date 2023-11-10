const root = document.querySelector("#root")

const getData = (products) => {
    products.forEach((product) => {
        const productData = document.createElement("div")
        productData.classList.add("all-products")

        const productImage = document.createElement("img")
        productImage.src = product.images[0]
        productImage.classList.add("product-image")

        const productTitle = document.createElement("h4")
        productTitle.innerText = product.title 
        productTitle.classList.add("product-title")

        const productPrice = document.createElement("p")
        productPrice.innerText = product.price
        productPrice.classList.add("product-price")

        const productDescription = document.createElement("p")
        productDescription.innerText = product.description 
        productDescription.classList.add("product-description")

        const productButton = document.createElement("button")
        productButton.innerText = "Add to card"
        productButton.classList.add("product-button")

        productData.append(productImage, productTitle, productPrice, productDescription, productButton)
        root.append(productData)
    })
}
const fetchProducts = (callback) => {
    fetch("https://dummyjson.com/products ")
    .then((res) => res.json())
    .then((data) => callback(data.products)) 
}
fetchProducts(getData)





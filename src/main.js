// Function that creates the Product Box elements in the DOM//
function addToGrid(response){
    const productGrid = document.querySelector(".productGrid");
    const productsInfo = response.products;
    const pageNumber = response.nextPage;
    buttonMoreProducts.setAttribute("data-page", pageNumber);
    for (let product of productsInfo){
        const productImage = product.image;
        const productName = product.name;
        const productDescription = product.description;
        const productOldPrice = product.oldPrice;
        const productPrice = product.price;
        const installmentsCount = product.installments.count;
        const installmentsValue = product.installments.value;
        const productBox = document.createElement("div");
        const elImg = document.createElement("img");
        const elName = document.createElement("p");
        const elDescription = document.createElement("p");
        const elOldPrice = document.createElement("p");
        const elPrice = document.createElement("p");
        const elInstallments = document.createElement("p");
        const buyButton = document.createElement("button");
        elImg.setAttribute("src", "http:" + productImage);
        elName.innerText = productName;
        elDescription.innerText = productDescription;
        elOldPrice.innerText = "De: R$" + productOldPrice;
        elPrice.innerText = "Por R$" + productPrice;
        elInstallments.innerText = "ou " + installmentsCount + "x de R$" + installmentsValue;
        buyButton.innerText = "Comprar";
        productBox.append(elImg, elName, elDescription, elOldPrice, elPrice, elInstallments, buyButton);
        productGrid.append(productBox);
    }
};

// Function that fetches products information from the API//
function getProducts(url){
    fetch(url)
        .then(e => e.json())
        .then(addToGrid)
        .catch(err=>console.error(err));
};
getProducts("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1");

//Event Listenner that makes the "Ainda mais produtos aqui!" button to load another page of 8 more products from the API//
const buttonMoreProducts = document.querySelector(".moreProducts");
buttonMoreProducts.addEventListener("click", () => {
    const nextPage = buttonMoreProducts.getAttribute("data-page");
    getProducts("https://" + nextPage);
});


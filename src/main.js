// Function that creates the Product Box elements in the DOM//
function addToGrid(response){
    const productGrid = document.querySelector(".productGrid");
    const productsInfo = response.products;
    for (let product of productsInfo){
        const productImage = product.image;
        const productName = product.name;
        const productDescription = product.description;
        const productOldPrice = product.oldPrice;
        const productPrice = product.price;
        const productBox = document.createElement("div");
        const elImg = document.createElement("img");
        const elName = document.createElement("p");
        const elDescription = document.createElement("p");
        const elOldPrice = document.createElement("p");
        const elPrice = document.createElement("p");
        const buyButton = document.createElement("button");
        elImg.setAttribute("src", "http:" + productImage);
        elName.innerText = productName;
        elDescription.innerText = productDescription;
        elOldPrice.innerText = productOldPrice;
        elPrice.innerText = productPrice;
        buyButton.innerText = "COMPRAR";
        productBox.append(elImg);
        productBox.append(elName);
        productBox.append(elDescription);
        productBox.append(elOldPrice);
        productBox.append(elPrice);
        productBox.append(buyButton);
       // productBox.append(elImg, elName, elDescription, elOldPrice, elPrice, buyButton);
        productGrid.append(productBox);
    }
};

// Function that fetches products information from the API//
function getProducts(url){
    fetch(url)
        .then(e => e.json())
        .then(function(response){
            addToGrid(response);
            })
        .catch(err=>console.error(err));
};
getProducts("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1");
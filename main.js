const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobielMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobielMenu.classList.toggle("inactive");
}
function toggleCarritoAside() {
    const isMobileMenuClosed = mobielMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobielMenu.classList.add("inactive");
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}

const productlist = [];
productlist.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productlist.push({
    name: "Pantalla",
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productlist.push({
    name: "Compu",
    price: 540,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

/* 
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="">
<div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
</div>
</div> 
*/
function renderProducts(arr) {

    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product ={name, price, image} = product.image 
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPice = document.createElement('p');
        productPice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }
}
renderProducts(productlist);

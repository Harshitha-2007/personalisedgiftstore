console.log("Personalised Gift Store loaded successfully.");


// ==============================
// BUYER LOGIN
// ==============================

const loginForm =
    document.getElementById("buyerLoginForm");

const passwordInput =
    document.getElementById("buyerPassword");

const togglePassword =
    document.getElementById("togglePassword");


if (togglePassword && passwordInput) {

    togglePassword.addEventListener("click", function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            togglePassword.textContent = "Hide";

        } else {

            passwordInput.type = "password";
            togglePassword.textContent = "Show";

        }

    });

}


if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("buyerEmail").value.trim();

        const password =
            passwordInput.value.trim();


        if (email === "" || password === "") {

            alert(
                "Please enter your email/phone number and password."
            );

            return;

        }


        alert("Demo login successful!");

        window.location.href = "home.html";

    });

}



// ==============================
// SELLER LOGIN
// ==============================

const sellerLoginForm =
    document.getElementById("sellerLoginForm");

const sellerPasswordInput =
    document.getElementById("sellerPassword");

const sellerTogglePassword =
    document.getElementById("sellerTogglePassword");


if (sellerTogglePassword && sellerPasswordInput) {

    sellerTogglePassword.addEventListener("click", function () {

        if (sellerPasswordInput.type === "password") {

            sellerPasswordInput.type = "text";
            sellerTogglePassword.textContent = "Hide";

        } else {

            sellerPasswordInput.type = "password";
            sellerTogglePassword.textContent = "Show";

        }

    });

}


if (sellerLoginForm) {

    sellerLoginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("sellerEmail").value.trim();

        const password =
            sellerPasswordInput.value.trim();


        if (email === "" || password === "") {

            alert(
                "Please enter your seller email and password."
            );

            return;

        }


        alert("Seller login successful!");

        window.location.href =
            "seller-dashboard.html";

    });

}



// ==============================
// ADMIN LOGIN
// ==============================

const adminLoginForm =
    document.getElementById("adminLoginForm");

const adminPasswordInput =
    document.getElementById("adminPassword");

const adminTogglePassword =
    document.getElementById("adminTogglePassword");


if (adminTogglePassword && adminPasswordInput) {

    adminTogglePassword.addEventListener("click", function () {

        if (adminPasswordInput.type === "password") {

            adminPasswordInput.type = "text";
            adminTogglePassword.textContent = "Hide";

        } else {

            adminPasswordInput.type = "password";
            adminTogglePassword.textContent = "Show";

        }

    });

}


if (adminLoginForm) {

    adminLoginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("adminEmail").value.trim();

        const password =
            adminPasswordInput.value.trim();


        if (email === "" || password === "") {

            alert(
                "Please enter your admin email and password."
            );

            return;

        }


        alert("Admin login successful!");

        window.location.href =
            "admin-dashboard.html";

    });

}



// ==============================
// ADD TO CART
// ==============================

const cartButtons =
    document.querySelectorAll(".cart-button");

const cartCount =
    document.getElementById("cartCount");

let cartItems = 0;


cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartItems++;


        if (cartCount) {

            cartCount.textContent =
                cartItems;

        }


        alert("Product added to cart!");

    });

});



// ==============================
// WISHLIST
// ==============================

const wishlistButtons =
    document.querySelectorAll(".wishlist-button");


wishlistButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("selected");


        if (button.classList.contains("selected")) {

            button.textContent = "♥";

            alert("Added to wishlist!");

        } else {

            button.textContent = "♡";

            alert("Removed from wishlist!");

        }

    });

});



// ==============================
// PRODUCT SEARCH
// ==============================

const searchInput =
    document.getElementById("productSearch");

const searchButton =
    document.getElementById("searchButton");

const productCards =
    document.querySelectorAll(".product-card");


function searchProducts() {

    if (!searchInput) {

        return;

    }


    const searchText =
        searchInput.value.toLowerCase().trim();


    productCards.forEach(function (card) {

        const productText =
            card.textContent.toLowerCase();


        if (productText.includes(searchText)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });


    const productsSection =
        document.getElementById("products");


    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


if (searchButton) {

    searchButton.addEventListener(
        "click",
        searchProducts
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                searchProducts();

            }

        }
    );

}



// ==============================
// CATEGORY FILTER
// ==============================

function showCategory(category) {

    const productCards =
        document.querySelectorAll(".product-card");

    let foundProducts = 0;


    productCards.forEach(function (card) {

        const categoryElement =
            card.querySelector(".product-category");


        if (!categoryElement) {

            card.style.display = "none";

            return;

        }


        const productCategory =
            categoryElement.textContent.toLowerCase();


        if (
            productCategory.includes(
                category.toLowerCase()
            )
        ) {

            card.style.display = "";

            foundProducts++;

        } else {

            card.style.display = "none";

        }

    });


    const productsSection =
        document.getElementById("products");


    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });

    }


    if (foundProducts === 0) {

        alert(
            "No products available in " +
            category +
            " category yet."
        );

    }

}



// ==============================
// SELLER - ADD NEW PRODUCT
// ==============================

function addNewProduct() {

    window.location.href =
        "add-product.html";

}



// ==============================
// DEFAULT SELLER PRODUCTS
// ==============================

const defaultSellerProducts = [

    {
        name: "Custom Memory Box",
        category: "Personalised Gifts",
        price: "799",
        stock: "20",
        icon: "🎁"
    },

    {
        name: "Name Printed Mug",
        category: "Home & Lifestyle",
        price: "349",
        stock: "20",
        icon: "☕"
    },

    {
        name: "Custom Name Wallet",
        category: "Accessories",
        price: "599",
        stock: "20",
        icon: "👜"
    },

    {
        name: "Custom Photo Keychain",
        category: "Accessories",
        price: "499",
        stock: "20",
        icon: "🔑"
    }

];



// ==============================
// LOAD SELLER PRODUCTS
// ==============================

function loadSellerProducts() {

    const productList =
        document.getElementById(
            "sellerProductList"
        );


    if (!productList) {

        return;

    }


    const oldDynamicProduct =
        document.getElementById(
            "newSellerProductCard"
        );


    if (oldDynamicProduct) {

        oldDynamicProduct.remove();

    }


    const savedProduct =
        JSON.parse(
            localStorage.getItem(
                "newSellerProduct"
            )
        );


    if (!savedProduct) {

        return;

    }


    const productCard =
        document.createElement("div");


    productCard.className =
        "seller-product";


    productCard.id =
        "newSellerProductCard";


    productCard.innerHTML = `

        <div class="seller-product-icon">
            🔑
        </div>

        <div class="seller-product-info">

            <h3>
                ${savedProduct.name}
            </h3>

            <p>
                ${savedProduct.category}
            </p>

        </div>

        <strong>
            ₹${savedProduct.price}
        </strong>

        <span class="stock">

            ${
                Number(savedProduct.stock) > 0
                    ? "In Stock"
                    : "Out of Stock"
            }

        </span>

        <button
            type="button"
            onclick="editProduct('${savedProduct.name}')"
        >
            Edit
        </button>

        <button
            type="button"
            onclick="deleteNewProduct()"
        >
            Delete
        </button>

    `;


    productList.appendChild(
        productCard
    );

}


loadSellerProducts();



// ==============================
// EDIT PRODUCT
// ==============================

function editProduct(productName) {

    let product = null;


    const savedProduct =
        JSON.parse(
            localStorage.getItem(
                "newSellerProduct"
            )
        );


    if (
        savedProduct &&
        savedProduct.name === productName
    ) {

        product = savedProduct;

    }


    if (!product) {

        const foundProduct =
            defaultSellerProducts.find(
                function (item) {

                    return item.name === productName;

                }
            );


        if (foundProduct) {

            product = {

                name: foundProduct.name,

                category: foundProduct.category,

                price: foundProduct.price,

                stock: foundProduct.stock,

                description: ""

            };

        }

    }


    if (!product) {

        product = {

            name: productName,

            category: "",

            price: "",

            stock: "",

            description: ""

        };

    }


    localStorage.setItem(
        "editSellerProduct",
        JSON.stringify(product)
    );


    window.location.href =
        "add-product.html";

}



// ==============================
// DELETE DEFAULT PRODUCT
// ==============================

function deleteProduct(productName) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete " +
            productName +
            "?"
        );


    if (!confirmDelete) {

        return;

    }


    const productIds = {

        "Custom Memory Box":
            "product-custom-memory-box",

        "Name Printed Mug":
            "product-name-printed-mug",

        "Custom Name Wallet":
            "product-custom-name-wallet",

        "Custom Photo Keychain":
            "product-custom-photo-keychain"

    };


    const productId =
        productIds[productName];


    if (productId) {

        const productCard =
            document.getElementById(productId);


        if (productCard) {

            productCard.remove();

        }

    }


    alert(
        productName +
        " deleted successfully!"
    );

}



// ==============================
// DELETE NEW PRODUCT
// ==============================

function deleteNewProduct() {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this product?"
        );


    if (!confirmDelete) {

        return;

    }


    localStorage.removeItem(
        "newSellerProduct"
    );


    localStorage.removeItem(
        "editSellerProduct"
    );


    const productCard =
        document.getElementById(
            "newSellerProductCard"
        );


    if (productCard) {

        productCard.remove();

    }


    alert(
        "Product deleted successfully!"
    );

}



// ======================================
// PRODUCT DETAILS DATA
// ======================================

const productDetails = {

    "Custom Memory Box": {

        category: "Home",

        price: "₹799",

        rating: "4.8",

        description:
            "A beautiful keepsake box for special memories."

    },


    "Name Printed Mug": {

        category: "Home & Lifestyle",

        price: "₹349",

        rating: "4.7",

        description:
            "A simple personalised mug for everyday moments."

    },


    "Custom Name Wallet": {

        category: "Accessories",

        price: "₹599",

        rating: "4.6",

        description:
            "A stylish wallet with a personalised name detail."

    },


    "Personalised Photo Frame": {

        category: "Home Decor",

        price: "₹499",

        rating: "4.9",

        description:
            "Turn a favourite memory into a thoughtful gift."

    }

};



// ======================================
// OPEN PRODUCT DETAILS
// ======================================

function openProductDetails(productName) {

    window.location.href =
        "product-details.html?product=" +
        encodeURIComponent(productName);

}



// ======================================
// HOME PAGE PRODUCT CLICK
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const productCards =
            document.querySelectorAll(
                ".product-card"
            );


        productCards.forEach(
            function (card) {

                const productNameElement =
                    card.querySelector(
                        ".product-details h3"
                    );


                if (!productNameElement) {

                    return;

                }


                const productName =
                    productNameElement
                        .textContent
                        .trim();


                if (
                    !productDetails[
                        productName
                    ]
                ) {

                    return;

                }


                card.style.cursor =
                    "pointer";


                card.addEventListener(
                    "click",
                    function (event) {

                        // Do not open details
                        // when buttons are clicked

                        if (
                            event.target.closest(
                                ".cart-button, .wishlist-button"
                            )
                        ) {

                            return;

                        }


                        openProductDetails(
                            productName
                        );

                    }
                );

            }
        );



        // ==================================
        // LOAD SELECTED PRODUCT
        // ==================================

        const params =
            new URLSearchParams(
                window.location.search
            );


        const selectedProduct =
            params.get("product");


        if (
            selectedProduct &&
            productDetails[
                selectedProduct
            ]
        ) {

            const product =
                productDetails[
                    selectedProduct
                ];


            const nameElement =
                document.getElementById(
                    "productName"
                );


            const priceElement =
                document.getElementById(
                    "productPrice"
                );


            const categoryElement =
                document.querySelector(
                    ".category"
                );


            const ratingElement =
                document.querySelector(
                    ".rating"
                );


            const descriptionElement =
                document.querySelector(
                    ".description"
                );


            if (nameElement) {

                nameElement.textContent =
                    selectedProduct;

            }


            if (priceElement) {

                priceElement.textContent =
                    product.price;

            }


            if (categoryElement) {

                categoryElement.textContent =
                    product.category;

            }


            if (ratingElement) {

                ratingElement.innerHTML =
                    "★★★★★ <span style='color:#777;'> " +
                    product.rating +
                    "</span>";

            }


            if (descriptionElement) {

                descriptionElement.textContent =
                    product.description;

            }

        }

    }
);
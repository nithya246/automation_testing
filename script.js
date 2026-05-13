let products = [
  // ELECTRONICS
  { name: "Smartphone", cat: "electronics", price: "₹20,000" },
  { name: "Laptop", cat: "electronics", price: "₹55,000"},
  { name: "Headphones", cat: "electronics", price: "₹2,000" },
  { name: "Smart Watch", cat: "electronics", price: "₹5,000" },
  { name: "Bluetooth Speaker", cat: "electronics", price: "₹1,500" },
  { name: "Camera", cat: "electronics", price: "₹25,000" },
  { name: "Keyboard", cat: "electronics", price: "₹1,200" },
  { name: "Mouse", cat: "electronics", price: "₹800" },
  { name: "Monitor", cat: "electronics", price: "₹12,000" },
  { name: "Tablet", cat: "electronics", price: "₹18,000" },
  { name: "Power Bank", cat: "electronics", price: "₹1,000"},
  { name: "Earbuds", cat: "electronics", price: "₹2,500" },
  { name: "Router", cat: "electronics", price: "₹2,200" },
  { name: "Smart TV", cat: "electronics", price: "₹35,000" },
  { name: "Hard Disk", cat: "electronics", price: "₹4,000" },

  // CLOTHING
  { name: "T-Shirt", cat: "clothing", price: "₹500" },
  { name: "Jeans", cat: "clothing", price: "₹1,200"},
  { name: "Shirt", cat: "clothing", price: "₹900" },
  { name: "Hoodie", cat: "clothing", price: "₹1,500" },
  { name: "Jacket", cat: "clothing", price: "₹2,500"},
  { name: "Saree", cat: "clothing", price: "₹2,000" },
  { name: "Kurti", cat: "clothing", price: "₹1,000" },
  { name: "Shorts", cat: "clothing", price: "₹600"},
  { name: "Skirt", cat: "clothing", price: "₹700" },
  { name: "Sweater", cat: "clothing", price: "₹1,300" },
  { name: "Blazer", cat: "clothing", price: "₹3,500" },
  { name: "Ethnic Wear", cat: "clothing", price: "₹2,800" },
  { name: "Tracksuit", cat: "clothing", price: "₹1,800"},
  { name: "Night Suit", cat: "clothing", price: "₹900" },
  { name: "Denim Jacket", cat: "clothing", price: "₹2,200" },

  // ACCESSORIES
  { name: "Watch", cat: "accessories", price: "₹1,500" },
  { name: "Wallet", cat: "accessories", price: "₹800"},
  { name: "Sunglasses", cat: "accessories", price: "₹1,200" },
  { name: "Belt", cat: "accessories", price: "₹500" },
  { name: "Ring", cat: "accessories", price: "₹600" },
  { name: "Necklace", cat: "accessories", price: "₹900" },
  { name: "Bracelet", cat: "accessories", price: "₹700" },
  { name: "Handbag", cat: "accessories", price: "₹2,000" },
  { name: "Backpack", cat: "accessories", price: "₹1,500" },
  { name: "Cap", cat: "accessories", price: "₹300" },
  { name: "Perfume", cat: "accessories", price: "₹1,800"},
  { name: "Earrings", cat: "accessories", price: "₹500" },
  { name: "Tie", cat: "accessories", price: "₹400" },
  { name: "Keychain", cat: "accessories", price: "₹200"},
  { name: "Hair Clips", cat: "accessories", price: "₹150" },

  // FOOTWEAR
  { name: "Sneakers", cat: "footwear", price: "₹2,500" },
  { name: "Running Shoes", cat: "footwear", price: "₹3,000" },
  { name: "Formal Shoes", cat: "footwear", price: "₹2,800" },
  { name: "Sandals", cat: "footwear", price: "₹1,000" },
  { name: "Slippers", cat: "footwear", price: "₹400" },
  { name: "Heels", cat: "footwear", price: "₹1,500" },
  { name: "Boots", cat: "footwear", price: "₹3,500" },
  { name: "Loafers", cat: "footwear", price: "₹2,200" },
  { name: "Flip Flops", cat: "footwear", price: "₹300" },
  { name: "Sports Shoes", cat: "footwear", price: "₹2,800" },
  { name: "Canvas Shoes", cat: "footwear", price: "₹1,200" },
  { name: "Walking Shoes", cat: "footwear", price: "₹2,000" },
  { name: "Ethnic Footwear", cat: "footwear", price: "₹1,800" },
  { name: "Platform Shoes", cat: "footwear", price: "₹2,500" },
  { name: "Casual Shoes", cat: "footwear", price: "₹1,600" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function getProductImage(name, cat) {

    const n = name.toLowerCase();

    // ================= ELECTRONICS =================
    if (n.includes("laptop")) return "https://img.freepik.com/premium-photo/modern-exclusive-laptop-image-generated-ai_644690-3473.jpg";
    if (n.includes("phone") || n.includes("smartphone")) return "https://tse4.mm.bing.net/th/id/OIP.fB6s60ISET8lLwqo7Q9VnQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
    if (n.includes("headphone") || n.includes("earbuds")) return "https://www.bing.com/th/id/OIP.fWf3-EBOyPS4USEPQSx1pwHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    if (n.includes("speaker")) return "https://www.bing.com/th/id/OIP.myWHRHeiD9nAl4LjCq-gRgHaFC?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    if (n.includes("camera")) return "https://www.bing.com/th/id/OIP.tBCBbbB4MTcN7BIQbgGSJAHaGa?w=188&h=163&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    if (n.includes("keyboard")) return "https://www.bing.com/th/id/OIP.87o1JFEgQZ_dMsLwWT9XiwHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    if (n.includes("mouse")) return "https://www.bing.com/th/id/OIP.Qp-UEcPt_C5GuG45l2qsCwHaEJ?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    if (n.includes("monitor")) return "https://www.bing.com/th/id/OIP.NjOygTvy5VInt0A59Iq-lQHaFK?w=214&h=152&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    if (n.includes("tablet")) return "https://www.bing.com/th/id/OIP.4kkl6pLIM5t2vYJpjqjpiAHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    if (n.includes("power bank")) return "https://www.bing.com/th/id/OIP.zmfBk1369sa7drYiFQK0rwHaE9?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    if (n.includes("router")) return "https://www.bing.com/th/id/OIP.4MSV0Gq7EsZMyV0XxmERIgHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    if (n.includes("tv")) return "https://www.bing.com/th/id/OIP.t6FQsL3ntKtlIvQK1VwhfgHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    if (n.includes("hard disk")) return "https://th.bing.com/th/id/OIP.3LeZkbt_cihZaAZTuh7T4gHaGJ?w=215&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";

    // ================= CLOTHING =================
    if(n.includes("shirt")) return "https://th.bing.com/th/id/OIP.vAMdV0pzM9u2J7UUpi5yJwHaJ3?w=122&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
    if (n.includes("jeans")) return "https://tse4.mm.bing.net/th/id/OIP.lM633R3I-ejIWa5h0ZLg-wHaKs?rs=1&pid=ImgDetMain&o=7&rm=3";
    if (n.includes("hoodie")) return "https://th.bing.com/th/id/OIP.YrEbbe89mR-2CCGQGTduYAHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
    if (n.includes("jacket")) return "https://www.bing.com/images/search?view=detailV2&ccid=mFUujDcB&id=0AB7B58E814FE7169FEDF31EED0A3923064C46C4&thid=OIP.mFUujDcB2zM9cPYAid1hagHaJ3&mediaurl=https%3a%2f%2fi.pinimg.com%2f736x%2f40%2f94%2f88%2f40948836a86563e38834071980fefc0c.jpg&exph=980&expw=736&q=HOODIE&FORM=IRPRST&ck=8B3812CD1DE096CDC93993D0A10F8250&selectedIndex=24&itb=0";
    if (n.includes("saree")) return  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkzl0S65aMVYy49Sq4vZcCRnsewIzDHQsLYmx7NpWQrLsMc2BfDBALjCqbU162_6jV5E8IC2yp38WEsXIIIgMrcW1Drd3KRoCeD_TbuXBAjO2EpHGa0WQQAELw-5S3Oxr8sVEVoIMyx7A8uKQTWN-4b_WmyAgHGeej14HWitwi7GK1sghvf-wE1hhJxWHV/s1350/12_organza%20sarees.jpg";
    if (n.includes("kurti")) return  "https://th.bing.com/th/id/OIP.lDSneRFtDtBvJaQCV6Iw5AHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3";
    if (n.includes("shorts")) return "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/691696/01/mod01/fnd/IND/fmt/png/Essentials-Men's-Logo-Tape-9''-Shorts";
    if (n.includes("blazer")) return  "https://tse1.mm.bing.net/th/id/OIP.WKES-AAWC1DPq9FTPt15MQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
    if (n.includes("tracksuit")) return "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/eff48002-0f79-42a2-9bf1-837e82605b27/K+NSW+CLUB+FLC+HDY+TRACKSUIT.png";
    if (n.includes("night")) return   "https://th.bing.com/th/id/OIP.-4SwHXg3HNfhqXZwQpom4QHaJ4?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
    if (n.includes("denim")) return "https://th.bing.com/th/id/OIP.SXzGZc6NAg3u9viVAhdw8wHaKX?w=208&h=291&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";

// ==========================accessories======================//
if (n.includes("watch")) return "https://th.bing.com/th/id/OIP.-cnNVJkn3nJ1qRyVaW9CMAHaJS?w=151&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
if (n.includes("wallet")) return "https://th.bing.com/th/id/OIP.eHkY-Julfe7PE3o2NXJQMwHaGM?w=155&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3";
if (n.includes("sunglass")) return "https://th.bing.com/th/id/OIP.xrVttFGWD7OAApQRQoSeYQHaE5?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3";
if (n.includes("belt")) return "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/055179/01/fnd/IND/fmt/png/PUMA-Buckle-Leather-Belt-V2";
if (n.includes("ring")) return "https://th.bing.com/th/id/OIP.r5OzSlx97RpXgK_LvckDcgHaKS?w=153&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
if (n.includes("necklace")) return "https://th.bing.com/th/id/OIP.jRoZMUYkI4t7iiQJRRnfcQHaHa?w=216&h=216&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
if (n.includes("bracelet")) return "https://th.bing.com/th/id/OIP.Fbs5Zf8TnuT2tTxGHUz4rgHaG6?w=208&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
if (n.includes("handbag")) return "https://th.bing.com/th/id/OIP.oAuqtBmmoKAy9WFZC2GsTAHaGD?w=248&h=202&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
if (n.includes("backpack")) return  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/091418/01/mod01/fnd/IND/fmt/png/Core-Up-Women's-Stylish-Daily-Use-Backpack-10L";
if (n.includes("cap")) return "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/027430/01/fnd/IND/fmt/png/PUMA-Essentials-Baseball-Cap-No.-2";
if (n.includes("perfume")) return "https://tse3.mm.bing.net/th/id/OIP.N5vmVurE3rxEjPkPoCGSKwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3";
if (n.includes("tie")) return "https://tse3.mm.bing.net/th/id/OIP.QTIaFZMNh9MjJ3l4LR7QbgHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3";
if (n.includes("keychain")) return "https://th.bing.com/th/id/OIP.JMTILz9j--FbO5m6PeMAcAHaJ4?w=163&h=217&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
if (n.includes("hair")) return  "https://th.bing.com/th/id/OIP.Nh9cNlUTR8L1ZIzSgvRvWAHaIn?w=208&h=243&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";

// ================= FOOTWEAR =================
if (n.includes("sneaker")) return "https://th.bing.com/th/id/OIP.xB2QXFTGniDHb9Hw3nlxqgHaHa?w=160&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
if (n.includes("running")) return"https://th.bing.com/th/id/OIP.qX2lYl5zV_688vQDzSAtpwHaE8?w=269&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
if (n.includes("fromal")) return "https://tse1.explicit.bing.net/th/id/OIP.vI3NIZZDhPhrvR5h1TDcpgHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3";
if (n.includes("sandal")) return "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/308270/01/sv01/fnd/IND/fmt/png/BMW-MMS-Softride-Seave-Men's-Flip-Flops";
if (n.includes("flip")) return "https://tse2.mm.bing.net/th/id/OIP.fOQwMz92-VaWKZ9YFEKBmQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
if (n.includes("sports")) return "https://tse3.mm.bing.net/th/id/OIP.C97L8TBBuVYuAwwIhLUBvgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3";
if (n.includes("canvas")) return "https://th.bing.com/th/id/OIP.e3HGRJ7JUh0GXDxkjiqk7AHaE4?w=305&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
if (n.includes("walking")) return "https://th.bing.com/th/id/OIP.Tdsv3jRRLZye5pZyi1WORwHaE8?w=251&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
if (n.includes("casual")) return "https://th.bing.com/th/id/OIP.tbofX9Xb2Y3kiSP06OtQWwHaE8?w=256&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
if (n.includes("slipper")) return "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/397694/01/sv01/fnd/IND/fmt/png/Royalcat-Comfort-Slides";
if (n.includes("heels")) return "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/21079190/2022/12/7/833cee4e-9082-4e9c-959f-113c3c03c4341670394845040EVERLYBlackKittenPumpswithBuckles1.jpg";
if (n.includes("slides")) return "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/397694/01/sv01/fnd/IND/fmt/png/Royalcat-Comfort-Slides";
if (cat === "electronics") return "https://images.unsplash.com/photo-1526406915894-7bcd65f60845";
    if (cat === "clothing") return "https://images.unsplash.com/photo-1520975922284-9c9c5f7f6d3f";
    if (cat === "accessories") return "https://images.unsplash.com/photo-1521335629791-ce4aec67dd49";
    if (cat === "footwear") return "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6";

    return "https://via.placeholder.com/200";
}



// ================= LOAD PRODUCTS =================
function loadProducts() {

    let container = document.getElementById("productList");
    let title = document.getElementById("pageTitle");

    if (!container) return;

    let params = new URLSearchParams(window.location.search);
    let cat = params.get("cat");

    let filtered = products;

    if (cat) {
        filtered = products.filter(p => p.cat === cat);
        if (title) title.innerText = cat.toUpperCase() + " PRODUCTS";
    }

    container.innerHTML = "";

    filtered.forEach(p => {

        let img = getProductImage(p.name, p.cat);

        container.innerHTML += `
        <div class="col-md-3 mb-3">
            <div class="card p-3 text-center shadow-sm product-card"
                 onclick="viewProduct('${p.name}')"
                 style="cursor:pointer;">

                <img src="${img}" 
                     style="height:150px; object-fit:cover; border-radius:10px;">

                <h5 class="mt-2">${p.name}</h5>
                <p>${p.price}</p>

                <button class="btn btn-primary w-100"
                    onclick="event.stopPropagation(); addToCart('${p.name}', '${p.price}', '${img}')">
                    Add to Cart
                </button>

            </div>
        </div>`;
    });
}

// ================= VIEW PRODUCT =================
function viewProduct(name) {
    window.location.href = "product-details.html?name=" + encodeURIComponent(name);
}

// ================= ADD TO CART =================
function addToCart(name, price, img) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price, img });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart!");
}

// ================= CART COUNT =================
function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let el = document.getElementById("cartCount");

    if (el) el.innerText = cart.length;
}

// ================= LOAD CART =================
function loadCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let container = document.getElementById("cartItems");
    let totalEl = document.getElementById("totalPrice");

    if (!container) return;

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {

        let price = parseInt(item.price.replace(/[^0-9]/g, ""));
        total += price;

        container.innerHTML += `
        <div class="col-md-3 mb-3">
            <div class="card p-2 text-center">
                <img src="${item.img}" style="height:100px;">
                <h6>${item.name}</h6>
                <p>${item.price}</p>
                <button class="btn btn-danger btn-sm"
                    onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        </div>`;
    });

    if (totalEl) totalEl.innerText = total;
}

// ================= REMOVE ITEM =================
function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

// ================= CHECKOUT =================
function goToCheckout() {

    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    window.location.href = "checkout.html";
}

// ================= LOGIN =================
function loginUser() {
    localStorage.setItem("isLoggedIn", true);
    alert("Login successful!");
    window.location.href = "index.html";
}

// ================= LOGOUT =================
function logout() {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out!");
    window.location.href = "index.html";
}

// ================= CATEGORY NAV =================
function goToCategory(cat) {
    window.location.href = "products.html?cat=" + cat;
}

// ================= PAGE LOAD =================
window.onload = function () {
    loadProducts();
    loadCart();
    updateCartCount();
};
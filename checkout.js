function placeOrder() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    let card = document.getElementById("card").value;

    if (!name || !email || !address || !card) {
        alert("Please fill all details!");
        return;
    }

    // clear cart after order
    localStorage.removeItem("cart");

    alert("🎉 Order placed successfully!");

    window.location.href = "index.html";
}

function appStarts() {
  return true;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

function validateLogin(username, password) {
  return username === "admin" &&
         password === "1234";
}

function searchProduct(products, keyword) {
  return products.filter(product =>
    product.includes(keyword)
  );
}

module.exports = {
  appStarts,
  calculateTotal,
  validateLogin,
  searchProduct
};
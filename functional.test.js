const { searchProduct } = require('./utils');

test('Functional Test - Product search', () => {

  const products = [
    "Shoes",
    "Watch",
    "Bag"
  ];

  expect(searchProduct(products, "Shoes"))
    .toContain("Shoes");
});
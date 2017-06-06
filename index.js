const app = "I don't do much.";

function reduce(collection, callback, initialValue) {
  let result = initialValue;

  collection.forEach((item, index) => {
    result = callback(result, item, index, collection);
  });

  return result;
}

function addProductToTotal(totalPrice, product) {
  if (product.price < 7) {
    return totalPrice + product.price;
  }

  return totalPrice;
}

function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}

const products = [
  { name: 'Head & Shoulders Shampoo', price: 4.99, discount: 0.6 },
  { name: 'Twinkies', price: 7.99, discount: 0.45 },
  { name: 'Oreos', price: 6.49, discount: 0.8 },
  { name: 'Jasmine-scented bath pearls', price: 13.99, discount: 0.7 },
];

const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 },
];

console.log(reduce(products, addProductToTotal, 0));
console.log(reduce(couponLocations, couponCounter, 3));
console.log(couponLocations.reduce(couponCounter, 3));

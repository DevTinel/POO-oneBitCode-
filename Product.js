class Product {
  constructor(name, description, price) {
    (this.name = name),
      (this.description = description),
      (this.price = price),
      (this.inStock = 0);
  }
  addOnStock(quantity) {
    this.inStock += quantity;
  }
  calculateDiscount(porcentDiscount) {
    this.price *= (100 - porcentDiscount) / 100;
  }
}

const bike = new Product(
  "Bicraft",
  "Bike personalizada do jeito que voce quiser",
  1000
);

bike.addOnStock(20);
bike.calculateDiscount(30);
console.log('clonou!');

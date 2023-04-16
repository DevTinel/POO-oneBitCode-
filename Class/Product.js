class Product {
    constructor(name, description, price) {
        (this.name = name),
            (this.description = description),
            (this.price = price),
            (this.inStock = 0);
    }
    addOnStock(quantity) {
        return (this.inStock += quantity);
    }
    calculateDiscount(porcentDiscount) {
        return (this.price *= (100 - porcentDiscount) / 100);
    }
}

const bike = new Product(
    "Bicraft",
    "Bike personalizada do jeito que voce quiser",
    1000
);

console.log(bike);
console.log(bike.addOnStock(20));
console.log(bike.calculateDiscount(30));
console.log(bike);

console.log(7 == 2 * 3.5 && (true || false));

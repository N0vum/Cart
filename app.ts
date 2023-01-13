class Product {
	constructor(
		id: number,
		title: string,
		price: number,
	) { }
};
class Delivery {
	constructor(date: Date) {
	}
}
class HomeDelivery extends Delivery {
	constructor(date: Date, adress: string) {
		super(date);
	}
}
class ShopDelivery extends Delivery {
	constructor(shopId: number) {
		super(new Date())
	}
}
type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
	products: Product[] = [{ id: 4, title: "Cheese", price: 60 }];
	private delivery: DeliveryOptions;
	addProduct(product: Product): void {
		this.products.push(product);
	};
	deleteProductById(productId: number): void {
		this.products = this.products.filter((p: Product) => p.id !== productId)
	};
	getSum(): number {
		return this.products
			.map((p: Product) => p.price)
			.reduce((p1: number, p2: number) => p1 + p2)
	};
	setDelivery(delivery: DeliveryOptions) {
		return this.delivery = delivery;
	};
	checkOut() {
		if (this.products.length == 0) {
			throw new Error("The card is empty")
		}
		if (!this.delivery) {
			throw new Error("Delivery is not specified")
		}
		return { success: true }
	}
};
const cart = new Cart();
cart.addProduct(new Product(1, "Milk", 20));
cart.addProduct(new Product(2, "Eggs", 30));
cart.addProduct(new Product(3, "Bread", 10));
cart.setDelivery(new HomeDelivery(new Date(), "Nsk"));
console.log(cart.checkOut(), cart);
abstract class ALogger {
	abstract log(m: string): void;
	printDate(date: Date) {
		this.log(date.toLocaleString());
	}
}
class Logger extends ALogger {
	log(m: string): void {
		console.log(m)
	}
	logWithDate(m: string) {
		this.printDate(new Date());
		this.log(m);
	}
}
const l = new Logger();
l.logWithDate("HELLO!")

// class Product {
// 	id;
// 	title;
// 	price;
// 	constructor(
// 		id: number,
// 		title: string,
// 		price: number,
// 	) {
// 		this.id = id;
// 		this.title = title;
// 		this.price = price;
// 	}
// };
// class Delivery {
// 	date;
// 	constructor(date: Date) { this.date = date; }
// }
// class HomeDelivery extends Delivery {
// 	adress;
// 	constructor(date: Date, adress: string) {
// 		super(date);
// 		this.adress = adress;
// 	}
// }
// class ShopDelivery extends Delivery {
// 	shopId
// 	constructor(shopId: number) {
// 		super(new Date());
// 		this.shopId = shopId;
// 	}
// }
// type DeliveryOptions = HomeDelivery | ShopDelivery;

// class Cart {
// 	products: Product[] = [];
// 	private delivery: DeliveryOptions;
// 	addProduct(product: Product): void {
// 		this.products.push(product);
// 	};
// 	deleteProductById(productId: number): void {
// 		this.products = this.products.filter((p: Product) => p.id !== productId)
// 	};
// 	getSum(): number {
// 		return this.products
// 			.map((p: Product) => p.price)
// 			.reduce((p1: number, p2: number) => p1 + p2)
// 	};
// 	setDelivery(delivery: DeliveryOptions) {
// 		return this.delivery = delivery;
// 	};
// 	checkOut() {
// 		if (this.products.length == 0) {
// 			throw new Error("The card is empty")
// 		}
// 		if (!this.delivery) {
// 			throw new Error("Delivery is not specified")
// 		}
// 		return { success: true }
// 	}
// };
// const cart1 = new Cart();
// cart1.addProduct(new Product(1, "Milk", 20));
// cart1.addProduct(new Product(2, "Eggs", 30));
// cart1.addProduct(new Product(3, "Bread", 10));
// cart1.setDelivery(new HomeDelivery(new Date().toLocaleString(), "Nsk"));
// cart1.deleteProductById(2);
// console.log(cart1.getSum());
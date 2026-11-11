import Input from './input';
import Output from './output';

export interface ShoppingCart {
    addItem(product: Product): void;
    deleteItem(product: Product): void;
    applyDiscount(discount: Discount): void;
    printShoppingCart(): void;
}


export class MyShoppingCart implements ShoppingCart {
    private items: Product[] = [];
    constructor (public input: Input, public output: Output ) {}

    addItem(product: Product): void {
        this.items.push(product);   
    }

    deleteItem(product: Product): void {

    }

    applyDiscount(discount: Discount): void {

    }

    printShoppingCart(): void {
        const totalPrice = this.items
            .reduce((sum, item) => sum + item.pricePerUnit, 0)
            .toFixed(2);
        const itemRows = this.items.map(item =>
            `| ${item.name} | ${item.pricePerUnit.toFixed(2)} € | 1 |`
        );
        const result = [
            '--------------------------------------------',
            '| Product name | Price with VAT | Quantity |',
            '| --- | --- | --- |',
            ...itemRows,
            '|------------------------------------------|',
            '| Promotion: |',
            '--------------------------------------------',
            `| Total products: ${this.items.length} |`,
            `| Total price: ${totalPrice} € |`,
            '--------------------------------------------'
        ].join('\n');

        this.output.show(result);
    }


}

export class Discount {
    constructor(public code: string, public percentage: number) {}
}



export class Product {
    constructor(public name: string, 
        public cost: number, 
        public revenue: number, 
        public pricePerUnit: number, 
        public tax: number) {}
}
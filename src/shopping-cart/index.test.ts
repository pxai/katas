import { MyShoppingCart, Product } from './shopping-cart';
import Input from './input';
import Output from './output';

describe('Shopping Cart', () => {
  const setup = () => {
    const mockedInput: jest.Mocked<Input> = {
        read: jest.fn()
    }

    const mockedOutput: jest.Mocked<Output> = {
        show: jest.fn()
    }

    const shoppingCart = new MyShoppingCart(mockedInput, mockedOutput);

    return { mockedInput, mockedOutput, shoppingCart };
  }

  it('should exist the class ShoppingCart', () => {
    expect(MyShoppingCart).toBeDefined();
  });

  it('should implement the ShoppingCart interface', () => {
    const {mockedInput, mockedOutput, shoppingCart} = setup();
    
    expect(shoppingCart.addItem).toBeDefined();
    expect(shoppingCart.deleteItem).toBeDefined();
    expect(shoppingCart.applyDiscount).toBeDefined();
    expect(shoppingCart.printShoppingCart).toBeDefined();
  });

  it('should show the shopping cart empty when no items are added', () => {
    const {mockedInput, mockedOutput, shoppingCart} = setup();
    shoppingCart.printShoppingCart();
    const output = mockedOutput.show.mock.calls[0][0];

    expect(output.split('\n')).toEqual(expect.arrayContaining([
      '| Product name | Price with VAT | Quantity |',
      '| Total products: 0 |',
      '| Total price: 0.00 € |'
    ]));
    expect(output).not.toContain('Product 1');
  });

  it('should add an item to the shopping cart', () => {
    const {mockedInput, mockedOutput, shoppingCart} = setup();
    const product = new Product('Product 1', 8, 2, 10, 0.25);
    shoppingCart.addItem(product);
    shoppingCart.printShoppingCart();
    const output = mockedOutput.show.mock.calls[0][0];

    expect(output.split('\n')).toEqual(expect.arrayContaining([
      '| Product 1 | 10.00 € | 1 |',
      '| Total products: 1 |',
      '| Total price: 10.00 € |'
    ]));
  });

  it('should add several items to the shopping cart', () => {
    const {mockedInput, mockedOutput, shoppingCart} = setup();
    const products = [
      new Product('Iceberg 🥬', 1.74, 0.43, 2.17, 0.25),
      new Product('Tomato 🍅', 0.58, 0.15, 0.73, 0.25),
      new Product('Chicken 🍗', 1.46, 0.37, 1.83, 0.25),
      new Product('Bread 🍞', 0.70, 0.18, 0.88, 0.25),
      new Product('Corn 🌽', 1.20, 0.30, 1.50, 0.25)
    ];

    products.forEach(product => shoppingCart.addItem(product));
    shoppingCart.printShoppingCart();
    const output = mockedOutput.show.mock.calls[0][0];

    expect(output.split('\n')).toEqual(expect.arrayContaining([
      '| Iceberg 🥬 | 2.17 € | 1 |',
      '| Tomato 🍅 | 0.73 € | 1 |',
      '| Chicken 🍗 | 1.83 € | 1 |',
      '| Bread 🍞 | 0.88 € | 1 |',
      '| Corn 🌽 | 1.50 € | 1 |',
      '| Total products: 5 |',
      '| Total price: 7.11 € |'
    ]));
  });

 it('should add several items to the shopping cart with discount', () => {
    const {mockedInput, mockedOutput, shoppingCart} = setup();
    const products = [
      new Product('Iceberg 🥬', 1.74, 0.43, 2.17, 0.25),
      new Product('Tomato 🍅', 0.58, 0.15, 0.73, 0.25),
      new Product('Chicken 🍗', 1.46, 0.37, 1.83, 0.25),
      new Product('Bread 🍞', 0.70, 0.18, 0.88, 0.25),
      new Product('Corn 🌽', 1.20, 0.30, 1.50, 0.25)
    ];

    products.forEach(product => shoppingCart.addItem(product));
    shoppingCart.applyDiscount({code: 'PROMO_5', percentage: 5});
    shoppingCart.printShoppingCart();
    const output = mockedOutput.show.mock.calls[0][0];

    expect(output.split('\n')).toEqual(expect.arrayContaining([
      '| Iceberg 🥬 | 2.17 € | 1 |',
      '| Tomato 🍅 | 0.73 € | 1 |',
      '| Chicken 🍗 | 1.83 € | 1 |',
      '| Bread 🍞 | 0.88 € | 1 |',
      '| Corn 🌽 | 1.50 € | 1 |',
      '| Total products: 5 |',
      '| Total price: 7.11 € |'
    ]));
  });


});
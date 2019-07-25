import bikes from '../src/data/products.js';
import cart from '../src/data/order.js';
import { findProduct, calcLineTotal, calcOrderTotal } from '../src/register.js';
const test = QUnit.test;

QUnit.module('Register');

test('Find product by code', assert => {
    // arrange
    const code = 'road1';
    const expected = {
        code: 'road1',
        name: 'Blue Road Bike',
        description: 'Fancy blue road bike of your dreams.',
        image: '/assets/classic-race-bike.jpg',
        category: 'road-bike',
        price: 300,
        cost: 78
    };

    // act
    const foundProduct = findProduct(bikes, code);

    // assert
    assert.deepEqual(foundProduct, expected);
});

test('calculate line total', (assert) => {
    // arrange
    const quantity = 3;
    const price = 2.01;
    const expected = 6.03;

    // act 
    const total = calcLineTotal(quantity, price);

    // assert
    assert.equal(total, expected);
});     

test('calculate order total', (assert) => {
    // arrange
    const expected = 3100;

    // act
    const orderTotal = calcOrderTotal(cart, bikes);

    // assert
    assert.equal(orderTotal, expected);
});

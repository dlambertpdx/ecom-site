import store from '../src/data/store.js';
import bikes from '../src/data/products.js';

const test = QUnit.test;

QUnit.module('Data Persistence');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('generic get and save', assert => {
    // arrange
    const key = 'cat';
    const cat = { name: 'freddie' };

    // act
    store.save(key, cat);
    const got = store.get(key);

    // assert
    assert.deepEqual(got, cat);
});


test('get product and return bootstrapped data', assert => {

    const products = store.getProducts();

    assert.deepEqual(products, bikes);
});

test('get shopping cart returns empty array when non-existent', (assert) => {
    // arrange
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, []);
});

test('order product adds item to shopping cart', (assert) => {
    // arrange
    const code = 'road1';
    const expected = [{
        code: 'road1',
        quantity: 1
    }];

    // act
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, expected);
});

test('order product already in shopping cart', (assert) => {
    // arrange
    const code = 'road1';
    const expected = [{
        code: 'road1',
        quantity: 2
    }];

    // act
    store.orderProduct(code);
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, expected);
});

test('get product by code', (assert) => {
    // arrange
    const code = 'road1';
    const expect = bikes[0];

    // act
    const bike = store.getProduct(code);

    // assert
    assert.deepEqual(bike, expect);
});

test('add a product', (assert) => {
    // arrange 
    const product = {
        category: 'scooter',
        code: 'scooter1',
        description: 'Frozen Scooter',
        image: '/assets/frozen.jpg',
        name: 'Frozen Scooter',
        price: 33,
        cost: 22
    };

    // act
    store.addProduct(product);
    const bikes = store.getProducts();

    // assert
    assert.deepEqual(bikes[bikes.length - 1], product);
});
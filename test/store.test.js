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
    // act
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, []);
});
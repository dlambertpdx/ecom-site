import store from '../src/data/store.js';

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
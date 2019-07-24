
import bikes from '../src/data/products.js';
import { findProduct } from '../src/register.js';
import renderLineItem from '../src/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders line item', (assert) => {
    // arrange
    const lineItem = {
        code: 'road1',
        quantity: 1
    };
    const bike = findProduct(bikes, lineItem.code);
    const expect = '<tr><td class="item">Blue Road Bike</td><td class="qty">1</td><td class="subtotal">$300.00</td><td class="line-total">$300.00</td></tr>';

    // act 
    const dom = renderLineItem(lineItem, bike);
    const html = dom.outerHTML;

    // assert
    assert.equal(html, expect);

});
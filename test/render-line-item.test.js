
import bikes from '../src/data/products.js'
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
    const expect = '<tr><td>Road Bike</td><td>1</td><td>$500</td><td>$500</td></tr>';

    // act 
    const dom = renderLineItem(bike, lineItem);
    const html = dom.outerHTML;

    // assert
    assert.equal(html, expect)

});
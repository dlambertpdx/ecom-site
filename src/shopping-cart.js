import cart from './data/order.js';
import bikes from './data/products.js';
import { findProduct } from './register.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');

for(let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const bike = findProduct(bikes, lineItem.code);
    const dom = renderLineItem(lineItem, bike);

    tbody.appendChild(dom);
}
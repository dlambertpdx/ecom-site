import cart from './data/order.js';
import bikes from './data/products.js';
import { findProduct, calcOrderTotal } from './register.js';
import renderLineItem from './render-line-item.js';
import { toUSD } from './format.js';

const tbody = document.querySelector('tbody');

for(let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const bike = findProduct(bikes, lineItem.code);
    const dom = renderLineItem(lineItem, bike);

    tbody.appendChild(dom);
}

const orderTotal = document.createElement('th');
orderTotal.textContent = toUSD(calcOrderTotal(cart, bikes));
const tfoot = document.querySelector('tfoot>tr');
tfoot.appendChild(orderTotal);

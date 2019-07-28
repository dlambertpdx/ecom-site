import bikes from './data/products.js';
import { calcOrderTotal } from './register.js';
import renderLineItem from './render-line-item.js';
import { toUSD } from './format.js';
import store from './data/store.js';

const tbody = document.querySelector('tbody');

const shoppingCart = store.getShoppingCart();


for(let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const bike = store.getProduct(lineItem.code);
    const dom = renderLineItem(lineItem, bike);

    tbody.appendChild(dom);
}

const orderTotal = document.createElement('th');
orderTotal.textContent = toUSD(calcOrderTotal(shoppingCart, bikes));
const tfoot = document.querySelector('tfoot>tr');
tfoot.appendChild(orderTotal);

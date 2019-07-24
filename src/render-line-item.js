import { calcLineTotal } from './register.js';
import { toUSD } from './format.js';

function renderLineItem(lineItem, bike) {
    const tr = document.createElement('tr');

    const itemName = document.createElement('td');
    itemName.className = 'item';
    itemName.textContent = bike.name;
    tr.appendChild(itemName);

    const itemQty = document.createElement('td');
    itemQty.className = 'qty';
    itemQty.textContent = lineItem.quantity;
    tr.appendChild(itemQty);

    const subtotal = document.createElement('td');
    subtotal.className = 'subtotal';
    subtotal.textContent = toUSD(bike.price);
    tr.appendChild(subtotal);

    const lineTotal = document.createElement('td');
    lineTotal.className = 'line-total';
    const total = calcLineTotal(lineItem.quantity, bike.price);
    lineTotal.textContent = toUSD(total);
    tr.appendChild(lineTotal);

    return tr;
}

export default renderLineItem;
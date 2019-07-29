import store from './data/store.js';

export function findProduct(bikes, code) {
    for(let i = 0; i < bikes.length; i++) {
        const bike = bikes[i];
        if(bike.code === code) {
            return bike;
        }
    }
    return null;
}

export function calcLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
}

export function calcOrderTotal(cart, bikes) {
    // declare order total variable
    let orderTotal = 0;
    // loop the array of cart (line items)
    for(let i = 0; i < cart.length; i++) {
        const cartQty = cart[i];
        const item = store.getProduct(cartQty.code);
        const lineTotal = calcLineTotal(cartQty.quantity, item.price);
        orderTotal += lineTotal;
    }
    // return order total
    return orderTotal;
}
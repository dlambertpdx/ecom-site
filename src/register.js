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
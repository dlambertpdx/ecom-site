export function findProduct(bikes, code) {
    // loop array   
    for(let i = 0; i < bikes.length; i++) {
        const bike = bikes[i];
        // check the code against bike.code
        if(bike.code === code) {
            return bike;
        }
    }
    // loop done
    return null;
}

export function calcLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
}
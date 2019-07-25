import bikes from './products.js';
// import { findProduct } from '../register.js';

const PRODUCT_KEY = 'products';
// const SHOPPING_CART_KEY = 'shopping-cart';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let products = store.get(PRODUCT_KEY);
        if(!products){
            store.save(PRODUCT_KEY, bikes);
            products = bikes;
        }
        return products;
    }
    // getProducts() {
    //     let products = store.get(PRODCUT_KEY);

    //     if(!products){
    //         store.save(PRODCUT_KEY, bikes);
    //         products = bikes;
    //     }
    //     return products;
    // },







};


export default store;
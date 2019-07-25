// import bikes from './data/products.js';
import store from './data/store.js';
import renderBike from './render-bike.js';

const list = document.getElementById('bikes');

const bikes = store.getProducts();

for(let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    const dom = renderBike(bike);
    list.appendChild(dom);
}
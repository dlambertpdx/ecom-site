import bikes from './data/products.js';
import renderBike from './render-bike.js';

const list = document.getElementById('bikes');

for(let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    const dom = renderBike(bike);
    list.appendChild(dom);
}
import renderBike from '../src/render-bike.js';

const test = QUnit.test;

QUnit.module('Render bike');

test('renders a bike', assert => {
    // arrange
    const roadBike = {
        code: 'road1',
        name: 'Blue Road Bike',
        image: 'assets/classic-race-bike.jpg',
        description: 'Fancy Blue road bike of your dreams.',
        category: 'road-bike',
        price: 300,
        cost: 78
    };
    const expected = '<li class="road-bike" title="Fancy Blue road bike of your dreams."><h3>Blue Road Bike</h3><img src="assets/classic-race-bike.jpg" alt="Blue Road Bike Image"><p class="price">$300.00<button value="road1">Add</button></p></li>';
    
    // act
    const dom = renderBike(roadBike);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});
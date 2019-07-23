
function renderBike(bike) {
    const li = document.createElement('li');
    li.className = bike.category;
    li.title = bike.description;
    
    const h3 = document.createElement('h3');
    h3.textContent = bike.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = bike.image;
    img.alt = bike.name + ' Image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = bike.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = bike.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}


export default renderBike;
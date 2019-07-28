import store from './data/store.js';

const form = document.getElementById('new-product-form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);

    const image = formData.get('image');

    getBase64(image, base64Url => {
        const product = {
            code: formData.get('code'),
            name: formData.get('name'),
            description: formData.get('description'),
            category: formData.get('category'),
            price: +formData.get('price'),
            cost: +formData.get('cost'),
            image: base64Url
        };

        store.addProduct(product);
        alert('Item saved!');
        form.reset();
    });

});

// found this on SO:
// https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
function getBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        callback(reader.result);
    };
}

function renderBike(roadBike) {
    const li = document.createElement('li');
    li.classname = roadBike.code;
    li.title = roadBike.description;
    // something goes here
}


export default renderBike;
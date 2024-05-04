// Array de nombres de los estados de Australia
const estados = ['Western', 'Queensland', 'Victoria', 'Northern', 'New', 'Tasmania', 'South'];

// Recorre cada estado y agrega los eventos hover
estados.forEach(estado => {
    const map = document.getElementById(`map${estado}`);
    const contenedor = document.getElementById(`card${estado}`);

    map.addEventListener('mouseover', () => {
        contenedor.classList.add('hovered');
    });

    map.addEventListener('mouseout', () => {
        contenedor.classList.remove('hovered');
    });

    contenedor.addEventListener('mouseover', () => {
        map.classList.add('hovered');
    });

    contenedor.addEventListener('mouseout', () => {
        map.classList.remove('hovered');
    });

});




// Configuración de la búsqueda de eventos
const ciudad = 'Sydney'; // Puedes cambiar esto por la ciudad de tu elección
const token = '6NCEXUNXDU6NVJTY4WQU'; // Cambia esto por tu token de la API de Eventbrite

// URL de la API de Eventbrite para buscar eventos por ciudad
const apiUrl = `https://www.eventbriteapi.com/v3/events/search/?location.address=${ciudad}&token=${token}`;

// Función para obtener datos de la API de Eventbrite
function obtenerEventos() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            mostrarEventos(data.events);
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
}

// Función para mostrar los eventos en la página
function mostrarEventos(eventos) {
    const eventosContainer = document.getElementById('eventos-container');

    eventos.forEach(evento => {
        const eventoDiv = document.createElement('div');
        eventoDiv.classList.add('evento');
        eventoDiv.innerHTML = `
            <h2>${evento.name.text}</h2>
            <p>${new Date(evento.start.local).toLocaleDateString()} ${new Date(evento.start.local).toLocaleTimeString()}</p>
            <p>${evento.description.text}</p>
            <p><a href="${evento.url}" target="_blank">Más información</a></p>
        `;
        eventosContainer.appendChild(eventoDiv);
    });
}

// Llamar a la función para obtener y mostrar eventos cuando se cargue la página
window.onload = obtenerEventos;

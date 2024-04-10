document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('events-container');
  
    // Fetch events data from Open Event API
    fetchEvents();
  
    async function fetchEvents() {
      const url = 'https://open-event-api.herokuapp.com/v1/events?country=Australia';
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        displayEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
        eventsContainer.textContent = 'Error fetching events. Please try again later.';
      }
    }
  
    function displayEvents(events) {
      eventsContainer.innerHTML = ''; // Clear previous events
  
      events.forEach(event => {
        const card = createEventCard(event);
        eventsContainer.appendChild(card);
      });
    }
  
    function createEventCard(event) {
      const card = document.createElement('div');
      card.classList.add('event-card');
  
      const title = document.createElement('h2');
      title.textContent = event.name;
      card.appendChild(title);
  
      const startDate = new Date(event.start_date);
      const endDate = new Date(event.end_date);
  
      const date = document.createElement('p');
      date.textContent = `Date: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
      card.appendChild(date);
  
      const location = document.createElement('p');
      location.textContent = `Location: ${event.location}`;
      card.appendChild(location);
  
      const description = document.createElement('p');
      description.textContent = event.description;
      card.appendChild(description);
  
      return card;
    }
  });
  
  
document.addEventListener('DOMContentLoaded', function() {
    const citySelect = document.getElementById('city-select');
    const weatherInfo = document.getElementById('weather-info');
  
    citySelect.addEventListener('change', function() {
      const selectedCity = citySelect.value;
      fetchWeather(selectedCity);
    });
  
    function fetchWeather(woeid) {
      const url = `https://www.metaweather.com/api/location/${woeid}/`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          displayWeather(data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          weatherInfo.textContent = 'Error fetching weather data. Please try again.';
        });
    }
  
    function displayWeather(data) {
      const location = data.title;
      const tempC = data.consolidated_weather[0].the_temp;
      const condition = data.consolidated_weather[0].weather_state_name;
  
      weatherInfo.innerHTML = `
        <h2>${location}</h2>
        <p>Temperature: ${tempC.toFixed(1)}°C</p>
        <p>Condition: ${condition}</p>
      `;
    }
  
    // Fetch initial weather data for the default city
    fetchWeather(citySelect.value);
  });
  
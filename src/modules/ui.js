/**
  * Update the UI with the weather data
  * @param {Object} weatherData - The weather data object from our API
*/
export function updateWeatherUI(weatherData) {
  const output = document.querySelector('#weather-output');
  output.innerHTML = `
    <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
    <p>Temperature: ${weatherData.main.temp}°F</p>
    <p>Weather: ${weatherData.weather[0].description}</p>
    <button id="get-ai-advice">Get AI Weather Advice</button>
  `;
}

/**
  * Error message UI
  * @param {string} message - The error message to display
*/
export function showError(message) {
  document.querySelector('#weather-output').innerHTML = `<p>${message}</p>`;
}
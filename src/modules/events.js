import { fetchWeather } from './api.js';
import { updateWeatherUI, showError } from './ui.js';
import { getWeatherAdvice } from './ai.js';

export function setupEventListeners() {
  document.querySelector('#search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = document.querySelector('#city-input').value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeather(city);
      updateWeatherUI(weatherData);
      
      // Add event listener for AI advice button
      document.querySelector('#get-ai-advice').addEventListener('click', async () => {
        const advice = await getWeatherAdvice(weatherData);
        document.querySelector('#weather-output').innerHTML += `<p><strong>AI Advice:</strong> ${advice}</p>`;
      });

    } catch (error) {
      showError('City not found. Please try again.');
    }
  });
}

const API_KEY = '7aa9423835d0b6a42a82acf31ae31f4a';

/**
  * Fetches weather data from our API
  * @param {string} city - The name of the city to get weather data for
  * @returns {Object} - The weather data as a JSON object
  * @throws {Error} - Throws an error if the API request fails
*/
export async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
    );

    if (!response.ok) {
      throw new Error('City not found');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}
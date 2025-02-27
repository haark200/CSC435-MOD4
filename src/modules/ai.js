const OPENAI_API_KEY = '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';

export async function getWeatherAdvice(weatherData) {
  console.log('Fetching AI advice...');
  
  const prompt = `The weather in ${weatherData.name} is ${weatherData.weather[0].description} with a temperature of ${weatherData.main.temp}°C. Give a friendly weather tip.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: prompt }],
        max_tokens: 50
      })
    });

    const data = await response.json();
    console.log('AI Full Response:', data); // Log full response to debug

    // Handle "Insufficient Quota" error
    if (data.error?.code === 'insufficient_quota') {
      return 'AI advice is temporarily unavailable. You’ve reached your OpenAI limit.';
    }

    if (!data.choices || data.choices.length === 0) {
      throw new Error('Invalid AI response format');
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching AI advice:', error);
    return 'AI advice unavailable at the moment.';
  }
}

const weatherAppData = document.querySelector(".weather-app-data");

class WeatherService {
  getData = () => {
    const data = {
      temperature: 25,
      humidity: 60,
      condition: "Sunny",
    };
    return data;
  };
}

class WeatherAdapter {
  constructor(weatherService) {
    this.weatherService = weatherService;
  }

  getWeatherData() {
    const weatherData = this.weatherService.getData();
    return {
      temperature: weatherData.temperature,
      humidity: weatherData.humidity,
      condition: weatherData.condition,
    };
  }
}

const weatherService = new WeatherService();
const weatherAdapter = new WeatherAdapter(weatherService);

const weatherData = weatherAdapter.getWeatherData();
console.log(
  `Temperature: ${weatherData.temperature}°C, Humidity: ${weatherData.humidity}, Condition: ${weatherData.condition}`
);
weatherAppData.textContent = `Temperature: ${weatherData.temperature}°C, Humidity: ${weatherData.humidity}, Condition: ${weatherData.condition}`;

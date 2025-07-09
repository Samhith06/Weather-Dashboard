# Weather-Dashboard
Weather Dashboard is a responsive, dark-themed web application that displays real-time weather data for any location using the WeatherAPI. Users can search for cities, view current conditions, hourly forecasts, and 7-day weather trends

## Features

- **Real-Time Weather Data**: Displays current weather conditions, temperature, feels-like temperature, humidity, wind speed, pressure, visibility, and UV index.
- **Hourly and Daily Forecasts**: Provides a 24-hour forecast and a 3-day forecast with high/low temperatures and weather conditions.
- **Unit Toggle**: Switch between Celsius (°C) and Fahrenheit (°F) units, with preferences saved in local storage.
- **Recent Searches**: Stores up to 5 recent search locations for quick access, persisted in local storage.
- **Geolocation Support**: Automatically fetches weather data for the user's current location using the browser's geolocation API.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices with a modern, dark-themed UI.
- **Error Handling**: Displays loading states and error messages for failed API requests.

## Technologies Used

- **HTML5**: Structure of the web application.
- **CSS3**: Custom styles with CSS variables, flexbox, grid, and responsive design.
- **JavaScript (ES6)**: Handles API requests, DOM manipulation, and local storage.
- **WeatherAPI**: Provides weather data and forecasts (requires an API key).
- **Local Storage**: Persists unit preferences and recent searches.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Get a WeatherAPI Key**:
   - Sign up at [WeatherAPI](https://www.weatherapi.com/) to obtain a free API key.
   - Replace the `apiKey` in `script.js` with your own API key:
     ```javascript
     const apiKey = "your-api-key-here";
     ```

3. **Serve the Application**:
   - Since this is a static web application, you can serve it using any local server. For example, using Python's HTTP server:
     ```bash
     python -m http.server 8000
     ```
   - Alternatively, use tools like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.

4. **Open in Browser**:
   - Navigate to `http://localhost:8000` (or the port specified by your server) to view the application.

## Usage

- **Search for a Location**: Enter a city name (e.g., "New York") in the search bar and click the search button (🔍).
- **Use Current Location**: Click the location button (📍) to fetch weather data for your current location (requires geolocation permission).
- **Toggle Units**: Use the °C/°F buttons to switch between Celsius and Fahrenheit units.
- **View Recent Searches**: Click on any recent search button to quickly fetch weather data for previously searched locations.
- **View Forecasts**: Scroll to view the 24-hour and 3-day forecasts for the selected location.

## File Structure

```
weather-dashboard/
├── index.html        # Main HTML file with the structure of the dashboard
├── script.js         # JavaScript for fetching and displaying weather data
├── style.css         # CSS styles for the dark theme and responsive design
└── README.md         # Project documentation
```

## Screenshots

![Weather Dashboard](images/image.png)
*Main dashboard displaying current weather and forecasts.*

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the existing style and includes appropriate comments.

## Acknowledgments

- [WeatherAPI](https://www.weatherapi.com/) for providing the weather data.
- Inspired by modern weather applications with a focus on clean UI and usability.

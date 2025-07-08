# 🌤️ Dark-Themed Interactive Weather Dashboard

A beginner-friendly weather application using **HTML**, **CSS**, and **JavaScript**, integrating with **OpenWeather API** to display real-time weather data.

---

## 💻 Tech Stack

- **HTML5**: Markup structure
- **CSS3**: Responsive dark-themed UI
- **JavaScript (ES6)**: Application logic and API integration
- **OpenWeather API**: Live weather data
- **Geolocation API**: To auto-detect user's current location

---

## 🧱 Project Structure

```
weather-dashboard/
│
├── index.html            # Main HTML file
├── style.css             # Dark theme styling
├── script.js             # JavaScript logic
├── assets/
│   └— icons/            # Weather icons (optional)
└── README.md             # Project explanation (this file)
```

---

## 🚀 Features Overview

### 🔍 1. **Location Input**
- **Manual search:** Users can type a city name or zip code.
- **Auto-detect location:** Uses the browser's Geolocation API to fetch the current location.

### 🌡️ 2. **Current Weather Display**
- Current temperature (°C/°F toggle optional).
- Location name.
- Weather condition and icon.
- Last updated timestamp.
- Humidity, wind speed/direction, UV index, visibility.

### ⏱️ 3. **Hourly Forecast**
- Forecast for the next **12–24 hours**.
- Temperature, weather condition, chance of precipitation.

### 📆 4. **7-Day Forecast**
- Min/Max temperature.
- Daily weather summary (icons and conditions).

### 🌐 5. **Dark Theme UI**
- Clean, modern layout with dark backgrounds and contrasting text/icons.

---

## 🧽 Application Flow

### 1. **HTML Layout (index.html)**

- Header section: App title + Search bar + Location icon.
- Main weather section:
  - Current weather display
  - Hourly forecast cards (scrollable)
  - Daily forecast cards
- Footer (optional): credits or timestamp

### 2. **Styling (style.css)**

- Use CSS variables for dark theme colors:
  ```css
  :root {
    --bg-color: #1e1e2f;
    --text-color: #ffffff;
    --card-bg: #2c2c3e;
    --accent-color: #4fc3f7;
  }
  ```
- Flexbox/grid layout for forecasts.
- Media queries for responsiveness.

### 3. **JavaScript Logic (script.js)**

#### a. **Initialize App**
```js
window.onload = () => {
  getWeatherByGeolocation();
};
```

#### b. **Search Input**
- Event listener for Enter key or search button.
- Fetch weather by city name or zip.

#### c. **Geolocation**
```js
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
```
- On success, fetch coordinates and call OpenWeather API.

#### d. **OpenWeather API Integration**
- **API Key:** Sign up at [https://openweathermap.org](https://openweathermap.org)
- **Current Weather:**  
  `https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=YOUR_API_KEY`
- **One Call API (for hourly and daily):**  
  `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely&appid=YOUR_API_KEY`

#### e. **Render Data to DOM**
- Use DOM manipulation to update:
  - Temperature, location name
  - Weather icons
  - Forecast cards
  - Extra info (humidity, UV index, etc.)

---

## 🧠 Key Concepts for Beginners

### ✅ 1. **API Requests**
- Use `fetch()` with `.then()` or `async/await`.
- Handle loading states and errors.

### ✅ 2. **DOM Manipulation**
- Use `document.querySelector` to update HTML content dynamically.

### ✅ 3. **Date and Time Formatting**
- Convert timestamps using `new Date(unix_timestamp * 1000)`.

### ✅ 4. **Unit Conversion**
- Kelvin to Celsius: `°C = K - 273.15`
- Optional toggle: Add a button to switch between °C/°F.

---

## 📦 Example Weather Data Structure

```json
{
  "current": {
    "temp": 299.15,
    "weather": [
      {
        "main": "Clouds",
        "icon": "04d"
      }
    ],
    "humidity": 62,
    "wind_speed": 3.5,
    "uvi": 5.2,
    "visibility": 10000
  },
  "hourly": [
    {
      "dt": 1623414000,
      "temp": 300.15,
      "pop": 0.2
    },
    ...
  ],
  "daily": [
    {
      "dt": 1623424800,
      "temp": {
        "min": 295.15,
        "max": 305.15
      },
      "weather": [
        {
          "main": "Rain",
          "icon": "10d"
        }
      ]
    },
    ...
  ]
}
```

---

## 🧪 Testing Tips

- Try different cities and use both search and geolocation.
- Test responsiveness on mobile and tablet sizes.
- Simulate slow connections to test loading behavior.
---

## 🎨 UI Suggestions

- Use weather icons from OpenWeather or import from a library like [Weather Icons](https://erikflowers.github.io/weather-icons/).
- Include animations for icon transitions or loading states.
- Add a toggle for °C / °F if desired.

---

## 📝 To Do (Optional Enhancements)

- 🌐 Multi-language support
- 📏 LocalStorage to save last searched location
- 📍 Map integration for location selection
- 🌙 Light/Dark theme toggle

---

## 🔗 Resources

- [Weather API Docs](https://www.weatherapi.com/my/)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [JavaScript Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


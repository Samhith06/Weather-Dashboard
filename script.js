const apiKey = "05e3dc1af6de4fc9ad094414250807";
const baseUrl = "https://api.weatherapi.com/v1";

// DOM Elements
const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");
const searchInput = document.getElementById("searchInput");
const loadingIndicator = document.getElementById("loadingIndicator");
const errorMessage = document.getElementById("errorMessage");

const currentWeatherSection = document.getElementById("currentWeather");
const hourlyForecastSection = document.getElementById("hourlyForecast");
const dailyForecastSection = document.getElementById("dailyForecast");

const currentLocation = document.getElementById("currentLocation");
const currentCondition = document.getElementById("currentCondition");
const currentTemp = document.getElementById("currentTemp");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");
const uvIndex = document.getElementById("uvIndex");
const currentIcon = document.getElementById("currentIcon");

const hourlyCards = document.getElementById("hourlyCards");
const dailyCards = document.getElementById("dailyCards");

// Units
let unit = localStorage.getItem("unit") || "C"; // "C" or "F"
let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];

createUnitToggle();
createRecentSearches();

// Event Listeners
searchBtn.addEventListener("click", () => {
    const city = searchInput.value.trim();
    if (city) fetchWeather(city);
});

locationBtn.addEventListener("click", () => {
    navigator.geolocation?.getCurrentPosition(pos => {
        const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
        fetchWeather(coords);
    });
});

async function fetchWeather(location) {
    toggleLoading(true);
    try {
        const res = await fetch(`${baseUrl}/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`);
        const data = await res.json();

        updateCurrentWeather(data);
        updateHourlyForecast(data);
        updateDailyForecast(data);
        addRecentSearch(data.location.name + ", " + data.location.country);
        showWeather();
    } catch (err) {
        console.error(err);
        showError();
    }
}

function updateCurrentWeather(data) {
    const current = data.current;
    const loc = data.location;

    const temp = unit === "F" ? current.temp_f : current.temp_c;
    const feels = unit === "F" ? current.feelslike_f : current.feelslike_c;
    const speed = unit === "F" ? `${current.wind_mph} mph` : `${current.wind_kph} km/h`;

    currentLocation.textContent = `${loc.name}, ${loc.country}`;
    currentCondition.textContent = current.condition.text;
    currentTemp.textContent = `${temp}°${unit}`;
    feelsLike.textContent = `${feels}°${unit}`;
    humidity.textContent = `${current.humidity}% humidity`;
    windSpeed.textContent = speed;
    pressure.textContent = `${current.pressure_mb} hPa`;
    visibility.textContent = `${current.vis_km} km`;
    uvIndex.textContent = current.uv;
    currentIcon.src = `https:${current.condition.icon}`;
}

function updateHourlyForecast(data) {
    const forecastHours = data.forecast.forecastday[0].hour;
    hourlyCards.innerHTML = "";

    forecastHours.slice(0, 24).forEach(hour => {
        const hourTime = new Date(hour.time).getHours();
        const temp = unit === "F" ? hour.temp_f : hour.temp_c;
        const card = document.createElement("div");
        card.className = "hourly-card";
        card.innerHTML = `
            <div class="hour">${hourTime}:00</div>
            <img src="https:${hour.condition.icon}" alt="icon">
            <div class="temp">${temp}°${unit}</div>
            <div class="condition">${hour.condition.text}</div>
        `;
        hourlyCards.appendChild(card);
    });
}

function updateDailyForecast(data) {
    const days = data.forecast.forecastday;
    dailyCards.innerHTML = "";

    days.forEach(day => {
        const date = new Date(day.date);
        const options = { weekday: "short", month: "short", day: "numeric" };
        const max = unit === "F" ? day.day.maxtemp_f : day.day.maxtemp_c;
        const min = unit === "F" ? day.day.mintemp_f : day.day.mintemp_c;

        const card = document.createElement("div");
        card.className = "daily-card";
        card.innerHTML = `
            <div class="daily-info">
                <img src="https:${day.day.condition.icon}" alt="icon">
                <div>
                    <div class="day">${date.toLocaleDateString(undefined, options)}</div>
                    <div class="condition">${day.day.condition.text}</div>
                </div>
            </div>
            <div class="daily-temps">
                <div class="high">${max}°${unit}</div>
                <div class="low">${min}°${unit}</div>
            </div>
        `;
        dailyCards.appendChild(card);
    });
}

function toggleLoading(show) {
    loadingIndicator.style.display = show ? "block" : "none";
    errorMessage.style.display = "none";
    currentWeatherSection.style.display = "none";
    hourlyForecastSection.style.display = "none";
    dailyForecastSection.style.display = "none";
}

function showWeather() {
    loadingIndicator.style.display = "none";
    errorMessage.style.display = "none";
    currentWeatherSection.style.display = "block";
    hourlyForecastSection.style.display = "block";
    dailyForecastSection.style.display = "block";
}

function showError() {
    loadingIndicator.style.display = "none";
    errorMessage.style.display = "block";
}

// === Unit Toggle ===
function createUnitToggle() {
    const container = document.createElement("div");
    container.className = "unit-toggle";

    const cBtn = document.createElement("button");
    cBtn.textContent = "°C";
    const fBtn = document.createElement("button");
    fBtn.textContent = "°F";

    container.append(cBtn, fBtn);
    document.querySelector(".search-section").appendChild(container);

    const updateButtons = () => {
        cBtn.classList.toggle("active", unit === "C");
        fBtn.classList.toggle("active", unit === "F");
    };

    cBtn.addEventListener("click", () => {
        unit = "C";
        localStorage.setItem("unit", unit);
        updateButtons();
    });

    fBtn.addEventListener("click", () => {
        unit = "F";
        localStorage.setItem("unit", unit);
        updateButtons();
    });

    updateButtons();
}

// === Recent Searches ===
function addRecentSearch(city) {
    if (!recentSearches.includes(city)) {
        recentSearches.unshift(city);
        if (recentSearches.length > 5) recentSearches.pop();
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
        createRecentSearches();
    }
}

function createRecentSearches() {
    const oldList = document.getElementById("recentList");
    if (oldList) oldList.remove();

    const list = document.createElement("div");
    list.id = "recentList";
    list.className = "unit-toggle";

    recentSearches.forEach(city => {
        const btn = document.createElement("button");
        btn.textContent = city;
        btn.addEventListener("click", () => fetchWeather(city));
        list.appendChild(btn);
    });

    document.querySelector(".search-section").appendChild(list);
}

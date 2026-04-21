# 🌤️ JavaScript Mini Project — Weather Dashboard

> **Duration:** ~1 Hour &nbsp;|&nbsp; **Type:** Mini Project &nbsp;|&nbsp; **Level:** Intermediate

---

## 📌 Overview

Build a **Weather Dashboard** that fetches live weather data from a public API, displays it dynamically using DOM manipulation, and is structured using an OOP class.

The app must respond to user input events and handle async operations cleanly — covering every concept from your JS syllabus in one real-world project.

> **API:** [Open-Meteo](https://open-meteo.com/) — completely free, **no API key required**.

---

## 🔗 API Endpoints

**Step 1 — Get city coordinates (Geocoding):**
```
https://geocoding-api.open-meteo.com/v1/search?name=CITY_NAME&count=1
```

**Step 2 — Get weather data:**
```
https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true
```

---

## 📋 Task Areas

### Task 01 — Project Setup & OOP Structure
**Concepts:** ES6 Classes · Constructor · `this` keyword · Class methods

- Create `index.html` with a search input, button, and a `#result` container div
- Create `app.js` and link it with `defer`
- Define a `WeatherApp` class with a `constructor()` that selects the DOM elements
- Add an `init()` method that will wire up events and load saved data

---

### Task 02 — Fetch & Async/Await
**Concepts:** Fetch API · `async/await` · Promises · `try/catch`

- Write `async fetchCoords(city)` — calls the Geocoding API, returns `{ latitude, longitude, name }` using **destructuring**
- Write `async fetchWeather(lat, lon)` — calls the Weather API, returns the `current_weather` object
- Write `async search(city)` — chains both fetches using `await`, wraps everything in `try/catch`

---

### Task 03 — DOM Manipulation & Rendering
**Concepts:** DOM API · `createElement` · Template literals · `innerHTML` · `classList`

- In `render(cityName, weather)`, dynamically build a weather card using **template literals**
- Inject the card into `#result` using `innerHTML` or `createElement`
- Show a **loading state** (`"Loading..."`) in the result container before the fetch begins
- Display: city name, temperature (°C), wind speed (km/h), weather description

---

### Task 04 — Events & Local Storage
**Concepts:** `addEventListener` · `preventDefault` · `localStorage` · `JSON.stringify` / `JSON.parse`

- In `init()`, attach a `submit` event listener to the form
- Call `e.preventDefault()` to stop page reload
- After a successful search, **save** the city name: `localStorage.setItem('lastCity', city)`
- On `init()`, **check** for a saved city and auto-load it on page refresh

---

## 🏗️ Step-by-Step Guide

| Step | What to do |
|------|-----------|
| **1** | Create `index.html` — add a `<form>`, `<input>`, `<button>`, and `<div id="result">` |
| **2** | Define the `WeatherApp` class. In the constructor, select all DOM elements using `querySelector` |
| **3** | Write `fetchCoords(city)` — fetch from the Geocoding API and destructure the response |
| **4** | Write `fetchWeather(lat, lon)` — fetch from the Weather API and return `current_weather` |
| **5** | Write `search(city)` — show a loading message, call both fetches, then call `render()` |
| **6** | Write `render(cityName, weather)` — build and inject the weather card using template literals |
| **7** | Add localStorage: save city on search, reload it automatically on `init()` |

---

## 💻 Starter Code

Complete all the `TODO` comments below:

```js
// app.js — fill in all the TODOs

class WeatherApp {
  constructor() {
    // TODO: Select the form, input, and result elements
    this.form   = /* document.querySelector(...) */;
    this.input  = /* document.querySelector(...) */;
    this.result = /* document.querySelector(...) */;
  }

  init() {
    // TODO: Add a submit event listener on this.form
    // TODO: On submit, call this.search() with the input value
    // TODO: Load last searched city from localStorage if it exists
  }

  async fetchCoords(city) {
    // TODO: Fetch from the Geocoding API
    // TODO: Return { latitude, longitude, name } using destructuring
  }

  async fetchWeather(lat, lon) {
    // TODO: Fetch from the Weather API
    // TODO: Return the current_weather object
  }

  async search(city) {
    try {
      // TODO: Show a loading message in this.result
      // TODO: Call fetchCoords(), then fetchWeather()
      // TODO: Call this.render() with the results
      // TODO: Save the city name to localStorage
    } catch (err) {
      // TODO: Display a user-friendly error message in this.result
    }
  }

  render(cityName, weather) {
    // TODO: Build a weather card using a template literal
    // TODO: Inject it into this.result using innerHTML
    // TODO: Display: city name, temperature, wind speed, weather description
  }
}

// Entry point
const app = new WeatherApp();
app.init();
```

---

## 🗂️ Project File Structure

```
weather-dashboard/
├── index.html    ← HTML structure (form, result container)
├── app.js        ← All JavaScript logic (WeatherApp class)
└── style.css     ← Your styles (optional but encouraged)
```

---

## 🌡️ Weather Code Reference

Use these codes from `current_weather.weathercode` to display a text description:

| Code | Description |
|------|-------------|
| `0` | ☀️ Clear sky |
| `1, 2, 3` | 🌤️ Partly cloudy |
| `45, 48` | 🌫️ Foggy |
| `51, 53, 55` | 🌦️ Drizzle |
| `61, 63, 65` | 🌧️ Rain |
| `71, 73, 75` | 🌨️ Snow |
| `95` | ⛈️ Thunderstorm |

---

## 📊 Grading Rubric

| Criteria | What we check | Marks |
|----------|--------------|-------|
| **OOP Structure** | `WeatherApp` class used correctly. Constructor selects DOM elements. Methods are defined on the class. | 20 pts |
| **Fetch & Async/Await** | Both API calls use `async/await`. Errors caught with `try/catch` and shown to the user. | 25 pts |
| **DOM Manipulation** | Weather data rendered dynamically (no hardcoded values). Loading state shown. Template literals used. | 25 pts |
| **Events** | Form uses `addEventListener`. `preventDefault()` called. Input value correctly read. | 15 pts |
| **Local Storage** | Last city saved on search. Auto-reloaded on page refresh using `getItem`/`setItem`. | 15 pts |
| **TOTAL** | | **100 pts** |

---

##  Hints

- The geocoding response is at `data.results[0]` — destructure `latitude`, `longitude`, and `name` from it.
- Use `e.preventDefault()` inside the submit listener to stop the page from reloading.
- Set `this.result.textContent = 'Loading...'` before your `await` calls to show a loading state.
- Destructure directly from the parsed response: `const { current_weather } = await response.json()`
- For localStorage, a plain string doesn't need `JSON.stringify` — `localStorage.setItem('lastCity', city)` works directly.
- Test with cities like: `London`, `Tokyo`, `Chennai`, `New York`

---

##  Bonus Challenges

Finished early? Try these for extra credit:

1. **Promise.all** — Fetch weather for 3 cities simultaneously using `Promise.all()` and display all three cards at once.
2. **Search History** — Store the last 5 searched cities in localStorage as a JSON array. Show them as clickable chips below the search bar.
3. **Subclass** — Create a `WeatherCard` class that `extends WeatherApp` and overrides `render()` to include an emoji icon based on the weather code.
4. **Auto-Refresh** — Use `setInterval` to automatically re-fetch and update the weather every 60 seconds without a new search.

---

## 📤 Submission

Submit a folder named `weather-dashboard-yourname/` containing:

```
weather-dashboard-yourname/
├── index.html
├── app.js
└── style.css   (optional)
```

> ⚠️ **Rules:** Vanilla JS only — no frameworks or libraries. All required concepts must be visible in your code.

---

*JavaScript Fundamentals — Mini Project Assessment · Open-Meteo API · Vanilla JS · ~1 Hour*

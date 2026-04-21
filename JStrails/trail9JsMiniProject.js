class Weather {
	constructor(){
		this.result = document.querySelector('#result')
		this.api1 = axios.create({
			baseURL: 'https://geocoding-api.open-meteo.com/v1',
			headers: {'Content-Type' : 'application/json'}
		})
		this.api2 = axios.create({
			baseURL: 'https://api.open-meteo.com/v1/',
			headers:{"Content-Type":'application/json'}
		})
	}
	init() {
	}
	async fetchCoords(name) {
		const {data} = await this.api1.get('/search',{params: {name,count:1}})
		const {latitude,longitude,name:cityname} = data.results[0]
		this.fetchWeather({latitude,longitude})
		return {latitude,longitude,cityname}		
	}
	async fetchWeather({latitude, longitude}) {
		const {data} = await this.api2.get('/forecast', {params: {latitude, longitude, current_weather:true}})
		const {temperature,windspeed} = data.current_weather
		const {temperature : temperature_unit ,windspeed : windspeed_unit} = data.current_weather_units
		return {temperature, windspeed, temperature_unit, windspeed_unit}
	}
	renderData({temperature,windspeed, temperature_unit, windspeed_unit}) {
		this.result.innerHTML=`<p>Temperature today: ${temperature}${temperature_unit}</p><p>Wind speed: ${windspeed}${windspeed_unit}</p>`
	}
	setLoading() {
		this.result.textContent = `loading`
		const id = setInterval(() => {
			this.result.textContent += '..'
		},100)
		clearInterval(id)
	}
}
const weatherApp = new Weather()
document.querySelector('#weather-search').addEventListener('submit', async (event) => {
	event.preventDefault()
	const searchCity = document.querySelector('#city').value
	weatherApp.setLoading()
	const coordinates = await weatherApp.fetchCoords(searchCity)
	const weatherData = await weatherApp.fetchWeather(coordinates)
	weatherApp.renderData(weatherData)
})

class Driver {
	#earnings
	constructor(baseFair) {
		this.baseFair = baseFair
	}
	getEarnings(){
		return this.#earnings
	}
	setEarnings(earnings) {
		this.#earnings = earnings
	}
	updateEarning(earnings) {
		return this.#earnings+=earnings
	}
	endRide() {

	}
	calcFare() {

	}
	static companyPolicy() {
		return `You are subjected to company policy`
	}
	static calcCommission(fare) {
		return Math.round(fare * 0.1)
	}
}
class PremiumDriver extends Driver {
	constructor(baseFair) {
		super(baseFair)
	}
	endRide() {
		console.log(`Premium Driver stoping the ride charge is ${this.calcFare()}`)
	}
	calcFare() {
		return this.baseFair * 1.5
	}
}
class BikeDriver extends Driver {
	constructor(baseFair) {
		super(baseFair)
	}
	endRide() {
		console.log(`BikeDriver stopping the ride charge is ${this.calcFare()}`)
	}
	calcFare() {
		return this.baseFair * 1
	}
}
class AutoDriver extends Driver {
	constructor(baseFair) {
		super(baseFair)
	}
	endRide() {
		console.log(`Autodriver ending the ride charge is ${this.calcFare()}`)
	}
	calcFare() {
		return this.baseFair * 1.2
	}
}
const baseFair = 30
const autoDriver = new AutoDriver(baseFair)
autoDriver.endRide()
const bikeDriver = new BikeDriver(baseFair)
bikeDriver.endRide()
console.log("Bike commission: ", Driver.calcCommission(bikeDriver.calcFare()))

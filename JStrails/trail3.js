const baseAgent = {
  agency: "MI6",
  status: "Active",
  getAccessCode() {
    return `ACCESS-GRANTED-${this.id}`;
  }
};

const missionBrief = {
  target: "Syndicate Base",
  riskLevel: "Extreme"
};

// **1. Recruit a New Agent (`Object.create`)**
const agent007 = Object.create(baseAgent)
agent007.id = "007"
console.log("Calling the getAccessCode to prove that inheritance works")
console.log(agent007.getAccessCode())
// **2. Inspect the Hierarchy (`Object.getPrototypeOf`)**
console.log("Getting the prototype to check us agentoo7 is equal to baseAgent")
console.log(Object.getPrototypeOf(agent007))
// **3. The Rogue Agent (`Object.setPrototypeOf`)**
const rougeAgentBase = {status: "Terminated", threatLevel: "High"}
Object.setPrototypeOf(agent007,rougeAgentBase)
console.log("Rouge agent status code: ",agent007.status)
// **4. Top Secret Clearance (`Object.defineProperty`)**
Object.defineProperty(agent007,'clearance' ,{value : 'LEVEL 5', enumerable : false, writable : false})
console.log(agent007.clearance)
agent007.clearance = "LEVEl 6"
console.log(agent007.clearance)
// **5. Mission Assignment (`Object.defineProperties`)**
Object.defineProperties(agent007, {'weapon' : {
	value : 'Walther PPK',enumerable : true,writable : true
},'gadget' : {
	value: "Laser Watch" , enumerable : true, writable : true
}
})
console.log("Added Multiple properties using defineProperties: ")
console.log(agent007)

// **6. Exposing the Secrets (`Object.getOwnPropertyNames` & `getOwnPropertyDescriptor`)**
console.log("Getting all the property names: ")
console.log(Object.getOwnPropertyNames(agent007))
console.log("Getting Property descriptor ")
console.log(Object.getOwnPropertyDescriptor(agent007,'clearance'))

// **7. The True Identity (`Symbols` & `Object.getOwnPropertySymbols`)**
const trueIdentity = Symbol("trueIdentity")
agent007[trueIdentity] = "James Bond"
console.log("trying to print obj with symbol")
console.log(agent007)
console.log("trying to print only the symbol")
console.log(Object.getOwnPropertySymbols(agent007))

// **8. Ownership Check (`hasOwnProperty` vs `Object.hasOwn()`)**
console.log("REsult of has own property")
console.log(Object.hasOwnProperty("id"))
console.log(Object.hasOwn(agent007,"id"))

// **9. Mission Prep (`Object.assign` vs Spread)**
const missionProfile = Object.assign({},agent007,missionBrief)
console.log("Merge using Object Assign()")
console.log(missionProfile)
const missionProfileSpread = {...agent007,...missionBrief}
console.log("Merge using spread operator")
console.log(missionProfileSpread)

// **10. Lockdown time (`Object.seal` & `Object.freeze`)**
Object.seal(missionProfileSpread)
missionProfileSpread.target = "kim base"
missionProfileSpread.location = "korea"
console.log("Seal output only updating is possible")
console.log(missionProfileSpread)

Object.freeze(baseAgent)
baseAgent.agency = "CIA"
console.log("Freeze output (Failed to update agency)")
console.log(baseAgent)

//**11. The Ultimate Identity Test (`Object.is`)**
console.log("Is this two Object are equal using is(): " , Object.is(agent007, missionProfileSpread))
console.log("is NaN equal to NaN using obj.is() ", Object.is(NaN,NaN))


## The Scenario
You have been recruited as the Lead Security Developer for a top-secret intelligence agency. Your mission is to build the agent profiling system. The data must be structured perfectly, hidden properties must be secured, and agent hierarchies must be established using prototypes.

### 📁 Initial Data Setup
*Provide this to your students to start the challenge:*
```javascript
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

// A unique symbol for the agent's true identity (classified)
const trueIdentity = Symbol("realName");
```

---

##  Phase 1: Creation & The Prototype Chain

**1. Recruit a New Agent (`Object.create`)**
Create a new agent named `agent007` that inherits from `baseAgent` using `Object.create()`. 
- Manually add an `id` property to `agent007` with the value `"007"`.
- Log `agent007.agency` and `agent007.getAccessCode()` to prove inheritance works.

**2. Inspect the Hierarchy (`Object.getPrototypeOf`)**
Verify the prototype chain. Write a line of code using `Object.getPrototypeOf()` to check if `agent007`'s prototype is exactly equal to `baseAgent`.

**3. The Rogue Agent (`Object.setPrototypeOf`)**
`agent007` has gone rogue! The agency uses a different base object for rogue agents.
- Create a `rogueAgentBase` object with `{ status: "Terminated", threatLevel: "High" }`.
- Use `Object.setPrototypeOf()` to change `agent007`'s prototype from `baseAgent` to `rogueAgentBase`.
- Log `agent007.status`. It should now say `"Terminated"`.

---

##  Phase 2: Classified Properties (Descriptors & Meta-programming)

**4. Top Secret Clearance (`Object.defineProperty`)**
`agent007` needs a clearance level, but it **cannot be changed** and **must not show up in loops**.
- Use `Object.defineProperty()` to add a property called `clearance` with the value `"Level 5"` to `agent007`.
- Configure it so it is `enumerable: false` (hidden from loops) and `writable: false` (read-only).
- Attempt to change `agent007.clearance = "Level 1"` and log it to prove it didn't change.

**5. Mission Assignment (`Object.defineProperties`)**
Assign the agent multiple properties at once using `Object.defineProperties()`.
- Add `weapon` (value: "Walther PPK", writable, enumerable).
- Add `gadget` (value: "Laser Watch", writable, enumerable).

**6. Exposing the Secrets (`Object.getOwnPropertyNames` & `getOwnPropertyDescriptor`)**
Regular `Object.keys(agent007)` won't show the hidden `clearance` property.
- Use `Object.getOwnPropertyNames(agent007)` to log **all** property names, including the hidden `clearance`.
- Use `Object.getOwnPropertyDescriptor()` to retrieve and log the configuration settings (descriptor) of the `clearance` property.

---

##  Phase 3: Symbols & Modern Property Checks

**7. The True Identity (`Symbols` & `Object.getOwnPropertySymbols`)**
- Assign the `trueIdentity` symbol to `agent007` with the value `"James Bond"`. *(Hint: `agent007[trueIdentity] = ...`)*
- Log the agent object. Notice how the symbol sits separately.
- Extract and log the symbol property using `Object.getOwnPropertySymbols()`.

**8. Ownership Check (`hasOwnProperty` vs `Object.hasOwn()`)**
- Use the older `agent007.hasOwnProperty("id")` and log the result.
- Use the modern (ES2022) `Object.hasOwn(agent007, "id")` and log the result.
- *Bonus Question for Students:* Why is `Object.hasOwn()` considered safer than `.hasOwnProperty()`?

---

##  Phase 4: Merging, Security, & Strict Equality

**9. Mission Prep (`Object.assign` vs Spread)**
- Create a `missionProfile` object by merging `agent007` and `missionBrief`. Use `Object.assign()` and log it.
- Create a `clonedProfile` using the Spread operator `{ ...agent007, ...missionBrief }`.
- *Note: Discuss with students why the newly merged objects DO NOT inherit the prototype or the hidden `clearance` property from Phase 2.*

**10. Lockdown time (`Object.seal` & `Object.freeze`)**
- Use `Object.seal()` on `missionBrief`. Prove it works by successfully changing the `target` but failing to add a new property like `location`.
- Use `Object.freeze()` on `baseAgent`. Prove it works by failing to change the `agency` to "CIA".

**11. The Ultimate Identity Test (`Object.is`)**
- Use `Object.is()` to compare if `agent007` is identically equal to `clonedProfile`. (It should be false).
- Use `Object.is(NaN, NaN)` and log it. Compare this result to `NaN === NaN`. Why does `Object.is` return true here?

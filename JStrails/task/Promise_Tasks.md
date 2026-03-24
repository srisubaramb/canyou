# JavaScript Promises — Task 

**Concepts covered:** Promise.all · Promise.race · Promise Chaining (combined)  
**APIs used:** PokeAPI · REST Countries · Dog CEO · Advice Slip · JSONPlaceholder  
**Difficulty:** Beginner → Advanced

---

## Task 1 — Pokémon Stats Comparator
> `Promise.all` · Beginner

**APIs:** PokeAPI

Fetch three Pokémon simultaneously using `Promise.all` — pikachu, bulbasaur, and charmander. Once all three resolve, log a comparison table showing each Pokémon's name, `base_experience`, and `height` side by side in the console.

### Endpoints
```
https://pokeapi.co/api/v2/pokemon/pikachu
https://pokeapi.co/api/v2/pokemon/bulbasaur
https://pokeapi.co/api/v2/pokemon/charmander
```

### Learning Objectives
- `Promise.all` fires all requests in parallel
- Waits for **ALL** promises to complete before resolving
- One rejection = entire `Promise.all` rejects
- Destructure results using array syntax

### Hints
- Use `.then(r => r.json())` on each fetch before passing to `Promise.all`
- Pass an array of promises: `Promise.all([p1, p2, p3])`
- Destructure in `.then`: `.then(([pikachu, bulbasaur, charmander]) => ...)`
- Try intentionally breaking one URL and observe the `.catch()`

---

## Task 2 — API Speed Race
> `Promise.race` · Intermediate

**APIs:** Dog CEO · Advice Slip · PokeAPI

Race three APIs against each other — Dog CEO, Advice Slip, and PokeAPI. Use `Promise.race` to log whichever one responds first and display that result. Run it multiple times and observe that the winner can change each run!

### Endpoints
```
https://dog.ceo/api/breeds/image/random
https://api.adviceslip.com/advice
https://pokeapi.co/api/v2/pokemon/1
```

### Learning Objectives
- `Promise.race` resolves on the **FIRST** settled promise
- Remaining promises are silently ignored
- Works for both resolve and reject
- Great for implementing request timeouts

### Hints
- Wrap each `fetch + .json()` as a single promise
- Tag each result so you know which API won
- Add a slow fake promise using `setTimeout` to test timeout use-case
- Try `Promise.any()` as an extension challenge

---

## Task 3 — Country Region Dashboard
> `Promise.all` + `Promise.allSettled` · Intermediate

**APIs:** REST Countries

Fetch India, Japan, and Brazil simultaneously from the REST Countries API using `Promise.all`. Extract and display each country's name, capital, population, and region. Then re-implement using `Promise.allSettled` to handle partial failures gracefully.

### Endpoints
```
https://restcountries.com/v3.1/name/india
https://restcountries.com/v3.1/name/japan
https://restcountries.com/v3.1/name/brazil
```

### Learning Objectives
- Handle deeply nested JSON responses
- Understand the difference between `Promise.all` vs `Promise.allSettled`
- `allSettled` never rejects — check the `.status` field on each result
- Filter fulfilled vs rejected results

### Hints
- API response is an array — use `result[0]` to get the country object
- Format population: `country.population.toLocaleString()`
- Intentionally pass a bad URL to test how `allSettled` handles it
- Check `result.status === 'fulfilled'` before accessing `result.value`

---

## Task 4 — Async Dashboard (Capstone)
> `Promise.race` + Chaining + `Promise.all` combined · Advanced

**APIs:** Dog CEO · Advice Slip · JSONPlaceholder · PokeAPI

Build a mini async dashboard combining all three patterns:
1. Use `Promise.race` between Dog CEO and Advice Slip
2. Chain onto the winner to fetch a user from JSONPlaceholder
3. Inside that chain, use `Promise.all` to fetch two Pokémon in parallel
4. Display all results together in one final combined `console.log`

### Endpoints
```
https://dog.ceo/api/breeds/image/random
https://api.adviceslip.com/advice
https://jsonplaceholder.typicode.com/users/1
https://pokeapi.co/api/v2/pokemon/pikachu
https://pokeapi.co/api/v2/pokemon/ditto
```

### Learning Objectives
- Nest `Promise.all` inside a `.then()` chain
- Compose async patterns together like building blocks
- A single `.catch()` at the end covers the entire flow
- This mirrors real-world production async code

### Hints
- `return Promise.all([...])` inside a `.then()` to keep the chain going
- Flow: Race result → chain → parallel fetch → final log
- Use `Promise.allSettled` inside the chain for extra resilience
- Try converting the whole solution to `async/await` as a bonus

---

## API Quick Reference

| API | Base URL | Used in |
|-----|----------|---------|
| JSONPlaceholder | `https://jsonplaceholder.typicode.com` | Task 4 (chaining) |
| PokeAPI | `https://pokeapi.co/api/v2` | Task 1, Task 4 (Promise.all) |
| REST Countries | `https://restcountries.com/v3.1` | Task 3 (Promise.all) |
| Dog CEO | `https://dog.ceo/api` | Task 2, Task 4 (Promise.race) |
| Advice Slip | `https://api.adviceslip.com` | Task 2, Task 4 (Promise.race) |

> **Note:** All APIs are free and require no API key. They support CORS — code runs directly in the browser console or CodePen. Always add a `.catch()` to every chain.

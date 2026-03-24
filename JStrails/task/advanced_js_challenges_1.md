# Advanced JavaScript — 5 Challenges
**Duration:** 1 Hour 30 Minutes &nbsp;|&nbsp; **Total:** 100 Points &nbsp;|&nbsp; **18 min per challenge**

> These are not UI tasks. No forms, no styling, no pages.  
> Each challenge is about one concept. Understand it, implement it, prove it works.  
> Open MDN if you're stuck on syntax. Do not copy-paste solutions.

---

## Challenge 1 — Write Your Own Debounce
**Points: 20 &nbsp;|&nbsp; Difficulty: ★★☆☆☆**

You've used search before. But every time you type, you're hitting the API on every single keystroke. That's a problem in production. Debouncing fixes it — wait until the user *stops* typing for a set time, then act.

The catch: you have to write it yourself using a closure.

**Write a function `debounce(fn, delay)`:**

- Takes any function `fn` and a delay in milliseconds
- Returns a **new function** that only calls `fn` after the user has stopped calling it for `delay` ms
- Every new call within the delay window must **reset the timer**

```js
function debounce(fn, delay) {
  // your code here
}

const callAPI = (query) => {
  console.log("API called with:", query);
};

const debouncedCall = debounce(callAPI, 500);

debouncedCall("j");      // ignored
debouncedCall("ja");     // ignored
debouncedCall("jav");    // ignored
debouncedCall("java");   // only this fires — after 500ms
```

**Now wire it to the browser:**

- Create an `<input>` on the page
- Attach your debounced function to the `keyup` event
- Show two counters on the page:
  - `Keystrokes: 0`
  - `API actually called: 0`
- Both update live. The difference between them proves your debounce is working.

>  You need `clearTimeout` and `setTimeout` — that's it. The timer lives inside the closure.

---

## Challenge 2 — Function Factory & Compose
**Points: 20 &nbsp;|&nbsp; Difficulty: ★★★☆☆**

Functions that return functions. This is where JavaScript gets interesting.

### Part A — Function Factory

Write a function `multiplier(x)` that returns a new function. The returned function takes a number and multiplies it by `x`.

```js
const double = multiplier(2);
const triple = multiplier(3);
const tenX   = multiplier(10);

console.log(double(5));          // 10
console.log(triple(5));          // 15
console.log(tenX(5));            // 50
console.log(double(triple(4)));  // 24
```

### Part B — Compose

Write a `compose(...fns)` function. It takes any number of functions and returns one function. When called, it runs the functions **right to left** — the output of each becomes the input of the next.

```js
const add10     = x => x + 10;
const double    = x => x * 2;
const subtract3 = x => x - 3;

const transform = compose(subtract3, double, add10);
// runs: add10 → double → subtract3

console.log(transform(5));  // ((5 + 10) * 2) - 3 = 27
console.log(transform(0));  // ((0 + 10) * 2) - 3 = 17
```

**Then use your `compose` to build a text pipeline:**

```js
const trim       = str => str.trim();
const capitalize = str => str[0].toUpperCase() + str.slice(1);
const addExclaim = str => str + "!";

const processText = compose(addExclaim, capitalize, trim);

console.log(processText("  hello world  ")); // "Hello world!"
```

>  `Array.reduceRight()` is your friend for implementing compose.

---

## Challenge 3 — Build Memoize
**Points: 20 &nbsp;|&nbsp; Difficulty: ★★★☆☆**

Some functions are expensive. If you call them with the same input twice, why calculate again? Memoization caches the result the first time — and returns it instantly on repeat calls.

Build it using a closure.

**Write a function `memoize(fn)`:**

- Takes any function
- Returns a memoized version of it
- On the first call with a given argument → compute and cache the result
- On repeat calls with the same argument → return from cache, **do not call `fn` again**

```js
function memoize(fn) {
  // your code here
}

function slowSquare(n) {
  console.log("Calculating for:", n); // should only appear ONCE per unique n
  return n * n;
}

const fastSquare = memoize(slowSquare);

console.log(fastSquare(4)); // logs "Calculating for: 4" → 16
console.log(fastSquare(4)); // no log → 16 (from cache)
console.log(fastSquare(9)); // logs "Calculating for: 9" → 81
console.log(fastSquare(9)); // no log → 81 (from cache)
```

**Then expose the cache:**

```js
console.log(fastSquare.cache);
// { '4': 16, '9': 81 }
```

**Then apply it to Fibonacci and measure:**

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.time("without memo");
fib(40);
console.timeEnd("without memo");

const memoFib = memoize(/* think about how recursive memoization works */);

console.time("with memo");
memoFib(40);
console.timeEnd("with memo");
```

>  The cache is just a plain object: `const cache = {}`. It lives in the closure and persists across calls.

---

## Challenge 4 — Build a Pub-Sub Event System
**Points: 20 &nbsp;|&nbsp; Difficulty: ★★★★☆**

This is the pattern behind React state, Redux, and every real frontend framework. One part of your app fires an event. Other parts listen for it. They don't know about each other — only the event connects them.

**Build a class `EventEmitter` with these methods:**

| Method | What it does |
|---|---|
| `.on(event, callback)` | Subscribe to an event |
| `.off(event, callback)` | Unsubscribe from an event |
| `.emit(event, data)` | Trigger all listeners for that event |
| `.once(event, callback)` | Subscribe but auto-remove after first call |

```js
const emitter = new EventEmitter();

function onCartUpdate(data) {
  console.log("Cart updated:", data);
}

emitter.on("cart:update", onCartUpdate);
emitter.emit("cart:update", { items: 3, total: 450 });
// → Cart updated: { items: 3, total: 450 }

emitter.off("cart:update", onCartUpdate);
emitter.emit("cart:update", { items: 5 });
// → nothing

emitter.once("app:ready", () => console.log("App is ready!"));
emitter.emit("app:ready"); // → App is ready!
emitter.emit("app:ready"); // → nothing
```

**Now wire it to a real UI — without any element knowing about another:**

- Put 3 things on the page: a **cart badge** (item count), a **total price**, and a **toast notification**
- Each one subscribes to a `"cart:add"` event independently
- Add an "Add to Cart" button — clicking it emits `"cart:add"` with a product object
- Each subscriber updates itself — they never call each other

>  Store listeners as: `this.events = {}` — keys are event names, values are arrays of callbacks.  
>  For `.once()` — wrap the callback in another function that calls `.off()` on itself after running.

---

## Challenge 5 — Lazy Load & Infinite Scroll
**Points: 20 &nbsp;|&nbsp; Difficulty: ★★★★☆**

Every real product does this. Images load only when they're about to enter the viewport. More content loads automatically when you reach the bottom. Both use `IntersectionObserver`.

>  **You cannot use scroll events (`window.addEventListener('scroll', ...)`) anywhere in this challenge. Zero points if you do. Use IntersectionObserver only.**

### Part A — Lazy Image Loading

- Create 20 image cards on the page
- Store the real image URL in `data-src` — **not** `src`
- Set a placeholder as the initial `src` (a grey CSS box is fine)
- Use `IntersectionObserver` to watch all image elements
- When a card enters the viewport → swap `data-src` into `src`
- Once loaded → stop observing that element

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // load the image, then stop watching it
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".lazy-img").forEach(img => observer.observe(img));
```

### Part B — Infinite Scroll

- Show the first 10 products on page load (use your JSON Server)
- Place a sentinel element at the very bottom of the list:
  ```html
  <div id="sentinel"></div>
  ```
- Watch **only the sentinel** with `IntersectionObserver`
- When it enters the viewport → fetch the next 10 and append them
- Show a loading spinner while fetching
- When all items are loaded → stop observing

>  The sentinel is the trick. You're not watching the scroll position — you're watching a div. When that div becomes visible, it's time to load more.  
>  `observer.unobserve(el)` stops watching one element. `observer.disconnect()` stops the whole observer.

---

## Scoring

| # | Challenge | Points |
|---|---|---|
| 1 | Debounce — implementation (15) + browser counter (5) | 20 |
| 2 | Function Factory (10) + Compose + pipeline (10) | 20 |
| 3 | Memoize core (15) + cache property + Fibonacci test (5) | 20 |
| 4 | EventEmitter class (15) + cart UI wired with pub-sub (5) | 20 |
| 5 | Lazy loading (10) + Infinite scroll with sentinel (10) | 20 |
| | **Total** | **100** |

---

## Time Split

```
0:00 – 0:18  →  Challenge 1
0:18 – 0:36  →  Challenge 2
0:36 – 0:54  →  Challenge 3
0:54 – 1:12  →  Challenge 4
1:12 – 1:30  →  Challenge 5
```

---

*One `.js` file per challenge. Add the challenge number as a comment at the top. No frameworks, no libraries — just JavaScript.*

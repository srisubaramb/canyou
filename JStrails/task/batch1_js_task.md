#  Advanced JS 2-Hour Challenge: "Corporate Data Parsing & State Management"

*Also solve one LeetCode problem (Recommended: "Group Anagrams" or "Flatten Nested List Iterator")*

**Objective:** This is a **challenging** assessment designed to push your understanding of closures, the `this` keyword, advanced array methods, nested destructuring, and scope. You are expected to **search the documentation (MDN)** to figure out how to solve these complex data transformations.
**Estimated Time:** 2 Hours

---

### Task 1: Secure Data Initialization (IIFE & Scope)

1. You are provided with a complex nested data structure representing a company. However, the data must not pollute the global scope.
2. Wrap your entire application logic inside an **Immediately Invoked Function Expression (IIFE)**.
3. Inside the IIFE, initialize a `const` variable `companyData` with at least 3 departments. Each department contains an array of `employees`. Each employee has an `id`, `name`, `skills` (array of strings), and `projects` (array of objects with `name` and `budget`).

### Task 2: Advanced Data Extraction (Nested Destructuring & Spread/Rest)

1. Write a function `extractTopPerformer({...args})`.
2. Assume you receive an object containing nested properties. Use **nested object destructuring** in the function signature to extract the `name`, rename `skills` to `abilities`, and extract the *first* project's `budget` while providing a default value of `0` in case they have no projects.
3. Use the **rest parameter** to gather any remaining properties of the employee into a `metadata` object.
4. *Hint: You will need to carefully research how to do deep/nested destructuring with aliasing.*

### Task 3: The "Context" Trap (The `this` keyword & Binding)

1. Create a `TaxCalculator` object. It should have a property `baseRate: 0.15` and a method `calculate(amount)` that returns `amount * this.baseRate`.
2. Below it, write a function `processPayments(paymentsArray, callback)`. This function maps over the numbers and applies the callback.
3. **The Trap:** Call `processPayments([100, 200, 300], TaxCalculator.calculate)`.
4. **Your Task:** Explain in a code comment why this returns `NaN`, and implement **two different ways** to fix it (Hint: you will need to research `Function.prototype.bind` or arrow function wrappers).

### Task 4: Private State Management (Closures)

1. Write a function `createProjectVault(initialFunds)`.
2. This function must use **closures** to keep the funds strictly private (no one should be able to access `vault.funds` directly).
3. Return an object with three methods:
   - `add(amount)`: Adds to the funds and returns the new balance.
   - `deduct(amount)`: Subtracts from funds. If funds are insufficient, use short-circuit logic to cancel the transaction and log "Insufficient".
   - `getAuditHistory()`: Returns an array of strings detailing every transaction (e.g., `["+500", "-200"]`). *The history array must also be private!*

### Task 5: The "Boss Level" Data Transformation (Heavy `reduce` & Array Chaining)

1. The HR department needs the nested `companyData` simplified.
2. Write a function `normalizeData(data)`.
3. You must transform the nested structure (Departments -> Employees) into a single, flat object where the **keys are the employee IDs** and the **values are the employee objects** (but without the nested projects; replace projects with a `totalBudget` integer).
4. **Requirements:**
   - You must use `.reduce()`.
   - You will likely need to research and use `.flatMap()` to flatten the arrays before reducing.
   - You must use the spread operator to construct the new objects dynamically.

---



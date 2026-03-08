# JavaScript Array Methods Challenge: Employee Management System

## Context

You are the HR tech lead at a software company. The company has a list of employees, and it is time for the annual performance review. You need to use your knowledge of JavaScript array methods to generate reports, calculate bonuses, and manage the team's roster.

## The Starter Data

Copy this array into your JavaScript file to begin:

```javascript
let employees = [
  { id: 101, name: "Alice", role: "Frontend Developer", department: "Engineering", performanceScore: 85, skills: ["React", "CSS", "JavaScript"] },
  { id: 102, name: "Bob", role: "Backend Developer", department: "Engineering", performanceScore: 40, skills: ["Node.js", "MongoDB", "JavaScript"] },
  { id: 103, name: "Charlie", role: "DevOps Engineer", department: "Infrastructure", performanceScore: 92, skills: ["AWS", "Docker", "Linux"] },
  { id: 104, name: "Diana", role: "UI/UX Designer", department: "Design", performanceScore: 78, skills: ["Figma", "HTML", "CSS"] },
  { id: 105, name: "Ethan", role: "Frontend Developer", department: "Engineering", performanceScore: 90, skills: ["Vue", "HTML", "JavaScript"] }
];
```

##  Phase 1: Core Operations (Use what you know!)

Apply the methods we covered in our session (`map`, `filter`, `forEach`, `reduce`, `every`, `pop`, `shift`).

### 1. Extract Employee Names

The management wants a simple list of all employee names for the attendance register.

* **Task:** Create a new array containing only the names of the employees.
* **Expected output:** `["Alice", "Bob", "Charlie", "Diana", "Ethan"]`

### 2. Find Top Performers

Management wants to single out top performers for a special bonus.

* **Task:** Create a new array containing only employees who have a `performanceScore` of **80 or above**.

### 3. Generate Performance Reports

* **Task A:** Iterate through the array and print a customized report to the console for each employee in this format: `"Employee: Alice, Score: 85"`.
* **Task B:** Iterate through the array and print out just the `skills` arrays for each employee to see what technologies the team covers.

### 4. Calculate Total Bonus Payout

The company is setting aside a bonus pool. They will pay out $10 for every single performance point earned by the team combined.

* **Task:** Calculate the **total sum of all performance scores** in the array. Once you have the total score, multiply it by 10 to log the final company bonus payout amount.

### 5. Check Team Eligibility

The company will only throw a team pizza party if **every single employee** scored at least `35`.

* **Task:** Check if the team qualifies for the pizza party. Log the true/false result to the console.

### 6. Update the Employee Roster

There have been some staffing changes on the team!

* **Task A:** The last employee in the list decides to leave the company to start their own agency. Remove them from the **end** of the array.
* **Task B:** The first employee in the list gets promoted to a different department. Remove them from the **beginning** of the array.

---

##  Phase 2: The Tricky Parts (Research Required!)

**Welcome to the real world!** Developers constantly encounter problems requiring methods they don't have memorized.
For these tasks, you must search MDN Web Docs (or Google) to discover **new array methods** to solve the scenarios.

### 7. Locate a Specific Employee  `(Research: How to find a single object in an array by a property)`

* **Task:** The IT department needs to find the exact employee object for the person with `id: 103` to update their system access.
* *Hint:* Filtering returns an array. Is there a method that returns just the *first element* that matches a condition?

### 8. Skill Check  `(Research: Checking if some elements pass a test & checking if an array contains a value)`

* **Task:** The company is taking on a new project that requires "Vue". Check if **at least one** employee in the entire company has "Vue" in their skills array. Log `true` or `false`.
* *Hint:* You will need to combine an array method for testing elements with another method that checks if an array includes a specific string.

### 9. Middle Management Transfer `(Research: Finding an index & removing items from the middle of an array)`

* **Task:** Employee with `id: 102` is transferring to a different branch. Find their exact index in the array, and then cut them out of the middle of the `employees` array.
* *Hint:* `pop` and `shift` only work on the ends of the array. What method lets you target the middle?

### 10. Rank the Team `(Research: Sorting arrays of objects)`

* **Task:** HR wants a leaderboard. Sort the `employees` array based on their `performanceScore` from highest to lowest.
* *Warning:* Careful! The default sorting behavior in JavaScript might not do what you expect with numbers. Research how to write a "compare function"!

### 11.  Boss Level Challenge: Master Skill List `(Research: Flattening arrays and Unique values)`

* **Task:** Create a single, flat array containing **all** the unique skills present in the company (no duplicates).
* *Expected output:* `["React", "CSS", "JavaScript", "Node.js", "MongoDB", "AWS", "Docker", "Linux", "Figma", "HTML", "Vue"]`
* *Hint:* We have arrays inside of objects inside of an array. You'll need to extract them, combine them into one massive flat array, and then figure out how to filter out the duplicates. (Looking up `Set` in JavaScript might blow your mind!)

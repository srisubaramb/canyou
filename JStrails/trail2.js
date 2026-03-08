let employees = [
  { id: 101, name: "Alice", role: "Frontend Developer", department: "Engineering", performanceScore: 85, skills: ["React", "CSS", "JavaScript"] },
  { id: 102, name: "Bob", role: "Backend Developer", department: "Engineering", performanceScore: 40, skills: ["Node.js", "MongoDB", "JavaScript"] },
  { id: 103, name: "Charlie", role: "DevOps Engineer", department: "Infrastructure", performanceScore: 92, skills: ["AWS", "Docker", "Linux"] },
  { id: 104, name: "Diana", role: "UI/UX Designer", department: "Design", performanceScore: 78, skills: ["Figma", "HTML", "CSS"] },
  { id: 105, name: "Ethan", role: "Frontend Developer", department: "Engineering", performanceScore: 90, skills: ["Vue", "HTML", "JavaScript"] }
];
// ##  Phase 1: Core Operations (Use what you know!)
// ### 1. Extract Employee Names
const employeesName = employees.map(employee => employee.name)
console.log("Employees names: ")
console.log(employeesName)
// ### 2. Find Top Performers
const topPerformers = employees.filter(employee => employee.performanceScore >= 80)
console.log("Top Performers: ")
console.log(topPerformers)
// ### 3. Generate Performance Reports
console.log("Performance Report: ")
employees.forEach(employee => console.log(`Employee: ${employee.name}, Score: ${employee.performanceScore}`))
console.log("Skills covered")
employees.forEach(employee => console.log(employee.skills))
// ### 4. Calculate Total Bonus Payout
console.log("Bonus payout")
const totalPerformanceScore = employees.reduce((totalPerformanceScore, currentEmployee) => totalPerformanceScore += currentEmployee.performanceScore , 0)
console.log(totalPerformanceScore * 10) //for every performance point 10$
// ### 5. Check Team Eligibility
const isATeamParty = employees.every(employee => employee.performanceScore >= 35)
const teamPartyNotification = isATeamParty ? "Hurray! guys it's a pizza patry" : "oo! Meet you in the next week , no party"
console.log("Team Party Notification")
console.log(teamPartyNotification)
// ### 6. Update the Employee Roster
//the last employee going out of the company been removed
employees.pop()
console.log("Current Employees count due to an employee leaves" + employees.length)
employees.shift()
console.log("Current Employees count due to an employee promoted" + employees.length)
// Phase - 2
// ### 7. Locate a Specific Employee by using their ID
const findEmployeeById = (id) => employees.find(employee => employee.id == id)
console.log("Employee By ID")
console.log(findEmployeeById(103))
// ### 8. Skill Check
let doWeHaveTheSKill = false;
let skill = "Vue"
for(let employee of employees) {
	doWeHaveTheSKill = employee.skills.includes(skill)
	if(doWeHaveTheSKill) return
}
console.log(`${skill} ${doWeHaveTheSKill}`)
// ### 9. Middle Management Transfer 
const deleteEmployeeById = (id) => {
	const indexOfEmployeeToDelete = employees.findIndex(employee => employee.id == id)
	if(indexOfEmployeeToDelete != -1) {
		employees.splice(indexOfEmployeeToDelete,1)
		console.log("Employee Deleted")
		console.log("Updated List")
		console.log(employees)
	} else {
		console.log("ID not found! Deletion failed, Try again correctly")
	}
}
deleteEmployeeById(102)
//### 10. Rank the Team
employees.sort((a, b) => b.performanceScore - a.performanceScore)
console.log("employee Leaderboard")
console.log(employees)
// ### 11.  Boss Level Challenge: Master Skill List 
let skills = []
employees.forEach(employee => skills.push(employee.skills))
skills = skills.flat()
skills = new Set(skills)
console.log("Unique skills")
console.log(skills)
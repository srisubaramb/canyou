employee_details = { 101:{"name":"John","salary":45000}, 102:{"name":"Alice","salary":72000}, 103:{"name":"David","salary":61000} }
highest_salary_employee = 101
for id , employee in employee_details.items():
	if employee_details[highest_salary_employee]["salary"] < employee["salary"]:
		highest_salary_employee = id
print(f"Highest salaray employee {employee_details[highest_salary_employee]["name"]} salary : {employee_details[highest_salary_employee]["salary"]}")
import utils

student_details_input = input("Enter student details: ")

student_details_input = utils.input_string_to_dict(student_details_input)

output_data = {"topper" : {} , "lower_score" : {} , "average_score" : 0 , "passed" : [] , "failed" : [] }
total_mark = 0
for name, mark in student_details_input.items():
	if output_data["topper"] == {}:
		output_data["topper"] = {name : mark}
	else:
		for topper_mark in output_data["topper"].values():
			if topper_mark < mark:
				output_data["topper"] = {name : mark}
	if output_data["lower_score"] == {}:
		output_data["lower_score"] = {name : mark}
	else:
			for lower_mark in output_data["lower_score"].values():
				if lower_mark > mark:
					output_data["lower_score"] = {name: mark}
	if mark > 35:
		output_data["passed"].append(name)
	else:
		output_data["failed"].append(name)
	total_mark += mark
output_data["average_score"] = total_mark / len(student_details_input)
for key , value in output_data.items():
	print(f"{key} : {value}")
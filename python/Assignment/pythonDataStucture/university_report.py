student_details = { "John":{"Python":90,"Java":85,"SQL":88}, "Alice":{"Python":95,"Java":98,"SQL":92}, "David":{"Python":70,"Java":65,"SQL":75} }
processed_student_details = {}
topper = ""
for name , subjects in student_details.items():
	total_mark = 0
	avg_mark = 0
	for mark in subjects.values():
		total_mark += mark
	avg_mark = total_mark / 4
	processed_student_details[name] = {"total_mark" : total_mark , "avg_mark" : avg_mark}
for name , marks in processed_student_details.items():
	if topper == "":
		topper = name
	elif processed_student_details[topper]["total_mark"] < marks["total_mark"]:
		topper = name
	print(f"{name} Total : {marks["total_mark"]} Average : {marks["avg_mark"]}", end=" ")
print(f"\nTopper : {topper}")
